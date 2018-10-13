import { saveState } from '../localStorage';

export function sendLoginCredentials(data, history) {
  return ({
    type: 'SEND_LOGIN_CREDENTIALS',
    data,
    history,
  });
}

export function sendRegisterCredentials(data) {
  return ({
    type: 'REGISTER_NEW_USER',
    data,
  });
}

export function togglePage() {
  return ({
    type: 'TOGGLE_PAGE',
  });
}

export function logout(history) {
  history.push('/auth');
  saveState({});
  return ({
    type: 'LOGOUT',
  });
}
