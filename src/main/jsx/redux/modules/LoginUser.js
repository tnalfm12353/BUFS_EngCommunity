import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';
import { saveState } from '../../lib/storage';
import forSession from './ForSession';

export const SET_USER_INFO = 'LoginUser/SET_USER_INFO';
export const SET_USER_INFO_STORAGE = 'LoginUser/SET_USER_INFO_STORAGE';
const CHECK_STATUS = 'LoginUser/CHECK_STATUS';
const SET_VALIDATED = 'LoginUser/SET_VALIDATED';
const LOGOUT = 'LoginUser/LOGOUT';


export const setUserInfo = createAction(SET_USER_INFO);
export const setUserInfoStorage = createAction(SET_USER_INFO_STORAGE); // SessionStorage
export const checkStatus = createAction(CHECK_STATUS);
export const setValidated = createAction(SET_VALIDATED);
// export const logout = createActions(LOGOUT,LoginAPI.LOGOUT);

const initialState = Map({
    userInfo: Map({
        code: undefined,
        id: undefined,
        nickname: undefined
    }),
    sessionExist: false
});

export default handleActions({
    [SET_USER_INFO]: (state,action) => {
        console.log("sessInfo = "+ action.payload);
        return state.set('userInfo',Map(action.payload)).set('sessionExist',true);
    },

    [SET_USER_INFO_STORAGE]: (state,action) =>{
        const sessionInfo = action.payload;
        console.log("before saveState : " + sessionInfo);
        saveState({
            sessionInfo
        });
        return state.set('userInfo',Map(action.payload)).set('sessionExist',true);
    },
    [CHECK_STATUS]: (state) => {
        const userinfo = state.get('userInfo');
        console.log("userinfo = "+ userinfo);

        if(userinfo.id && userinfo.code){
            return state.set('sessionExist',true);
        }
        else
            return state.set('sessionExist',false);
    },

},initialState);
