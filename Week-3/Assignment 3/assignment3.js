//What is the output of the below problem and why?
function createIncrement() { 
    let count = 0; 
    function increment(){
         count++; 
    } 
    let message = `Count is ${count}`;
     function log(){
         console.log(message); 
        }
    return [increment, log]; 
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged? 'Count is 0' is logged

//'Count is 0' is logged, as message variable has the value stored as 'Count is 0' initially when the createIncrement function is called.
//Even though the count is incremented, the message value remains the same and it is not updated as there is no dependency create for it to update.

