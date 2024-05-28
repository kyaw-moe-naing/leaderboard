import { describe, it, expect } from '@jest/globals';
import filtersReducer from '../src/app/reducers/filters';
import { setName, setOption, SET_NAME, SET_OPTION, FiltersState } from '../src/app/actions/filters';
import { RankSortOptions } from '../src/utils/constants';

const initialState: FiltersState = {
  name: undefined,
  option: RankSortOptions.highest,
};

describe('filtersReducer', () => {
  it('should return the initial state', () => {
    // Initial state should match initialState
    expect(filtersReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle SET_NAME', () => {
    const name = 'Alice';
    const action = setName({ name });
    const newState = filtersReducer(initialState, action);
    expect(newState.name).toBe(name);
  });

  it('should handle SET_OPTION', () => {
    const option = RankSortOptions.lowest;
    const action = setOption({ option });
    const newState = filtersReducer(initialState, action);
    expect(newState.option).toBe(option);
  });

  it('should handle unknown action types', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: {},
    };
    const newState = filtersReducer(initialState, action as any);
    expect(newState).toEqual(initialState); // Should return the initial state
  });
});

describe('setName action', () => {
  it('should create an action to set the name', () => {
    const name = 'Bob';
    const expectedAction = {
      type: SET_NAME,
      payload: { name },
    };
    expect(setName({ name })).toEqual(expectedAction);
  });
});

describe('setOption action', () => {
  it('should create an action to set the option', () => {
    const option = RankSortOptions.highest;
    const expectedAction = {
      type: SET_OPTION,
      payload: { option },
    };
    expect(setOption({ option })).toEqual(expectedAction);
  });
});
