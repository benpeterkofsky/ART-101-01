let environmentTitle = "Benji's Snake Aquarium";
let environmentElements = ["snake", "fish", "a rock"];   

let mainEntity = {
    name: "snake"
    type: "soft border",
    mood: "nervous",
    isMoving: false,
      favoriteElement: environmentElements[1]
};

let elem = document.querySelector (."snake");"
elem.addEventListener("click", function() {
    mainEntity.isMoving = !mainEntity.isMoving;
    if (mainEntity.isMoving) {
        elem.style.transform = "translateX(100px)";
    } else {
        elem.style.transform = "translateX(0)";

const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  // Check current theme
  const currentTheme = document.documentElement.getAttribute("data-theme");
  
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    btn.textContent = "Switch to Night Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    btn.textContent = "Switch to Day Mode";
  }
});
const toggleswitch = document.querySelector(".toggle-switch input[type='checkbox']");
const currenttheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

if (currenttheme) {
    document.documentElement.setAttribute("data-theme", currenttheme);

    if (currenttheme === "dark") {
        toggleswitch.checked = true;

        function switchtheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            }
toggleswitch.addEventListener("change", switchtheme, false);
    }
