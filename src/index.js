//Philippines
setInterval(() => {
  let philippineElement = document.querySelector("#philippines");
  let philippineDateElement = document.querySelector(".date");
  let philippineTimeElement = document.querySelector(".time");
  philippineDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  philippineTimeElement.innerHTML = `${moment()
    .tz("Asia/Manila")
    .format("h:mm:ss [<small>]A[</small>]")}`;

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.parentElement.querySelector(".time");
  tokyoDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = `${moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]")}`;
}, 1000);
