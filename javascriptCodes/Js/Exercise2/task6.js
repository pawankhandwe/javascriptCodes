arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function num_string_range(a,b,c){
    arr2=[]
    for(let i = arr.indexOf(a);i<=arr.indexOf(b);i+=c){
        arr2.push(arr[i])
    }
    return arr2
}
let n=+prompt("Enter the num:")
console.log(num_string_range("a","z",n))