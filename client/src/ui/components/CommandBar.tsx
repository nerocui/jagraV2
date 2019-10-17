import React from 'react';
import { connect } from 'react-redux';
import { Logout } from '../../action';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Text } from 'office-ui-fabric-react/lib/Text';

const CommandBar = (props: any) => {
	return (
		<Fabric>
			<Text>command bar</Text>
			<PrimaryButton onClick={props.Logout}>Logout</PrimaryButton>
		</Fabric>
	);
};

export default connect(null, {Logout})(CommandBar);
