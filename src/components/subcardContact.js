import React, { Component } from 'react';
import "./css/subcard.css";

class SubcardContact extends Component {
    render(){
        return(
        <div className="SubcardContact">
           <p>{this.props.contactnumber} </p> 
           <p>{this.props.service} </p> 
        </div>
        )    
    }
}


export default SubcardContact;