import Leaderboard from "types/models/leaderboard";
import { OptionPayload } from "./filters";

const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD';
const FILTER_LEADERBOARD = 'FILTER_LEADERBOARD';
const SEARCH_USER = 'SEARCH_USER';

type InitializeLeaderboardAction = {
  type: typeof INITIALIZE_LEADERBOARD;
  payload: Leaderboard[];
}

function initializeLeaderboard(data: Leaderboard[]): InitializeLeaderboardAction {
  return {
    type: INITIALIZE_LEADERBOARD,
    payload: data,
  };
}

type FilterLeaderboardAction = {
  type: typeof FILTER_LEADERBOARD;
  payload: OptionPayload;
}

function filterLeaderboard(payload: OptionPayload): FilterLeaderboardAction {
  return {
    type: FILTER_LEADERBOARD,
    payload,
  };
}

interface SearchUserAction {
  type: typeof SEARCH_USER;
  payload: string;
}

function searchUser(payload: string): SearchUserAction {
  return {
    type: SEARCH_USER,
    payload,
  };
}

type LeaderboardAction = InitializeLeaderboardAction | FilterLeaderboardAction | SearchUserAction;

export {
  INITIALIZE_LEADERBOARD,
  FILTER_LEADERBOARD,
  SEARCH_USER,
  type LeaderboardAction,
}
export { initializeLeaderboard, filterLeaderboard, searchUser }