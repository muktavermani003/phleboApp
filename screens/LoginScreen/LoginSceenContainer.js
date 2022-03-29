import React from 'react';
import LoginScreenComponent from './LoginScreenComponent';

const LoginScreenContainer = props => {
	const customProps = { ...props };
	return <LoginScreenComponent {...customProps} />;
};

export default LoginScreenContainer;
