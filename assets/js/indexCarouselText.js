  const keywords = [
      "Unforgettable Holidays",
      "Smart Travel Solutions",
      "Events & Umrah Experts",
      "Senior Citizen Tours",
      "Luxury Stays & Weddings"
    ];

    const descriptions = [
      "Luxurious stays, exotic tours, and all-in-one travel packages.",
      "Flights, Forex, Visa, and Travel Insurance under one roof.",
      "MICE, destination weddings, spiritual Umrah tours and more.",
      "Comfortable, curated experiences for senior travelers.",
      "Exclusive venues and premium wedding arrangements."
    ];

    const carouselItems = document.querySelectorAll("#carousel-inner .carousel-item");
    const keywordElement = document.getElementById("dynamic-keyword");
    const descElement = document.getElementById("dynamic-desc");

    let index = 0;

    setInterval(() => {
      // Hide all carousel items
      carouselItems.forEach(item => item.classList.remove("active"));

      // Activate current image
      carouselItems[index].classList.add("active");

      // Update text content
      keywordElement.innerText = keywords[index];
      descElement.innerText = descriptions[index];

      // Trigger fade-up animation
      keywordElement.classList.remove("fade-up");
      descElement.classList.remove("fade-up");

      // Force reflow to restart animation
      void keywordElement.offsetWidth;
      void descElement.offsetWidth;

      keywordElement.classList.add("fade-up");
      descElement.classList.add("fade-up");

      // Next slide index
      index = (index + 1) % keywords.length;
    }, 4000);