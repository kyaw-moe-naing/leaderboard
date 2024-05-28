import { INITIALIZE_LEADERBOARD, LeaderboardAction, LeaderboardState, GENERATE_LEADERBOARD } from "app/actions/leaderboard";
import { Alert } from "react-native";
import { RankSortOptions } from "utils/constants";
import { sort } from "utils/helpers/sort";

const initialState: LeaderboardState = {
  full: [],
  generated: [],
};

function leaderboardReducer(state = initialState, action: LeaderboardAction): LeaderboardState {
  switch (action.type) {
    case INITIALIZE_LEADERBOARD:
      return {
        ...state,
        full: action.payload.full,
      };
    case GENERATE_LEADERBOARD:
      let leaderboard = sort([...state.full], RankSortOptions.highest);

      if (action.payload.name) {
        const userIndex = leaderboard.findIndex(user => user.name.includes(action.payload.name!));
        if (userIndex === -1) {
          Alert.alert('This user name does not exist! Please specify an existing user name!');
          return state;
        }

        const top10 = leaderboard.slice(0, 10);
        const searchedUser = leaderboard[userIndex];

        const top10Index = top10.findIndex(user => user.name.includes(searchedUser.name));

        if (top10Index === -1) {
          leaderboard = top10.slice(0, 9);
          leaderboard.push(searchedUser, ...leaderboard.slice(9));
        }

        leaderboard = leaderboard.slice(0, 10)
      }

      return {
        ...state,
        generated: sort(leaderboard, action.payload.option).slice(0, 10),
      };
    default:
      return state;
  }
}

export default leaderboardReducer