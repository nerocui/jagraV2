import Axios from 'axios';
import JwtDecode from 'jwt-decode';

export function Register(username: string, password: string) {
	Axios.post('https://localhost:5001/api/auth/register', {username, password})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log('Auth Error: ', err);
		});
}

export function IsLoggedIn(token=localStorage.getItem('token') || ''): boolean {
	try {
		const decoded = JwtDecode(token);
		console.log('Decoded: ', decoded);
		return !decoded;
	} catch (e) {
		console.log('Failed to decode token: ', e);
		return false;
	}
}
