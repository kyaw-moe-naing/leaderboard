import { SORT_LEADERBOARD, SortLeaderboardAction, SortLeaderboardState } from "app/actions/sort";
import { NameSortOptions, RankSortOptions } from "utils/constants";

const initialState: SortLeaderboardState = {
  option: RankSortOptions.highest,
  leaderboard: [],
};

function sortReducer(state = initialState, action: SortLeaderboardAction): SortLeaderboardState {
  switch (action.type) {
    case SORT_LEADERBOARD:
      switch (action.payload.option) {
        case RankSortOptions.highest:
          return {
            option: action.payload.option,
            leaderboard: [...action.payload.leaderboard].sort((a, b) => b.bananas - a.bananas),
          }
        case RankSortOptions.lowest:
          return {
            option: action.payload.option,
            leaderboard: [...action.payload.leaderboard].sort((a, b) => b.bananas - a.bananas).reverse(),
          }
        case NameSortOptions.az:
          return {
            option: action.payload.option,
            leaderboard: [...action.payload.leaderboard].sort((a, b) => a.name.localeCompare(b.name)),
          }
        case NameSortOptions.za:
          return {
            option: action.payload.option,
            leaderboard: [...action.payload.leaderboard].sort((a, b) => b.name.localeCompare(a.name)),
          }
        default:
          return state;
      }
    default:
      return state;
  }
}

export default sortReducer