import Leaderboard from "types/models/leaderboard";

const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD';
const SEARCH_USER = 'SEARCH_USER';

type InitializeLeaderboardPayload = {
  leaderboard: Leaderboard[];
}

type InitializeLeaderboardAction = {
  type: typeof INITIALIZE_LEADERBOARD;
  payload: InitializeLeaderboardPayload;
}

function initializeLeaderboard(payload: InitializeLeaderboardPayload): InitializeLeaderboardAction {
  return {
    type: INITIALIZE_LEADERBOARD,
    payload,
  };
}

type SearchUserPayload = {
  name: string;
}

type SearchUserAction = {
  type: typeof SEARCH_USER;
  payload: SearchUserPayload;
}

function searchUser(payload: SearchUserPayload): SearchUserAction {
  return {
    type: SEARCH_USER,
    payload,
  };
}

type LeaderboardState = InitializeLeaderboardPayload & SearchUserPayload;
type LeaderboardAction = InitializeLeaderboardAction | SearchUserAction;

export {
  INITIALIZE_LEADERBOARD,
  SEARCH_USER,
  type LeaderboardState,
  type LeaderboardAction,
}
export { initializeLeaderboard, searchUser }