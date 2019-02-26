class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value
    }
}

class Tree{
    constructor(){
        this.root=null
    }

    lookUp(value){
        if(!this.root){
            return false;
        }
        let currentNode=this.root;
        while(currentNode){
            if(value<currentNode.value){
                currentNode=currentNode.left;
            }
            else if(value>currentNode.value){
                currentNode=currentNode.right;
            }
            else if(value==currentNode.value)
            {
                return currentNode;
            }
        }
        return false;
    }

    insert(value){
        let newNode=new Node(value);
        if(this.root==null){
            this.root=newNode;
        }
        else{
            let currentNode=this.root;
            while(true){
                if(value<currentNode.value){
                    if(!currentNode.left){
                        currentNode.left=newNode;
                        return this;
                    }
                    currentNode=currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this;
                    }
                    currentNode=currentNode.right;
                }
            }
        }
    }
}
function traverse(node){
    const tree={value:node.value};
    tree.left=node.left===null?arr.push(node.value):traverse(node.left);
    tree.right=node.right===null?arr.push(node.value):traverse(node.right);
    return tree
}

let x=new Tree();
x.insert(100);
x.insert(20);
x.insert(110);
x.insert(25);


console.log(x.lookUp(12));
console.log(x.lookUp(12));

console.log(JSON.stringify(traverse(x.root)));

            