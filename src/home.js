import {createContainer, createParagraph, createh3} from './helpers.js';

export const homePage = (() => {

    // Home Page Info Block Builder
    const buildHomeInfoBlock = (container, titleNode, line1Node, line2Node) => {
        container.append(titleNode);
        container.append(document.createElement('hr'));
        container.append(line1Node);
        container.append(line2Node);
        return container;
    };

    const load = (pageContainer) => {

        // Create Home Page container
        const homePageContainer = createContainer('page-content', 'home-content');

        // Home Display Container
        const homeDisplayContainer = createContainer('home-container', 'home-display-container');

        // Home Display Container: Order now
        const orderButton = document.createElement('button');
        orderButton.textContent = 'ORDER NOW';
        orderButton.classList.add('button');

        // Home Display Container: Add copy to home display
        const copyNode = createParagraph("Come try out our cheap greasy food. We serve the best Chinese and Soul food in town! Available for lunch, dinner, and banquets.");
        homeDisplayContainer.append(copyNode);
        homeDisplayContainer.append(orderButton);
        

        // Home Info Container
        const homeInfoContainer = createContainer('home-container', 'home-info-container');

        // Home Info Container: Location container
        const locationContainer = createContainer('info-subcontainer', 'location-subcontainer');
        const locationTitle = createh3("Location");
        const locationLine1 = createParagraph("949 North Hill Street");
        const locationLine2 = createParagraph("Los Angeles, CA 90012");

        const locationBlock = buildHomeInfoBlock(locationContainer, locationTitle, locationLine1, locationLine2);

        homeInfoContainer.append(locationBlock);

        // Home Info Container: Hours container
        const hoursContainer = createContainer('info-subcontainer', 'hours-subcontainer');
        const hoursTitle = createh3("Hours");
        const hours = createParagraph("11am to 9pm");
        const days = createParagraph("Closed Fridays");

        const hoursBlock = buildHomeInfoBlock(hoursContainer, hoursTitle, hours, days);

        homeInfoContainer.append(hoursBlock);
        
        // Home Info Container: Contact Info container
        // const contactInfoContainer = createContainer('info-subcontainer', 'contact-info-subcontainer');

        // const contactInfoTitle = createh3("Contact");
        // const phone = createParagraph("(555) 555-5555");
        // const email = createParagraph("juntao@foochow.com");

        // const contactBlock = buildHomeInfoBlock(contactInfoContainer, contactInfoTitle, phone, email);

        // homeInfoContainer.append(contactBlock);

        // Home Review Container
        const homeReviewsContainer = createContainer('home-container', 'home-reviews-container');

        const reviewsTitle = createh3("Reviews");
        const review1 = createParagraph("Kinda good! Need a lil hot sauce, but it's kinda good tho - James Carter");
        const review2 = createParagraph("Very good. - Inspector Lee");

        buildHomeInfoBlock(homeReviewsContainer, reviewsTitle, review1, review2);

        const homeGroupContainer = createContainer('home-group-container', 'home-group');
        homeGroupContainer.append(homeInfoContainer);
        homeGroupContainer.append(homeReviewsContainer)


        // Add home containers to homepage container
        homePageContainer.append(homeDisplayContainer);
        homePageContainer.append(homeGroupContainer);

        pageContainer.append(homePageContainer);
    };

    return {
        load
    }
})();