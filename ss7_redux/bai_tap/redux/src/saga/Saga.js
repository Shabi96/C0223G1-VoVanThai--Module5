import { put, takeEvery } from 'redux-saga/effects';
import { GET_USER_LIST, GET_USER_SUCCESS, GET_ID_DELETE, DELETE_SUCCESS } from '../store/actions/userAction';
import axios from 'axios';

function* workGetUserList() {
    const res = yield axios.get('https://jsonplaceholder.typicode.com/users');
    yield put({ type: GET_USER_SUCCESS, users: res.data });
}

function* workDeleteUser(action) {
    const res = yield axios.delete('https://jsonplaceholder.typicode.com/users/' + action.payload);
    alert(res.status);
    yield put({ type: DELETE_SUCCESS, payload: action.payload})
}


function* UserSaga() {
    yield takeEvery(GET_USER_LIST, workGetUserList);
    yield takeEvery(GET_ID_DELETE, workDeleteUser);
}

export default UserSaga;