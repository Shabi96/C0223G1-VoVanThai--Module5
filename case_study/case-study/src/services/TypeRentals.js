import axios from "axios";

export async function getTypeRentals() {
    const res = await axios.get('http://localhost:8080/rental-types');
    return res.data;
}