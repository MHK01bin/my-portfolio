const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change emoji icon
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀" : "🌙";
});