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
// --- JS para la Muestra 08: Efecto Ripple ---
function createRipple(event) {
    const button = event.currentTarget;
    
    // Crear el elemento de onda (ripple)
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Calcular la posición del clic
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`;
    
    circle.classList.add('ripple');

    // Asegurarse de que solo haya una onda activa a la vez
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Añadir el listener al botón Ripple
const rippleBtn = document.querySelector('.ripple-btn');
if (rippleBtn) {
    rippleBtn.addEventListener('click', createRipple);
}
// --- JS para Pop-ups y Modales ---
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantén tu código JS anterior aquí, como el createRipple y IntersectionObserver)

    // Función principal para manejar la apertura y cierre de diálogos
    const openBtns = document.querySelectorAll('.open-dialog-btn');
    const closeBtns = document.querySelectorAll('.close-dialog-btn');
    const dialogContainers = document.querySelectorAll('.dialog-container');

    // 1. Abrir Diálogo
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetSelector = e.currentTarget.getAttribute('data-dialog-target');
            const targetDialog = document.querySelector(targetSelector);
            
            if (targetDialog) {
                targetDialog.classList.add('open');
                // Evita que el scroll de la página mueva el contenido bajo el modal
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    // 2. Cerrar Diálogo (Botón dentro del contenido)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dialog = e.currentTarget.closest('.dialog-container');
            if (dialog) {
                dialog.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });

    // 3. Cerrar Modal al hacer clic fuera del contenido (Solo aplica a Modales)
    dialogContainers.forEach(container => {
        container.addEventListener('click', (e) => {
            // Verifica si el clic ocurrió directamente sobre el contenedor (el fondo)
            if (e.target.classList.contains('modal-container')) {
                e.target.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });
});
