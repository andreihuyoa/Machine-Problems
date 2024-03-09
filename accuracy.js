//pre-defined values / constants
const predefined_val = {
    epsilon: 2.718281828459045,
    pie: Math.PI,
    goldenRatio: 1.618033988749895,
    epsilon2: Number.EPSILON,
    sqrt1over2: 0.7071067811865476,
    sqrt2: 1.4142135623730951,
    tau: 6.283185307179586,
    //we can add more here if we want to
};

/*
? const squareRoots = bru;
* wala pa yung ibang irrational numbers like mga sqrt of 2 ganon ganon
*/

//*event listeners in a one function
const trueValue = document.getElementById('trueValue');

document.getElementById('buttonParentsEventListener').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const valueToAppend = predefined_val[event.target.dataset.value];
        trueValue.value += valueToAppend;
    }
});

function calculateAccuracyAndPrecision() {
    const trueValue = parseFloat(document.getElementById('trueValue').value);
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
