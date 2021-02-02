export const actions = {
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
    user: Object | null;

    /**
     * Fetch user error 
     */
    fetchUserError: string | null

}