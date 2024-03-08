function calculateTaylor() {
    // Extract input values
    var n = parseInt(document.getElementById("n").value);
    var x = parseFloat(document.getElementById("x").value);
    var decimals = parseInt(document.getElementById("decimals").value);
    var result = document.getElementById("result");

    // Display the derivation process
    result.innerHTML = "<h4>Derivation Process for sinh(x):</h4>";
    result.innerHTML += "<ol>";
    for (var i = 0; i <= n; i++) {
        result.innerHTML += "<li>F" + (i > 0 ? "<sup>" + i + "</sup>" : "") + "(x) = " + (i % 2 === 0 ? "sinh" : "cosh") + "(x)" + " = " + (i % 2 === 0 ? "0" : "1") + "</li>";
    }
    result.innerHTML += "</ol>";

    // Calculate Taylor Polynomial
    var taylorPolynomial = n > 0 ? taylorSinh(n, x, decimals) : maclaurinSinh(n, decimals);
    
    // Display result
    result.innerHTML += "<h3>" + (n > 0 ? "Taylor Polynomial" : "Maclaurin Polynomial") + " for sinh(x)</h3>";
    result.innerHTML += "<p>For n = " + n + ", x = " + x + ", and " + decimals + " decimals:</p>";
    result.innerHTML += "<p>" + taylorPolynomial.process + "</p>";
    result.innerHTML += "<p>Final result: " + taylorPolynomial.result.toFixed(decimals) + "</p>";
}

// Function to calculate Taylor Polynomial for sinh(x)
function taylorSinh(n, x, decimals) {
    var result = 0;
    var process = "F(x) = sinh(x) = ";
    
    // Loop to calculate terms of the polynomial
    for (var i = 0; i <= n; i++) {
        var derivative = sinhDerivative(i, x);
        var term = derivative / factorial(i) * Math.pow(x, i);
        var fraction = fractionFormat(term, i, x);
        result += term;
        process += fraction;
    }
    
    return { result: result, process: process };
}

// Function to calculate Maclaurin Polynomial for sinh(x)
function maclaurinSinh(n, decimals) {
    var result = 0;
    var process = "F(x) = sinh(x) = ";
    
    // Loop to calculate terms of the polynomial
    for (var i = 0; i <= n; i++) {
        var derivative = sinhDerivative(i, 0); // Using a = 0 for Maclaurin
        var term = derivative / factorial(i) * Math.pow(0, i); // Using x = 0 for Maclaurin
        var fraction = fractionFormat(term, i, 0);
        result += term;
        process += fraction;
    }
    
    return { result: result, process: process };
}

// Function to calculate derivative of sinh(x)
function sinhDerivative(n, a) {
    if (n % 2 === 0) {
        return Math.cosh(a);
    } else {
        return Math.sinh(a);
    }
}

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}

// Function to format fractions
function fractionFormat(term, i, x) {
    if (i === 0) {
        return term.toFixed(2);
    } else {
        return term.toFixed(2) + " * (" + (i > 0 ? "<i>x</i>" : x) + ")<sup>" + (i > 0 ? i : "") + "</sup> / " + i + "!";
    }
}