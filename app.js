const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden,.grid-container,.grid-container-2,.grid-container-4,.grid-container-3,.container,.contact-container');

hiddenElements.forEach((el) => observer.observe(el));
