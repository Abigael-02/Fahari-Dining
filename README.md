# Fahari Dining - Order Management System

## Project Description

A professional, responsive front-end web application for **Fahari Dining**, a modern restaurant brand based in Nairobi. This project features a dynamic menu, category-based filtering, and a persistent shopping cart system.

## Author

Abigael Kibunja

##  Features

* **Dynamic Menu Display**: Renders food items and drinks directly from LocalStorage or JavaScript arrays.
* **Professional Category Filtering**: Custom-styled buttons (All, Breakfast, Big Meals, Perfected Drinks) that use the "Pickup Order" design for a consistent brand feel.
* **Persistent Shopping Cart**: Orders are saved in `localStorage`, ensuring data persists even after page refreshes.
* **Brand-Aligned UI**: High-contrast theme using Dark Slate (`#2d2d2d`) and Vibrant Gold (`#ffd700`) to match the Fahari Dining brand identity.
* **Checkout Validation**: Includes a dedicated pickup form that validates user input and clears the cart and UI upon successful order placement.
* **Localized Currency**: All pricing is explicitly handled in Kenyan Shillings (**Ksh**) for a local experience.

##  Tech Stack

* **HTML5**: Semantic structure for the menu cards and checkout forms.
* **CSS3**: Custom styles featuring flexbox layouts, hover transitions, and professional button styling.
* **JavaScript (ES6+)**: DOM manipulation, event handling, and state management using `localStorage`.

##  BDD (Behaviour Driven Development)

### 1. Menu Filtering Logic
The system uses a strict string-matching algorithm to filter items by category.

### 2. 

- **Persistence**: Uses `JSON.parse(localStorage.getItem("cart"))` to retrieve saved items.
- **Reset Logic**: `localStorage.removeItem("cart")` is triggered upon successful form submission to empty the "Your Order" card.

##  Project Setup Instructions

1. Open `order.html` in any modern web browser.
2. Use the **Category Buttons** to browse the menu.
3. Click **Add to Order** to populate the "Your Order" card.
4. Enter your name in the **Name for Pickup** field and click **Place Pickup Order** to complete the transaction.

## Link to GitHub Project
https://github.com/Abigael-02/Fahari-Dining


## Contact
abigael.kibunja@student.moringaschool.com

## License
This project is licensed under the **MIT License**.
---
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## Copyright
© 2026 

