const themeBtn = document.querySelectorAll("#theme");
const closeButton = document.querySelector("#back");

let mode = "light";

themeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (mode === "dark") {
      mode = "light";
      body.setAttribute("id", "light");
    } else {
      mode = "dark";
      body.setAttribute("id", "dark");
    }
  });
});

const backBtn = document.getElementById('back');
if (backBtn) {
backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
})}
