class Calculator {
    private displayValue: string = '';

    appendNumber(number: string) {
        this.displayValue += number;
        this.updateDisplay();
    }

    chooseOperation(operation: string) {
        this.displayValue += operation;
        this.updateDisplay();
    }

    clear(): void {
        this.displayValue = '';
        this.updateDisplay();
    }

    calculate(): void {
        try {
            this.displayValue = eval(this.displayValue).toString();
            this.updateDisplay();
        }catch {
            this.displayValue = 'Error';
            this.updateDisplay();
        }
    }

    updateDisplay(): void {
        const displayElement = document.getElementById('display');
        if (displayElement) {
            displayElement.innerText = this.displayValue;
        }
    }
        
}

const calculator = new Calculator();

//Event Handlers
(window as any).appendNumber = (number: string) => calculator.appendNumber(number);
(window as any).chooseOperation = (operation: string) => calculator.chooseOperation(operation);
(window as any).clearDisplay = () => calculator.clear();
(window as any).calculate = () => calculator.calculate();
