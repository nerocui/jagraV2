import { Action, ThemeState } from '../models';
import TYPE from '../action/type';

export const initialThemeState: ThemeState = {
    theme: 'light',
};

export default (state = initialThemeState, action: Action) => {
    switch (action.type) {
        case TYPE.SET_THEME:
            return Object.assign({}, state, {theme: action.payload});
        default: 
            return state;
    }
};
