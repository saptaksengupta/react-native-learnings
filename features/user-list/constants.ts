import { IUserType } from "./user.type";

export const actions = {
    SYNC: {
        SUCCESS: 'SYNC.SUCCESS'
    },
    FETCH_USER: {
        REQUEST: 'FETCH_USER.REQUEST', 
        SUCCESS: 'FETCH_USER.SUCCESS', 
        ERROR: 'FETCH_USER.ERROR', 
    }
}

export interface IUserListStateType {
    /**
     * Flag to determine fetch user is in progress or not.
     */
    fetchUserLoading: boolean;

    /**
     * User object
     */
    users: Array<IUserType> | null;

    /**
     * Fetch user error 
     */
    fetchUserError: string | null

}