/*
//map
var result = arr.map((value) => value.Marks+10);
console.log(result);
//filter
var outDate = arr.filter((Fname)=>Fname.Marks>=25);
var outDate1 = outDate.map((n)=>n.name);
console.log(outDate1);
//reduce
Case 1: Example
var arr = [12,13,14,15];
var res = arr.reduce((acc,ele)=>acc+ele);
console.log(res);
Output:54
Case 2: Example
var arr = [12,13,14,15];
var res = arr.reduce((acc,ele)=>acc+ele, 1);
console.log(res);
*/
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){

  var result = JSON.parse(request.response);
    console.log(result);

//a)Get all the countries from Asia continent /region using Filter function
    var cun1 = result.filter((ele)=>ele.continents.includes('Asia'));
    console.log(cun1);


//b)Get all the countries with a population of less than 2 lakhs using Filter function
    var num2 = result.filter((num3)=>num3.population<200000);
    console.log(num2);


//c)Print the following details name, capital, flag using forEach function

    result.forEach((country) => {
        
        console.log(country.name);
        console.log(country.capital);
        console.log(country.flag);
    }); 

//d)Print the total population of countries using reduce function
    var totalPopulation=result.reduce((acc,pop)=>acc+pop.population,0);
    console.log(totalPopulation); 

//e)Print the country which uses US Dollars as currency.
    
    const usd = result.filter((country) =>{
        return (country.currencies && country.currencies.hasOwnProperty('USD'))
    });
    usd.forEach((country) =>{
    console.log(country.name.common);
});
}
