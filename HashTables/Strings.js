
function elementCounter(arr){
    let obj1={};
    arr.forEach(elem=>{
        if(!obj1[elem]){
            obj1[elem]=1;
        }
        else{
            obj1[elem]++;
        }
    });
    return obj1
}


function duplicateArr(arr1, arr2){
    let obj1={};
    let obj2={};

    obj1=elementCounter(arr1);
    obj2=elementCounter(arr2);
    console.log(obj1);
    console.log(obj2);
    return JSON.stringify(obj1)==JSON.stringify(obj2);
}


console.log(duplicateArr([1,1,2,2,3,3], [1,2,1,2,3,3]));


let x=new Map();

x.set('Name', 'Shivaraj Bakale');
console.log(x);


let y=new Set();

y.add('hello');
y.add('hello');
console.log(y);

