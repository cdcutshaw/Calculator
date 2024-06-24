const display = document.querySelector("#display");



// 2. create variables for calculator operation
let num1 = "";
let num2 = "";



//1. create basic math functions
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




//3. create operate function 
function operate (num1, num2, operator) 
{
    if(operator === "+")
    {
        return add(num1, num2);
    }
    else if (operator === "-")
    {
        return subtract(num1, num2);
    }
    else if (operator === "*")
    {    
        return multiply(num1, num2);
    }
    else if (operator === "/") 
    {
        return divide(num1, num2);
    }       
}

//updates display when number buttons are clicked
const num = document.querySelectorAll(".num");
num.forEach((num) => {
    num.addEventListener("click", () =>{
        display.textContent += num.textContent
    })
    
    
})

//stores display value as num1 when operator button clicked, sets display to operatorBtn textContent
const operatorBtn = document.querySelectorAll(".operatorBtn")
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        num1 = display.textContent;
        display.textContent = operatorBtn.textContent
    })
    
})  



    

//clears display when clear button is pushed
const clear = document.querySelector("#clear");
    clear.addEventListener("click", () => {
        display.textContent = ""

})

