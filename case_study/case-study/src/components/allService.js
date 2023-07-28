import { useEffect, useState } from "react"
import { getAllServices } from "../services/FalacityService";
import { Link, useNavigate } from "react-router-dom";



export default function AllService() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    const getAll = async () => {
        const data = await getAllServices();
        setServices(data);
    }

    const editByType = (idService, type) => {
        const types = JSON.parse(type);
        console.log(idService);
        console.log(types);
        if (types.name == 'Villa') {
            navigate(`/furama/services/villa/${idService}`)
        } else if (types.name == 'House') {
            navigate(`/furama/services/house/${idService}`)
        } else {
            navigate(`/furama/services/room/${idService}`)
        }   
    }


    useEffect(() => { getAll() }, []);

    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Service <b>Manager</b></h2></div>
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
                                <th>Area</th>
                                <th>Rental costs <i className="fa fa-sort" /></th>
                                <th>Peoples <i className="fa fa-sort" /></th>
                                <th>Rental type <i className="fa fa-sort" /></th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.length > 0 &&
                                services.map((s, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{s.service}</td>
                                            <td>{s.usable_area}</td>
                                            <td>{s.costs}</td>
                                            <td>{s.max_people}</td>
                                            <td>{s.typeRental.name}</td>
                                            <td>
                                                <span onClick={() => {editByType(s.id, JSON.stringify(s.type))}} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></span>
                                                <Link className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></Link>
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