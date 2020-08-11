import { createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

const CHANGE_INPUT = 'LoginAuth/CHANGE_INPUT';
const INITIALIZE_FORM = 'LoginAuth/INITALIZE_FORM';

export const REQUEST_LOGIN = 'LoginAuth/REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'LoginAuth/SUCCESS_LOGIN';
export const FAIL_LOGIN = 'LoginAuth/FAIL_LOGIN';

const LOGOUT = 'LoginAuth/LOGOUT';

const SET_ERROR = 'LoginAuth/SET_ERROR';

export const requestLogin = createAction(REQUEST_LOGIN);
export const changeInput = createAction(CHANGE_INPUT); //loginInfo.id,password
export const initializeForm = createAction(INITIALIZE_FORM); 

export const successLogin = createAction(SUCCESS_LOGIN); //autoClose
export const failLogin = createAction(FAIL_LOGIN); //error


//export const logout = createAction(LOGOUT, AuthAPI.logout);

const initialState = Map({
    loginInfo: Map({
        id: "",
        password: ""
    }),
    error: "",
    autoClose: false,
});


export default handleActions({
    [CHANGE_INPUT]: (state,action) =>{
        const{name,value} = action.payload;
        return state.setIn(['loginInfo',name],value);
    },
    [INITIALIZE_FORM]: (state,action) =>{
        const initializeForm = initialState.get(action.payload);
        return state.set(action.payload,initializeForm);
    },
    [SET_ERROR]: (state,action) =>{
        const {form,message} = action.payload;
        return state.setIn([form,'error'], message);
    },
    [SUCCESS_LOGIN]: (state) =>{
        return state.set('autoClose', true);
    },
    [FAIL_LOGIN]: (state,action) =>{
        return state.set('error',Map(action.payload)).set('autoClose',false);
    }
},initialState);