// FAHARI DINING - Project Logic
// This script handles dynamic menu updates and the online ordering system

// --- INITIALIZATION ---
// Ensure the menu exists in localStorage so that the app dosen't break on first load

// This is the "Safety Net" for GitHub users
const defaultData = [
  
    {
      id: 1778154809826,
      name: "Pancakes",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      category: "Breakfast",
    },
    {
      id: 1778157317026,
      name: "Breakfast Combo",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      category: "Breakfast",
    },
    {
      id: 1778157476897,
      name: "Fruit Salad",
      price: 600,
      image:
        "https://images.unsplash.com/photo-1687877465643-b0cab75e9ecb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBicmVha2Zhc3R8ZW58MHx8MHx8fDA%3D",
      category: "Breakfast",
    },
    {
      id: 1778158158627,
      name: "Croissants",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1618667060775-1fe102237f94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBicmVha2Zhc3R8ZW58MHx8MHx8fDA%3D",
      category: "Breakfast",
    },
    {
      id: 1778158266177,
      name: "Marinated Salmon",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Big Meals",
    },
    {
      id: 1778158335788,
      name: "Salad Combo",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lYWx8ZW58MHx8MHx8fDA%3D",
      category: "Big Meals",
    },
    {
      id: 1778158493836,
      name: "Spaghetti Bolognese",
      price: 1400,
      image:
        "https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmVyfGVufDB8fDB8fHww",
      category: "Big Meals",
    },
    {
      id: 1778158652335,
      name: "Peri Peri Chicken Pizza",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
      category: "Big Meals",
    },
    {
      id: 1778158791834,
      name: "Tropical Juice",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1633932934464-5420d4bc89e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Drinks",
    },
    {
      id: 1778158874142,
      name: "Orange Juice",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Drinks",
    },
    {
      id: 1778158983755,
      name: "Strawberry Lemonade",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1633933329823-0c2677e2d8c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Drinks",
    },
    {
      id: 1778159062770,
      name: "Passion Juice",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1529729452430-d35a0213b820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxkcmlua3N8ZW58MHx8MHx8fDA%3D",
      category: "Drinks",
    },
    {
      id: 1778168954438,
      name: "Blueberry Toast",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Breakfast",
    },
    {
      id: 1778173893554,
      name: "Yoghurt Bowl",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1627308594190-a057cd4bfac8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNtb290aGllfGVufDB8fDB8fHww",
      category: "Breakfast",
    },
    {
      id: 1778174008191,
      name: "Banana Smoothie",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1653542773369-51cce8d08250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNtb290aGllfGVufDB8fDB8fHww",
      category: "Drinks",
    },
    {
      id: 1778174162251,
      name: "Chocolate Milkshake",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1619158403521-ed9795026d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWlsa3NoYWtlfGVufDB8fDB8fHww",
      category: "Drinks",
    },
    {
      id: 1778174560744,
      name: "Roasted Steak with Fries",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8fDA%3D",
      category: "Big Meals",
    },
    {
      id: 1778174990435,
      name: "Tacos",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFjb3N8ZW58MHx8MHx8fDA%3D",
      category: "Big Meals",
    },
  ],
;

let menu = JSON.parse(localStorage.getItem("fahariMenu"));

if (!menu || menu.length === 0) {
    menu = defaultData; // Use the hardcoded list if storage is empty
    localStorage.setItem("fahariMenu", JSON.stringify(menu));
}
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

  menuDisplay.innerHTML = menuToDisplay
    .map(
      (item) => `
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
    `,
    )
    .join("");
}
function filterMenu(category) {
  const savedMenu = JSON.parse(localStorage.getItem("fahariMenu")) || [];

  // Filter logic
  const filteredItems =
    category === "All"
      ? savedMenu
      : savedMenu.filter((item) => item.category === category);

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
  checkoutForm.addEventListener("submit", function (event) {
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

renderMenu();
