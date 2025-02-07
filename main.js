const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".bx-search");
const dropdowns = document.querySelectorAll(".dropdown");

let startTouchX = 0;
let endTouchX = 0;

closeBtn.addEventListener("click", toggleSidebar);
searchBtn.addEventListener("click", toggleSidebar);

sidebar.addEventListener("touchstart", handleTouchStart);
sidebar.addEventListener("touchend", handleTouchEnd);

function toggleSidebar() {
  sidebar.classList.toggle("open");
  menuBtnChange();
  closeDropdowns();
}

function handleTouchStart(e) {
  startTouchX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  endTouchX = e.changedTouches[0].clientX;
  const swipeDistance = Math.abs(startTouchX - endTouchX);

  if (swipeDistance > 100) {
    if (startTouchX > endTouchX && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      menuBtnChange();
    } else if (endTouchX > startTouchX && !sidebar.classList.contains("open")) {
      sidebar.classList.add("open");
      menuBtnChange();
    }
  }
}

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

dropdowns.forEach(dropdown => {
  const dropdownToggle = dropdown.querySelector('a');

  dropdownToggle.addEventListener('click', (e) => {
    if (!sidebar.classList.contains("open")) return;

    e.preventDefault();
    dropdown.classList.toggle('active');
  });
});

function closeDropdowns() {
  if (!sidebar.classList.contains("open")) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
}

menuBtnChange();