const CalcTip = (number) => {
  return number * (number >= 50 && number <= 300 ? 0.15 : 0.2);
};

const calcAverage = (arr) => {
  return (
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length
  );
};

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

var tips = [];

var total = [];

bills.forEach((val) => {
  let tip = CalcTip(val);
  tips.push(tip);
  total.push(val + tip);
});

console.log(bills);
console.log(tips);
console.log(total);

console.log(calcAverage(total));
