document.addEventListener("DOMContentLoaded", () => {
  // Counter Animation
  const counters = document.querySelectorAll('.stat-number');

  const countUp = (element, target) => {
    let currentCount = 0;
    const increment = target / 200; // Adjust this number to control the speed

    const updateCounter = () => {
      if (currentCount < target) {
        currentCount += increment;
        element.innerText = Math.ceil(currentCount);
        requestAnimationFrame(updateCounter);
      } else {
        element.innerText = target;
      }
    };

    updateCounter();
  };

  // Start counting up for each counter element
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    countUp(counter, target);
  });

  // Responsive Navbar
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle navigation visibility
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active'); // Use a class for toggling instead of inline styles
  });

  // Hide navigation after clicking a link
  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active'); // Use class to hide instead of inline styles
    }
  });
});
