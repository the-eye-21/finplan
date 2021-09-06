import React from 'react';
import '../index.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

class AgeStuff extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;

      this.ageChange=this.ageChange.bind(this);
      this.retChange=this.retChange.bind(this);

    }

    ageChange(event,newValue){

      let x=parseInt(event.target.value,10);
      let newAge={...this.state.Age};
      newAge.currentAge=x;
      this.setState({Age:newAge});
      this.props.stateChange(newAge);
    }

    retChange(event,newValue){
      let x=parseInt(event.target.value,10);
      let newAge={...this.state.Age};
      newAge.retireAge=x;
      this.setState({Age:newAge});
      this.props.stateChange(newAge);
    }


    render(){
      return(
        <div className="inputArea">
            <form className="ui form ageForm">
            <Typography id="current-age" gutterBottom>
              Current Age
            </Typography>
            <Input
              value={this.state.Age.currentAge}
              margin="dense"
              onChange={this.ageChange}

              inputProps={{
                step: 1,
                min: 0,
                type: 'number',
                'aria-labelledby': 'current-age',
              }}
            />

            <Typography id="retire-age" gutterBottom>
              Retirement Age
            </Typography>
            <Input
              value={this.state.Age.retireAge}
              margin="dense"
              onChange={this.retChange}
              inputProps={{
                step: 1,
                min: 0,
                type: 'number',
                'aria-labelledby': 'retire-age',
              }}
            />

            </form>
            <hr />
        </div>
      )
    }

}

export default AgeStuff
