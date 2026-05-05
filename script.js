// FAHARI DINING - Project Logic
// This script handles dynamic menu updates and the online ordering system

// --- INITIALIZATION ---
// Ensure the menu exists in localStorage so that the app dosen't break on first load
if (!localStorage.getItem("fahariMenu")) {
  localStorage.setItem("fahariMenu", JSON.stringify([]));
}

// --- ADMIN LOGIC: Adding items to the system
const menuForm = document.getElementById("menu-form");
// Event Listener for form submission
if (menuForm) {
  menuForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capture User Input
    const itemName = document.getElementById("itemName").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemImage = document.getElementById("itemImage").value;
    const feedback = document.getElementById("form-feedback");

    // Form Validation
    if (itemName.length < 3) {
      feedback.style.color = "red";
      feedback.innerText = "Dish name must be at least 3 characters.";
      return;
    }

    // Create the new item object
    const newItem = {
      id: Date.now(),
      name: itemName,
      price: parseFloat(itemPrice),
      image: itemImage,
    };

    // Saving to localStorage
    const currentMenu = JSON.parse(localStorage.getItem("fahariMenu"));
    currentMenu.push(newItem);
    localStorage.setItem("fahariMenu", JSON.stringify(currentMenu));

    // Provide Success Feedback
    feedback.style.color = "green";
    feedback.innerText = "${itemName} has been added to the menu!";
    menuForm.reset();
  });
}

// --- Displaying items and Cart management ---
const menuDisplay = document.getElementById("dynamic-menu");
let cart = [];

// Function to render the menu items
function renderMenu() {
  if (!menuDisplay) return;

  const savedMenu = JSON.parse(localStorage.getItem("fahariMenu"));

  if (savedMenu.length === 0) {
    menuDisplay.innerHTML = (
      <p>The kitchen is currently preparing.Check back soon!</p>
    );
    return;
  }

  menuDisplay.innerHTML = savedMenu
    .map(
      (item) => ` 
        <div div class="menu-card">
    <img src="${item.image}" alt="${item.name}" class="menu-image">
            <div class="card-content">
                <h3>${item.name}</h3>
                <span class="price-tag">$${item.price.toFixed(2)}</span>
                <button onclick="addToCart('$item.name}', ${item.price}" class="add-btn">
                   Add to Order 
                </button>
            </div>      
        </div>
      `,
    )
    .join("");
}
