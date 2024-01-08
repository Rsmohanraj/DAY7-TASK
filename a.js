var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function(){
    var countryData =JSON.parse(request.response);
    const asia=countryData.filter((a)=>{
        if(a.region==='Asia'){
            return a.name;
      }
})
console.log(asia);}