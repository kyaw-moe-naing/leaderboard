import { describe, it, expect } from '@jest/globals';
import leaderboardReducer from '../src/app/reducers/leaderboard'
import { initializeLeaderboard, generateLeaderboard, LeaderboardState } from '../src/app/actions/leaderboard'
import { RankSortOptions, NameSortOptions } from '../src/utils/constants'
import Leaderboard from '../src/types/models/leaderboard'

const testLeaderboard: Leaderboard[] = [
  { bananas: 100, lastDayPlayed: '2024-05-28', longestStreak: 10, name: 'Alice', stars: 5, subscribed: true, uid: '1' },
  { bananas: 90, lastDayPlayed: '2024-05-27', longestStreak: 8, name: 'Bob', stars: 4, subscribed: false, uid: '2' },
  { bananas: 80, lastDayPlayed: '2024-05-26', longestStreak: 7, name: 'Charlie', stars: 3, subscribed: true, uid: '3' },
  { bananas: 70, lastDayPlayed: '2024-05-25', longestStreak: 6, name: 'David', stars: 2, subscribed: false, uid: '4' },
  { bananas: 60, lastDayPlayed: '2024-05-24', longestStreak: 5, name: 'Eve', stars: 1, subscribed: true, uid: '5' },
  { bananas: 110, lastDayPlayed: '2024-05-23', longestStreak: 11, name: 'Frank', stars: 6, subscribed: true, uid: '6' },
  { bananas: 120, lastDayPlayed: '2024-05-22', longestStreak: 12, name: 'Grace', stars: 7, subscribed: false, uid: '7' },
  { bananas: 130, lastDayPlayed: '2024-05-21', longestStreak: 13, name: 'Harry', stars: 8, subscribed: true, uid: '8' },
  { bananas: 140, lastDayPlayed: '2024-05-20', longestStreak: 14, name: 'Ivy', stars: 9, subscribed: false, uid: '9' },
  { bananas: 150, lastDayPlayed: '2024-05-19', longestStreak: 15, name: 'Jack', stars: 10, subscribed: true, uid: '10' },
  { bananas: 10, lastDayPlayed: '2024-05-19', longestStreak: 15, name: 'ZZZ', stars: 10, subscribed: true, uid: '10' },
];

const initialState: LeaderboardState = {
  full: testLeaderboard,
  generated: [],
};

describe('leaderboardReducer', () => {
  it('should handle INITIALIZE_LEADERBOARD', () => {
    const action = initializeLeaderboard({
      full: testLeaderboard,
    });
    const newState = leaderboardReducer(initialState, action);
    expect(newState.full).toEqual(testLeaderboard);
  });

  it('should handle GENERATE_LEADERBOARD with name filter - user does not exist', () => {
    const actionWithUnknownName = generateLeaderboard({
      name: 'UnknownUser',
      option: RankSortOptions.highest,
    });
    const newStateWithUnknownName = leaderboardReducer(initialState, actionWithUnknownName);
    expect(newStateWithUnknownName).toEqual(initialState);
  });

  it.each([
    [RankSortOptions.highest],
    [RankSortOptions.lowest],
    [NameSortOptions.az],
    [NameSortOptions.za],
  ])('should handle GENERATE_LEADERBOARD with name filter - sorted by %s', (option) => {
    const actionWithoutName = generateLeaderboard({
      name: 'Z',
      option: option,
    });
    const newStateWithoutName = leaderboardReducer(initialState, actionWithoutName);
    expect(newStateWithoutName.generated.length).toBe(10);
    if (option === RankSortOptions.highest) {
      expect(newStateWithoutName.generated[9].name).toBe('ZZZ');
    } else if (option === RankSortOptions.lowest) {
      expect(newStateWithoutName.generated[0].name).toBe('ZZZ');
    } else if (option === NameSortOptions.az) {
      expect(newStateWithoutName.generated[9].name).toBe('ZZZ');
    } else if (option === NameSortOptions.za) {
      expect(newStateWithoutName.generated[0].name).toBe('ZZZ');
    }
  });

  it.each([
    [RankSortOptions.highest],
    [RankSortOptions.lowest],
    [NameSortOptions.az],
    [NameSortOptions.za],
  ])('should handle GENERATE_LEADERBOARD without name filter - sorted by %s', (option) => {
    const actionWithoutName = generateLeaderboard({
      name: undefined,
      option: option,
    });
    const newStateWithoutName = leaderboardReducer(initialState, actionWithoutName);
    expect(newStateWithoutName.generated.length).toBe(10);
    if (option === RankSortOptions.highest) {
      expect(newStateWithoutName.generated[0].name).toBe('Jack');
    } else if (option === RankSortOptions.lowest) {
      expect(newStateWithoutName.generated[0].name).toBe('ZZZ');
    } else if (option === NameSortOptions.az) {
      expect(newStateWithoutName.generated[0].name).toBe('Alice');
    } else if (option === NameSortOptions.za) {
      expect(newStateWithoutName.generated[0].name).toBe('ZZZ');
    }
  });

  it('should handle unknown action types', () => {
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: {},
    };
    const newState = leaderboardReducer(initialState, action);
    expect(newState).toEqual(initialState); // Should return the initial state
  });
});
