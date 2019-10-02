function doubleArray(arrs){
    let arr_new = [...arrs]
    for(let i=0; i<arrs.length; i++){
        arr_new.push(arrs[i])
    }
    return arr_new
}
module.exports = doubleArray;
