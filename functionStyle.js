const give5 = () => 5;

console.log(give5());

const num = num => num * 2;

console.log(num(5));

const add = (x,y) => x+y;

console.log(add(5,10));

const mul = (x,y) =>{
    const a = x+y;
    const b = x-y;
    const m = a*b;
    return m;
}

console.log(mul(20,10));