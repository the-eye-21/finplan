import React from 'react';
import '../index.css';
import ExpReturns from './Input/Returns';
import AgeStuff from './Input/Age';

import MoneyRN from './Input/Money';
import HolidaySpend from './Input/Holidays';
import RetirementSave from './Input/Retirement';
import House from './Input/House';
import SimplePopper from './Input/Note';
import Dir from './Input/HowTo';
import Grid from '@material-ui/core/Grid';

class InputScreen extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;
      this.setState({Note:true});
      this.NoteState=this.NoteState.bind(this);
      this.updState=this.updState.bind(this);
    }

    updState(ev){
      this.setState(ev);
      this.props.updateState(ev);
    }



    NoteState(){
      return this.state.Note ? "visible" : "hidden";
    }


    render(){
      return(
        <div>
        <Grid container direction="row" justifyContent="space-around" alignItems="center" style={{height:"50px"}}>
          <Grid item xs={3}>
            <SimplePopper />
          </Grid>
          <Grid item xs={3}>
            <Dir />
          </Grid>
        </Grid>
        <AgeStuff parentState={this.state} stateChange={this.updState} />
        <ExpReturns parentState={this.state} stateChange={this.updState} />
        <MoneyRN parentState={this.state} stateChange={this.updState}/>
        <RetirementSave parentState={this.state} stateChange={this.updState} />
        <House parentState={this.state} stateChange={this.updState}/>
        <HolidaySpend parentState={this.state} stateChange={this.updState}/>




      </div>
      )
    }


}

export default InputScreen
