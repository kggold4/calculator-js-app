//public variables
let outputview = "";

//insert num to the calculator
function insert(num) {
    outputview = outputview + num;
    document.getElementById("outputview").innerHTML = outputview;
}

//calculate
function equal() {
    if(outputview) {
        outputview = eval(outputview);
        document.getElementById("outputview").innerHTML = outputview;
        //outputview = "";
    }
}

//clear calculator
function clean() {
    outputview = "";
    document.getElementById("outputview").innerHTML = outputview;
}

//delete last number or operator in the claculator
function back() {
    outputview = outputview.substring(0, outputview.length -1);
    document.getElementById("outputview").innerHTML = outputview;
}