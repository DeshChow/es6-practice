const arr1= [12, 14, 16 , 18];
const arr2= [20, 22, 24];
const arr3= [1, 2, 3, 4 , 5];
//const arr= arr1.concat(arr2).concat(5).concat(arr3);
//const arr= [arr1,arr2,5,arr3];

const arr =[...arr1,...arr2,5,...arr3];

console.log(arr);

const taka = [200, 150 ,700];

const maximum = Math.max(...taka);

console.log(maximum);