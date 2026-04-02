console.log("Benvenuto nel portfolio di Angie Melissa Albitres Farro!");

// Funzione per aggiornare dinamicamente l'anno nel footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});