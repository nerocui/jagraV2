import React, { useState } from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import { Login } from '../../action';

const LoginPage = (props: any) => {
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

		props.Login(username, password);
		SetUsername('');
		SetPassword('');
	};
	return (
		<div>
			<form onSubmit={OnSubmit}>
				<input value={username} onChange={OnChangeUsername} />
				<input value={password} onChange={OnChangePassword} type="password"/>
				<button type="submit">Login</button>
			</form>
			<div>
				{props.token}
			</div>
		</div>
	);
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
		token: state.AuthState.token,
	};
}

export default connect(MapStateToProps, {Login})(LoginPage);
