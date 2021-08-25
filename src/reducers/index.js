import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import register_ssb from './register_ssb';

export default combineReducers({
    alert,
    auth,
    register_ssb
});
