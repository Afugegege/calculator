var display = "";
var displayNum = "";
var num1 = 0;
var num2 = 0;
var lastOperator = "";
var result = 0;
var ans = "";
var calcFormula = "";
var displayOperator = "";
var symbol ="";
var lastElement = calcFormula[calcFormula.length -1];
var historyAns = "";
var historyFormula = "";
var historyDisplay ="";

function clickBtn(number){
    if(display === result && display != "0"){
        alert(wrong)
    }
    if($("#formula").html() == "0"){
        display = "" + number;
        calcFormula = "" + number;
    }
    else{
        if (display == result) {
            display = 0;
            $("#formula").html(display);
            calcFormula = 0;
            clickBtn(number);
        }else{
            display = display + number;
            calcFormula = calcFormula + number;
        }
    }
    
    displayNum += number; 
    $("#formula").html(display);
}

function clickOperator(operator){
    lastElement = calcFormula[calcFormula.length -1];
    if (num1 == 0){
        num1 = parseInt(displayNum);
    }
    else {
        num2 = parseInt(displayNum);
    }
    
    if (lastElement !== "+" && lastElement !== "-" && lastElement !== "/" && lastElement !== "*") {
        calcFormula += operator;
        if (operator == "+") {
            displayOperator = "+";
            display += displayOperator;
        }
        if (operator == "-") {
            displayOperator = "-";
            display += displayOperator;
        }
        if (operator == "*") {
            displayOperator = "×";
            display += displayOperator;
        }
        if (operator == "/") {
            displayOperator = "÷";
            display += displayOperator;
        }
        $("#formula").html(display);
        displayNum = "";
        lastOperator = operator;
    }
    else{
        erase();
        clickOperator(operator);
    }
    
}

function clickSpecialSymbol(symbol) {
    if (symbol == '%') {
        display += symbol;
        calcFormula += "/100";
    } else {
        display += symbol;
        calcFormula += symbol;
    }
    $("#formula").html(display);
}


function calc() {
    var result = eval(calcFormula);
    historyFormula += display;
    historyAns +=  result ;
    historyDisplay += historyFormula + " = " + historyAns + "<br>";
    $("#ans").html(result);
    display = result;
    calcFormula = result;
    $("#formula").html(display);
    $("#historyPanel").html(historyDisplay);
    
}

//clear all
function clearAll() {
    display = 0;
    $("#formula").html(display);
    result = 0;
    $("#ans").html(result);
    calcFormula = "";
}
function erase() {
    if (display !== 0) {
        display = display.slice(0, -1);
        $("#formula").html(display);
        calcFormula = calcFormula.slice(0, -1); 
        if (display.length < 1) {
            display = 0;
            $("#formula").html(display)
        } 
    }
    
}

function erase(operator) {
    if (display !== 0) {
        display = display.slice(0, -1);
        $("#formula").html(display);
        calcFormula = calcFormula.slice(0, -1); 
        if (display.length < 1) {
            display = 0;
            $("#formula").html(display+operator)
        } 
    }
    
}
function calcgdm() {
    if (display == "78-2") {
        window.open("https://eacg.net/Comicplay/69737-1-22.html");
    }
    }