
    function checkProperty(student){
      for(let i in student ){
        if(i === 'name'){
          return true
        }
       
      }
      return false
    }
    module.exports = checkProperty;