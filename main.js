let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let dropdowns = document.querySelectorAll(".dropdown");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
  closeDropdowns();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
  closeDropdowns();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

dropdowns.forEach(dropdown => {
  let dropdownToggle = dropdown.querySelector('a');

  dropdownToggle.addEventListener('click', (e) => {
    if (!sidebar.classList.contains("open")) {
      return;
    }

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