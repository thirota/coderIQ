// 再帰を使わない実装

function nCr(n,r) {
    var result = 1;
    for (var i=1; i<=r; i++) {
        result = result * (n-i+1)/i;
    }
    return result;
}

console.log(nCr(5,3));