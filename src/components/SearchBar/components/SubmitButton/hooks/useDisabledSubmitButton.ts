import { useSelector } from "react-redux";
import { ReduxStateType } from "../../../../../redux/store";

export const useDisabledSubmitButton = () => {
  const username  = useSelector((state: ReduxStateType) => state.UserReducer.username);

  return username.length === 0;
};
