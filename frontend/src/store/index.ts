import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sessionReducer from './modules/session/reducer';

const reducers = combineReducers({ session: sessionReducer });

const store = configureStore({ reducer: reducers });

export default store;
