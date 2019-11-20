import { Node, LinkedList } from './doublyLinkedList';

test("creates a doubly linked list", () => {
  const list = new LinkedList();
  expect(list.size).toEqual(0);
  expect(list.head).toEqual(null);
  expect(list.tail).toEqual(null);
});

test("creates a node", () => {
  const node = new Node(2);
  expect(node.value).toEqual(2);
  expect(node.next).toEqual(null);
  expect(node.previous).toEqual(null);
});

test("adds a new node to the beginning of the linked list", () => {

  const list = new LinkedList();
  const node = new Node(1);

  list.addFirst(node);

  expect(list.head).toEqual(node);
  expect(list.tail).toEqual(node);
  expect(list.size).toEqual(1);

});

test("adds a new node to the end of the linked list", () => {

  const list = new LinkedList();
  const node = new Node(1);
  const node2 = new Node(2);

  list.addFirst(node);
  list.addLast(node2);

  expect(list.head).toEqual(node);
  expect(list.tail).toEqual(node2);
  expect(list.size).toEqual(2);

});

test("removes a node to the beginning of the linked list", () => {

  const list = new LinkedList();
  const node = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  list.addFirst(node);
  list.addLast(node2);
  list.addLast(node3);
  list.removeFirst();

  expect(list.head).toEqual(node2);
  expect(list.tail).toEqual(node3);
  expect(list.size).toEqual(2);

});

test("removes a node to the end of the linked list", () => {

  const list = new LinkedList();
  const node = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  list.addFirst(node);
  list.addLast(node2);
  list.addLast(node3);
  list.removeLast();

  expect(list.head).toEqual(node);
  expect(list.tail).toEqual(node2);
  expect(list.size).toEqual(2);

});

test("removes a node by its value", () => {

  const list = new LinkedList();
  const node = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);

  list.addFirst(node);
  list.addLast(node2);
  list.addLast(node3);
  list.removeByValue(node2);

  expect(list.size).toEqual(2);
  
});