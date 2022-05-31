// Helper Functions
//
// Create Container
const createContainer = (className, id) => {
    const container = document.createElement('div');
    container.classList.add(className);
    container.setAttribute('id', id);
    return container;
};
// Create Paragraph
const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
};
// Create H3 Heading
const createh3 = (text) => {
    const heading = document.createElement('h3');
    heading.textContent = text;
    return heading;
};

export {
    createContainer,
    createParagraph,
    createh3
}