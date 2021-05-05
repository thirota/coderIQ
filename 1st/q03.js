//20210428
//27min

//create a deck of 100 cards
let array = [];
for (let i = 0; i < 100; i++) {
    array.push({
        num: i + 1,
        flg: false
    });
}
// debug
// console.log("length: " + array.length);
// console.log("[0] num: " + array[0].num);
// console.log("[0] flg: " + array[0].flg);
// console.log("[99] num: " + array[99].num);
// console.log("[99] flg: " + array[99].flg);

//operation by users
let n = 1;
while (true) {
    let cur = n;
    let ope = false;
    for (let i = 0; i < 100; i++) {
        if (cur > 99) {
            break;
        }
        array[cur].flg = !array[cur].flg;
        ope = true;
        // next cursor
        cur += (n+1)
    }
    n++;
    if (!ope) {
        break;
    }
}

//result
for (let i = 0; i < 100; i++) {
    if (!array[i].flg) {
        console.log(array[i].num)
    }
}

