var Calculator = /** @class */ (function () {
    function Calculator() {
        this.displayValue = '';
    }
    Calculator.prototype.appendNumber = function (number) {
        this.displayValue += number;
        this.updateDisplay();
    };
    Calculator.prototype.chooseOperation = function (operation) {
        this.displayValue += operation;
        this.updateDisplay();
    };
    Calculator.prototype.clear = function () {
        this.displayValue = '';
        this.updateDisplay();
    };
    Calculator.prototype.calculate = function () {
        try {
            this.displayValue = eval(this.displayValue).toString();
            this.updateDisplay();
        }
        catch (error) {
            this.displayValue = 'Error';
            this.updateDisplay();
        }
    };
    Calculator.prototype.updateDisplay = function () {
        var displayElement = document.getElementById('display');
        if (displayElement) {
            displayElement.innerText = this.displayValue;
        }
    };
    return Calculator;
}());
var calculator = new Calculator();
window.appendNumber = function (number) { return calculator.appendNumber(number); };
window.chooseOperation = function (operation) { return calculator.chooseOperation(operation); };
window.clearDisplay = function () { return calculator.clear(); };
window.calculate = function () { return calculator.calculate(); };
