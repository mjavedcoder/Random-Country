let searchCountry = document.getElementById("Country");
let searchButton = document.getElementById("btn");
let color = function chBackcolor(color) {
  document.body.style.background = color;
};
let colorBox = function chBackcolor(color) {
  document.body.style.background = color;
};

const randomCountry = () => {
  let nameOfCountry = searchCountry.value;
  let url = `https://restcountries.com/v3.1/name/${nameOfCountry}?fullText=true`;
  colorBox("darkkhaki");
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((values) => {
      console.log(values[0]); //This is returning an object
      console.log(values[0].capital[0]);
      console.log(values[0].continents[0]);
      console.log(values[0].flags.svg);
      console.log(values[0].name.common);
      console.log(values[0].population);

      //   console.log(Object.keys(values[0].currencies)); //Returning ['PKR']

      //   console.log(values[0].currencies.PKR.name); //This is returning Pakistani Rupee

      console.log(Object.keys(values[0].currencies)[0]); //Returning PKR

      console.log(values[0].currencies[Object.keys(values[0].currencies)].name); //This also returning Pakistani Rupee

      console.log(values[0].borders.toString().split(",").join(","));

      console.log(
        Object.values(values[0].languages).toString().split(",").join(",")
      );

      //   document.getElementsByClassName(
      //     "flag"
      //   )[0].innerHTML = `<img src="${values[0].flags.svg}" id="flagIMG">`; //This is the way to select the html's elements by using classes .As classes return us an array so use [0] to select the first element of that array.For this the div of id("flag") will be replaced with class of "flag"

      flag.innerHTML = `<img src="${values[0].flags.svg}" class="flagIMG">
          <h2>${values[0].name.common}</h2>
          <div class="box">
          <h3>Capital:</h3>
          <span>${values[0].capital[0]}<span>
          </div>
          <div class="box">
          <h3>Continent:</h3>
          <span>${values[0].continents[0]}<span>
          </div>
         <div class="box">
          <h3>Population:</h3>
          <span>${(values[0].population / 1000000).toFixed(1)} Millions<span>
          </div>
          <div class="box">
          <h3>Currency:</h3>
          <span>${
            values[0].currencies[Object.keys(values[0].currencies)].name
          } (${Object.keys(values[0].currencies)[0]})<span>
          </div>
          <div class="box">
          <h3>Borders:</h3>
         <span >${values[0].borders.toString().split(",").join(",")}<span>
         </div>
          <div class="box">
          <h3>Languages:</h3>
          <span>${Object.values(values[0].languages)
            .toString()
            .split(",")
            .join(",")}<span>
          </div>
          </div>
          `;
    })
    .catch(() => {
      if (nameOfCountry.length === 0) {
        flag.innerHTML = `<h4>This cannot be empty !<h4>`;
        color("red");
      } else {
        flag.innerHTML = `<h4>Please,enter valid country name<h4>`;
        color("red");
      }
    });
};

//============Adding Event-Listener here...!==================//

searchCountry.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    randomCountry(); //Here added the "Enter" key listener.Whenever the enter key will be pressed it will call the randomCountry.
  }
});

searchButton.addEventListener("click", randomCountry);
