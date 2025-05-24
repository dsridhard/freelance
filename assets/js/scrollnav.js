  const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.remove("navbar-transparent");
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-scrolled");
      }
    });