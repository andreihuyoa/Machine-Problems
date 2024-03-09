function calculateTaylor() {
    // Extract input values
    var n = parseInt(document.getElementById('n').value);
    var x = parseFloat(document.getElementById('x').value);
    var decimals = parseInt(document.getElementById('decimals').value);
    var result = document.getElementById('result');

    // Display the derivation process
    result.innerHTML = '<h4>Derivation Process for sinh(x):</h4><br>';
    result.innerHTML += '<ol>';
    for (var i = 0; i <= n; i++) {
        result.innerHTML += '<li>F' + (i > 0 ? '<sup>' + i + '</sup>' : '') + '(x) = ' + (i % 2 === 0 ? 'sinh' : 'cosh') + '(x)' + ' = ' + (i % 2 === 0 ? '0' : '1') + '</li><br>';
    }
    result.innerHTML += '</ol>';

    // Calculate Taylor Polynomial
    var taylorPolynomial = taylorSinh(n, x, decimals);

    // Display result
    result.innerHTML += '<h3>' + (n > 0 ? 'Taylor Polynomial' : 'Maclaurin Polynomial') + ' for sinh(x)</h3><br>';
    result.innerHTML += '<p>For n = ' + n + ', x = ' + x + ', and ' + decimals + ' decimals:</p>';
    result.innerHTML += '<p>' + taylorPolynomial.process + '</p>';
    result.innerHTML += '<p>Final result: ' + taylorPolynomial.result.toFixed(decimals) + '</p>';
}

// Function to calculate Taylor Polynomial for sinh(x)
function taylorSinh(n, x, decimals) {
    var result = 0;
    var process = 'F(x) = sinh(x) = ';

    // Loop to calculate terms of the polynomial
    for (var i = 1; i <= n; i += 2) {
        var term = (1 / factorial(i)) * Math.pow(x, i);
        var fraction = fractionFormat(i, x, n);
        result += term;
        process += fraction;
    }

    return { result: result, process: process };
}

// Function to calculate factorial
function factorial(n) {
    result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to format fractions
function fractionFormat(i, x, n) {
    return '<i>x</i>' + (i > 1 ? '<sup>' + i + '</sup> / ' + i + '!' : '') + (i + 1 <= n ? ' + ' : '');
}
