export const contactPage = ( () => {

    // Helper Functions
    //
    // Helper Function: Create text input with containers
    const createInputWithContainer = (label, inputId) => {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        const inputTitle = document.createElement('h5');
        inputTitle.textContent = label;

        let textInput;

        if (label == "Message") {
            textInput = document.createElement('textarea');
        } else {
            textInput = document.createElement('input');
            textInput.type = 'text';
        };

        textInput.classList.add('contact-input');
        textInput.setAttribute('id', inputId);

        inputContainer.append(inputTitle);
        inputContainer.append(textInput);

        return inputContainer;
    };

    const load = (contentContainer) => {

        // Create contact page container
        const contactPageContainer = document.createElement('div');
        contactPageContainer.setAttribute('id', 'contact-page-container');

        // Create contact page form
        const contactForm = document.createElement('form');
        contactForm.setAttribute('id', 'contact-form');

        // Contact Form: Title
        const contactFormTitle = document.createElement('h2');
        contactFormTitle.setAttribute('id', 'contact-form-title');
        contactFormTitle.textContent = 'Contact Us';

        // Contact Form: Name Input Container
        const nameInputContainer = createInputWithContainer("Name", 'name-input');

        // Contact Form: Email Input Container
        const emailInputContainer = createInputWithContainer("Email", 'email-input');

        // Contact Form: Subject Input Container
        const subjectInputContainer = createInputWithContainer("Subject", 'subject-input');

        // Contact Form: Message Input Container
        const messageInputContainer = createInputWithContainer("Message", 'message-input');

        // Contact Form: Submit Button
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('input-container');
        btnContainer.setAttribute('id', 'btn-container');
        const submitButton = document.createElement('button');
        submitButton.setAttribute('form', 'contact-form');
        submitButton.textContent = 'SUBMIT';
        btnContainer.append(submitButton);

        contactForm.append(contactFormTitle);
        contactForm.append(nameInputContainer);
        contactForm.append(emailInputContainer);
        contactForm.append(subjectInputContainer);
        contactForm.append(messageInputContainer);
        contactForm.append(btnContainer);
        
        contactPageContainer.append(contactForm);
        contentContainer.append(contactPageContainer);
    };
    
    return {
        load
    }
})();