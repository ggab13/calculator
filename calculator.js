let displayValue = document.querySelector('.display-form');
let numbers = Array.from(document.querySelectorAll('.numbers'));
let point = document.querySelector('#point');
let operators = Array.from(document.querySelectorAll('.operators'));
let clearButton = document.querySelector('#clear');
let allClearButton = document.querySelector('#allClear');

let firstValue;
let totalValue;
let currentValue;
let previousOperator;
let operatorValue;

console.log(totalValue);

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }

    
    return true;
};
numbers.forEach(number =>{
    number.addEventListener('click', event => {   
        displayValue.value += number.value;        
        currentValue = parseFloat(displayValue.value);
    });            
    number.addEventListener('keydown', event => {   
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        displayValue.value += charCode;        
        currentValue = parseFloat(displayValue.value);
    });       
});

point.addEventListener('click', event => {
    displayValue.value += '.';
    point.disabled = true;
});

document.addEventListener("keydown", function(event) {
   
   
    var evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    {
    
   displayValue.value += evt.key;
   currentValue = parseFloat(displayValue.value);}
   
  });
  
operators.forEach(operator =>{
        operator.addEventListener('click', event => {
           
            point.disabled = false;
            operatorValue = event.target.value;            
            console.log(operatorValue);
            totalValue = operate(previousOperator,firstValue,currentValue);    

            if(operatorValue === "equals")
            {
                if(currentValue == 0 && previousOperator ==="divide"){
                    console.log("You cant divide by 0!");
                } else {
                // totalValue = operate(previousOperator,firstValue,counter);  
                displayValue.value = totalValue;
                console.log("Total Value:" + totalValue + typeof totalValue);
                }
            }
            else if(firstValue === undefined){
                firstValue = currentValue;       
                totalValue = firstValue;         
                displayValue.value = "";
                console.log("fasz");
                previousOperator = operatorValue;
            } 
            else
            {
                if(currentValue === 0 && previousOperator ==="divide"){
                    console.log("You cant divide by 0!");
                } else {                  
                    //totalValue = operate(operatorValue,firstValue,counter);                
                    firstValue = totalValue;  
                    displayValue.value = "";
                    previousOperator = operatorValue;   
                    //displayValue.value = "";
                // console.log(firstValue);    
                }                       
            }                      
            console.log("Total:" +totalValue + "First:"+ firstValue + "Current Value:" + currentValue );             
        });
});

allClearButton.addEventListener('click', event => {
    displayValue.value = "";
    firstValue = 0;
    totalValue =0; 
    currentValue = 0;   
    operatorValue = "";
});

clearButton.addEventListener('click', event => { 
    displayValue.value = displayValue.value.slice(0, displayValue.value.length-1);
    currentValue = parseFloat(displayValue.value);   
 });

function add (number1, number2) {
    return number1 + number2;
}
function substract (number1, number2) {
    return number1 - number2;
}
function multiply (number1, number2) {
    return number1 * number2;
}
function divide (number1, number2) {
    return number1 / number2;
}
function operate(operator, number1, number2){     
       
    switch (operator) {                
        case "divide":                                    
        return divide(number1,number2);     
            break;

        case "multiply":                     
        return  multiply(number1,number2);                   
            break;

        case "substract":      
        return substract(number1,number2);                 
            break;

        case "add":                          
        return add(number1,number2);  
        break;   
    }   
};