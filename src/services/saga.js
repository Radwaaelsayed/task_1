import { fork, put } from 'redux-saga/effects';
import { appReadyAction } from './globalActions';
import authSaga from '../modules/auth/Saga';

export default function* () {
    yield put(appReadyAction());

    yield fork(authSaga);



}
