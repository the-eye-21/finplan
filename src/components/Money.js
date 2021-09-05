import React from 'react';
import '../index.css';




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
      this.props.stateChange(newMoney);

    }

    render(){
      return(
        <div>

          <div>
          <form className="ui form">
            <div className="field">
              <label>How much money do you have rn?</label>
              <input type="number" min="0"step="100000" name="currbal" value={this.state.Money.currbal} onChange={this.monChange} />

            </div>
            </form>
          </div>
          <hr />

        </div>
      )
    }



}


export default MoneyRN
