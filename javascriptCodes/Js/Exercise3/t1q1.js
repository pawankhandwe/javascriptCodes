let reg=/^[\w]+@([\w-]+\.)+[\w-]+/
str = prompt("enter the email address")
if(reg.test(str)){
  alert("email id is vaild")
}
else{
    alert("please enter the valid email address")
}