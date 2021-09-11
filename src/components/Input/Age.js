import React from 'react';
import '../../index.css';

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
      if(x>=this.state.Age.retireAge){newAge.retireAge=x+1;}

      this.setState({Age:newAge});
      if(event.target.value){this.props.stateChange({Age:newAge});}
      if(x>=this.state.House.age){
          let newHouse={...this.state.House};
          newHouse.age=x+1;
          this.setState({House:newHouse});
          this.props.stateChange({House:newHouse});
      }
    }

    retChange(event,newValue){
      let x=parseInt(event.target.value,10);
      if(x<=this.state.Age.currentAge){x=this.state.Age.currentAge+1;}
      let newAge={...this.state.Age};
      newAge.retireAge=x;
      this.setState({Age:newAge});
      if(event.target.value){this.props.stateChange({Age:newAge});}
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
