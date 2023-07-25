export default function AddContract() {
    return (
        <div>
            <h1>Contract Service </h1>
            <div className="booking-form-w3layouts">
                {/* Form starts here */}
                <form action="#" method="post">
                    <h2 className="sub-heading-agileits">Add new Contract</h2>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Id Customer" defaultValue required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <select className="form-control">
                                <option value>Type Service</option>
                                <option value={1}>Villa</option>
                                <option value={2}>House</option>
                                <option value={3}>Room</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Start Date" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="End Date" />
                        </div>
                    </div>
                    <div className="main-flex-w3ls-sectns">
                        <div className="field-agileinfo-spc form-w3-agile-text1">
                            <input name="Text" type="text" placeholder="Advance deposit amount" required />
                        </div>
                        <div className="field-agileinfo-spc form-w3-agile-text2">
                            <input type="text" placeholder="Total" />
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