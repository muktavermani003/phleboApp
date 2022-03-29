import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Theme from '../../theme';
import ButtonComponent from '../../widgets/ButtonComponent';
import Header from '../../widgets/Header';
import Input from '../../widgets/Input';
import OverlayComponent from '../../widgets/OverlayComponent';
import styles from './AccountScreenStyle';

class AccountScreenUI extends Component {
	getProfileData = () => {
		const { onViewProfile } = this.props;
		return [
			{
				image: Theme.image.iconProfile,
				title: Theme.language.profile,
				hasIconArrow: true,
				buttonAction: onViewProfile,
			},
			{
				image: Theme.image.iconChangePassword,
				title: Theme.language.changePassword,
				hasIconArrow: false,
				buttonAction: () => this.changePasswordRef.onOpenModal(),
			},
		];
	};

	changePasswordComponent = () => {
		return (
			<View style={styles.passwordView}>
				<Input hasIconPassword placeholder={Theme.language.currentPassword} />
				<View style={styles.innerView}>
					<Input hasIconPassword placeholder={Theme.language.enterNewPassword} />
				</View>
				<Input hasIconPassword placeholder={Theme.language.reEnterNewPassword} />
				<View style={styles.changePasswordStyle}>
					<ButtonComponent title={Theme.language.changePassword} />
				</View>
			</View>
		);
	};

	handleLogout = async () => {
		const { actions } = this.props;
		this.logoutRBSheet.close();
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

	logOutClick = () => {
		this.logoutRef.onCloseModal();
		this.props.logOutClick();
	};

	logoutComponent = () => {
		return (
			<View style={styles.logoutView}>
				<Text style={styles.logoutMessage}>{Theme.language.sureLogoutMessage}</Text>
				<View style={styles.buttonView}>
					<ButtonComponent
						title={Theme.language.no}
						buttonStyle={styles.cancel}
						titleStyle={styles.logoutButton}
						onPress={() => this.logoutRef.onCloseModal()}
					/>
					<ButtonComponent
						title={Theme.language.yesLogout}
						buttonStyle={styles.apply}
						onPress={() => this.logOutClick()}
					/>
				</View>
			</View>
		);
	};

	render() {
		const {} = this.props;
		return (
			<View style={styles.container}>
				<Header
					headerName={Theme.language.account}
					hasIconNotification
					containerStyle={styles.containerStyle}
				/>
				<View style={styles.innerContainer}>
					{this.getProfileData().map((item, index) => {
						return (
							<TouchableOpacity
								style={[
									styles.profile,
									this.getProfileData().length - 1 !== index && styles.line,
								]}
								activeOpacity={0.8}
								onPress={item.buttonAction}>
								<View style={styles.innerProfileView}>
									<Image source={item.image} style={styles.iconProfile} />
									<Text style={styles.text}>{item.title}</Text>
								</View>
								{item.hasIconArrow ? (
									<Image
										source={Theme.image.iconRightArrow}
										style={styles.iconRightArrow}
									/>
								) : null}
							</TouchableOpacity>
						);
					})}
				</View>
				<ButtonComponent
					title={Theme.language.logout}
					buttonStyle={styles.buttonStyle}
					titleStyle={styles.titleStyle}
					onPress={() => this.logoutRef.onOpenModal()}
				/>
				<OverlayComponent
					onRef={ref => {
						this.changePasswordRef = ref;
					}}
					component={this.changePasswordComponent()}
					title={Theme.language.changePassword}
				/>
				<OverlayComponent
					onRef={ref => {
						this.logoutRef = ref;
					}}
					component={this.logoutComponent()}
					title={Theme.language.logout}
				/>
			</View>
		);
	}
}

export default AccountScreenUI;
