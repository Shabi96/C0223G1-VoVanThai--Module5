export default function AddNewService() {
    return (
        <div>
            {/*background*/}
            <h1>Furama Service </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <form action="#" method="post">
                    <h2 className="sub-heading-agileits">Add new service</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <select className="form-control">
                                <option>Service Name</option>
                                <option>House</option>
                                <option>Room</option>
                                <option>Villa</option>
                            </select>
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Area" defaultValue required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Rental costs" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Peoples" />
                        </div>
                    </div>
                    <div className="triple-wthree">
                        <div className="field-agileinfo-spc form-w3-agile-text11">
                            <select className="form-control">
                                <option value>Rental type</option>
                                <option value={1}>Hour</option>
                                <option value={2}>Day</option>
                                <option value={3}>Month</option>
                                <option value={4}>Year</option>
                            </select>
                        </div>
                    </div>
                    <h3 className="sub-heading-agileits">Personal Details</h3>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input type="text" name="Name" placeholder="Full Name" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" name="Phone no" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="field-agileinfo-spc form-w3-agile-text">
                        <input type="email" name="Email" placeholder="Email" required />
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                </form>
                {/*// Form starts here */}
            </div>
            {/*copyright*/}
            {/* Calendar Js */}
            {/* //Calendar Js */}
        </div>

    )
}