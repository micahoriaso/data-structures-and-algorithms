import { Stack } from "./stackArray";


test("creates a stack", () => {
    
    const stack = new Stack();
    expect(stack.depth()).toEqual(0)

})

test("pushes a value to the stack", () => {

    const stack = new Stack();
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.depth()).toEqual(1);

})

test("pops a value from the stack", () => {

    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.pop();

    expect(stack.peek()).toEqual(2);
    expect(stack.depth()).toEqual(1);

})

test("peeks at the value at the top of the stack", () => {

    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(56);

    expect(stack.peek()).toEqual(56);

})

test("fails at peeking an empty stack", () => {

    const stack = new Stack();

    expect(() => stack.peek()).toThrow("Stack is empty");

})

test("fails at popping an empty stack", () => {

    const stack = new Stack();

    expect(() => stack.pop()).toThrow("Stack is empty");

})