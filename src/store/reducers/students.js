import { SAVE_STUDENT, REMOVE_STUDENT, REMOVE_ALL_GROUP } from '../actions/students';

const initialState = {
    list: [
        {
            id: 1,
            firstName: 'Olga',
            lastName: 'Taran',
            groupId: 1
        },
        {
            id: 2,
            firstName: 'Elena',
            lastName: 'Kravchenko',
            groupId: 4
        },
        {
            id: 3,
            firstName: 'Julia',
            lastName: 'Shevchenko',
            groupId: 3
        },
        {
            id: 4,
            firstName: 'Anton',
            lastName: 'Belov',
            groupId: 2
        },
        {
            id: 5,
            firstName: 'Pavel',
            lastName: 'Suhanov',
            groupId: 2
        },
        {
            id: 6,
            firstName: 'Taras',
            lastName: 'Shevchenko',
            groupId: 4
        }
    ]
};

function updateStudent(list, student) {
    return list.map(item => item.id === student.id ? student : item);
}

function createStudent(list, student) {
    student.id = Date.now();
    return [...list, student];
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SAVE_STUDENT:
            return {
                ...state,
                list: payload.id ? updateStudent(state.list, payload) : createStudent(state.list, payload)
            }
        case REMOVE_STUDENT:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            }
        case REMOVE_ALL_GROUP:
                return {
                    ...state,
                    // eslint-disable-next-line eqeqeq
                    list: state.list.filter(item => item.groupId != payload)
                }
        default:
            return state;
    }
}