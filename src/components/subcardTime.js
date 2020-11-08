import React, { Component } from 'react';

class SubcardTime extends Component {
    render(){
        return(
        <div className="SubcardTime">
           <p>{this.props.totaltime} </p> 
           <p>{this.props.timeName} </p> 
        </div>
        )    
    }
}


export default SubcardTime;