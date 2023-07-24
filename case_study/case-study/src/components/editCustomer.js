export default function EditCustomer() {
    return (
        <div>
            <h1>Customer Service </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <form action="#" method="post">
                    <h2 className="sub-heading-agileits">Edit Customer</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Full Name" defaultValue required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Day Of Birth" defaultValue required />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Gender" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Identity card number" />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Phone Number" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>
                    <div className="triple-wthree">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <select className="form-control">
                                <option value>Type of guest</option>
                                <option value={1}>Diamond</option>
                                <option value={2}>Platinum</option>
                                <option value={3}>Gold</option>
                                <option value={4}>Silver</option>
                                <option value={5}>Member</option>
                            </select>
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input type="text" name="Name" placeholder="Address" required />
                        </div>
                    </div>
                    <div className="clear" />
                    <input type="submit" defaultValue="Submit" />
                    <input type="reset" defaultValue="Clear Form" />
                    <div className="clear" />
                </form>
                {/*// Form starts here */}
            </div>
        </div>
    )
}