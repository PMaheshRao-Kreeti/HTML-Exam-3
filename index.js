document.addEventListener("DOMContentLoaded", () => {
  var hamburger = document.querySelector("#ham-icon");
  hamburger.addEventListener("click", function () {
    var ul = document.querySelector("ul");
    if (ul.style.left == "" || ul.style.left == "-100%") {
      ul.style.left = 0;
      hamburger.classList.remove("fa", "fa-bars");
      hamburger.classList.add("fa-solid", "fa-xmark");
    } else {
      ul.style.left = "-100%";
      hamburger.classList.remove("fa-solid", "fa-xmark");
      hamburger.classList.add("fa", "fa-bars");
    }
  });
});