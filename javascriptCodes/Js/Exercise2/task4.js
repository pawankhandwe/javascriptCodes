arr=[0,1,2,3,4,5,6,7,8,9]
j=0;
i=arr.length;
console.log(arr)
while(i--){
    j=Math.floor(Math.random()*i+1)
    
        t=arr[i];
        arr[i]=arr[j];
        arr[j]=t;
    
}
console.log(arr)