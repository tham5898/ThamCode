///test 2
const stringToArray = require('./Array/Array_EX2_sort');
console.log(stringToArray('12345dhdhdhd6'))
///test 1
const sortArray = require('./Array/Array_EX1_string_arr');
let arr = [3, 8, 7, 6, 5, -4, 3, 2, 1]
console.log(sortArray(arr))
///test 3
const sumArray = require('./Array/Array_EX3_sum_Arr')
let array = [-3, -2, -1, 1, 2, 3]
console.log(sumArray(array))
///test 3
const sumArrays = require('./Array/Array_EX3_sumArray')
let arr1 = [1, 0, 2, 3, 4, 0];
let arr2 = [3, 5, 6, 7, 8, 13];
console.log(sumArrays(arr1, arr2))
///test4
const doubleArray = require('./Array/Array_EX4_DoubleArray')
console.log(doubleArray(arr2))

////test obj 1
const properties = require('./Object/obj_properties')
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    console.log(properties(student))
    ////test student 2
    
    const propertiesStudent= require('./Object/Obj_student2')
    console.log(propertiesStudent(student))
    ////test checkProperty
    const checkProperty = require('./Object/obj_checkProperty')
    console.log(checkProperty(student))
    ///test value
    const values = require('./Object/obj_Value')
    console.log(values(student))
    ///test sort
    const compare = require('./Object/obj_sort')
    let library = [ 
           {
               title:  "The Road Ahead",
               author: "Bill Gates",
               libraryID: 1254
           },
           {
               title: "Walter Isaacson",
               author: "Steve Jobs",
               libraryID: 4264
           },
           {
               title: "Mockingjay: The Final Book of The Hunger Games",
               author: "Suzanne Collins",
               libraryID: 3245
           }];
        console.log(compare(library))