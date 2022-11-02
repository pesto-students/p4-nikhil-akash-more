//Bind Method
// Bind method creates a new function to be called later, keeping the context(this) of that object being passed as the parameter, bind method helps to create a bounded function.

let obj1 = {a:5, b:3};
let obj2 = {a:2, b:2};
function multiply(){
    return this.a * this.b;
}

const result1 = multiply.bind(obj1);
const result2 = multiply.bind(obj2);
console.log(result1()); //prints 15
console.log(result2()); // prints 4

//Call Method
//Call method is used to invoke a function immediately while passing this context as the first argument followed by the other arguments.

let person = {
    name: 'Akash' 
}
function printName(age) {
    console.log(`My name is ${this.name}, aged ${age} years`)
}
printName.call(person, 30); //My name is Akash, aged 30 years

//Apply Method
//Apply is similar to call, only difference is, the second argument is an array of all the parameters to be passed, this method can be used when we do not know how many arguments would be passed to that function.

let personalDetails = {
    name: 'Akash' 
}
function printName() {
    console.log(`My name is ${this.name}, aged ${arguments[0]} years. I live in ${arguments[1]}`)
}
printName.apply(personalDetails, [30, "Pune"]); //My name is Akash, aged 30 years. I live in Pune
