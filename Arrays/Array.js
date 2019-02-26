  class MyArray{
      constructor(){
          this.length=0;
          this.data={};
      }
      
      get(index){
          return this.data[index];
      }

      push(item){
          this.data[this.length++]=item;
          return this.length;
      }
      pop(){
        const lastItem=this.data[this.length-1];
        delete this.data[this.length-1]; 
        this.length--;
        return this.lastItem;

      }
      delete(index){
        const item=this.data[index];
        this.shiftItems(index);
      }

      shiftItems(index){
          for(let i=index;i<this.length-1;i++){
              this.data[i]=this.data[i+1];
          }
          delete this.data[this.length-1];
          this.length--;
      }
  }

  const myarr= new MyArray();

  console.log(myarr.push(1)); 
  console.log(myarr.push(5));
  console.log(myarr.push(6));
  console.log(myarr.push(7));
  console.log(myarr.push(8));

  console.log(myarr)
  console.log(myarr.delete(2));
  console.log(myarr);
