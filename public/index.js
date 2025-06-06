// Mobile menu functionality
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  // Toggle mobile menu
  navLinks.classList.toggle("active");

  // Burger animation
  burger.classList.toggle("toggle");
});

// Highlight current page in navigation
const currentPage = location.pathname.split("/").slice(-1)[0];
const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {
  if (item.getAttribute("href") === currentPage) {
    item.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Show the success message
      successMessage.style.display = "block";

      // Reset the form
      form.reset();

      // Hide the message after 5 seconds (optional)
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    });
  }
});
