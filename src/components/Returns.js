import React from 'react';
import '../index.css';



class ExpReturns extends React.Component{
    constructor(props){
      super(props);
      this.state=this.props.parentState;

      this.consChange=this.consChange.bind(this);
      this.modChange=this.modChange.bind(this);
      this.growChange=this.growChange.bind(this);
      this.infChange=this.infChange.bind(this);
    }




    consChange(event){
      console.log(typeof(event.target.value));
      let x=parseInt(event.target.value,10);
      let newReturns={...this.state.Returns};
      newReturns.conservative=x;
      this.setState({Returns:newReturns});
      this.props.stateChange(newReturns);


    }

    modChange(event){
      let x=parseInt(event.target.value,10);
      let newReturns={...this.state.Returns};
      newReturns.moderate=x;
      this.setState({Returns:newReturns});
      this.props.stateChange(newReturns);


    }

    growChange(event){
      let x=parseInt(event.target.value,10);
      let newReturns={...this.state.Returns};
      newReturns.growth=x;
      this.setState({Returns:newReturns});
      this.props.stateChange(newReturns);

    }

    infChange(event){
      let x=parseInt(event.target.value,10);
      let newReturns={...this.state.Returns};
      newReturns.inflation=x;
      this.setState({Returns:newReturns});
      this.props.stateChange(newReturns);
    }
    render(){
      return(
      <div className="inputArea">
        <div className="descText">

        </div>
        <div className="expectedReturns">
        <form className="ui form">
          <div className="field">
            <label>Expected Returns</label>
            <input type="range" name="conservative" min="0" max="40" step="1" value={this.state.Returns.growth} onChange={this.growChange}/>
            <label> {this.state.Returns.growth}</label>
          </div>
          <div className="field">
            <label>Inflation</label>
            <input type="range" name="inflation" min="0" max="20" step="1" value={this.state.Returns.inflation} onChange={this.infChange} />
            <label> {this.state.Returns.inflation} </label>
          </div>

      </form>
      </div>
      <hr/>
      </div>
        )
      }
}


export default ExpReturns
