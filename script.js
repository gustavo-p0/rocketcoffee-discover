const toggleButton = document.querySelector(".toggle");
const bar = document.querySelector("#bar");

toggleButton.addEventListener("click", (e) => {
  e.stopPropagation();
  bar.classList.toggle("active");
});
