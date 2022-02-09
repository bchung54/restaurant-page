import House from './front.png';

export const Page = ( () => {
    const content = document.getElementById('content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    const homePage = () => {

        // Create homepage container
        const homePageContainer = pageContainer.cloneNode();
        homePageContainer.setAttribute('id', 'home-page-container');

        // Home sub-containers
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home-container');


        // Home Display Container
        const homeDisplayContainer = homeContainer.cloneNode();
        homeDisplayContainer.setAttribute('id', 'home-display-container');

        // Home Display Container: Add image to home display
        const myImage = new Image();
        myImage.src = House;
        homeDisplayContainer.appendChild(myImage);

        // Home Display Container: Add copy to home display
        const copy = "Come try out our cheap greasy food. We serve the best Chinese and Soul food in town! Available for lunch, dinner, and banquets."
        const copyNode = document.createTextNode(copy);
        homeDisplayContainer.appendChild(copyNode);
        

        // Home Info Container
        const homeInfoContainer = homeContainer.cloneNode();
        homeInfoContainer.setAttribute('id', 'home-info-container');

        // Home Info Container: Setup info sub-containers
        const infoSubContainer = document.createElement('div');
        infoSubContainer.classList.add('info-subcontainer');

        // Home Info Container: Location container
        const locationContainer = infoSubContainer.cloneNode();
        locationContainer.setAttribute('id', 'location-subcontainer');
        
        const locationTitle = "Location";
        const locationLine1 = "949 North Hill Street";
        const locationLine2 = "Los Angeles, CA 90012";
        const locationTitleNode = document.createTextNode(locationTitle);
        const location1Node = document.createTextNode(locationLine1);
        const location2Node = document.createTextNode(locationLine2);

        locationContainer.appendChild(locationTitleNode);
        locationContainer.appendChild(document.createElement('br'));
        locationContainer.appendChild(document.createElement('br'));
        locationContainer.appendChild(location1Node);
        locationContainer.appendChild(document.createElement('br'));
        locationContainer.appendChild(location2Node);

        homeInfoContainer.appendChild(locationContainer);

        // Home Info Container: Hours container
        const hoursContainer = infoSubContainer.cloneNode();
        hoursContainer.setAttribute('id', 'hours-subcontainer');

        const hoursTitle = "Hours";
        const hours = "11am to 11pm";
        const days = "Closed Fridays";
        const hoursTitleNode = document.createTextNode(hoursTitle);
        const hoursNode = document.createTextNode(hours);
        const daysNode = document.createTextNode(days);

        hoursContainer.appendChild(hoursTitleNode);
        hoursContainer.appendChild(document.createElement('br'));
        hoursContainer.appendChild(document.createElement('br'));
        hoursContainer.appendChild(hoursNode);
        hoursContainer.appendChild(document.createElement('br'));
        hoursContainer.appendChild(daysNode);

        homeInfoContainer.appendChild(hoursContainer);
        
        // Home Info Container: Contact Info container
        const contactInfoContainer = infoSubContainer.cloneNode();
        contactInfoContainer.setAttribute('id', 'contact-info-subcontainer');

        const contactInfoTitle = "Contact";
        const phone = "(555) 555-5555";
        const email = "juntao@foochow.com";
        const contactTitleNode = document.createTextNode(contactInfoTitle);
        const phoneNode = document.createTextNode(phone);
        const emailNode = document.createTextNode(email);

        contactInfoContainer.appendChild(contactTitleNode);
        contactInfoContainer.appendChild(document.createElement('br'));
        contactInfoContainer.appendChild(document.createElement('br'));
        contactInfoContainer.appendChild(phoneNode);
        contactInfoContainer.appendChild(document.createElement('br'));
        contactInfoContainer.appendChild(emailNode);

        homeInfoContainer.appendChild(contactInfoContainer);

        // Home Review Container
        const homeReviewsContainer = homeContainer.cloneNode();
        homeReviewsContainer.setAttribute('id', 'home-reviews-container');

        const reviewsTitle = "Reviews"
        const review1 = "Kinda good! Need a lil hot sauce, but it's kinda good tho. - Detective Carter";
        const review2 = "Very good. - Detective Lee";
        const reviewsTitleNode = document.createTextNode(reviewsTitle);
        const review1Node = document.createTextNode(review1);
        const review2Node = document.createTextNode(review2);

        homeReviewsContainer.appendChild(reviewsTitleNode);
        homeReviewsContainer.appendChild(document.createElement('br'));
        homeReviewsContainer.appendChild(review1Node);
        homeReviewsContainer.appendChild(document.createElement('br'));
        homeReviewsContainer.appendChild(review2Node);


        // Add home containers to homepage container
        homePageContainer.appendChild(homeDisplayContainer);
        homePageContainer.appendChild(homeInfoContainer);
        homePageContainer.appendChild(homeReviewsContainer);

        // Add homepage to content
        content.appendChild(homePageContainer);
    };

    const menuPage = () => {

        // Create menu page container
        const menuContainer = pageContainer.cloneNode();
        menuContainer.setAttribute('id', 'menu-page-container');

        // Create menu title
        const menuTitle = document.createElement('h3');
        menuTitle.classList.add('menu-title');

        // Create menu list
        const menuList = document.createElement('ul');
        menuList.classList.add('menu-list');

        // Create menu item
        const lineItem = document.createElement('li');
        lineItem.classList.add('menu-item');


        // Chinese Menu
        const chineseMenuContainer = menuContainer.cloneNode();
        chineseMenuContainer.setAttribute('id', 'chinese-menu-container');
        
        // Chinese Menu: Title
        const chineseMenuTitle = menuTitle.cloneNode();
        chineseMenuTitle.setAttribute('id', 'chinese-menu-title');
        chineseMenuTitle.textContent = 'Chinese Food';

        // Chinese Menu: List
        const chineseMenuList = menuList.cloneNode();
        const chineseItem1 = lineItem.cloneNode();
        const chineseItem2 = lineItem.cloneNode();
        const chineseItem3 = lineItem.cloneNode();

        const chineseItem1Name = "Big Box of Grease";
        const chineseItem2Name = "Eel";
        const chineseItem3Name = "Camel's Hump";

        chineseItem1.textContent = chineseItem1Name;
        chineseItem2.textContent = chineseItem2Name;
        chineseItem3.textContent = chineseItem3Name;

        chineseMenuList.appendChild(chineseItem1);
        chineseMenuList.appendChild(chineseItem2);
        chineseMenuList.appendChild(chineseItem3);


        chineseMenuContainer.appendChild(chineseMenuTitle);
        chineseMenuContainer.appendChild(chineseMenuList);
        

        // Soul Menu
        const soulMenuContainer = menuContainer.cloneNode();
        soulMenuContainer.setAttribute('id', 'soul-menu-container');

        // Soul Menu: Title
        const soulMenuTitle = menuTitle.cloneNode();
        soulMenuTitle.setAttribute('id', 'soul-menu-title');
        soulMenuTitle.textContent = 'Soul Food';

        // Soul Menu: List
        const soulMenuList = menuList.cloneNode();
        const soulItem1 = lineItem.cloneNode();
        const soulItem2 = lineItem.cloneNode();
        const soulItem3 = lineItem.cloneNode();

        const soulItem1Name = "Ribs";
        const soulItem2Name = "Wings";
        const soulItem3Name = "Fries";

        soulItem1.textContent = soulItem1Name;
        soulItem2.textContent = soulItem2Name;
        soulItem3.textContent = soulItem3Name;

        soulMenuList.appendChild(soulItem1);
        soulMenuList.appendChild(soulItem2);
        soulMenuList.appendChild(soulItem3);

        soulMenuContainer.appendChild(soulMenuTitle);
        soulMenuContainer.appendChild(soulMenuList);

        content.appendChild(chineseMenuContainer);
        content.appendChild(soulMenuContainer);
    };

    const contactPage = () => {

        // Create contact page container
        const contactPageContainer = pageContainer.cloneNode();

        // Create contact page form
        const contactForm = document.createElement('form');
        contactForm.setAttribute('id', 'contact-form');

        // Contact Form Item: Input Containers
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        // Contact Form Item: Text Input
        const textInput = document.createElement('input');
        textInput.type = 'text';

        // Contact Form: Title
        const contactFormTitle = document.createElement('h2');
        contactFormTitle.setAttribute('id', 'contact-form-title');
        contactFormTitle.textContent = 'Contact Us';

        // Contact Form: Name Input Container
        const nameInputContainer = inputContainer.cloneNode();
        nameInputContainer.setAttribute('id', 'name-input-container');

        const firstNameInput = textInput.cloneNode();
        const lastNameInput = textInput.cloneNode();
        nameInputContainer.appendChild(firstNameInput);
        nameInputContainer.appendChild(lastNameInput);

        // Contact Form: Email Input Container
        const emailInputContainer = inputContainer.cloneNode();
        emailInputContainer.setAttribute('id', 'email-input-container');

        const emailInput = textInput.cloneNode();
        emailInputContainer.appendChild(emailInput);

        //Contact Form: Subject Input Container
        const subjectInputContainer = inputContainer.cloneNode();
        subjectInputContainer.setAttribute('id', 'subject-input-container');

        const subjectInput = textInput.cloneNode();
        subjectInputContainer.appendChild(subjectInput);

        //Contact Form: Message Input Container
        const messageInputContainer = inputContainer.cloneNode();
        messageInputContainer.setAttribute('id', 'message-input-container');

        const messageInput = textInput.cloneNode();
        messageInputContainer.appendChild(messageInput);

        contactForm.appendChild(contactFormTitle);
        contactForm.appendChild(nameInputContainer);
        contactForm.appendChild(emailInputContainer);
        contactForm.appendChild(subjectInputContainer);
        contactForm.appendChild(messageInputContainer);
        
        contactPageContainer.appendChild(contactForm);

        content.appendChild(contactPageContainer);
    };

    return {
        homePage,
        menuPage,
        contactPage
    }
})();