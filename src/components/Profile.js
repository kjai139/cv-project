import React, { Component } from "react";
import defaultAvatar from './imgs/default-avatar.svg'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageSrc:defaultAvatar, 
            name:'Your Name', 
            title:'Your title', 
            profile:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante. Proin vel ex eget massa convallis tincidunt. Vestibulum vulputate vehicula mi, nec pellentesque sapien lacinia ac. Donec ac lectus rhoncus magna tincidunt finibus et quis eros. Nam lacus diam, feugiat eget nisl eleifend, malesuada ultrices nibh. Fusce dignissim justo in quam congue ultricies. Proin rutrum laoreet justo id mollis. Aliquam erat volutpat. Praesent ex arcu, tristique at sollicitudin vitae, cursus sit amet lorem.' 
        }

        this.renderProfileAvatar = this.renderProfileAvatar.bind(this)

        
        this.handleChange = this.handleChange.bind(this)

    }

    renderProfileAvatar(e) {
        let [file] = e.target.files
        if (file) {
            this.setState({imageSrc:(URL.createObjectURL(file))})
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.name)

        e.target.style.height = ''
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    closeProfileBtn (e) {
        
        let form = document.querySelector('#profileForm')
        form.parentNode.classList.add('hidden')
    }

    displayProfileForm(e) {
        let profileForm = document.querySelector('#profileForm').parentNode

        

        if (profileForm.classList.contains('hidden')){
            profileForm.classList.remove('hidden')
        } else {
            
            profileForm.classList.add('hidden')
            
        }
    }

   

    render() {
        return (
            <div id="profileContainer" className="formEle">
                <div className="avatarDiv">
                    <form>
                        <label className="label">
                    <input type="file" accept="image/*" name="avatar" onChange={this.renderProfileAvatar}></input>
                    <img src={this.state.imageSrc} alt="avatar" className="avatar"></img>
                    </label>
                    </form>
                </div>
                <div id="profileDiv" className="btnShell">
                    <button className="editBtn" onClick={this.displayProfileForm}>Edit</button>
                    <div className="editFormDiv hidden">
                        <form id="profileForm" name="profileForm" className="editForm" autoComplete="off">
                            <label>
                                Name:
                                <input type="text" name="name" onChange={this.handleChange} maxLength="20"></input>
                            </label>
                            <label>
                                Title:
                                <input type="text" name="title" onChange={this.handleChange}></input>
                            </label>
                            <label>
                                Profile:
                                <textarea name="profile" onChange={this.handleChange}/>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn" type="button" onClick={this.closeProfileBtn}>CLOSE</button>
                                
                                    
                               
                            </div>
                        </form>
                    </div>
                    <p id="profileName" className="headers" >{this.state.name}</p>
                    <p id="profileTitle">{this.state.title}</p>
                    <p id="profileHeader" className="headers sectionTitle">Profile</p>
                    <p id="profileTxt">{this.state.profile} 
                    </p>
                </div>
                



            </div>
        )
    }
}


export {Profile}