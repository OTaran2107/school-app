export const SAVE_GROUP = 'SAVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';


export function saveGroup(group) {
    return {
        type: SAVE_GROUP,
        payload: group
    }
};

export function removeGroup(groupId) {
    return {
        type: REMOVE_GROUP,
        payload: groupId
    }
};