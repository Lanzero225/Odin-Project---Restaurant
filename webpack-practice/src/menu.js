
//Setting the movie

class MenuItem{
    constructor(name, description, price, category){
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}

export const menu = [
  new MenuItem("Burger", "Beef patty", 199, "main"),
  new MenuItem("Hamburger", "Beef patty", 199, "main"),
  new MenuItem("Fries", "Crispy fries", 79, "side"),
  new MenuItem("Cola", "Cold drink", 49, "drink"),
  new MenuItem("Sprite", "Cold drink", 49, "drink"),
  new MenuItem("Cake", "Chocolate cake", 99, "dessert")
];


export function buildMenu(mainDiv){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menu-div");
    menuContainer.innerHTML = `
      <div class="menu-column" id="main">
        <h2>Main Dishes</h2>
      </div>
      <div class="menu-column" id="side">
        <h2>Sides</h2>
      </div>
      <div class="menu-column" id="drink">
        <h2>Drinks</h2>
      </div>
      <div class="menu-column" id="dessert">
        <h2>Desserts</h2>
      </div>
    `;
    mainDiv.appendChild(menuContainer);


    const columns = {
        main: document.getElementById("main"),
        side: document.getElementById("side"),
        drink: document.getElementById("drink"),
        dessert: document.getElementById("dessert"),
        };
    menu.forEach(menuItem => {
        console.log(menuItem);
        const menuItemDiv = document.createElement('div');
        menuItemDiv.textContent = menuItem.name;
        menuItemDiv.classList.add("menu-item");
        console.log(columns);
        columns[menuItem.category].appendChild(menuItemDiv);
    });
} 