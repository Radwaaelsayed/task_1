import { toast } from 'react-toastify';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import * as actions from './Actions';
import * as api from './Api';
import Types from './Types';

// SIGNIN

function* signinUser(formData) {
    try {
        yield put(actions.setAuthIsLoadingAction(true));
        const result = yield call(api.Login, formData.payload);
        yield put(
            actions.loginUserSuccessAction({
                data: result.data
            })
        );
        console.log(result.data)
    } catch (error) {
        console.log(error)
    } finally {
        yield put(actions.setAuthIsLoadingAction(false));
    }
}



export default function* authSaga() {
    yield takeLatest(Types.LOGIN_USER, signinUser);

}
