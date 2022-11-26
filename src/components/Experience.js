import React, { Component } from "react";
import format from "date-fns/format";
import cBtn from './imgs/cancel-btn.svg'


class Experience extends Component {
    constructor(prop){
        super(prop)
        this.state = {
            skills:['Creative thinking', 'Communication', 'Listening', 'Detailed-Oriented', 'Time Management', 'Problem Solving', 'Artistic Eye', 'Adaptability'],

            credentials:[
                {
                    startDate: 'Jan 2019',
                    endDate: 'Oct 2020',
                    credTitle: 'Senior Web Developer',
                    companyTitle: 'Abc Corporation',
                    location: 'Toronto, ON',
                    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante.'



                },
                {
                    startDate: 'Jan 2018',
                    endDate: 'Dec 2018',
                    credTitle: 'Junior Web Developer',
                    companyTitle: 'Abc Corporation',
                    location: 'Toronto, ON',
                    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante.'
                }
            ]
        }

        this.handleChangeSkills = this.handleChangeSkills.bind(this)
        this.renderSkills = this.renderSkills.bind(this)
        this.handleChangeExperiences = this.handleChangeExperiences.bind(this)
        this.renderExperiences = this.renderExperiences.bind(this)

        this.removeSkills = this.removeSkills.bind(this)
        this.removeExperience = this.removeExperience.bind(this)
    }

    handleChangeSkills(e){
        e.preventDefault()
        let data = new FormData(e.target)
        let skillName =  data.get('skillName')
        this.setState({skills:[...this.state.skills, skillName]})

        e.target.reset()
    }

    handleChangeExperiences(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        let formatStart = format(new Date(`${data.get('startDate')}`.replace(/-/g, '\/').replace(/T.+/, '')),'MMM yyyy')

        let formatEnd = format(new Date(`${data.get('endDate')}`.replace(/-/g, '\/').replace(/T.+/, '')),'MMM yyyy')


        let obj = {
            startDate: formatStart,
            endDate: formatEnd,
            credTitle: data.get('title'),
            companyTitle: data.get('companyName'),
            location: data.get('location'),
            jobDescription: data.get('description')
        }
        
        this.setState({credentials:[...this.state.credentials, obj]})

        e.target.reset()
    }

    renderSkills() {
        return this.state.skills.map((value, key) => 
            
            <li key={`skills-key-${key}`} id={`skill-${key}`} className="skillList">{value}<button className="listRemoveBtn" value={value} onClick={this.removeSkills}></button></li>
        
        
        )
    }

    renderExperiences() {
        return this.state.credentials.map((value, key) =>

        <div className="credentials" key={`exp${key}`} id={`credentials-${key}`}>
            <div className="credLeft">
                <p className="dates">{value.startDate} - {value.endDate}</p>
                <p className="credTitle">{value.credTitle}</p>
            </div>
            <div className="credRight">
                <p className="companyTitle">{value.companyTitle}</p>
                <p className="locationTxt">{value.location}</p>
                <p className="description">{value.jobDescription}</p>
            </div>
            <button value={key} className="removeBtn" onClick={this.removeExperience}>
                
            </button>
        </div>
        )
        
    }

    removeSkills(e) {
        
        let arr = this.state.skills
        let index = this.state.skills.indexOf(e.target.value)
        // console.log('remove', index, e.target.value)
        let newArr = arr.filter((ele, eleIndex) => eleIndex !== index)
        // console.log(newArr)

        this.setState({skills: newArr})
    }

    removeExperience(e){
        let arr = this.state.credentials
        let index = Number(e.target.value)

        let newArr = arr.filter((ele, eleIndex) => eleIndex !== index)

        this.setState({credentials: newArr})


    }




    render() {
        return (
            <div id="experienceContainer" className="formEle">
                <div id="experienceLeft" className="btnShell">
                <button className="addBtn">Add</button>
                    <div className="editFormDiv">
                        <form id="skillsForm" name="skillsForm" className="editForm" autoComplete="off" onSubmit={this.handleChangeSkills}>
                            <label>
                                Skill:
                                <input type="text" name="skillName"></input>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn">CANCEL</button>
                                <button className="submitBtn" >
                                    OK
                                </button>
                            </div>
                            
                        </form>
                    </div>
                    <div className="topBorderLine"></div>
                    <p className="headers sectionTitle">Skills</p>
                    <div className="borderLine"></div>
                    <ul id="skillList">
                        {this.renderSkills()}
                        
                    </ul>

                </div>
                <div id="experienceRight" className="btnShell">
                <button className="addBtn">Add</button>
                    <div className="editFormDiv">
                        <form id="experienceForm" name="experienceForm" className="editForm" autoComplete="off" onSubmit={this.handleChangeExperiences}>
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
                                <input required="yes" type="month" name="startDate"></input>
                            </label>
                            <label>
                                End Date:
                                <input required="yes" type="month" name="endDate"></input>
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
                    {this.renderExperiences()}
                    

                </div>

            </div>
        )
    }
}


export {Experience}