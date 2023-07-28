import axios from "axios";

const BASE_URL = 'http://localhost:8080/services/';

export async function getAllServices() {
    const res = await axios.get(BASE_URL);
    return res.data;
}

export async function createService(service) {
    await axios.post(BASE_URL, service);
}

export async function getServiceById(id) {
    const res = await axios.get(BASE_URL + id);
    return res.data;
}

export async function editService(service) {
    await axios.put(BASE_URL + service.id, service);
}