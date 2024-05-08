function newtonRaphsonMethod() {
    let functionInput = document.getElementById('functionByUser').value;
    let initialGuess = parseFloat(document.getElementById('initialGuess').value);
    let numIteration = parseInt(document.getElementById('numIteration').value);
    let numLimit = parseFloat(document.getElementById('numLimit').value);
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

    for (let i = 1; i < numIteration || error > numLimit; i++) {
        let fx = math.bignumber(f(x));
        let fxPrime = fPrime.evaluate({ x: x });
        let nextX = math.subtract(x, math.divide(fx, fxPrime));

        error = math.abs(math.subtract(nextX, x));
        x = nextX;

        // Displays
        let formattedX = math.format(x, { precision: precision });
        let formattedFx = math.format(fx, { precision: precision });
        let formattedFxPrime = math.format(fxPrime, { precision: precision });
        let formattedError = math.format(error, { precision: precision });

        // Compute x_i+1
        let nextXValue = math.format(nextX, { precision: precision });

        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${i}</td><td>${formattedX}</td><td>${formattedFx}</td><td>${formattedFxPrime}</td><td>${nextXValue}</td><td>${formattedError}</td>`;
        document.getElementById('iterationTable').appendChild(newRow);
    }
}

function clearTable() {
    // Clears the table
    document.getElementById('iterationTable').innerHTML = "<tr><th>n</th><th>x</th><th>&#402;(x)</th><th>&#402;'(x)</th><th>x<sub>i+1</sub></th><th>&Epsilon;</th></tr>";
}
