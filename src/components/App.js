import React from 'react';
import '../index.css';



import InputScreen from './Input';
import Output from './outputPane';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Age:{
        currentAge:22,
        retireAge:60
      },
      Returns:{
        conservative:5,
        moderate:8,
        growth:12,
        inflation:4
      },
      Money:{
        currbal:2000000
      },
      Retirement:{
        monthlyspend:100000,
        numyears:20,
        intype:"conservative"
      },
      House:{
        age:35,
        value:20000000,
        downpay:20,
        loanper:15,
        intype:"moderate"
      },
      Holiday:{
        startage:30,
        yearlyspend:50000,
        annualinc:5,
        intype:"growth"
      }

    }
    this.updateState=this.updateState.bind(this);
    this.StateToChild=this.StateToChild.bind(this);


  }


  updateState(aaa){
    this.setState(aaa);

  }

  StateToChild(){
    return this.state;
  }

  render(){



    return(
      <div className="topContainer">
      <div className="inputPane">
      <InputScreen parentState={this.state} updateState={this.updateState} />
      </div>
      <div className="outputChart">

      

      <Output parentState={this.StateToChild} />

      </div>
      </div>
    )
  }

}

export default App
