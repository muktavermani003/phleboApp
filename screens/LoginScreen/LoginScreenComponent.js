import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../redux/actions/apiActions';
import * as signupActions from '../../redux/actions/signupActions';
import Theme from '../../theme';
import Utils from '../../utils';
import SaveMasterData from '../../utils/SaveMasterData';
import LoginScreenUI from './LoginScreenUI';

const saveMasterData = new SaveMasterData();

class LoginScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: 'Pathkind011',
			password: 'Admin@123',
		};
	}

	onChangeText = (text, field) => {
		this.setState({
			[field]: text,
		});
	};

	onLogin = () => {
		if (!this.state.userId) {
			Theme.showMessage.showSnackbar(Theme.language.plzEnterUserName);
		} else if (!this.state.password) {
			Theme.showMessage.showSnackbar(Theme.language.plzEnterPassword);
		} else {
			let { actions } = this.props;
			let encyrptedValue = Utils.getEncryptedValue(this.state.password);
			let params = {
				Data: {
					username: this.state.userId,
					password: encyrptedValue,
				},
				userGuid: null,
				IPAddress: '192.168.2.25',
				version: '',
			};
			actions.callAPI(
				'FuncForHomeAppToValidateLogin',
				'post',
				params,
				'token',
				'validateLogin',
			);
		}
	};

	onForgotPassword = () => {
		if (!this.state.userId) {
			Theme.showMessage.showSnackbar(Theme.language.plzEnterUserName);
		} else {
			let { actions } = this.props;
			let params = {
				Data: {
					username: this.state.userId,
				},
			};
			actions.callAPI('FuncForHomeAppToSendOtp', 'post', params, 'token', 'homeAppToSendOtp');
		}
	};

	showApiError = message => {
		this.refs.child.handleToastVisibility(message);
	};

	async UNSAFE_componentWillReceiveProps(newProps) {
		if (newProps.responseData && newProps.responseData.tag) {
			let tagname = newProps.responseData.tag;

			let { actions, userInfoDetails } = this.props;
			if (tagname === 'validateLogin') {
				if (newProps.responseData.statusCode === '0') {
					let data = newProps.responseData.data;
					userInfoDetails.userName = data.fullName;
					userInfoDetails.accessToken = newProps.responseData.accessToken;
					userInfoDetails.userGuid = data.userGuid;
					userInfoDetails.profileName = data.profileName;
					userInfoDetails.profilepicture = data.profilepicture;
					userInfoDetails.profilepicturepath = data.profilepicturepath;
					userInfoDetails.centerclientGuid = data.centerclientGuid;
					userInfoDetails.clientTypeGuid = data.clientTypeGuid;
					userInfoDetails.clientlabType = data.clientlabType;
					saveMasterData.saveUserData(userInfoDetails);
					actions.setUserInfoDetails(userInfoDetails);
				} else {
					this.showApiError(newProps.responseData.statusMessage);
				}
			} else if (tagname === 'homeAppToSendOtp') {
				if (newProps.responseData.statusCode === '0') {
					let data = newProps.responseData.data;
					this.props.navigation.navigate(Theme.navigations.FORGOT_PASSWORD_SCREEN, {
						dataItem: data,
						userName: this.state.userId,
					});
					Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
				} else {
					this.showApiError(newProps.responseData.statusMessage);
				}
			}
		}
	}

	render() {
		const { userId, password } = this.state;

		return (
			<LoginScreenUI
				onChangeText={this.onChangeText}
				userId={userId}
				password={password}
				onLogin={this.onLogin}
				onForgotPassword={this.onForgotPassword}
				loading={this.props.loading}
				ref="child"
			/>
		);
	}
}
const mapStateToProps = state => ({
	userInfoDetails: state.userInfoReducerConfig.userInfoDetails,
	responseData: state.apiResponseDataConfig.responseData,
	loading: state.apiResponseDataConfig.loading,
});

const ActionCreators = Object.assign({}, apiActions, signupActions);
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenComponent);
