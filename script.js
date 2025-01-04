// Smooth scroll for anchor links (optional, browsers support native scroll behavior)
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Dynamic text content update
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
      text.textContent = "Full-Stack Developer";
  }, 0);

  setTimeout(() => {
      text.textContent = "Software Engineer";
  }, 3000);

  setTimeout(() => {
      text.textContent = "Programmer";
  }, 6000);

  setTimeout(() => {
      text.textContent = "UI/UX Developer";
  }, 9000);
};

// Initialize text transitions and repeat every 12 seconds
textLoad();
setInterval(textLoad, 12000);

   // Get all navigation links and sections
   const navLinks = document.querySelectorAll('.nav-link');

   // Function to handle scroll and highlight active section
   const handleScroll = () => {
       const scrollPosition = window.scrollY + window.innerHeight / 2;

       // Loop through sections to find the one in view
       navLinks.forEach(link => {
           const section = document.querySelector(link.getAttribute('href'));
           if (
               section.offsetTop <= scrollPosition &&
               section.offsetTop + section.offsetHeight > scrollPosition
           ) {
               navLinks.forEach(link => link.classList.remove('active'));
               link.classList.add('active');
           }
       });
   };

   // Scroll Event Listener
   window.addEventListener('scroll', handleScroll);

   // Initial check for active section
   handleScroll();

  