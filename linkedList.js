class Node
{
    constructor(data, next, previous)
    {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}


class LinkedList
{

    constructor(node)
    {
        this.head = node;
        this.tail = node;
    }

    listNodeAppend(nodeObjectAdd)
    { // need to modify so multiple body nodes can be passed and appended in a sequence - might be complicating this a bit
        if (this.head.next === null)
        {
            this.head.next = nodeObjectAdd;
            nodeObjectAdd.previous = this.head;
            this.tail = nodeObjectAdd;
            return;
        }
        this.tail.next = nodeObjectAdd;
        nodeObjectAdd.previous = this.tail;
        this.tail = nodeObjectAdd;
    }

    listNodePrepend(nodeObjectNewHead)
    {
        this.head.prev = nodeObjectNewHead;
        nodeObjectNewHead.next = this.head;
        this.head = nodeObjectNewHead;
    }

    findSize()
    {
        if (this.head.next === null)
        {
            return 1;
        }
        let size = 1;
        let traverseObject = this.head;
        while (traverseObject.next !== null)
        {
            traverseObject = traverseObject.next;
            size++;
        }
        return size;
    }

    static findSizeInternal(nodeObject)
    {
        if (nodeObject.next === null)
        {
            return 1;
        }
        let size = 1;
        while (nodeObject.next !== null)
        {
            nodeObject = nodeObject.next;
            size++;
        }
        return size;


    }

    findHead(nodeObject)
    {
        return this.head;
    }

    findTail(nodeObject)
    {
        return this.tail;
    }

    findNodeAtIndex(indexValue)
    { // could be made better - if indexValue close to size then search from tail if close to head search from head
        let nodeObjectTraverse = this.head;
        const checkSize = LinkedList.findSizeInternal(nodeObjectTraverse);
        if (checkSize < indexValue)
        {
            console.log('Cannot search index value greater than size')
            return 'Invalid Index';
        }
        let startSearchIndex = 1;
        while (startSearchIndex !== indexValue)
        {
            nodeObjectTraverse = nodeObjectTraverse.next;
            startSearchIndex++;
        }
        return nodeObjectTraverse;
    }

    pop()
    {
        this.tail.previous.next = null;
        this.tail = this.tail.previous;
    }
    
    contains(valueToSearch){
        let nodeObjectTraverse = this.head;
        while(nodeObjectTraverse.next !== null){
            if(valueToSearch === nodeObjectTraverse.data){
                return true;
            }
            nodeObjectTraverse = nodeObjectTraverse.next;
        }
        
        if(valueToSearch === nodeObjectTraverse.data){
            return true;
        }
        return false;
    }

    find(valueToSearch){
        let nodeObjectTraverse = this.head;
        let index = 1;
        while(nodeObjectTraverse.next !== null){
            if(valueToSearch === nodeObjectTraverse.data){
                return index;
            }
            nodeObjectTraverse = nodeObjectTraverse.next;
            index++;
        }

        if(valueToSearch === nodeObjectTraverse.data){
            return index;
        }

        return null;
    }

    toString(){
        let stringOfValues = '';
        let nodeObjectTraverse = this.head;
        let index = 1;
        while(nodeObjectTraverse.next !== null){
            let stringValue = `(${nodeObjectTraverse.data}) -> `
            stringOfValues += stringValue;
            nodeObjectTraverse = nodeObjectTraverse.next;
        }
        stringOfValues = stringOfValues.concat('',`(${nodeObjectTraverse.data})`)
        return stringOfValues;

    }

}


const nodeHead = new Node('Node 1');
const nodeBody1 = new Node('Node 2');


const linkedList1 = new LinkedList(nodeHead);

linkedList1.listNodeAppend(nodeBody1);
linkedList1.listNodeAppend(new Node('Node 3'));
linkedList1.listNodeAppend(new Node('Node 4'));

linkedList1.listNodePrepend(new Node('Node 0'))
linkedList1.pop()
console.log(linkedList1.toString())
