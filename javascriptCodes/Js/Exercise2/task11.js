str='This is a sample string'
inStr=prompt("Enter the string for insert:")
inP=prompt('Enter the position of insertion:')
str2=str.slice(0,+inP-1)+inStr+str.slice(+inP-1)
console.log(str2 )