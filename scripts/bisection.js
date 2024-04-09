function bisectionMethod() {
    //caching the elements
    let functionInput = document.getElementById('functionByUser').value;
    let lowerLimitAElement = document.getElementById('lowerLimitA');
    let upperLimitBElement = document.getElementById('upperLimitB');
    let numIterationElement = document.getElementById('numIteration');
    let numLimitElement = document.getElementById('numLimit');
    let precisionInputElement = document.getElementById('precisionInput');

    //gets the value
    let a = parseFloat(lowerLimitAElement.value);
    let b = parseFloat(upperLimitBElement.value);
    let numIteration = parseFloat(numIterationElement.value);
    let numLimit = parseFloat(numLimitElement.value);

    let precision = parseInt(precisionInputElement.value);
    //handles precision input
    if (isNaN(precision) || precision <= 0 || precision > 64) {
        precision = 20; // default is 20
        precisionInput.value = precision;
    }

    // Clears table
    clearTable();

    //gets the function from user and substitutes x
    // let f = (x) => math.evaluate(functionInput, { x: x });
    let compiledFunction = math.compile(functionInput);

    let error = math.abs(b - a);

    for (let i = 0; i < numIteration || error > numLimit; i++) {
        let c = (a + b) / 2;
        // let fa = f(a);
        // let fb = f(b);
        // let fc = f(c);
        let fa = compiledFunction.evaluate({ x: a });
        let fb = compiledFunction.evaluate({ x: b });
        let fc = compiledFunction.evaluate({ x: c });

        let formattedA = formatNumber(a, precision);
        let formattedB = formatNumber(b, precision);
        let formattedFa = formatNumber(fa, precision);
        let formattedFb = formatNumber(fb, precision);
        let formattedC = formatNumber(c, precision);
        let formattedFc = formatNumber(fc, precision);
        let formattedError = formatNumber(error, precision);

        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${i + 1}</td>
            <td>${formattedA}</td>
            <td>${formattedB}</td>
            <td>${formattedFa}</td>
            <td>${formattedFb}</td>
            <td>${formattedC}</td>
            <td>${formattedFc}</td>
            <td>${formattedError}</td>
            `;
        document.getElementById('iterationTable').appendChild(newRow);

        if (fa * fc < 0) {
            b = c;
        } else {
            a = c;
        }

        error = math.abs(b - a);
    }
}

function formatNumber(number, precision) {
    // Format values with specified precision
    return math.format(number, { precision, precision });
}

function clearTable() {
    document.getElementById('iterationTable').innerHTML = '<tr><th>n</th><th>a</th><th>b</th><th>f(a)</th><th>f(b)</th><th>c</th><th>f(c)</th><th>Error</th></tr>';
}
