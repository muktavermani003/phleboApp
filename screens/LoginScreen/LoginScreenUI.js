import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Loader from '../../constants/Loader';
import Theme from '../../theme';
import ButtonComponent from '../../widgets/ButtonComponent';
import Input from '../../widgets/Input';
import styles from './LoginScreenStyle';
import ToastComponent from '../../constants/ToastComponent';

class LoginScreenUI extends Component {
	handleToastVisibility = message => {
		this.toastRef.handleToastVisibility(true, message);
	};

	render() {
		const { onChangeText, userId, password, onLogin, onForgotPassword, loading } = this.props;

		return (
			<View style={styles.container}>
				<ToastComponent
					onRef={ref => {
						this.toastRef = ref;
					}}
				/>
				<Loader isVisible={loading} />
				<View style={styles.iconContainer} />
				<View style={styles.loginScreen}>
					<Text style={styles.loginText}>{Theme.language.loginText}</Text>
					<View style={styles.inputStyle}>
						<Input
							placeholder={Theme.language.enterUSerID}
							textInputStyle={styles.textInputStyle}
							onChangeText={text => onChangeText(text, 'userId')}
						/>
					</View>
					<View style={styles.inputStyle}>
						<Input
							hasIconPassword
							placeholder={Theme.language.enterPassword}
							textInputStyle={styles.textInputStyle}
							onChangeText={text => onChangeText(text, 'password')}
						/>
					</View>
					<TouchableOpacity onPress={onForgotPassword} activeOpacity={0.5}>
						<Text style={styles.forgotPassword}>{Theme.language.forgotPassword} ?</Text>
					</TouchableOpacity>
				</View>
				<ButtonComponent
					title={Theme.language.login}
					buttonStyle={styles.buttonStyle}
					isButtonDisable={!(userId && password)}
					onPress={onLogin}
				/>
			</View>
		);
	}
}

export default LoginScreenUI;
