document.addEventListener("DOMContentLoaded", () => {
  // Log a message when the page loads
  console.log("GoodGuyz Remodeling website loaded successfully!");

  // Smooth scrolling for navigation links
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

  // Lazy loading for gallery images
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
});