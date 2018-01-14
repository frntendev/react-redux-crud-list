import reducer from '../../src/reducers/friendlist';
import * as types from '../../src/constants/ActionTypes';

describe('Friend List Reducer', () => {
    it('Add an item to friend list', () => {
        expect(reducer({friendsById: []}, {type: types.ADD_FRIEND, name: "Sepehr", gender: 1})).toEqual({
            friendsById: [
                {
                    name: 'Sepehr',
                    gender: 1
                }
            ]
        });
        expect(reducer({friendsById: []}, {type: types.ADD_FRIEND, name: "Sepehr"})).toEqual({
            friendsById: [
                {
                    name: 'Sepehr',
                    gender: 1
                }
            ]
        });
    });
    it('Remove an item from friend list', () => {
        expect(reducer({friendsById: [{name: "Sepehr"}]}, {type: types.DELETE_FRIEND, id: 0})).toEqual({
            friendsById: []
        });
        expect(reducer({friendsById: [{name: "Sepehr"}]}, {type: types.DELETE_FRIEND, id: 2})).toEqual({
            friendsById: [{name: "Sepehr"}]
        })
    });
    it('Give a star to a friend', () => {
        expect(reducer({friendsById: [{name: "Sepehr"}]}, {type: types.STAR_FRIEND, id: 0})).toEqual({
            friendsById: [{name: "Sepehr", starred: true}]
        });
        expect(reducer({friendsById: [{name: "Sepehr", starred: true}]}, {type: types.STAR_FRIEND, id: 0})).toEqual({
            friendsById: [{name: "Sepehr", starred: false}]
        });
        expect(reducer({
            friendsById: [{name: "Sepehr", starred: true}, {
                name: "Sina",
                starred: true
            }]
        }, {type: types.STAR_FRIEND, id: 1})).toEqual({
            friendsById: [{name: "Sepehr", starred: true}, {name: "Sina", starred: false}]
        })
    });
    it('Check default status', () => {
        expect(reducer(undefined, {type: 'unexpected'})).toEqual({
            friendsById: [
                {
                    name: 'Behrooz Azizi',
                    starred: true,
                    gender: 1
                },
                {
                    name: 'Saman Mazaheri',
                    starred: false,
                    gender: 1
                },
                {
                    name: 'Leyla Diba',
                    starred: false,
                    gender: 0
                },
                {
                    name: 'Asal Zekavat',
                    starred: false,
                    gender: 0
                },
                {
                    name: 'Sina Seyedy',
                    starred: false,
                    gender: 1
                },
                {
                    name: 'Sepideh Sedaghat',
                    starred: false,
                    gender: 0
                }
            ]
        })
    });
});