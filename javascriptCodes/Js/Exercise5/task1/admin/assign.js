user=JSON.parse(sessionStorage.getItem('login'))
if(user==null){
  location.replace('../index.html')
}
document.getElementById('user').innerHTML=`${user.Name}&emsp;`
function logout(){
    sessionStorage.removeItem('login')
    location.replace('../index.html')
}
student=JSON.parse(localStorage.getItem('Student'))
div= document.getElementById('student');
for( let i in student){
        a=document.createElement('div')
        a.id=`${i}`
        a.addEventListener('click', assign)
        a.innerHTML=`${student[i].Name} &#8964;<br>`
        div.append(a)
    }


function assign(){
let course=JSON.parse(localStorage.getItem('Courses'))
 div1=document.createElement('div')
for(let i in course){
    div=document.createElement('div')
    btn=document.createElement('button')
   
    div.innerHTML=`${course[i].name}`
   
    if(student[this.id].course.includes(i)){
    btn.innerHTML="Remove"
    btn.addEventListener('click',remove)
    btn.style='background-color:red;color: black'
    }else{
        btn.innerHTML="Add"
        btn.addEventListener('click', add)
        btn.style='background-color:green;color: white'
    }
    btn.id=i
   
    div1.append(div)
    div.append(btn)
    
}
this.append(div1)
this.removeEventListener('click',assign)
this.addEventListener('click',nassign)

}

function add(e){
     e.stopPropagation();
   if(!(student[this.parentNode.parentNode.parentNode.id].course.includes(this.id))){
   student[this.parentNode.parentNode.parentNode.id].course.push(this.id);}
   localStorage.setItem("Student",JSON.stringify(student))
    this.innerHTML='Remove'
    this.style="background-color:red ;color:black;"
    this.removeEventListener('click',add)
    this.addEventListener('click',remove)

}
function remove(e){
 e.stopPropagation();
 student[this.parentNode.parentNode.parentNode.id].course.splice(student[this.parentNode.parentNode.parentNode.id].course.indexOf(this.id),1);
 localStorage.setItem('Student',JSON.stringify(student))
 this.innerHTML='add'
 this.style='background-color:green;color:white'
 this.removeEventListener('click',remove)
 this.addEventListener('click',add)
}
function nassign(){ 
    console.log()
    this.removeChild(this.lastElementChild)
    this.removeEventListener('click',nassign)
    this.addEventListener('click',assign)
}
function back() {
    location.replace('index.html')
}
