obj=[
    {name: 'Jack',age:23},
    {name: 'Sam',age:12},
    {name: 'Max',age:20},
]
console.log(obj)
ins=prompt("Enter the del for delete element or ins for insert element")
if(ins=='del'){
    pos=+prompt('enter the position')
    if(pos<obj.length){
        obj.splice(pos-1,1)
    }else{
        alert("enter a valid possition")
    }
}
else if(ins=="ins"){
     pos=+prompt('Enter the position for insert element ')
     if (pos<=obj.length){
        nam=prompt('enter the name')
        ag=prompt('enter the age')
        obj.splice(pos,0,{name:nam,age:ag})
     }
    else{
        alert('enter the valid index')
    }
}
else{
    alert('Enter the valid command')
}
console.log(obj)