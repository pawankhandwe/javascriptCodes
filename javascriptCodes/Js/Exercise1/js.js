function p2(){
    let num = +prompt("Enter the row :");
    let ptn="";
    for (let i=0;i<num;i++){
        for(let j=0;j<num;j++){
        
        if (i==0||i==num-1||j==0||j==num-1){
            ptn+="*&ensp;";
        }
        else {
            ptn+="&emsp;";
        }
        }
        ptn+="<br>";
    }
    document.getElementById('test').innerHTML=ptn;
    
}
function p1(){
    let num = +prompt("Enter the row :");
    let ptn= "";
    for (let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            if(j==i||j == num-(i+1)){
                   ptn+="*&ensp;";
            }
            else{
                ptn+="&emsp;";
            }
                
        }
        ptn+="<br>"
    }
    document.getElementById('test').innerHTML=ptn;
}
function p3(){
    let num = +prompt("Enter the row :");
    let ptn ="";
    let a=Math.floor(num/2);
    let b=Math.floor(num/2);
    for(let i=0;i<num;i++,a++,b--){
        for(let j=0;j<num;j++){
            if(i<=num/2){
                if(j==a||j==b){
                    ptn+="*&ensp;";
                }
                else{
                    ptn+="&emsp;";

                }
            
            }
            else{
                if(j==a-num+1||j==num-1+b){
                    ptn+="*&ensp;";
                }
                else{
                    ptn+="&emsp;";

                }
                
            }
            
            
        }ptn+="<br>"
    }
    document.getElementById('test').innerHTML=ptn;
}
function p4(){
    let num = +prompt("Enter the row :");
    let ptn="";
    if(num%2!=0){
    for (let i=0;i<num;i++){
        if(i<=(num/2))
        for(let j=0;j<i+1;j++){
            ptn+="*&ensp;";
        }else{
            for(let j=0;j<num-i;j++){
                ptn+="*&ensp;";
            }
        }
        ptn+="<br>";
    }
}else{
    alert('Give the odd number!')
}
document.getElementById('test').innerHTML=ptn;
}
p5=()=>{
    
    let ptn= "";
    for (let i=0,a=1;i<9;i++){
        for(let j=0,b=a;j<5;j++,b++){
            if(j>=i||j >= 9-(i+1)){
                   ptn+=b+"&ensp;";
            }
            else{
                ptn+="&ensp;";
            }
                
        }
        ptn+="<br>"
    }
    document.getElementById('test').innerHTML=ptn;
}


            
            
    