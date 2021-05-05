//20210430
//13min

const MAX = 15;
const TARGET_TOTAL = 1000;
let found = 0;

//10円
for (let i = 0; i < MAX + 1; i++) {
    //50円
    for (let j = 0; j < MAX + 1; j++) {
        //100円
        for (let k = 0; k < MAX + 1; k++) {
            //500円
            for (let l = 0; l < MAX + 1; l++) {
                if ((i + j + k + l) > MAX) {
                    break;
                }
                let total = 10 * i + 50 * j + 100 * k + 500 * l;
                if (total === TARGET_TOTAL) {
                    found++;
                }
            }
        }
    }
}

console.log(found);