import { Action, AuthState } from '../models';
import TYPE from '../action/type';
import { IsLoggedIn } from '../utils/AuthService';

export const initialAuthState: AuthState = {
	token: '',
	loggedIn: false,
};

export default (state = initialAuthState, action: Action) => {
	switch (action.type) {
		case TYPE.LOGIN:
			return Object.assign({}, state, { token: action.payload, loggedIn: IsLoggedIn(action.payload) });
		default:
			return state;
	}
};
