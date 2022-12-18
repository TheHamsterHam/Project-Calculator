class Calculater {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = currentOperandTextElement
        this.currentOperandTextElement = previousOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand class]')
const currentOperandTextElement = document.querySelector('[data-current-operand class]')

const calculater = new Calculater(previousOperandTextElement, currentOperandTextElement)