function sumArrays(array1, array2){
    let arr =[]
    for( let i=0; i<array1.length; i++){
arr.push(array1[i] + array2[i])
    }
    return arr
}
module.exports= sumArrays