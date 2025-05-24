   const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      let valid = true;

      // Reset previous errors
      [name, email, message].forEach((el) => el.classList.remove("is-invalid"));
      [nameError, emailError, messageError].forEach((el) => {
        el.classList.remove("fade-in");
        el.style.display = "none";
      });

      // Name validation
      if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        nameError.classList.add("fade-in");
        nameError.style.display = "block";
        valid = false;
      }

      // Email validation
      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!email.value.match(emailRegex)) {
        email.classList.add("is-invalid");
        emailError.classList.add("fade-in");
        emailError.style.display = "block";
        valid = false;
      }

      // Message validation
      if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        messageError.classList.add("fade-in");
        messageError.style.display = "block";
        valid = false;
      }

      // Success case
      if (valid) {
        alert("Message sent successfully!");
        form.reset();
      }
    });