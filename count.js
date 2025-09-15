let start = 10;
function countdown(value) {
    console.log(value);

    if(value < 1){
        return;
    }
    countdown(value - 1);
}

countdown(start);