import axios from "axios";

export async function getTodoList() {
    const res = await axios.get('http://localhost:3001/todoList');
    return res.data;
}

export async function create(todoList) {
    await axios.post('http://localhost:3001/todoList', todoList);
}