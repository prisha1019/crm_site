//calendar
document.addEventListener("DOMContentLoaded", function () {
  const applyBtn = document.querySelector("#apply-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const filters = document.querySelectorAll(".filters select");
  const calendarContainer = document.getElementById("calendar");

  applyBtn.addEventListener("click", () => {
    const selectedValues = Array.from(filters).map(sel => sel.value);
    console.log("Applied Filters:", selectedValues);
    alert("Filters applied (placeholder logic)");
  });

  resetBtn.addEventListener("click", () => {
    filters.forEach(sel => sel.selectedIndex = 0);
    console.log("Filters reset");
    alert("Filters reset");
  });

  // Render calendar with real dates
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Fill initial empty cells
  for (let i = 0; i < startWeekday; i++) {
    const day = document.createElement("div");
    day.className = "day";
    calendarContainer.appendChild(day);
  }

  // Fill actual days
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerHTML = `<div class="date">${i}</div>`;
    calendarContainer.appendChild(day);
  }
});
