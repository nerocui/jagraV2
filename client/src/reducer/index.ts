import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import ThemeReducer from './ThemeReducer';
import OrganizationReducer from "./OrganizationReducer";

const rootReducer = combineReducers({
	AuthState: AuthReducer,
	ThemeState: ThemeReducer,
	OrganizationState: OrganizationReducer,
});

export {initialAuthState} from './AuthReducer';
export default rootReducer;
