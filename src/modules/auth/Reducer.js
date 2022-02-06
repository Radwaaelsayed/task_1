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

            return {
                ...state,
                token: ''
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
