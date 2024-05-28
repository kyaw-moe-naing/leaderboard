import { RootState } from "app/store";
import { useSelector } from "react-redux";
import Leaderboard from "types/models/leaderboard"
import { RankSortOptions } from "utils/constants";
import { sort } from "utils/helpers/sort";

type GetRankHookResult = {
  getRank: (leaderboard: Leaderboard) => number;
}

const useGetRankHook = (): GetRankHookResult => {
  const { full } = useSelector((state: RootState) => state.leaderboard)

  const getRank = (item: Leaderboard): number => {
    const users = sort(full, RankSortOptions.highest);
    return users.indexOf(item) + 1;
  }

  return {
    getRank,
  };
}

export default useGetRankHook;