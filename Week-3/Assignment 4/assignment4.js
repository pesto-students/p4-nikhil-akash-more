//Refactor the below implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope: (2-3 hours)

function createStack() {
    const items = [];
     return { 
        items: items,
         push(item) {
             this.items.push(item); 
        }, 
        pop() {
             return this.items.pop(); 
            } 
        }; 
    } 
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items= [10,100,1000];

//Refactored code
function createStack() {
    const items = [];
     return { 
         push(item) {
             items.push(item); 
        }, 
        pop() {
             return items.pop(); 
            } 
        }; 
    } 
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
stack.items // gives undefined