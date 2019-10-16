import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NavBar from '../components/NavBar';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/DashboardPage';
import SignupPage from '../pages/SignupPage';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

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
