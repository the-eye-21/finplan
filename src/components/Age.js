import React from 'react';
import '../index.css';


class AgeStuff extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;

      this.ageChange=this.ageChange.bind(this);
      this.retChange=this.retChange.bind(this);

    }

    ageChange(event){

      let x=parseInt(event.target.value,10);
      let newAge={...this.state.Age};
      newAge.currentAge=x;
      this.setState({Age:newAge});
      this.props.stateChange(newAge);
    }

    retChange(event){
      let x=parseInt(event.target.value,10);
      let newAge={...this.state.Age};
      newAge.retireAge=x;
      this.setState({Age:newAge});
      this.props.stateChange(newAge);
    }


    render(){
      return(
        <div className="age">
            <form className="ui form ageForm">
              <div className="field">
              <label>how old are you?</label>
              <input type="number" step="1" name="current-age" value={this.state.Age.currentAge} onChange={this.ageChange}/>
              </div>
              <div className="field">
              <label> And when do you plan on retiring? </label>
              <input type="number" step="1" name="retire-age" value={this.state.Age.retireAge} onChange={this.retChange}/>
              </div>
            </form>
            <hr />
        </div>
      )
    }

}

export default AgeStuff
