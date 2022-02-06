/**
 * Decided to not divide this file until deemed necessary
 */

import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './combineReducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware]; // Push other middlewares here

const configureStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export const store = configureStore();
export default configureStore;
