import {all, fork} from 'redux-saga/effects';

import { Loginflow } from './UserSaga';

export function* RootSaga() {
    yield all([
      fork(Loginflow)
    ]);
}
  
 