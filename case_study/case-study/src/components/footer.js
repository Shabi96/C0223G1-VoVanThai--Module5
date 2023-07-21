export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    address
                                </h3>
                                <p className="footer_text"> 280, Tran Hung Dao street, Hai Chau district<br />
                                    Da Nang City VIETNAM</p>
                                <a href="#" className="line-button">Get Direction</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Reservation
                                </h3>
                                <p className="footer_text">+84 338 677 197 <br />
                                    reservation@furama.com</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Navigation
                                </h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Rooms</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Newsletter
                                </h3>
                                <form action="#" className="newsletter_form">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit">Sign Up</button>
                                </form>
                                <p className="newsletter_text">Subscribe newsletter to get updates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border" />
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-lg-9">
                            <p className="copy_right">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p></div>
                        <div className="col-xl-4 col-md-5 col-lg-3">
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}