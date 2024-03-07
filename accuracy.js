//pre-defined values / constants
const predefined_val = {
    epsilon: 2.220446049250313e-16, //if math.epsilon it becomes undefined
    pie: Math.PI,
    goldenRatio: 1.618033988749895,
};

// const fraction = what;
// const deci = decim;
// const squareRoots = bru;
//wala pa yung ibang irrational numbers like mga sqrt of 2 ganon ganon

//Math.sinh(x = value kung anong fuck nasa loob neto)

//event listeners in a one function
const trueValue = document.getElementById('');

function calculateAccuracyAndPrecision() {
    //get value from user input
    const userInput = parseFloat(document.getElementById('InputVal').value); //dito magiinput user ng custom equation niya then pag click ng compute button, lalabas sa trueValue yung sagot
    const trueValue = parseFloat(document.getElementById('trueValue').value); //eto should be from user if pumili siya sa buttons yun yung true value
    const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value) || 0;

    //validates user input
    if (isNaN(userInput)) {
        alert('Please enter a valid number');
        return;
    }

    const absoluteError = Math.abs(userInput - trueValue);
    // or const absoluteError2 = trueVal - AbsolVal;
    //formula ng to get absolute error

    const accuracy = (1 - absoluteError / trueValue) * 100;
    accuracy = accuracy.toFixed(decimalPlaces);

    const precision = accuracy; // since theres only one true value, precision is same

    if (precision == precision) {
        precision = accuracy;
    } else {
        precision = newaccuracy;
    }

    document.getElementById('accuracy-result').textContent = `Accuracy: ${accuracy}%`;
    document.getElementById('precision-result').textContent = `Precision: ${precision}%`;
    //next step is find how to solve two values inside one text box

    //yung result from userInput should be mag eequal to true value? or it would be the new true value

    //so yung pre-defined values should  be clickable lang tas mapupunta siya sa textbox (input ng user) and then after pindot ng compute ssolve niya so mageget yung true value then solve na mga errors n such.

    //di ko sure kung ganitong function
}

function chop() {}

function round() {}

function AbsolError() {
    const absoluteError = Math.abs(predefined_val - userInput);

    //eto nasa paper
    const absoluteError2 = trueVal - AbsolVal;
}

function PercError() {
    const percentageError = (AbsolError / predefined_val) * 100;

    //eto nasa paper
    const percentageError2 = (absoluteError / trueVal) * 100;
}

// click and solve instead of submitting a form?
document.getElementById('compute-button').addEventListener('click', calculateAccuracyAndPrecision);
