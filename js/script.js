// ==========================================
// VENDA DIGITAL
// ANIMAÇÕES DOS ELEMENTOS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(
        ".course-card, .bonus-card, .testimonial"
    );

    // Verifica se o navegador suporta IntersectionObserver
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        cards.forEach(function (card) {
            observer.observe(card);
        });

    } else {

        // Fallback para navegadores antigos
        cards.forEach(function (card) {
            card.classList.add("show");
        });

    }

});
