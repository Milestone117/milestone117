let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('active');
});

const skillNames = document.querySelectorAll('.skill-name');

window.addEventListener('scroll', () => {
  skillNames.forEach((skillName) => {
    const rect = skillName.getBoundingClientRect();
    const scrollPercentage = Math.max(0, Math.min(1, (rect.bottom + rect.height / 3) / window.innerHeight));

    const translateX = -130 + scrollPercentage * 130;

    // Set the CSS variable for the ::before pseudo-element
    skillName.style.setProperty('--translateX', `${translateX}px`);
  });
});
document.addEventListener('mousemove', (event) => {
  const neonCursor = document.querySelector('.neon-cursor');
  neonCursor.style.left = event.clientX + 'px';
  neonCursor.style.top = event.clientY + 'px';
});
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let angle = 0;

setInterval(() => {
  angle = (angle + 5) % 360; // Increment angle
  document.documentElement.style.setProperty('--angle', `${angle}deg`);
}, 100);

ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
ScrollReveal().reveal(".projecct-card", { origin: "bottom" });