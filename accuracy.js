//pre-defined values
const epsilon = 2.220446049250313e-16;
//if math.epsilon it becomes undefined

const pie = Math.PI;

//not sure pa sa golden ratio
const goldenRatio = 1.618033988749895;

// const fraction = what;
// const deci = decim;
// const squareRoots = bru;

//-----
//wala pa yung ibang irrational numbers like mga sqrt of 2 ganon ganon

document.getElementById('epsilonButton').addEventListener('click', function () {
    document.getElementById('InputVal').value += epsilon;
});

document.getElementById('goldenratioButton').addEventListener('click', function () {
    document.getElementById('InputVal').value += goldenRatio;
});

document.getElementById('piButton').addEventListener('click', function () {
    document.getElementById('InputVal').value += pie;
});

function compute() {
    //get value from user input
    const inputValue = parseFloat(document.getElementById('InputVal').value);
    const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value);

    //next step is find how to solve two values inside one text box

    //yung result from inputValue should be mag eequal to true value? or it would be the new true value

    //so yung pre-defined values should  be clickable lang tas mapupunta siya sa textbox (input ng user) and then after pindot ng compute ssolve niya so mageget yung true value then solve na mga errors n such.
}

function accuracy_and_precision() {
    const trueVal = 1;
    const AbsolVal = 1;
}

//functions

function chop() {}

function round() {}

function AbsolError() {
    const absoluteError = Math.abs(predefined_val - inputValue);

    //eto nasa paper
    const absoluteError2 = trueVal - AbsolVal;
}

function PercError() {
    const percentageError = (AbsolError / predefined_val) * 100;

    //eto nasa paper
    const percentageError2 = (absoluteError / trueVal) * 100;
}
