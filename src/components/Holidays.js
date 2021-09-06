import React from 'react';
import '../index.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


class HolidaySpend extends React.Component{
  constructor(props){
    super(props);
    this.state=this.props.parentState;

    this.saChange=this.saChange.bind(this);
    this.ysChange=this.ysChange.bind(this);
    this.aiChange=this.aiChange.bind(this);
}

  saChange(event){
    let x=parseInt(event.target.value,10);
    let newHol={...this.state.Holiday};
    newHol.startage=x;
    this.setState({Holiday:newHol});
    this.props.stateChange(newHol);

  }

  ysChange(event){
    let x=parseInt(event.target.value,10);
    let newHoliday={...this.state.Holiday};
    newHoliday.yearlyspend=x;
    this.setState({Holiday:newHoliday});
    this.props.stateChange(newHoliday);


  }

  aiChange(event){
    let x=parseInt(event.target.value,10);
    let newHoliday={...this.state.Holiday};
    newHoliday.annualinc=x;
    this.setState({Holiday:newHoliday});
    this.props.stateChange(newHoliday);


  }


  render(){

    return(
      <div className="inputArea">
        <h3>Vacation Spending </h3>
        <form className="ui form holidayForm">
        <Typography id="holiday-age" gutterBottom>
            When do you plan on starting to go on holidays?
        </Typography>
        <Input
          value={this.state.Holiday.startage}
          margin="dense"
          onChange={this.saChange}

          inputProps={{
            step: 1,
            min: 0,
            type: 'number',
            'aria-labelledby': 'holiday-age',
          }}
        />

        <Typography id="yearly-spend" gutterBottom>
          How much do you plan on spending each year? (Current Value)
        </Typography>
        <Input
          value={this.state.Holiday.yearlyspend}
          margin="dense"
          onChange={this.ysChange}

          inputProps={{
            step: 10000,
            min: 0,
            type: 'number',
            'aria-labelledby': 'yearly-spend',
          }}
        />

        <Typography id="yearly-inc" gutterBottom>
          And how much do you want to increase this by each year? (Adjusted for Inflation)
        </Typography>
        <Input
          value={this.state.Holiday.annualinc}
          margin="dense"
          onChange={this.aiChange}

          inputProps={{
            step: 1,
            min: 0,
            type: 'number',
            'aria-labelledby': 'yearly-inc',
          }}
        />



        </form>

        <hr />

      </div>
    )
  }

}

export default HolidaySpend
