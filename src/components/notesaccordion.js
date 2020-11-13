
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function NotesAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>NOTES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The claimed mileage of BMW 3 Series. In technical specifications, BMW 3 Series (Top Model) is powered by 1995 cc engine ,
           while Mercedes-Benz C-Class (Top Model) is powered by 1950 cc engine.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}