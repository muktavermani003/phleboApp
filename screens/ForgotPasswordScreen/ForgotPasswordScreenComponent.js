import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../redux/actions/apiActions';
import * as signupActions from '../../redux/actions/signupActions';
import Theme from '../../theme';
import ForgotPasswordScreenUI from './ForgotPasswordScreenUI';

class ForgotPasswordScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.props = props.customProps;
		this.state = {
			otpValue: '',
			otpValidation: true,
			otpInfo: {},
			otpGuid: '',
			userName: '',
		};
	}

	componentDidMount() {
		let dataItem = this.props.route.params.dataItem;
		let userNameForResentOtp = this.props.route.params.userName;
		this.setState({
			otpInfo: dataItem,
			otpGuid: dataItem.otpGuid,
			userName: userNameForResentOtp,
		});
	}

	onPressBack = () => {
		this.props.navigation.goBack();
	};

	onChangeOtp = (value, otpValidation) => {
		this.setState({
			otpValue: value,
			otpValidation,
		});
	};

	onSubmitOtp = () => {
		if (!this.state.otpValidation && this.state.otpValue.length === 6) {
			let { actions } = this.props;
			let params = {
				userGuid: this.state.otpInfo.userGuid,
				Data: {
					otpGuid: this.state.otpGuid,
					otp: this.state.otpValue,
				},
			};
			actions.callAPI('FuncForHomeAppToVerifyOtp', 'post', params, 'token', 'verifyOtp');
		} else {
			Theme.showMessage.showSnackbar(Theme.language.enterOtp);
		}
		//this.props.navigation.navigate(Theme.navigations.SET_NEW_PASSWORD_SCREEN);
	};
	onResendOtpClick = () => {
		let { actions } = this.props;
		let params = {
			Data: {
				username: this.state.userName,
			},
		};
		actions.callAPI('FuncForHomeAppToReSendOtp', 'post', params, 'token', 'reSendOtp');
	};

	async UNSAFE_componentWillReceiveProps(newProps) {
		if (newProps.responseData && newProps.responseData.tag) {
			let tagname = newProps.responseData.tag;
			if (tagname === 'verifyOtp') {
				if (newProps.responseData.statusCode === '0') {
					setTimeout(() => {
						Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
					}, 500);
					this.props.navigation.replace(Theme.navigations.SET_NEW_PASSWORD_SCREEN, {
						dataItem: this.state.otpInfo,
					});
				} else {
					Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
				}
			} else if (tagname === 'reSendOtp') {
				if (newProps.responseData.statusCode === '0') {
					let data = newProps.responseData.data;
					this.setState({
						otpGuid: data.otpGuid,
					});
					this.refs.child.setSetTimerFromPrevious();
					Theme.showMessage.showSnackbar(Theme.language.resentOtpsentAlert);
				} else {
					Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
				}
			}
		}
	}

	render() {
		const { otpValidation } = this.state;
		let maskNumber = this.state.otpInfo.mobilenomask
			? this.state.otpInfo.mobilenomask.split(',')[0]
			: '';

		return (
			<ForgotPasswordScreenUI
				props={this.props}
				onPressBack={this.onPressBack}
				onChange={this.onChangeOtp}
				otpValidation={otpValidation}
				onSubmitOtp={this.onSubmitOtp}
				maskNumber={maskNumber}
				onResendOtpClick={this.onResendOtpClick}
				ref="child"
			/>
		);
	}
}

const mapStateToProps = state => ({
	userInfoDetails: state.userInfoReducerConfig.userInfoDetails,
	responseData: state.apiResponseDataConfig.responseData,
});

const ActionCreators = Object.assign({}, apiActions, signupActions);
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreenComponent);
