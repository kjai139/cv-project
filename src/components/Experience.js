import React, { Component } from "react";


class Experience extends Component {
    constructor(prop){
        super(prop)
    }






    render() {
        return (
            <div id="experienceContainer" className="formEle">
                <div id="experienceLeft" className="btnShell">
                <button className="addBtn">Add</button>
                    <div className="editFormDiv">
                        <form id="skillsForm" name="skillsForm" className="editForm" autoComplete="off">
                            <label>
                                Skill:
                                <input type="text" name="skillName"></input>
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
                    <p className="headers sectionTitle">Skills</p>
                    <div className="borderLine"></div>
                    <ul id="skillList">
                        <li>Creative thinking</li>
                        <li>Communication</li>
                        <li>Listening</li>
                        <li>Detail-Oriented</li>
                        <li>Time Management</li>
                        <li>Problem Solving</li>
                        <li>Artistic Eye</li>
                        <li>Adaptability</li>
                        
                    </ul>

                </div>
                <div id="experienceRight" className="btnShell">
                <button className="addBtn">Add</button>
                    <div className="editFormDiv">
                        <form id="experienceForm" name="experienceForm" className="editForm" autoComplete="off">
                            <label>
                                Company:
                                <input type="text" name="companyName"></input>
                            </label>
                            <label>
                                Title:
                                <input type="text" name="title"></input>
                            </label>
                            <label>
                                Start Date:
                                <input type="month" name="startDate"></input>
                            </label>
                            <label>
                                End Date:
                                <input type="month" name="endDate"></input>
                            </label>
                            <label>
                                Location:
                                <input type="text" name="location"></input>
                            </label>
                            <label>
                                Description:
                                <textarea name="description"></textarea>
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
                    <p className="headers">Experience</p>
                    <div className="borderLine"></div>
                    <div className="credentials">
                        <div className="credLeft">
                            <p className="dates">Jan 2019 - Oct 2020</p>
                            <p className="credTitle">Senior Web Developer</p>
                        </div>
                        <div className="credRight">
                            <p className="companyTitle">ABC Corporation</p>
                            <p className="locationTxt">Toronto,ON</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante.</p>
                        </div>
                    </div>
                    <div className="credentials">
                        <div className="credLeft">
                            <p className="dates">Jan 2018 - Jan 2019</p>
                            <p className="credTitle">Junior Web Developer</p>
                        </div>
                        <div className="credRight">
                            <p className="companyTitle">ABC Corporation</p>
                            <p className="locationTxt">Toronto,ON</p>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante.</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}


export {Experience}