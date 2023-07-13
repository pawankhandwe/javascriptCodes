a=[0,1,2,3];
b=[3,4,5];
a_b=a.filter(i=>!(b.includes(i)))
b_a=b.filter(i=>!(a.includes(i)))
ins=a.filter(i=>(b.includes(i)))
u=[...a_b,...b_a,...ins]
console.log('union_array:',u,",a-b_array=",a_b,",b-a_array=",b_a,",intersection_array=",ins)