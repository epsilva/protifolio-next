import { combineReducers } from 'redux';

import actions from './actions/reducer';
import auth from './auth/reducers';

export default combineReducers({
    actions,
    auth
});
