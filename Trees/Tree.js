class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
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
                    currentNode=currentNode.right
                }
            }
        }
    }
    lookup(value){
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
            else if(value==currentNode.value){
                return currentNode;
            }
        }
        return false;
    }
}

traverse=(node)=>{
    const tree={value:node.value};
    tree.left=node.left===null?null:traverse(node.left);
    tree.right=node.right===null?null:traverse(node.right);
    return tree;
}

let x=new BinarySearchTree();
x.insert(100);
x.insert(50);
x.insert(25);
x.insert(120);
x.insert(140);

// console.log(x.lookup(120));
console.log(JSON.stringify(traverse(x.root)));

