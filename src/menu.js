import Box from './takeout-box.png';
import Soul from './soul-food.jpg';

export const menuPage = ( () => {

    // Helper Functions
    //
    // Helper Function: Create menu container
    const createMenuContainer = (id) => {
        const container = document.createElement('div');
        container.classList.add('menu-container');
        return container;
    };
    // Helper Function: Create menu title
    const createMenuTitle = (text) => {
        const title = document.createElement('h3');
        title.classList.add('menu-title');
        title.textContent = text;
        return title;
    };
    // Helper Function: Create menu list from array of items
    const createMenuList = (lineItemArray) => {
        const list = document.createElement('ul');
        list.classList.add('menu-list');
        for (let i = 0; i < lineItemArray.length; i++) {
            let lineItem = document.createElement('li');
            lineItem.classList.add('menu-item');
            lineItem.textContent = lineItemArray[i];
            list.append(lineItem);
        }
        return list;
    };

    const load = (contentContainer) => {

        // Create menu page container
        const menuPageContainer = document.createElement('div');
        menuPageContainer.setAttribute('id', 'menu-page-container');

        // Chinese Menu
        const chineseMenuContainer = createMenuContainer('chinese-menu-container');

        // Chinese Menu: Title
        const chineseMenuTitle = createMenuTitle("Chinese Food");

        // Chinese Menu: Dish Array
        const chineseDishes = ["Big Box of Grease", "Eel", "Camel's Hump"];

        // Chinese Menu: List
        const chineseMenuList = createMenuList(chineseDishes);

        // Chinese Menu: Image
        const chineseImgContainer = document.createElement('div');
        chineseImgContainer.classList.add('menu-img');
        const chineseImage = new Image();
        chineseImage.src = Box;
        chineseImage.setAttribute('id', 'chinese-food-img');
        chineseImgContainer.append(chineseImage);

        chineseMenuContainer.append(chineseMenuTitle);
        chineseMenuContainer.append(chineseImgContainer);
        chineseMenuContainer.append(chineseMenuList);
        

        // Soul Menu
        const soulMenuContainer = createMenuContainer('soul-menu-container');

        // Soul Menu: Title
        const soulMenuTitle = createMenuTitle("Soul Food");

        // Soul Menu: Dish Array
        const soulDishes = ["Ribs", "Wings", "Fries"];

        // Soul Menu: List
        const soulMenuList = createMenuList(soulDishes);

        // Soul Menu: Image
        const soulImgContainer = document.createElement('div');
        soulImgContainer.classList.add('menu-img');
        const soulImage = new Image();
        soulImage.src = Soul;
        soulImage.setAttribute('id', 'soul-food-img');
        soulImgContainer.append(soulImage);

        soulMenuContainer.append(soulMenuTitle);
        soulMenuContainer.append(soulImgContainer);
        soulMenuContainer.append(soulMenuList);

        menuPageContainer.append(chineseMenuContainer);
        menuPageContainer.append(soulMenuContainer);
        
        contentContainer.append(menuPageContainer);
    };

    return {
        load
    }
})();
