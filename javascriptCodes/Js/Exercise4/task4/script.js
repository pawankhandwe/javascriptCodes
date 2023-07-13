let set=new Set()
document.getElementById('total').innerHTML=`${set.size}`
function add(){
    if(document.getElementById('add').textContent=='Update'){
        update()
         return;
    }
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
   let div=document.createElement("div")
   let ch=document.createElement('input')
   ch.classList.add('chbox')
   ch.type='checkbox'
   ch.addEventListener('click',check)
   div.append(ch)
    let fn=document.createElement("input")
    div.append(fn)
    fn.value=firstname
    fn.disabled=true
    let ln=document.createElement('input')
    div.append(ln)
    ln.value=lastname
    ln.disabled=true
    let ed=document.createElement('button')
    div.append(ed)
    ed.innerText="Edit"
    ed.style.background="#00ff00"
   let del=document.createElement('button')
    div.append(del)
    del.innerText="delete"
    del.style.background="#ff0000"
    document.getElementById('out').append(div)
    ed.addEventListener('click',edit)
    del.addEventListener('click',dele)
    document.getElementById('firstname').value=''
    document.getElementById('lastname').value=''

}
function dele(){
    if(document.getElementById('add').textContent=='Update'){
        document.getElementById('add').innerHTML='&oplus; Add'
        document.getElementById('firstname').value=''
        document.getElementById('lastname').value=''
    }
    this.parentNode.remove()
    set.delete(this.parentNode)
    document.getElementById('total').innerHTML=`${set.size}`
}
function edit(){
   let fn=this.parentNode.getElementsByTagName('input')[1].value;
   let ln=this.parentNode.getElementsByTagName('input')[2].value;
   document.getElementById('firstname').value=fn;
   document.getElementById('lastname').value=ln;
   up=document.getElementById('add').innerText="Update"  
   eth= this.parentNode;
}
function update(){
    eth.getElementsByTagName('input')[1].value=document.getElementById('firstname').value
        eth.getElementsByTagName('input')[2].value=document.getElementById('lastname').value
        document.getElementById('firstname').value=''
        document.getElementById('lastname').value=''
        document.getElementById('add').innerHTML='&oplus; Add'
}
function selectAll(){
    let ch=document.getElementsByClassName('chbox')
    
    if(document.getElementById('check').checked) {
           for(let e of ch){
            e.checked=true
            set.add(e.parentNode)
           }
    }else{
        for(let e of ch){
            e.checked=false
            set.delete(e.parentNode)
        }
    }
    for(let i of ch){
        if(!i.checked){
            document.getElementById('check').checked=false
        }
    }
    document.getElementById('total').innerHTML=`${set.size}`
    
}
function deleteAll(){
    for(let i of set){
        i.remove()
        set.delete(i)
    }
    document.getElementById('total').innerHTML=`${set.size}`
}
function check(){
    if(this.checked){
        set.add(this.parentNode)
    }else{
        set.delete(this.parentNode)
    }
    document.getElementById('total').innerHTML=`${set.size}`
}
setInterval(() => { for(let i of document.getElementsByClassName('chbox')){
    if(!i.checked){
        document.getElementById('check').checked=false
        return
    }else{
        document.getElementById('check').checked=true
    }
    
    document.getElementById('total').innerHTML=`${set.size}`
}
    
}, 1);