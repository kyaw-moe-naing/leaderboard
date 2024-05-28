import { OptionPayload } from "app/actions/filters";
import Leaderboard from "types/models/leaderboard";
import { RankSortOptions, NameSortOptions } from "utils/constants";

export const sort = (leaderboard: Leaderboard[], option: OptionPayload): Leaderboard[] => {
  switch (option) {
    case RankSortOptions.highest:
      return leaderboard.sort((a, b) => {
        if (a.bananas == b.bananas) {
          if (!a.name && !b.name) return 0;
          if (!a.name) return -1;
          if (!b.name) return 1;
          return b.name.localeCompare(a.name);
        }
        return b.bananas - a.bananas;
      });
    case RankSortOptions.lowest:
      return sort(leaderboard, RankSortOptions.highest).reverse();
    case NameSortOptions.az:
      return leaderboard.sort((a, b) => {
        if (!a.name && !b.name) return 0;
        if (!a.name) return 1;
        if (!b.name) return -1;
        return a.name.localeCompare(b.name);
      });
    case NameSortOptions.za:
      return leaderboard.sort((a, b) => {
        if (!a.name && !b.name) return 0;
        if (!a.name) return 1;
        if (!b.name) return -1;
        return b.name.localeCompare(a.name);
      });
    default:
      return leaderboard;
  }

}