// FAHARI DINING - Project Logic 
// This script handles dynamic menu updates and the online ordering system 

// --- INITIALIZATION --- 
// Ensure the menu exists in localStorage so that the app dosen't break on first load 
if (!localStorage.getItem('fahariMenu')) {
    localStorage.setItem('fahariMenu', JSON.stringify([]));
}

// --- ADMIN LOGIC: Adding items to the system 
const menuForm = document.getElementById('menu-form');