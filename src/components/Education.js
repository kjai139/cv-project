import React, { Component } from "react";


class Education extends Component {
    constructor(props){
        super(props)
    }








    render() {
        return (
            <div id="educationContainer" className="formEle">
                <div id="educationLeftDiv" className="btnShell">
                <button className="editBtn">Edit</button>
                    <div className="editFormDiv">
                        <form id="addressForm" name="addressForm" className="editForm" autoComplete="off">
                            <label>
                                Address:
                                <input type="text" name="addressName"></input>
                            </label>
                            <label>
                                City,State,Zip
                                <input type="text" name="cityStateZip"></input>
                            </label>
                            <label>
                                Phone:
                                <input type="tel" name="phoneNumber"></input>
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email"></input>
                            </label>
                            <label>
                                Website:
                                <input type="text" name="website"></input>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn">CANCEL</button>
                                <button className="submitBtn">
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="headers sectionTitle">ADDRESS</p>
                    <p>123 fake street</p>
                    <p>City, state, zip</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">PHONE</p>
                    <p>666-666-6666</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">EMAIL</p>
                    <p>info@website.com</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">ONLINE</p>
                    <p>yourwebsite.com</p>
                    


                </div>
                <div id="educationRightDiv" className="btnShell">
                <button className="addBtn">Add</button>
                    <div className="editFormDiv">
                        <form id="educationForm" name="educationForm" className="editForm" autoComplete="off">
                            <label>
                                School name:
                                <input type="text" name="schoolName"></input>
                            </label>
                            <label>
                                Location:
                                <input type="text" name="location"></input>
                            </label>
                            <label>
                                Start date:
                                <input type="month" name="startDate"></input>
                            </label>
                            <label>
                                End date:
                                <input type="month" name="endDate"></input>
                            </label>
                            <label>
                                GPA:
                                <input type="text" name="gpa"/>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn">CANCEL</button>
                                <button className="submitBtn">
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="topBorderLine"></div>
                    <p className="headers">Education</p>
                    <div className="borderLine"></div>
                    <div className="credentials">
                        <div className="credLeft">
                            <p className="dates">AUG 2019 - DEC 2020</p>
                            <p className="credTitle">B.S Web Development</p>
                        </div>
                        <div className="credRight">
                            <p className="companyTitle">ABC university</p>
                            <p className="locationTxt">Toronto,ON</p>
                            <p className="description">GPA</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


export {Education}