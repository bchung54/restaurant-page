import House from './front.png';

export const homePage = ( () => {

    // Helper Functions
    //
    // Helper Function: Create Container
    const createContainer = (className, id) => {
        const container = document.createElement('div');
        container.classList.add(className);
        container.setAttribute('id', id);
        return container;
    };
    // Helper Function: Create Paragraph
    const createParagraph = (text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
    };
    // Helper Function: Create Info Heading
    const createInfoHeading = (text) => {
        const heading = document.createElement('h3');
        heading.textContent = text;
        return heading;
    };
    // Helper Function: Info Block Builder
    const buildInfoBlock = (container, titleNode, line1Node, line2Node) => {
        container.append(titleNode);
        container.append(line1Node);
        container.append(line2Node);
        return container;
    };

    const load = (contentContainer) => {

        // Create homepage container
        const homePageContainer = document.createElement('div');
        homePageContainer.setAttribute('id', 'home-page-container');


        // Home Display Container
        const homeDisplayContainer = createContainer('home-container', 'home-display-container');

        // Home Display Container: Add image to home display
        const myImage = new Image();
        myImage.src = House;
        homeDisplayContainer.append(myImage);

        // Home Display Container: Add copy to home display
        const copyNode = document.createElement('p');
        copyNode.textContent = "Come try out our cheap greasy food. We serve the best Chinese and Soul food in town! Available for lunch, dinner, and banquets.";
        homeDisplayContainer.append(copyNode);
        

        // Home Info Container
        const homeInfoContainer = createContainer('home-container', 'home-info-container');

        // Home Info Container: Location container
        const locationContainer = createContainer('info-subcontainer', 'location-subcontainer');
        const locationTitle = createInfoHeading("Location");
        const locationLine1 = createParagraph("949 North Hill Street");
        const locationLine2 = createParagraph("Los Angeles, CA 90012");

        const locationBlock = buildInfoBlock(locationContainer, locationTitle, locationLine1, locationLine2);

        homeInfoContainer.append(locationBlock);

        // Home Info Container: Hours container
        const hoursContainer = createContainer('info-subcontainer', 'hours-subcontainer');
        const hoursTitle = createInfoHeading("Hours");
        const hours = createParagraph("11am to 9pm");
        const days = createParagraph("Closed Fridays");

        const hoursBlock = buildInfoBlock(hoursContainer, hoursTitle, hours, days);

        homeInfoContainer.append(hoursBlock);
        
        // Home Info Container: Contact Info container
        const contactInfoContainer = createContainer('info-subcontainer', 'contact-info-subcontainer');

        const contactInfoTitle = createInfoHeading("Contact");
        const phone = createParagraph("(555) 555-5555");
        const email = createParagraph("juntao@foochow.com");

        const contactBlock = buildInfoBlock(contactInfoContainer, contactInfoTitle, phone, email);

        homeInfoContainer.append(contactBlock);

        // Home Review Container
        const homeReviewsContainer = createContainer('home-container', 'home-reviews-container');

        const reviewsTitle = createInfoHeading("Reviews");
        const review1 = createParagraph("Kinda good! Need a lil hot sauce, but it's kinda good tho. - James Carter");
        const review2 = createParagraph("Very good. - Inspector Lee");

        buildInfoBlock(homeReviewsContainer, reviewsTitle, review1, review2);


        // Add home containers to homepage container
        homePageContainer.append(homeDisplayContainer);
        homePageContainer.append(homeInfoContainer);
        homePageContainer.append(homeReviewsContainer);

        contentContainer.append(homePageContainer);
    };

    return {
        load
    }
})();