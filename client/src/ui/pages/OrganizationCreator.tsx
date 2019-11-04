import React, { useState } from 'react';
import { CreateNewOrganization } from '../../utils/AuthService';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import useStyle from '../../style/organizationCreator';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import { State } from '../../models';

const OrganizationCreator = (props: any) => {
	const [name, SetName] = useState('');
	const OnChangeName = (e:any) => {
		SetName(e.target.value);
	};
	const OnSubmit = (e:any) => {
		e.preventDefault();
		CreateNewOrganization(name);
		SetName('');
	};
	const isMobile = useMediaQuery({
		query: '(max-width: 650px)',
	});
	const classes = useStyle({theme: props.theme, isMobile});
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

function mapStateToProps(state: State) {
	return {
		theme: state.ThemeState.theme,
	};
}

export default connect(mapStateToProps)(OrganizationCreator);
