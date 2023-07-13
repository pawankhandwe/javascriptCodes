let str =prompt('enter the email address')
if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)){
let arr=str.split('@')
let arr1=arr[0].split('')
let str1=''
for(i=0;i<arr1.length;i++){
    if(i<=1||arr1.length-1==i){
        str1+=arr1[i]
    }else{
    str1+="*"
}
}
alert(str1+'@'+arr[1])
}else{
    alert('enter the valid email address')
}
