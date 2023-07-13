str=prompt()
result=str.replace(/<\/?[\w]+>/g,"")
alert(result)