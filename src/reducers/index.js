import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import registration from './registration';

export default combineReducers({
    alert,
    auth,
    registration
});
