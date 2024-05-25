import Leaderboard from "types/models/leaderboard";
import { OptionPayload } from "./filters";

const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD';
const FILTER_LEADERBOARD = 'FILTER_LEADERBOARD';

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

interface FilterLeaderboardAction {
  type: typeof FILTER_LEADERBOARD;
  payload: OptionPayload;
}

function filterLeaderboard(payload: OptionPayload): FilterLeaderboardAction {
  return {
    type: FILTER_LEADERBOARD,
    payload,
  };
}

export { INITIALIZE_LEADERBOARD, FILTER_LEADERBOARD, type InitializeLeaderboardAction, type FilterLeaderboardAction }
export { initializeLeaderboard, filterLeaderboard }