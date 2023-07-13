let name=['Ashish Shah', 'Rashmin Chhatrala', 'Yash Dubey',
    'Prakash Jain', 'Yashraj Singh', 'Viraj Sinha',
    'Rajesh Kumar', 'Mahesh Marwadi', 'Suresh Sahni',
    'Amar Vilas', 'Virdas Singhania', 'Rajeshwari Bindra',
    'Birendra Bhalerao', 'Virendra Bhupati', 'Bhupendra Singh',
    'Bhuvam Bam', 'Shri Raj', 'Prashant Kamle',
    'Kamlesh Tomar', 'Risabh Khare', 'Rishi Kohli',
    'Kunwar Kharwanda', 'Kartik Koli', 'Komal Jain', 'Kartikey Pandey']
function search(){

  input=document.getElementById('input').value.trim();
  div=document.getElementById('output');
  div.innerHTML="";
  inputLower=input.toLowerCase()
  div1=document.createElement('div')
  
  div.append(div1)
  if(input.length<2){
    return;
  }else{
    for(let names of name){
        namesLower=names.toLowerCase()
      if(namesLower.includes(inputLower)){

        p=document.createElement('p');
        p.innerHTML=`${names.slice(0,namesLower.indexOf(inputLower))}<span style="background-color:yellow">${names.slice(namesLower.indexOf(inputLower),namesLower.indexOf(inputLower)+input.length)}</span>${names.slice(namesLower.indexOf(inputLower)+input.length)}`
        
        
        div1.append(p)
        
      }
    }
  }

}