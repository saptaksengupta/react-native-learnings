
import { actions } from './constants';

/**
 * 
 * Action to request users.
 *  
 */
export const fetchUsers = () => ({
    type: actions.FETCH_USER.REQUEST,
    payload: null
})

/**
 * 
 * @param users 
 * Action to notify user fetch success.
 */
export const fetchUsersSuccess = (users) => ({
    type: actions.FETCH_USER.SUCCESS,
    payload: users
})

/**
 * 
 * @param error 
 * Action to notidy fetch user failure
 */

export const fetchUsersError = (error) => ({
    type: actions.FETCH_USER.ERROR,
    payload: error
});


export type UserListActions = ReturnType<
    typeof fetchUsersSuccess |
    typeof fetchUsersError |
    typeof fetchUsers>
