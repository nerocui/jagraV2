import React, { useState } from 'react';
import { CreateNewOrganization } from '../../utils/AuthService';

const OrganizationEditor = () => {
	const [name, SetName] = useState('');
	const OnChangeName = (e:any) => {
		SetName(e.target.value);
	};
	const OnSubmit = (e:any) => {
		e.preventDefault();
		CreateNewOrganization(name);
		SetName('');
	};

	return (
		<div>
			organization editor
			<form onSubmit={OnSubmit}>
				<input value={name} onChange={OnChangeName} />
				<button type="submit">Create</button>
			</form>
		</div>
	);
};

export default OrganizationEditor;
