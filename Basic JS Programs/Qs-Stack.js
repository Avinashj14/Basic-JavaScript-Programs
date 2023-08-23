// Implement a stack data structure in JavaScript that contains the following operations:
// Constructor
// Stack
// Creates an instance of a Stack class that doesn't contain any items. The constructor not accept any arguments.
// Methods
// push
// Pushes an item onto the top of the stack. Required time complexity: O(1).

// pop
// Removes an item at the top of the stack and returns that item. Required time complexity: O(1).

// isEmpty
// Determines if the stack is empty. Required time complexity: O(1).

// peek
// Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).

// length
// Returns the number of items in the stack. Required time complexity: O(1).

// Examples
// const stack = new Stack();
// stack.isEmpty(); // true
// stack.push(1);
// stack.push(2);
// stack.length(); // 2
// stack.push(3);
// stack.peek(); // 3
// stack.pop(); // 3
// stack.isEmpty(); // false
class Stack{
constructor(){
    this.items=[];
}
push(item){
return  this.items.push(item);
}
pop(){
    if(this.items.length==0){
        return "empty Stack"
    }else{
        return this.items.pop();
    }
}
isEmpty(){
    if(this.items.length==0){
        return "empty Stack"
    }
}
length(){
    return this.items.length
}
peek()
{
    return this.items[this.items.length-1];
}

get fStack(){
  return this.items
}

}

const stack = new Stack();
console.log(stack.isEmpty()); 
const a=stack.push(5);

// console.log(a.fStack.call(this,stack))
// console.log(a)
// console.log(stack.push(1)); 
// console.log(stack.push(2));
// console.log(stack.push(3));
// console.log(stack.peek()); 
// console.log(stack.pop()); 
// console.log(stack.fStack); 
