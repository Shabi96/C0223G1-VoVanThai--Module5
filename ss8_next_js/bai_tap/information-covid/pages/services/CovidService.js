import axios from "axios";

export async function getAll() {
    const res = await axios.get('https://localhost:8080/covids');
    return res.data;
}