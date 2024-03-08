//gets the user input
const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value);

//event listener button
const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function () {
    const n = parseInt(document.getElementById('nValue').value);
    const x = parseFloat(document.getElementById('xValue').value);

    function sinhDerivative(n, x) {
        if (n === 0) {
            return Math.sinh(x);
        } else if (n % 2 === 0) {
            return sinhDerivative(n - 1, x);
        } else {
            return Math.cosh(x);
        }
    }

    function displayDerivative(derivatives) {
        const derivativeToHTML = document.getElementById('derivatives');
        let output = '';
        for (let i = 0; i < derivatives.length; i++) {
            output += `f^(${i})(x) = ${i % 2 === 0 ? 'sinh(x)' : 'cosh(x)'} = ${derivatives[i]}\n`;
        }
        return output;
    }

    document.getElementById('taylor-polynomial').innerHTML = `<h2>Taylor Polynomial:</h2><p>T<sub>${n}</sub>(x) = ${polynomial}</p>`;
});

function taylorPolynomial(x, n) {
    let polynomial = 0;
    for (let i = 0; i <= n; i++) {
        const derivative = sinhDerivative(0, i);
        const term = (derivative * Math.pow(x, i)) / factorial(i);
        polynomial += term;
    }
    return polynomial;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
