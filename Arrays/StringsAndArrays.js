function reverse(str){
    if(!str || str.length<2|| typeof str!=='string'){
        return 'hmm thats not good';
    }

    const backwards=[];
    const totalItems=str.length-1;
    for(let i=totalItems;i>=0;i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
}


//O(n) complexiety

// x='shivaraj';
// x=x.split('')
// console.log(x.pop());
// console.log(x.pop());
// console.log(x.pop());
// console.log(x.pop());
// console.log(x.pop());


function reverse(str){
    let arr=str.split('');
    let newArr=new Array(arr.length);
    console.log(arr.length);
    for(let i=0; i<arr.length;i++){
        newArr.push(arr.pop());
    }
    return newArr;
}

function reverse2(str){
    return str.split('').reverse().join('');
}

reverse3=(str)=>[...str].reverse().join('');

console.log(reverse3('shivaraj bakale'));

// console.log(reverse2('shivaraj'));