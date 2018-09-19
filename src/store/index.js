import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import Reducers from './redusers';

const middleware = [];
middleware.push(thunk);

const loggerMiddleware =  createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

middleware.push(loggerMiddleware)


const store = createStore(
    Reducers,
    {},
    compose(
    applyMiddleware(...middleware)
    )
);

export default store;