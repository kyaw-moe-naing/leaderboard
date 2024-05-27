import { FilterAction, FiltersState, SET_NAME, SET_OPTION } from "app/actions/filters";
import { RankSortOptions } from "utils/constants"

const initialState: FiltersState = {
  option: RankSortOptions.highest
}

function filtersReducer(state = initialState, action: FilterAction) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case SET_OPTION:
      return {
        ...state,
        option: action.payload.option,
      };
    default:
      return state;
  }
}

export { type FiltersState }
export default filtersReducer