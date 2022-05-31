import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';

export const Page = ( () => {

    // Helper Function
    //
    // Helper Function: Create list item
    const makeUL = (list, arr) => {
        for (let i = 0; i < arr.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = arr[i].toUpperCase();
            listItem.setAttribute('id', arr[i] + '-tab');

            if (i == 0) {listItem.classList.add('open-tab')}
            else {listItem.classList.add('closed-tab')};

            list.append(listItem);
        }
        return list;
    };

    function tabClick() {

        let currentTab = document.querySelector('.open-tab');
        const contentContainer = document.getElementById('content');
    
        // Return null if tab is already open
        if (this.classList.contains('open-tab')) {return};
    
        // Remove content of the content container
        contentContainer.removeChild(contentContainer.firstChild);
    
        // Switch open-tab class to clicked tab
        currentTab.classList.toggle('open-tab');
        this.classList.toggle('open-tab');
        currentTab = this;
    
        // Load page into content container based on tab id
        switch (this.getAttribute('id')) {
            case 'home-tab':
                homePage.load(contentContainer);
                break;
            case 'menu-tab':
                menuPage.load(contentContainer);
                break;
            case 'contact-tab':
                contactPage.load(contentContainer);
                break;
            default:
                return;
        };
    };

    const initPageLoad = () => {
        const body = document.body;
    
        const header = document.createElement('header');

        const title = document.createElement('h1');
        title.setAttribute('id', 'title');
        title.textContent = "Foo Chow Restaurant";
        
        const list = document.createElement('ul');
        list.setAttribute('id', 'navbar');
        const tabArray = ["home", "menu", "contact"];
        const navBar = makeUL(list, tabArray);
        navBar.childNodes.forEach((e) => {e.addEventListener('click', tabClick);});


        header.append(title);
        header.append(navBar);

        body.prepend(header);
    };

    return {
        initPageLoad
    }
})();