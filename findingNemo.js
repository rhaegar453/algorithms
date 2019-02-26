const arr = new Array(100);

printBoxes = (arr) => {
    arr.forEach((elem) => {
        console.log(elem);
    })
}

compressBoxes = (arr) => {
    arr.forEach((elem, i) => arr[i] = 'hello');
    printBoxes(arr);
}



