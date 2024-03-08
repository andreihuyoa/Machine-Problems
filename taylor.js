
function compute() {
    //gets the user input
    const n = parseFloat(document.getElementById('n').value);
    const x = parseFloat(document.getElementById('x').value);
    const d = parseFloat(document.getElementById('d').value);
}

function computeForDerivative() {
    var func = function (x) {
        return Math.pow(x, 2);
    };
    function der(x, func, prec, isLeft) {
        if (prec == undefined) prec = 0.000000001;
        var y = func(x);
        if (isLeft) {
            var x1 = x - prec;
        } else {
            x1 = x + prec;
        }
        var y1 = func(x1);
        return (y1 - y) / (x1 - x);
    }
}

function sinh() {
    var mxx = -x * x;
    var sinh = 1;
    var n = 0;
    var term = 1;
    for (var i = 1; i <= 2 * iterNum; i++) {
        n = n + 2;
        term = (term * mxx) / (n * (n + 1));
        sinh = sinh + term;
    }
    sinh = x * sin;
    console.log(sinh + ' = my function.');
    console.log(Math.sinh(x) + ' math.sinh');
}

//() <- a number inside
function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        return num * factorialize(num - 1);
    }
}

//maclaurin if a = 0
function maclaurinExpansion(term, fxn) {
    var f = fxn;
    var expansion = [];

    for (var i = 0; i < term; i++) {
        expansion.push(f(a) / factorialize(i));
        f = computeForDerivative(f);
    }
}
