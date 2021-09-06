import React from 'react';
import '../index.css';
import Plot from 'react-plotly.js';

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      x:this.props.xData,
      y:this.props.yData1
    };

  }


  render(){
    // x=this.props.xData;
    // yearSpend=this.props.yData1;
    // totMoney=this.props.yData2;
    // invMoney=this.props.yData3;
    //
    return(
      <div>

      <div id="tester" className="tester">
      <Plot
        data={[
          {
            x: this.props.xData,
            y: this.props.yData2,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
            name: 'Total Money'
          },
        {type: 'bar', x: this.props.xData, y:this.props.yData1, name:'Your Planned Spending'}
        ]}
        layout={ {width: 1000, height: 800, title: 'Your Money'} }
      />
      </div>
      </div>
    )
  }

}

export default Chart
