let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let dropdowns = document.querySelectorAll(".dropdown");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
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
  let submenu = dropdown.querySelector('.submenu');
  
  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active'); 
  });
});

menuBtnChange();