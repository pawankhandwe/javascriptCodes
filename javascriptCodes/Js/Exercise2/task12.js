length=+prompt('enter the length')
str=prompt('Enter the string')
console.log(string_chop(str,length))
function string_chop(s,l){
    arr=[]
    for(let i=0;i<s.length;i+=l){
        arr.push(s.slice(i,i+l));
    }
    return arr
}
