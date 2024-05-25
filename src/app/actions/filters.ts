import { NameSortOptions, RankSortOptions } from "utils/constants";

const SET_NAME = 'SET_NAME';
const SET_OPTION = 'SET_OPTION';

type SetNameAction = {
  type: typeof SET_NAME;
  payload: string;
}

function setName(payload: string): SetNameAction {
  return {
    type: SET_NAME,
    payload,
  };
}

type OptionPayload = RankSortOptions | NameSortOptions;

type SetOptionAction = {
  type: typeof SET_OPTION;
  payload: OptionPayload;
}

function setOption(payload: OptionPayload): SetOptionAction {
  return {
    type: SET_OPTION,
    payload,
  };
}

export { SET_NAME, SET_OPTION, type SetNameAction, type OptionPayload, type SetOptionAction }
export { setName, setOption }