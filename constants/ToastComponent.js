import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: theme.color.fbd9d9,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: theme.verticalScale(16),
		paddingVertical: theme.verticalScale(8),
		width: '110%',
		zIndex: 1000,
	},
	message: {
		fontSize: theme.font.fontSize.fs14,
		fontFamily: theme.font.fontFamily.medium,
		lineHeight: theme.font.LineHeight.lh16,
		color: theme.color.footerLabel,
		maxWidth: '90%',
	},
	hitSlop: {
		left: theme.verticalScale(15),
		right: theme.verticalScale(15),
		top: theme.verticalScale(15),
		bottom: theme.verticalScale(15),
	},
	iconClose: {
		resizeMode: 'contain',
		height: theme.verticalScale(20),
		width: theme.verticalScale(20),
	},
});

class ToastComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			message: '',
		};
	}

	componentDidMount() {
		const { onRef } = this.props;
		if (onRef) {
			onRef(this);
		}
	}

	componentWillUnmount() {
		const { onRef } = this.props;
		if (onRef) {
			onRef(null);
		}
	}

	handleToastVisibility = (value, message) => {
		this.setState({
			isVisible: value,
			message,
		});
	};

	render() {
		const { isVisible, message } = this.state;
		return isVisible ? (
			<View style={styles.container}>
				<Text style={styles.message}>{message}</Text>
				<TouchableOpacity
					hitSlop={styles.hitSlop}
					activeOpacity={0.8}
					onPress={() => this.handleToastVisibility(false, '')}>
					<Image source={theme.image.iconCloseScanBar} style={styles.iconClose} />
				</TouchableOpacity>
			</View>
		) : null;
	}
}

export default ToastComponent;
