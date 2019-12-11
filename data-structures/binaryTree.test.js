import {BinaryTreeNode, BinaryTree} from './binaryTree';

test('creates a binary tree node', () => {
    const node = new BinaryTreeNode(4);

    expect(node.left).toEqual(null)
    expect(node.right).toEqual(null)
    expect(node.value).toEqual(4)
})

test('creates a binary tree', () => {
    const tree = new BinaryTree();

    expect(tree.count).toEqual(0);
    expect(tree.head).toEqual(null);
})

test('adds a node to the binary tree', () => {
    const tree = new BinaryTree();

    tree.add(4);

    expect(tree.count).toEqual(1);
    expect(tree.head.value).toEqual(4);
})

test('arranges tree nodes correctly', () => {
    const tree = new BinaryTree();

    tree.add(4);
    tree.add(3);
    tree.add(5);
    tree.add(2);

    expect(tree.count).toEqual(4);
    expect(tree.head.value).toEqual(4);
    expect(tree.head.right.value).toEqual(5);
    expect(tree.head.left.value).toEqual(3);
    expect(tree.head.left.left.value).toEqual(2);
})

test('it removes tree nodes correctly', () => {
    const tree = new BinaryTree();

    tree.add(4);
    tree.add(3);
    tree.add(5);
    tree.add(2);

    expect(tree.count).toEqual(4);
    expect(tree.head.value).toEqual(4);
    expect(tree.head.right.value).toEqual(5);
    expect(tree.head.left.value).toEqual(3);
    expect(tree.head.left.left.value).toEqual(2);
})

test('it performs pre order traversal correctly', () => {
    const tree = new BinaryTree();

    tree.add(4);
    tree.add(3);
    tree.add(5);
    tree.add(2);

    console.log("======== Pre-Order traversal ============");
    tree.preOrderTraversal();
    console.log("========= In-Order traversal ============");
    tree.inOrderTraversal();
    console.log("========= Post-Order traversal ==========");
    tree.postOrderTraversal();
    console.log("========= In-order traversal (Non recursive) =========");
    tree.inOrderTraversalNR();
})
