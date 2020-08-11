import {createAction,handleActions} from 'redux-actions';
import {Map} from 'immutable';

//이거 없어두 됨.
const initialState = Map({
    sessionInfo: Map({
        code: undefined,
        id: undefined,
        nickname: undefined
    }),
});

export default handleActions({
    
},initialState);
