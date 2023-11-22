

document.addEventListener("DOMContentLoaded", function () {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const content = this.nextElementSibling;

      // Toggle the 'show' class to display/hide content
      content.classList.toggle('show');

      // Rotate the chevron icon
      this.classList.toggle('show');

      // Collapse other accordions
      accordionTriggers.forEach(otherTrigger => {
        if (otherTrigger !== this) {
          otherTrigger.nextElementSibling.classList.remove('show');
          otherTrigger.classList.remove('show');
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const ourStorySection = document.querySelector('.ourstory');

  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a class to trigger the slide-in animation
        ourStorySection.classList.add('slide-in-from-left');

        // Stop observing once animation is applied
        observer.unobserve(entry.target);
      }
    });
  });

  // Start observing the ourstory section
  observer.observe(ourStorySection);
});