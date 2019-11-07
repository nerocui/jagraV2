import { Action, OrganizationState } from '../models';
import TYPE from '../action/type';

export const initialOrganizationState: OrganizationState = {
    organizations: [],
};

export default (state = initialOrganizationState, action: Action) => {
    switch (action.type) {
        case TYPE.SET_ORGANIZATIONS:
            return Object.assign({}, state, {organizations: action.payload});
        default:
            return state;
    }
}
