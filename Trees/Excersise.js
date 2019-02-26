class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}


class BinarySearchTree{
    constructor(){ 
        this.root=null;
    }

    insert(value){
        let newNode=new Node(value);
        while(true){
            if(this.root==null){
                this.root=newNode;4
            }
            else{
                let currentNode=this.root;
                if(value<currentNode.value){
                    if(!currentNode.left){
                        currentNode.left=newNode;
                    }
                    currentNode=currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right=newNode;
                    }
                    currentNode=currentNode.right;
                }
            }
        }
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
            else if(value==currentNode.value){
                return currentNode;
            }
        }
        return false;
    }
}

traverse=(node)=>{
    const tree={value:node.value};
    tree.left=node.left==null?null:traverse(node.left);
    tree.right=node.right==null?null:traverse(node.right)
    return tree;
}


let x=new BinarySearchTree();
x.insert(100);
x.insert(20);
x.insert(30);
x.insert(50);
console.log(JSON.stringify(traverse(x.root)))
