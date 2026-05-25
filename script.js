const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const reveals = document.querySelectorAll('.reveal');

function checkReveals() {

  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;

    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 120) {
      reveal.classList.add('active');
    }

  });

}

window.addEventListener('scroll', checkReveals);

checkReveals();
