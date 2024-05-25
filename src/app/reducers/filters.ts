import { OptionPayload, SetOptionAction, SET_OPTION, SET_NAME, SetNameAction } from "app/actions/filters";
import { RankSortOptions } from "utils/constants"

type FiltersState = {
  name: string;
  option: OptionPayload;
}

const initialState: FiltersState = {
  name: '',
  option: RankSortOptions.highest
}

function filtersReducer(state = initialState, action: SetNameAction | SetOptionAction) {
  switch (action.type) {
    case SET_NAME:
      return {
        name: action.payload,
        option: state.option,
      };
    case SET_OPTION:
      return {
        name: state.name,
        option: action.payload,
      };
    default:
      return state;
  }
}

export { type FiltersState }
export default filtersReducer