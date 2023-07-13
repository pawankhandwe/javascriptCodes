box2_colors=[ 'red',  'green', 'yellow']
box4_color=[ 'red','green','yellow','pink','blue']
box1=document.getElementsByClassName('div')[2]
box2=document.getElementsByClassName('div')[1]
box4=document.getElementsByClassName('div')[3]
alert('Greetings Mr.x please choose the surprise box')
    box1_content=document.getElementById('box1')
    box1_content.innerHTML=`Click Me First`
    box1.addEventListener('click', activeBox4)
    this.disabled=true 
    let count=0
    box2.style=`background-color:${box2_colors[count%3]};`
    setInterval(() => {
        count++
        box2.style=`background-color:${box2_colors[count%3]};`
    }, 3000); 
function activeBox4(){
    box3_content=document.getElementById('box3')
    box3_content.innerHTML=`&emsp;Oops!`
    this.removeEventListener('click',activeBox4)
    let count=0
    document.addEventListener('keydown',(e)=>{
        (e.key==='ArrowUp')?count++:(e.key==='ArrowDown')?count--:(e.key==='ArrowRight')?count++:(e.key==='ArrowLeft')?count--:0;
        box4.style=`background-color:${box4_color[Math.abs(count)%5]}`
        })
        box4.style=`background-color:${box4_color[Math.abs(count)%5]}`
    setInterval(() => {
        count++
        box4.style=`background-color:${box4_color[Math.abs(count)%5]}`  
    }, 5000);
}