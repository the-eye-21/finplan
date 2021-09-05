export default function arrs(inSIP,spendCurve,inMoney,curAge,retAge,preVal,growRate){
    let lifeLength=spendCurve.length;
    let n=lifeLength-curAge
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
      x[i]=i+curAge;
      invMoney[i]=sip;
      yearSpend[i]=spendCurve[i+curAge];
      totMoney[i]=totMoney[i-1]*gr;
      totMoney[i]-=yearSpend[i];
      if(i<=(retAge-curAge)){
        totMoney[i]+=sip;
      }
      sip=sip*1.1;

    }
    console.log("arrs");
    console.log(x,yearSpend,totMoney,invMoney);
    return {x:x,y1:yearSpend,y2:totMoney,y3:invMoney};



}
