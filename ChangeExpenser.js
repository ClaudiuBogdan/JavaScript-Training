function checkCashRegister(price, cash, cid) {
  let brutChange = cash - price;
  
  let mCHange = giveChange(brutChange, cid, []);
  // Here is your change, ma'am.
  const statusDic = [
    {status: "INSUFFICIENT_FUNDS", change: []},
    {status: "CLOSED", change: []},
    {status: "OPEN", change: []}
  ];

  let changeRes = statusDic[2];
  changeRes.change = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 3.75], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
  return changeRes;
}

function giveChange(change, availableMoney, result){
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
    { name : 'TWENTY',
      value : 20},
    { name : 'ONE HUNDRED',
      value : 100},
  ];

  let minChange = null;
  for(let i = 0; i < changeOptionsArray.length; i++){
    if(changeOptionsArray[i].value > change){
      console.log(changeOptionsArray[i - 1]);
      minChange = changeOptionsArray[i - 1];
      break;
    }    
  }
  
  const availableChangeValue =   availableMoney.reduce( (prev, curr, index) => {
    if(index == 1){
      if(prev[0] === minChange.name){
        return prev;
      }
      if(curr[0] === minChange.name){
        return curr;
      }
    }
    if(curr[0] === minChange.name){
        return curr;
      }
      else{
        return prev;
      }
  });
  console.log(availableChangeValue);
  let newChange = change - availableChangeValue[1];
  console.log(newChange);
  if(newChange < 10){
    return 0;
  }
  else{
    return giveChange(newChange, availableMoney, []);
  }
  

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
