import { createIcons } from "lucide";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  createIcons();

  // Tab switching function
  (window as any).switchTab = function (dayNumber: number) {
    document
      .querySelectorAll(".tab-content")
      .forEach((el: Element) => el.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach((el: Element) => el.classList.remove("active"));
    const targetDay = document.getElementById("day-" + dayNumber);
    if (targetDay) {
      targetDay.classList.add("active");
    }
    const buttons = document.querySelectorAll(".tab-btn");
    if (buttons[dayNumber - 1]) {
      buttons[dayNumber - 1].classList.add("active");
    }
  };
});
