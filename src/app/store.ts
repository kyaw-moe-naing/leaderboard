import { combineReducers, createStore } from "redux";
import leaderboardReducer from "./reducers/leaderboard";
import sortReducer from "./reducers/sort";
import { initializeLeaderboard } from "./actions/leaderboard";
import leaderboard from 'assets/leaderboard.json'
import { sortLeaderboard } from "./actions/sort";
import { RankSortOptions } from "utils/constants";

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  sort: sortReducer,
})

export const store = createStore(rootReducer);

store.dispatch(
  initializeLeaderboard({
    leaderboard: Object.values(leaderboard)
  })
)
store.dispatch(
  sortLeaderboard({
    option: RankSortOptions.highest,
    leaderboard: store.getState().leaderboard.leaderboard,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
