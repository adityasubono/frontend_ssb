import api from '../utils/api';
import { setAlert } from './alert';
import {
    REGISTER_SSB_SUCCESS,
    REGISTER_SSB_FAILED,
    REGISTER_SSB_LOADED,
    AUTH_ERROR,
    GET_REGISTER_SSB,
    REGISTER_SSB_ERROR, REGISTER_DELETE, PROFILE_ERROR, CLEAR_REGISTER
} from './types';

// Load Data Register
export const loadRegisterSSB = () => async dispatch => {
    try {
        const res = await api.get('/auth');

        dispatch({
            type: REGISTER_SSB_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Get all registration
export const getRegistration = () => async (dispatch) => {
    // dispatch({ type: CLEAR_REGISTER_SSB });
    try {
        const res = await api.get('/register');
        console.log('res', res.data)

        dispatch({
            type: GET_REGISTER_SSB,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: REGISTER_SSB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Create Register User
export const registerSSB = formData => async dispatch => {
    try {
        const res = await api.post('/register', formData);

        dispatch({
            type: REGISTER_SSB_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert('Data Anda Berhasil Disimpan', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_SSB_FAILED
        });
    }
};

//Get Register By Id
export const getRegisterById = (userId) => async (dispatch) => {
    try {
        const res = await api.get(`/register/${userId}`);

        dispatch({
            type: GET_REGISTER_SSB,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: REGISTER_SSB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

//EDIT DATA REGISTER
export const editRegister = (formData, history, edit = false) => async (
    dispatch
) => {
    try {
        const res = await api.put('/register', formData);
        console.log('form data', formData)

        dispatch({
            type: GET_REGISTER_SSB,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Data Registrasi Berhasil Diubah' : 'Profile Created', 'success'));

        if (edit) {
            console.log('history')
            history.push('/dashboard');
        }
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_SSB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete Registration
export const deleteRegister = (id) => async (dispatch) => {

    try {
        const res = await api.delete(`/register/${id}`);
        dispatch({
            type: REGISTER_DELETE,
            payload: res.data
        });

        dispatch(setAlert('Data Registrasi Berhasil Dihapus', 'success'));
    } catch (err) {
        dispatch({
            type: REGISTER_SSB_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
