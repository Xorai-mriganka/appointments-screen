import React, { Component } from 'react';
import Card from "./cards";
import "./css/cards.css";

class TableContainer extends Component {
  render(){
      return(
        <div className ="tablecontainer">
          
        <Card/>
        
        <Card/>
      </div>
      )    
  }
}

export default TableContainer;
