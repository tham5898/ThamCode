function compare(a, b){
      
     let libraryIDA = a.libraryID
     let  libraryIDB = b.libraryID
     var compareSort=0
     if(libraryIDA >  libraryIDB){
       compareSort= 1
     }
      else if(libraryIDA < libraryIDB ){
        compareSort =-1
      }
     
      return compareSort
    
    }
    module.exports = compare;