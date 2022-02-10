import {Page} from './page.js';
import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';
import './style.css';

console.log("Noods on Noods");

Page.initPageLoad();

const content = document.getElementById('content');
homePage.load(content);