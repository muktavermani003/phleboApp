import React, { Component } from 'react';
import { Linking } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../redux/actions/apiActions';
import * as signupActions from '../../redux/actions/signupActions';
import Theme from '../../theme';
import LeadScreenUI from './LeadScreenUI';

class LeadScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.props = props.customProps;
		this.state = {
			activeTabIndex: 0,
			reason: '',
			isLeadRejected: false,
			otpValue: '',
			otpValidation: true,
			phleboLeadList: [],
			setSelectedItem: {},
			leadRejectedMsg: '',
		};
	}

	onPressTab = index => {
		this.setState({
			activeTabIndex: index,
		});
	};

	onCloseModal = () => {
		this.setState({
			reason: '',
			isLeadRejected: false,
		});
	};

	onChangeText = text => {
		this.setState({
			reason: text,
		});
	};

	onRejectLead = () => {
		let { userInfoDetails } = this.props;
		let params = {
			userGuid: userInfoDetails.userGuid,
			menuGuid: '',
			IPAddress: '192.168.2.25',
			Data: {
				leadGuid: this.state.setSelectedItem.leadGuid,
				acceptreject: 'R',
				remarks: this.state.reason,
			},
		};
		this.callLeadAcceptRejectAPI(params, 'leadAcceptRejectR');
	};

	onPressAccept = item => {
		this.setState({
			setSelectedItem: item,
		});
		let { userInfoDetails } = this.props;
		let params = {
			userGuid: userInfoDetails.userGuid,
			menuGuid: '',
			IPAddress: '192.168.2.25',
			Data: {
				leadGuid: item.leadGuid,
				acceptreject: 'A',
				remarks: '',
			},
		};
		this.callLeadAcceptRejectAPI(params, 'leadAcceptRejectA');
	};

	callLeadAcceptRejectAPI = (params, tag) => {
		let { actions, userInfoDetails } = this.props;
		actions.callAPI(
			'FuncForPhMAppToPhleboLeadAcceptReject',
			'post',
			params,
			userInfoDetails.accessToken,
			tag,
		);
	};

	onPressArrow = item => {
		const { actions, userInfoDetails } = this.props;
		userInfoDetails.isClient = item.isclient;
		userInfoDetails.isLab = item.islab;
		userInfoDetails.leadGuid = item.leadGuid;
		userInfoDetails.leadCode = item.leadcode;
		actions.setUserInfoDetails(userInfoDetails);
		this.props.navigation.navigate(Theme.navigations.LEAD_DETAIL_SCREEN, {
			leadGuid: item.leadGuid,
			leadcode: 'Lead ID #' + item.leadcode,
		});
	};

	onChangeOtp = (value, otpValidation) => {
		this.setState({
			otpValue: value,
			otpValidation,
		});
	};
	setSelectedItem = item => {
		this.setState({
			setSelectedItem: item,
		});
	};

	sortDataWise = phleboleadList => {
		let allDates = [];
		phleboleadList.forEach(value => {
			allDates.push(value.scheduledate);
		});
		allDates = Array.from(new Set(allDates));

		let finalPhleboleadList = [];
		allDates.forEach(date => {
			let filteredData = phleboleadList.filter(values => values.scheduledate === date);
			const eachItemFinal = {
				date: date,
				array: filteredData,
			};
			finalPhleboleadList.push(eachItemFinal);
		});
		return finalPhleboleadList;
	};

	onPressCall = number => {
		Linking.openURL(`tel:${number.toString()}`);
	};

	componentDidMount() {
		let { actions, userInfoDetails } = this.props;

		let params = {
			userGuid: userInfoDetails.userGuid,
			menuGuid: '',
			IPAddress: '192.168.2.25',
			Data: {},
		};
		actions.callAPI(
			'FuncForPHMAppToGetPhlebolead',
			'post',
			params,
			userInfoDetails.accessToken,
			'getPhlebolead',
		);
	}

	async UNSAFE_componentWillReceiveProps(newProps) {
		if (newProps.responseData && newProps.responseData.tag) {
			let tagname = newProps.responseData.tag;
			if (tagname === 'getPhlebolead') {
				if (newProps.responseData.statusCode === '0') {
					let phleboList = newProps.responseData.data._lstphleboleadList;
					phleboList = this.sortDataWise(phleboList);
					this.setState({
						phleboLeadList: phleboList,
					});
				} else {
					Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
				}
			} else if (tagname === 'leadAcceptRejectR') {
				if (newProps.responseData.statusCode === '0') {
					this.setState({
						isLeadRejected: true,
						leadRejectedMsg:
							'You have rejected Lead ID #' +
							this.state.setSelectedItem.leadcode +
							' for ' +
							this.state.setSelectedItem.scheduledate,
					});
					this.componentDidMount();
				}
				Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
			} else if (tagname === 'leadAcceptRejectA') {
				if (newProps.responseData.statusCode === '0') {
					this.componentDidMount();
				}
				Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
			}
		}
	}
	render() {
		const {
			activeTabIndex,
			reason,
			isLeadRejected,
			otpValidation,
			phleboLeadList,
			leadRejectedMsg,
		} = this.state;
		const userInfo = this.props.userInfoDetails;
		return (
			<LeadScreenUI
				onPressTab={this.onPressTab}
				onCloseModal={this.onCloseModal}
				onChangeText={this.onChangeText}
				onRejectLead={this.onRejectLead}
				activeTabIndex={activeTabIndex}
				reason={reason}
				isLeadRejected={isLeadRejected}
				onPressArrow={this.onPressArrow}
				onChange={this.onChangeOtp}
				otpValidation={otpValidation}
				userInfoDetails={userInfo}
				phleboLeadList={phleboLeadList}
				loading={this.props.loading}
				setSelectedItem={this.setSelectedItem}
				leadRejectedMsg={leadRejectedMsg}
				onPressAccept={this.onPressAccept}
				onPressCall={this.onPressCall}
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
export default connect(mapStateToProps, mapDispatchToProps)(LeadScreenComponent);
