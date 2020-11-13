import React from 'react';
import "./css/HeaderNew.css";
import Searchbaranddate from './searchbaranddate';
import Dropdown from './dropdown';
import MiniDropdown from './miniDropdown';
import Divider from '@material-ui/core/Divider';

const Header = props => (
    <div className ="HeadContainer">
    <Dropdown/>
    <div className ="searchbardate">
    <Searchbaranddate/>
    </div>
      <Divider/>
      <div className="header4">
        <div className="leftbutton">
          <div className="tues">Tuesday</div>
          <div className="date">May 22,2013</div>
        </div>
       <MiniDropdown/>
      </div>
      </div>
);

Header.propTypes = {};

export default Header;
