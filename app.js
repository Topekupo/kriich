const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
  });
});

const hiddenElements = document.querySelectorAll('.hidden,.grid-container,.grid-container-2,.grid-container-4,.grid-container-3,.container,.contact-container');

hiddenElements.forEach((el) => observer.observe(el));





let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        console.log('scroll down');
        navbar.classList.add('hid');
      } else {
        console.log('scroll up');
        navbar.classList.remove('hid');
      }
      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
});


