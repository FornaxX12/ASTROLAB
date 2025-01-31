document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("hidden");
  });

  const dropdowns = document.querySelectorAll(".dropdown > a");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function(event) {
      event.preventDefault();

      const parent = this.parentElement; 
      document.querySelectorAll(".dropdown").forEach((item) => {
        if (item !== parent) {
          item.classList.remove("active");
        }
      });
      parent.classList.toggle("active");
    });
  });
});