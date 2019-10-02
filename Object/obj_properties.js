function properties(students){
    const arr=[]
    let str=""
   for(let i in students){ 
    arr.push(i)
   }
    for(let j=0; j<arr.length-1; j++){
      str  += arr[j] +"," ;
    }
    
  return str + arr[arr.length-1];
  
  }
  
module.exports = properties;