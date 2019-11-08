import { Action, OrganizationState } from '../models';
import TYPE from '../action/type';

export const initialOrganizationState: OrganizationState = {
    organizations: [],
    users: [],
    invitations: [],
};

export default (state = initialOrganizationState, action: Action) => {
    switch (action.type) {
        case TYPE.SET_ORGANIZATIONS:
            return Object.assign({}, state, {organizations: action.payload});
        case TYPE.SET_ORGANIZATION:
            const {users, invitations} = action.payload;
            return Object.assign({}, state, {users, invitations});
        default:
            return state;
    }
}
