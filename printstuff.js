let arr = ["orange", 10.2, "hey", 100, "false"];

function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);

}

arr.forEach(printStuff);