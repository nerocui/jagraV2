import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import { Register } from '../../utils/AuthService';
import { Link, withRouter } from 'react-router-dom';

const SignupPage = (props: any) => {
	const [username, SetUsername] = useState('');
	const [password, SetPassword] = useState('');
	const OnChangeUsername = (e: any) => {
		SetUsername(e.target.value);
	};
	const OnChangePassword = (e: any) => {
		SetPassword(e.target.value);
	};
	const OnSubmit = (e: any) => {
		e.preventDefault();

		Register(username, password);
		SetUsername('');
        SetPassword('');
        props.history.push('/');
	};
	return (
		<div>
			<form onSubmit={OnSubmit}>
				<input value={username} onChange={OnChangeUsername} />
				<input value={password} onChange={OnChangePassword} type="password"/>
				<button type="submit">Register</button>
			</form>
			<Link to="/">Login</Link>
		</div>
	);
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

const SignupPageWithRouter = withRouter(SignupPage);

export default connect(MapStateToProps)(SignupPageWithRouter);
