import { INITIALIZE_LEADERBOARD, LeaderboardAction, LeaderboardState, SEARCH_USER } from "app/actions/leaderboard";
import { Alert } from "react-native";

const initialState: LeaderboardState = {
  name: '',
  leaderboard: []
};

function leaderboardReducer(state = initialState, action: LeaderboardAction): LeaderboardState {
  switch (action.type) {
    case INITIALIZE_LEADERBOARD:
      return {
        name: state.name,
        leaderboard: action.payload.leaderboard,
      };
    case SEARCH_USER:
      if (action.payload.name.length == 0) {
        return {
          name: '',
          leaderboard: state.leaderboard,
        }
      }

      const leaderboard = [...state.leaderboard].sort((a, b) => b.bananas - a.bananas);
      const userIndex = leaderboard.findIndex(user => user.name.includes(action.payload.name));
      if (userIndex === -1) {
        Alert.alert('This user name does not exist! Please specify an existing user name!');
        return {
          name: action.payload.name,
          leaderboard,
        }
      }

      const top10 = leaderboard.slice(0, 10);
      const searchedUser = leaderboard[userIndex];

      const top10Index = top10.findIndex(user => user.name.includes(searchedUser.name));
      if (top10Index === -1) {
        return {
          name: action.payload.name,
          leaderboard: [...leaderboard.slice(0, 9), searchedUser, ...leaderboard.slice(9)],
        }
      }

      return {
        name: action.payload.name,
        leaderboard,
      };
    default:
      return state;
  }
}

export default leaderboardReducer