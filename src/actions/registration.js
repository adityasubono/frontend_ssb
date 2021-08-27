import api from '../utils/api';
import { setAlert } from './alert';
import {
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    REGISTRATION_LOADED,
    AUTH_ERROR,
    GET_REGISTRATION,
    REGISTRATION_ERROR,
    REGISTRATION_DELETED
} from './types';

// Load Data Register
export const loadRegisterSSB = () => async dispatch => {
    try {
        const res = await api.get('/auth');

        dispatch({
            type: REGISTRATION_LOADED,
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

    try {
        const res = await api.get('/register');
        console.log('res', res.data)

        dispatch({
            type: GET_REGISTRATION,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: REGISTRATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Create Register User
export const registerSSB = (formData, history) => async dispatch => {
    try {
        const res = await api.post('/register', formData);

        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert('Data Anda Berhasil Disimpan', 'success'));
        dispatch(getRegistration())
        history.push('/register-list')
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTRATION_FAILED
        });
    }
};

//Get Register By Id
export const getRegisterById = (userId) => async (dispatch) => {
    try {
        const res = await api.get(`/register/${userId}`);

        dispatch({
            type: GET_REGISTRATION,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: REGISTRATION_ERROR,
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

        dispatch(setAlert(edit ? 'Data Registrasi Berhasil Diubah' : 'Profile Created', 'success'));
        if (edit) {
            dispatch(getRegistration());
            console.log("res.data",res.data)
            history.push("/register-list")

        }
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTRATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete Registration
export const deleteRegister = (id, history) => async (dispatch) => {

    try {
        const res = await api.delete(`/register/${id}`);
        dispatch({
            type: REGISTRATION_DELETED,
            payload: res.data
        });

        dispatch(setAlert('Data Registrasi Berhasil Dihapus', 'success'));
        dispatch(getRegistration());
        console.log("res.data",res.data)
        // history.push("/register-list")
    } catch (err) {
        dispatch({
            type: REGISTRATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
