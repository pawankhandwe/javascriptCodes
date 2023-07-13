info=document.URL.match(/\w+=[\w|.|%|:|/-]+/g)
if (info == null) {
  location.replace("http://127.0.0.1:5500");
}else{
infoObj={}
info.forEach(element =>  { 
  infoObj[element.split('=')[0]]=element.split('=')[1]
  
});
fetch('https://www.googleapis.com/oauth2/v3/userinfo',{
  headers:{
    "Authorization":`Bearer ${infoObj['access_token']}`
  }
}).then(data=>data.json())
.then((info)=>{
  document.getElementById('usrname').innerHTML=info.name
  document.getElementById('img').src=info.picture

})}
history.pushState('','Document','http://127.0.0.1:5500/profile.html')
function signOut() 
{
  fetch("https://accounts.google.com/o/oauth2/revoke?token="+infoObj.access_token)
.then(()=>{
  location.href = "http://127.0.0.1:5500";

})
}