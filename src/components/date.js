import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
export default function Datepicker() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="current date"
            views={['year', 'month', 'date']}
            value={selectedDate}
            format="dd/MM/yyyy"
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }