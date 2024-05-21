function calculateSimpson() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);

    if (isNaN(a) || isNaN(b) || isNaN(n) || n <= 0 || n % 2 !== 0) {
        alert("Please enter valid input values. 'n' must be a positive even integer.");
        return;
    }

    const f = (x) => math.sin(math.exp(x));

    const h = (b - a) / n;

    let integral = f(a) + f(b);
    let steps = [];

    steps.push({
        n: n,
        integral: integral,
    });

    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        if (i % 2 === 0) {
            integral += 2 * f(x);
        } else {
            integral += 4 * f(x);
        }
        steps.push({
            n: n - i,
            integral: integral,
        });
    }

    integral *= h / 3;

    document.getElementById('result').innerText = `Result: ${integral}`;
    document.getElementById('solution').innerText = `The integral of sin(e^x) from ${a} to ${b} using Simpson's Rule with n = ${n} is approximately ${integral}.`;

    // Calculate error and relative error
    let n_prev = n - 1;
    let integral_prev = calculateIntegral(a, b, n_prev, f);
    let error = integral - integral_prev;
    let relativeError = (integral - integral_prev) / integral;

    document.getElementById('error').innerText = `Error: ${error.toFixed(10)}\nRelative Error: ${relativeError.toFixed(10)}`;

    displaySteps(steps);
}

function displaySteps(steps) {
    const stepContainer = document.getElementById('steps');
    stepContainer.innerHTML = '';

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        const integralValue = step.integral.toPrecision(32).replace(/\.?0+$/, ''); // Remove trailing zeros
        stepDiv.innerText = `Step ${index + 1}: n = ${step.n}, Integral = ${integralValue}`;
        stepContainer.appendChild(stepDiv);
    });
}

function calculateIntegral(a, b, n, f) {
    const h = (b - a) / n;

    let integral = f(a) + f(b);

    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        if (i % 2 === 0) {
            integral += 2 * f(x);
        } else {
            integral += 4 * f(x);
        }
    }

    integral *= h / 3;

    return integral;
}
