let result

class Calculator {
	constructor() {
		this.currentNumInput = currentNumInput
		this.previousNumInput = ''
	}

	appendNumber(number) {
		this.updateDisplay(number)
	}

	updateDisplay(number) {
		if (number === result) {
			this.currentNumInput.value = result
		} else {
			this.currentNumInput.value += number.toString()
		}


	}
	choseOperation(operation) {
		if (this.currentNumInput) {
			this.previousNumInput = this.currentNumInput.value
			this.currentNumInput.value = ''
			this.operation = operation
		} else {
			return
		}
	}
	calcOperation() {
		if (this.currentNumInput.value && this.previousNumInput !== '') {

			switch (this.operation) {
				case '+':
					result = +this.previousNumInput + +this.currentNumInput.value
					this.updateDisplay(result)
					result = ''
					this.operation = ''
					break;
				case '-':
					result = +this.previousNumInput - +this.currentNumInput.value
					this.updateDisplay(result)
					result = ''
					this.operation = ''
					break;
				case '*':
					result = +this.previousNumInput * +this.currentNumInput.value
					this.updateDisplay(result)
					result = ''
					this.operation = ''
					break;
				case '/':
					result = +this.previousNumInput / +this.currentNumInput.value
					this.updateDisplay(result)
					result = ''
					this.operation = ''
					break;

				default:
					break;
			}

		} else {
			return this.calcOperation
		}
	}
	allClear() {
		this.operation = ''
		this.currentNumInput.value = ''
		this.previousNumInput = ''
		this.result = ''
	}

}


const buttonsNumbers = document.querySelectorAll('[data-number]'),
	buttonsOperations = document.querySelectorAll('[data-operation]'),
	allClear = document.querySelector('[data-all-clear]'),
	deleteNum = document.querySelector('[data-delete]'),
	equal = document.querySelector('[data-equal]'),
	currentNumInput = document.querySelector('.input')

const calculator = new Calculator()

buttonsNumbers.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
	})
})

buttonsOperations.forEach(button => {
	button.addEventListener('click', () => {
		calculator.choseOperation(button.innerText)
	})
})

equal.addEventListener('click', () => {
	calculator.calcOperation()
})
allClear.addEventListener('click', () => {
	calculator.allClear()
})