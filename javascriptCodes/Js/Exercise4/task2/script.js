function add(e){
    if(document.getElementById('add').textContent=='Update'){
        update()
         return;
    }
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
   let div=document.createElement("div")
    let fn=document.createElement("input")
    if(firstname==""||lastname==""){
        alert('fill all fields');
        return;
    }
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
}
function edit(){
   let fn=this.parentNode.getElementsByTagName('input')[0].value;
   let ln=this.parentNode.getElementsByTagName('input')[1].value;
   document.getElementById('firstname').value=fn;
   document.getElementById('lastname').value=ln;
   up=document.getElementById('add').innerText="Update"  
   eth= this.parentNode;
}
function update(){
    
    eth.getElementsByTagName('input')[0].value=document.getElementById('firstname').value
        eth.getElementsByTagName('input')[1].value=document.getElementById('lastname').value
        document.getElementById('firstname').value=''
        document.getElementById('lastname').value=''
        document.getElementById('add').innerHTML='&oplus; Add'
}