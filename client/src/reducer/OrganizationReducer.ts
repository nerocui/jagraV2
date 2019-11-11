import { Action, OrganizationState } from '../models';
import TYPE from '../action/type';

export const initialOrganizationState: OrganizationState = {
    organizations: [],
    chosenOrganization: {
        id: -1,
        name: '',
        color: '',
        users: [],
        tasks: [],
        invitations: [],
    }
};

export default (state: OrganizationState = initialOrganizationState, action: Action) => {
    switch (action.type) {
        case TYPE.SET_ORGANIZATIONS:
            return Object.assign({}, state, {organizations: action.payload});
        case TYPE.SET_ORGANIZATION:
            return Object.assign({}, state, {chosenOrganization: action.payload});
        case TYPE.ADD_TASK:
            let { chosenOrganization } = state;
            let { tasks } = chosenOrganization;
            tasks = [action.payload, ...tasks];
            const neworg = Object.assign({}, chosenOrganization, {tasks});
            return Object.assign({}, state, { chosenOrganization: neworg });
        default:
            return state;
    }
}
