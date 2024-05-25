import { combineReducers, createStore } from "redux";
import filtersReducer from "./reducers/filters";
import leaderboardReducer from "./reducers/leaderboard";
import { initializeLeaderboard } from "./actions/leaderboard";
import leaderboard from 'assets/leaderboard.json'

const rootReducer = combineReducers({
  filters: filtersReducer,
  leaderboard: leaderboardReducer,
})

export const store = createStore(rootReducer);

store.dispatch(initializeLeaderboard(Object.values(leaderboard)))

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
