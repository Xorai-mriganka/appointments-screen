import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField,Icon} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

  class Searchbar extends React.Component {
    render() {
      return (
        <TextField
          label="search"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon>search</SearchIcon>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      );
    }
  }

  export default Searchbar;
  