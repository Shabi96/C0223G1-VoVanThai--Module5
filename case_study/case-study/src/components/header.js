export default function Header() {
    return (
        <>
            {/*[if lte IE 9]>
        <![endif]*/}
            {/* <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p> */}
            <header>
                <div className="header-area ">
                    <div id="sticky-header" className="main-header-area">
                        <div className="container-fluid p-0">
                            <div className="row align-items-center no-gutters">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a className="active" href="index.html">home</a></li>
                                                <li><a href="rooms.html">Services</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">blog <i className="ti-angle-down" /></a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">blog</a></li>
                                                        <li><a href="single-blog.html">single-blog</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">pages <i className="ti-angle-down" /></a>
                                                    <ul className="submenu">
                                                        <li><a href="elements.html">elements</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo-img">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                                    <div className="book_room">
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-facebook-square" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="book_btn d-none d-lg-block">
                                            {/* <a className="popup-with-form" href="#test-form">Book A Room</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}