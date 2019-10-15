import Axios from 'axios';
import TYPE from './type';

function DispatchLogin(token: string) {
	return {
		type: TYPE.LOGIN,
		payload: token,
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
