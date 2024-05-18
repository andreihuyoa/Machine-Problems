function calculateLagrange() {
    let xValuesInput = document.getElementById('xValues').value;
    let yValuesInput = document.getElementById('yValues').value;
    let x = parseFloat(document.getElementById('x').value);

    // Convert comma-separated string inputs to arrays
    let xValues = xValuesInput.split(',').map(parseFloat);
    let yValues = yValuesInput.split(',').map(parseFloat);

    // Check if the number of x values matches the number of y values
    if (xValues.length !== yValues.length) {
        document.getElementById('result').innerText = 'Number of x values must match number of y values!';
        return;
    }

    // Check if input is valid
    if (isNaN(x)) {
        document.getElementById('result').innerText = 'Please enter a valid number for x';
        return;
    }

    // Calculate the Lagrange interpolating polynomial
    let interpolationResult = lagrangeInterpolation(xValues, yValues, x);

    // Display the interpolated value
    document.getElementById('result').innerText = 'Interpolated value at x = ' + x + ' is ' + interpolationResult;

    // Display the solution steps
    displaySolution(xValues, yValues, x);
}

function lagrangeInterpolation(xValues, yValues, x) {
    let result = 0;
    for (let i = 0; i < xValues.length; i++) {
        let term = yValues[i];
        for (let j = 0; j < xValues.length; j++) {
            if (j !== i) {
                term = math.multiply(term, math.divide(math.subtract(x, xValues[j]), math.subtract(xValues[i], xValues[j])));
            }
        }
        result = math.add(result, term);
    }
    return result;
}

function displaySolution(xValues, yValues, x) {
    let solutionHTML = '<h3>Solution Steps:</h3>';
    for (let i = 0; i < xValues.length; i++) {
        let term = yValues[i];
        let numeratorHTML = '';
        let denominator = 1;
        for (let j = 0; j < xValues.length; j++) {
            if (j !== i) {
                numeratorHTML += `(x - ${xValues[j]})`;
                if (j !== xValues.length - 1) {
                    numeratorHTML += ' * ';
                }
                denominator = math.multiply(denominator, math.subtract(xValues[i], xValues[j]));
            }
        }
        solutionHTML += `<p>Term ${i + 1}: ${term} * (${numeratorHTML}) / ${denominator}</p>`;
    }
    document.getElementById('solution').innerHTML = solutionHTML;
}
