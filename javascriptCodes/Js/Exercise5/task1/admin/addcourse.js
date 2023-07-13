user=JSON.parse(sessionStorage.getItem('login'))
if(user==null){
  location.replace('../index.html')
}
function addCourse(e){
    e.preventDefault()
    course=JSON.parse(localStorage.getItem('Courses'))
    if(course==null){
        localStorage.setItem('Courses',JSON.stringify({}))
        course=JSON.parse(localStorage.getItem('Courses'))
    }
    course[document.getElementById('cId').value]={
      'name':document.getElementById('name').value,
      'src':document.getElementById('src').value
    }
    localStorage.setItem('Courses',JSON.stringify(course))
    location.replace('index.html')
}
function back(){
  location.replace('index.html')
}