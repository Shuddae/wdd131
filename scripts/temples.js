const $year = document.querySelector("#currentyear");
const $lastModified = document.querySelector("#lastModified");
const $btn = document.querySelector("#btn");
const $navBar = document.querySelector("#navBar");

const today = new Date();

$year.innerHTML = today.getFullYear();
$lastModified.innerHTML = "Last Modification: ${document.lastModified}";

$btn.addEventListener("click", () => {
  $navBar.classList.toggle("display");
  if ($navBar.classList.contains("display")) {
    $btn.textContent = "⛌";
  } else {
    $btn.textContent = "☰";
  }
});

