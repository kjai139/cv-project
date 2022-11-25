import React, { Component } from "react";


class Education extends Component {
    constructor(props){
        super(props)

        this.state = {
            address: '123 Fake Street',
            cityStateZip: 'Toronto ON L2W 3V7',
            phone: '666-666-6666',
            email: 'info@website.com',
            online: 'yourwebsite.com',
            education: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log('submitted')
        console.log(this.state)

        
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
                                <input type="text" name="address" onChange={this.handleChange}></input>
                            </label>
                            <label>
                                City,State,Zip
                                <input type="text" name="cityStateZip" onChange={this.handleChange}></input>
                            </label>
                            <label>
                                Phone:
                                <input type="tel" name="phone" onChange={this.handleChange}></input>
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" onChange={this.handleChange}></input>
                            </label>
                            <label>
                                Website:
                                <input type="text" name="online" onChange={this.handleChange}></input>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn">CANCEL</button>
                                <button className="submitBtn" onClick={this.handleSubmit}>
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="headers sectionTitle">ADDRESS</p>
                    <p>{this.state.address}</p>
                    <p>{this.state.cityStateZip}</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">PHONE</p>
                    <p>{this.state.phone}</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">EMAIL</p>
                    <p>{this.state.email}</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">ONLINE</p>
                    <p>{this.state.online}</p>
                    


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