import React from 'react';
import '../index.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Slider from '@material-ui/core/Slider';

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

    hdpChange(event, newValue){

      let x=parseInt(newValue,10);
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
        <div className="house inputArea">
        <h3> Money for house </h3>
        <form className="ui form ageForm">
          <Typography id="house-age" gutterBottom>
              At what age do you want to buy a house?
          </Typography>
          <Input
            value={this.state.House.age}
            margin="dense"
            onChange={this.haChange}

            inputProps={{
              step: 1,
              min: 0,
              type: 'number',
              'aria-labelledby': 'house-age',
            }}
          />

          <Typography id="house-value" gutterBottom>
              How much do you want to spend on it?(Current Value)
          </Typography>
          <Input
            value={this.state.House.value}
            margin="dense"
            onChange={this.hvChange}

            inputProps={{
              step: 1000000,
              min: 0,
              type: 'number',
              'aria-labelledby': 'house-value',
            }}
          />

          <Typography id="down-payment" gutterBottom>
            How much of it would be a down payment?
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <Slider
                value={this.state.House.downpay}
                onChange={this.hdpChange}
                aria-labelledby="down-payment"
                marks={[{value:0,label:'0%'},{value:50,label:'50%'},{value:100,label:'100%'}]}
                step={10}
                min={0}
                max={100}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                value={this.state.House.downpay}
                margin="dense"
                onChange={this.hdpChange}

                inputProps={{
                  step: 10,
                  min: 0,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'down-payment',
                }}
              />
            </Grid>
          </Grid>


          <Typography id="loan-period" gutterBottom>
            How long will the loan be?
          </Typography>
          <Input
            value={this.state.House.loanper}
            margin="dense"
            onChange={this.hlpChange}

            inputProps={{
              step: 1,
              min: 0,
              type: 'number',
              'aria-labelledby': 'loan-period',
            }}
          />




        </form>

        <hr />


        </div>
      )
    }

}

export default House
