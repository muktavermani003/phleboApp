import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Theme from '../../theme';
import ButtonComponent from '../../widgets/ButtonComponent';
import OTPComponent from '../../widgets/OTPComponent';
import styles from './ForgotPasswordScreenStyle';
let sliderTimer = null;
class ForgotPasswordScreenUI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOtpTime: 3,
			resentBtnType: true,
		};
	}
	componentDidMount() {
		this.startTimer();
	}
	setSetTimerFromPrevious = () => {
		this.setState({
			showOtpTime: 5,
			resentBtnType: true,
		});
		this.startTimer();
	};
	startTimer = () => {
		sliderTimer = setInterval(() => {
			try {
				this.setState({ showOtpTime: --this.state.showOtpTime });
				if (this.state.showOtpTime === 0) {
					clearInterval(sliderTimer);
					this.setState({ resentBtnType: false });
				}
			} catch (error) {
				console.log(error);
			}
		}, 1000);
	};
	render() {
		const { onPressBack, onChange, otpValidation, onSubmitOtp, maskNumber, onResendOtpClick } =
			this.props;

		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backIcon} activeOpacity={0.8} onPress={onPressBack}>
					<Image source={Theme.image.iconBack} style={styles.iconBack} />
				</TouchableOpacity>
				<View style={styles.iconContainer} />
				<View style={styles.forgotPasswordText}>
					<Text style={styles.forgotPassword}>{Theme.language.forgotPassword}</Text>
					<Text style={styles.passwordOtpText}>
						{Theme.language.passwordOtpText} {maskNumber}
					</Text>
					<OTPComponent length={6} onChange={onChange} otpStyle={styles.otpBox} />

					{this.state.resentBtnType ? (
						<View style={styles.flex}>
							<Text style={styles.enterThe6DigitOtp}>
								{Theme.language.resendOtpIn}
							</Text>
							<Text style={styles.enterThe6DigitOtpTimer}>
								{' '}
								00:{this.state.showOtpTime}
							</Text>
						</View>
					) : (
						<TouchableOpacity onPress={onResendOtpClick}>
							<Text style={styles.resendOTP}>{Theme.language.resendOTP}</Text>
						</TouchableOpacity>
					)}
				</View>
				<ButtonComponent
					title={Theme.language.continue}
					buttonStyle={styles.buttonStyle}
					isButtonDisable={otpValidation}
					onPress={onSubmitOtp}
				/>
			</View>
		);
	}
}
export default ForgotPasswordScreenUI;
