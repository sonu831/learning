class Counter {
  i = 0; // public class field
  #j = 2; // public class field


  // print() {
  //   //console.log(this.i);
  //  console.log(this.#j);
  // }

  #print() {
    //console.log(this.i);
   console.log(this.#j);
  }

  publicPrint(){
    this.#print();
  }
}

const c = new Counter();


//c.print(); //Print 0
//console.log(c.i); //1
//Above two will print the same c.i will be public
c.publicPrint(); //Print 0
//console.log(c.#j); //1

