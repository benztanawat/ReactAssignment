import { SET_USERNAME, SET_SEARCH_TAG, SET_SELECTED_USER } from "./userAction"
import * as actions from './userAction'; // replace with the actual path
describe('userAction', () => {
    it('should set username of user when called setUernameAction', () => {
        const payload = "Test"
        const expectedAction = {
          type: SET_USERNAME,
          payload
        }
        const dispatch = jest.fn();
        actions.setUernameAction(payload)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })

    it('should set search tag user when called setSearchTagAction', () => {
        const payload = "Benz"
        const expectedAction = {
          type: SET_SEARCH_TAG,
          payload
        }
        const dispatch = jest.fn();
        actions.setSearchTagAction(payload)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })

    it("should set uid's selectedUser of user when called setUidSelectedUserAction", () => {
        const payload = "id-test"
        const expectedAction = {
          type: SET_SELECTED_USER,
          payload
        }
        const dispatch = jest.fn();
        actions.setUidSelectedUserAction(payload)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction)
    })
})