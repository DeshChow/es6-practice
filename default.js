function add(num1,num2 = 20){
    //num2 = num2 || 0;
    return num1 + num2;
}

let result = add(20,10);

console.log(result);