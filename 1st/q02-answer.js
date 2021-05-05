var op = ["+","-","*","/",""];
for (i = 1000; i < 1001; i++) {
    var c = String(i);
    for (j = 0; j < op.length; j++) {
        for (k = 0; k < op.length; k++) {
            for (l = 0; l < op.length; l++) {
                val = c.charAt(3) + op[j] + c.charAt(2) + op[k] + c.charAt(1) + op[l] + c.charAt(0);
                console.log(val);
                if (val.length > 4) {
                    if (i == eval(val)) {
                        console.log(val + "=" + i);
                    }
                }
            }
        }
    }
}