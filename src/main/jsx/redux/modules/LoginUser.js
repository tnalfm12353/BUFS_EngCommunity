import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';
import * as LoginAPI from '../../lib/api/login';

const SET_LOGIN_INFO = 'SET_LOGIN_INFO';
const SET_VALIDATED = 'SET_VALIDATED';
const LOGOUT = 'LOGOUT';
const CHECK_STATUS = 'CHECK_STATUS';


export const setLoginInfo = createAction(SET_LOGIN_INFO);
export const setValidated = createAction(SET_VALIDATED);
// export const logout = createActions(LOGOUT,LoginAPI.LOGOUT);
// export const checkStatus = createActions(CHECK_STATUS,LoginAPI.checkStatus);

const initialState = Map({
    userInfo: Map({

    }),
    logged:false, // 현재 로그인중인지 알려준다
    validated:false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
});

export default handleActions({
    SET_LOGIN_INFO: (state,action) => state.set('userInfo',Map(action.payload)).set('logged',true),
    SET_VALIDATED: (state, action) => state.set('validated', action.payload),
    // ...pender({
    //     type: CHECK_STATUS,
    //     onSuccess: (state, action) => state.set('loggedInfo', Map(action.payload.data)).set('validated', true), 
    //     onFailure: (state, action) => initialState
    // })
},initialState);
