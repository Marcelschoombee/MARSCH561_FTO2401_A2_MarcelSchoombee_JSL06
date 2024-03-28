// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('h2');
            categoryElement.textContent = category;
            menuContainer.appendChild(categoryElement);
            const itemListElement = document.createElement('ul');
    // Loop through each category and its items in the menu object
    menu[category].forEach(itemName => {
        // Create an element to represent the category
        const listItemElement = document.createElement('li');
        // Set the text content of the category element to the category name
        listItemElement.textContent = itemName;
        listItemElement.addEventListener('click', () => addToOrder(itemName));
        itemListElement.appendChild(listItemElement);
        menuContainer.appendChild(itemListElement);
    });
        }
    }   
}
// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
