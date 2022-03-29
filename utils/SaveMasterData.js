import AsyncStorage from '@react-native-async-storage/async-storage';

class SaveMasterData {
	saveUserData = async userData => {
		await AsyncStorage.setItem('userDetails', JSON.stringify(userData));
	};
}

export default SaveMasterData;
