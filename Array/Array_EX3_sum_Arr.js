function sumArray(arrays){
let total = 0;
for (let i=0; i<arrays.length; i++){
    total += arrays[i]
}
return total
}
module.exports= sumArray