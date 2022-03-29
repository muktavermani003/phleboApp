import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './LeadDetailScreenStyle';
import mockData from '../../constants/mockData';
import Header from '../../widgets/Header';
import ButtonComponent from '../../widgets/ButtonComponent';
import Theme from '../../theme';
import OverlayComponent from '../../widgets/OverlayComponent';
import Input from '../../widgets/Input';
import { rupeeSymbol } from '../../constants/Constant';

export default class LeadDetailScreenUI extends Component {
	getModal = () => {
		const { selectedModal } = this.props;
		const modals = {
			enterDetails: {
				component: this.enterDetailsComponent(),
				title: Theme.language.enterDetails,
			},
			chooseAction: {
				component: this.chooseActionComponent(),
				title: Theme.language.chooseAction,
			},
			requestReschedule: {
				component: this.requestRescheduleComponent(),
				title: Theme.language.requestReschedule,
			},
			markDelay: {
				component: this.markDelayComponent(),
				title: Theme.language.markDelay,
			},
			cancelLead: {
				component: this.cancelLeadComponent(),
				title: Theme.language.cancelLead,
			},
		};
		return modals[selectedModal];
	};

	enterDetailsComponent = () => {
		const { bodyTemperature, onChangeText, onSubmitDetails, onUploadPhoto } = this.props;
		return (
			<>
				<Input
					placeholder={Theme.language.currentTemperature}
					textInputStyle={styles.textInputStyle}
					value={bodyTemperature}
					onChangeText={text => onChangeText(text, 'bodyTemperature')}
				/>
				<Text style={styles.uploadPhoto}>{Theme.language.uploadPhoto}</Text>
				<Text style={styles.label}>{Theme.language.clickPicture}</Text>
				<TouchableOpacity
					style={styles.photoUpload}
					activeOpacity={0.8}
					onPress={onUploadPhoto}>
					<Image style={styles.iconUploadPhoto} source={Theme.image.iconUploadPhoto} />
				</TouchableOpacity>
				<ButtonComponent
					isButtonDisable={!bodyTemperature}
					title={Theme.language.submit}
					onPress={onSubmitDetails}
					buttonStyle={styles.button}
				/>
			</>
		);
	};

	chooseActionComponent = () => {
		return (
			<FlatList
				data={[
					Theme.language.requestReschedule,
					Theme.language.markDelay,
					Theme.language.cancelLead,
				]}
				keyExtractor={this.keyExtractor}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.componentScrollView}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() =>
								this.onOpenModal(
									index === 0
										? 'requestReschedule'
										: index === 1
										? 'markDelay'
										: 'cancelLead',
								)
							}>
							<Text style={[styles.text, index !== 2 && styles.line]}>{item}</Text>
						</TouchableOpacity>
					);
				}}
			/>
		);
	};

	requestRescheduleComponent = () => {
		const { date, time, remarks, onChangeText, onReschedule } = this.props;
		return (
			<>
				<Input
					placeholder={Theme.language.date}
					value={date}
					onChangeText={text => onChangeText(text, 'date')}
					hasIconCalendar
					editable={false}
					marginTop={Theme.verticalScale(16)}
				/>
				<Input
					placeholder={Theme.language.time}
					value={time}
					onChangeText={text => onChangeText(text, 'time')}
					hasIconTime
					marginTop={Theme.verticalScale(8)}
				/>
				<Input
					placeholder={Theme.language.remarks}
					textInputStyle={styles.remarks}
					multiline
					textAlignVertical="top"
					value={remarks}
					onChangeText={text => onChangeText(text, 'remarks')}
				/>
				<ButtonComponent
					isButtonDisable={!(date && time && remarks)}
					title={Theme.language.submit}
					onPress={onReschedule}
					buttonStyle={styles.button}
				/>
			</>
		);
	};

	markDelayComponent = () => {
		const { date, remarks, onChangeText } = this.props;
		return (
			<View style={styles.markDelay}>
				<Input
					placeholder={Theme.language.time}
					value={date}
					onChangeText={text => onChangeText(text, 'date')}
					hasIconTime
				/>
				<Input
					placeholder={Theme.language.remarks}
					textInputStyle={styles.remarks}
					multiline
					textAlignVertical="top"
					value={remarks}
					onChangeText={text => onChangeText(text, 'remarks')}
				/>
				<ButtonComponent
					isButtonDisable={!(date && remarks)}
					title={Theme.language.submit}
					buttonStyle={styles.button}
				/>
			</View>
		);
	};

	cancelLeadComponent = () => {
		const { remarks, onChangeText } = this.props;
		return (
			<>
				<Input
					placeholder={Theme.language.remarks}
					textInputStyle={styles.cancelRemark}
					multiline
					textAlignVertical="top"
					value={remarks}
					onChangeText={text => onChangeText(text, 'remarks')}
				/>
				<ButtonComponent
					isButtonDisable={!remarks}
					title={Theme.language.submit}
					buttonStyle={styles.button}
				/>
			</>
		);
	};

	onOpenModal = key => {
		this.modalRef.onOpenModal();
		this.props.onOpenModal(key);
	};

	render() {
		const { leadId, onPressBack, leadDetails } = this.props;

		return (
			<View style={styles.container}>
				<Header
					headerName={leadId}
					hasIconCall
					hasIconMenu
					onPressMenu={() => this.onOpenModal('chooseAction')}
					hasIconBack
					onPressBack={onPressBack}
					containerStyle={styles.containerStyle}
					headerStyle={styles.headerStyle}
				/>
				<ScrollView contentContainerStyle={styles.scrollView}>
					<Text style={styles.title}>{Theme.language.patientDetails}</Text>
					<View style={styles.patientDetails}>
						<View style={styles.bodyContainer}>
							<Text style={styles.detailHeading}>{Theme.language.patientName}</Text>
							<Text style={styles.detailResponse}>{leadDetails.patientname}</Text>
						</View>
						<View style={styles.bodyContainer}>
							<Text style={styles.detailHeading}>{Theme.language.gender}</Text>
							<Text style={styles.detailResponse}>{leadDetails.gendername}</Text>
						</View>
						<View style={styles.bodyContainer}>
							<Text style={styles.detailHeading}>{Theme.language.address}</Text>
							<Text style={styles.detailResponse}>{leadDetails.address}</Text>
						</View>
						<View style={styles.bodyContainer}>
							<Text style={styles.detailHeading}>{Theme.language.contactNo}</Text>
							<Text style={styles.detailResponse}>{leadDetails.contactno}</Text>
						</View>
					</View>
					<Text style={styles.title}>{Theme.language.sampleCollection}</Text>
					<View style={styles.secondView}>
						<Text style={styles.daytimeText}>
							{leadDetails.scheduledate}, {leadDetails.scheduletime}
						</Text>
					</View>
					<Text style={styles.title}>{Theme.language.bookedTests}</Text>
					<View style={styles.bookingtest}>
						{leadDetails._lsttestsummary &&
							leadDetails._lsttestsummary.map((item, index) => {
								return (
									<View>
										<View style={styles.bookTestData}>
											<Text style={styles.Response}>{item.testname}</Text>
											<Text style={styles.rupeeSymbol}>
												{rupeeSymbol}
												<Text style={styles.amountDetails}>
													{' '}
													{item.testamount}
												</Text>
											</Text>
										</View>
										{index === leadDetails._lsttestsummary.length - 1 ? null : (
											<View style={styles.lineStyle} />
										)}
									</View>
								);
							})}
					</View>
					<Text style={styles.title}>{Theme.language.sampleType}</Text>
					<View style={styles.sampletype}>
						<Text style={styles.Response}>{leadDetails.sampletype}</Text>
					</View>
				</ScrollView>
				<View style={styles.buttonStyle}>
					<ButtonComponent
						onPress={() => this.onOpenModal('enterDetails')}
						title={Theme.language.navigateToPatient}
					/>
				</View>
				<OverlayComponent
					onRef={ref => {
						this.modalRef = ref;
					}}
					component={this.getModal()?.component}
					title={this.getModal()?.title}
				/>
			</View>
		);
	}
}
