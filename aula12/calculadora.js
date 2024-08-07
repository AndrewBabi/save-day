let textValue = '';

function addNumber(Number) {
    textValue += Number;
    updateText();

}

function addOperator(Oparator) {
    textValue += Oparator;
    updateText();

}

function addDecimal() {
    textValue += '.';
    updateText();

}

function cleartext() {
    textValue = '';
    updateText();
}

function updateText() {
    document.querySelector('#display').value = textValue;
}

function calculate() {
    textValue = eval(textValue);
    updateText();
}