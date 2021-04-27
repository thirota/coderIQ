//20210427
//TIMEUP

function reverseStr(num) {
    return num.toString().split('').reverse().join('');
}

function check(num, target) {
    //反転した数字が1000未満のときは対象外とする？問題からは読み取れず・・・
    if (target < 1000) {
        return false;
    }

    const strArray = num.toString().split('');
    const ops = ["+","-","*","/",""];

    for (i=0;i<ops.length;i++) {
        for (j=0;j<ops.length;j++) {
            for (k=0;k<ops.length;k++) {
                const val = strArray[0] + ops[i] + strArray[1] + ops[j] + strArray[2] + ops[k] + strArray[3];
                if (val.length > 4) {
                    if (eval(val) === target) {
                        console.log("val: " + val + ", target: " + target);
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

for (let i=1000; i<10000; i++) {

    const reversedStr = reverseStr(i);

    if (check(i, parseInt(reversedStr))) {
        console.log("found: " + i);
    }

}
