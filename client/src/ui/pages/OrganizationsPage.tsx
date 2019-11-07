import React from 'react';
import { connect } from 'react-redux';
import { FetchOrganizationsByUser } from '../../action';
import { State } from '../../models';
import OrganizationList from '../components/OrganizationList';

const OrganizationsPage = (props: any) => {
    props.FetchOrganizationsByUser(props.id);
    return (
        <div>
            <OrganizationList />
        </div>
    );
};

function mapStateToProps(state: State) {
    return {
        id: state.AuthState.id,
    };
}

export default connect(mapStateToProps, {FetchOrganizationsByUser})(OrganizationsPage);
