function taskOne(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting email")
            resolve(console.log("abcd@yahoo.co.in"))
        }, 4000)
    })
}
function taskTwo(phone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting contact")
            resolve(console.log("123456789"))
        }, 2000)
    })
}
function taskThree(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting age")
            resolve(console.log("18"))
        }, 1000)
    })
}
// async await executes taskTwo and taskThree only after taskOne is executed, even though the setTimeout for taskThree and taskTwo is lesser than taskOne
async function displayUser() {
    const userId = await taskOne();
    const contactInfo = await taskTwo();
    const oldEnough = await taskThree();
}
displayUser();

function* generateRes() {
    yield taskOne;
    yield taskTwo;
    yield taskThree;
}
const execute = generateRes();
console.log(execute.next());
console.log(execute.next());
console.log(execute.next());
console.log(execute.return());