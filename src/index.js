import {Page} from './page.js';
import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';
import './style.css';

console.log("Noods on Noods");

Page.initPageLoad();

let currentTab = document.getElementById('home-tab');
const contentContainer = document.getElementById('content');

const tabClick = (e) => {
    if (e.target.classList.contains('open-tab')) {return};
    contentContainer.removeChild(content.firstChild);
    
    console.log(currentTab);
    currentTab.classList.toggle('open-tab');
    e.target.classList.toggle('open-tab');
    currentTab = e.target;

    let tabName = e.target.getAttribute('id');
    if (tabName == 'home-tab') {homePage.load(content)};
    if (tabName == 'menu-tab') {menuPage.load(content)};
    if (tabName == 'contact-tab') {contactPage.load(content)};
};



document.getElementById('home-tab').addEventListener('click', tabClick);
document.getElementById('menu-tab').addEventListener('click', tabClick);
document.getElementById('contact-tab').addEventListener('click', tabClick);

homePage.load(contentContainer);