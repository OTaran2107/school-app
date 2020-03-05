export const SAVE_STUDENT = 'SAVE_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const REMOVE_ALL_GROUP = 'REMOVE_ALL_GROUP';


export function saveStudent(student) {
    return {
        type: SAVE_STUDENT,
        payload: student
    }
};

export function removeStudent(studentId) {
    return {
        type: REMOVE_STUDENT,
        payload: studentId
    }
};

export function removeGroupStudents(groupId) {
    return {
        type: REMOVE_ALL_GROUP,
        payload: groupId
    }
};