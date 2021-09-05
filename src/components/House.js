import React from 'react';
import '../index.css';
// import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';


class House extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;

      this.haChange=this.haChange.bind(this);
      this.hvChange=this.hvChange.bind(this);
      this.hdpChange=this.hdpChange.bind(this);
//      this.hdpMatChange=this.hdpMatChange.bind(this);
      this.hlpChange=this.hlpChange.bind(this);

    }

    haChange(event){
      let x=parseInt(event.target.value,10);
      let newHouse={...this.state.House};
      newHouse.age=x;
      this.setState({House:newHouse});
      this.props.stateChange(newHouse);

    }
    hvChange(event){
      let x=parseInt(event.target.value,10);
      let newHouse={...this.state.House};
      newHouse.value=x;
      this.setState({House:newHouse});
      this.props.stateChange(newHouse);

    }

    hdpChange(event){

      let x=parseInt(event.target.value,10);
      let newHouse={...this.state.House};
      newHouse.downpay=x;
      this.setState({House:newHouse});
      this.props.stateChange(newHouse);

    }
    hlpChange(event){
      let x=parseInt(event.target.value,10);
      let newHouse={...this.state.House};
      newHouse.loanper=x;
      this.setState({House:newHouse});
      this.props.stateChange(newHouse);

    }



    render(){
      return(
        <div className="house">
        <h3> Money for house </h3>
        <form className="ui form ageForm">
          <div className="field">
            <label>At what age do you want to buy a house?</label>
            <input type="number" step="1" name="house-age" value={this.state.House.age} onChange={this.haChange}/>
          </div>

          <div className="field">
            <label>How much do you want to spend on it?(Current Value)</label>
            <input type="number" step="1000000" name="house-value" value={this.state.House.value} onChange={this.hvChange}/>
          </div>

          <div className="field">
            <label>How much of it would be a down payment?</label>

            <input type="range" min="0" max="100" step="5" name="down-payment" value={this.state.House.downpay} onChange={this.hdpChange}/>
            <label>{this.state.House.downpay} %</label>
          </div>

          <div className="field">
            <label>How long will the loan be?</label>
            <input type="number" step="1" name="loan-period" value={this.state.House.loanper} onChange={this.hlpChange}/>
          </div>

        </form>

        <hr />


        </div>
      )
    }

}

export default House
