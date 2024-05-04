function calculateInterpolation() {
    var xValuesInput = document.getElementById('xValues').value;
    var yValuesInput = document.getElementById('yValues').value;
    var xValue = parseFloat(document.getElementById('x').value);

    // Convert comma-separated string inputs to arrays
    var xValues = xValuesInput.split(',').map(parseFloat);
    var yValues = yValuesInput.split(',').map(parseFloat);

    // Check if the number of x values matches the number of y values
    if (xValues.length !== yValues.length) {
        document.getElementById('result').innerText = 'Number of x values must match number of y values!';
        return;
    }

    // Calculate the Lagrange interpolating polynomial
    var result = lagrangeInterpolation(xValues, yValues, xValue);

    document.getElementById('result').innerText = 'Interpolated value at x = ' + xValue + ' is ' + result;
}

function lagrangeInterpolation(xValues, yValues, x) {
    var result = 0;
    for (var i = 0; i < xValues.length; i++) {
        var term = yValues[i];
        for (var j = 0; j < xValues.length; j++) {
            if (j !== i) {
                term *= (x - xValues[j]) / (xValues[i] - xValues[j]);
            }
        }
        result += term;
    }
    return result;
}
