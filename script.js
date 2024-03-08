const numBtns = document.querySelectorAll('.num')
const displayInp = document.querySelector('.input-result')
const operatorBtns = document.querySelectorAll('.operator')

const clearAll = document.querySelector('.all-clear')
const equalBtns = document.querySelector('.equal')


let display = "";

clearAll.addEventListener('click', () => {
    displayInp.textContent = ""
    operator = ""
    num1;
    num2;
})

function add(...args) {
    return displayInp.textContent = args.reduce((total, item) => total + item)
    

}

function substract(...args) {
    return displayInp.textContent = args.reduce((total, item) => total - item)
}


function multiply(...args) {
    return displayInp.textContent = args.reduce((total, item) => total * item)
}


function divide(...args) {
    return displayInp.textContent = args.reduce((total, item) => total/item)
}


let num1;
let num2;
let operator;



    numBtns.forEach(num => {
        num.addEventListener('click', (e) => {
        displayInp.textContent += e.target.textContent   
        display = displayInp.textContent
                   
        
    })})      

    operatorBtns.forEach(op => {
        op.addEventListener('click', (e) => { 
            operator = e.target.textContent           
            displayInp.textContent += e.target.textContent   
            display = displayInp.textContent

            

            console.log(e.target.classList)            
                 

    })})

    

        equalBtns.addEventListener('click', () => {
            result = display.split(operator)
            num1 = parseInt(result[0])
            num2 = parseInt(result[1])
    
            console.log(operate(num1, operator, num2))
    
            
        })


    

    function operate (firstNum,symbol,secondNum) {
       
    
        switch (symbol) {
            case '+':
                console.log(add(firstNum, secondNum));
                break;
            case '-':
                substract(firstNum, secondNum);
                break;
            case 'x':
                multiply(firstNum, secondNum);
                break;
            case '/':
                divide(firstNum, secondNum)
                break;        
        }


    }

    


