import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Theme from '../theme';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color.white,
		zIndex: 100,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Loader = props => {
	const { size, isSmallLoader, isTransparent, isVisible } = props;
	return isTransparent ? (
		<Modal transparent={false} animationType="none" visible={isVisible} style={styles.modal}>
			<ActivityIndicator
				size="large"
				color={Theme.color.c004368}
				style={styles.activityIndicator}
			/>
		</Modal>
	) : (
		<Modal transparent={true} animationType="none" visible={isVisible} style={styles.modal}>
			<ActivityIndicator
				size="large"
				color={Theme.color.c004368}
				style={styles.activityIndicator}
			/>
		</Modal>
	);
};

export default Loader;
