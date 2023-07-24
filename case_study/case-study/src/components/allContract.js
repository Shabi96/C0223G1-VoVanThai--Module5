export default function AllContract() {
    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Contract <b>Manager</b></h2></div>
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
                                <th>Start Date <i className="fa fa-sort" /></th>
                                <th>End Date</th>
                                <th>Advance deposit amount</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>10/07/2023</td>
                                <td>20/07/2023</td>
                                <td>500</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>15/07/2023</td>
                                <td>20/07/2023</td>
                                <td>200</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>20/07/2023</td>
                                <td>27/07/2023</td>
                                <td>300</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>30/07/2023</td>
                                <td>05/08/2023</td>
                                <td>700</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>08/08/2023</td>
                                <td>10/08/2023</td>
                                <td>300</td>
                                <td>900</td>
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