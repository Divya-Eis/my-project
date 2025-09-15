let value = 1000;

(function() {
  let value = "Local IIFE Value";
console.log("Inside IIFE:", value);
})();

let result = (function (){
    let value = "Returned from IIFE";
    return value;
})();

console.log("Result variable:", result);
console.log("Global value:", value);

(function(newVal){
    value = newVal;
    console.log("Updated value is now:" + value);
})("5000")