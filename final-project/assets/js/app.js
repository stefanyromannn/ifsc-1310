// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is connected and working!");

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        event.preventDefault(); // Prevent default anchor behavior
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Lazy Loading for Gallery Images
  const galleryImages = document.querySelectorAll(".gallery img");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Replace placeholder src with the actual image source
        img.removeAttribute("data-src");
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  });

  galleryImages.forEach(img => {
    imageObserver.observe(img);
  });

  const gallery = document.querySelector(".gallery .grid");
  const items = gallery.innerHTML;
  gallery.innerHTML = items; // This duplicates the gallery items

  const serviceCards = document.querySelectorAll(".services .card");
  serviceCards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});