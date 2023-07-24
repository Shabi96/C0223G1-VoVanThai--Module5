import axios from 'axios';

export async function getAllBooks() {
    const res = await axios.get('http://localhost:8080/books');
    return res.data;
}

export async function createBook(book) {
    await axios.post(('http://localhost:8080/books'), book);
}

export async function editBook(id, book) {
    await axios.put('http://localhost:8080/books/' + id, book);
}

export async function getById(id) {
    const res = await axios.get('http://localhost:8080/books/' + id);
    return res.data;
}

export async function deleteBook(id) {
    await axios.delete('http://localhost:8080/books/' + id);
}