let output = "";
let skipNumber = 5;
for(i=0; i <= 10; i++)
{
    if(i === skipNumber)
{
    continue;
}
output += i + "";
}
console.log(output);