document.addEventListener('DOMContentLoaded', function() {
    // Verifica se estamos na página inicial
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        // Adiciona um evento de clique a todos os links internos
        const menuLinks = document.querySelectorAll('nav ul li a');

        menuLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // Previne o comportamento padrão apenas se o link for para um ID dentro da mesma página
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();

                    // Obtém o alvo do link (o id do elemento correspondente na página)
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        // Rola suavemente até o elemento alvo
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
});
