import React from 'react';
import styles from  './login-page.less';

const LoginPage = () => {
	return (
		<div className="login-page">
			<a href="/auth/google" className={ styles.loginButton }>Login with Google</a>
		</div>
	);
};
export default LoginPage;