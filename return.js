function addTwoNumbers(a, b){
    return a+b;
}


let resultArr = [];

for (let i = 0; i < 10; i++)
{
let firstValue = i * 5;
let secondValue = i * i;

let result = addTwoNumbers(firstValue, secondValue);

resultArr.push(result);
}
console.log(resultArr);