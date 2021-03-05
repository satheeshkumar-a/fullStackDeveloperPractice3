var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)//true which will not affect the execution if it fails(unblocking statement)
request.send();
request.onload=function(){
    var countrydata=JSON.parse(this.response)

//Get all the countries from Asia continent / “region” using Filter method
var resultAsiaCountry=countrydata.filter(function (country){
    return country.region==="Asia"  
} )
console.log(resultAsiaCountry)

//Get all the countries with population of less than 2 lacs using Filter method
    var populationLessthanTwolaks = countrydata
                                    .filter(country => country.population<200000)
console.log(populationLessthanTwolaks)

//Print the following details name, capital, flag using forEach.
var countryDetails= []
countrydata.forEach((country,index) => {
    countryDetails[index]=(country.name+" "+country.capital+" "+country.flag)   
});
console.log(countryDetails)

//Print the total population of countries using the reduce method.
var totalPopulation= countrydata.reduce(function (accumulator,currentValue) {
    return accumulator+currentValue.population;     
},0);
console.log("The Total Population is: "+ totalPopulation) 

//Print the country which uses US Dollars as currency
var currencyDollar=countrydata.filter(function (country){
    for (i=0;i<country.currencies.length;i++){
        if(country.currencies[i].code ==='USD'){
            return country
        }
    }
   })
console.log(currencyDollar)
}







