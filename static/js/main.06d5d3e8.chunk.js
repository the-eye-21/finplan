(this.webpackJsonpfinplanner=this.webpackJsonpfinplanner||[]).push([[0],{23:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(10),i=a.n(r),o=(a(8),a(4)),c=a(5),h=a(1),l=a(7),u=a(6),p=a(3),j=a(0),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.consChange=n.consChange.bind(Object(h.a)(n)),n.modChange=n.modChange.bind(Object(h.a)(n)),n.growChange=n.growChange.bind(Object(h.a)(n)),n.infChange=n.infChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"consChange",value:function(e){console.log(typeof e.target.value);var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Returns);a.conservative=t,this.setState({Returns:a}),this.props.stateChange(a)}},{key:"modChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Returns);a.moderate=t,this.setState({Returns:a}),this.props.stateChange(a)}},{key:"growChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Returns);a.growth=t,this.setState({Returns:a}),this.props.stateChange(a)}},{key:"infChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Returns);a.inflation=t,this.setState({Returns:a}),this.props.stateChange(a)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"inputArea",children:[Object(j.jsx)("div",{className:"descText"}),Object(j.jsx)("div",{className:"expectedReturns",children:Object(j.jsxs)("form",{className:"ui form",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"Expected Returns"}),Object(j.jsx)("input",{type:"range",name:"conservative",min:"0",max:"40",step:"1",value:this.state.Returns.growth,onChange:this.growChange}),Object(j.jsxs)("label",{children:[" ",this.state.Returns.growth]})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"Inflation"}),Object(j.jsx)("input",{type:"range",name:"inflation",min:"0",max:"20",step:"1",value:this.state.Returns.inflation,onChange:this.infChange}),Object(j.jsxs)("label",{children:[" ",this.state.Returns.inflation," "]})]})]})}),Object(j.jsx)("hr",{})]})}}]),a}(s.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.ageChange=n.ageChange.bind(Object(h.a)(n)),n.retChange=n.retChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"ageChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Age);a.currentAge=t,this.setState({Age:a}),this.props.stateChange(a)}},{key:"retChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Age);a.retireAge=t,this.setState({Age:a}),this.props.stateChange(a)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"age",children:[Object(j.jsxs)("form",{className:"ui form ageForm",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"how old are you?"}),Object(j.jsx)("input",{type:"number",step:"1",name:"current-age",value:this.state.Age.currentAge,onChange:this.ageChange})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:" And when do you plan on retiring? "}),Object(j.jsx)("input",{type:"number",step:"1",name:"retire-age",value:this.state.Age.retireAge,onChange:this.retChange})]})]}),Object(j.jsx)("hr",{})]})}}]),a}(s.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.monChange=n.monChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"monChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Money);a.currbal=t,this.setState({Money:a}),this.props.stateChange(a)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("form",{className:"ui form",children:Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"How much money do you have rn?"}),Object(j.jsx)("input",{type:"number",min:"0",step:"100000",name:"currbal",value:this.state.Money.currbal,onChange:this.monChange})]})})}),Object(j.jsx)("hr",{})]})}}]),a}(s.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.saChange=n.saChange.bind(Object(h.a)(n)),n.ysChange=n.ysChange.bind(Object(h.a)(n)),n.aiChange=n.aiChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"saChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Holiday);a.startage=t,this.setState({Holiday:a}),this.props.stateChange(a)}},{key:"ysChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Holiday);a.yearlyspend=t,this.setState({Holiday:a}),this.props.stateChange(a)}},{key:"aiChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Holiday);a.annualinc=t,this.setState({Holiday:a}),this.props.stateChange(a)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Vacation Spending "}),Object(j.jsxs)("form",{className:"ui form holidayForm",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:" When do you plan on starting to go on holidays?"}),Object(j.jsx)("input",{type:"number",step:"1",name:"holiday-age",value:this.state.Holiday.startage,onChange:this.saChange})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:" How much do you plan on spending each year? (Current Value) "}),Object(j.jsx)("input",{type:"number",step:"10000",name:"retire-age",value:this.state.Holiday.yearlyspend,onChange:this.ysChange})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:" And how much do you want to increase this by each year? (Adjusted for Inflation) "}),Object(j.jsx)("input",{type:"number",step:"1",name:"retire-age",value:this.state.Holiday.annualinc,onChange:this.aiChange})]})]}),Object(j.jsx)("hr",{})]})}}]),a}(s.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.msChange=n.msChange.bind(Object(h.a)(n)),n.nyChange=n.nyChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"msChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Retirement);a.monthlyspend=t,this.setState({Retirement:a}),this.props.stateChange(a)}},{key:"nyChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Retirement);a.numyears=t,this.setState({Retirement:a}),this.props.stateChange(a)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"retirement",children:[Object(j.jsx)("h3",{children:" Retirement Savings "}),Object(j.jsxs)("form",{className:"ui form retirementForm",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:" How much do you want to spend each month Post-Retirement? (Today's Value)"}),Object(j.jsx)("input",{type:"number",step:"10000",name:"retirement-spending",value:this.state.Retirement.monthlyspend,onChange:this.msChange})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:" How many years of retirement do you want to plan for?"}),Object(j.jsx)("input",{type:"number",step:"1",name:"retirement-years",value:this.state.Retirement.numyears,onChange:this.nyChange})]})]}),Object(j.jsx)("hr",{})]})}}]),a}(s.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.haChange=n.haChange.bind(Object(h.a)(n)),n.hvChange=n.hvChange.bind(Object(h.a)(n)),n.hdpChange=n.hdpChange.bind(Object(h.a)(n)),n.hlpChange=n.hlpChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"haChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.House);a.age=t,this.setState({House:a}),this.props.stateChange(a)}},{key:"hvChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.House);a.value=t,this.setState({House:a}),this.props.stateChange(a)}},{key:"hdpChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.House);a.downpay=t,this.setState({House:a}),this.props.stateChange(a)}},{key:"hlpChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.House);a.loanper=t,this.setState({House:a}),this.props.stateChange(a)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"house",children:[Object(j.jsx)("h3",{children:" Money for house "}),Object(j.jsxs)("form",{className:"ui form ageForm",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"At what age do you want to buy a house?"}),Object(j.jsx)("input",{type:"number",step:"1",name:"house-age",value:this.state.House.age,onChange:this.haChange})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"How much do you want to spend on it?(Current Value)"}),Object(j.jsx)("input",{type:"number",step:"1000000",name:"house-value",value:this.state.House.value,onChange:this.hvChange})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"How much of it would be a down payment?"}),Object(j.jsx)("input",{type:"range",min:"0",max:"100",step:"5",name:"down-payment",value:this.state.House.downpay,onChange:this.hdpChange}),Object(j.jsxs)("label",{children:[this.state.House.downpay," %"]})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{children:"How long will the loan be?"}),Object(j.jsx)("input",{type:"number",step:"1",name:"loan-period",value:this.state.House.loanper,onChange:this.hlpChange})]})]}),Object(j.jsx)("hr",{})]})}}]),a}(s.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.setAge=n.setAge.bind(Object(h.a)(n)),n.setReturns=n.setReturns.bind(Object(h.a)(n)),n.setMoney=n.setMoney.bind(Object(h.a)(n)),n.setRetirement=n.setRetirement.bind(Object(h.a)(n)),n.setHouse=n.setHouse.bind(Object(h.a)(n)),n.setHoliday=n.setHoliday.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"setAge",value:function(e){this.setState({Age:e}),this.props.updateState({Age:e})}},{key:"setReturns",value:function(e){this.setState({Returns:e}),this.props.updateState({Returns:e})}},{key:"setMoney",value:function(e){this.setState({Money:e}),this.props.updateState({Money:e})}},{key:"setRetirement",value:function(e){this.setState({Retirement:e}),this.props.updateState({Retirement:e})}},{key:"setHouse",value:function(e){this.setState({House:e}),this.props.updateState({House:e})}},{key:"setHoliday",value:function(e){this.setState({Holiday:e}),this.props.updateState({Holiday:e})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["The following assumptions are made:",Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:" You step up your SIP by 10% each year. "}),Object(j.jsx)("li",{children:" You stop going on vacations 5 years after you retire "}),Object(j.jsx)("li",{children:" Interest on House Loan is at 9% pa  "}),Object(j.jsx)("li",{children:" You continue investing money in the SIP until you retire "}),Object(j.jsx)("li",{children:" All the money that you are looking at in this is paid for from your savinds "})]})]}),Object(j.jsx)(b,{parentState:this.state,stateChange:this.setAge}),Object(j.jsx)(d,{parentState:this.state,stateChange:this.setReturns}),Object(j.jsx)(g,{parentState:this.state,stateChange:this.setMoney}),Object(j.jsx)(O,{parentState:this.state,stateChange:this.setRetirement}),Object(j.jsx)(v,{parentState:this.state,stateChange:this.setHouse}),Object(j.jsx)(y,{parentState:this.state,stateChange:this.setHoliday})]})}}]),a}(s.a.Component),f=a(11),C=a.n(f),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={x:n.props.xData,y:n.props.yData1},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props.yData2),console.log(this.props.xData),console.log(this.props.yData1),Object(j.jsx)("div",{children:Object(j.jsx)("div",{id:"tester",className:"tester",children:Object(j.jsx)(C.a,{data:[{x:this.props.xData,y:this.props.yData2,type:"scatter",mode:"lines+markers",marker:{color:"red"},name:"Total Money"},{type:"bar",x:this.props.xData,y:this.props.yData1,name:"Your Planned Spending"}],layout:{width:1e3,height:800,title:"Your Money"}})})})}}]),a}(s.a.Component);function S(e,t,a,n,s){for(var r=Array(e.retireAge+a.numyears),i=0;i<r.length;i++)r[i]=0;var o=e.retireAge-e.currentAge,c=1+t.inflation/100,h=a.monthlyspend;h*=Math.pow(c,o);for(var l=0;l<a.numyears;l++)r[e.retireAge+l]+=12*h,h*=c;var u=n.value*Math.pow(c,n.age-e.currentAge);r[n.age-1]=u*n.downpay/100;for(var p=function(e,t,a){var n=.0075,s=12*a,r=e*(100-t)/100,i=Math.pow(1.0075,s);return r*n*i/(i-1)}(u,n.downpay,n.loanper),j=0;j<n.loanper;j++)r[n.age+j]+=12*p;for(var d=c+s.annualinc/100,b=s.yearlyspend*Math.pow(c,s.startage-e.currentAge),g=s.startage;g<=e.retireAge+5;g++)r[g]+=b,b*=d;return r}function A(e,t,a,n,s,r){for(var i=12*s,o=1+r/100,c=t,h=a;h<e.length;h++){if((c-=e[h])<0)return-1e3;c*=o,h<n&&(c+=i),i*=1.1}return c}var w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={z:[],inSIP:0,fin:{x:[],y1:[],y2:[],y3:[]}},n.appState=n.appState.bind(Object(h.a)(n)),n.presentValue=n.presentValue.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"appState",value:function(){return this.props.parentState()}},{key:"presentValue",value:function(e){var t=e.length,a=this.appState(),n=a.Age.currentAge,s=1+a.Returns.inflation/100;console.log(s);for(var r=0,i=0;i<t;i++)r+=e[i]*Math.pow(s,n-i-1);return r}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=S(this.appState().Age,this.appState().Returns,this.appState().Retirement,this.appState().House,this.appState().Holiday),t=function(e,t,a,n,s,r){var i=s/(12*(n-a)),o=0,c=2*i;if(A(e,t,a,n,o,r)>0)return 0;for(;A(e,t,a,n,c,r)<0;)c*=2;for(var h=0;h<500;h++)if(A(e,t,a,n,i,r)<0)i=((o=i)+c)/2;else{if(!(A(e,t,a,n,i,r)>100))return i;i=(o+(c=i))/2}return i}(e,this.appState().Money.currbal,this.appState().Age.currentAge,this.appState().Age.retireAge,this.presentValue(e),this.appState().Returns.growth),a=function(e,t,a,n,s,r,i){var o=t.length-n,c=Array(o),h=Array(o),l=Array(o),u=Array(o),p=12*e,j=1+i/100;u[0]=p,l[0]=a,c[0]=n,h[0]=t[n-1],u[0]=p;for(var d=1;d<o;d++)c[d]=d+n,u[d]=p,h[d]=t[d+n],l[d]=l[d-1]*j,l[d]-=h[d],d<=s-n&&(l[d]+=p),p*=1.1;return console.log("arrs"),console.log(c,h,l,u),{x:c,y1:h,y2:l,y3:u}}(t,e,this.appState().Money.currbal,this.appState().Age.currentAge,this.appState().Age.retireAge,this.presentValue(e),this.appState().Returns.growth);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[" Required Initial SIP: ",parseInt(t,10)," per month increased at 10% per year "]}),Object(j.jsx)(x,{xData:a.x,yData1:a.y1,yData2:a.y2,yData3:a.y3})]})}}]),a}(s.a.Component),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={Age:{currentAge:22,retireAge:60},Returns:{conservative:5,moderate:8,growth:12,inflation:4},Money:{currbal:2e6},Retirement:{monthlyspend:1e5,numyears:20,intype:"conservative"},House:{age:35,value:2e7,downpay:20,loanper:15,intype:"moderate"},Holiday:{startage:30,yearlyspend:5e4,annualinc:5,intype:"growth"}},n.updateState=n.updateState.bind(Object(h.a)(n)),n.StateToChild=n.StateToChild.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"updateState",value:function(e){this.setState(e)}},{key:"StateToChild",value:function(){return this.state}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"topContainer",children:[Object(j.jsx)("div",{className:"inputPane",children:Object(j.jsx)(m,{parentState:this.state,updateState:this.updateState})}),Object(j.jsx)("div",{className:"outputChart",children:Object(j.jsx)(w,{parentState:this.StateToChild})})]})}}]),a}(s.a.Component);i.a.render(Object(j.jsx)(H,{}),document.querySelector("#root"))},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.06d5d3e8.chunk.js.map