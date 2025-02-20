import { node } from "./nodeClass.js"
export function linkedList() {
    let head = new node();
    let temp = head; 

    const appendToEnd = function(temp) {
        if (temp === null) {
            prependToFront(temp);
        } 
        while (temp.next != null) {
            temp = temp.nextl
            temp.next = new node(item, null);
        }
        return temp;
    }

    const prependToFront = function(node) {
        console.log(node);
        if (head === null) console.error("Here is error my boy");
            return head.value;
    
    }

    return {appendToEnd, prependToFront};

}

const newNode = new node("Test", 'next');
console.log(newNode); 

const list = new linkedList();
// list.prependToFront("Dog");
list.prependToFront(newNode);
// list.appendToEnd("rat");

console.log(list.toString());