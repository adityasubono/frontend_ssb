import {
    CLEAR_REGISTER,
    GET_REGISTER_SSB
} from '../actions/types';

const initialState = {
    register: null,
    loading: true,
    error: {}
};

function registerSSBReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_REGISTER_SSB:
            return {
                ...state,
                register: payload,
                loading: false
            };
        case CLEAR_REGISTER:
            return {
                register: payload,
            };
        default:
            return state;
    }
}

export default registerSSBReducer;
