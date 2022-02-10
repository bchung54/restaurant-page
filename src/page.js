export const Page = ( () => {

    // Helper Function
    //
    // Helper Function: Create list item
    const addListItems = (list, arr) => {
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

    const initPageLoad = () => {
        const body = document.body;
    
        const header = document.createElement('header');
        const headline = document.createElement('h1');
        headline.setAttribute('id', 'headline');
        headline.textContent = "Foo Chow Restaurant";
        
        const navBar = document.createElement('nav');
        const list = document.createElement('ul');
        const tabArray = ["home", "menu", "contact"];
        navBar.append(addListItems(list, tabArray));

        header.append(headline);
        header.append(navBar);

        body.prepend(header);
    };

    return {
        initPageLoad
    }
})();