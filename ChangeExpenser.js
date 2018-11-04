  const changeOptionsArray = [
    { name : 'PENNY',
      value : 0.001},
    { name : 'NICKEL',
      value : 0.05},
    { name : 'DIME',
      value : 0.1},
    { name : 'QUARTER',
      value : 0.25},
    { name : 'ONE',
      value : 1},
    { name : 'FIVE',
      value : 5},
    { name : 'TEN',
      value : 10},
    { name : 'TWENTY',
      value : 20},
    { name : 'ONE HUNDRED',
      value : 100},
  ];

function checkCashRegister(price, cash, cid) {
  let brutChange = cash - price;

  let minChange = null;
  for(let i = changeOptionsArray.length - 1; i >= 0; i--){
    if(changeOptionsArray[i].value < brutChange){
      minChange = changeOptionsArray[i];
      break;
    }    
  }
  
 let availableMoney = availableChange(cid, minChange);
  
  let mCHange = giveChange(brutChange, availableMoney, []);
  //console.log(mCHange);
  // Here is your change, ma'am.
  let changeRes = 'Hellow';
  console.log(changeRes);
  console.log(mCHange);
  console.log(`Test`);
  if(mCHange.newChange == 0){
    if(false){

    }
    else{
changeRes = {status: "OPEN", change: mCHange.result} ;
    }
    
  } 
  if(mCHange.newChange > 0){
    changeRes = {status: "INSUFFICIENT_FUNDS", change: []} ;
  }  
  console.log(changeRes)
  return changeRes;
}

function giveChange(change, availableMoney, result){
  let gratesChangeArray = availableMoney.pop();
  let changeValue = Math.min(Math.floor(change/getChangeValue(gratesChangeArray[0])) * getChangeValue(gratesChangeArray[0]), gratesChangeArray[1]);
  let newChange = change;
  if(changeValue > 0){
    newChange -= changeValue;
    result.push([gratesChangeArray[0], changeValue])
  }

  //console.log(newChange);
  if(newChange === 0 || availableMoney.length == 0){
    return {result, newChange};
  }
  else{
    return giveChange(newChange, availableMoney, result);
  }  

}

function availableChange(availableMoney, minChange){
  let isFOund = false;
    const availableChangeValue =   availableMoney.reduce( (prev, curr, index) => {
    if(index == 1){
      let newChangeArr = [];
      newChangeArr.push(prev);
      if(prev[0] === minChange.name){
        isFOund = true;
        return [prev];
      }
      newChangeArr.push(curr);
      if(curr[0] === minChange.name){
        isFOund = true;
        return newChangeArr;
      }
      return newChangeArr;
    }
    if(curr[0] === minChange.name){
      isFOund = true;
      prev.push(curr);
      }
      else if(!isFOund){
        prev.push(curr);
      }

      return prev;
  });
  return availableChangeValue;
}

function getChangeValue(name){
  for(let i = 0; i < changeOptionsArray.length; i++){
    if(changeOptionsArray[i].name === name){
      return changeOptionsArray[i].value;
    }
  }
  return null;
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
