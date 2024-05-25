import { FILTER_LEADERBOARD, INITIALIZE_LEADERBOARD, LeaderboardAction, SEARCH_USER } from "app/actions/leaderboard";
import { Alert } from "react-native";
import Leaderboard from "types/models/leaderboard";
import { NameSortOptions, RankSortOptions } from "utils/constants";

const initialState: Leaderboard[] = [];

function leaderboardReducer(state = initialState, action: LeaderboardAction) {
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
    case SEARCH_USER:
      let sortedLeaderboard = [...state].sort((a, b) => b.bananas - a.bananas);
      const userIndex = sortedLeaderboard.findIndex(user => user.name.includes(action.payload));
      if (userIndex === -1) {
        Alert.alert('This user name does not exist! Please specify an existing user name!');
        return state;
      }

      let top10 = sortedLeaderboard.slice(0, 10);
      const searchedUser = sortedLeaderboard[userIndex];
      if (!top10.some(user => user.name.includes(searchedUser.name))) {
        sortedLeaderboard = [...sortedLeaderboard.slice(0, 9), searchedUser, ...sortedLeaderboard.slice(9)];
      }

      return [...sortedLeaderboard];
    default:
      return state;
  }
}

export default leaderboardReducer