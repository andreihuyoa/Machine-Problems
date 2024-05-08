function bisectionMethod() {
    //caching the elements
    let functionInput = document.getElementById('functionByUser').value;
    let a = parseFloat(document.getElementById('lowerLimitA').value);
    let b = parseFloat(document.getElementById('upperLimitB').value);
    let numIteration = parseInt(document.getElementById('numIteration').value);
    let numLimit = parseFloat(document.getElementById('numLimit').value);
    let precision = parseInt(precisionInput.value);

    // Handles precision input
    if (isNaN(precision) || precision <= 0 || precision > 64) {
        precision = 20;
        precisionInput.value = precision;
    }

    // Clears table
    clearTable();

    //gets the function from user and substitutes x
    let f = (x) => math.evaluate(functionInput, { x: x });

    let error = math.abs(b - a);

    for (let i = 0; i < numIteration || error > numLimit; i++) {
        let c = (a + b) / 2;
        let fa = math.bignumber(f(a));
        let fb = math.bignumber(f(b));
        let fc = math.bignumber(f(c));

        let formattedA = math.format(a, { precision: precision });
        let formattedB = math.format(b, { precision: precision });
        let formattedFa = math.format(fa, { precision: precision });
        let formattedFb = math.format(fb, { precision: precision });
        let formattedC = math.format(c, { precision: precision });
        let formattedFc = math.format(fc, { precision: precision });
        let formattedError = math.format(error, { precision: precision });

        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${i}</td>
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

function clearTable() {
    document.getElementById('iterationTable').innerHTML = '<tr><th>n</th><th>a</th><th>b</th><th>&#402;(a)</th><th>&#402;(b)</th><th>c</th><th>&#402;(c)</th><th>&Epsilon;</th></tr>';
}
