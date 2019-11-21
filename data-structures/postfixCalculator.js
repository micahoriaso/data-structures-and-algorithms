import { Stack } from './stackLinkedList';

const operatorList = ['+', '-', '*', '/'];


export const postFixCalulator = expression => {

    const stack = new Stack();
    let rightSideOperand;
    let leftSideOperand;

    const expressionArray = expression.split('');

    expressionArray.forEach(token => {

      if (!operatorList.includes(token)) {
        stack.push(Number(token));
      } else {
        rightSideOperand = stack.pop();
        leftSideOperand = stack.pop();

        switch (token) {
          case "+":
            stack.push(leftSideOperand + rightSideOperand);
            break;

          case "-":
            stack.push(leftSideOperand - rightSideOperand);
            break;

          case "*":
            stack.push(leftSideOperand * rightSideOperand);
            break;

          case "/":
            stack.push(leftSideOperand / rightSideOperand);
            break;
        }
      }

    });

    return stack.peek();
}
