// Simple gestion de la connexion
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    // Récupérer les valeurs des champs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérification simple (il est important de ne pas stocker de mots de passe en texte clair)
    if (username === "utilisateur" && password === "motdepasse") {
        alert("Connexion réussie !");
        // Redirection vers la page de compte ou autre
        window.location.href = "compte.html"; // À remplacer par une page réelle
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
});
