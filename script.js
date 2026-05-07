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
    const itemImage = document.getElementById("itemImg").value;
    const category = document.getElementById("itemCategory").value;
    const feedback = document.getElementById("form-feedback");

    // Form Validation
    if (itemName.length < 3) {
      feedback.style.color = "red";
      feedback.innerText = "Dish name must be at least 3 characters.";
      return;
    }

    // Create the new item object
    const itemCategory = document.getElementById("itemCategory").value;

    const newItem = {
      id: Date.now(),
      name: itemName,
      price: parseFloat(itemPrice),
      image: itemImage,
      category: itemCategory,
    };

    // Saving to localStorage
    try {
      const currentMenu = JSON.parse(localStorage.getItem("fahariMenu")) || [];
      currentMenu.push(newItem);
      localStorage.setItem("fahariMenu", JSON.stringify(currentMenu));
      console.log("Everything worked!");
    } catch (error) {
      console.error("Something went wrong with the storage", error);
      alert("We couldn't save your item");
    }

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

  const savedMenu = JSON.parse(localStorage.getItem("fahariMenu")) || [];

  if (savedMenu.length === 0) {
    menuDisplay.innerHTML = `  
      <p>The kitchen is currently preparing.Check back soon!</p>`;
    return;
  }

  menuDisplay.innerHTML = savedMenu
    .map(
      (item) => `
        <div class="menu-card">
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <div class="card-content">
                <h3>${item.name}</h3>
                <span class="price-tag">Ksh${item.price.toFixed(2)}</span>
                <button onclick="addToCart('${item.name}', ${item.price})" class="add-btn">
                    Add to Order
                </button>
            </div>
        </div>
    `,
    )
    .join("");
}
// Function to filter the menu
function renderFilteredMenu(menuToDisplay, selectedCategory) {
    if (!menuDisplay) return;

    if (menuToDisplay.length === 0) {
        menuDisplay.innerHTML = `<p class="no-items">The kitchen has no ${selectedCategory} right now. Check back soon!</p>`;
        return;
    }

    menuDisplay.innerHTML = menuToDisplay.map(item => `
        <div class="menu-card">
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <div class="card-content">
                <h3>${item.name}</h3>
                <span class="price-tag">Ksh ${item.price.toFixed(2)}</span>
                <button onclick="addToCart('${item.name}', ${item.price})" class="add-btn">
                    Add to Order
                </button>
            </div>
        </div>
    `).join("");
}
function filterMenu(category) {
  const savedMenu = JSON.parse(localStorage.getItem("fahariMenu")) || [];

  // Filter logic
  const filteredItems =
    category === "All"
      ? savedMenu
      : savedMenu.filter(item => item.category === category);

  renderFilteredMenu(filteredItems, category);
}

// Cart Functionality
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalPriceSpan = document.getElementById("total-price");

  if (!cartItemsDiv) return;

  // Display each item in the cart
  cartItemsDiv.innerHTML = cart
    .map(
      (item, index) => `
    <div class="cart-item">
    <span>${item.name}</span>
    <span>Ksh${item.price.toFixed(2)}</span>
    </div>
    `,
    )
    .join("");

  // Calculate Total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalPriceSpan.innerText = total.toFixed(2);
}

// Checkout Form Handling
const checkoutForm = document.getElementById("checkout-form");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", function(event)  {
    event.preventDefault();
    const customerName = document.getElementById("customerName").value;
    localStorage.removeItem("cart");
    checkoutForm.reset();

    if (cart.length === 0) {
      const feedback = document.getElementById("order-feedback");
      feedback.style.color = "red";
      feedback.innerText = "Your cart is empty!";
      return;
    }

    localStorage.removeItem("cart");
    cart = [];
    if (typeof renderCart === "function") renderCart();
    if (typeof updateCartUI === "function") updateCartUI();

    // Final Problem Solution
    alert(
      `Thank you,${customerName}! Your order for Fahari Dining has been placed.`,
    );
    checkoutForm.reset();
  });
}

// Initialize menu display on load
document.addEventListener("DOMContentLoaded", renderMenu);

let currentIndex = 0;
const slides = document.querySelectorAll(".hero-slide");
const heroContainer = document.querySelector(".hero-container");

function showNextSlide() {
  currentIndex++;
  
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 100;
  heroContainer.style.transform = `translateX(${offset}%)`;
  heroContainer.style.transition = "transform 0.8s ease-in-out";
}

document.addEventListener("DOMContentLoaded", () => {
  if (slides.length > 0) {
    setInterval(showNextSlide, 3000);
  }
});
