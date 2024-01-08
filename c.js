var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var countryData =JSON.parse(request.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}