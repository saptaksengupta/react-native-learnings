import { userListReducer } from './../../features/user-list/user-list.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({userListReducer});

export default rootReducer;