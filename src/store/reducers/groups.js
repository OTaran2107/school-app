import { SAVE_GROUP, REMOVE_GROUP } from '../actions/groups';

const initialState = {
    list: [
        {
            id: 1,
            name: '1-A'
        },
        {
            id: 2,
            name: '1-B'
        },
        {
            id: 3,
            name: '1-C'
        },
        {
            id: 4,
            name: '1-D'
        }
    ]
};

function updateGroup(list, group) {
    return list.map(item => item.id === group.id ? group : item);
}

function createGroup(list, group) {
    group.id = Date.now();
    return [...list, group];
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SAVE_GROUP:
            return {
                ...state,
                list: payload.id ? updateGroup(state.list, payload) : createGroup(state.list, payload)
            }
        case REMOVE_GROUP:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}