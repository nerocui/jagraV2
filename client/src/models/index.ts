export type Action = {
	type: string,
	payload: any,
};

export type AuthState = {
	id: number,
	username: string,
	token: string,
	loggedIn: boolean,
};

export type ThemeState = {
	theme: string,
};

export type OrganizationState = {
	organizations: Array<Organization>,
};

export type State = {
	AuthState: AuthState,
	ThemeState: ThemeState,
	OrganizationState: OrganizationState,
};

export type Organization = {
	id: number,
	name: string,
	color: string,
	users: Array<User>,
	invitations: Array<Invitation>
};

export type Invitation = {
	organizationId: number,
	userId: number,
};

export type User = {
	id: number,
	username: string,
	email: string,
	created: Date,
	knownAs: string,
}


