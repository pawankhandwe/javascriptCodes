a=+prompt('enter the unix timestamp')
date=new Date(a*1000);
option ={
    weekday:'long',
    month:'long',
    day:'numeric',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    timeZoneName:'short'
}
console.log(date.toLocaleDateString('en-En',option))
