const display = document.querySelector("#display");

let num1 = undefined ;
let num2 = undefined;
let operator = undefined;
let result = undefined;




//basic math functions
function add (a, b) 
{
    return a + b;
}

function subtract (a, b)
{
    return a - b;
}

function multiply (a, b)
{
    return a * b;
}

function divide (a, b)
{
    if (b === 0)
    {
        return "ERROR";
    }
    return a / b;
}




//operate function 
function operate (num1, num2, operator) 
{
    if(operator === ' + ')
    {
        return add(num1, num2);
    }
    else if (operator === ' - ')
    {
        return subtract(num1, num2);
    }
    else if (operator === ' x ')
    {    
        return multiply(num1, num2);
    }
    else if (operator === ' / ') 
    {
        return divide(num1, num2);
    }       
}

//updates display when number buttons are clicked
const num = document.querySelectorAll(".num");
num.forEach((num) => {
    num.addEventListener("click", () =>{
        if (operator == undefined) {
            display.textContent += num.textContent 
            unprocessed = display.textContent
            processed = unprocessed.split(" ").join("");
            num1 = Number(processed);
        }

        else if (typeof operator == 'string'){
            display.textContent += num.textContent;
            unprocessed = display.textContent;
            processed = unprocessed.split(" ").join("");
            num2 = Number(processed);
            result = operate(num1, num2, operator);

        }  
        
        
    })
})
//updates operator variable when operatorBtn clicked
const operatorBtn = document.querySelectorAll(".operatorBtn")
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        operator = operatorBtn.textContent;
        display.textContent = ""
        
    })    
}) 

//calls operate function when equalsBtn clicked
const equalsBtn = document.querySelector("#equalsBtn")
equalsBtn.addEventListener("click", () => {
     display.textContent = result;
     
});

    

//clears display when clear button clicked
const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        display.textContent = undefined;
        operator = undefined;

});

