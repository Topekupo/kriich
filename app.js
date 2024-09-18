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


function closeMenu() {
  document.getElementById("menuToggleCheckbox").checked = false;
}


document.addEventListener('click', function(event) {
  var menu = document.getElementById("menu");
  var toggle = document.getElementById("menuToggle");


  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
  }
});

let lastScrolly = 0
const navbar = document.querySelector('nav')
window.addEventListener('scroll', () => {
  const currentScrolly = window.scrollY
  if (currentScrolly > lastScrolly) {
    console.log('scroll Down')
    navbar.classList.add('hid')
  } else{
    console.log('scroll up')
    navbar.classList.remove('hid')
  }
  lastScrolly = currentScrolly
})

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a ');

window.onscroll =() => {
  sections.forEach(sec => {
       let top =window.scrollY;
       let offset =sec.offsetTop ;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height) {
         navlinks.forEach(links => {
           links.classList.remove('active');
           document.querySelector('header nav a [href*='+ id +']').classList.add('active');
         });
       };
  });
};
