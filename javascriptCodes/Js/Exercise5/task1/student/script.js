user=JSON.parse(sessionStorage.getItem('login'))
if(user==null){
  location.replace('../index.html')
}
document.getElementById('user').innerHTML=`${user.Name}&emsp;`
console.log(user)

function logout(){
    sessionStorage.removeItem('login')
    location.replace('../index.html')
}
courses=JSON.parse(localStorage.getItem('Courses'))
card=document.getElementById('card')
for (const i of user.course) {
    div=document.createElement('div')
    div.style="height: 60%; width:18rem"
    div.className='card'
    div.innerHTML=  `<img src=${courses[i].src} height="300px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${courses[i].name}</h5>
    </div>`
   card.append(div)
}

