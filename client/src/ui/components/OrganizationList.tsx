import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../models';
import OrganizationCard from './OrganizationCard';
import { Stack } from 'office-ui-fabric-react/lib/Stack';


const OrganizationList = (props: any) => {
    return (
        <Stack horizontal>
            {props.organizations.map((o:any) => <OrganizationCard {...o} key={o.id}/>)}
        </Stack>
    );
};

function mapStateToProps(state: State) {
    return {
        organizations: state.OrganizationState.organizations,
    };
}

export default connect(mapStateToProps)(OrganizationList);
