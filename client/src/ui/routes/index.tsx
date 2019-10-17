import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NavBar from '../components/NavBar';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/DashboardPage';
import SignupPage from '../pages/SignupPage';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

const routes = () => {
	return (
		<Router>
			<Fabric>
				<NavBar />
				<Switch>
					<PublicRoute path='/' exact component={LoginPage} />
					<PublicRoute path='/signup' exact component={SignupPage} />
					<PrivateRoute path='/dashboard' component={Dashboard} />
				</Switch>
			</Fabric>
		</Router>
	);
};

export default routes;
