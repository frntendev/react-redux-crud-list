import {addFriend, deleteFriend, starFriend} from '../../src/actions/FriendsActions';
import * as types from '../../src/constants/ActionTypes';

describe('Friend List Actions', () => {
    it('Add friend', () => {
        expect(addFriend('Sepehr', 1)).toEqual({
            type: types.ADD_FRIEND,
            name: 'Sepehr',
            gender: 1
        });
        expect(addFriend('Sina', 0)).toEqual({
            type: types.ADD_FRIEND,
            name: 'Sina',
            gender: 0
        });
    });
    it('Delete friend', () => {
        expect(deleteFriend(1)).toEqual({
            type: types.DELETE_FRIEND,
            id: 1
        })
    });
    it('Star friend', () => {
        expect(starFriend(1)).toEqual({
            type: types.STAR_FRIEND,
            id: 1
        })
    })
});