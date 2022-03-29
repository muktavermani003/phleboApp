import React, { Component } from 'react';
import Theme from '../../theme';
import LeadDetailScreenUI from './LeadDetailScreenUI';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../redux/actions/apiActions';
import * as signupActions from '../../redux/actions/signupActions';

class LeadDetailScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.props = props.customProps;
		this.state = {
			selectedModal: '',
			bodyTemperature: '',

			remarks: '',
			leadDetails: {},
		};
	}

	onOpenModal = key => {
		this.setState({
			selectedModal: key,
		});
	};

	onChangeText = (text, field) => {
		this.setState({
			[field]: text,
		});
	};

	onSubmitDetails = () => {
		this.props.navigation.navigate(Theme.navigations.REGISTER_PATIENT_SCREEN);
	};

	onPressBack = () => {
		this.props.navigation.goBack();
	};

	componentDidMount() {
		let { actions, userInfoDetails } = this.props;
		const { route } = this.props;
		const { leadGuid } = route.params || {};
		let params = {
			userGuid: userInfoDetails.userGuid,
			menuGuid: '',
			IPAddress: '192.168.2.25',
			Data: {
				leadGuid: leadGuid,
			},
		};
		actions.callAPI(
			'FuncForPHMAppToGetleadbookingdetail',
			'post',
			params,
			userInfoDetails.accessToken,
			'leadbookingdetail',
		);
	}

	async UNSAFE_componentWillReceiveProps(newProps) {
		if (newProps.responseData && newProps.responseData.tag) {
			let tagname = newProps.responseData.tag;
			if (tagname === 'leadbookingdetail') {
				if (newProps.responseData.statusCode === '0') {
					let res = newProps.responseData.data;
					this.setState({
						leadDetails: res,
					});
				} else {
					Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
				}
			}
		}
	}

	render() {
		const { selectedModal, bodyTemperature, leadDetails } = this.state;
		const { route } = this.props;
		const { leadcode } = route.params || {};
		return (
			<LeadDetailScreenUI
				leadId={leadcode}
				selectedModal={selectedModal}
				onOpenModal={this.onOpenModal}
				bodyTemperature={bodyTemperature}
				onChangeText={this.onChangeText}
				onSubmitDetails={this.onSubmitDetails}
				onUploadPhoto={this.onUploadPhoto}
				onReschedule={this.onReschedule}
				onPressBack={this.onPressBack}
				leadDetails={leadDetails}
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
export default connect(mapStateToProps, mapDispatchToProps)(LeadDetailScreenComponent);
