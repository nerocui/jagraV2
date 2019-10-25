import React, { useState } from 'react';
import { CreateNewOrganization } from '../../utils/AuthService';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import useStyle from '../../style/organizationCreator';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const OrganizationCreator = () => {
	const [name, SetName] = useState('');
	const OnChangeName = (e:any) => {
		SetName(e.target.value);
	};
	const OnSubmit = (e:any) => {
		e.preventDefault();
		CreateNewOrganization(name);
		SetName('');
	};
	const classes = useStyle();
	return (
		<Fabric className={classes.root}>
			<div className={classes.formBox}>
				Create New Organization
				<form onSubmit={OnSubmit} className={classes.gap}>
					<TextField placeholder="Organization Name..." value={name} onChange={OnChangeName} />
					<PrimaryButton className={classes.gap} type="submit">Create</PrimaryButton>
				</form>
			</div>
		</Fabric>
	);
};

export default OrganizationCreator;
