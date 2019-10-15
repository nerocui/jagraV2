import React from 'react';
import { connect } from 'react-redux';
import { Logout } from '../../action';

const CommandBar = (props: any) => {
	return (
		<div>
			command bar
			<button onClick={props.Logout}>Logout</button>
		</div>
	);
};

export default connect(null, {Logout})(CommandBar);
