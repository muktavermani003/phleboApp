import React, { Component } from 'react';
import { View } from 'react-native';
import Theme from '../../theme';
import styles from './MisScreenStyle';
import Header from '../../widgets/Header';
import ListEmptyComponent from '../../widgets/ListEmptyComponent';

class MisScreenUI extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Header
					hasIconNotification
					headerName={Theme.language.mis}
					containerStyle={styles.containerStyle}
				/>
				<ListEmptyComponent />
			</View>
		);
	}
}

export default MisScreenUI;
