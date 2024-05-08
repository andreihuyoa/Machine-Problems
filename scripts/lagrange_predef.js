//Jan-Dec 2020
let xValues = [50.6369, 51.0066, 50.8553, 50.9594, 50.5704, 50.3345, 49.8245, 49.181, 48.604, 48.4597, 48.5847, 48.1227];
// Jan-Dec 2023
let yValues = [55.6758, 54.1136, 54.8636, 54.2924, 55.5466, 56.0832, 55.2762, 54.9005, 56.793, 56.665, 56.6722, 55.3495];

// Function to calculate Lagrange interpolating polynomial
function calculateLagrange() {
    let x = parseFloat(document.getElementById('x').value);
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
    // Display the result on the webpage
    document.getElementById('result').innerHTML = 'Interpolated value at x = ' + x + ' is ' + result;
}

