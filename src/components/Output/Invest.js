
function endBal(spendCurve,inMoney,curAge,retAge,startSIP,growRate){
    let sip=startSIP*12;
    let stepUp=1+10/100;
    let gr=1+growRate/100;
    let bal=inMoney;
    for(let i=curAge-1;i<spendCurve.length;i++){

        bal-=spendCurve[i];
        if(bal<0){return -1000;}
        bal=bal*gr;
        if(i<retAge){bal+=sip;}
        sip=sip*stepUp;
    }
    return bal;
}





export default function totalInvest(spendCurve,inMoney,curAge,retAge,preVal,growRate){
      let numYe=retAge-curAge;
      let guess=preVal/(12*numYe);
      let lowGuess=0;
      let upGuess=2*guess;
      if(endBal(spendCurve,inMoney,curAge,retAge,lowGuess,growRate)>0){
        return 0;
      }
      while(endBal(spendCurve,inMoney,curAge,retAge,upGuess,growRate)<0){
        upGuess*=2;
      }
      guess=upGuess/2;
      for(let i=0;i<500;i++){
        let x=endBal(spendCurve,inMoney,curAge,retAge,guess,growRate)
        if(x<0){
          lowGuess=guess;
          guess=(lowGuess+upGuess)/2;
        }
        else if(x>1000){
          upGuess=guess;
          guess=(lowGuess+upGuess)/2;
        }
        else {
          return guess;
        }
      }
      return guess;


}
