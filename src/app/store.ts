import { combineReducers, createStore } from "redux";
import leaderboardReducer from "./reducers/leaderboard";
import filtersReducer from "./reducers/filters";
import { generateLeaderboard, initializeLeaderboard } from "./actions/leaderboard";
import leaderboard from 'assets/leaderboard.json'
import { RankSortOptions } from "utils/constants";

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  filters: filtersReducer,
})

export const store = createStore(rootReducer);

store.dispatch(initializeLeaderboard({ full: Object.values(leaderboard) }))
store.dispatch(generateLeaderboard({ option: RankSortOptions.highest }));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
