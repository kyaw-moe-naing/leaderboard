import { combineReducers, createStore } from "redux";
import appReducer from "./reducers/app";

const reducers = combineReducers(appReducer)

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
