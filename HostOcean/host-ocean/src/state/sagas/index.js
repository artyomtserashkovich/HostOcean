import { fork, all } from "redux-saga/effects";
import watchRequest from "./watchRequest"
import accountSaga from "./../../view/Account/sagas/index"

function* rootSaga() {
    yield all([
        fork(watchRequest),
        fork(accountSaga)
    ])
}

export default rootSaga