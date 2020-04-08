import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import {pender} from 'redux-pender';

//Actions Type
const INITIALIZE_FORM = 'login/INITIALIZE_FORM';
const SET_VALUE = 'login/SET_VALUE';


//Create Actions
export const initializeForm = createAction(INITIALIZE_FORM);
export const setValue = createAction(SET_VALUE);

const initialState = Map({
    login:Map({
        id:'',
        pw:''
    }),
    result:Map({})
});

export default handleActions({
    [SET_VALUE] : (state,action) =>{
        const {name,value} = action.payload;
        return state.getIn(['login',name],value);
    },
    [INITIALIZE_FORM] : (state,action)=>{
        const initializeForm = initialState.get(action.payload);
        return state.get(action.payload.initializeForm);
    }
},initialState);