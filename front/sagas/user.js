import { all, call, takeLatest, fork, put } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL } from "../reducers/user";

function* loginApi() {
  // 서버 요청
}

function* login() {
  try {
    yield call(loginApi)
    yield put({
      type: LOG_IN_SUCCESS
    })
  } catch(e) {
    console.log(e)
    yield put({
      type: LOG_IN_FAIL
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
  ])
}