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

// 2. create variables for calculator operation
let num1 = "";
let num2 = "";
let operator = "";


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



