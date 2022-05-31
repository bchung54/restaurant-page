import {createContainer, createh3} from './helpers.js';

export const contactPage = ( () => {

    // Helper Functions
    //
    // Helper Function: Create text input with containers
    const createInputWithContainer = (labelText) => {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        const label = document.createElement('label');
        label.textContent = labelText;
        label.setAttribute('for', labelText)
        label.classList.add('form-label');

        const inputElement = document.createElement('input');
        inputElement.type = 'text';

        inputElement.classList.add('contact-input');
        inputElement.setAttribute('id', labelText.toLowerCase());
        inputElement.setAttribute('placeholder', labelText.toLowerCase());
        inputElement.required = true;
        // inputElement.addEventListener('onkeyup', function() {
        //     this.setAttribute('value', this.value);
        // });

        inputContainer.append(inputElement);
        inputContainer.append(label);
        return inputContainer;
    };

    const load = (pageContainer) => {

        // Create contact page container
        const contactContent = createContainer('page-content', 'contact-content');

        const contactPageContainer = createContainer('contact-container', 'contact-group');

        // Create contact page form
        const contactForm = document.createElement('form');
        contactForm.classList.add('form');

        // Contact Page Title
        const contactPageTitle = createh3('Contact Us');

        // Contact Form
        const nameInputContainer = createInputWithContainer("Name", 'name-input');
        const emailInputContainer = createInputWithContainer("Email", 'email-input');
        const messageInputContainer = createInputWithContainer("Message", 'message-input');
        // const submitInputContainer= createInputWithContainer("Submit", 'submit-input');
        const submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Send';
        submit.classList.add('button');


        contactForm.append(nameInputContainer);
        contactForm.append(emailInputContainer);
        contactForm.append(messageInputContainer);
        contactForm.append(submit);

        // Contact Map
        const mapFrame = document.createElement('iframe');
        mapFrame.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211555.60690124935!2d-118.31121046769533!3d34.05524958302324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c659a7223297%3A0x5224ad37b833f2fc!2sFoo-Chow%20Restaurant!5e0!3m2!1sen!2sus!4v1654006417952!5m2!1sen!2sus");
        mapFrame.setAttribute('allowfullscreen', "");
        mapFrame.setAttribute('height', 1000);
        mapFrame.setAttribute('width', 750);
        mapFrame.setAttribute('aria-hidden', false);

        contactContent.append(contactPageTitle);
        contactPageContainer.append(contactForm);
        contactPageContainer.append(mapFrame);
        contactContent.append(contactPageContainer);
        pageContainer.append(contactContent);
    };
    
    return {
        load
    }
})();