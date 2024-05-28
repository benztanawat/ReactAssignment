import LeaderListReducer, {
  InitialStateType,
  LeaderListReducerActionType,
  SearchingModeEnum,
} from "./LeaderListReducer"; // replace with the actual path
import { INITIAL_LEADER_DATA, RESET_FILTER, SET_TOGGLE_SEARCH_RESULT, UPDATE_AND_SORT_LEADER_BOARD_BY_NAME, UPDATE_AND_SORT_LEADER_BOARD_BY_RANK, UPDATE_LEADER_BOARD } from "../actions/leaderListAction"; // replace with the actual path
import { updateLeaderBoard } from "../../helper/leaderBroadHelper";

import * as leaderBoardHelper from '../../helper/leaderBroadHelper'; // replace with the actual path


describe("LeaderListReducer", () => {
  const initialState: InitialStateType = {
    leaderList: [],
    leaderBoardShowedData: [],
    isSortRankByASC: false,
    isSortNameByASC: false,
    selectedUser: null,
    isToggleSearchResult: false,
    searchingMode: SearchingModeEnum.DEFAULT,
  };

  const leaderData = [
    {
      bananas: 3550,
      lastDayPlayed: "2019-01-28",
      longestStreak: 1,
      name: "Chaiya Vomschee",
      stars: 14,
      subscribed: false,
      uid: "zrPeBbET8jWcbxPOzXiIZ3gFezE3",
      realIndex: 24,
      similarity: 0.0625,
    },
    {
      bananas: 3200,
      lastDayPlayed: "2018-07-01",
      longestStreak: 1,
      name: "OneEyed JackBurton",
      stars: 15,
      subscribed: false,
      uid: "zBqesUIHQxZhKlmeiuIeX1URPrk2",
      realIndex: 29,
      similarity: 0.05263157894736842,
    },
    {
      bananas: 3150,
      lastDayPlayed: "2018-12-27",
      longestStreak: 1,
      name: "David",
      stars: 20,
      subscribed: false,
      uid: "z4rQXao1uwYh2ur4dfzDHGwOp5A2",
      realIndex: 31,
      similarity: 0.5,
    },
    {
      bananas: 3150,
      lastDayPlayed: "2018-10-22",
      longestStreak: 2,
      name: "Mohamad R Julian Wangsadinata",
      stars: 17,
      subscribed: false,
      uid: "zywwDpX4ovUw52Kt2vOP6tFbpzG3",
      realIndex: 31,
      similarity: 0.03333333333333333,
    },
    {
      bananas: 2750,
      lastDayPlayed: "2018-10-05",
      longestStreak: 2,
      name: "David Deluca",
      stars: 17,
      subscribed: false,
      uid: "zQHqAv92CPNkIHAE1W9zxHfhTn92",
      realIndex: 36,
      similarity: 0.23076923076923078,
    },
    {
      bananas: 2650,
      lastDayPlayed: "2019-01-06",
      longestStreak: 1,
      name: "ASSD",
      stars: 16,
      subscribed: false,
      uid: "z9pzIUcQ4kNGy78cuZnEZjEFGy22",
      realIndex: 39,
      similarity: 0.2,
    },
    {
      bananas: 2300,
      lastDayPlayed: "2018-12-10",
      longestStreak: 2,
      name: "ridha fatima",
      stars: 15,
      subscribed: false,
      uid: "zTS52kVamBgVt58lw1XqZsPTRL72",
      realIndex: 47,
      similarity: 0.07692307692307693,
    },
    {
      bananas: 2100,
      lastDayPlayed: "2018-06-24",
      longestStreak: 1,
      name: "Muhammad Aizam",
      stars: 8,
      subscribed: false,
      uid: "zWPzss20Xpecs9tpiAESFOzNlpc2",
      realIndex: 52,
      similarity: 0.06666666666666667,
    },
    {
      bananas: 2050,
      lastDayPlayed: "2018-11-28",
      longestStreak: 1,
      name: "Jessica Langford",
      stars: 12,
      subscribed: false,
      uid: "zZchLvjDn6VZ0ToFxHbRwibINsC2",
      realIndex: 54,
      similarity: 0.058823529411764705,
    },
    {
      bananas: 1700,
      lastDayPlayed: "2018-10-15",
      longestStreak: 1,
      name: "Abigail Kirkbride",
      stars: 10,
      subscribed: false,
      uid: "zPctgFebBPMzQRsWoglpcdJsn052",
      realIndex: 69,
      similarity: 0.05555555555555555,
    },
    {
      bananas: 1700,
      lastDayPlayed: "2019-01-22",
      longestStreak: 1,
      name: "Lia Yuliana Novita",
      stars: 12,
      subscribed: false,
      uid: "zyQas9lZgBePwCA1fAowPMGlxU72",
      realIndex: 69,
      similarity: 0.05263157894736842,
    },
    {
      bananas: 1650,
      lastDayPlayed: "2018-04-05",
      longestStreak: 1,
      name: "Levi Hu",
      stars: 11,
      subscribed: false,
      uid: "zGSkeA0AecOSQiSGK8f0KH8AoYE2",
      realIndex: 73,
      similarity: 0.125,
    },
    {
      bananas: 1650,
      lastDayPlayed: "2018-05-23",
      longestStreak: 1,
      name: "Raphael Perroud",
      stars: 11,
      subscribed: false,
      uid: "zDV2IhOoEgSYTqhB0oSgcN4YEij1",
      realIndex: 73,
      similarity: 0.0625,
    },
    {
      bananas: 1400,
      lastDayPlayed: "2018-05-08",
      longestStreak: 1,
      name: "Vasu Geramona",
      stars: 12,
      subscribed: false,
      uid: "ytXuFVCwsLMoimdn6Xz2Bx5W1072",
      realIndex: 80,
      similarity: 0.07142857142857142,
    },
    {
      bananas: 1200,
      lastDayPlayed: "2018-12-06",
      longestStreak: 1,
      name: "Muhammad Rizqi Kurniadi",
      stars: 9,
      subscribed: false,
      uid: "zbvHNGMUZBPHhrbyeNIcctrGzih1",
      realIndex: 85,
      similarity: 0.041666666666666664,
    },
    {
      bananas: 1100,
      lastDayPlayed: "2018-08-04",
      longestStreak: 1,
      name: "Bernard Andy Eugenio Gulla",
      stars: 9,
      subscribed: false,
      uid: "ymXlQBolGjc664PfpwjeMG3slbD3",
      realIndex: 91,
      similarity: 0.037037037037037035,
    },
    {
      bananas: 1000,
      lastDayPlayed: "2018-09-18",
      longestStreak: 1,
      name: "Muhd Sabir Ibrahim",
      stars: 10,
      subscribed: false,
      uid: "z7ZQBUiGFvRQgbO7BfyYnP4u2cZ2",
      realIndex: 97,
      similarity: 0.05263157894736842,
    },
    {
      bananas: 900,
      lastDayPlayed: "2018-05-09",
      longestStreak: 2,
      name: "Victoria Vang",
      stars: 8,
      subscribed: false,
      uid: "yn8Jn7LPoCcL3e6KZtGx3RmzDB63",
      realIndex: 99,
      similarity: 0.14285714285714285,
    },
    {
      bananas: 750,
      lastDayPlayed: "2018-09-03",
      longestStreak: 1,
      name: "Venkata Surekha",
      stars: 8,
      subscribed: false,
      uid: "z729ZQFVSXN1eAJeSaPDUkvS8UY2",
      realIndex: 113,
      similarity: 0.0625,
    },
    {
      bananas: 750,
      lastDayPlayed: "2018-12-09",
      longestStreak: 1,
      name: "Kieron Halliday",
      stars: 8,
      subscribed: false,
      uid: "zphE5Hyx0BULI7wAxyUcM39NGkh2",
      realIndex: 113,
      similarity: 0.0625,
    },
    {
      bananas: 500,
      lastDayPlayed: "2018-08-27",
      longestStreak: 1,
      name: "Luis Villafranca",
      stars: 5,
      subscribed: false,
      uid: "zjJL7cCWlqXso4M8qGfXIe4yYft2",
      realIndex: 141,
      similarity: 0.11764705882352941,
    },
    {
      bananas: 350,
      lastDayPlayed: "2018-10-23",
      longestStreak: 1,
      name: "Alpesh Rathod",
      stars: 6,
      subscribed: false,
      uid: "zmULVDDBUEfYKwa4zsecyPjCRBn1",
      realIndex: 172,
      similarity: 0.07142857142857142,
    },
    {
      bananas: 350,
      lastDayPlayed: "2018-11-09",
      longestStreak: 1,
      name: "Pretty Based 9000",
      stars: 6,
      subscribed: false,
      uid: "zhx16l0A9lh8VjNJ1b5H7Dpi9GA2",
      realIndex: 172,
      similarity: 0.05555555555555555,
    },
    {
      bananas: 300,
      lastDayPlayed: "2018-10-30",
      longestStreak: 1,
      name: "DD",
      stars: 4,
      subscribed: false,
      uid: "yy1gzdAO5YUJEW9DNdclPsrXvgR2",
      realIndex: 181,
      similarity: 0.25,
    },
    {
      bananas: 300,
      lastDayPlayed: "2018-09-08",
      longestStreak: 1,
      name: "Ed Ruiz",
      stars: 5,
      subscribed: false,
      uid: "z14XAQIat8bTKwm37XXAtYdRy8p1",
      realIndex: 181,
      similarity: 0.125,
    },
    {
      bananas: 300,
      lastDayPlayed: "2018-10-23",
      longestStreak: 1,
      name: "Eve Haumschild",
      stars: 5,
      subscribed: false,
      uid: "zqbRQv9U3JVa4w9eisW4C6unycy2",
      realIndex: 181,
      similarity: 0.06666666666666667,
    },
    {
      bananas: 200,
      lastDayPlayed: "2018-07-01",
      longestStreak: 1,
      name: "ASD",
      stars: 6,
      subscribed: false,
      uid: "z59xxcF2Y2YBzFbRbaZg1AqU1vj1",
      realIndex: 193,
      similarity: 0.25,
    },
    {
      bananas: 200,
      lastDayPlayed: "2018-09-09",
      longestStreak: 1,
      name: "Raisa Ahmed",
      stars: 6,
      subscribed: false,
      uid: "zQZEYd9XNGggvGd5f598YLDFpYP2",
      realIndex: 193,
      similarity: 0.08333333333333333,
    },
    {
      bananas: 200,
      lastDayPlayed: "2018-10-07",
      longestStreak: 1,
      name: "Avita Sirimitr",
      stars: 6,
      subscribed: false,
      uid: "z12664btwsMUWMvf2krKYMgGZos1",
      realIndex: 193,
      similarity: 0.06666666666666667,
    },
    {
      bananas: 200,
      lastDayPlayed: "2019-01-11",
      longestStreak: 1,
      name: "valentina keisham",
      stars: 6,
      subscribed: false,
      uid: "zLYinz5lkoaurRotKJKokygFrRF3",
      realIndex: 193,
      similarity: 0.05555555555555555,
    },
    {
      bananas: 150,
      lastDayPlayed: "2018-08-18",
      longestStreak: 1,
      name: "ASD",
      stars: 5,
      subscribed: true,
      uid: "z7SD5HJRZCYnCYNpk3gseTaLbF82",
      realIndex: 235,
      similarity: 0.25,
    },
    {
      bananas: 150,
      lastDayPlayed: "2019-01-10",
      longestStreak: 1,
      name: "bernard vyncke",
      stars: 5,
      subscribed: false,
      uid: "zV0CUgyQl2bqFpna5UrYPml6fvv1",
      realIndex: 235,
      similarity: 0.13333333333333333,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "David Bailey",
      stars: 5,
      subscribed: false,
      uid: "zlu1B1NCJSUHYb6dojcKrJ8qRAv2",
      realIndex: 268,
      similarity: 0.23076923076923078,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Victoria Lea",
      stars: 5,
      subscribed: false,
      uid: "yoSIZR2qFWPHCxezohG6A6j1Z0A3",
      realIndex: 268,
      similarity: 0.15384615384615385,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Pedro Vizioli",
      stars: 5,
      subscribed: false,
      uid: "yy4I38Qdg5W4clyDUfGXD5SqI2c2",
      realIndex: 268,
      similarity: 0.14285714285714285,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Hai Vu",
      stars: 5,
      subscribed: false,
      uid: "zMLJQx3m37TMuLiiEANvoiv1Hme2",
      realIndex: 268,
      similarity: 0.14285714285714285,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Leonard",
      stars: 5,
      subscribed: false,
      uid: "zCpS1Z4orTfwRYr7HCfDCVIeVt73",
      realIndex: 268,
      similarity: 0.125,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "virginia aurelia",
      stars: 5,
      subscribed: false,
      uid: "zOlFL1qXE4caH2J7nJVqcw0YvRH3",
      realIndex: 268,
      similarity: 0.11764705882352941,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Ree V.R.",
      stars: 5,
      subscribed: false,
      uid: "zI8TdPpA1lSL3bFy82gvpUB9dRL2",
      realIndex: 268,
      similarity: 0.1111111111111111,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "IDK LIFE",
      stars: 5,
      subscribed: false,
      uid: "zXCjkTO8pXeNHZ3RHdIhrz6AfP33",
      realIndex: 268,
      similarity: 0.1111111111111111,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Victoria Phongpaew",
      stars: 5,
      subscribed: false,
      uid: "zlS3xq5m8SMHLGZ9A3Gv8iepbxn1",
      realIndex: 268,
      similarity: 0.10526315789473684,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Alvin Lee",
      stars: 5,
      subscribed: false,
      uid: "yxtWwo0CtXXsRooLiRy2S0U1ND63",
      realIndex: 268,
      similarity: 0.1,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Alvin Lai",
      stars: 5,
      subscribed: false,
      uid: "z159rqfnAhUsyFIoRlptymEWheP2",
      realIndex: 268,
      similarity: 0.1,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Vance Lee",
      stars: 4,
      subscribed: false,
      uid: "znrWTygtGSS9JG4YqLGkM7dsFeO2",
      realIndex: 268,
      similarity: 0.1,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "venus chong",
      stars: 5,
      subscribed: false,
      uid: "zBqRAlo7QSRJT75fcnMC4cA3PkG3",
      realIndex: 268,
      similarity: 0.08333333333333333,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Lewie Isidro",
      stars: 5,
      subscribed: false,
      uid: "z1b291SyyPewxqxcykF5fHc15uI2",
      realIndex: 268,
      similarity: 0.07692307692307693,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Amiey Mohamad",
      stars: 0,
      subscribed: false,
      uid: "zIcuVjS7HVUZ7xXL6mEVAXhfwf83",
      realIndex: 268,
      similarity: 0.07142857142857142,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Olivier Gaudin",
      stars: 5,
      subscribed: false,
      uid: "z2YsmwEl9abzIGXpeq3w7ProJGL2",
      realIndex: 268,
      similarity: 0.06666666666666667,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Shawn Griswold",
      stars: 5,
      subscribed: false,
      uid: "z7ucAO8UMkTrJEl6oTVzfVwP6D53",
      realIndex: 268,
      similarity: 0.06666666666666667,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Dafydd Williams",
      stars: 5,
      subscribed: false,
      uid: "zffgmofbCQeMIvbzD783dFL7NhC3",
      realIndex: 268,
      similarity: 0.0625,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Deviana Anggraini",
      stars: 5,
      subscribed: false,
      uid: "zQxkk8EsWYd7HVJ0ahedDjeCMM53",
      realIndex: 268,
      similarity: 0.05555555555555555,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Joseph Rand Hilario",
      stars: 5,
      subscribed: false,
      uid: "zv708TiAHEPeSqA7W4PTlFDlfKq1",
      realIndex: 268,
      similarity: 0.05,
    },
    {
      bananas: 0,
      lastDayPlayed: "2017-11-01",
      longestStreak: 0,
      name: "Xavier Mercedes Thiefofhearts",
      stars: 5,
      subscribed: false,
      uid: "z00HnRNFIdgQaX1mjUy6alaa8tN2",
      realIndex: 268,
      similarity: 0.03333333333333333,
    },
  ];

  const selectedUserData = {
    bananas: 3150,
    lastDayPlayed: "2018-12-27",
    longestStreak: 1,
    name: "David",
    stars: 20,
    subscribed: false,
    uid: "z4rQXao1uwYh2ur4dfzDHGwOp5A2",
    realIndex: 31,
    similarity: 1,
}  

  it("should handle INITIAL_LEADER_DATA", () => {
 
    const initialLeaderDataAction: LeaderListReducerActionType = {
      type: INITIAL_LEADER_DATA,
      payload: leaderData,
    };

    const expectedState = {
      ...initialState,
      isSortRankByASC: false,
      isSortNameByASC: false,
      searchingMode: SearchingModeEnum.DEFAULT,
      leaderList: leaderData,
      leaderBoardShowedData: leaderData.map((leader) => ({ ...leader })),
    };

    expect(LeaderListReducer(initialState, initialLeaderDataAction)).toEqual(
      expectedState
    );
  });

  it("should handle REMOVE_SELECTED_USER", () => {
    const resetFilterAction: LeaderListReducerActionType = {
      type: RESET_FILTER,
    };

    const expectedState = {
      ...initialState,
      isSortRankByASC: false,
      isSortNameByASC: false,
      searchingMode: SearchingModeEnum.DEFAULT,
      leaderList: [],
      selectedUser: null,
      leaderBoardShowedData: [],
    };

    expect(LeaderListReducer(initialState, resetFilterAction)).toEqual(
      expectedState
    );
  });

  it('should handle UPDATE_LEADER_BOARD', () => {
    const initialState: InitialStateType = {
      leaderList: [],
      leaderBoardShowedData: [],
      isSortRankByASC: false,
      isSortNameByASC: false,
      selectedUser: null,
      isToggleSearchResult: false,
      searchingMode: SearchingModeEnum.DEFAULT,
    };

    const updatedLeaderBoardData = [...leaderData, selectedUserData];

    const updateLeaderBoardSpy = jest.spyOn(leaderBoardHelper, 'updateLeaderBoard');
    updateLeaderBoardSpy.mockReturnValue(updatedLeaderBoardData);

    const updateLeaderBoardAction: LeaderListReducerActionType = {
      type: UPDATE_LEADER_BOARD,
      payload: { data: selectedUserData },
    };

    const expectedState = {
      ...initialState,
      selectedUser: selectedUserData,
      leaderBoardShowedData: updatedLeaderBoardData,
    };

    expect(LeaderListReducer(initialState, updateLeaderBoardAction)).toEqual(expectedState);
  });

  it('should handle UPDATE_AND_SORT_LEADER_BOARD_BY_RANK', () => {
    const initialState: InitialStateType = {
      leaderList: [],
      leaderBoardShowedData: [],
      isSortRankByASC: false,
      isSortNameByASC: false,
      selectedUser: null,
      isToggleSearchResult: false,
      searchingMode: SearchingModeEnum.DEFAULT,
    };

    const updatedLeaderBoardData = [...leaderData, selectedUserData];

    const transformLeaderBoardDataSpy = jest.spyOn(leaderBoardHelper, 'trantfromLeaderBoardData');
    const updateLeaderBoardSpy = jest.spyOn(leaderBoardHelper, 'updateLeaderBoard');

    transformLeaderBoardDataSpy.mockReturnValue(leaderData);
    updateLeaderBoardSpy.mockReturnValue(updatedLeaderBoardData);

    const updateAndSortByRankAction: LeaderListReducerActionType = {
      type: UPDATE_AND_SORT_LEADER_BOARD_BY_RANK,
    };

    const expectedState = {
      ...initialState,
      leaderBoardShowedData: updatedLeaderBoardData,
      isSortRankByASC: !initialState.isSortRankByASC,
      searchingMode: SearchingModeEnum.RANK,
    };

    expect(LeaderListReducer(initialState, updateAndSortByRankAction)).toEqual(expectedState);
  });

  it('should handle UPDATE_AND_SORT_LEADER_BOARD_BY_NAME', () => {
    const initialState: InitialStateType = {
      leaderList: [],
      leaderBoardShowedData: [],
      isSortRankByASC: false,
      isSortNameByASC: false,
      selectedUser: null,
      isToggleSearchResult: false,
      searchingMode: SearchingModeEnum.DEFAULT,
    };

    const updatedLeaderBoardData = [...leaderData, selectedUserData];

    const transformLeaderBoardDataSpy = jest.spyOn(leaderBoardHelper, 'trantfromLeaderBoardData');
    const updateLeaderBoardSpy = jest.spyOn(leaderBoardHelper, 'updateLeaderBoard');



    transformLeaderBoardDataSpy.mockReturnValue(leaderData);
    updateLeaderBoardSpy.mockReturnValue(updatedLeaderBoardData);

    const updateAndSortByNameAction: LeaderListReducerActionType = {
      type: UPDATE_AND_SORT_LEADER_BOARD_BY_NAME,
    };

    const expectedState = {
      ...initialState,
      leaderBoardShowedData: updatedLeaderBoardData,
      isSortNameByASC: !initialState.isSortNameByASC,
      searchingMode: SearchingModeEnum.NAME,
    };

    expect(LeaderListReducer(initialState, updateAndSortByNameAction)).toEqual(expectedState);
  });

  it('should handle SET_TOGGLE_SEARCH_RESULT', () => {
    const setToggleSearchResultAction: LeaderListReducerActionType = {
      type: SET_TOGGLE_SEARCH_RESULT,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      isToggleSearchResult: true,
    };

    expect(LeaderListReducer(initialState, setToggleSearchResultAction)).toEqual(expectedState);
  });

});
