const countries = [
    {
        image: "https://flagpedia.net/data/flags/w580/de.png",
        country: "Germany",
        population: "81,770,900",
        region: "Europe",
        capital: "Berlin"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/au.png",
        country: "Australia",
        population: "91,657,312",
        region: "Aus",
        capital: "Canberra"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/in.png",
        country: "India",
        population: "1,3179,984,812",
        region: "Asia",
        capital: "New Delhi"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/kr.png",
        country: "South Korea",
        population: "40,400,000",
        region: "Asia",
        capital: "Seoul"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/us.png",
        country: "United States of America",
        population: "323,947,000",
        region: "North America",
        capital: "Washington,D.C"
    }
];


function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.body.innerHTML = `<div class="container">
                               <div class="row" id="flagndetails">
                                     <div class="col-12 col-md-8 col-sm-6">
                                        <h1 id="where">Where in the world?</h1>
                                    </div>
                                     <div class="col-12 col-md-4 col-sm-6" id="btndiv">
                                         <button class=" btn" onclick="dark()" ><span class="btntext">Dark Mode</span></button>
                                    </div>
                                </div> 
                         </div>`   ;


fetch("https://restcountries.com/v3/all")
    .then((data) => data.json())
    .then((countries) => {
        console.log(countries)



        countries.forEach((data) => {

            document.querySelector("#flagndetails").innerHTML += `
 

   <div class="col-12 col-md-6 col-sm-6 col-lg-4 col-xl-3">
                  <div class="flagcontainer">
                       <img src=${data.flags[0]} class=flag>
                       
                            <div class="details">
                                <h1>${data.name.common}</h1> 
                                 <p class="sub-head">Population: ${data.population}</p>

                                 <p class="sub-head">Region:  ${data.region}</p>
                                 

                                  <p class="sub-head">Capital:  ${data.capital}</p>
                             </div>
                 
                    </div>
   </div>`

        })
    })





























