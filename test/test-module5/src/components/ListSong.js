import React, { useEffect, useState } from "react";
import { deleteSong, getAllSong, getSongById, publicSong, searchByName } from "../services/SongService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function AllSong() {
    const [songLists, setSongLists] = useState([]);
    const navigate = useNavigate();
    const [song, setSong] = useState({});
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const nextPage = async () => {
        if (page < totalPage - 1) {
            setPage(page + 1);
        }
    }

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const getAll = async () => {
        const data = await getAllSong(page);
        setTotalPage(data.totalPages);
        setSongLists(data.content);
    }

    const handleCreateSong = () => {
        navigate('/create');
    }

    const handleShowSong = async (id) => {
        const data = await getSongById(id);
        console.log(data);
        setSong(data);
    }

    const changStatus = async (id) => {
        console.log(id);
        const songSearch = await getSongById(id);
        console.log(songSearch);
        Swal.fire({
            icon: 'question',
            title: "Xác nhận",
            text: 'Bạn có muốn công khai bài hát "' + songSearch.name + '" hay không?',
            showCancelButton: true,
            confirmButtonText: 'Có',
            cancelButtonText: 'Không',
            reverseButtons: true
        }).then((res) => {
            if (res.isConfirmed) {
                publicSong(songSearch.id).then(() => {
                    getAllSong(page).then((data) => {
                        setSongLists(data.content);
                    })
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Công khai thành công!!!!',
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        })
    }

    const searchSong = async () => {
        const name = document.getElementById('nameSearch').value;
        if (name == '') {
            const data = await getAllSong(page);
            setTotalPage(data.totalPages);
            setSongLists(data.content);
        } else {
            const dataSearch = await searchByName(name, page);
            console.log(dataSearch);
            setTotalPage(dataSearch.totalPages);
            setSongLists(dataSearch.content);
        }
    }

    const editSongById = (id) => {
        navigate('/edit/' + id);
    }

    const deleteById = (id, name) => {
        console.log(id, name);
        Swal.fire({
            icon: 'warning',
            title: 'Xác nhận xóa',
            text: 'Bạn có chắc chắc muốn xóa bài hát ' + name,
            showCancelButton: true,
            confirmButtonText: 'Có!!!!',
            cancelButtonText: 'Hủy',
            reverseButtons: true
        }).then((res) => {
            if (res.isConfirmed) {
                deleteSong(id).then(async () => {
                    const data = await getAllSong(page);
                    setSongLists(data.content);
                    Swal.fire({
                        icon: 'success',
                        title: 'Xóa thành công',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            }
        })
    }

    useEffect(() => { getAll() }, [page]);

    return (
        <>
            <div className="container-xl">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark container" style={{ color: 'white' }}>
                    <div className="container-fluid" style={{ color: 'white' }}>
                        <a className="navbar-brand" href="#" style={{ color: 'white' }}>Thi Module 5</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={() => { navigate('/') }} style={{ color: 'white' }}>Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'white' }}>Liên hệ</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" style={{ color: 'white' }}>
                                        Tùy chọn
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Phát</a></li>

                                        <li><a className="dropdown-item" href="#">Thông tin</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <input id='nameSearch' className="form-control me-2" type="search" placeholder="Nhập tên bài hát" aria-label="Search" />
                                <button className="btn btn-outline-light" onClick={() => searchSong()} type="button">Tìm</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div>
                    {song.id &&
                        <>
                            <div><h4>{song.name}</h4></div>
                            <div><small>{song.single}</small></div>
                            <button>Phát nhạc</button>
                        </>}
                </div>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div class="row">
                                <div className="col-sm-6">
                                    <h2>Quản lý <b>bài hát</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={() => handleCreateSong()} className="btn btn-success"><span>Thêm mới</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Bài hát</th>
                                    <th>Ca sĩ</th>
                                    <th>Thời gian</th>
                                    <th>Lượt thích</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    songLists.map((song, index) => {
                                        if (!song.songStatus) {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td onClick={() => handleShowSong(song.id)}>{song.name}</td>
                                                    <td>{song.single}</td>
                                                    <td>{song.time}</td>
                                                    <td>{song.likes}</td>
                                                    <td>Lưu trữ</td>
                                                    <td>
                                                        <button className="btn btn-success" style={{ width: '100px' }} onClick={() => changStatus(song.id)}>Công khai</button>
                                                    </td>
                                                    <td className="d-flex">
                                                        <button className="btn btn-success" onClick={() => editSongById(song.id)}>Sửa</button>
                                                        <button className="btn btn-danger" onClick={() => deleteById(song.id, song.name)}>Xóa</button>
                                                    </td>
                                                </tr>
                                            )
                                        } else if (song.songStatus) {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td onClick={() => handleShowSong(song.id)}>{song.name}</td>
                                                    <td>{song.single}</td>
                                                    <td>{song.time}</td>
                                                    <td>{song.likes}</td>
                                                    <td>Công khai</td>
                                                    <td>
                                                        <button className="btn btn-success" style={{ width: '100px' }} disabled>Công khai</button>
                                                    </td>
                                                    <td className="d-flex">
                                                        <button className="btn btn-success" onClick={() => editSongById(song.id)}>Sửa</button>
                                                        <button className="btn btn-danger" onClick={() => deleteById(song.id, song.name)}>Xóa</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <ul className=" d-flex">
                    <li className="btn btn-dark" style={{ listStyleType: 'none' }} onClick={() => previousPage()}>Trước</li>
                    <li className="btn btn-success" style={{ listStyleType: 'none' }}>{page + 1}</li>
                    <li className="btn btn-dark" style={{ listStyleType: 'none' }} onClick={() => nextPage()}>Sau</li>
                </ul>
            </div>
        </>
    )
}
