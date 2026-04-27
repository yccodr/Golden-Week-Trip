import "./style.css";
import {
  createIcons,
  Calendar,
  Map,
  ChevronRight,
  StickyNote,
  Car,
  ExternalLink,
  MoveDown,
  Coffee,
  Hotel,
  MapPin,
  Navigation,
  Ship,
  Sparkles,
  Music,
  Users,
  UserPlus,
} from "lucide";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  createIcons({
    icons: {
      Calendar,
      Map,
      ChevronRight,
      StickyNote,
      Car,
      ExternalLink,
      MoveDown,
      Coffee,
      Hotel,
      MapPin,
      Navigation,
      Ship,
      Sparkles,
      Music,
      Users,
      UserPlus,
    },
  });

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
