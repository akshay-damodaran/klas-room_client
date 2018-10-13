import { call, put, takeLatest } from 'redux-saga/effects';
import {  } from 'redux-saga';

import { postApi } from '../api';
import { saveState } from '../localStorage';
import env from '../conf.js';

function* sendLoginCredentials({ data, history }) {
  yield put({ type: 'LOGIN_PENDING' });
  const url = env.apiUrl + 'login/signin';
  const { isError, response } = yield call(postApi, url, data);
  if (isError) {
    yield put({ type: 'LOGIN_PENDING' });
  } else if (response.data.statusCode === 200) {
    const { name, email, token } = response.data;
    const storeData = {
      name,
      email,
      token,
      role: data.role,
    }
    yield put({
      type: 'SET_USER_DETAIL',
      payload: {
        data: storeData,
      },
    });
    history.push('/'); // Homepage route
    saveState(
      'loginReducer',
      {
        logged: true,
        user: storeData,
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
