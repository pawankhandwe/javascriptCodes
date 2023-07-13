setInterval(function time()
{
let d=new Date();

document.getElementById("time").innerHTML=d.toLocaleTimeString();
},1000)
setInterval(function date()
{
let d=new Date();
const o={
    year :"numeric",
    month:"short",
    day:"numeric"
}
document.getElementById("date").innerHTML=d.toLocaleDateString("en-uk",o);
},1000)
// stop watch

let h=0
let m=0
let s=0
let ms=0
document.getElementById('stop').disabled=false
document.getElementById('resume').disabled=false
document.getElementById('reset').disabled=false
document.getElementById('stime').innerHTML=" "+h.toString().padStart(2,0)+':'+m.toString().padStart(2,0)+':'+s.toString().padStart(2,0)+':'+ms.toString().padStart(2,0)
function stopwatch(){
    start();
    
    document.getElementById('start').disabled=true
    document.getElementById('stop').disabled=false
    document.getElementById('reset').disabled=false
}

function resume(){
    start();
    document.getElementById('resume').disabled=true
}
function reset(){
    h=0;m=0;s=0;ms=0;
    clearInterval(sw);
    document.getElementById('stime').innerHTML=" "+h.toString().padStart(2,0)+':'+m.toString().padStart(2,0)+':'+s.toString().padStart(2,0)+':'+ms.toString().padStart(2,0)
    document.getElementById('reset').disabled=true
    document.getElementById('start').disabled=false
    document.getElementById('resume').disabled=true
}
function start(){
    sw = setInterval(function(){
ms++
if(ms>=100){
    ms=0
    s++
}
if (s>=60){
s=0
m++
}
if(m>=60){
    m=0
    h++
}
document.getElementById('stime').innerHTML=" "+h.toString().padStart(2,0)+':'+m.toString().padStart(2,0)+':'+s.toString().padStart(2,0)+':'+ms.toString().padStart(2,0)
 }

,10)

}
function  stop(){
    clearInterval(sw)
    document.getElementById('resume').disabled=false
}