//20210502
//25 min

function reverseStr(s) {
    let result = '';
    result = s.split('').reverse().join('');
    return result;
}

let date = new Date(1964, 10, 10);

while (true) {

    if (date.getFullYear() === 2020 && (date.getMonth() + 1) === 7 && date.getDate() === 25) {
        break;
    }

    // YYYYMMDD
    let s = date.toISOString();
    s = s.split('T')[0];
    s = s.split('-')[0] + s.split('-')[1] + s.split('-')[2];

    // 1. decimal
    const originalNumber = parseInt(s);

    // 2. binary
    const binaryOriginalNumber = parseInt(s).toString(2);

    // 3. reverse binary
    const binaryReverseNumber = reverseStr(binaryOriginalNumber + '');

    // 4. reverse decimal
    const reverseNumber = parseInt(binaryReverseNumber, 2);

    // Print matched YYYYMMDD
    if (originalNumber === reverseNumber) {
        console.log(originalNumber);
    }

    date.setDate(date.getDate() + 1);
}

