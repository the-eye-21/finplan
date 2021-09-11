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

export default function Dir() {
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
        How To Use
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
        <div>
          This app lets you know how much you have to invest according to how much you want to spend in the future.<br />
          Add all the details about your age, current savings, and other things.<br />
          In case you already have a house, just change the value of the house to 0 and you should be good. <br />

        
          Thank You
        </div>
        </div>
      </Popper>
    </div>
  );
}
