function newtonRaphsonMethod() {
    let functionInput = document.getElementById('functionByUser').value;
    let initialGuess = math.bignumber(parseFloat(document.getElementById('initialGuess').value));
    let numIteration = parseInt(document.getElementById('numIteration').value);
    let numLimit = math.bignumber(parseFloat(document.getElementById('numLimit').value));
    let precision = parseInt(precisionInput.value);

    // Handles precision input
    if (isNaN(precision) || precision <= 0 || precision > 64) {
        precision = 20;
        precisionInput.value = precision;
    }

    clearTable();

    // Gets the function from user and substitutes x
    let f = (x) => math.evaluate(functionInput, { x: x });

    let fPrime = math.derivative(functionInput, 'x');

    let x = initialGuess;
    let error = math.bignumber(Infinity);

    for (let i = 0; i < numIteration || error.gt(numLimit); i++) {
        let fx = f(x);
        let fxPrime = fPrime.evaluate({ x: x });
        let nextX = math.subtract(x, math.divide(fx, fxPrime));

        error = math.abs(math.subtract(nextX, x));
        x = nextX;

        // Displays
        let formattedX = math.format(x, { notation: 'fixed', precision: precision });
        let formattedFx = math.format(fx, { notation: 'fixed', precision: precision });
        let formattedFxPrime = math.format(fxPrime, { notation: 'fixed', precision: precision });
        let formattedError = math.format(error, { notation: 'fixed', precision: precision });

        // Compute x_i+1
        let nextXValue = math.format(nextX, { notation: 'fixed', precision: precision });

        let newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${i}</td>
        <td>${formattedX}</td>
        <td>${formattedFx}</td>
        <td>${formattedFxPrime}</td>
        <td>${nextXValue}</td>
        <td>${formattedError}</td>
        `;
        document.getElementById('iterationTable').appendChild(newRow);
    }
}

function clearTable() {
    // Clears the table
    document.getElementById('iterationTable').innerHTML = "<tr><th>n</th><th>x</th><th>&#402;(x)</th><th>&#402;'(x)</th><th>x<sub>i+1</sub></th><th>&Epsilon;</th></tr>";
}
