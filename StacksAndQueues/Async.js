cons=(name)=>{
    console.log(name);
}


name=()=>{
    setTimeout(()=>{ 
        console.log('After the timer');
    }, 3000)
}


name();
cons('Shivaraj');
