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

    // Calculate the Lagrange interpolating polynomial
    let interpolationResult = lagrangeInterpolation(xValues, yValues, x);

    // Display the coefficients and the interpolated value
    document.getElementById('result').innerText =
        'Coefficients of Lagrange polynomial: ' + interpolationResult.coefficients.join(', ') + '\nInterpolated value at x = ' + x + ' is ' + interpolationResult.result;

    // Display the solution steps
    displaySolution(xValues, yValues, x);
}

function lagrangeInterpolation(xValues, yValues, x) {
    let coefficients = [];
    let result = 0;
    for (let i = 0; i < xValues.length; i++) {
        let numerator = [];
        let denominator = 1;
        for (let j = 0; j < xValues.length; j++) {
            if (j !== i) {
                numerator.push(`(x - ${xValues[j]})`);
                denominator *= xValues[i] - xValues[j];
            }
        }
        // Pass the value of x directly to the math.evaluate function
        let term = (math.evaluate(yValues[i].toString()) * math.evaluate(numerator.join(' / '), { x: x })) / denominator;
        coefficients.push(term);
        result += term;
    }
    return { coefficients: coefficients, result: result };
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
                denominator *= xValues[i] - xValues[j];
            }
        }
        solutionHTML += `<p>Term ${i + 1}: ${term} * (${numeratorHTML}) / ${denominator}</p>`;
    }
    document.getElementById('solution').innerHTML = solutionHTML;
}
