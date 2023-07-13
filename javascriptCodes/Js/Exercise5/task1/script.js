
function reg(){
  document.getElementById('login').hidden=true
  document.getElementById('signup').hidden=false
}

function signUp(e){
  e.preventDefault();
  
  let name=document.getElementById('Name').value
  let password=document.getElementById('password').value
  let username=document.getElementById('Username').value
if(password==document.getElementById('password1').value){
if(document.getElementsByName('User')[0].checked){
    student=JSON.parse(localStorage.getItem('Student'))
    if(student==null){
      localStorage.setItem('Student',JSON.stringify({}))
      student=JSON.parse(localStorage.getItem('Student'))
    }
    if(Object.keys(student).includes(username)){
      alert('user id is already enrolled')
    }else{
    student[username]={'Name':name,
  'password':password,'course':[]}
    localStorage.setItem("Student",JSON.stringify(student))
    alert('sign up successfully')
    location.reload()}
}else{
    admin=JSON.parse(localStorage.getItem('Admin'))
    if(admin==null){
      localStorage.setItem("Admin",JSON.stringify({}))
      admin=JSON.parse(localStorage.getItem('Admin'))
    }
    if(Object.keys(admin).includes(username)){
      alert('user id is already enrolled')
    }else{
    admin[username]={'Name':name,
    'password':password}
       localStorage.setItem('Admin',JSON.stringify(admin))
       alert('sign up successfully')
       location.reload()
    }
}
}else{
  alert('please enter the same password')
}
}
function login(e){
  e.preventDefault()
  let username =document.getElementById('UserInput').value
  let password =document.getElementById('userPassword').value
   try{ if(document.getElementsByName('loginUser')[0].checked){
       let student=JSON.parse(localStorage.getItem('Student'))
       let stdnt=student[username]
        if(stdnt['password']==password){
           sessionStorage.setItem('login',JSON.stringify(stdnt))
            alert('login successfully')
            location.replace('student/index.html')
        }
        else{
          alert('user is not authorized')
        }
    }
    else{
      let admin =JSON.parse(localStorage.getItem('Admin'))
      let admn=admin[username]
      if(admn['password']==password){
        sessionStorage.setItem('login',JSON.stringify(admn))
        alert('login successfully')
        location.replace('admin/index.html') 
      } else{
        alert('user is not authorized')
      }
    }
}
catch(err){
  alert('user is not autorized')
}
}