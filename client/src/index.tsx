import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ui/routes';
import * as serviceWorker from './serviceWorker';
import { State, AuthState } from './models';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { IsLoggedIn } from './utils/AuthService';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

function GetInitialState(): State {
	const token: string = localStorage.getItem('token') || '';
	const AuthState: AuthState = {
		token,
		loggedIn: IsLoggedIn(token),
	};
	return {
		AuthState
	};
}

function RenderApp(store: any) {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
		document.getElementById('root')
	);
}

function StartUp() {
	const initialState: State = GetInitialState();
	const store = createStoreWithMiddleware(
		rootReducer,
		initialState,
	);
	RenderApp(store);
}

StartUp();
