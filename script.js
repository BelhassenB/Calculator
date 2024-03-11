const numBtns = document.querySelectorAll('.num')
const displayInp = document.querySelector('.input-result')
const operatorBtns = document.querySelectorAll('.operator')
const clearAll = document.querySelector('.all-clear')
const equalBtns = document.querySelector('.equal')
const clearLastChar = document.querySelector('.clear-previous')


let displayValue = ''
let num1 = ''
let num2 = ''
let operator = ''

clearAll.addEventListener('click', () => {
    displayInp.textContent = ""
    operator = ""
    num1 = ""
    num2 = ""
})

clearLastChar.addEventListener('click', () => {
    displayValue = displayInp.textContent
    lastChar = displayValue.length-1

    if (displayValue !== '')  {
        displayInp.textContent = displayValue.slice(0, lastChar)
    }

})

function add(...args) {
    return displayInp.textContent = 
    args.reduce((total, item) => total + item)
    

}

function substract(...args) {
    return displayInp.textContent =
    args.reduce((total, item) => total - item)
}


function multiply(...args) {
    return displayInp.textContent =
    args.reduce((total, item) => total * item)
}


function divide(...args) {
    return displayInp.textContent =
    args.reduce((total, item) => total/item)

    
}


    numBtns.forEach(num => {
        num.addEventListener('click', (e) => { 
            
        num2 += e.target.textContent  
        displayInp.textContent += e.target.textContent

        if (num1 !== '') {
            displayInp.textContent = num1 + operator + num2
        }

    })})      

    operatorBtns.forEach(op => {
        op.addEventListener('click', (e) => {             

            if (num1 === '') {
                num1 = num2
                num2 = ''
                operator = e.target.textContent
                displayInp.textContent = num1 + operator + num2 
            } else if (num1 !== '' && num2 !== '' && operator !== '') {                

                operate(parseFloat(num1),operator,parseFloat(num2))
                num1 = displayInp.textContent
                num2 = ''
                operator = ''
                operator = e.target.textContent
                displayInp.textContent = num1 + operator + num2
                 
            } else {
                operator = e.target.textContent
                displayInp.textContent += e.target.textContent
                
            }

            


    })})   

    equalBtns.addEventListener('click', () => {  
        operate(parseFloat(num1),operator,parseFloat(num2))  
        num1 = displayInp.textContent
        num2 = ''
        operator = '' 
            

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
                if (secondNum == 0 ) displayInp.textContent = "ERROR"
                
                break;        
        }

        

    }

    


