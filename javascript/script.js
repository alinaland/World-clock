setInterval(function () {
  //Kiev
  let copenhagenElement = document.querySelector("#copenhagen");
  let copenhagenDateElement = copenhagenElement.querySelector(".date");
  let copenhagenTimeElement = copenhagenElement.querySelector(".time");
  let copenhagenTime = moment().tz("Europe/Copenhagen");
  copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY");
  copenhagenTimeElement.innerHTML = copenhagenTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  //Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  let jakartaDateElement = jakartaElement.querySelector(".date");
  let jakartaTimeElement = jakartaElement.querySelector(".time");
  let jakartaTime = moment().tz("Asia/Jakarta");
  jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
  jakartaTimeElement.innerHTML = jakartaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  //Almaty
  let almatyElement = document.querySelector("#almaty");
  let almatyDateElement = almatyElement.querySelector(".date");
  let almatyTimeElement = almatyElement.querySelector(".time");
  let almatyTime = moment().tz("Asia/Almaty");
  almatyDateElement.innerHTML = almatyTime.format("MMMM Do YYYY");
  almatyTimeElement.innerHTML = almatyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  //Nairobi
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  let nairobiTime = moment().tz("Africa/Nairobi");
  nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
  nairobiTimeElement.innerHTML = nairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
