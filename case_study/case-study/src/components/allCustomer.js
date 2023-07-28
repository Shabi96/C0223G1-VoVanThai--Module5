import { useEffect, useState } from "react"
import { deleteCustomer, getAllCustomers } from "../services/CustomerServices";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function AllCustomer() {

    const [customers, setCustomers] = useState([]);

    const getAll = async () => {
        const data = await getAllCustomers();
        setCustomers(data);
    }

    const deleteCustomerById = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }
        ).then((res) => {
            if (res.isConfirmed) {
                deleteCustomer(id).then(() => {
                    getAllCustomers().then((data) => {
                        setCustomers(data);
                    }).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Edit success fully!!!!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    })
                });
            } else if (res.dismiss === Swal.DismissReason.cancel) {
            }
        })
       
    }

    useEffect(() => { getAll() }, []);

    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Customer <b>Manager</b></h2></div>
                            <div className="col-sm-4">
                                <div className="search-box">
                                    <i className="material-icons"></i>
                                    <input type="text" className="form-control" placeholder="Search…" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name <i className="fa fa-sort" /></th>
                                <th>Day Of Birth</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((c, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{c.name}</td>
                                            <td>{c.date_of_birth}</td>
                                            <td>{c.gender}</td>
                                            <td>{c.phone_number}</td>
                                            <td>{c.email}</td>
                                            <td>{c.customer_type.name}</td>
                                            <td>
                                                <Link to={`/furama/customers/${c.id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>
                                                <Link onClick={() => {deleteCustomerById(c.id)}} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <ul className="pagination">
                            <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left" /></a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}