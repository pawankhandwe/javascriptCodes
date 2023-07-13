var a=prompt("Enter the number");
var n=""
n+=a[0];
for (let i =0;i<a.length-1;i++){
    if(a[i]%2==0&&a[i+1]%2==0){
        n+="-";
        n+=a[i+1];
    }
    else{
        n+=a[i+1];
    }
}
console.log(n);