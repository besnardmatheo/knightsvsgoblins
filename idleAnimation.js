const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Dimensions du canevas
canvas.width = 200;
canvas.height = 200;

// Charger le spritesheet
const sprite = new Image();
sprite.src = 'assets/idle.png'; // Assurez-vous que le fichier est dans le dossier "assets"

// Paramètres du spritesheet
const spriteWidth = 192;  // Largeur de chaque frame (1152px / 6 frames)
const spriteHeight = 212; // Hauteur de chaque frame
const totalFrames = 6;     // Nombre total de frames dans le spritesheet
let frameX = 0;            // Index de la frame actuelle
const fps = 10;            // Images par seconde
let frameCount = 0;        // Compteur de frames pour ralentir l'animation

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas avant de redessiner

    // Dessiner le personnage à une position fixe avec la frame actuelle
    ctx.drawImage(
        sprite,                        // Image source (spritesheet)
        frameX * spriteWidth,          // Position X de la frame dans le spritesheet
        0,                              // Position Y (puisqu'il y a une seule ligne)
        spriteWidth, spriteHeight,     // Taille de la frame
        (canvas.width - spriteWidth) / 2, // Position X dans le canvas (centrée)
        (canvas.height - spriteHeight) / 2, // Position Y dans le canvas (centrée)
        spriteWidth, spriteHeight      // Taille dans le canvas
    );

    // Augmenter le compteur de frames pour ralentir l'animation
    frameCount++;
    if (frameCount > (60 / fps)) {  // Contrôler le taux de rafraîchissement (fps)
        frameX = (frameX + 1) % totalFrames; // Passer à la frame suivante
        frameCount = 0; // Réinitialiser le compteur
    }

    // Demande une nouvelle frame d'animation
    requestAnimationFrame(animate);
}

// Lancer l'animation une fois le spritesheet chargé
sprite.onload = function () {
    animate();
};
