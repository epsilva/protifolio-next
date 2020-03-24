import { all } from 'redux-saga/effects';

import actions from './actions/sagas';
import auth from './auth/sagas'

export default function* rootSaga() {
    return yield all([actions, auth]);
}
