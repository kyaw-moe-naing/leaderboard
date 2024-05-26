import leaderboardJson from 'assets/leaderboard.json'
import Leaderboard from "types/models/leaderboard"

type GetRankHookResult = {
  getRank: (leaderboard: Leaderboard) => number;
}

const useGetRankHook = (): GetRankHookResult => {
  const leaderboard = Object.values(leaderboardJson) as Leaderboard[];

  const getRank = (item: Leaderboard): number => {
    const users = leaderboard.sort((a, b) => b.bananas - a.bananas);
    return users.indexOf(item) + 1;
  }

  return {
    getRank,
  };
}

export default useGetRankHook;