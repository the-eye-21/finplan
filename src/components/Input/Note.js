import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick} variant="contained" color="primary" >
        Note
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
        <div>
          The following assumptions are made:
          <ol>
            <li> You step up your SIP by 10% each year. </li>
            <li> You stop going on vacations 5 years after you retire </li>
            <li> Interest on House Loan is at 9% pa  </li>
            <li> You continue investing money in the SIP until you retire </li>
            <li> All the money that you are looking at in this is paid for from your savings </li>
            <li> Your salary pays for all your other expenses before you retire</li>

          </ol>
        </div>
        </div>
      </Popper>
    </div>
  );
}
