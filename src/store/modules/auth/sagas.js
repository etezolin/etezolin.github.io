import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axiosInstance from '../../../services/axios';
import history from '../../../services/history';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* loginRequest({ payload }) {
  try {
    const { token, loginProvider } = payload;

    const response = yield call(axiosInstance.post, 'Auth/login', {
      token,
      loginProvider,
    });

    yield call(sleep, 3000);

    yield put(actions.loginSuccess(response.data));

    const storedUserName = localStorage.getItem('name');

    const roleId = localStorage.getItem('profileId');

    const mensagem = `${storedUserName}, seja bem-vindo(a)!`;

    toast.success(mensagem);

    axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    if (roleId === '10') {
      history.push('/home');
    } else {
      history.push('/login');
    }
  } catch (error) {
    // toast.error('Você não possui acesso ao sistema.');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
