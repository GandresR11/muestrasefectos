document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio Interactivo cargado.");

    // Ejemplo de JavaScript: Añadir una clase al hacer clic para un efecto temporal.
    // Esto es útil si el efecto no es un simple hover.

    const pushBtn = document.querySelector('.push-3d-btn');

    if (pushBtn) {
        pushBtn.addEventListener('mousedown', () => {
            // El efecto ya está en CSS con :active, pero JS se usaría para
            // un efecto de "ripple" o vibración que dure un poco más.
            // Para este ejemplo simple, nos enfocamos en el uso del mouse.
        });

        // Ejemplo de un efecto más complejo (e.g., animación de partículas al hacer clic)
        // function createRipple(event) {
        //     const button = event.currentTarget;
        //     const circle = document.createElement('span');
        //     const diameter = Math.max(button.clientWidth, button.clientHeight);
        //     const radius = diameter / 2;

        //     circle.style.width = circle.style.height = `${diameter}px`;
        //     circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
        //     circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
        //     circle.classList.add('ripple');

        //     const ripple = button.getElementsByClassName('ripple')[0];

        //     if (ripple) {
        //         ripple.remove();
        //     }

        //     button.appendChild(circle);
        // }

        // pushBtn.addEventListener('click', createRipple);
    }

    // Código para el efecto de transición al desplazarse (Scroll-based animations)
    const sections = document.querySelectorAll('.effect-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade una clase para iniciar una animación al entrar en la vista
                entry.target.classList.add('is-visible');
                // Opcional: deja de observar para que no se active de nuevo
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% de la sección es visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
