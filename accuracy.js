//pre-defined values / constants
const predefined_val = {
    epsilon: 2.718281828,
    pie: Math.PI,
    goldenRatio: 1.618033988749895,
    epsilon2: Number.EPSILON, // not sure
    //add more pre def values here
};

/*
? const squareRoots = bru;
* wala pa yung ibang irrational numbers like mga sqrt of 2 ganon ganon
*/

//*event listeners in a one function
const trueValue = document.getElementById('trueValue');

const userInput = document.getElementById('userInput');
// Adds an event listener sa parent element ng mga buttons then lalagay niya in user input box
document.getElementById('buttonParentsEventListener').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const valueToAppend = predefined_val[event.target.dataset.value];
        userInput.value += valueToAppend;
    }
});

function calculateAccuracyAndPrecision() {
    //*get value from user input
    const userInput = parseFloat(document.getElementById('userInput').value); //dito magiinput user ng custom equation niya then pag click ng compute button, lalabas sa trueValue yung sagot

    const trueValue = parseFloat(document.getElementById('trueValue').value); //eto should be from user if pumili siya sa buttons yun yung true value

    const approxValue = parseFloat(document.getElementById('approxValue').value);
    const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value) || 0;

    if (isNaN(trueValue) || isNaN(decimalPlaces)) {
        alert('Empty');
        return;
    }

    //! Di ko pa to sure if lalagay ng custom equation as true value pero baka need sa final exam

    //*CHOPPING
    function truncateToDecimalPlace(value, decimalPlaces) {
        const factor = 10 ** decimalPlaces;
        return Math.trunc(value * factor) / factor;
    }

    const absoluteErrorChop = trueValue - approxValue;
    const percentageErrorChop = (absoluteErrorChop / trueValue) * 100;

    document.getElementById('chopping').innerText = truncateToDecimalPlace(approxValue, decimalPlaces);
    document.getElementById('ChoppingAE').innerText = truncateToDecimalPlace(absoluteErrorChop, decimalPlaces);
    document.getElementById('Chopping%E').innerText = truncateToDecimalPlace(percentageErrorChop, decimalPlaces);

    //*ROUNDING
    function roundToDecimalPlace(approxValue, decimalPlaces) {
        const factor = 10 ** decimalPlaces;
        const roundedValue = Math.floor(approxValue * factor);
        const decimalPart = approxValue * factor - Math.floor(approxValue * factor);

        if (decimalPart >= 0.5) {
            return (roundedValue + 1) / factor;
        } else {
            return roundedValue / factor;
        }
    }

    // Calculate absolute and percentage errors for rounding
    const absoluteErrorRound = trueValue - approxValue;
    const percentageErrorRound = (absoluteErrorRound / approxValue) * 100;

    // Display results for rounding
    document.getElementById('rounding').innerText = roundToDecimalPlace(approxValue, decimalPlaces);
    document.getElementById('RoundingAE').innerText = roundToDecimalPlace(absoluteErrorRound, decimalPlaces);
    document.getElementById('Rounding%E').innerText = roundToDecimalPlace(percentageErrorRound, decimalPlaces);
}

// click and solve instead of submitting a form?
document.getElementById('compute-button').addEventListener('click', calculateAccuracyAndPrecision);
