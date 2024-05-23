function calculateSimpson() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);
    const expression = document.getElementById('fx').value;

    if (isNaN(a) || isNaN(b)) {
        alert('Please enter valid input values.');
        return;
    } else if (n <= 0) {
        alert("'n' should not be negative or zero.");
        return;
    } else if (n % 2 !== 0 || isNaN(n)) {
        alert("'n' should be greater a positive even integer.");
        return;
    }

    if (!expression) {
        alert('Function input cannot be empty.');
        return;
    }

    const f = (x) => math.evaluate(expression, { x });

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
    document.getElementById('solution').innerText = `The integral of ${expression} from ${a} to ${b} using Simpson's Rule with n = ${n} is approximately ${integral}.`;

    // Calculate error and relative error
    let n_prev = n - 1;
    let integral_prev = calculateIntegral(a, b, n_prev, expression);
    let error = math.abs(integral - integral_prev);
    let relativeErrorPer = ((integral - integral_prev) / integral) * 100;

    document.getElementById('error').innerText = `Error: ${error}\n Relative Error(%): ${relativeErrorPer}`;

    displaySteps(steps);
}

function displaySteps(steps) {
    const stepContainer = document.getElementById('steps');
    stepContainer.innerHTML = 'STEPS';

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        const integralValue = step.integral.toFixed(32).replace(/\.?0+$/, '');
        stepDiv.innerText = `Step ${index + 1}: n = ${step.n}, Integral = ${integralValue}`;
        stepContainer.appendChild(stepDiv);
    });
}

function calculateIntegral(a, b, n, expression) {
    const f = (x) => math.evaluate(expression, { x });

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
