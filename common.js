const arr1=['a','b','c','x'];
const arr2=['a','y','x'];


// containsCommon=(x,y)=>{
//     for(let i=0;i<x.length;i++){
//         for(let j=i+1;j<y.length;j++){
//             if(x[i]==y[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// containsCommon(arr1, arr2);



containsCommon=(arr1, arr2)=>{
    let hashmap={};
    arr1.forEach(item=>{
        hashmap[item]=true;
    });
    arr2.forEach((elem,i)=>{
        if(hashmap[elem]){
            return true;
        }
    })
    return false;
}


containsCommon(arr1, arr2);