// Formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const formMessages = document.getElementById('form-messages');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar estado de carga
        if (submitBtn && btnText) {
            submitBtn.disabled = true;
            btnText.textContent = 'Enviando...';
        }
        
        if (formMessages) {
            formMessages.style.display = 'none';
        }
        
        // Enviar formulario
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la red');
            }
        })
        .then(data => {
            // Éxito
            showMessage('✅ Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.', 'success');
            form.reset();
        })
        .catch(error => {
            // Error
            console.error('Error:', error);
            showMessage('❌ Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.', 'error');
        })
        .finally(() => {
            // Restaurar botón
            if (submitBtn && btnText) {
                submitBtn.disabled = false;
                btnText.textContent = 'Enviar mensaje';
            }
        });
    });

    function showMessage(message, type) {
        if (!formMessages) return;
        
        formMessages.textContent = message;
        formMessages.className = 'form-messages ' + type;
        formMessages.style.display = 'block';
        
        // Hacer scroll al mensaje
        formMessages.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
