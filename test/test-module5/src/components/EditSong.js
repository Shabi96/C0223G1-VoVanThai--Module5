import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { editSong, getSongById } from "../services/SongService";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export default function EditSong() {

    const navigate = useNavigate();
    const params = useParams();
    const [song, setSong] = useState({});

    const getSong = async () => {
        const data = await getSongById(params.id);
        setSong(data);
    }

    useEffect(() => {getSong()} , []);
    return (
        <>
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
                            <button className="btn btn-outline-light" type="button">Tìm</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="table-wrapper" style={{ marginTop: '20px' }}>
                <div className="table-title">
                    <div class="row">
                        <div className="col-sm-6">
                            <h2>Chỉnh sửa <b>bài hát</b></h2>
                        </div>

                    </div>
                </div>
            </div>
            {song.id &&
                <Formik initialValues={{
                    ...song
                }}
                    validationSchema={yup.object({
                        name: yup.string().required('Không được để trống trường này!!!!'),
                        single: yup.string().required('Không được để trống trường này!!!!').min(3, 'Tên tối thiểu là 3 kí tự!!!!').max(30, 'Tên tối đa là 30 kí tự!!!!'),
                        artist: yup.string().required('Không được để trống trường này!!!!').min(3, 'Tên tối thiểu là 3 kí tự!!!!').max(30, 'Tên tối đa là 30 kí tự!!!!'),
                        time: yup.string().required('Không được để trống trường này!!!!').matches(`^[0-5][0-9]:[0-5][0-9]$`, 'Sai định dạng mm:ss')
                    })}
                    onSubmit={(values) => {
                        console.log(values);
                        editSong({ ...values, likes: 0, status: false }).then(() => {
                            navigate("/");
                            Swal.fire({
                                icon: 'success',
                                title: 'Chỉnh sửa thành công',
                                timer: 1500,
                                showConfirmButton: false
                            })
                        })
                    }}>
                    <Form>
                        <Field name='id' type='hidden' />
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="name">Tên bài hát: </label>
                                    <Field type="text" id="name" name='name' className="form-control" />
                                    <ErrorMessage name="name" component='div' className="error" />
                                </div>
                            </div>
                        </div>
                        <Field type='hidden' name='likes' />
                        <Field type='hidden' name='songStatus' />
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="single">Ca sĩ: </label>
                                    <Field type="text" id="single" name='single' className="form-control" />
                                    <ErrorMessage name="single" component='div' className="error" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="artist">Nhạc sĩ: </label>
                                    <Field type="text" id="artist" name='artist' className="form-control" />
                                    <ErrorMessage name="artist" component='div' className="error" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="time">Thời gian phát: </label>
                                    <Field type="text" id="time" name='time' className="form-control" />
                                    <ErrorMessage name="time" component='div' className="error" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success btn-block mb-4">Chỉnh sửa bài hát</button>
                    </Form>
                </Formik>
            }
        </>
    )
}