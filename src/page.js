export const Page = ( () => {

    // Helper Function
    //
    // Helper Function: Create list item
    const addListItems = (list, arr) => {
        for (let i = 0; i < arr.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = arr[i];
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
        const tabArray = ["HOME", "MENU", "CONTACT"];
        navBar.append(addListItems(list, tabArray));

        header.append(headline);
        header.append(navBar);

        body.prepend(header);
    };

    return {
        initPageLoad
    }
})();