let form = document.querySelector(".form");
let input1 = document.querySelector("#input");
let a = document.getElementById("a");

form.addEventListener("click", function (e) {
  e.preventDefault();

  if (input1.value == "amd") {
    stuff("#amd", input1.value);
  } else if (input1.value == "nvidia") {
    stuff("#nvidia", "nvidia");
  } else if (input1.value == "graphics") {
    stuff("#graphics", "graphics");
  } else if (input1.value == "") {
    stuff("#graphicscard", "no result found, but we have this ");
  } else {
    stuff("#graphicscard", "no result found, but we have this available");
  }
});

function stuff(params, name1) {
  a.setAttribute("href", params);
  a.textContent = name1;
}
