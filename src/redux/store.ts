import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UserReducer';
import LeaderListReducer from './reducers/LeaderListReducer';

export const rootReducer = combineReducers({ UserReducer, LeaderListReducer });
export type ReduxStateType = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer, applyMiddleware(thunk));