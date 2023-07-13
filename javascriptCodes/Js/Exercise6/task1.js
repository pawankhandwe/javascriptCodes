let tree=[{
    _id  : '0' ,
    tag  : toString(Math.floor(Math.random()*10)),
    parent_id : null,
    domain_id : 'common' ,
    description : 'this is parent node'
}]
let treeLavel=prompt().split(',')

for(let i in treeLavel){
    
    for(let j=0;j<treeLavel[i];j++){
        tree.push({
            _id  : i+j, 
            tag  : (Math.floor(Math.random()*10)),
             parent_id : (i==0)?'0':''+(+i-1)+''+Math.floor((Math.random()*10)%treeLavel[i-1]),
             domain_id : 'common' ,
             description : 'this is child node'
        })
     }
}

tree.sort((a,b)=> (a.parent_id>b.parent_id)?1:(a.parent_id==b.parent_id)?((a._id>b._id)?1:-1):0)
// let ndx=0
// let count=1
// main = document.getElementById('tree')
// div=document.createElement('div')
// div.style='display:flex; justify-content:center;align-items:center'
// div1=document.createElement('div')
// div1.style="width:100px; height:100px; border:1px black solid;border-radius:100px ;background-color:red; padding:10px;margin:10px;display:flex;justify-content:center;align-item:center;"
// div1.innerHTML=`id = 0`
// div.append(div1)
// main.append(div)

// do{
//     div=document.createElement('div')
// div.style='display:flex;justify-content:space-around'
// for(let i = count;i<count+(+treeLavel[ndx]);i++){
// div1=document.createElement('div')
// div1.style="width:100px; height:100px; border:1px black solid;padding:10px; border-radius:100px ;background-color:red ;margin:10px;display:flex;justify-content:center;align-item:center;"
// div1.innerHTML=`<div>id = ${tree[i]._id}<br>p id = ${tree[i].parent_id}</div>`
// div.append(div1)
// }
// main.append(div)
// count+=(+treeLavel[ndx])
// ndx++
// }while(ndx<treeLavel.length)
document.getElementById('tree').innerHTML=JSON.stringify(tree)

btn = document.createElement('button')
btn.innerHTML='move node'
// btn.addEventListener('click',moveNode)
// document.getElementsByTagName('body')[0].append(btn)
function moveNode(){
  node_id = prompt('enter the node id of that node you want to move')
  parentNode_id = prompt('Enter the node id  you want to make child of that')
  
  if(isChild(parentNode_id,node_id)){
    tree.find(e=>e._id==node_id).parent_id=parentNode_id
  }else{
    alert('it is not possible')
  }
document.getElementById('output').innerHTML=JSON.stringify(tree)
}
function isChild(p_id , n_id){
      if(tree.find(e=>e._id==p_id).parent_id==n_id){
         return false
      }else if(tree.find(e=>e._id==p_id)._id=='0'){
        return true
      }else{
        return isChild(tree.find(e=>e._id==p_id).parent_id,n_id)
      }
}

