import React from 'react';
import '../index.css';


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
      this.props.stateChange(newRet);
    }



    nyChange(event){
      let x=parseInt(event.target.value,10);
      let newRet={...this.state.Retirement};
      newRet.numyears=x;
      this.setState({Retirement:newRet});
      this.props.stateChange(newRet);

    }




    render(){
      return(
        <div className="retirement">

        <h3> Retirement Savings </h3>


          <form className="ui form retirementForm">
            <div className="field">
              <label> How much do you want to spend each month Post-Retirement? (Today's Value)</label>
              <input type="number" step="10000" name="retirement-spending" value={this.state.Retirement.monthlyspend} onChange={this.msChange}/>
            </div>
            <div className="field">
              <label> How many years of retirement do you want to plan for?</label>
              <input type="number" step="1" name="retirement-years" value={this.state.Retirement.numyears} onChange={this.nyChange} />
            </div>
          </form>

          <hr />
        </div>
      )
    }


}

export default RetirementSave
