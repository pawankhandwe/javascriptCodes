obj=[{id:1,name:'anil',age:20},
{id:2,name:'pratap',age:23},
{id:3,name:'jagrti',age:25},
{id:4,name:'sunder',age:25},
{id:5,name:'sumit',age:25},
{id:6,name:'shanti',age:20},
{id:7,name:'suresh',age:25},
{id:8,name:'nikita',age:23},
{id:9,name:'sachin',age:21},
{id:10,name:'nirbhay',age:26},
]
obj.sort((a,b)=>a.age<b.age?a.name>b.name?-1:-1:1)
console.log(obj)