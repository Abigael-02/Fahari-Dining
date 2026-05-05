// FAHARI DINING - Project Logic 
// This script handles dynamic menu updates and the online ordering system 

// --- INITIALIZATION --- 
// Ensure the menu exists in localStorage so that the app dosen't break on first load 
if (!localStorage.getItem('fahariMenu')) {
    localStorage.setItem('fahariMenu', JSON.stringify([]));
}

// --- ADMIN LOGIC: Adding items to the system 
const menuForm = document.getElementById('menu-form');
// Event Listener for form submission
if (menuForm) {
    menuForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capture User Input 
        const itemName = document.getElementById('itemName').value;
        const itemPrice = document.getElementById('itemPrice').value;
        const itemImage = document.getElementById('itemImage').value;
        const feedback = document.getElementById('form-feedback');

        // Form Validation 
        if (itemName.length < 3) {
            feedback.style.color = 'red';
            feedback.innerText = "Dish name must be at least 3 characters.";
            return;
        }

        // Create the new item object 
        const newItem = {
            id: Date.now(),
            name: itemName,
            price: parseFloat(itemPrice),
            image: itemImage
        };
    })
}