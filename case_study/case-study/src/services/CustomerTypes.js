import axios from "axios";

export async function getAllCustomerTypes() {
    const res = await axios.get('http://localhost:8080/customer-types');
    return res.data;
}