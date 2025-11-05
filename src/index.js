setInterval(() => {
  // Philippines
  let philippineElement = document.querySelector("#philippines");
  let philippineDateElement = philippineElement.querySelector(".date");
  let philippineTimeElement =
    philippineElement.parentElement.querySelector(".time");
  philippineDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  philippineTimeElement.innerHTML = moment()
    .tz("Asia/Manila")
    .format("h:mm:ss [<small>]A[</small>]");

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.parentElement.querySelector(".time");
  tokyoDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);

let selectedCityInterval;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let defaultCities = document.querySelector("#default-cities");
  let selectedCityDiv = document.querySelector("#selected-city");

  if (cityTimeZone === "/") {
    selectedCityDiv.style.display = "none";
    defaultCities.style.display = "block";
    clearInterval(selectedCityInterval);
    return;
  }

  defaultCities.style.display = "none";
  selectedCityDiv.style.display = "block";

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  clearInterval(selectedCityInterval);

  selectedCityDiv.innerHTML = `
          <div class="country">
            <div class="city">
              <div>
                <h2>${cityName}</h2>
                <div class="date"></div>
              </div>
            </div>
            <div class="time"></div>
          </div>`;

  selectedCityInterval = setInterval(() => {
    let cityTime = moment().tz(cityTimeZone);
    selectedCityDiv.querySelector(".date").innerHTML = cityTime.format(
      "dddd, MMMM Do, YYYY"
    );
    selectedCityDiv.querySelector(".time").innerHTML = cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }, 1000);
}

document.querySelector("#countries").addEventListener("change", updateCity);
