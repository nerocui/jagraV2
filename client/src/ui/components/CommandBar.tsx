import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Logout, ToggleTheme, FetchOrganizationsByUser } from '../../action';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

const CommandNavBar = (props: any) => {
	const items = [
		{
			key: 'home',
			name: 'Home',
			iconProps: {
				iconName: 'Home',
			},
			onClick: () => props.history.push('/dashboard'),
			ariaLabel: 'Home',
			['data-automation-id']: 'homeButton',
		},
		{
		  key: 'newItem',
		  name: 'New',
		  cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
		  iconProps: {
			iconName: 'Add'
		  },
		  ariaLabel: 'New',
		  subMenuProps: {
			items: [
			  {
				key: 'organization',
				name: 'Organization',
				iconProps: {
				  iconName: 'Org'
				},
				onClick: () => props.history.push('/organizations/new'),
				['data-automation-id']: 'newOrganizationButton'
			  },
			  {
				key: 'task',
				name: 'Task',
				iconProps: {
				  iconName: 'TaskLogo'
				}
			  }
			]
		  }
		},
		{
		  key: 'organizations',
		  name: 'Organizations',
		  iconProps: {
			iconName: 'Org'
		  },
		  onClick: () => props.history.push('/organizations'),
		  ['data-automation-id']: 'uploadButton'
		},
		{
		  key: 'share',
		  name: 'Share',
		  iconProps: {
			iconName: 'Share'
		  },
		  onClick: () => console.log('Share')
		},
	];

	const farItems = [
		{
			key: 'theme',
			name: 'Theme',
			ariaLabel: 'Theme',
			iconProps: {
				iconName: 'Sunny',
			},
			onClick: props.ToggleTheme
		},
		{
		  key: 'logout',
		  name: 'Logout',
		  ariaLabel: 'Logout',
		  iconProps: {
			iconName: 'OutOfOffice'
		  },
		  onClick: props.Logout
		}
	];
	return (
		<Fabric>
			<CommandBar
				items={items}
				farItems={farItems}
				ariaLabel={'Use left and right arrow keys to navigate between commands.'}
			/>
		</Fabric>
	);
};

const ConnectedCommandBar = connect(null, {Logout, ToggleTheme})(CommandNavBar);

export default withRouter(({ history }) => (
	<ConnectedCommandBar history={history} />
));
