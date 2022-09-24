let obj = {
    [Symbol.iterator]() {
        let fibNum1 = 0;
        let fibNum2 = 0;
        let i = 0;
        let fib = fibNum1 + fibNum2;
        return {
            next() {
                // console.log("index:", i);
                if(i < 1) {
                    i++;
                    return {
                        value: 0,
                        done: false
                    }
                } else if (i === 1){
                    i++;
                    fibNum1++;
                    fib = fibNum1 + fibNum2;
                    return {
                        value: fib,
                        done: false
                    }
                } else {
                    // console.log(i, fib, fibNum1, fibNum2);
                    i++;
                    fib = fibNum1 + fibNum2;
                    fibNum2 = fibNum1;
                    fibNum1 = fib;
                    return {
                        value: fib,
                        done: false
                    }
                }

            }
        }
    } 
}

for (const val of obj) {
    console.log(val);
    // just to limit the output in console
    if (val > 15) {
        break;
    }
}