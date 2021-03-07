let displayValue = document.querySelector('.display');

let numbers = Array.from(document.querySelectorAll('.numbers'));
let operators = Array.from(document.querySelectorAll('.operators'));
let operatorValue;
let operatorForOperation;
let firstValue = 0;
let currentNumber = 0;
let numberAfterOperation;
let totalValue = 0;
var func;

let counter ="";

console.log(operatorValue);

numbers.forEach(number =>{


    number.addEventListener('click', event => {            
        counter += number.value;   
        displayValue.value  = counter;           
         
    
})});


operators.forEach(operator =>{

        operator.addEventListener('click', event => {           
                   
            if(operatorValue == undefined)
       
            {                    
                operatorValue = event.target.value;   
                firstValue = counter;     
                           
                 
            }
               else if (operatorValue === "equals") {
                
                displayValue.value = totalValue;
               
                     
               } else {
   
                        operatorValue = event.target.value;   
                       currentValue = counter; 
                       operate(operatorValue,firstValue,currentNumber);    
                             
                       displayValue.value  = firstValue;   
                  
               }                
            
          
            console.log("First Value: " +firstValue, "Current Value: " +currentNumber + "total value:"+totalValue);        
            
          
        });
       
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
                        
        totalValue = divide(number1,number2);      
        
            break;
        case "multiply":                  
          
        totalValue =  multiply(number1,number2);              
            
            break;
        case "substract": 
           
        totalValue = substract(number1,number2);           
           
            break;
        case "add":                       
        displayValue.value ="";
        totalValue = add(number1,number2);        
          
    }     
      
    
}