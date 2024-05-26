import Leaderboard from "types/models/leaderboard";
import { RankSortOptions, NameSortOptions } from "utils/constants";

const SORT_LEADERBOARD = 'SORT_LEADERBOARD';

type OptionPayload = RankSortOptions | NameSortOptions;

type SortLeaderboardPayload = {
  option: OptionPayload;
  leaderboard: Leaderboard[]
}

type SortLeaderboardAction = {
  type: typeof SORT_LEADERBOARD;
  payload: SortLeaderboardPayload;
}

function sortLeaderboard(payload: SortLeaderboardPayload): SortLeaderboardAction {
  return {
    type: SORT_LEADERBOARD,
    payload,
  };
}

export {
  SORT_LEADERBOARD,
  type OptionPayload,
  type SortLeaderboardPayload as SortLeaderboardState,
  type SortLeaderboardAction,
}
export { sortLeaderboard }