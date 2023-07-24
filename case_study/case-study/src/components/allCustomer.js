export default function AllCustomer() {
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
                            <tr>
                                <td>1</td>
                                <td>Ronaldo</td>
                                <td>1984</td>
                                <td>Men</td>
                                <td>0987987789</td>
                                <td>ronaldo@gmail.com</td>
                                <td>Diamond</td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Messi</td>
                                <td>1987</td>
                                <td>Men</td>
                                <td>0123432782</td>
                                <td>messi@gmail.com</td>
                                <td>Platinum</td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Eden Hazard</td>
                                <td>1991</td>
                                <td>Men</td>
                                <td>0987678919</td>
                                <td>hazard@gmail.com</td>
                                <td>Platinum</td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Fernando Torres</td>
                                <td>1987</td>
                                <td>Men</td>
                                <td>0999999999</td>
                                <td>torres@gmail.com</td>
                                <td>Diamond</td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Michael Ballack</td>
                                <td>1976</td>
                                <td>Men</td>
                                <td>0777888999</td>
                                <td>ballack@gmail.com</td>
                                <td>Platinum</td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
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