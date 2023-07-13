user=JSON.parse(sessionStorage.getItem('login'))
if(user==null){
  location.replace('../index.html')
}
document.getElementById('user').innerHTML=`${user.Name}&emsp;`
function logout(){
    sessionStorage.removeItem('login')
    location.replace('../index.html')
}
courses=JSON.parse(localStorage.getItem('Courses'))
card=document.getElementById('card')
for (const i in courses) {
  console.log(i)
    div=document.createElement('div')
    div.style="height: 60%; width:18rem"
    div.className='card'
    div.innerHTML=  `<img src=${courses[i].src} height="300px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${courses[i].name}</h5>
      <a href="assign.html" class="btn btn-primary">Assign course</a>
      <a class='btn btn-danger' onclick="cdelete(this)" id='${i}'>Delete</a>
    </div>`
   card.append(div)
}
function cdelete(e){
  delete courses[e.id]
  localStorage.setItem('Courses',JSON.stringify(courses))
  student=JSON.parse(localStorage.getItem('Student'))
  for(let i in student){
    if(student[i].course.includes(e.id)){
      student[i].course.splice(student[i].course.indexOf(e.id),1) 

    }
  }
  localStorage.setItem('Student',JSON.stringify(student))
  location.reload()
  
}