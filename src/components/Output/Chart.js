import React from 'react';
import '../../index.css';

import {Line} from 'react-chartjs-2';

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

    let chartData={
      labels:this.props.xData,
      datasets:[
        {
          type:'line',
          label:"Total Money",
          data: this.props.yData2,
          borderColor: 'rgb(75, 192, 192)',
          yAxisID :'tot'

        },
        {
          type:'bar',
          label:"Annual Spending",
          data:this.props.yData1,
          backgroundColor: 'rgba(255, 158, 3,0.4)',
          yAxisID :'spend'
        }
      ]
    }
    return(
      <div id="tester" className="tester">
      <Line
      id="chart"
      data={chartData}
      options={{
        maintainAspectRatio:false,
        animation:{
          duration:0,
        },
        plugins: {

          title: {
            display: true,
            text: "Your Money"
          },
          legend: {
            display: true,
            position: "bottom"
         }
       },
       stacked:false,
       scales:{

         tot:{
           type:'linear',
           display:'true',
           position:'left',
           grid:{
             display:true,
           },
           ticks:{
             color:'rgb(75, 192, 192)',
             callback: function(value,index, values){
               if(value>=10000000){return value/10000000 + ' Crore';}
               else if(value>100000){return value/100000 + ' Lakh';}
               else {return value;}
             }
           }
         },
         spend:{
           type:'linear',
           display:'true',
           position:'right',
           grid:{
             display:false,
           },

           ticks:{
             color:'rgba(255, 158, 3,1.0)',
             callback: function(value,index, values){
               if(value>=10000000){return value/10000000 + ' Crore';}
               else if(value>100000){return value/100000 + ' Lakh';}
               else {return value;}
             }
           }
         }

       }


      }}

      />
      </div>

    )
  }

}

export default Chart
