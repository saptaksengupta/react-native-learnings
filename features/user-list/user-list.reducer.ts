import { IUserListStateType, actions } from './constants';

import { UserListActions } from './user-list.action';

const initialState: IUserListStateType = {
    user: null,
    fetchUserError: null,
    fetchUserLoading: false
}

export const userListReducer = (state = initialState, action: UserListActions): IUserListStateType => {
    switch (action.type) {
        case actions.FETCH_USER.REQUEST:
            return {
                fetchUserLoading: true,
                user: null,
                fetchUserError: null
            }
        case actions.FETCH_USER.SUCCESS:
            return {
                fetchUserLoading: false,
                user: action.payload,
                fetchUserError: null
            }
        case actions.FETCH_USER.ERROR: 
            return {
                fetchUserLoading: false,
                user: null,
                fetchUserError: action.payload
            }
        default:
            return state;
    }
}