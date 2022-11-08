let fn = (a) => {
 let b = (a+'').length;
 let r = a+'';
 r = r.split('');
 let y = r.map((el) => {
    return +el;
 })
 return y.reduce((a,c)=> a+Math.pow(c, b), 0) == a ? true : false;
}




console.log(fn(153));
console.log(fn(371));
console.log(fn(7));
console.log(fn(1652));
