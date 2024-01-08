var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send();
request.onload = function(){
    var countryData =JSON.parse(request.response);
    for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code==="USD")
       {
           console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
       }
     }
    }