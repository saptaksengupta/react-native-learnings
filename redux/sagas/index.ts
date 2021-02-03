import { all } from "redux-saga/effects";
import fetchUserSagas from "../../features/user-list/user-list.saga";

function *rootSaga() {
    yield all([
        fetchUserSagas()
    ])
}

export default rootSaga;