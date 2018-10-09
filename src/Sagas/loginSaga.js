import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { postApi } from '../api';
import { saveState } from '../localStorage';

function* sendLoginCredentials({ data, history }) {
  yield put({ type: 'LOGIN_PENDING' });
  const url = '';
  const { isError, response } = yield call(postApi, url, data);
  if (isError) {
    yield put({ type: 'LOGIN_PENDING' });
  } else if (response.data.statusCode === 200) {
    yield put({
      type: 'SET_USER_DETAIL',
      payload: {
        data: response.data.result,
      },
    });
    history.push('/'); // Homepage route
    saveState(
      'loginReducer',
      {
        logged: true,
        user: response.data.result,
      },
    );
  } else if (response.data.statusCode === 401) {
    yield put({
      type: 'ERROR_MESSAGE',
      payload: {
        data: response.data.result,
      },
    });
  }
}

function* registerNewUser({ data }) {
  const url = '';
  const { isError } = yield call(postApi, url, data);
  if (isError) {
    alert('Couldn\'t register. Try again later');
  } else {
    yield put({
      type: 'TOGGLE_PAGE',
    });
    alert('Registered Successfully');
  }
}

export function* watchSignIn() {
  yield takeLatest('SEND_LOGIN_CREDENTIALS', sendLoginCredentials);
}

export function* watchSignUp() {
  yield takeLatest('REGISTER_NEW_USER', registerNewUser);
}
