let set = new Set()
function add(){
    if(document.getElementById('add').textContent=='Update'){
        update()
         return;
    }
   addrow(document.getElementById('firstname').value,document.getElementById('lastname').value)
}
function render(){
    p=[{firstname:'Rehan',lastname:'shaikh'},
{firstname:'Sagar', lastname:'Adesara'},
{firstname:'Kerav',lastname:'Gamit'},
{firstname:'karnav',lastname:'Gamit'},
{firstname:'Pavan',lastname:'khandwe'},
{firstname:'Bhavik',lastname:'Gujjar'},
{firstname:'Namrita',lastname:'vyas'},
{firstname:'parth',lastname:'mendapare'},
{firstname:'Bhayabhai',lastname:'Sisodia'},
{firstname:'Samrath',lastname:''},
{firstname:'Abhinish',lastname:'Tiwari'}]
for(let i of p){
     addrow(i.firstname,i.lastname)
}
}
function dele(){
    if(document.getElementById('add').textContent=='Update'){
        document.getElementById('add').innerHTML='&oplus; Add'
        document.getElementById('firstname').value=''
        document.getElementById('lastname').value=''
    }
    set.delete(this.parentNode.getElementsByTagName('input')[0].value+' '+this.parentNode.getElementsByTagName('input')[1].value)
    this.parentNode.remove()
}
function edit(){
   let fn=this.parentNode.getElementsByTagName('input')[0].value;
   let ln=this.parentNode.getElementsByTagName('input')[1].value;
   set.delete(fn+' '+ln)
   document.getElementById('firstname').value=fn;
   document.getElementById('lastname').value=ln;
   document.getElementById('add').innerText="Update"  
   eth= this.parentNode;
}
function update(){

    fname=document.getElementById('firstname').value
    lname=document.getElementById('lastname').value
    if(set.has(fname+' '+lname)){
        alert(`${fname} ${lname} already exist`)
       return;
    }else{
    set.add(fname+' '+lname)
    eth.getElementsByTagName('input')[0].value=fname
    eth.getElementsByTagName('input')[1].value=lname
    document.getElementById('firstname').value=''
    document.getElementById('lastname').value=''
    document.getElementById('add').innerHTML='&oplus; Add'
}
}
function rander(){

}
function addrow(fname,lname){
    
    if(set.has(fname+' '+lname)){
        alert(`${fname} ${lname} already exist`)
       return;
    }else{
    set.add(fname+' '+lname)
    console.log(set);
    let firstname=fname
    let lastname=lname
   let div=document.createElement("div")
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
    document.getElementById('lastname').value=''}
}
