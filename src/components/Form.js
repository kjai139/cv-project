import React, { Component } from "react";


class Form extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="formContainer2">
                <p className="formTitle">CV Application Form</p>
                <form>
                    <label>Name:</label>
                    <input type="text"></input>
                </form>
            </div>
        )
    }
}



export {Form}