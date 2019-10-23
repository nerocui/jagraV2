import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import ThemeReducer from './ThemeReducer';

const rootReducer = combineReducers({
	AuthState: AuthReducer,
	ThemeState: ThemeReducer,
});

export {initialAuthState} from './AuthReducer';
export default rootReducer;
