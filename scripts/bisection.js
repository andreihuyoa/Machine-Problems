function bisectionMethod() {
    let functionInput = document.getElementById('functionByUser').value;
    let a = parseFloat(document.getElementById('lowerLimitA').value);
    let b = parseFloat(document.getElementById('upperLimitB').value);
    let numIteration = parseInt(document.getElementById('numIteration').value);
    let numLimit = parseFloat(document.getElementById('numLimit').value);

    // Clear table
    document.getElementById('iterationTable').innerHTML = '<tr><th>n</th><th>a</th><th>b</th><th>f(a)</th><th>f(b)</th><th>c</th><th>f(c)</th><th>Error (e)</th></tr>';

    let f = (x) => math.evaluate(functionInput, { x: x });

    let error = math.abs(b - a);

    //checks if the iteration input is empty
    // if (numIteration.trim() === '') {
    //     numIteration = Infinity; // Set to a large value
    // } else {
    //     numIteration = parseInt(numIteration);
    // }

    for (let i = 0; i < numIteration || error > numLimit; i++) {
        let c = (a + b) / 2;
        let fa = f(a);
        let fb = f(b);
        let fc = f(c);

        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${i + 1}</td><td>${a}</td><td>${b}</td><td>${fa}</td><td>${fb}</td><td>${c}</td><td>${fc}</td><td>${error}</td>`;
        document.getElementById('iterationTable').appendChild(newRow);

        if (fa * fc < 0) {
            b = c;
        } else {
            a = c;
        }

        error = math.abs(b - a);
    }
}
