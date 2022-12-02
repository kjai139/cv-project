import React, { Component, useState } from "react";
import defaultAvatar from './imgs/default-avatar.svg'

function Profile() {

    const [imageSrc, setImageSrc] = useState(defaultAvatar)
    const [formValue, setFormValue] = useState({
        name:'Your Name', 
        title:'Your title', 
        profile:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante. Proin vel ex eget massa convallis tincidunt. Vestibulum vulputate vehicula mi, nec pellentesque sapien lacinia ac. Donec ac lectus rhoncus magna tincidunt finibus et quis eros. Nam lacus diam, feugiat eget nisl eleifend, malesuada ultrices nibh. Fusce dignissim justo in quam congue ultricies. Proin rutrum laoreet justo id mollis. Aliquam erat volutpat. Praesent ex arcu, tristique at sollicitudin vitae, cursus sit amet lorem.' 
    })

    const renderProfileAvatar = (e) => {
        let [file] = e.target.files
        if (file) {
            setImageSrc((URL.createObjectURL(file)))
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        
        setFormValue( (prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
        e.target.style.height = ''
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    const closeProfileBtn =  (e) => {
        
        let form = document.querySelector('#profileForm')
        form.parentNode.classList.add('hidden')
    }

    const displayProfileForm = (e) => {
        let profileForm = document.querySelector('#profileForm').parentNode

        

        if (profileForm.classList.contains('hidden')){
            profileForm.classList.remove('hidden')
        } else {
            
            profileForm.classList.add('hidden')
            
        }
    }



    return (
        <div id="profileContainer" className="formEle">
                <div className="avatarDiv">
                    <form>
                        <label className="label">
                    <input type="file" accept="image/*" name="avatar" onChange={renderProfileAvatar}></input>
                    <img src={imageSrc} alt="avatar" className="avatar"></img>
                    </label>
                    </form>
                </div>
                <div id="profileDiv" className="btnShell">
                    <button className="editBtn" onClick={displayProfileForm}>Edit</button>
                    <div className="editFormDiv hidden">
                        <form id="profileForm" name="profileForm" className="editForm" autoComplete="off">
                            <label>
                                Name:
                                <input type="text" name="name" onChange={handleChange} maxLength="20"></input>
                            </label>
                            <label>
                                Title:
                                <input type="text" name="title" onChange={handleChange}></input>
                            </label>
                            <label>
                                Profile:
                                <textarea name="profile" onChange={handleChange}/>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn" type="button" onClick={closeProfileBtn}>CLOSE</button>
                                
                                    
                               
                            </div>
                        </form>
                    </div>
                    <p id="profileName" className="headers" >{formValue.name}</p>
                    <p id="profileTitle">{formValue.title}</p>
                    <p id="profileHeader" className="headers sectionTitle">Profile</p>
                    <p id="profileTxt">{formValue.profile} 
                    </p>
                </div>
                



            </div>
    )

}

export {Profile}