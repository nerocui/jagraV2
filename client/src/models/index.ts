export type Action = {
	type: string,
	payload: any,
};

export type AuthState = {
	token: string,
	loggedIn: boolean,
};

export type ThemeState = {
	theme: string;
};

export type State = {
	AuthState: AuthState,
	ThemeState: ThemeState,
};
