(this.webpackJsonpfinplanner=this.webpackJsonpfinplanner||[]).push([[0],{21:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),i=a.n(s),o=(a(21),a(4)),c=a(3),h=a(7),u=a(6),l=a(5),p=a(10),d=a(234),b=a(232),g=a(238),j=a(236),y=a(1),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.growChangeMat=n.growChangeMat.bind(Object(h.a)(n)),n.infChangeMat=n.infChangeMat.bind(Object(h.a)(n)),n.growChange=n.growChange.bind(Object(h.a)(n)),n.infChange=n.infChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"growChangeMat",value:function(e,t){var a=parseInt(t,10),n=Object(p.a)({},this.state.Returns);n.growth=a,this.setState({Returns:n}),this.props.stateChange({Returns:n})}},{key:"infChangeMat",value:function(e,t){var a=parseInt(t,10),n=Object(p.a)({},this.state.Returns);n.inflation=a,this.setState({Returns:n}),this.props.stateChange({Returns:n})}},{key:"growChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Returns);a.growth=t,this.setState({Returns:a}),e.target.value&&this.props.stateChange({Returns:a})}},{key:"infChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Returns);a.inflation=t,this.setState({Returns:a}),e.target.value&&this.props.stateChange({Returns:a})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"inputArea",children:[Object(y.jsx)("div",{className:"expectedReturns",children:Object(y.jsxs)("form",{className:"ui form",children:[Object(y.jsx)(b.a,{id:"expected-returns",gutterBottom:!0,children:"Expected Returns"}),Object(y.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(y.jsx)(d.a,{item:!0,xs:8,children:Object(y.jsx)(g.a,{value:this.state.Returns.growth,onChange:this.growChangeMat,"aria-labelledby":"expected-returns",marks:[{value:0,label:"0%"},{value:40,label:"40%"}],step:1,min:0,max:40})}),Object(y.jsx)(d.a,{item:!0,xs:3,children:Object(y.jsx)(j.a,{value:this.state.Returns.growth,margin:"dense",onChange:this.growChange,inputProps:{step:1,min:0,max:40,type:"number","aria-labelledby":"expected-returns"}})})]}),Object(y.jsx)(b.a,{id:"expected-inflation",gutterBottom:!0,children:"Expected Inflation"}),Object(y.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(y.jsx)(d.a,{item:!0,xs:8,children:Object(y.jsx)(g.a,{value:this.state.Returns.inflation,onChange:this.infChangeMat,"aria-labelledby":"expected-inflation",marks:[{value:0,label:"0%"},{value:20,label:"20%"}],step:1,min:0,max:20})}),Object(y.jsx)(d.a,{item:!0,xs:3,children:Object(y.jsx)(j.a,{value:this.state.Returns.inflation,margin:"dense",onChange:this.infChange,inputProps:{step:1,min:0,max:20,type:"number","aria-labelledby":"expected-inflation"}})})]})]})}),Object(y.jsx)("hr",{})]})}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.ageChange=n.ageChange.bind(Object(h.a)(n)),n.retChange=n.retChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"ageChange",value:function(e,t){var a=parseInt(e.target.value,10),n=Object(p.a)({},this.state.Age);if(n.currentAge=a,a>=this.state.Age.retireAge&&(n.retireAge=a+1),this.setState({Age:n}),e.target.value&&this.props.stateChange({Age:n}),a>=this.state.House.age){var r=Object(p.a)({},this.state.House);r.age=a+1,this.setState({House:r}),this.props.stateChange({House:r})}}},{key:"retChange",value:function(e,t){var a=parseInt(e.target.value,10);a<=this.state.Age.currentAge&&(a=this.state.Age.currentAge+1);var n=Object(p.a)({},this.state.Age);n.retireAge=a,this.setState({Age:n}),e.target.value&&this.props.stateChange({Age:n})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"inputArea",children:[Object(y.jsxs)("form",{className:"ui form ageForm",children:[Object(y.jsx)(b.a,{id:"current-age",gutterBottom:!0,children:"Current Age"}),Object(y.jsx)(j.a,{value:this.state.Age.currentAge,margin:"dense",onChange:this.ageChange,inputProps:{step:1,min:0,type:"number","aria-labelledby":"current-age"}}),Object(y.jsx)(b.a,{id:"retire-age",gutterBottom:!0,children:"Retirement Age"}),Object(y.jsx)(j.a,{value:this.state.Age.retireAge,margin:"dense",onChange:this.retChange,inputProps:{step:1,min:0,type:"number","aria-labelledby":"retire-age"}})]}),Object(y.jsx)("hr",{})]})}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.monChange=n.monChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"monChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Money);a.currbal=t,this.setState({Money:a}),e.target.value&&this.props.stateChange({Money:a})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"inputArea",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("form",{className:"ui form",children:[Object(y.jsx)(b.a,{id:"current-money",gutterBottom:!0,children:"How much money do you have right now?"}),Object(y.jsx)(j.a,{value:this.state.Money.currbal,margin:"dense",onChange:this.monChange,inputProps:{step:5e5,min:0,type:"number","aria-labelledby":"current-money"}})]})}),Object(y.jsx)("hr",{})]})}}]),a}(r.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.saChange=n.saChange.bind(Object(h.a)(n)),n.ysChange=n.ysChange.bind(Object(h.a)(n)),n.aiChange=n.aiChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"saChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Holiday);t<this.state.Age.currentAge&&(t=this.state.Age.currentAge+1),a.startage=t,this.setState({Holiday:a}),e.target.value&&this.props.stateChange({Holiday:a})}},{key:"ysChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Holiday);a.yearlyspend=t,this.setState({Holiday:a}),e.target.value&&this.props.stateChange({Holiday:a})}},{key:"aiChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Holiday);a.annualinc=t,this.setState({Holiday:a}),e.target.value&&this.props.stateChange({Holiday:a})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"inputArea",children:[Object(y.jsx)("h3",{children:"Vacation Spending "}),Object(y.jsxs)("form",{className:"ui form holidayForm",children:[Object(y.jsx)(b.a,{id:"holiday-age",gutterBottom:!0,children:"When do you plan on starting to go on holidays?"}),Object(y.jsx)(j.a,{value:this.state.Holiday.startage,margin:"dense",onChange:this.saChange,inputProps:{step:1,min:0,type:"number","aria-labelledby":"holiday-age"}}),Object(y.jsx)(b.a,{id:"yearly-spend",gutterBottom:!0,children:"How much do you plan on spending each year? (Current Value)"}),Object(y.jsx)(j.a,{value:this.state.Holiday.yearlyspend,margin:"dense",onChange:this.ysChange,inputProps:{step:1e4,min:0,type:"number","aria-labelledby":"yearly-spend"}}),Object(y.jsx)(b.a,{id:"yearly-inc",gutterBottom:!0,children:"And how much do you want to increase this by each year? (%age after adjusting for Inflation)"}),Object(y.jsx)(j.a,{value:this.state.Holiday.annualinc,margin:"dense",onChange:this.aiChange,inputProps:{step:1,min:0,type:"number","aria-labelledby":"yearly-inc"}})]}),Object(y.jsx)("hr",{})]})}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.msChange=n.msChange.bind(Object(h.a)(n)),n.nyChange=n.nyChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"msChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Retirement);a.monthlyspend=t,this.setState({Retirement:a}),e.target.value&&this.props.stateChange({Retirement:a})}},{key:"nyChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.Retirement);a.numyears=t,this.setState({Retirement:a}),e.target.value&&this.props.stateChange({Retirement:a})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"inputArea",children:[Object(y.jsx)("h3",{children:" Retirement Savings "}),Object(y.jsxs)("form",{className:"ui form retirementForm",children:[Object(y.jsx)(b.a,{id:"monthly-spend",gutterBottom:!0,children:"How much do you want to spend each month in retirement? (Current Value)"}),Object(y.jsx)(j.a,{value:this.state.Retirement.monthlyspend,margin:"dense",onChange:this.msChange,inputProps:{step:1e4,min:0,type:"number","aria-labelledby":"monthly-spend"}}),Object(y.jsx)(b.a,{id:"retirement-years",gutterBottom:!0,children:"How many years of Retirement do you want to plan for?"}),Object(y.jsx)(j.a,{value:this.state.Retirement.numyears,margin:"dense",onChange:this.nyChange,inputProps:{step:1,min:0,type:"number","aria-labelledby":"retirement-years"}})]}),Object(y.jsx)("hr",{})]})}}]),a}(r.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.haChange=n.haChange.bind(Object(h.a)(n)),n.hvChange=n.hvChange.bind(Object(h.a)(n)),n.hdpChange=n.hdpChange.bind(Object(h.a)(n)),n.hdpChangeMat=n.hdpChangeMat.bind(Object(h.a)(n)),n.hlpChange=n.hlpChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"haChange",value:function(e){var t=parseInt(e.target.value,10);t<=this.state.Age.currentAge&&(t=this.state.Age.currentAge+1);var a=Object(p.a)({},this.state.House);a.age=t,this.setState({House:a}),e.target.value&&this.props.stateChange({House:a})}},{key:"hvChange",value:function(e){var t=parseInt(e.target.value,10),a=Object(p.a)({},this.state.House);a.value=t,this.setState({House:a}),e.target.value&&this.props.stateChange({House:a})}},{key:"hdpChangeMat",value:function(e,t){var a=parseInt(t,10),n=Object(p.a)({},this.state.House);n.downpay=a,this.setState({House:n}),this.props.stateChange({House:n})}},{key:"hdpChange",value:function(e,t){var a=parseInt(e.target.value,10),n=Object(p.a)({},this.state.House);n.downpay=a,this.setState({House:n}),e.target.value&&this.props.stateChange({House:n})}},{key:"hlpChange",value:function(e){var t=parseInt(e.target.value,10);t+this.state.House.age>this.state.Age.retireAge&&(t=this.state.Age.retireAge-this.state.House.age);var a=Object(p.a)({},this.state.House);a.loanper=t,this.setState({House:a}),e.target.value&&this.props.stateChange({House:a})}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"house inputArea",children:[Object(y.jsx)("h3",{children:" Money for house "}),Object(y.jsxs)("form",{className:"ui form ageForm",children:[Object(y.jsx)(b.a,{id:"house-age",gutterBottom:!0,children:"At what age do you want to buy a house?"}),Object(y.jsx)(j.a,{value:this.state.House.age,margin:"dense",onChange:this.haChange,inputProps:{step:1,min:0,type:"number","aria-labelledby":"house-age"}}),Object(y.jsx)(b.a,{id:"house-value",gutterBottom:!0,children:"How much do you want to spend on it?(Current Value)"}),Object(y.jsx)(j.a,{value:this.state.House.value,margin:"dense",onChange:this.hvChange,inputProps:{step:1e6,min:0,type:"number","aria-labelledby":"house-value"}}),Object(y.jsx)(b.a,{id:"down-payment",gutterBottom:!0,children:"How much of it would be a down payment?"}),Object(y.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(y.jsx)(d.a,{item:!0,xs:8,children:Object(y.jsx)(g.a,{value:this.state.House.downpay,onChange:this.hdpChangeMat,"aria-labelledby":"down-payment",marks:[{value:0,label:"0%"},{value:50,label:"50%"},{value:100,label:"100%"}],step:10,min:0,max:100})}),Object(y.jsx)(d.a,{item:!0,xs:3,children:Object(y.jsx)(j.a,{value:this.state.House.downpay,margin:"dense",onChange:this.hdpChange,inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"down-payment"}})})]}),Object(y.jsx)(b.a,{id:"loan-period",gutterBottom:!0,children:"How long will the loan be?"}),Object(y.jsx)(j.a,{value:this.state.House.loanper,margin:"dense",onChange:this.hlpChange,inputProps:{step:1,min:1,type:"number","aria-labelledby":"loan-period"}})]}),Object(y.jsx)("hr",{})]})}}]),a}(r.a.Component),S=a(22),A=a(235),k=a(239),w=a(237),H=Object(A.a)((function(e){return{paper:{border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function R(){var e=H(),t=r.a.useState(null),a=Object(S.a)(t,2),n=a[0],s=a[1],i=Boolean(n),o=i?"simple-popper":void 0;return Object(y.jsxs)("div",{children:[Object(y.jsx)(w.a,{"aria-describedby":o,type:"button",onClick:function(e){s(n?null:e.currentTarget)},variant:"contained",color:"primary",children:"Note"}),Object(y.jsx)(k.a,{id:o,open:i,anchorEl:n,children:Object(y.jsx)("div",{className:e.paper,children:Object(y.jsxs)("div",{children:["The following assumptions are made:",Object(y.jsxs)("ol",{children:[Object(y.jsx)("li",{children:" You step up your SIP by 10% each year. "}),Object(y.jsx)("li",{children:" You stop going on vacations 5 years after you retire "}),Object(y.jsx)("li",{children:" Interest on House Loan is at 9% pa  "}),Object(y.jsx)("li",{children:" You continue investing money in the SIP until you retire "}),Object(y.jsx)("li",{children:" All the money that you are looking at in this is paid for from your savings "}),Object(y.jsx)("li",{children:" Your salary pays for all your other expenses before you retire"}),Object(y.jsx)("li",{children:" You aren't necessarily leaving any money for your kids "})]}),Object(y.jsx)("div",{children:"Made by Lochan Manthena"}),Object(y.jsx)("div",{children:Object(y.jsx)("a",{href:"https://github.com/the-eye-21/finplan",children:"Github"})}),Object(y.jsxs)("div",{children:["Icons made by ",Object(y.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik",children:"Freepik"})]})]})})})]})}var I=Object(A.a)((function(e){return{paper:{border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function M(){var e=I(),t=r.a.useState(null),a=Object(S.a)(t,2),n=a[0],s=a[1],i=Boolean(n),o=i?"simple-popper":void 0;return Object(y.jsxs)("div",{children:[Object(y.jsx)(w.a,{"aria-describedby":o,type:"button",onClick:function(e){s(n?null:e.currentTarget)},variant:"contained",color:"primary",children:"How To Use"}),Object(y.jsx)(k.a,{id:o,open:i,anchorEl:n,children:Object(y.jsx)("div",{className:e.paper,children:Object(y.jsxs)("div",{children:["This app lets you know how much you have to invest according to how much you want to spend in the future.",Object(y.jsx)("br",{}),"Add all the details about your age, current savings, and other things.",Object(y.jsx)("br",{}),"In case you already have a house, just change the value of the house to 0 and you should be good. ",Object(y.jsx)("br",{}),"Thank You"]})})})]})}var N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state=n.props.parentState,n.setState({Note:!0}),n.NoteState=n.NoteState.bind(Object(h.a)(n)),n.updState=n.updState.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"updState",value:function(e){this.setState(e),this.props.updateState(e)}},{key:"NoteState",value:function(){return this.state.Note?"visible":"hidden"}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",style:{height:"50px"},children:[Object(y.jsx)(d.a,{item:!0,xs:3,children:Object(y.jsx)(R,{})}),Object(y.jsx)(d.a,{item:!0,xs:3,children:Object(y.jsx)(M,{})})]}),Object(y.jsx)(v,{parentState:this.state,stateChange:this.updState}),Object(y.jsx)(m,{parentState:this.state,stateChange:this.updState}),Object(y.jsx)(O,{parentState:this.state,stateChange:this.updState}),Object(y.jsx)(f,{parentState:this.state,stateChange:this.updState}),Object(y.jsx)(C,{parentState:this.state,stateChange:this.updState}),Object(y.jsx)(x,{parentState:this.state,stateChange:this.updState})]})}}]),a}(r.a.Component),P=a(94),B=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={x:n.props.xData,y:n.props.yData1},n}return Object(c.a)(a,[{key:"render",value:function(){var e={labels:this.props.xData,datasets:[{type:"line",label:"Total Money",data:this.props.yData2,backgroundColor:"rgb(75, 192, 192)",borderColor:"rgb(75, 192, 192)",yAxisID:"tot"},{type:"bar",label:"Annual Spending",data:this.props.yData1,backgroundColor:"rgba(255, 158, 3,0.4)",borderColor:"rgba(255, 158, 3,0.4)",yAxisID:"spend"}]};return Object(y.jsx)("div",{id:"tester",className:"tester",children:Object(y.jsx)(P.a,{id:"chart",data:e,options:{maintainAspectRatio:!1,animation:{duration:0},plugins:{tooltip:{mode:"index",intersect:"false",callbacks:{label:function(e){var t=e.dataset.label,a=e.parsed.y;if(t&&(t+=" : "),a)if(a>=1e7)t+=(a/1e7).toFixed(2).toString()+" Crore";else{if(!(a>1e5))return a;t+=(a/1e5).toFixed(2).toString()+" Lakh"}return t}}},title:{display:!0,text:"Your Money"},legend:{display:!0,position:"bottom"}},stacked:!1,scales:{tot:{type:"linear",display:"true",position:"left",grid:{display:!0},ticks:{color:"rgb(75, 192, 192)",callback:function(e,t,a){return e>=1e7?e/1e7+" Crore":e>1e5?e/1e5+" Lakh":e}}},spend:{type:"linear",display:"true",position:"right",grid:{display:!1},ticks:{color:"rgba(255, 158, 3,1.0)",callback:function(e,t,a){return e>=1e7?e/1e7+" Crore":e>1e5?e/1e5+" Lakh":e}}}}}})})}}]),a}(r.a.Component);function D(e,t,a,n,r){for(var s=Array(Math.max(e.retireAge+a.numyears,n.age+n.loanper)),i=0;i<s.length;i++)s[i]=0;var o=e.retireAge-e.currentAge,c=1+t.inflation/100,h=a.monthlyspend;h*=Math.pow(c,o);for(var u=0;u<a.numyears;u++)s[e.retireAge+u]+=12*h,h*=c;var l=n.value*Math.pow(c,n.age-e.currentAge);s[n.age-1]=l*n.downpay/100;for(var p=function(e,t,a){var n=.0075,r=12*a,s=e*(100-t)/100,i=Math.pow(1.0075,r);return s*n*i/(i-1)}(l,n.downpay,n.loanper),d=0;d<n.loanper;d++)s[n.age+d]+=12*p;for(var b=c+r.annualinc/100,g=r.yearlyspend*Math.pow(c,r.startage-e.currentAge),j=r.startage;j<=e.retireAge+5;j++)s[j-1]+=g,g*=b;return s}function T(e,t,a,n,r,s){for(var i=12*r,o=1+s/100,c=t,h=a-1;h<e.length;h++){if((c-=e[h])<0)return-1e3;c*=o,h<n&&(c+=i),i*=1.1}return c}var V=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={z:[],inSIP:0,fin:{x:[],y1:[],y2:[],y3:[]}},n.appState=n.appState.bind(Object(h.a)(n)),n.presentValue=n.presentValue.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"appState",value:function(){return this.props.parentState()}},{key:"presentValue",value:function(e){for(var t=e.length,a=this.appState(),n=a.Age.currentAge,r=1+a.Returns.inflation/100,s=0,i=0;i<t;i++)s+=e[i]*Math.pow(r,n-i-1);return s}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=D(this.appState().Age,this.appState().Returns,this.appState().Retirement,this.appState().House,this.appState().Holiday),t=function(e,t,a,n,r,s){var i=r/(12*(n-a)),o=0,c=2*i;if(T(e,t,a,n,o,s)>0)return 0;for(;T(e,t,a,n,c,s)<0;)c*=2;i=c/2;for(var h=0;h<500;h++){var u=T(e,t,a,n,i,s);if(u<0)i=((o=i)+c)/2;else{if(!(u>1e3))return i;i=(o+(c=i))/2}}return i}(e,this.appState().Money.currbal,this.appState().Age.currentAge,this.appState().Age.retireAge,this.presentValue(e),this.appState().Returns.growth),a=function(e,t,a,n,r,s,i){var o=t.length-n+1,c=Array(o),h=Array(o),u=Array(o),l=Array(o),p=12*e,d=1+i/100;l[0]=p,u[0]=a,c[0]=n,h[0]=t[n-1],l[0]=p;for(var b=1;b<o;b++)p*=1.1,c[b]=b+n,h[b]=t[b+n-1],u[b]=u[b-1]*d,u[b]-=h[b],b<=r-n&&(l[b]=p,u[b]+=p);return{x:c,y1:h,y2:u,y3:l}}(t,e,this.appState().Money.currbal,this.appState().Age.currentAge,this.appState().Age.retireAge,this.presentValue(e),this.appState().Returns.growth);return Object(y.jsxs)("div",{className:"outputChart",children:[Object(y.jsx)("div",{className:"outputHeader",children:Object(y.jsxs)("h1",{children:[" You will have enough money if you start an SIP of ",Object(y.jsx)("span",{className:"bigText",children:parseInt(t,10)})," per month and increase it by 10% each year "]})}),Object(y.jsx)(B,{xData:a.x,yData1:a.y1,yData2:a.y2,yData3:a.y3})]})}}]),a}(r.a.Component),F=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={Age:{currentAge:22,retireAge:60},Returns:{conservative:5,moderate:8,growth:12,inflation:4},Money:{currbal:2e6},Retirement:{monthlyspend:1e5,numyears:20,intype:"conservative"},House:{age:35,value:2e7,downpay:20,loanper:15,intype:"moderate"},Holiday:{startage:30,yearlyspend:2e5,annualinc:5,intype:"growth"},Note:!0},n.updateState=n.updateState.bind(Object(h.a)(n)),n.StateToChild=n.StateToChild.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"updateState",value:function(e){this.setState(e)}},{key:"StateToChild",value:function(){return this.state}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"topContainer",children:[Object(y.jsx)("div",{className:"inputPane",children:Object(y.jsx)(N,{parentState:this.state,updateState:this.updateState})}),Object(y.jsx)("div",{className:"outputPane",children:Object(y.jsx)(V,{parentState:this.StateToChild})})]})}}]),a}(r.a.Component);i.a.render(Object(y.jsx)(F,{}),document.querySelector("#root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.edb072cf.chunk.js.map