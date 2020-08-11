import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware  from 'redux-saga';

import modules from './modules';
import {RootSaga} from './sagas';
import { loadState } from '../lib/storage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState) =>{
    console.log("in configureStore!")
    console.log(persistedState);
    const store = createStore(modules,persistedState,composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
    sagaMiddleware.run(RootSaga)
    return store;
}


export default configureStore;