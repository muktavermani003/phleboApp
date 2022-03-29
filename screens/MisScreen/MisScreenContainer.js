import React from 'react';
import MisScreenComponent from './MisScreenComponent';

const MisScreenContainer = props => {
	const customProps = { ...props };
	return <MisScreenComponent {...customProps} />;
};

export default MisScreenContainer;
