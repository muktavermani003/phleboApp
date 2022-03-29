import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../../redux/actions/signupActions';
import Theme from '../../theme';
import AccountScreenUI from './AccountScreenUI';

class AccountScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.props = props.customProps;
	}

	onViewProfile = () => {
		this.props.navigation.navigate(Theme.navigations.VIEW_PROFILE_SCREEN);
	};

	logOutClick = async () => {
		const { actions } = this.props;
		await AsyncStorage.removeItem('userDetails');
		actions.setUserInfoDetails({
			userName: '',
			accessToken: '',
			userGuid: '',
			roleGuid: '',
			profileName: '',
			profilepicture: '',
			profilepicturepath: '',
			centerclientGuid: '',
			clientTypeGuid: '',
			clientlabType: '',
		});
	};

	render() {
		return (
			<AccountScreenUI onViewProfile={this.onViewProfile} logOutClick={this.logOutClick} />
		);
	}
}

const mapStateToProps = state => ({
	userInfoDetails: state.userInfoReducerConfig.userInfoDetails,
});

const ActionCreators = Object.assign({}, signupActions);
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AccountScreenComponent);
