function bisectionMethod() {
    //caching the elements
    let functionInput = document.getElementById('functionByUser').value;
    let a = document.getElementById('lowerLimitA').value;
    let b = document.getElementById('upperLimitB').value;
    let numIteration = document.getElementById('numIteration').value;
    let numLimit = document.getElementById('numLimit').value;
    let precisionInput = document.getElementById('precisionInput').value;

    // Handles precision input
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
        let fa = compiledFunction.evaluate({ x: a });
        let fb = compiledFunction.evaluate({ x: b });
        let fc = compiledFunction.evaluate({ x: c });

        let formattedA = formatNumber(a, { precision: precision });
        let formattedB = formatNumber(b, { precision: precision });
        let formattedFa = formatNumber(fa, { precision: precision });
        let formattedFb = formatNumber(fb, { precision: precision });
        let formattedC = formatNumber(c, { precision: precision });
        let formattedFc = formatNumber(fc, { precision: precision });
        let formattedError = formatNumber(error, { precision: precision });

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
    document.getElementById('iterationTable').innerHTML = '<tr><th>n</th><th>a</th><th>b</th><th>&#402;(a)</th><th>&#402;(b)</th><th>c</th><th>&#402;(c)</th><th>&Epsilon;</th></tr>';
}
