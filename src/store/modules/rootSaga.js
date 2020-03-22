import { all } from 'redux-saga/effects';

import actions from './actions/sagas';

export default function* rootSaga() {
    return yield all([actions]);
}
