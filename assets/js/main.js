document.addEventListener("DOMContentLoaded", function () {
        window.location.hash = "#home";
      });
      function toggleMenu() {
        document.getElementById("navMenu").classList.toggle("show");
      }

      function closeMenu() {
        document.getElementById("navMenu").classList.remove("show");
      }
      // typing animation
      const words = [" Web Developer ", "  Designer  ", " Backend Developer  "];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 100;
      const eraseSpeed = 50;
      const delayBetweenWords = 2000;
      const typewriterElement = document.getElementById("typewriter");

      function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
          typewriterElement.textContent = currentWord.substring(0, charIndex--);
        } else {
          typewriterElement.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, typeSpeed);
        } else {
          setTimeout(typeEffect, isDeleting ? eraseSpeed : typeSpeed);
        }
      }

      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeEffect, 500);
      });
      document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".nav_menu li a");

        navLinks.forEach((link) => {
          link.addEventListener("click", function () {
            navLinks.forEach((l) => l.parentElement.classList.remove("active"));
            this.parentElement.classList.add("active");
          });
        });
      });


      