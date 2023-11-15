var button = document.getElementById("mark-read-button");
var main = document.querySelector(".main");

button.addEventListener("click", () => {
  main.classList.toggle("active");
});
