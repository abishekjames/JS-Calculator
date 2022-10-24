
var val1 = null;
var val2 = null;
var operator = null;
const OP = ["+", "-", "*", "/"]; 

const DISPLAY = document.querySelector("#DisplayItem");


function add(a,b){
    return a + b;
} 

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a, b) {
    return a / b
  }


function operate(op,a,b){
    const F = [add,subtract,multiply,divide];
    return F[OP.indexOf(op)](a,b);
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return substract(a, b)
      case '*':
        return multiply(a, b)
      case '/':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}
function display(btn){

    const V = btn.value; 

    if(OP.includes(V)){
        
        val1 = parseInt(DISPLAY.textContent);
        operator = V;
    }else if(V == "CLEAR"){
       
        DISPLAY.textContent = 0;
    }else if(V == "="){
        
        val2 = parseInt(DISPLAY.textContent);
        DISPLAY.textContent = operate(operator,val1,val2);
        operator = "=";
        val2 = null;
    }
    else{
        if(val1 == parseInt(DISPLAY.textContent) && operator != null){
            DISPLAY.textContent = 0;
        } 
        
        dText = DISPLAY.textContent.toString(); 
        bText = V.toString();
        if(dText == "0")
            DISPLAY.textContent = bText;
        else
            DISPLAY.textContent = dText + bText;
    }
}
const BUTTONS = document.querySelectorAll('button');
BUTTONS.forEach((btn, key) => {
    btn.addEventListener('click', ()=>display(btn));
});
