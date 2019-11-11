import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';

const UserList = (props: any) => {
    return (
        <div>
            {props.users.map((user: any) => <Persona text={user.username} size={PersonaSize.size32} />)}
        </div>
    );
};

function mapStateToProps(state: State) {
    return {
        users: state.OrganizationState.chosenOrganization.users,
    };
}

export default connect(mapStateToProps)(UserList);
