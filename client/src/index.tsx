import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/routes';
import * as serviceWorker from './serviceWorker';
import { State, AuthState, ThemeState } from './models';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { IsLoggedIn } from './utils/AuthService';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

function GetInitialState(theme: string): State {
	const token: string = localStorage.getItem('token') || '';
	const AuthState: AuthState = {
		token,
		loggedIn: IsLoggedIn(token),
	};
	const ThemeState: ThemeState = {
		theme: theme
	};
	return {
		AuthState,
		ThemeState,
	};
}

function RenderApp(store: any, theme: string) {
	const style: CSSProperties = {
		backgroundColor: theme === 'light' ? 'white' : '#1d1d1d',
		width: '100vw',
		height: '100vh',
	};

	if (theme === 'dark') {
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
	}

	ReactDOM.render(
		<Provider store={store}>
			<Fabric style={style}>
				<App />
			</Fabric>
		</Provider>, 
		document.getElementById('root')
	);
}

function StartUp() {
	let theme = localStorage.getItem('theme');
	if (!theme) {
		localStorage.setItem('theme', 'light');
		theme = 'light';
	}
	const initialState: State = GetInitialState(theme);
	const store = createStoreWithMiddleware(
		rootReducer,
		initialState,
	);
	RenderApp(store, theme);
}

StartUp();
