import React from 'react';
import '../index.css';


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
      <div>
        <h3>Vacation Spending </h3>
        <form className="ui form holidayForm">
          <div className="field">
          <label> When do you plan on starting to go on holidays?</label>
          <input type="number" step="1" name="holiday-age" value={this.state.Holiday.startage} onChange={this.saChange}/>
          </div>
          <div className="field">
          <label> How much do you plan on spending each year? (Current Value) </label>
          <input type="number" step="10000" name="retire-age" value={this.state.Holiday.yearlyspend} onChange={this.ysChange} />
          </div>
          <div className="field">
          <label> And how much do you want to increase this by each year? (Adjusted for Inflation) </label>
          <input type="number" step="1" name="retire-age" value={this.state.Holiday.annualinc} onChange={this.aiChange} />
          </div>

        </form>

        <hr />

      </div>
    )
  }

}

export default HolidaySpend
