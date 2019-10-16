import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NavBar from '../components/NavBar';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/DashboardPage';

const routes = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<PublicRoute path='/' exact component={LoginPage} />
					<PrivateRoute path='/dashboard' component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
};

export default routes;
