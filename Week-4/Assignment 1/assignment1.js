const getNumber = () => Math.floor(Math.random() * 10);

const gerneratedNumber = getNumber();
console.log("Generated Random Number : ", gerneratedNumber);

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];

    function resolve(result) {
        if (state !== PENDING) return;
        state = FULFILLED;
        value = result;
        handlers.forEach((h) => h(value));
    }
    function reject(err) {
        if (state !== PENDING) return;
        state = FULFILLED;
        value = err;
        catchers.forEach((c) => c(err));
    }

    this.then = function (sucessCallback) {
        if (state === FULFILLED) {
            sucessCallback(value)
        } else {
            handlers.push(sucessCallback)
        }
    }
    this.catch = function (failureCallback) {
        if (state === REJECTED) {
            failureCallback(value)
        } else {
            catchers.push(failureCallback)
        }
    }
    executor(resolve, reject);
}

const checkDivisibleBy5 = (res, rej) => {
    if (gerneratedNumber % 5 === 0) {
        res('Divisible by 5');
    } else {
        rej('Not Divisible by 5');
    }
}

const checkDivisibility = new customPromise(checkDivisibleBy5);

checkDivisibility.then((value) => {
    console.log(value);
})

checkDivisibility.catch((value) => {
    console.log(value);
})