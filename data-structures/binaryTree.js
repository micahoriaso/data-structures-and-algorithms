import {Stack} from './stackArray';

export class BinaryTreeNode {

    constructor (value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    //return 1 if instance value (value of this node) is greater than provided value
    //return 0 if instance value (value of this node) is equal to provided value
    //return -1 if instance value (value of this node) is less than provided value
    compareTo =  otherNodeValue => {

        let result;

        if (this.value > otherNodeValue) result = 1

        if (this.value === otherNodeValue) result = 0

        if (this.value < otherNodeValue) result = -1
        
        return result;

    }

}

export class BinaryTree {

    constructor () {
        this.head = null;
        this.count = 0;
    }

    add = value => {

        if (this.head === null) {
            
            this.head = new BinaryTreeNode(value);

        } else {

            this.addTo(this.head, value);

        }

        this.count ++;

    }

    addTo = (node, value) => {

        // if value is less than parent value
        if (node.compareTo(value) > 0) {

            if (node.left === null) {

                node.left = new BinaryTreeNode(value);

            } else {

                this.addTo(node.left, value)

            }

        } else {

            // if value is greater than or equal to parent value
            if (node.right === null) {

                node.right = new BinaryTreeNode(value);

            } else {

                this.addTo(node.right, value);

            }

        }

    }

    contains = value => {

        return this.findWithParent(value, parent) !== null;

    }

    findWithParent = (value) => {

        current = this.head;
        parent = null;

        while (current !== null) {

            result = current.compareTo(value);

            if (current > 0) {

                parent = current;
                current = current.left;
                
            } else if (current < 0) {

                parent = current;
                current = current.right;


            } else {

                break;

            }

        }

        return {
            parent,
            current
        };
    }

    remove = value => {
        const {current, parent} = this.findWithParent(value);

        if(current === null) return false;

        this.count --;

        //If current  has no right child, then current's left replaces current
        if(current.right === null) {

            if (parent === null) {

                this.head = current.left;

            } else {

                result = current.compareTo(value);

                if (result > 0) {

                    parent.left = current.left;

                } else if (result < 0) {

                    parent.right = current.left;

                }
            }

        } else if (current.right.left === null){
            // if current's right child has no left child, then current's right child replaces current
            current.right.left = current.left;

            if (parent === null) {

                this.head = current.right;

            } else {

                result = parent.compareTo(value);

                if (result > 0) {

                    parent.left = current.right;

                } else if (result < 0) {

                    parent.right = current.right;

                }


            }


        } else {

            // If current's right child has a left child current with current's right child's left most child
            let leftMost = current.right.left;
            let leftMostParent = current.right;

            while(leftMost.left !== null) {

                leftMostParent = leftMost;
                leftMost = leftMost.left;

            }

            // the parent's left subtree becomes the leftmost's right subtree
            leftMostParent.left = leftMost.right;
            
            // assign left most left and right to current's left and right children
            leftMost.left = current.left;
            leftMost.right =  current.right;

            if(parent === null) {

                this.head = leftMost;

            } else {

                result = parent.compareTo(current.value);

                if (result > 0) {

                    parent.left = leftMost;

                } else if (result < 0) {

                    parent.right = leftMost;

                }

            }

        }

        return true;

    }

    action = value => console.log(value);

    preOrderTraversal = () => {
        this.preOrderTraversalHelper(this.action, this.head);
    }

    
    preOrderTraversalHelper = (action, node) => {

        if (node !== null) {

            action(node.value);
            this.preOrderTraversalHelper(this.action, node.left);
            this.preOrderTraversalHelper(this.action, node.right);

        }

    }

    inOrderTraversal = () => {
        this.inOrderTraversalHelper(this.action, this.head)
    }


    inOrderTraversalHelper = (action, node) => {

        if (node !== null) {

            this.inOrderTraversalHelper(this.action, node.left)
            action(node.value);
            this.inOrderTraversalHelper(this.action, node.right)

        }

    }

    postOrderTraversal = () => {
        this.postOrderTraversalHelper(this.action, this.head);
    }

    postOrderTraversalHelper = (action, node) => {

        if (node !== null) {

            this.postOrderTraversalHelper(this.action, node.left)
            this.postOrderTraversalHelper(this.action, node.right)
            action(node.value);

        }

    }

    // Algorithms are made non-recursive using a stack
    inOrderTraversalNR = () => {
        const processedNodes = []

        if (this.head !== null) {

            //Create a stack to store the nodes we've skipped
            const stack = new Stack ();
            let current = this.head;

            // Keep track of whether or not we shuold be going left
            let goLeftNext = true;

            // push head into stack
            stack.push(current);

            while (stack.count > 0) {
                // if were going left
                if(goLeftNext) {
                    //push everything save the leftmost node to the stack.
                    // We'll yield the left-most after this block
                    while(current.left !== null){
                        stack.push(current);
                        current = current.left;
                    }
                    // process the value
                    processedNodes.push(current.value);

                    // if we can go right the do so
                    if (current.right !== null) {
                        current = current.right;

                        // once we've gone right once, we need to start going left again
                        goLeftNext = true;
                    } else {

                        // if we can't go right then we need to pop off the parent node 
                        // so we can process it and then go back to it's right node

                        current = stack.pop();
                        goLeftNext = false; 
                    }
                }
            }
        }
    }

    getEnumarator = () => {
        return inOrderTraversalNR();
    }

    clear = () => {
        this.head = null;
        this.count = 0;
    }

    count = () => {
        return this.count;
    } 

}