import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NavBar from '../components/NavBar';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/DashboardPage';
import SignupPage from '../pages/SignupPage';
import OrganizationEditor from '../pages/OrganizationEditor';
import { State } from '../../models';

const routes = (props: any) => {
	return (
		<Router>
			<div className={`router-wrapper ${props.theme === 'dark' ? 'dark' : 'light'}`}>
				<NavBar />
				<Switch>
					<PublicRoute path='/' exact component={LoginPage} />
					<PublicRoute path='/signup' exact component={SignupPage} />
					<PrivateRoute path='/dashboard' component={Dashboard} />
					<PrivateRoute path='/organizations/new' component={OrganizationEditor} />
					
				</Switch>
			</div>
		</Router>
	);
};

function MapStateToProps(state: State) {
	return {
		theme: state.ThemeState.theme,
	};
}

export default connect(MapStateToProps)(routes);
