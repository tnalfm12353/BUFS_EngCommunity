import {combineReducers} from 'redux';

import LoginUser from './LoginUser';
import LoginAuth from './LoginAuth';
import ForSession from './ForSession';

const combineReducer = combineReducers({
    LoginAuth,
    LoginUser,
    sessionInfo : ForSession
})

export default function rootReducers(state,action){
    console.log("root Reducers : state =>" + JSON.stringify(state));
    console.log("root Reducers : action =>" +JSON.stringify(action));
    
    //SessionStorage에 저장 되어 있는 값을 LoginUser/setUserInfo에 던짐.
    if(state && action.type =="@@INIT"){
        action.type = "LoginUser/SET_USER_INFO";
        action.payload = state.sessionInfo;
        //state = undefined; 추후 forsession 없앤다면 
        console.log("root Reducers after: action =>" +JSON.stringify(action));
    }

    return combineReducer(state,action);
}
