arr= [0,1,2,3,4,5,6,7,8,9]
n=+prompt("Enter the number:  ");
console.log(`first ${n} element:[${arr.slice(0,n)}],last ${n} element:[${arr.slice(arr.length-n,arr.length)}]`); 