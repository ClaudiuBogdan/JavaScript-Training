//Convert number up to 4000

function convertToRoman(num) {
const romanDic = {
  1 : 'I',
  2 : 'II',
  3 : 'III',
  5 : 'V',
  10 : 'X',
  50 : 'L',
  100 : 'C',
  500 : 'D',
  1000 : 'M',
}
if(num == 0)
  return '';
if(romanDic.hasOwnProperty(num))
  return romanDic[num];
if(num == 4)
  return 'IV';
if(num > 5 && num < 9)
  return romanDic[5] + romanDic[num - 5];
if(num == 9)
 return 'IX';
 if(num < 40)
 return romanDic[10].repeat(num/10) + convertToRoman(num%10);
if(num < 50)
  return romanDic[10] + romanDic[50] + convertToRoman(num%10);
if(num < 90)
  return romanDic[50] + romanDic[10].repeat((num -50)/10)  + convertToRoman(num%10);
if(num < 100)
  return romanDic[10] + romanDic[100] + convertToRoman(num%10);
if(num < 400)
  return  romanDic[100].repeat(num/100) + convertToRoman(num%100);
if(num < 500)
  return  romanDic[100] +  romanDic[500] +  convertToRoman(num%100);
if(num <900){
  return romanDic[500] + romanDic[100].repeat((num - 500)/100) + convertToRoman(num%100);
}
if(num <1000){
  return romanDic[100] + romanDic[1000] + convertToRoman(num%100);
}
if(num <4000){
  return romanDic[1000].repeat((num)/1000) + convertToRoman(num%1000);
}
}

console.log(convertToRoman(941));
