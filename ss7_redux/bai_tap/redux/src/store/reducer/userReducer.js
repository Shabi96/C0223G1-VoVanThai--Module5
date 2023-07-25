import { GET_USER_SUCCESS, DELETE_SUCCESS } from "../actions/userAction";


const initialValue = {
    users: []
};

const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {...state, users: action.users};
        case DELETE_SUCCESS:
            const id = action.payload;
            console.log(id);
            const list = [...state.users];
            const newList = list.filter(user => user.id !== id);
            return {...state, users: newList};
        default:
            return state;    
    }
}

export default userReducer;