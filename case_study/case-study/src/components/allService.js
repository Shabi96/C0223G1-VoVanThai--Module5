export default function AllService() {
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
                            <tr>
                                <td>1</td>
                                <td>Villa</td>
                                <td>30</td>
                                <td>200</td>
                                <td>10</td>
                                <td>
                                    <select>
                                        <option data-display="Adult">Hour</option>
                                        <option value={1}>Day</option>
                                        <option value={2}>Month</option>
                                        <option value={3}>Year</option>
                                    </select>
                                </td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>House</td>
                                <td>25</td>
                                <td>150</td>
                                <td>7</td>
                                <td>
                                    <select>
                                        <option data-display="Adult">Hour</option>
                                        <option value={1}>Day</option>
                                        <option value={2}>Month</option>
                                        <option value={3}>Year</option>
                                    </select>
                                </td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Room</td>
                                <td>20</td>
                                <td>100</td>
                                <td>3</td>
                                <td>
                                    <select>
                                        <option data-display="Adult">Hour</option>
                                        <option value={1}>Day</option>
                                        <option value={2}>Month</option>
                                        <option value={3}>Year</option>
                                    </select>
                                </td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Villa 1</td>
                                <td>40</td>
                                <td>300</td>
                                <td>15</td>
                                <td>
                                    <select>
                                        <option data-display="Adult">Hour</option>
                                        <option value={1}>Day</option>
                                        <option value={2}>Month</option>
                                        <option value={3}>Year</option>
                                    </select>
                                </td>
                                <td>
                                    <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Room 1</td>
                                <td>15</td>
                                <td>80</td>
                                <td>2</td>
                                <td>
                                    <select>
                                        <option data-display="Adult">Hour</option>
                                        <option value={1}>Day</option>
                                        <option value={2}>Month</option>
                                        <option value={3}>Year</option>
                                    </select>
                                </td>
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