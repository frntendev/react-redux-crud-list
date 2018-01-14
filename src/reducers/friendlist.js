import * as types from '../constants/ActionTypes';

const initialState = {
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
};

export default function friends(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND:
            return {
                ...state,
                friendsById: [
                    ...state.friendsById,
                    {
                        name: action.name,
                        gender:action.gender || 1
                    }
                ],
            };
        case types.DELETE_FRIEND:
            return {
                ...state,
                friendsById: state.friendsById.filter((item, index) => index !== action.id)
            };
        case types.STAR_FRIEND:
            let friends = [...state.friendsById];
            let friend = friends.find((item, index) => index === action.id);
            friend.starred = !friend.starred;
            return {
                ...state,
                friendsById: friends
            };
        default:
            return state;
    }
}
