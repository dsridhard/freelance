  const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          navbar.classList.remove("navbar-transparent");
          navbar.classList.add("navbar-white");
        } else {
          navbar.classList.remove("navbar-white");
          navbar.classList.add("navbar-transparent");
        }
      });