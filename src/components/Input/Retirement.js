import React from 'react';
import '../../index.css';



import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

class RetirementSave extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;

      this.msChange=this.msChange.bind(this);
      this.nyChange=this.nyChange.bind(this);
    }

    msChange(event){
      let x=parseInt(event.target.value,10);
      let newRet={...this.state.Retirement};
      newRet.monthlyspend=x;
      this.setState({Retirement:newRet});
      this.props.stateChange({Retirement:newRet});
    }



    nyChange(event){
      let x=parseInt(event.target.value,10);
      let newRet={...this.state.Retirement};
      newRet.numyears=x;
      this.setState({Retirement:newRet});
      this.props.stateChange({Retirement:newRet});

    }




    render(){
      return(
        <div className="inputArea">

        <h3> Retirement Savings </h3>



          <form className="ui form retirementForm">

          <Typography id="monthly-spend" gutterBottom>
              How much do you want to spend each month in retirement? (Current Value)
          </Typography>
          <Input
            value={this.state.Retirement.monthlyspend}
            margin="dense"
            onChange={this.msChange}

            inputProps={{
              step: 10000,
              min: 0,
              type: 'number',
              'aria-labelledby': 'monthly-spend',
            }}
          />

          <Typography id="retirement-years" gutterBottom>
              How many years of Retirement do you want to plan for?
          </Typography>
          <Input
            value={this.state.Retirement.numyears}
            margin="dense"
            onChange={this.nyChange}

            inputProps={{
              step: 1,
              min: 0,
              type: 'number',
              'aria-labelledby': 'retirement-years',
            }}
          />
          </form>

          <hr />
        </div>
      )
    }


}

export default RetirementSave
