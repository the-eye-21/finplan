import React from 'react';
import '../index.css';


import ExpReturns from './Returns';
import AgeStuff from './Age';

import MoneyRN from './Money';
import HolidaySpend from './Holidays';
import RetirementSave from './Retirement';
import House from './House';

class InputScreen extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;
      this.setAge = this.setAge.bind(this);
      this.setReturns = this.setReturns.bind(this);
      this.setMoney = this.setMoney.bind(this);
      this.setRetirement = this.setRetirement.bind(this);
      this.setHouse = this.setHouse.bind(this);
      this.setHoliday = this.setHoliday.bind(this);
    }

    setAge(AgeParam){
      this.setState({Age:AgeParam});
      this.props.updateState({Age:AgeParam});
    }

    setReturns(newReturns){
      this.setState({Returns:newReturns});
      this.props.updateState({Returns:newReturns});

    }

    setMoney(newMoney){
      this.setState({Money:newMoney});
      this.props.updateState({Money:newMoney});
    }

    setRetirement(newReti){
      this.setState({Retirement:newReti});
      this.props.updateState({Retirement:newReti})

    }

    setHouse(newHouse){
      this.setState({House:newHouse});
      this.props.updateState({House:newHouse});


    }

    setHoliday(newHoliday){
      this.setState({Holiday:newHoliday});
      this.props.updateState({Holiday:newHoliday});

    }


    render(){
      return(
        <div>

      
      <div>
        The following assumptions are made:
        <ol>
          <li> You step up your SIP by 10% each year. </li>
          <li> You stop going on vacations 5 years after you retire </li>
          <li> Interest on House Loan is at 9% pa  </li>
          <li> You continue investing money in the SIP until you retire </li>
          <li> All the money that you are looking at in this is paid for from your savinds </li>

        </ol>
      </div>

      <AgeStuff parentState={this.state} stateChange={this.setAge} />
      <ExpReturns parentState={this.state} stateChange={this.setReturns} />
      <MoneyRN parentState={this.state} stateChange={this.setMoney}/>
      <RetirementSave parentState={this.state} stateChange={this.setRetirement} />
      <House parentState={this.state} stateChange={this.setHouse}/>
      <HolidaySpend parentState={this.state} stateChange={this.setHoliday}/>




      </div>
      )
    }


}

export default InputScreen
