//public variables
let outputview = "";
let millis = 100;
let brightGreen = "#daffc2";
let brightRed = "#ffcece";
let brightOrange = "#ffebce";
let history = [];

function getDOM(id) {
    return document.getElementById(id);
}

//insert num to the calculator
function insert(num) {
    outputview = outputview + num;
    getDOM("outputview").innerHTML = outputview;
}

//calculate
function equal() {
    if(outputview) {
        try {

            addToHistory((outputview));
            outputview = eval(outputview);
            getDOM("outputview").innerHTML = outputview;
            changeColor("outputview", brightGreen);
            setTimeout(function() { changeColor("outputview", "white"); }, millis);

        } catch (e) {

            if (e instanceof SyntaxError) {
                error();
                setTimeout(function() { clearError(); }, millis * 10);
            }

        }
    }
}

//clear calculator
function clean() {
    outputview = "";
    getDOM("outputview").innerHTML = outputview;
    changeColor("outputview", brightRed);
    setTimeout(function() { changeColor("outputview", "white"); }, millis);
}

//delete last number or operator in the claculator
function back() {
    outputview = outputview.substring(0, outputview.length -1);
    getDOM("outputview").innerHTML = outputview;
    changeColor("outputview", brightOrange);
    setTimeout(function() { changeColor("outputview", "white"); }, millis);
}

function error() {
    getDOM("error").innerHTML = "invalid input";
}

function clearError() {
    getDOM("error").innerHTML = "";
}

function changeColor(id, color) {
    getDOM(id).style.background = color;
}

function addToHistory(item) {
    item += '=' + eval(item);
    history.push(item);
    console.log(history);
    displayHistory();
}

function clearHistory() {
    history = [];
    displayHistory();
}