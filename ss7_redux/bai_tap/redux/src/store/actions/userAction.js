export const GET_USER_LIST = 'GET_USER_LIST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_ID_DELETE = 'GET_ID_DELETE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

//list=>delete =>saga=> reducer

export const getUserList = () => {
    return {
        type: 'GET_USER_LIST'
    }
}

export const deleteUser = (id) => {
    return {
        type: 'GET_ID_DELETE',
        payload: id
    }
}
 