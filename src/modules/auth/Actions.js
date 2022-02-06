import Types from './Types';

export const loginUserAction = (formData) => ({
    type: Types.LOGIN_USER,
    payload: formData
});

export const loginUserSuccessAction = (user, token) => ({
    type: Types.LOGIN_USER_SUCCESS,
    payload: { user, token }
});



export const setAuthIsLoadingAction = (isLoading) => ({
    type: Types.SET_AUTH_IS_LOADING,
    payload: isLoading
});
