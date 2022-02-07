import Noods from './noodles.jpg';

export const Page = ( () => {
    const loadPage = () => {
        const content = document.getElementById('content');
        content.innerHTML = 'Come taste our noods ;)';
        
        const myImage = new Image();
        myImage.src = Noods;

        content.appendChild(myImage);
    };

    return {
        loadPage
    }
})();

Page.loadPage();