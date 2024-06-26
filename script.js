const display = document.querySelector("#display");





let num1 = undefined ;
let num2 = undefined;
let operator = undefined;
let result = undefined;



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
        //when entering initial operation
        if (operator == undefined) {
            display.textContent += num.textContent 
            num1 = Number(display.textContent.split(" ").join(""));
        }
        //when multiple operations are performed before hitting equalsBtn
        else if (typeof operator == 'string' && typeof num1 == 'number' ){
            display.textContent += num.textContent;
            num2 = Number(display.textContent.split(" ").join(""));
            result = operate(num1, num2, operator);
           
        }  
        //when operation performed with result of hitting equalsBtn
        else if (num1 == undefined && typeof result == 'number'){
            display.textContent = "";
            display.textContent += num.textContent 
            num1 = Number(display.textContent.split(" ").join(""));
            operator = undefined
        } 
    })
})

const operatorBtn = document.querySelectorAll(".operatorBtn")
operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        //when entering initial calculation
        if (operator == undefined ) {
            operator = operatorBtn.textContent;
            display.textContent = ""
        }
        //when performing additional operations 
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

const percentage = document.querySelector('#percentage');
    percentage.addEventListener("click", () =>{
        display.textContent = display.textContent.split(" ").join("") / 100;
            if (num2 == undefined) {
                num1 = Number(display.textContent.split(" ").join(""));}

            else if (num2 !== undefined) {
                num2 = Number(display.textContent.split(" ").join(""))
                result = operate(num1, num2, operator);}
            
        
    })
