// Gestion de l'envoi du formulaire
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Merci pour votre message !");
});

// Fonction de centrage d'une section avec scrollBy
function centerSection(id) {
    const section = document.querySelector(id);
    if (section) {
        // Récupère les coordonnées de la section dans la fenêtre
        const rect = section.getBoundingClientRect();
        // Calcul du centre de la section dans la fenêtre (en pixels)
        const sectionCenter = rect.top + rect.height / 2;
        // Calcul du centre de la fenêtre
        const viewportCenter = window.innerHeight / 2;
        // Calcul de la différence à scroller
        const delta = sectionCenter - viewportCenter;
        
        window.scrollBy({
            top: delta,
            behavior: 'smooth'
        });

    }
}

// Attache un événement au clic pour tous les liens du menu de navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener("click", function(event) {
         event.preventDefault();
         const sectionId = this.getAttribute("href");
         centerSection(sectionId);
    });
});
