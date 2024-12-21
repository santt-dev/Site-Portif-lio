// Seleção de elementos
const themeToggleBtn = document.createElement('button');
themeToggleBtn.textContent = "🌙";
themeToggleBtn.style.position = "fixed";
themeToggleBtn.style.bottom = "20px";
themeToggleBtn.style.right = "20px";
themeToggleBtn.style.padding = "10px";
themeToggleBtn.style.borderRadius = "50%";
themeToggleBtn.style.border = "none";
themeToggleBtn.style.backgroundColor = "#0078d7";
themeToggleBtn.style.color = "#fff";
themeToggleBtn.style.cursor = "pointer";
themeToggleBtn.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
document.body.appendChild(themeToggleBtn);

// Alternar entre modo claro e escuro
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
});

// Adicionar classe dark-theme para estilo no modo escuro
const style = document.createElement('style');
style.innerHTML = `
    .dark-theme {
        background-color: #121212;
        color: #e0e0e0;
    }
    .dark-theme header {
        background-color: #1f1f1f;
    }
    .dark-theme footer {
        background-color: #1f1f1f;
    }
    .dark-theme section {
        background-color: #1f1f1f;
        color: #e0e0e0;
    }
    .dark-theme a {
        color: #bb86fc;
    }
`;
document.head.appendChild(style);

// Scroll Suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

const fadeInStyle = document.createElement('style');
fadeInStyle.innerHTML = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(fadeInStyle);

const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = "⬆️";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "80px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.border = "none";
backToTopBtn.style.backgroundColor = "#0078d7";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
