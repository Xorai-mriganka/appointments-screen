import React, { Component } from 'react';
import './css/table.css';
import {TableComponent} from './TableComponent';


class Table extends Component {
    render() {
      return (
        <>
        <div className="Container">
        <TableComponent />
      </div>
      </>
      );
    }
  }

  
  export default Table;