// TURN ALL OF THIS INTO A CLASS!!!!!!!!!

import { node } from "./nodeClass.js"

    export class linkedList { 
        constructor() {
            this.tail = null;
            this.head = null; 

        }

        
        append(node) {
            if (!this.head) {
                this.head = node;
                this.tail = node; 
            } else { 
                this.tail = node; 
                this.tail = node; 
            }
        }

        prepend(node) {
            if(!this.tail) { 
                this.head = node;
                this.tail = node.next 
            }
            this.head = node;
        }
        
        size() { 
            
        }
    }

let testList = new linkedList(); 
const testNode = new node(5, null);
const testNode2 = new node(6, testNode);
const testNode3 = new node(7, null);



testList.append(testNode3)
testList.prepend(testNode);
console.log("After first prepend", testList);
testList.prepend(testNode2);

console.log(testList);

// export function linkedList() {
//     let list = []; 
//     let head = new node();

//     const appendToEnd = function(head) {
//         let temp = head; 

//         if (temp === null) {
//             prependToFront(temp);
//         } 
//         while (temp.next != null) {
//             temp = temp.next;
//             temp.next = new node(item, null);
//         }
//         return {head, temp};
//     }

//     const prependToFront = function(head) {
//         console.log("new node" , head);
//         if (head == null) console.error("Here is error my boy");
//         return 
    
//     }

//     return {appendToEnd, head, prependToFront};

// }

// const newNode = new node("Test", "next");
// // console.log(newNode); 

// const list = new linkedList();
// list.prependToFront(newNode);
// console.log(list.toString());
