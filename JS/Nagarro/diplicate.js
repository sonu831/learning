
const a = [8,7,96,3,1,8,1]

/* [1,8] */

const x= a.sort((c,d)=>{
   return c-d;
})

const dupilcate = new Set()
const finalAry = [];
const b = x.filter((item,index)=>{
   if(dupilcate.has(item))
   return true
   else{
     dupilcate.add(item);
   }
})

console.log(b)

 
    