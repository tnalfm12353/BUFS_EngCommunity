import { take, put, call, select } from 'redux-saga/effects';

import * as authActions from '../modules/LoginAuth';
import * as userActions from '../modules/LoginUser';
import { loginAPI } from '../../lib/api/LoginAPI.js';


export const getLoginInfo = (state) => {
  return state.LoginAuth.get('loginInfo').toJS();
}

export function* userSession(userinfo){
  yield put({type:userActions.SET_USER_INFO_STORAGE, payload: userinfo.data});// for session
}

export function* authorize() {
  try {
    const loginInfo = yield select(getLoginInfo); //LoginAuth의 state를 가져옴
    const userinfo = yield call(loginAPI, loginInfo); //login API 동기
    yield put({ type: authActions.SUCCESS_LOGIN }); //autoClose위함..
    yield call(userSession,userinfo); //LoginUser action에 값 넣기 위함. 
  } catch (error) {
    yield put({ type: authActions.FAIL_LOGIN, payload: { error: error } });
  }
}

export function* Loginflow() {
  while (true) {
    yield take(authActions.REQUEST_LOGIN);
    const task = yield call(authorize);
    //const action = yield take(authActions.LOGOUT)
  }
}