document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Veuillez remplir tous les champs obligatoires.',
                    confirmButtonText: 'OK'
                });
                return;
            }

            // Simulate form submission success
            Swal.fire({
                icon: 'success',
                title: 'Message envoyé!',
                text: 'Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.',
                confirmButtonText: 'OK'
            });

            // Reset form
            this.reset();
        });
    }
});