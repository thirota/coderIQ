var memo = [1];

function factorial(n) {
    console.log("factorial(" + n + ")");
    if (memo[n]) {
        console.log("memo found.");
        console.dir(memo);
        return memo[n];
    }
    return memo[n] = n * factorial(n - 1);
}

function nCr(n,r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(nCr(5,3));