  function stringToArray(chuoi) { 
    const mangKetQua = [];
   for(let i = 0; i < chuoi.length; ++i) {
     mangKetQua.push(chuoi[i])
   }
    return mangKetQua
  }
  
  
  // console.log(stringToArray('12345dhdhdhd6'));
  module.exports = stringToArray;