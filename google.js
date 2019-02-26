hasPairWithSum2=(arr, sum)=>{
    const mySet=new Set();
    const len=arr.length;
    for(let i=0;i<length;i++){
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum-arr[i]);
    }
    return false;
}

arr1=[1,2,4,4] 
sum=8;

console.log(hasPairWithSum2(arr1,sum));
