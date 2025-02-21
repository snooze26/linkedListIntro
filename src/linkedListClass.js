// TURN ALL OF THIS INTO A CLASS!!!!!!!!!

import { node } from "./nodeClass.js"

    export class linkedList { 
        constructor() {
            this.tail = null;
            this.head = null; 
            this.size = 0;
        }

        prepend(node) {
            if(!this.tail) { // no tail assign tail to current node 
                this.head = node;
                this.tail = node 
            } else {
            node.next = this.head;  // assign node to head 
            this.head = node; 
            }
            this.size++

        }
        
        append(node) {
            if (this.head == null) return this.prepend(node);  // if no head then add new node to the beginning 
            let current = this.head; 
            while(current.next != null) { // while the current node next field is not empty 
                current = current.next; // assign this.head to the next node 
            };
            current.next = node; 
            this.tail = node; 
            this.size++;

        }
        
        getSize() { 
            return this.size; 
        }

        getHead() { 
            return this.head;
        }

        getTail() { 
            return this.tail;
        }

        at(index) {
            if (index < 0 || index >= this.size) return null; 
            // start at front of the list 
            let current = this.head; 
            let count = 0; 

            while (count < index ) {
                current = current.next; //moves onto the next node
                count ++; // count increments until it reached index value 
            };
            return current.value; //return the value at this index 
        }

        showList() {
                let current = this.head; 
                let index = 0; 
                while(current) {
                    console.log(`Index: ${index++} Value: ${current.value}`);
                    current = current.next; 
                }

        }

        pop() { 
            if(!this.head) return null; 
            if(!this.head.next) {
                const node = this.head.value;
                this.head = null;
                this.tail = null; 
                this.size = 0; 
                return node;
            }

            let secondLast = this.head;
            while(secondLast.next.next) {
                secondLast = secondLast.next;
            };
            secondLast.next = null; 
            this.tail = secondLast;

            this.size--
            return this.tail;
        }

    }

let testList = new linkedList(); 
const testNode3 = new node(7, null);
const testNode = new node(5, null);
const testNode2 = new node(6, null);





testList.prepend(testNode);
testList.append(testNode3)
testList.prepend(testNode2)
testList.showList();
console.log(testList.pop());
console.log("run after pop", testList.showList());
console.log("run after pop SIZE ", testList.size);