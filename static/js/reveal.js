const revealGroups = [
    { selector: '.activity', step: 80 },
    { selector: '.find-me-links a', step: 100 },
    { selector: '.web-snap', step: 80 },
    { selector: '.bio-text p', step: 80 },
];

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

revealGroups.forEach(({ selector, step }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.style.setProperty('--delay', `${i * step}ms`);
        observer.observe(el);
    });
});
