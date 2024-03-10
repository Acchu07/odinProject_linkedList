class Node{
    constructor(data,next){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}


class LinkedList{
    
    static append(nodeObject,nodeObjectAdd){
        nodeObject.next = nodeObjectAdd;
        nodeObjectAdd.previous = nodeObject;
    }

    static prepend(nodeObjectNewHead,nodeObjectCurrentHead){
        nodeObjectNewHead.next = nodeObjectCurrentHead;
    }

    static size(nodeObject){
        if(nodeObject.next === null){
            return 1;
        }
        let size = 1;
        while(nodeObject.next !== null){
            nodeObject = nodeObject.next;
            size++;
        }
        return size;
    }
}


const nodeHead = new Node(10);
const nodeBody1 = new Node(20);
const nodeBody2 = new Node(50);

console.log(nodeHead);

LinkedList.append(nodeHead, nodeBody1);

console.log(nodeHead);
console.log(LinkedList.size(nodeHead));