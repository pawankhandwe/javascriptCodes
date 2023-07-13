d1=prompt()
d2=prompt()
if(d1.includes('-')||d2.includes('-')){
d3=d1.split('-')
d4=d2.split('-')
d4.reverse()
d3.reverse()
}else{
    d3=d1.split('/')
    d4=d2.split('/')
    d4.reverse()
    d3.reverse()}
date1= new Date(d3.join('/'))
date2=new Date(d4.join('/'))
day=Math.abs(date1-date2)/(24*3600*1000)
year=Math.floor(day/365)
month=Math.floor(day/30.416)
hour=day*24
min=hour*60
weeks=Math.floor(day/7)
console.log(`${year} years ${Math.floor((day%365)/30.416)} months ${Math.floor((day%365)%30.416)} days`)