function sortArray(arr) { // cach 1
    let res = arr;
    for(let i = 0; i< arr.length; ++i) {
       for(let j = i + 1; j< arr.length; ++j) {
        if(arr[j] < arr[i]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return res;
  }
  
  // console.log(sortArray([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
  // console.log(sortArray2([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
  module.exports = sortArray;
  