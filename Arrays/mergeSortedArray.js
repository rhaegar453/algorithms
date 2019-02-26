x=[0,3,4,31];
y=[4,6,30];


sortedMerge=(arr1, arr2)=>{
    if(arr1.length==0){
        return arr2;
    }
    if(arr2.length==0){
        return arr1;
    }
    let i=1;
    let j=1;
    const finalarr=[];
    let firstArrItem=arr1[0];
    let secondArrItem=arr2[0];
    while(firstArrItem||secondArrItem){
        if(!secondArrItem||firstArrItem<secondArrItem){
            finalarr.push(firstArrItem);
            firstArrItem=arr1[i++];
        }
        else{
            finalarr.push(secondArrItem);
            secondArrItem=arr2[j++];
        }
    }
    return finalarr;
}


console.log(sortedMerge(x,y));
