import axios from 'axios';

export async function getAllSong(page) {
    const res = await axios.get('http://localhost:8080/spotifys/' + page + '/' + 2);
    return res.data;
}

export async function create(song) {
    await axios.post('http://localhost:8080/spotifys/', song);
}

export async function publicSong(id) {
    await axios.put('http://localhost:8080/spotifys/' + id);
}

export async function getSongById(id) {
    const res = await axios.get('http://localhost:8080/spotifys/' + id);
    return res.data;
}

export async function searchByName(name, page) {
    const res = await axios.get('http://localhost:8080/spotifys/search/' + name + '/' + page);
    return res.data;
}

export async function editSong(song) {
    await axios.put('http://localhost:8080/spotifys/', song);
}

export async function deleteSong(id) {
    await axios.delete('http://localhost:8080/spotifys/' + id);
}