import Axios from 'axios';
import TYPE from './type';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { GetRootURL } from '../utils/DomainService';
import { TaskForCreationDto } from '../models';


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

function SetOrganizations(organizations: Array<any>) {
	return {
		type: TYPE.SET_ORGANIZATIONS,
		payload: organizations,
	};
}

function SetOrganization(org: any) {
	return {
		type: TYPE.SET_ORGANIZATION,
		payload: org,
	};
}

function AddTask(task: any) {
	return {
		type: TYPE.ADD_TASK,
		payload: task,
	};
}

export function CreateTask(task: TaskForCreationDto) {
	return (dispatch: any) => {
		Axios.post(GetRootURL() + '/api/task/create', {...task})
			.then(res => {
				dispatch(AddTask(res.data));
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export function FetchOrganizationById(id: number) {
	return (dispatch: any) => {
		Axios.get(GetRootURL() + '/api/organization/' + id.toString())
			.then(res => {
				console.log(res);
				dispatch(SetOrganization(res.data));
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export function FetchOrganizationsByUser(userId: number) {
	return (dispatch: any) => {
		Axios.get(GetRootURL() + '/api/organization/byuser?userId=' + userId.toString())
			.then(res => {
				dispatch(SetOrganizations(res.data));
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export function Login(username: string, password: string) {
	return (dispatch: any) => {
		Axios.post(GetRootURL() + '/api/auth/login', {username, password})
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
			loadTheme({
				palette: {
				  themePrimary: '#47afff',
				  themeLighterAlt: '#03070a',
				  themeLighter: '#0b1c29',
				  themeLight: '#15354d',
				  themeTertiary: '#2b6999',
				  themeSecondary: '#3f9ae0',
				  themeDarkAlt: '#5ab7ff',
				  themeDark: '#73c3ff',
				  themeDarker: '#98d2ff',
				  neutralLighterAlt: '#262626',
				  neutralLighter: '#2f2f2f',
				  neutralLight: '#3d3d3d',
				  neutralQuaternaryAlt: '#464646',
				  neutralQuaternary: '#4d4d4d',
				  neutralTertiaryAlt: '#6b6b6b',
				  neutralTertiary: '#c8c8c8',
				  neutralSecondary: '#d0d0d0',
				  neutralPrimaryAlt: '#dadada',
				  neutralPrimary: '#ffffff',
				  neutralDark: '#f4f4f4',
				  black: '#f8f8f8',
				  white: '#1d1d1d',
				}
			});
			dispatch(SetTheme('dark'));
		} else {
			localStorage.setItem('theme', 'light');
			loadTheme({
				palette: {
				  themePrimary: '#0078d4',
				  themeLighterAlt: '#eff6fc',
				  themeLighter: '#deecf9',
				  themeLight: '#c7e0f4',
				  themeTertiary: '#71afe5',
				  themeSecondary: '#2b88d8',
				  themeDarkAlt: '#106ebe',
				  themeDark: '#005a9e',
				  themeDarker: '#004578',
				  neutralLighterAlt: '#f8f8f8',
				  neutralLighter: '#f4f4f4',
				  neutralLight: '#eaeaea',
				  neutralQuaternaryAlt: '#dadada',
				  neutralQuaternary: '#d0d0d0',
				  neutralTertiaryAlt: '#c8c8c8',
				  neutralTertiary: '#c2c2c2',
				  neutralSecondary: '#858585',
				  neutralPrimaryAlt: '#4b4b4b',
				  neutralPrimary: '#333333',
				  neutralDark: '#272727',
				  black: '#1d1d1d',
				  white: '#ffffff'
				}
			  });
			dispatch(SetTheme('light'));
		}
	}
}
