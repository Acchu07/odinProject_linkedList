class Node{
    constructor(data,next,previous){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}


class LinkedList{
    
    static listNodeAppend(nodeObject,nodeObjectAdd){ // need to modify so multiple body nodes can be passed and appended in a sequence
        nodeObject.next = nodeObjectAdd;
        nodeObjectAdd.previous = nodeObject;
    }

    static listNodePrepend(nodeObjectNewHead,nodeObjectCurrentHead){
        nodeObjectNewHead.next = nodeObjectCurrentHead;
    }

    static findSize(nodeObject){
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

    static findHead(nodeObject){
        if(nodeObject.previous === null){
            return nodeObject;
        }
        while(nodeObject.previous !== null){
            nodeObject = nodeObject.previous;
        }
        return nodeObject;
    }

    static findTail(nodeObject){
        if(nodeObject.next === null){
            return nodeObject;
        }
        while(nodeObject.next !== null){
            nodeObject = nodeObject.next;
        }
        return nodeObject;
    }
    
    static findNodeAtIndex(indexValue, nodeObject){ // could be made better - if indexValue close to size then search from tail if close to head search from head
        let nodeObjectTraverse;
        if(nodeObject.previous !== null){
            nodeObjectTraverse = LinkedList.findHead(nodeObject)
        }
        else{
            nodeObjectTraverse = nodeObject;
        }

        if(LinkedList.findSize(nodeObjectTraverse) < indexValue){
            console.log('Cannot search index value greater than size')
            return;
        }
        let startSearchIndex = 1;
        while(startSearchIndex !== indexValue){
            nodeObjectTraverse = nodeObjectTraverse.next;
            startSearchIndex++;
        }
        return nodeObjectTraverse;
    }

    static pop(){

    }

}


const nodeHead = new Node('Node 1');
const nodeBody1 = new Node('Node 2');
const nodeBody2 = new Node('Node 3');

// console.log(nodeHead);

LinkedList.listNodeAppend(nodeHead, nodeBody1);
LinkedList.listNodeAppend(nodeBody1, nodeBody2); 

// console.log(nodeHead);
console.log(LinkedList.findSize(nodeHead));
// console.log(LinkedList.findHead(nodeBody1));
// console.log(LinkedList.findTail(nodeHead));
console.log(LinkedList.findNodeAtIndex(3,nodeBody2));