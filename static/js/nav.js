document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const navLinks = document.querySelectorAll(".nav-link");
    console.log("Current Path:", currentPath);
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "");
        console.log("Link Path:", linkPath);
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});