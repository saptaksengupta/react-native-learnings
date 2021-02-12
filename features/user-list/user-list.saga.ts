import { actions } from './constants';
import { all, fork, takeEvery } from "redux-saga/effects"; 
import { syncCollection } from '../../redux-saga-firebase/firestore';

function *syncUsers() {
    yield fork(syncCollection, 'users');
}

function *watchFetchUsers() {
    yield takeEvery(actions.FETCH_USER.REQUEST, fetchUsers);
}

function *fetchUsers() {
    yield console.log('Hey its inside user saga');
}


export default function *fetchUserSagas() {
    yield all([
        watchFetchUsers(),
        syncUsers()
    ])
}