import {createContainer, createh3} from './helpers.js';

export const menuPage = ( () => {

    // Helper Functions
    //
    // Helper Function: Create menu container
    const createMenuContainer = (id) => {
        return createContainer('menu-container', id);
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

    const load = (pageContainer) => {

        // Create menu page container
        const menuPageContainer = createContainer('page-content', 'menu-content');

        // Chinese Menu
        const chineseMenuContainer = createMenuContainer('chinese-menu-container');
        const chineseMenuTitle = createh3("Chinese Food");
        const chineseDishes = ["Box of Grease", "Eel", "Camel's Hump"];
        const chineseMenuList = createMenuList(chineseDishes);

        chineseMenuContainer.append(chineseMenuTitle);
        chineseMenuContainer.append(chineseMenuList);
        

        // Soul Menu
        const soulMenuContainer = createMenuContainer('soul-menu-container');
        const soulMenuTitle = createh3("Soul Food");
        const soulDishes = ["Ribs", "Wings", "Fries"];
        const soulMenuList = createMenuList(soulDishes);

        soulMenuContainer.append(soulMenuTitle);
        soulMenuContainer.append(soulMenuList);

        // Add content to Menu Page
        menuPageContainer.append(chineseMenuContainer);
        menuPageContainer.append(soulMenuContainer);
        
        pageContainer.append(menuPageContainer);
    };

    return {
        load
    }
})();
