import React from 'react';
import LeadScreenComponent from './LeadScreenComponent';

const LeadScreenContainer = props => {
	const customProps = { ...props };
	return <LeadScreenComponent {...customProps} />;
};

export default LeadScreenContainer;
