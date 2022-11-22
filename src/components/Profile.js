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
                    <img className="avatar" src={defaultAvatar} alt="avatar" onClick={this.renderProfileAvatar}></img>
                </div>
                <div id="profileDiv">
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