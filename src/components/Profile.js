import React, { Component } from "react";
import defaultAvatar from './imgs/default-avatar.svg'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {imageSrc:'./styles/imgs/default-avatar.jpg'}

        this.renderProfileAvatar = this.renderProfileAvatar.bind(this)

    }

    renderProfileAvatar() {
        console.log('renderprofileavatar')
    }

    render() {
        return (
            <div id="profileContainer" className="formEle">
                <div className="avatarDiv">
                    <form>
                        <label className="label">
                    <input type="file" accept="image/*" onClick={this.renderProfileAvatar}></input>
                    <img src={defaultAvatar} alt="avatar" className="avatar"></img>
                    </label>
                    </form>
                </div>
                <div id="profileDiv" className="btnShell">
                    <button className="editBtn">Edit</button>
                    <div className="editFormDiv">
                        <form id="profileForm" name="profileForm" className="editForm" autoComplete="off">
                            <label>
                                Name:
                                <input type="text" name="name"></input>
                            </label>
                            <label>
                                Title:
                                <input type="text" name="title"></input>
                            </label>
                            <label>
                                Profile:
                                <textarea name="profile"/>
                            </label>
                            <div className="submitBtnDiv">
                                <button className="submitBtn">CANCEL</button>
                                <button className="submitBtn">
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                    <p id="profileName" className="headers">Your Name</p>
                    <p id="profileTitle">Your title</p>
                    <p id="profileHeader" className="headers sectionTitle">Profile</p>
                    <p id="profileTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc ex, pharetra quis urna et, tincidunt gravida ante. Proin vel ex eget massa convallis tincidunt. Vestibulum vulputate vehicula mi, nec pellentesque sapien lacinia ac. Donec ac lectus rhoncus magna tincidunt finibus et quis eros. Nam lacus diam, feugiat eget nisl eleifend, malesuada ultrices nibh. Fusce dignissim justo in quam congue ultricies. Proin rutrum laoreet justo id mollis. Aliquam erat volutpat. Praesent ex arcu, tristique at sollicitudin vitae, cursus sit amet lorem. 
                    </p>
                </div>
                



            </div>
        )
    }
}


export {Profile}