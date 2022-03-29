import React, { Component } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import Theme from '../../theme';
import CardDetail from '../../widgets/CardDetail';
import Header from '../../widgets/Header';
import TabComponent from '../../widgets/TabComponent';
import styles from './LeadScreenStyle';
import data from '../../constants/mockData';
import OverlayComponent from '../../widgets/OverlayComponent';
import Input from '../../widgets/Input';
import ButtonComponent from '../../widgets/ButtonComponent';
import OTPComponent from '../../widgets/OTPComponent';
import Loader from '../../constants/Loader';

class LeadScreenUI extends Component {
	keyExtractor = (item, index) => index.toString();

	renderItem = ({ item }) => {
		const { onPressArrow, setSelectedItem, onPressAccept, onPressCall } = this.props;
		return (
			<CardDetail
				status={item.isaccept}
				title={Theme.language.LeadID + item.leadcode}
				address={item.address}
				time={item.scheduletime}
				isAccepted={item.isaccept}
				onPressArrow={() => onPressArrow(item)}
				onPressReject={() => {
					setSelectedItem(item);
					this.modalRef.onOpenModal();
				}}
				onPressAccept={() => onPressAccept(item)}
				onPressCall={() => onPressCall(item.contactno)}
			/>
		);
	};

	renderCompletedItem = ({ item }) => {
		const { onPressArrow } = this.props;
		return (
			<CardDetail
				status={item.status}
				title={item.title}
				address={item.address}
				time={item.time}
				isAccepted
				onPressArrow={onPressArrow}
				onPressReject={() => this.modalRef.onOpenModal()}
				rejectButtonText={Theme.language.addPatient}
				acceptButtonText={Theme.language.getConsent}
				acceptButtonStyle={styles.acceptButtonStyle}
				acceptTextStyle={styles.acceptTextStyle}
				onPressAccept={() => this.getConsentRef.onOpenModal()}
			/>
		);
	};

	rejectLeadComponent = () => {
		const { onChangeText, onRejectLead, reason, isLeadRejected, leadRejectedMsg } = this.props;
		return (
			<>
				{isLeadRejected ? (
					<>
						<Text style={styles.desc}>{leadRejectedMsg}</Text>
						<Text style={[styles.desc, styles.margin]}>{Theme.language.checkLead}</Text>
					</>
				) : (
					<>
						<Text style={styles.label}>{Theme.language.enterReason}</Text>
						<Input
							placeholder={Theme.language.reason}
							textInputStyle={styles.textInputStyle}
							multiline
							textAlignVertical="top"
							value={reason}
							onChangeText={onChangeText}
						/>
					</>
				)}
				<ButtonComponent
					isButtonDisable={!reason}
					title={isLeadRejected ? Theme.language.ok : Theme.language.submit}
					onPress={isLeadRejected ? this.closeModal : onRejectLead}
					buttonStyle={styles.buttonStyle}
				/>
			</>
		);
	};

	closeModal = () => {
		const { onCloseModal } = this.props;
		this.modalRef.onCloseModal();
		onCloseModal();
	};

	filterComponent = () => {
		return (
			<View style={styles.filterView}>
				<Text style={styles.show}>{Theme.language.show}</Text>
				<View style={styles.inputView}>
					<Input
						placeholder={Theme.language.fromMonth}
						editable={false}
						hasIconCalendar
						textInputStyle={styles.fromMonth}
					/>
					<Input
						placeholder={Theme.language.toMonth}
						editable={false}
						hasIconCalendar
						textInputStyle={styles.fromMonth}
					/>
				</View>
				<View style={styles.buttonView}>
					<ButtonComponent
						title={Theme.language.cancel}
						buttonStyle={styles.cancel}
						titleStyle={styles.titleStyle}
					/>
					<ButtonComponent title={Theme.language.apply} buttonStyle={styles.apply} />
				</View>
			</View>
		);
	};

	getConsentComponent = () => {
		const { onChange, otpValidation } = this.props;
		return (
			<View style={styles.consentView}>
				<Text style={styles.text}>{Theme.language.consentSms}</Text>
				<Text style={[styles.text, styles.marginTop]}>{Theme.language.shareOtp}</Text>
				<OTPComponent length={6} onChange={onChange} />
				<TouchableOpacity activeOpacity={0.8}>
					<Text style={styles.resendOtp}>{Theme.language.resendOtp}</Text>
				</TouchableOpacity>
				<ButtonComponent
					buttonStyle={styles.verifyButton}
					title={Theme.language.verify}
					isButtonDisable={otpValidation}
				/>
			</View>
		);
	};

	render() {
		const {
			onPressTab,
			activeTabIndex,
			onCloseModal,
			isLeadRejected,
			userInfoDetails,
			phleboLeadList,
			loading,
		} = this.props;
		const d = new Date();
		var hours = d.getHours();
		var timeZone =
			hours < 12
				? Theme.language.goodMorning
				: hours < 18
				? Theme.language.goodAfternoon
				: Theme.language.goodEvening;
		return (
			<View style={styles.container}>
				<Header
					hasIconNotification
					hasGreeting
					greeting={timeZone}
					headerName={userInfoDetails.userName}
				/>
				<Loader isVisible={loading} />
				<TabComponent
					data={[
						Theme.language.upcoming,
						Theme.language.completed,
						Theme.language.cancelled,
						Theme.language.rejected,
					]}
					activeTabIndex={activeTabIndex}
					onPressTab={onPressTab}
				/>
				<FlatList
					data={phleboLeadList}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}
					renderItem={({ item }) => {
						return (
							<>
								<Text style={styles.date}>{item.date}</Text>
								<FlatList
									data={item.array}
									keyExtractor={this.keyExtractor}
									showsVerticalScrollIndicator={false}
									renderItem={
										activeTabIndex === 0
											? this.renderItem
											: this.renderCompletedItem
									}
								/>
							</>
						);
					}}
				/>
				<OverlayComponent
					onRef={ref => {
						this.modalRef = ref;
					}}
					component={this.rejectLeadComponent()}
					title={isLeadRejected ? Theme.language.leadRejected : Theme.language.rejectLead}
					closeModal={onCloseModal}
				/>
				<OverlayComponent
					onRef={ref => {
						this.filterRef = ref;
					}}
					component={this.filterComponent()}
					title={Theme.language.filter}
				/>
				<OverlayComponent
					onRef={ref => {
						this.getConsentRef = ref;
					}}
					component={this.getConsentComponent()}
					title={Theme.language.getConsent}
				/>
				{activeTabIndex !== 0 ? (
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.filter}
						onPress={() => this.filterRef.onOpenModal()}>
						<Image source={Theme.image.iconFilter} style={styles.iconFilter} />
						<Text style={styles.filterText}>{Theme.language.filter}</Text>
					</TouchableOpacity>
				) : null}
			</View>
		);
	}
}

export default LeadScreenUI;
