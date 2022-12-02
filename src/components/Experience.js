import React, { Component, useState } from "react";
import format from "date-fns/format";


function Experience() {
    const [formValue, setFormValue] = useState({
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
    })

    const handleChangeSkills =(e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        let skillName =  data.get('skillName')

        setFormValue( (prevState) => {
            return {
                ...prevState,
                skills: [...formValue.skills, skillName]
            }
        })

        

        e.target.reset()
        e.target.parentNode.classList.add('hidden')
    }

    const handleChangeExperiences = (e) => {
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
        
        setFormValue( (prevState) => {
            return {
                ...prevState,
                credentials:[...formValue.credentials, obj]
            }
        })
        

        e.target.reset()
        e.target.parentNode.classList.add('hidden')
    }

    const displayExperienceForm = () => {
        let experienceForm = document.querySelector('#experienceForm').parentNode

        let form = document.querySelector('#experienceForm')

        if (experienceForm.classList.contains('hidden')){
            experienceForm.classList.remove('hidden')
        } else {
            form.reset()
            experienceForm.classList.add('hidden')
            
        }
        
    }

    const displaySkillsForm = () => {
        let skillForm = document.querySelector('#skillsForm').parentNode

        let form = document.querySelector('#skillsForm')

        if (skillForm.classList.contains('hidden')){
            skillForm.classList.remove('hidden')
        } else {
            form.reset()
            skillForm.classList.add('hidden')
        }
    }

    const renderSkills = () => {
        return formValue.skills.map((value, key) => 
            
            <li key={`skills-key-${key}`} id={`skill-${key}`} className="skillList">{value}<button className="listRemoveBtn" value={value} onClick={removeSkills}></button></li>
        
        
        )
    }

    const renderExperiences = () => {
        return formValue.credentials.map((value, key) =>

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
            <button value={key} className="removeBtn" onClick={removeExperience}>
                
            </button>
        </div>
        )
        
    }

    const removeSkills =(e) => {
        
        let arr = formValue.skills
        let index = formValue.skills.indexOf(e.target.value)
        // console.log('remove', index, e.target.value)
        let newArr = arr.filter((ele, eleIndex) => eleIndex !== index)
        // console.log(newArr)

        setFormValue((prevState) => {
            return {
                ...prevState,
                skills: newArr
            }
        })

        
    }

    const removeExperience = (e) => {
        let arr = formValue.credentials
        let index = Number(e.target.value)

        let newArr = arr.filter((ele, eleIndex) => eleIndex !== index)

        setFormValue( (prevState) => {
            return {
                ...prevState,
                credentials: newArr
            }
        })
        


    }

    const cancelBtn = (e) => {
        let form = document.querySelector('#experienceForm')
        form.reset()
        form.parentNode.classList.add('hidden')
    }

    const cancelSkillBtn = (e) => {
        let form = document.querySelector('#skillsForm')
        form.reset()
        form.parentNode.classList.add('hidden')
    }

    return (
        <div id="experienceContainer" className="formEle">
                <div id="experienceLeft" className="btnShell">
                <button className="addBtn" onClick={displaySkillsForm}>Add</button>
                    <div className="editFormDiv hidden">
                        <form id="skillsForm" name="skillsForm" className="editForm" autoComplete="off" onSubmit={handleChangeSkills}>
                            <label>
                                Skill:
                                <input type="text" name="skillName"></input>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn" type="button" onClick={cancelSkillBtn}>CANCEL</button>
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
                        {renderSkills()}
                        
                    </ul>

                </div>
                <div id="experienceRight" className="btnShell">
                <button className="addBtn" onClick={displayExperienceForm}>Add</button>
                    <div className="editFormDiv hidden">
                        <form id="experienceForm" name="experienceForm" className="editForm" autoComplete="off" onSubmit={handleChangeExperiences}>
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
                                <button type="button" className="submitBtn" onClick={cancelBtn}>CANCEL</button>
                                <button className="submitBtn">
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="topBorderLine"></div>
                    <p className="headers">Experience</p>
                    <div className="borderLine"></div>
                    {renderExperiences()}
                    

                </div>

            </div>
    )

}


export {Experience}