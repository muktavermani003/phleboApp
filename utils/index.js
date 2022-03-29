import { decode, encode } from 'base-64';
import CryptoJS from 'react-native-crypto-js';

let Utils = {
	getEncryptedValue: function (value) {
		let key = 'pathkindlabsoulk';
		var iv = this.getRandomString(16);
		let ciphertext = this.encrypt(iv, key, value);
		let ciphertextConversion = ciphertext + ':' + iv;
		let encyrptedValue = encode(ciphertextConversion);
		console.log('encyrptedValue  - ', encyrptedValue);
		console.log('getDecryptedValue  - ', this.getDecryptedValue(encyrptedValue));
		return encyrptedValue;
	},
	getRandomString: function (length) {
		var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var result = '';
		for (var i = 0; i < length; i++) {
			result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
		}
		return result;
	},

	encrypt: function (iv, passPhrase, plainText) {
		var encrypted = CryptoJS.AES.encrypt(
			CryptoJS.enc.Utf8.parse(plainText),
			CryptoJS.enc.Utf8.parse(passPhrase),
			{
				iv: CryptoJS.enc.Utf8.parse(iv),
				keySize: 128 / 8,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7,
			},
		);
		return encrypted;
	},
	getDecryptedValue(val) {
		// let key = "0123456789123456";
		let key = 'pathkindlabsoulk';
		let encryptedVal = decode(val);
		let decyrptedValue = this.decrypt(
			encryptedVal.split(':')[1],
			encryptedVal.split(':')[0],
			key,
		);
		return decyrptedValue;
	},

	decrypt(iv, encText, key) {
		var decrypt = CryptoJS.AES.decrypt(encText, CryptoJS.enc.Utf8.parse(key), {
			iv: CryptoJS.enc.Utf8.parse(iv),
			keySize: 128 / 8,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		}).toString(CryptoJS.enc.Utf8);
		return decrypt;
	},

	appConstants() {
		return {
			numericRegEx: /^\d+(\.\d{1,2})?$/,
		};
	},
};

module.exports = Utils;
