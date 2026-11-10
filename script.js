// Typing animation for the hero subtitle
const titles = [
  "Aspiring Software Developer",
  "Computer Science Student",
  "Tech Enthusiast"
];

const titleElement = document.querySelector("#typing");
if (titleElement) {
  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentTitle = titles[titleIndex];
    charIndex += deleting ? -1 : 1;
    titleElement.textContent = currentTitle.substring(0, charIndex);

    let speed = deleting ? 45 : 90;
    if (!deleting && charIndex === currentTitle.length) {
      deleting = true;
      speed = 1400;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    window.setTimeout(typeEffect, speed);
  }
  typeEffect();
}

// Reveal sections as they enter the viewport
const sections = document.querySelectorAll("section");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}
