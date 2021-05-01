//20210501
//17 min

function isCanReturnOriginalNumber(num) {

    let n = num;
    let result = false;

    for (let i = 0; ; i++) {

        if (i === 0 || n % 2 !== 0) {
            // 初回 or 奇数
            // n * 3 + 1
            n = n * 3 + 1;
        } else {
            // 偶数
            // n / 2
            n = n / 2;
        }

        if (n === num) {
            result = true;
            break;
        }

        if (n === 1) {
            break;
        }
    }

    return result;
}

let count = 0;

for (let i = 1; i <= 10000; i++) {

    // 奇数は対象外
    if (i % 2 !== 0) {
        continue;
    }

    // 最初の数に戻る場合は true
    if (isCanReturnOriginalNumber(i)) {
        count++;
    }

}

console.log(count);