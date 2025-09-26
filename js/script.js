// Navegación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            const nav = document.querySelector('nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header con efecto de scroll
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Efecto de mostrar/ocultar header al hacer scroll
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll hacia abajo
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll hacia arriba
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    // Añadir clase 'scrolled' cuando se hace scroll
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Animación al hacer scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .about-content, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que el header tenga la clase 'scrolled' si se carga en medio de la página
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    }
    
    // Configurar animaciones iniciales
    const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-info, .contact-form');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar animaciones al cargar
    setTimeout(animateOnScroll, 300);
});

// Ejecutar animaciones al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría el código para enviar el formulario
        // Por ahora, solo mostramos un mensaje de éxito
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Contador de caracteres para el textarea
document.addEventListener('DOMContentLoaded', function() {
    const mensajeTextarea = document.getElementById('mensaje');
    const charCount = document.getElementById('char-count');
    const maxLength = 500;

    if (mensajeTextarea && charCount) {
        // Actualizar contador al cargar la página
        charCount.textContent = mensajeTextarea.value.length;
        
        // Actualizar contador al escribir
        mensajeTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;
            
            // Cambiar color cuando se acerca al límite
            if (currentLength > maxLength * 0.8) {
                charCount.style.color = '#ff6b6b';
            } else {
                charCount.style.color = '';
            }
            
            // Limitar caracteres si se excede el máximo
            if (currentLength > maxLength) {
                this.value = this.value.substring(0, maxLength);
                charCount.textContent = maxLength;
            }
        });
    }
});

// Configuración de FormSubmit
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // No prevenir el comportamiento por defecto para permitir que FormSubmit funcione
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Deshabilitar el botón para evitar múltiples envíos
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }
            
            // El formulario se enviará normalmente a FormSubmit
        });
    }
});

// Contador de estadísticas (opcional)
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        // Iniciar contador cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
}

// Llamar a la función de contadores cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCounters);

// Rotador de imágenes de fondo
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.bg-rotator-img');
    if (images.length === 0) return;

    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 5000); // Cambia cada 5 segundos
});

// Función de validación del formulario
function validateForm() {
    const form = document.getElementById('contact-form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Resetear mensajes de error previos
    const errorElements = form.querySelectorAll('.error-message');
    errorElements.forEach(el => el.remove());
    
    // Validar campos obligatorios
    let isValid = true;
    
    if (nombre.value.trim() === '') {
        showFieldError(nombre, 'Por favor, introduce tu nombre completo');
        isValid = false;
    }
    
    if (email.value.trim() === '') {
        showFieldError(email, 'Por favor, introduce tu correo electrónico');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showFieldError(email, 'Por favor, introduce un correo electrónico válido');
        isValid = false;
    }
    
    if (mensaje.value.trim() === '') {
        showFieldError(mensaje, 'Por favor, escribe tu mensaje');
        isValid = false;
    }
    
    // Validar teléfono si se ha introducido
    if (telefono.value.trim() !== '' && !/^[0-9+\-\s()]{6,20}$/.test(telefono.value)) {
        showFieldError(telefono, 'Por favor, introduce un número de teléfono válido');
        isValid = false;
    }
    
    if (!isValid) {
        showMessage('Por favor, corrige los errores en el formulario', 'error');
        return false;
    }
    
    // Deshabilitar botón y mostrar indicador de carga
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }
    
    // Mostrar mensaje de envío exitoso
    showMessage('Enviando tu mensaje, por favor espera...', 'info');
    
    // Forzar el envío del formulario después de un pequeño retraso para que se vea el mensaje
    setTimeout(() => {
        form.submit();
    }, 500);
    
    return true;
}

// Función para mostrar mensajes de error en campos específicos
function showFieldError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '5px';
    errorElement.textContent = message;
    
    // Insertar después del campo
    input.parentNode.insertBefore(errorElement, input.nextSibling);
    
    // Resaltar el campo con error
    input.style.borderColor = '#e74c3c';
    
    // Quitar el resaltado al corregir
    input.addEventListener('input', function clearError() {
        this.style.borderColor = '';
        if (errorElement.parentNode) {
            errorElement.parentNode.removeChild(errorElement);
        }
        this.removeEventListener('input', clearError);
    });
}

// Función para mostrar mensajes
function showMessage(message, type = 'success') {
    const messagesDiv = document.getElementById('form-messages');
    if (messagesDiv) {
        messagesDiv.textContent = message;
        messagesDiv.className = 'form-messages ' + type;
        
        // Desplazarse al mensaje
        messagesDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            messagesDiv.textContent = '';
            messagesDiv.className = 'form-messages';
        }, 5000);
    }
}
