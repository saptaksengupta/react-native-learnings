import { IUserListStateType, actions } from './constants';

import { UserListActions } from './user-list.action';

const initialState: IUserListStateType = {
    users: null,
    fetchUserError: null,
    fetchUserLoading: false
}

export const userListReducer = (state = initialState, action: UserListActions): IUserListStateType => {
    switch (action.type) {
        case actions.FETCH_USER.REQUEST:
            return {
                fetchUserLoading: true,
                ...state
            }
        case actions.FETCH_USER.SUCCESS:
            return {
                fetchUserLoading: false,
                users: action.payload,
                ...state
            }
        case actions.FETCH_USER.ERROR: 
            return {
                ...state,
                fetchUserError: action.payload
            }
        case actions.SYNC.SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}