import {
    REGISTRATION_CLEAR,
    GET_REGISTRATION
} from '../actions/types';

const initialState = {
    registration: null,
    loading: true,
    error: {}
};

function registration(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_REGISTRATION:
            return {
                ...state,
                registration: payload,
                loading: false
            };
        case REGISTRATION_CLEAR:
            return {
                registration: payload,
            };
        default:
            return state;
    }
}

export default registration;
