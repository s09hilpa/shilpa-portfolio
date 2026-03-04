const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", function () {
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
  } else {
    extraInfo.style.display = "none";
  }
});
