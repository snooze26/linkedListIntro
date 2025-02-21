// TURN ALL OF THIS INTO A CLASS!!!!!!!!!

import { node } from "./nodeClass.js"

    export class linkedList { 
        constructor() {
            this.tail = null;
            this.head = null; 
            this.size = 0;
        }

        
        append(node) {
            if (!this.head) {
                this.head = node;
                this.tail = node; 
            } else { 
                this.tail = node; 
            }
            this.size++

        }

        prepend(node) {
            if(!this.tail) { 
                this.head = node;
                this.tail = node 
                
            }
            this.head = node;
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

            while (count < index ){
                current = current.next; //moves onto the next node
                count ++; // count increments until it reached index value 
            };
            return current.value; //return the value at this index 
        }
    }

let testList = new linkedList(); 
const testNode3 = new node(7, null);
const testNode = new node(5, testNode3);
const testNode2 = new node(6, testNode);





testList.prepend(testNode);
testList.append(testNode3);
testList.append(testNode2)

console.log(testList.at(1));