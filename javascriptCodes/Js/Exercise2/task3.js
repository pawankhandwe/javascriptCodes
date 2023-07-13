arr=[0,1,1,2,3,4,5,5,5,6,7,7,8,9]
a=new Set(arr);
b=[]
for(i of a){
    let c=0
    for(j in arr){
        if(arr[j]==i){
            c++;
        }
    }
    b.push(c);
}

console.log([...a][(b.indexOf((Math.max(...b))))]);