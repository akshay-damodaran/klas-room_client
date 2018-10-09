import { all } from 'redux-saga/effects';

import { watchSignIn, watchSignUp } from './loginSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchSignIn(),
    watchSignUp(),
  ]);
}
