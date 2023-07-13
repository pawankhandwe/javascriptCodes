let r=+prompt("enter row")
let c=+prompt("enter column")
for(let i=0;i<r;i++){
    let tro=document.createElement('tr')
    for(let j=0;j<c;j++){
    let td=document.createElement("td")
    tro.append(td)
    td.innerHTML=j+','+i
    }
    document.body.append(tro)
}
