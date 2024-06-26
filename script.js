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


const num = document.querySelectorAll(".num");
num.forEach((num) => {
    num.addEventListener("click", () =>{
        if (operator == undefined) {
            display.textContent += num.textContent 
            unprocessed = display.textContent
            processed = unprocessed.split(" ").join("");
            num1 = Number(processed);
        }

        else if (typeof operator == 'string' && typeof num1 == 'number'){
            display.textContent += num.textContent;
            unprocessed = display.textContent;
            processed = unprocessed.split(" ").join("");
            num2 = Number(processed);
            result = operate(num1, num2, operator);

        }  
        
        else if (num1 == undefined && typeof result == 'number'){
            display.textContent = "";
            display.textContent += num.textContent 
            unprocessed = display.textContent
            processed = unprocessed.split(" ").join("");
            num1 = Number(processed);
            operator = undefined
        } 
    })
})
//updates operator variable when operatorBtn clicked
const operatorBtn = document.querySelectorAll(".operatorBtn")
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (operator == undefined) {
            operator = operatorBtn.textContent;
            display.textContent = ""
        }

        else if (typeof operator == 'string'){
            operator = operatorBtn.textContent;
            display.textContent = "";
            num1 = result;
        }  
    })    
}) 


const equalsBtn = document.querySelector("#equalsBtn")
equalsBtn.addEventListener("click", () => {
     display.textContent = result;
     num1 = undefined;
     
});


const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        display.textContent = undefined;
        num1 = undefined ;
        num2 = undefined;
        operator = undefined;
        result = undefined;
});

