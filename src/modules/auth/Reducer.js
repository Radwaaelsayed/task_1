import Cookie from 'js-cookie';
import Types from './Types';

const INITIAL_STATE = {
    user: null,
    token: null,
    isLoading: false
};

/* eslint consistent-return: 0 */
export default function auth(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case Types.LOGIN_USER_SUCCESS: {
            Cookie.set('token', payload.user.data.data.access_token);
            return {
                ...state,
                token: payload.user.data.data.access_token
            };
        }


        // Misc
        case Types.SET_AUTH_IS_LOADING: {
            const isLoading = payload;
            return {
                isLoading: isLoading
            };
        }

        default: {
            return state;
        }
    }
}
