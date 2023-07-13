let obj=[{
    Name:'Ravindra',
   Sports:['Chess','Cricket'],
       },
       {
      Name:'Ravi',
      Sports:['Cricket','Football'],
       },
       {
    Name:'Rishabh',
    Sports:['Table-Tennis','Football'],
     },]
let set=new Set()
obj.forEach(e=>{set.add(...e.Sports)})
let newObj={}
for(let i of set){
    newObj[i]=[];
    obj.forEach(e=>{if(e.Sports.includes(i)){newObj[i].push(e.Name)} })
}

    console.log(newObj);