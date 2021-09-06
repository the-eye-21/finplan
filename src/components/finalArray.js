export default function arrs(inSIP,spendCurve,inMoney,curAge,retAge,preVal,growRate){
    let lifeLength=spendCurve.length;
    let n=lifeLength-curAge+1;
    let x=Array(n);
    let yearSpend=Array(n);
    let totMoney=Array(n);
    let invMoney=Array(n);

    let sip=inSIP*12;
    let gr=1+growRate/100;
    invMoney[0]=sip;
    totMoney[0]=inMoney;
    x[0]=curAge;
    yearSpend[0]=spendCurve[curAge-1];
    invMoney[0]=sip;
    for(let i=1;i<n;i++){
      sip=sip*1.1;
      x[i]=i+curAge;
      yearSpend[i]=spendCurve[i+curAge-1];
      totMoney[i]=totMoney[i-1]*gr;
      totMoney[i]-=yearSpend[i];
      if(i<=(retAge-curAge)){
        invMoney[i]=sip;
        totMoney[i]+=sip;
      }
    }
    
    return {x:x,y1:yearSpend,y2:totMoney,y3:invMoney};



}
