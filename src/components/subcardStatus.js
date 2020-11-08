import React, { Component } from 'react';
class SubcardStatus extends Component {
    render(){
        return(
        <div className="SubcardStatus">
           <p>{this.props.status} </p> 
           <p>{this.props.statusname} </p> 
        </div>
        )    
    }
}


export default SubcardStatus;