

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