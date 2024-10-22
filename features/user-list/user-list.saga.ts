import { IUserType } from './user.type';
import { actions } from './constants';
import { all, fork, put, takeEvery } from "redux-saga/effects"; 
import { syncCollection } from '../../redux-saga-firebase/firestore';
import { syncUsersSuccess, fetchUsersSuccess } from './user-list.action';


const onSyncSuccessTransformer = (querySnapshot) => {
    const users: Array<IUserType> = [];
    if (querySnapshot && querySnapshot.size > 0) {
        querySnapshot.forEach(documentSnapshot => {
            const data = documentSnapshot.data();
            users.push({
                id: documentSnapshot.id,
                nickName: data.nick_name,
                avatarSm: data.avatar_sm,
                phoneNumber: data.phone_number,
                status: data.status
            });
        });
    }
    return users;
}

function *syncUsers() {
    yield fork(syncCollection, 'users', onSyncSuccessTransformer, syncUsersSuccess);
}

function *watchFetchUsers() {
    yield takeEvery(actions.FETCH_USER.REQUEST, fetchUsers);
}

function *fetchUsers() {
    console.log('fetch user success');
}


export default function *fetchUserSagas() {
    yield all([
        watchFetchUsers(),
        syncUsers()
    ])
}