import House from './front.png';

export const Page = ( () => {
    const homePage = () => {
        
        const content = document.getElementById('content');

        // Setup image display and description for homepage
        const homeDisplayContainer = document.createElement('div');
        homeDisplayContainer.setAttribute('id', 'home-display-container');

        const myImage = new Image();
        myImage.src = House;
        homeDisplayContainer.appendChild(myImage);

        const copy = "Come try out our cheap greasy food. We serve the best Chinese and Soul food in town! Available for lunch, dinner, and banquets."
        const copyNode = document.createTextNode(copy);
        homeDisplayContainer.appendChild(copyNode);
        
        // Setup info container for homepage
        const homeInfoContainer = document.createElement('div');
        homeInfoContainer.setAttribute('id', 'home-info-container');

        // Setup location container
        const locationContainer = document.createElement('div');
        locationContainer.classList.add('info-subcontainer');
        
        const locationTitle = "Location";
        const locationLine1 = "949 North Hill Street";
        const locationLine2 = "Los Angeles, CA 90012";
        const locationTitleNode = document.createTextNode(locationTitle);
        const location1Node = document.createTextNode(locationLine1);
        const location2Node = document.createTextNode(locationLine2);
        var br = document.createElement('br');

        locationContainer.appendChild(locationTitleNode);
        locationContainer.appendChild(br);
        locationContainer.appendChild(br.cloneNode());
        locationContainer.appendChild(location1Node);
        locationContainer.appendChild(br.cloneNode());
        locationContainer.appendChild(location2Node);

        homeInfoContainer.appendChild(locationContainer);

        // Setup hours container
        const hoursContainer = document.createElement('div');
        hoursContainer.classList.add('info-subcontainer');

        const hoursTitle = "Hours";
        const hours = "11am to 11pm";
        const days = "Closed Fridays";
        const hoursTitleNode = document.createTextNode(hoursTitle);
        const hoursNode = document.createTextNode(hours);
        const daysNode = document.createTextNode(days);

        hoursContainer.appendChild(hoursTitleNode);
        hoursContainer.appendChild(br.cloneNode());
        hoursContainer.appendChild(br.cloneNode());
        hoursContainer.appendChild(hoursNode);
        hoursContainer.appendChild(br.cloneNode());
        hoursContainer.appendChild(daysNode);

        homeInfoContainer.appendChild(hoursContainer);
        
        // Setup contact container
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('info-subcontainer');

        const contactTitle = "Contact";
        const phone = "(555) 555-5555";
        const email = "juntao@foochow.com";
        const contactTitleNode = document.createTextNode(contactTitle);
        const phoneNode = document.createTextNode(phone);
        const emailNode = document.createTextNode(email);

        contactContainer.appendChild(contactTitleNode);
        contactContainer.appendChild(br.cloneNode());
        contactContainer.appendChild(br.cloneNode());
        contactContainer.appendChild(phoneNode);
        contactContainer.appendChild(br.cloneNode());
        contactContainer.appendChild(emailNode);

        homeInfoContainer.appendChild(contactContainer);

        // Setup review container
        const homeReviewsContainer = document.createElement('div');
        homeReviewsContainer.classList.add('info-subcontainer');

        const reviewsTitle = "Reviews"
        const review1 = "Kinda good! Need a lil hot sauce, but it's kinda good tho. - Detective Carter";
        const review2 = "Very good. - Detective Lee";
        const reviewsTitleNode = document.createTextNode(reviewsTitle);
        const review1Node = document.createTextNode(review1);
        const review2Node = document.createTextNode(review2);

        homeReviewsContainer.appendChild(reviewsTitleNode);
        homeReviewsContainer.appendChild(br.cloneNode());
        homeReviewsContainer.appendChild(review1Node);
        homeReviewsContainer.appendChild(br.cloneNode());
        homeReviewsContainer.appendChild(review2Node);

        content.appendChild(homeDisplayContainer);
        content.appendChild(homeInfoContainer);
        content.appendChild(homeReviewsContainer);


    };

    return {
        homePage
    }
})();