import { LeaderDataType } from "../redux/actions/leaderListAction";
import { stringSimilarity } from "./fuzzySearch";
import { trantfromLeaderBoardData } from "./leaderBroadHelper";

export const searchUser = (searchStr: string) => {
    const leaderBoradData = trantfromLeaderBoardData();
    const similarityWithSearchStr = leaderBoradData
        .map((item) => ({
            ...item,
            similarity: stringSimilarity(searchStr, item.name),
        }))
        .filter(item => item.similarity !== 0)
        .sort((a, b) => a.realIndex !== b.realIndex ? a.realIndex - b.realIndex : b.similarity - a.similarity);

    const matchCriteria = similarityWithSearchStr.find(item => item.similarity === 1);
    return unshiftAndRemoveDuplicate(similarityWithSearchStr, matchCriteria);
};

function unshiftAndRemoveDuplicate(array: LeaderDataType[], object?: LeaderDataType) {
    if (!object) {
        return array;
    }

    const newArray = array.filter(item => JSON.stringify(item) !== JSON.stringify(object));
    newArray.unshift(object);
    return newArray;
}
