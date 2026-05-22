console.log("Portfolio Loaded Successfully");

const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");

toggleBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("hidden");

  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
  toggleBtn.setAttribute("aria-expanded", !isExpanded);
});
