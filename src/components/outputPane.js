import React from 'react';
import '../index.css';

import Chart from './Chart'

import findNetSpend from './netSpend';
import totalInvest from './Invest';
import arrs from './finalArray';

class Output extends React.Component{

    constructor(props){
      super(props);
      this.state={
        z:[],
        inSIP:0,
        fin:{
          x:[],
          y1:[],
          y2:[],
          y3:[]
        }
      }
      this.appState=this.appState.bind(this);
      this.presentValue=this.presentValue.bind(this);
      }

    appState(){
      let x=this.props.parentState();
      return x;
    }

    presentValue(z){
      let n=z.length;
      let st=this.appState();
      let c=st.Age.currentAge;
      let inf=1+st.Returns.inflation/100;

      let pv=0;
      for(let i=0;i<n;i++){
          pv+=z[i]*(inf**(c-i-1));

      }

      return pv;
    }

    componentDidUpdate(){

    }




    render(){

      let z=findNetSpend(this.appState().Age,this.appState().Returns,this.appState().Retirement,this.appState().House,this.appState().Holiday);
      let inSIP = totalInvest(z,this.appState().Money.currbal,this.appState().Age.currentAge,this.appState().Age.retireAge,this.presentValue(z),this.appState().Returns.growth);
      let fin=arrs(inSIP,z,this.appState().Money.currbal,this.appState().Age.currentAge,this.appState().Age.retireAge,this.presentValue(z),this.appState().Returns.growth);


      return(
        <div>
          <h1> Required Initial SIP: {parseInt(inSIP,10)} per month increased at 10% per year </h1>
          <Chart xData={fin.x} yData1={fin.y1} yData2={fin.y2} yData3={fin.y3} />
        </div>
      )
    }

}



export default Output
