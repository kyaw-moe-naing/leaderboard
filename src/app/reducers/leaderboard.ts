import { INITIALIZE_LEADERBOARD, LeaderboardAction, LeaderboardState, GENERATE_LEADERBOARD } from "app/actions/leaderboard";
import { Alert } from "react-native";
import { RankSortOptions, NameSortOptions } from "utils/constants";

const initialState: LeaderboardState = {
  full: [],
  generated: [],
};

function leaderboardReducer(state = initialState, action: LeaderboardAction): LeaderboardState {
  switch (action.type) {
    case INITIALIZE_LEADERBOARD:
      return {
        full: action.payload.full,
        generated: state.generated,
      };
    case GENERATE_LEADERBOARD:
      let leaderboard = [...state.full].sort((a, b) => b.bananas - a.bananas);

      if (action.payload.name) {
        const userIndex = leaderboard.findIndex(user => user.name.includes(action.payload.name!));
        if (userIndex === -1) {
          Alert.alert('This user name does not exist! Please specify an existing user name!');
          return state;
        }

        let top10 = leaderboard.slice(0, 10);
        const searchedUser = leaderboard[userIndex];

        const top10Index = top10.findIndex(user => user.name.includes(searchedUser.name));

        if (top10Index === -1) {
          leaderboard = top10.slice(0, 9);
          leaderboard.push(searchedUser, ...leaderboard.slice(9));
        }

        leaderboard = leaderboard.slice(0, 10)
      }

      switch (action.payload.option) {
        case RankSortOptions.highest:
          break;
        case RankSortOptions.lowest:
          leaderboard = leaderboard.reverse();
          break;
        case NameSortOptions.az:
          leaderboard = leaderboard.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case NameSortOptions.za:
          leaderboard = leaderboard.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }

      return {
        ...state,
        generated: leaderboard.slice(0, 10),
      };
    default:
      return state;
  }
}

export default leaderboardReducer