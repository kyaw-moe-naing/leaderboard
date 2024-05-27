import { RootState } from "app/store";
import { useSelector } from "react-redux";
import Leaderboard from "types/models/leaderboard"

type GetRankHookResult = {
  getRank: (leaderboard: Leaderboard) => number;
}

const useGetRankHook = (): GetRankHookResult => {
  const { full } = useSelector((state: RootState) => state.leaderboard)

  const getRank = (item: Leaderboard): number => {
    const users = full.sort((a, b) => b.bananas - a.bananas);
    return users.indexOf(item) + 1;
  }

  return {
    getRank,
  };
}

export default useGetRankHook;