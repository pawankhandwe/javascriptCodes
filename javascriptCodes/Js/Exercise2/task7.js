a=prompt();
if (a.includes('-')){
b=a.split("-")}
else{
b=a.split('/')}
month=['January','February','March','April','May','Jun','July','August','September','October','November','December']
console.log(month[+b[1]-1])