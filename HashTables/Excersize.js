x=[1,5,1,2,3,5,1,2,4]

function recurringNaive(arr){
    let element;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return arr[i]
            }
        }
    }
    return undefined;
}


function recurring(arr){
    let map={};
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]!==undefined){
            return arr[i];
        }
        else{
            map[arr[i]]=i;
        }
    }
    return undefined;
}
console.log("Solution");



console.log('X solution recurring');
console.log(recurring(x));

y=[2,1,1,2,3,5,1,2,4];
console.log('Y solution recurring');
console.log(recurring(y));


z=[2,3,4,5];
console.log("Z solution recurring");
console.log(recurring(z)); 




console.log("X solution naive");
console.log(recurringNaive(x));
console.log("Y solution naive");
console.log(recurringNaive(y));
console.log("Z solution naive");
console.log(recurringNaive(z));

