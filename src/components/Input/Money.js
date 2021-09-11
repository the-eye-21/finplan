import React from 'react';
import '../../index.css';


import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


class MoneyRN extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;
      this.monChange=this.monChange.bind(this);


    }

    monChange(event){
      let x=parseInt(event.target.value,10);
      let newMoney={...this.state.Money};
      newMoney.currbal=x;
      this.setState({Money:newMoney});
      if(event.target.value){this.props.stateChange({Money:newMoney});}

    }

    render(){
      return(
        <div className="inputArea">

          <div>
          <form className="ui form">

          <Typography id="current-money" gutterBottom>
              How much money do you have right now?
          </Typography>
          <Input
            value={this.state.Money.currbal}
            margin="dense"
            onChange={this.monChange}

            inputProps={{
              step: 500000,
              min: 0,
              type: 'number',
              'aria-labelledby': 'current-money',
            }}
          />

            </form>
          </div>
          <hr />

        </div>
      )
    }



}


export default MoneyRN
