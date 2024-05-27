import { NameSortOptions, RankSortOptions } from "utils/constants";

const SET_NAME = 'SET_NAME';
const SET_OPTION = 'SET_OPTION';

type SetNamePayload = {
  name?: string;
}

type SetNameAction = {
  type: typeof SET_NAME;
  payload: SetNamePayload;
}

function setName(payload: SetNamePayload): SetNameAction {
  return {
    type: SET_NAME,
    payload,
  };
}

type OptionPayload = RankSortOptions | NameSortOptions;

type SetOptionPayload = {
  option: OptionPayload;
};

type SetOptionAction = {
  type: typeof SET_OPTION;
  payload: SetOptionPayload;
}

function setOption(payload: SetOptionPayload): SetOptionAction {
  return {
    type: SET_OPTION,
    payload,
  };
}

type FiltersState = SetNamePayload & SetOptionPayload;
type FilterAction = SetNameAction | SetOptionAction;

export {
  SET_NAME,
  SET_OPTION,
  type OptionPayload,
  type FiltersState,
  type FilterAction,
}
export { setName, setOption }