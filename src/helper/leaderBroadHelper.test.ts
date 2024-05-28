
import { LeaderDataType } from "../redux/actions/leaderListAction";
import { SearchingModeEnum } from "../redux/reducers/LeaderListReducer";
import { updateLeaderBoard } from "./leaderBroadHelper"; // replace with the actual path

describe("updateLeaderBoard", () => {
  describe("sort by rank", () => {

    const mockleaderList: LeaderDataType[] = [
        {
          name: "User1",
          bananas: 5,
          uid: "1",
          realIndex: 1,
          lastDayPlayed: "",
          longestStreak: 0,
          stars: 0,
          subscribed: false,
        },
        {
          name: "User2",
          bananas: 10,
          uid: "2",
          realIndex: 2,
          lastDayPlayed: "",
          longestStreak: 0,
          stars: 0,
          subscribed: false,
        },
        {
          name: "User3",
          bananas: 7,
          uid: "3",
          realIndex: 3,
          lastDayPlayed: "",
          longestStreak: 0,
          stars: 0,
          subscribed: false,
        },
      ];
    const mockUserData = {
        name: "User4",
        bananas: 15,
        uid: "4",
        realIndex: 4,
        lastDayPlayed: "",
        longestStreak: 0,
        stars: 0,
        subscribed: false,
    }
    it("sorts leaderboard by rank ASC", () => {
      const data: LeaderDataType = {} as LeaderDataType;
      const result = updateLeaderBoard({
        leaderList: mockleaderList,
        searchingMode: SearchingModeEnum.RANK,
        isSortRank: true,
        isSortName: false,
        data,
      });
      expect(result[0].name).toBe("User1");
      expect(result[1].name).toBe("User3");
      expect(result[2].name).toBe("User2");
    });

    it("sorts leaderboard by rank DESC", () => {
      const data: LeaderDataType = {} as LeaderDataType;
      const result = updateLeaderBoard({
        leaderList: mockleaderList,
        searchingMode: SearchingModeEnum.RANK,
        isSortRank: false,
        isSortName: false,
        data,
      });
      expect(result[0].name).toBe("User2");
      expect(result[1].name).toBe("User3");
      expect(result[2].name).toBe("User1");
    });

    it("Sorts leaderboard in ascending order by rank and replaces the last user if the selected user has more bananas.", () => {
      const result = updateLeaderBoard({
        leaderList: mockleaderList,
        searchingMode: SearchingModeEnum.RANK,
        isSortRank: true,
        isSortName: false,
        data: mockUserData,
      });
      expect(result[0].name).toBe("User1");
      expect(result[1].name).toBe("User3");
      expect(result[2].name).toBe("User2");
      expect(result[3].name).toBe("User4");
    });

    it("Sorts leaderboard in ascending order by rank and replaces the last user if the selected user has more bananas.", () => {
      const result = updateLeaderBoard({
        leaderList: mockleaderList,
        searchingMode: SearchingModeEnum.RANK,
        isSortRank: true,
        isSortName: false,
        data: mockUserData,
      });
      expect(result[0].name).toBe("User1");
      expect(result[1].name).toBe("User3");
      expect(result[2].name).toBe("User2");
      expect(result[3].name).toBe("User4");
    });
  });
  describe("sort by name", () => {
    const mockLeaderList: LeaderDataType[] = [
        {
          name: "A",
          bananas: 5,
          uid: "1",
          realIndex: 1,
          lastDayPlayed: "",
          longestStreak: 0,
          stars: 0,
          subscribed: false,
        },
        {
          name: "B",
          bananas: 10,
          uid: "2",
          realIndex: 2,
          lastDayPlayed: "",
          longestStreak: 0,
          stars: 0,
          subscribed: false,
        },
        {
          name: "C",
          bananas: 7,
          uid: "3",
          realIndex: 3,
          lastDayPlayed: "",
          longestStreak: 0,
          stars: 0,
          subscribed: false,
        },
      ];
    it("sorts leaderboard by name ASC", () => {
     
      const data: LeaderDataType = {} as LeaderDataType;
      const result = updateLeaderBoard({
        leaderList: mockLeaderList,
        searchingMode: SearchingModeEnum.NAME,
        isSortRank: false,
        isSortName: true,
        data,
      });
      expect(result[0].name).toBe("A");
      expect(result[1].name).toBe("B");
      expect(result[2].name).toBe("C");
    });

    it("sorts leaderboard by name DESC", () => {
      const data: LeaderDataType = {} as LeaderDataType;
      const result = updateLeaderBoard({
        leaderList: mockLeaderList,
        searchingMode: SearchingModeEnum.NAME,
        isSortRank: false,
        isSortName: false,
        data,
      });
      expect(result[0].name).toBe("C");
      expect(result[1].name).toBe("B");
      expect(result[2].name).toBe("A");
    });
  });
});
