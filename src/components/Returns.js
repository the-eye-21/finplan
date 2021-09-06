import React from 'react';
import '../index.css';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


class ExpReturns extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;
      this.growChangeMat=this.growChangeMat.bind(this);
      this.infChangeMat=this.infChangeMat.bind(this);
    }

    growChangeMat(event,newValue){
      let x=parseInt(newValue,10);

      let newReturns={...this.state.Returns};
      newReturns.growth=x;
      this.setState({Returns:newReturns});
      this.props.stateChange(newReturns);

    }

    infChangeMat(event,newValue){
      let x=parseInt(newValue,10);
      let newReturns={...this.state.Returns};
      newReturns.inflation=x;
      this.setState({Returns:newReturns});
      this.props.stateChange(newReturns);
    }


    render(){
      return(
      <div className="inputArea">
        
        <div className="expectedReturns">
        <form className="ui form">
        <Typography id="expected-returns" gutterBottom>
          Expected Returns
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Slider
              value={this.state.Returns.growth}
              onChange={this.growChangeMat}
              aria-labelledby="expected-returns"
              marks={[{value:0,label:'0%'},{value:40,label:'40%'}]}
              step={1}
              min={0}
              max={40}
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              value={this.state.Returns.growth}
              margin="dense"
              onChange={this.growChangeMat}

              inputProps={{
                step: 1,
                min: 0,
                max: 40,
                type: 'number',
                'aria-labelledby': 'expected-returns',
              }}
            />
          </Grid>
        </Grid>

        <Typography id="expected-inflation" gutterBottom>
          Expected Inflation
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Slider
              value={this.state.Returns.inflation}
              onChange={this.infChangeMat}
              aria-labelledby="expected-inflation"
              marks={[{value:0,label:'0%'},{value:20,label:'20%'}]}
              step={1}
              min={0}
              max={20}
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              value={this.state.Returns.inflation}
              margin="dense"
              onChange={this.infChangeMat}

              inputProps={{
                step: 1,
                min: 0,
                max: 20,
                type: 'number',
                'aria-labelledby': 'expected-inflation',
              }}
            />
          </Grid>
        </Grid>

      </form>
      </div>
      <hr/>
      </div>
        )
      }
}


export default ExpReturns
