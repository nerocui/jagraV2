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

export type Organization = {
	Id: number,
	Name: string,
	Users: Array<User>,
	Invitations: Array<Invitation>
};

export type Invitation = {
	OrganizationId: number,
	UserId: number,
};

export type User = {
	Id: number,
	Username: string,
	Email: string,
	Create: Date,
	KnownAs: string,
}


