function newtonRaphsonMethod() {
    let functionInput = document.getElementById('functionByUser').value;
    let initialGuess = parseFloat(document.getElementById('initialGuess').value);
    let numIteration = parseInt(document.getElementById('numIteration').value);
    let numLimit = parseFloat(document.getElementById('numLimit').value);

    // Clear table
    document.getElementById('iterationTable').innerHTML = "<tr><th>n</th><th>x</th><th>f(x)</th><th>f'(x)</th><th>Error (e)</th></tr>";

    let f = (x) => math.evaluate(functionInput, { x: x });
    let fPrime = math.derivative(functionInput, 'x');

    let x = initialGuess;
    let error = Infinity;

    for (let i = 0; i < numIteration || error > numLimit; i++) {
        let fx = f(x);
        let fxPrime = fPrime.evaluate({ x: x });
        let nextX = x - fx / fxPrime;

        error = math.abs(nextX - x);
        x = nextX;

        let newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${i + 1}</td><td>${x}</td><td>${fx}</td><td>${fxPrime}</td><td>${error}</td>`;
        document.getElementById('iterationTable').appendChild(newRow);
    }
}
