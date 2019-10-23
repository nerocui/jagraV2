import Axios from 'axios';
import TYPE from './type';

function DispatchLogin(token: string) {
	return {
		type: TYPE.LOGIN,
		payload: token,
	};
}

function DispatchLogout() {
	return {
		type: TYPE.LOGOUT,
		payload: '',
	};
}

function SetTheme(theme: string) {
	return {
		type: TYPE.SET_THEME,
		payload: theme,
	};
}

export function Login(username: string, password: string) {
	return (dispatch: any) => {
		Axios.post('https://localhost:5001/api/auth/login', {username, password})
			.then(res => {
				const { token } = res.data;
				localStorage.setItem('token', token);
				dispatch(DispatchLogin(token));
			})
			.catch(err => {
				console.log('Auth Error: ', err);
			});
	};
}

export function Logout() {
	return (dispatch: any) => {
		localStorage.setItem('token', '');
		dispatch(DispatchLogout());
	};
}

export function ToggleTheme() {
	return (dispatch: any) => {
		const theme = localStorage.getItem('theme');
		if (theme === 'light') {
			localStorage.setItem('theme', 'dark');
			dispatch(SetTheme('dark'));
		} else {
			localStorage.setItem('theme', 'light');
			dispatch(SetTheme('light'));
		}
	}
}
