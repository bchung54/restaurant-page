import {Page} from './page.js';
import {homePage} from './home.js';
import './reset.css';
import './style.css';

Page.initPageLoad();

homePage.load(document.getElementById('content'));