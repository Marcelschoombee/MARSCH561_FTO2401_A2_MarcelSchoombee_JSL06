// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = [
    { category: "Starters", name: "Garlic Bread", price: 80 },
    { category: "Starters", name: "Bruschetta", price: 90 },
    { category: "MainCourses", name: "Margherita Pizza", price: 109 },
    { category: "MainCourses", name: "Spaghetti Carbonara", price: 120 },
    { category: "Desserts", name: "Tiramisu", price: 90 },
    { category: "Desserts", name: "Cheesecake", price: 90 }
];

// Function to display menu items by category

    // Get the menu container element from the HTML
    function displayMenuItems(menu) {
        const menuContainer = document.getElementById("menu");
        const categories = {}; // Store items by category
        menu.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = []; 
            }
            categories[item.category].push(item);
        });

        for (const category in categories) {
            if (categories.hasOwnProperty(category)) {
                const categoryElement = document.createElement('h2');
                categoryElement.textContent = category;
                menuContainer.appendChild(categoryElement);
                const itemListElement = document.createElement('ul');

                categories[category].forEach(menuItem => {
                    const listItemElement = document.createElement('li');
                    listItemElement.textContent = menuItem.name;
                    listItemElement.addEventListener('click', () => addToOrder(menuItem));
                    itemListElement.appendChild(listItemElement);
                });

                menuContainer.appendChild(itemListElement);
            }
        }
    }
// Callback function for adding an item to the order
function addToOrder(menuItem) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = menuItem.name;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + menuItem.price;
    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
