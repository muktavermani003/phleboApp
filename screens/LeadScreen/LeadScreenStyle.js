import { StyleSheet } from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
	acceptButtonStyle: {
		backgroundColor: Theme.color.white,
		borderColor: Theme.color.c004368,
		borderWidth: Theme.normalScale(2),
	},
	acceptTextStyle: {
		color: Theme.color.c004368,
	},
	desc: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		lineHeight: Theme.font.LineHeight.lh20,
		fontFamily: Theme.font.fontFamily.medium,
		marginTop: Theme.verticalScale(12),
	},
	margin: {
		marginTop: Theme.verticalScale(10),
		marginBottom: Theme.verticalScale(30),
	},
	label: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		lineHeight: Theme.font.LineHeight.lh22,
		fontFamily: Theme.font.fontFamily.medium,
		marginBottom: Theme.verticalScale(15),
		marginTop: Theme.verticalScale(20),
	},
	textInputStyle: {
		height: Theme.verticalScale(104),
		marginBottom: Theme.verticalScale(16),
	},
	buttonStyle: {
		marginBottom: Theme.verticalScale(16),
	},
	filterView: {
		marginTop: Theme.verticalScale(16),
	},
	show: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.bold,
	},
	inputView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Theme.verticalScale(16.5),
	},
	fromMonth: {
		width: Theme.normalScale(160),
	},
	buttonView: {
		marginTop: Theme.verticalScale(48),
		marginBottom: Theme.verticalScale(16),
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cancel: {
		width: Theme.normalScale(136),
		backgroundColor: Theme.color.white,
		borderColor: Theme.color.c004368,
		borderWidth: Theme.normalScale(2),
	},
	titleStyle: {
		color: Theme.color.c004368,
	},
	apply: {
		width: Theme.normalScale(176),
	},
	consentView: {
		marginTop: Theme.verticalScale(10),
	},
	text: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		lineHeight: Theme.font.LineHeight.lh22,
		fontFamily: Theme.font.fontFamily.medium,
	},
	marginTop: {
		marginBottom: Theme.verticalScale(29),
	},
	resendOtp: {
		color: Theme.color.c004368,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.medium,
		textDecorationLine: 'underline',
		marginTop: Theme.verticalScale(26),
	},
	verifyButton: {
		marginTop: Theme.verticalScale(36),
		marginBottom: Theme.verticalScale(24),
	},
	container: {
		flex: 1,
		backgroundColor: Theme.color.cf4f7f8,
	},
	scrollView: {
		paddingBottom: Theme.verticalScale(10),
	},
	date: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs18,
		lineHeight: Theme.font.LineHeight.lh24,
		fontFamily: Theme.font.fontFamily.extraBold,
		marginLeft: Theme.normalScale(18),
		marginTop: Theme.verticalScale(23),
	},
	filter: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: Theme.verticalScale(8),
		paddingHorizontal: Theme.normalScale(24),
		borderRadius: Theme.normalScale(100),
		backgroundColor: Theme.color.cebf4f8,
		borderColor: Theme.color.c004368,
		borderWidth: Theme.normalScale(2),
		position: 'absolute',
		bottom: Theme.verticalScale(25),
		alignSelf: 'center',
		shadowColor: Theme.color.shadow,
		shadowOpacity: 0.31,
		elevation: Theme.verticalScale(5),
	},
	iconFilter: {
		height: Theme.normalScale(16),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
	filterText: {
		fontFamily: Theme.font.fontFamily.bold,
		fontSize: Theme.font.fontSize.fs12,
		color: Theme.color.c004368,
		marginLeft: Theme.normalScale(6),
	},
});

export default styles;
