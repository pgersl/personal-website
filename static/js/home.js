const activities = document.querySelectorAll('.activity');
const findMeLinks = document.querySelectorAll('.find-me-links a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

activities.forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 80}ms`);
  observer.observe(el);
});

findMeLinks.forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 100}ms`);
  observer.observe(el);
});