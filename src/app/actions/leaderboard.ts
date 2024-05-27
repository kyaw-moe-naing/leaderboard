import Leaderboard from "types/models/leaderboard";
import { FiltersState } from "./filters";

const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD';
const GENERATE_LEADERBOARD = 'GENERATE_LEADERBOARD';

type InitializeLeaderboardPayload = {
  full: Leaderboard[];
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

type GenerateLeaderboardAction = {
  type: typeof GENERATE_LEADERBOARD;
  payload: FiltersState;
}

function generateLeaderboard(payload: FiltersState): GenerateLeaderboardAction {
  return {
    type: GENERATE_LEADERBOARD,
    payload,
  };
}

type LeaderboardState = InitializeLeaderboardPayload & { generated: Leaderboard[] };
type LeaderboardAction = InitializeLeaderboardAction | GenerateLeaderboardAction;

export {
  INITIALIZE_LEADERBOARD,
  GENERATE_LEADERBOARD,
  type LeaderboardState,
  type LeaderboardAction,
}
export { initializeLeaderboard, generateLeaderboard }