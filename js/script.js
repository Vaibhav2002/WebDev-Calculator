var expression = ""
var equalsPress = false

function addToExpression(value) {
    if(equalsPress && value.match(/^[0-9]+$/) != null) expression = ""
    expression += value
    document.getElementById("txt_res").innerHTML = expression
    equalsPress = false
}

function deleteLast(){
    expression = expression.slice(0, expression.length - 1)
    document.getElementById("txt_res").innerHTML = expression
}

function onEqualsPress() {
    var result = eval(expression)
    document.getElementById("txt_res").innerHTML = result
    document.getElementById("txt_exp").innerHTML = expression
    expression = result
    equalsPress = true;
}

function clearAll() {
    expression = ""
    document.getElementById("txt_res").innerHTML = ""
    document.getElementById("txt_exp").innerHTML = ""
}

document.getElementById("btnClear").addEventListener("click", clearAll)
document.getElementById("btnPercent").onclick = function () { addToExpression("%") }
document.getElementById("btnPlusMinus").onclick = function () { addToExpression("-") }
document.getElementById("btnDivide").onclick = function () { addToExpression("/") }

document.getElementById("btn8").onclick = function () { addToExpression("8") }
document.getElementById("btn7").onclick = function () { addToExpression("7") }
document.getElementById("btn9").onclick = function () { addToExpression("9") }
document.getElementById("btnMult").onclick = function () { addToExpression("*") }

document.getElementById("btn5").onclick = function () { addToExpression("5") }
document.getElementById("btn4").onclick = function () { addToExpression("4") }
document.getElementById("btn6").onclick = function () { addToExpression("6") }
document.getElementById("btnMinus").onclick = function () { addToExpression("-") }

document.getElementById("btn1").onclick = function () { addToExpression("1") }
document.getElementById("btn2").onclick = function () { addToExpression("2") }
document.getElementById("btn3").onclick = function () { addToExpression("3") }
document.getElementById("btnAdd").onclick = function () { addToExpression("+") }

document.getElementById("btnDelete").addEventListener("click", deleteLast)
document.getElementById("btn0").onclick = function () { addToExpression("0") }
document.getElementById("btnDot").onclick = function () { addToExpression(".") }
document.getElementById("btnEqual").addEventListener("click", onEqualsPress)