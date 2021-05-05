// 20210426
// 25min

function reverseStr(s) {
    let result = '';
    result = s.split('').reverse().join('');
    console.log("result: " + result);
    return result;
}

for (let i = 10; i < 1000; i++) {

    // 10
    let dec = false;
    let decStr = parseInt(i).toString();
    if (decStr === reverseStr(decStr)) {
        dec = true;        
    }
    
    // 2
    let bin = false;
    let binStr = parseInt(i).toString(2);
    if (binStr === reverseStr(binStr)) {
        bin = true;
    }

    // 8
    let oct = false;
    let octStr = parseInt(i).toString(8);
    if (octStr === reverseStr(octStr)) {
        oct = true;
    }

    if (dec && bin && oct) {
        console.log("found: " + i)
        break;
    }
}