
function monthlyEMI(val,dp,per){
    // Returns the EMI you've to pay each month in order to finish your loan.
    let intRate=9/1200;
    let period=per*12;
    let loanAmt = val*(100-dp)/100;
    let y=(1+intRate)**period;
    let x=loanAmt*intRate*y/(y-1);
    return x;

}


export default function findNetSpend(Age,RR,Ret,Hou,Hol){
    let x=Array(Age.retireAge+Ret.numyears);
    for(let i=0;i<x.length;i++){x[i]=0;}
    let yearstoret=Age.retireAge-Age.currentAge;
    let infl=1+RR.inflation/100;
    let monsp=Ret.monthlyspend;

    //RetirementSpending
    monsp=monsp*(infl**yearstoret);
    for (let i = 0;i<Ret.numyears;i++){
        x[Age.retireAge+i]+=monsp*12;
        monsp=monsp*infl;
    }

    //HouseSpending
    let hVal=Hou.value*(infl**(Hou.age-Age.currentAge));
    x[Hou.age-1]=hVal*(Hou.downpay)/100;
    let monemi=monthlyEMI(hVal,Hou.downpay,Hou.loanper);
    for(let i=0;i<Hou.loanper;i++){
        x[Hou.age+i]+=monemi*12;
    }

    //HolidaySpend
    let holinc=infl+(Hol.annualinc/100);
    let initholspend=Hol.yearlyspend*(infl**(Hol.startage-Age.currentAge));
    for(let i=Hol.startage;i<=Age.retireAge+5;i++){
      x[i-1]+=initholspend;
      initholspend=initholspend*holinc;
    }



    return x;




}
