const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    body.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙 Dark Mode";
  } else {
    body.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }
});
