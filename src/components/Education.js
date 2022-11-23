import React, { Component } from "react";


class Education extends Component {
    constructor(props){
        super(props)
    }








    render() {
        return (
            <div id="educationContainer" className="formEle">
                <div id="educationLeftDiv">
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
                <div id="educationRightDiv">
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