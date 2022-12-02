import React, { Component, useState } from "react";
import format from "date-fns/format";

function Education() {
    const [formValue, setFormValue] = useState({
        address: '123 Fake Street',
        cityStateZip: 'Toronto ON L2W 3V7',
        phone: '666-666-6666',
        email: 'info@website.com',
        online: 'yourwebsite.com',
        education: [
            {
                schoolName: 'ABC university',
                programName: 'B.S Web Development',
                location: 'Toronto ON',
                startDate: 'Aug 2019',
                endDate: 'Dec 2020',
                gpa: '3.5',


            },
            {
                schoolName: 'BCD university',
                programName: 'PogChamp Web Development',
                location: 'Toronto ON',
                startDate: 'Feb 2018',
                endDate: 'Dec 2018',
                gpa: '3.5',
            }
        ]
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValue( (prevState) => {
            return {...prevState, 
                [name] : value
            }
        })
    }

    const renderEducation = (e) => {
        return formValue.education.map((value, key) =>
        <div className="credentials" key={`edu-${key}`}>
            <div className="credLeft">
                <p className="dates">{value.startDate} - {value.endDate}</p>
                <p className="credTitle">{value.programName}</p>
            </div>
            <div className="credRight">
                <p className="schoolName">{value.schoolName}</p>
                <p className="locationTxt">{value.location}</p>
                <p className="description">{value.gpa}</p>
            </div>
            <button value={key} className="removeBtn" onClick={removeEducation}>
                
            </button>

        </div>
        )
    }

    const submitEducation = (e) => {
        e.preventDefault()
        
            
        let data = new FormData(e.target)
        let formatStart = format(new Date(`${data.get('startDate')}`.replace(/-/g, '\/').replace(/T.+/, '')),'MMM yyyy')

        let formatEnd = format(new Date(`${data.get('endDate')}`.replace(/-/g, '\/').replace(/T.+/, '')),'MMM yyyy')


        let obj = {
            schoolName: data.get('schoolName'),
            programName: data.get('programName'),
            location: data.get('location'),
            startDate: formatStart,
            endDate: formatEnd,
            gpa: data.get('gpa'),
        }
        
        setFormValue((prevState) => {
            return {
                ...prevState,
                education: [...formValue.education, obj]
            }
        })

        e.target.reset()
        e.target.parentNode.classList.add('hidden')
        

    }

    const removeEducation = (e) => {
        let arr = formValue.education
        let index = Number(e.target.value)

        let newArr = arr.filter((ele, eleIndex) => eleIndex !== index )
        console.log(newArr)

        setFormValue((prevState) => {
            return {
                ...prevState,
                education: newArr
            }
        })
    }

    const displayEducationForm = () => {
        let educationForm = document.querySelector('#educationForm').parentNode

        let form = document.querySelector('#educationForm')

        if (educationForm.classList.contains('hidden')){
            educationForm.classList.remove('hidden')
        } else {
            form.reset()
            educationForm.classList.add('hidden')
            
        }
        
    }

    const displayAddressForm = () => {
        let addressForm = document.querySelector('#addressForm').parentNode

        let form = document.querySelector('#addressForm')

        if (addressForm.classList.contains('hidden')){
            addressForm.classList.remove('hidden')
        } else {
            form.reset()
            addressForm.classList.add('hidden')
        }
    }

    const cancelBtnAddress = (e) => {
        let form = document.querySelector('#addressForm')
        
        form.parentNode.classList.add('hidden')
    }

    const cancelBtnEducation = (e) => {
        let form = document.querySelector('#educationForm')
        form.reset()
        form.parentNode.classList.add('hidden')
    }



    return (
        <div id="educationContainer" className="formEle">
                <div id="educationLeftDiv" className="btnShell">
                <button className="editBtn" onClick={displayAddressForm}>Edit</button>
                    <div className="editFormDiv hidden">
                        <form id="addressForm" name="addressForm" className="editForm" autoComplete="off">
                            <label>
                                Address:
                                <input type="text" name="address" onChange={handleChange}></input>
                            </label>
                            <label>
                                City,State,Zip
                                <input type="text" name="cityStateZip" onChange={handleChange}></input>
                            </label>
                            <label>
                                Phone:
                                <input type="tel" name="phone" onChange={handleChange}></input>
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" onChange={handleChange}></input>
                            </label>
                            <label>
                                Website:
                                <input type="text" name="online" onChange={handleChange}></input>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn" type="button" onClick={cancelBtnAddress}>CLOSE</button>
                                
                            </div>
                        </form>
                    </div>
                    <p className="headers sectionTitle">ADDRESS</p>
                    <p>{formValue.address}</p>
                    <p>{formValue.cityStateZip}</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">PHONE</p>
                    <p>{formValue.phone}</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">EMAIL</p>
                    <p>{formValue.email}</p>
                    <div className="borderLine"></div>
                    <p className="headers sectionTitle">ONLINE</p>
                    <p>{formValue.online}</p>
                    


                </div>
                <div id="educationRightDiv" className="btnShell">
                <button className="addBtn" onClick={displayEducationForm}>Add</button>
                    <div className="editFormDiv hidden">
                        <form id="educationForm" name="educationForm" className="editForm" autoComplete="off" onSubmit={submitEducation}>
                            <label>
                                School name:
                                <input type="text" name="schoolName"></input>
                            </label>
                            <label>
                                Program name:
                                <input type="text" name="programName"></input>
                            </label>
                            <label>
                                Location:
                                <input type="text" name="location"></input>
                            </label>
                            <label>
                                Start date:
                                <input type="month" name="startDate" required="yes"></input>
                            </label>
                            <label>
                                End date:
                                <input type="month" name="endDate" required="yes"></input>
                            </label>
                            <label>
                                GPA:
                                <input type="number" name="gpa" max="5"/>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn" type="button" onClick={cancelBtnEducation}>CANCEL</button>
                                <button className="submitBtn">
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="topBorderLine"></div>
                    <p className="headers">Education</p>
                    <div className="borderLine"></div>
                    {renderEducation()}

                </div>
            </div>
    )
}

export {Education}