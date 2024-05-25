import { InitializeLeaderboardAction, FilterLeaderboardAction, FILTER_LEADERBOARD, INITIALIZE_LEADERBOARD } from "app/actions/leaderboard";
import Leaderboard from "types/models/leaderboard";
import { NameSortOptions, RankSortOptions } from "utils/constants";

const initialState: Leaderboard[] = [];

function leaderboardReducer(state = initialState, action: InitializeLeaderboardAction | FilterLeaderboardAction) {
  switch (action.type) {
    case INITIALIZE_LEADERBOARD:
      return action.payload.sort((a, b) => b.bananas - a.bananas);
    case FILTER_LEADERBOARD:
      switch (action.payload) {
        case RankSortOptions.highest:
          return [...state].sort((a, b) => b.bananas - a.bananas);
        case RankSortOptions.lowest:
          return [...state].sort((a, b) => a.bananas - b.bananas);
        case NameSortOptions.az:
          return [...state].sort((a, b) => a.name.localeCompare(b.name));
        case NameSortOptions.za:
          return [...state].sort((a, b) => b.name.localeCompare(a.name));
        default:
          return state;
      }
    default:
      return state;
  }
}

export default leaderboardReducer