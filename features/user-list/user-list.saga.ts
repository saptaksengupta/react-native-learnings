import { actions } from './constants';
import { all, takeEvery } from "redux-saga/effects";

function *watchFetchUsers() {
    yield takeEvery(actions.FETCH_USER.REQUEST, fetchUsers);
} 

function *fetchUsers() {
    yield console.log('Hey its inside user saga');
}


export default function *fetchUserSagas() {
    yield all([
        watchFetchUsers()
    ])
}