//minimum of 2 values from
xValues = [];
yValues = [];

// Function to calculate Lagrange interpolating polynomial
function lagrangeInterpolation(xValues, yValues, x) {
    let result = 0;
    for (let i = 0; i < xValues.length; i++) {
        let term = yValues[i];
        for (let j = 0; j < xValues.length; j++) {
            if (j !== i) {
                term *= (x - xValues[j]) / (xValues[i] - xValues[j]);
            }
        }
        result += term;
    }
    return result;
}
