import axios from "axios";

export async function getAllServiceTypes() {
    const res = await axios.get('http://localhost:8080/service-types');
    return res.data;
}