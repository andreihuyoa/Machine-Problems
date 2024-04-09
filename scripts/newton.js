function newtonRaphsonMethod() {
    let functionInput = document.getElementById('functionByUser').value;
    let initialGuess = parseFloat(document.getElementById('initialGuess').value);
    let numIteration = parseInt(document.getElementById('numIteration').value);
    let numLimit = parseFloat(document.getElementById('numLimit').value);
    let precision = parseInt(precisionInput.value);

    //handles precision input
    if (isNaN(precision) || precision <= 0 || precision > 64) {
        precision = 20;
        precisionInput.value = precision;
    }

    //Clears the table
    clearTable();

    //gets the function from user and substitutes x
    let f = (x) => math.evaluate(functionInput, { x: x });

    /*
     *doesnt remove the constants for example: 2x^3-2x-5 ang output niya 6*x^2-2 but it should be 6*x^2 pero it still performs the same
     */
    let fPrime = math.derivative(functionInput, 'x');

    let x = initialGuess;
    let error = math.bignumber(Infinity);

    for (let i = 0; i < numIteration || error > numLimit; i++) {
        let fx = math.bignumber(f(x));
        let fxPrime = fPrime.evaluate({ x: x });
        let nextX = math.subtract(x, math.divide(fx, fxPrime));

        error = math.abs(math.subtract(nextX, x));
        x = nextX;

        //*Displays
        let formattedX = math.format(x, { precision: precision });
        let formattedFx = math.format(fx, { precision: precision });
        let formattedFxPrime = math.format(fxPrime, { precision: precision });
        let formattedError = math.format(error, { precision: precision });

        document.getElementById('derivativeFunction').innerText = 'Derived Function ' + fPrime;

        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${i + 1}</td><td>${formattedX}</td><td>${formattedFx}</td><td>${formattedFxPrime}</td><td>${formattedError}</td>`;
        document.getElementById('iterationTable').appendChild(newRow);
    }
}

function clearTable() {
    // Clears the table
    document.getElementById('iterationTable').innerHTML = "<tr><th>n</th><th>x</th><th>f(x)</th><th>f'(x)</th><th>Error</th></tr>";
}
