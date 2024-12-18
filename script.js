document.addEventListener("DOMContentLoaded", () => {
    // Efeito de rolagem suave ao clicar nos links de navegação
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute("href");
            if (target.startsWith("#")) {
                document.querySelector(target).scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                window.location.href = target;
            }
        });
    });

    // Efeito de destaque nas seções ao rolar a página
    const sections = document.querySelectorAll("section");

    function highlightSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                section.style.backgroundColor = "#eaf6ff";
            } else {
                section.style.backgroundColor = "#fff";
            }
        });
    }

    window.addEventListener("scroll", highlightSection);
});
