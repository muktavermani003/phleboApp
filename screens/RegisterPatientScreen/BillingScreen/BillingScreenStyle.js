import { StyleSheet } from 'react-native';
import Theme from '../../../theme';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.color.cf4f7f8,
		paddingHorizontal: Theme.normalScale(16),
	},
	card: {
		backgroundColor: Theme.color.white,
		borderRadius: Theme.normalScale(8),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		elevation: Theme.verticalScale(1),
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(18),
		marginVertical: Theme.verticalScale(16),
	},
	heading: {
		fontSize: Theme.font.fontSize.fs16,
		fontFamily: Theme.font.fontFamily.semiBold,
		color: Theme.color.c394e59,
	},
	patientProfile: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: Theme.normalScale(1),
		borderBottomColor: Theme.color.cccd1d3,
		paddingVertical: Theme.verticalScale(15),
	},
	testName: {
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs14,
		color: Theme.color.c394e59,
	},
	rupeeSymbol: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs16,
		fontWeight: '400',
	},
	amount: {
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs16,
		color: Theme.color.c394e59,
	},
	grossAmount: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Theme.verticalScale(16),
	},
	payableAmount: {
		fontFamily: Theme.font.fontFamily.semiBold,
		fontSize: Theme.font.fontSize.fs14,
		color: Theme.color.c394e59,
	},
	rupeeTotalSymbol: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs16,
		fontWeight: '500',
	},
	totalPayableAmount: {
		fontFamily: Theme.font.fontFamily.semiBold,
		fontSize: Theme.font.fontSize.fs16,
		color: Theme.color.c394e59,
	},
	amountRecieved: {
		fontFamily: Theme.font.fontFamily.bold,
		fontSize: Theme.font.fontSize.fs16,
		color: Theme.color.c394e59,
		paddingHorizontal: Theme.normalScale(8),
		lineHeight: Theme.verticalScale(24),
	},
	finalAmount: {
		backgroundColor: Theme.color.white,
		borderRadius: Theme.normalScale(8),
		marginVertical: Theme.verticalScale(8),
		paddingVertical: Theme.verticalScale(16),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		elevation: Theme.verticalScale(1),
		paddingHorizontal: Theme.normalScale(16),
	},
});

export default styles;
