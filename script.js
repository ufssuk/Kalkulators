const plusins = document.querySelector('.js-plus')
const multiply = document.querySelector ('.js-multiply')
const minus = document.querySelector ('.js-mminus')
const divide = document.querySelector ('.js-divide')
const inputins1 = document.querySelector('.js-input1')
const inputins2 = document.querySelector('.js-input2')
const answer = document.querySelector('js-result')

let firstValue = inputins1.value
let secondValue = inputins2.value

const Add = (cipars1,cipars2) => {
    return cipars1 + cipars2
}

const Subtract = (cipars1,cipars2) => {
    return cipars1 - cipars2
}

const Multiply = (cipars1,cipars2) => {
    return cipars1 * cipars2
}

const Divide = (cipars1,cipars2) => {
    return cipars1 / cipars2
}

console.log(Add(2,3))

plusins.addEventListener('click',() => {
    console.log(Add(firstValue,secondValue))
})
