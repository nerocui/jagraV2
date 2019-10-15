import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import CommandBar from './CommandBar';
import LandingBar from './LandingBar';

const NavBar = (props: any) => {
	if (props.loggedIn) {
		return (
			<CommandBar />
		);
	} else {
		return (
			<LandingBar />
		);
	}
};

function MapStateToProps(state: State) {
	return {
		loggedIn: state.AuthState.loggedIn,
	};
}

export default connect(MapStateToProps)(NavBar);
