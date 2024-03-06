function add(...args) {
    return args.reduce((total, item) => total + item)
    

}
console.log(add(10,3))

function substract(...args) {
    return args.reduce((total, item) => total - item)
}
console.log(substract(2,3))

function multiply(...args) {
    return args.reduce((total, item) => total * item)
}
console.log(multiply(2,3))

function divide(...args) {
    return args.reduce((total, item) => total/item)
}
console.log(divide(1,0))

let num1;
let num2;
let operator;

