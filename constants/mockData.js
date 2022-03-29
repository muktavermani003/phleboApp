import Theme from '../theme';

const data = {
	leadScreen: [
		{
			date: '3 Dec’ 2021',
			array: [
				{
					status: Theme.language.accepted,
					title: 'Lead ID #015',
					address: '6 GF, 8/C-9/124, Sector-8 Rohini, New Delhi- 110085',
					time: '10:00 AM',
				},
				{
					status: Theme.language.new,
					title: 'Lead ID #016',
					address: '6 GF, 8/C-9/124, Sector-8 Rohini, New Delhi- 110085',
					time: '11:00 AM',
				},
			],
		},
		{
			date: '5 Dec’ 2021',
			array: [
				{
					status: Theme.language.accepted,
					title: 'Lead ID #017',
					address: '6 GF, 8/C-9/124, Sector-9, New Delhi- 110085',
					time: '09:00 AM',
				},
			],
		},
	],
	leadDetailScreen: {
		list: [
			{ name: 'Anirudh Roy', labelName: 'Patient Name' },
			{ name: 'Male', labelName: 'Gender' },
			{ name: '6-GF,8/C-9/124,Sector-8 Rohini,New Delhi,110085', labelName: 'Address' },
			{ name: 'XXXXXXXXXX', labelName: 'Contact No' },
		],
	},
	leadPostPaidScreen: [
		{
			testName: 'Cholesterol',
			time: 'TAT 4 hrs',
			labName: 'Performed at PATHKINDRATH Lab',
			remarks: { isRemark: false, label: '' },
			documents: { isDocument: false, label: '' },
			amount: '799',
		},
		{
			testName: 'CBC(Complete Blood Count)',
			time: 'TAT 4 hrs',
			labName: 'Performed at PATHKINDRATH Lab',
			remarks: { isRemark: true, label: 'View Special Remarks' },
			documents: { isDocument: true, label: 'Document' },
			amount: '799',
		},
		{
			testName: 'Covid Antibody',
			time: 'TAT 4 hrs',
			labName: 'Performed at PATHKINDRATH Lab',
			remarks: { isRemark: true, label: 'View Special Remarks' },
			documents: { isDocument: false, label: '' },
			amount: '799',
		},
	],
	testProfile: [
		{
			testName: 'Cholesterol',
			detail: 'Cholestrol, Complete Blood Count, Triglycerides',
			amount: 1000,
		},
		{
			testName: 'Lorem Ipsum',
			detail: 'Performed at PATHKINDRATH Lab',
			amount: 500,
		},
	],
	leadPostPaidBillingScreen: [
		{
			title: 'Blood Profile',
			amount: '1000',
		},
		{
			title: 'Covid Antibody',
			amount: '799',
		},
		{
			title: 'HomeCollection Charges',
			amount: '100',
		},
	],
	samplesScreen: [
		{
			testName: 'Complete Blood Count',
			result: 'Serum-12.00-g/dL',
		},
		{
			testName: 'Triglycerides',
			result: 'Serum-5.00-Micro Liter',
		},
		{
			testName: 'Complete BloodCount,Platelet Count',
			result: 'Whole blood, EDTA-10.00-g/dL',
		},
		{
			testName: 'Lorem Ipsum Dolor',
			result: 'Whole blood EDTA-10.00-g/dL',
		},
	],
	bloodProfile: [
		{
			title: 'Cholestrol',
			detail: 'TAT 4 hrs ',
			labName: 'Performed at PATHKINDRATH Lab',
		},
		{
			title: 'Triglycerides',
			detail: 'TAT 4 hrs ',
			labName: 'Performed at PATHKINDRATH Lab',
		},
		{
			title: 'Complete Blood Count',
			detail: 'TAT 4 hrs ',
			labName: 'Performed at PATHKINDRATH Lab',
		},
	],
	specialRemarks: [
		'Lorem ipsum dolor sit amet, consectetur elit.',
		'Proin ut lorem a nunc posuere faucibus vitae sit amet enim.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
		'Nullam porta massa id porta convallis.',
	],
	inventory: [
		{
			name: 'Needle',
			qty: 1,
		},
		{
			name: 'Swab',
			qty: 1,
		},
	],
	leadPostPaidRequiredDocuments: [
		{
			formName: 'Consent Form (CBC)',
		},
		{
			formName: 'History Form',
		},
	],
	viewProfileScreen: [
		{
			labelName: 'Full Name',
			details: 'Keshav Kumar',
		},
		{
			labelName: 'Gender',
			details: 'Male',
		},
		{
			labelName: 'Address',
			details: 'House No -21,E',
		},
		{
			labelName: 'Contact No.',
			details: '9718234567,9875675323',
		},
		{
			labelName: 'Reporting Manager',
			details: 'Kamlesh Kumar',
		},
		{
			labelName: 'Driving License ID',
			details: 'BR-2820020039384',
		},
		{
			labelName: 'Address',
			details: 'House No -21,E',
		},
		{
			labelName: 'Contact No.',
			details: '9718234567,9875675323',
		},
		{
			labelName: 'Reporting Manager',
			details: 'Kamlesh Kumar',
		},
		{
			labelName: 'Driving License ID',
			details: 'BR-2820020039384',
		},
	],
	checkForDate: [
		{
			leadGuid: '0f2b514d-32f7-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000030',
			address:
				'Bernardo Quintana 90, Ejido Modelo, Centro, 76000 Santiago de Querétaro, Qro., Mexico',
			scheduledate: '13-10-2021',
			scheduletime: '12:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: '4769d4ff-3319-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000034',
			address: 'Mr. Visserplein, 1011 PL Amsterdam, Netherlands',
			scheduledate: '13-10-2021',
			scheduletime: '01:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: 'cd440d9f-355a-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000044',
			address: 'H975+8F2, Aghapur, Sector 41, Noida, Uttar Pradesh 201303, India',
			scheduledate: '14-10-2021',
			scheduletime: '03:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: 'cd440d9f-355a-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000044',
			address: 'H975+8F2, Aghapur, Sector 41, Noida, Uttar Pradesh 201303, India',
			scheduledate: '14-10-2021',
			scheduletime: '03:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: 'cd440d9f-355a-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000044',
			address: 'H975+8F2, Aghapur, Sector 41, Noida, Uttar Pradesh 201303, India',
			scheduledate: '26-10-2021',
			scheduletime: '03:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: 'cd440d9f-355a-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000044',
			address: 'H975+8F2, Aghapur, Sector 41, Noida, Uttar Pradesh 201303, India',
			scheduledate: '26-10-2021',
			scheduletime: '03:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: 'cd440d9f-355a-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000044',
			address: 'H975+8F2, Aghapur, Sector 41, Noida, Uttar Pradesh 201303, India',
			scheduledate: '27-10-2021',
			scheduletime: '03:00:00.000000',
			_lstphleboleadList: null,
		},
		{
			leadGuid: 'cd440d9f-355a-11ec-89fa-0022486e4534',
			leadcode: 'LEAD000044',
			address: 'H975+8F2, Aghapur, Sector 41, Noida, Uttar Pradesh 201303, India',
			scheduledate: '28-10-2021',
			scheduletime: '03:00:00.000000',
			_lstphleboleadList: null,
		},

	],
};

export default data;
