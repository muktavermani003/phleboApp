import { StyleSheet } from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.color.cf4f7f8,
		paddingHorizontal: Theme.normalScale(16),
	},
	iconContainer: {
		backgroundColor: Theme.color.c004368,
		height: Theme.normalScale(72),
		width: Theme.normalScale(72),
		borderRadius: Theme.normalScale(11.3),
		marginTop: Theme.verticalScale(63),
		alignSelf: 'center',
	},
	loginScreen: {
		marginTop: Theme.verticalScale(82),
	},
	loginText: {
		color: Theme.color.c394e59,
		lineHeight: Theme.font.LineHeight.lh16,
		fontSize: Theme.font.fontSize.fs18,
		letterSpacing: -Theme.normalScale(0.2),
		fontFamily: Theme.font.fontFamily.semiBold,
	},
	inputStyle: {
		backgroundColor: Theme.color.white,
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		elevation: Theme.verticalScale(2),
		borderRadius: Theme.normalScale(24),
		marginTop: Theme.verticalScale(24),
	},
	textInputStyle: {
		backgroundColor: Theme.color.white,
	},
	forgotPassword: {
		color: Theme.color.c004368,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.medium,
		textDecorationLine: 'underline',
		marginTop: Theme.verticalScale(16),
	},
	buttonStyle: {
		marginTop: Theme.verticalScale(35),
	},
});

export default styles;
