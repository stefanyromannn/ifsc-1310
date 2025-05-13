document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is connected and working!");

  
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        event.preventDefault(); 
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

 
  const galleryImages = document.querySelectorAll(".gallery img");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; 
        img.removeAttribute("data-src");
        observer.unobserve(img); 
      }
    });
  });

  galleryImages.forEach(img => {
    imageObserver.observe(img);
  });

  const gallery = document.querySelector(".gallery .grid");
  const items = gallery.innerHTML;
  gallery.innerHTML = items; 

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