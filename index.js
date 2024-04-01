// The menu array contains objects representing menu items and the price 
const menu = [
    { category: "Starters", name: "Garlic Bread", price: 80 },
    { category: "Starters", name: "Bruschetta", price: 90 },
    { category: "MainCourses", name: "Margherita Pizza", price: 109 },
    { category: "MainCourses", name: "Spaghetti Carbonara", price: 120 },
    { category: "Desserts", name: "Tiramisu", price: 90 },
    { category: "Desserts", name: "Cheesecake", price: 90 }
];

// Function to display menu items by category

    // The displayMenuItems uses the array 'menu' as a parameter
    function displayMenuItems(menu) {
        const menuContainer = document.getElementById("menu");
        const categories = {}; // An empty object to stores items by category
        // It iterates over each menu item using '.forEach'
        menu.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = []; // 'forEach' menu item it checks if a menu category exist in the 'category' object
            }                                   // If not it creates a empty array
            categories[item.category].push(item);
        });// It then adds the menu items to the category array

        for (const category in categories) {   // Iterates over each property in the 'categories' objects
            if (categories.hasOwnProperty(category)) { // Checks if the current property being iterated over belongs directly to the categories 
                const categoryElement = document.createElement('h2'); // Creates new element 'h2' to display category name
                categoryElement.textContent = category; // Sets the 'textContent' to the 'h2' element to the name of the current category
                menuContainer.appendChild(categoryElement); // Append the 'h2' element to the 'menuContainer'
                const itemListElement = document.createElement('ul'); // Creates a new 'ul' element to contain the list of menu items

                categories[category].forEach(menuItem => { // Iterates over each 'menuItem' beloning to the current category 
                    const listItemElement = document.createElement('li'); 
                    // It creates a 'li' element for each menu item and sets it text content to the name of the menu item
                    listItemElement.textContent = menuItem.name;
                    // It adds a event listener to each list item, when clicked it calls the 'addToOrder' function to the corresponting menu item
                    listItemElement.addEventListener('click', () => addToOrder(menuItem));
                    // Appends the 'ul' element containing the list of menu items to the 'menuContainer"
                    itemListElement.appendChild(listItemElement);

                });

                menuContainer.appendChild(itemListElement);
            }
        }
    }
// 'addToOrder' is a callback function that adds a selected item to the order list
function addToOrder(menuItem) {
    // It takes a 'menuItem' object as a parameter
    const orderItemsList = document.getElementById("order-items");
    // It retrieves the order items list and the order total element from the HTML.
    const orderTotalElement = document.getElementById("order-total");
    // It craetes a 'li' element for each order and sets its text content for each order
    const orderItem = document.createElement('li');
    orderItem.textContent = menuItem.name;
    // It appends(adds) the list item to the 'order' items list 
    orderItemsList.appendChild(orderItem);
    // 'parseFloat is used to convert the text content into a floating point number, so that the math operation can be performed on it
    const currentTotal = parseFloat(orderTotalElement.textContent);
    // It Calculates the new total by adding the 'menuItem.price' to the 'currentTotal'
    const newTotal = currentTotal + menuItem.price;
    // After the operation 'newTotal' holds the updted total
    orderTotalElement.textContent = newTotal.toFixed(2);
}


function initMenuSystem(menu) {  // This code initializes the menu by calling the 'displayMenuItems' function
    displayMenuItems(menu); // with the menu array to display the menu items on a website
}

initMenuSystem(menu);
