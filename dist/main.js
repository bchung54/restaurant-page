/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/init-load.js":
/*!**************************!*\
  !*** ./src/init-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _front_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front.png */ "./src/front.png");


const Page = ( () => {
    const content = document.getElementById('content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    const homePage = () => {

        // Create homepage container
        const homePageContainer = pageContainer.cloneNode();
        homePageContainer.setAttribute('id', 'home-page-container');

        // Home sub-containers
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home-container');


        // Home Display Container
        const homeDisplayContainer = homeContainer.cloneNode();
        homeDisplayContainer.setAttribute('id', 'home-display-container');

        // Home Display Container: Add image to home display
        const myImage = new Image();
        myImage.src = _front_png__WEBPACK_IMPORTED_MODULE_0__;
        homeDisplayContainer.appendChild(myImage);

        // Home Display Container: Add copy to home display
        const copy = "Come try out our cheap greasy food. We serve the best Chinese and Soul food in town! Available for lunch, dinner, and banquets."
        const copyNode = document.createTextNode(copy);
        homeDisplayContainer.appendChild(copyNode);
        

        // Home Info Container
        const homeInfoContainer = homeContainer.cloneNode();
        homeInfoContainer.setAttribute('id', 'home-info-container');

        // Home Info Container: Setup info sub-containers
        const infoSubContainer = document.createElement('div');
        infoSubContainer.classList.add('info-subcontainer');

        // Home Info Container: Location container
        const locationContainer = infoSubContainer.cloneNode();
        locationContainer.setAttribute('id', 'location-subcontainer');
        
        const locationTitle = "Location";
        const locationLine1 = "949 North Hill Street";
        const locationLine2 = "Los Angeles, CA 90012";
        const locationTitleNode = document.createTextNode(locationTitle);
        const location1Node = document.createTextNode(locationLine1);
        const location2Node = document.createTextNode(locationLine2);

        locationContainer.appendChild(locationTitleNode);
        locationContainer.appendChild(document.createElement('br'));
        locationContainer.appendChild(document.createElement('br'));
        locationContainer.appendChild(location1Node);
        locationContainer.appendChild(document.createElement('br'));
        locationContainer.appendChild(location2Node);

        homeInfoContainer.appendChild(locationContainer);

        // Home Info Container: Hours container
        const hoursContainer = infoSubContainer.cloneNode();
        hoursContainer.setAttribute('id', 'hours-subcontainer');

        const hoursTitle = "Hours";
        const hours = "11am to 11pm";
        const days = "Closed Fridays";
        const hoursTitleNode = document.createTextNode(hoursTitle);
        const hoursNode = document.createTextNode(hours);
        const daysNode = document.createTextNode(days);

        hoursContainer.appendChild(hoursTitleNode);
        hoursContainer.appendChild(document.createElement('br'));
        hoursContainer.appendChild(document.createElement('br'));
        hoursContainer.appendChild(hoursNode);
        hoursContainer.appendChild(document.createElement('br'));
        hoursContainer.appendChild(daysNode);

        homeInfoContainer.appendChild(hoursContainer);
        
        // Home Info Container: Contact Info container
        const contactInfoContainer = infoSubContainer.cloneNode();
        contactInfoContainer.setAttribute('id', 'contact-info-subcontainer');

        const contactInfoTitle = "Contact";
        const phone = "(555) 555-5555";
        const email = "juntao@foochow.com";
        const contactTitleNode = document.createTextNode(contactInfoTitle);
        const phoneNode = document.createTextNode(phone);
        const emailNode = document.createTextNode(email);

        contactInfoContainer.appendChild(contactTitleNode);
        contactInfoContainer.appendChild(document.createElement('br'));
        contactInfoContainer.appendChild(document.createElement('br'));
        contactInfoContainer.appendChild(phoneNode);
        contactInfoContainer.appendChild(document.createElement('br'));
        contactInfoContainer.appendChild(emailNode);

        homeInfoContainer.appendChild(contactInfoContainer);

        // Home Review Container
        const homeReviewsContainer = homeContainer.cloneNode();
        homeReviewsContainer.setAttribute('id', 'home-reviews-container');

        const reviewsTitle = "Reviews"
        const review1 = "Kinda good! Need a lil hot sauce, but it's kinda good tho. - Detective Carter";
        const review2 = "Very good. - Detective Lee";
        const reviewsTitleNode = document.createTextNode(reviewsTitle);
        const review1Node = document.createTextNode(review1);
        const review2Node = document.createTextNode(review2);

        homeReviewsContainer.appendChild(reviewsTitleNode);
        homeReviewsContainer.appendChild(document.createElement('br'));
        homeReviewsContainer.appendChild(review1Node);
        homeReviewsContainer.appendChild(document.createElement('br'));
        homeReviewsContainer.appendChild(review2Node);


        // Add home containers to homepage container
        homePageContainer.appendChild(homeDisplayContainer);
        homePageContainer.appendChild(homeInfoContainer);
        homePageContainer.appendChild(homeReviewsContainer);

        // Add homepage to content
        content.appendChild(homePageContainer);
    };

    const menuPage = () => {

        // Create menu page container
        const menuContainer = pageContainer.cloneNode();
        menuContainer.setAttribute('id', 'menu-page-container');

        // Create menu title
        const menuTitle = document.createElement('h3');
        menuTitle.classList.add('menu-title');

        // Create menu list
        const menuList = document.createElement('ul');
        menuList.classList.add('menu-list');

        // Create menu item
        const lineItem = document.createElement('li');
        lineItem.classList.add('menu-item');


        // Chinese Menu
        const chineseMenuContainer = menuContainer.cloneNode();
        chineseMenuContainer.setAttribute('id', 'chinese-menu-container');
        
        // Chinese Menu: Title
        const chineseMenuTitle = menuTitle.cloneNode();
        chineseMenuTitle.setAttribute('id', 'chinese-menu-title');
        chineseMenuTitle.textContent = 'Chinese Food';

        // Chinese Menu: List
        const chineseMenuList = menuList.cloneNode();
        const chineseItem1 = lineItem.cloneNode();
        const chineseItem2 = lineItem.cloneNode();
        const chineseItem3 = lineItem.cloneNode();

        const chineseItem1Name = "Big Box of Grease";
        const chineseItem2Name = "Eel";
        const chineseItem3Name = "Camel's Hump";

        chineseItem1.textContent = chineseItem1Name;
        chineseItem2.textContent = chineseItem2Name;
        chineseItem3.textContent = chineseItem3Name;

        chineseMenuList.appendChild(chineseItem1);
        chineseMenuList.appendChild(chineseItem2);
        chineseMenuList.appendChild(chineseItem3);


        chineseMenuContainer.appendChild(chineseMenuTitle);
        chineseMenuContainer.appendChild(chineseMenuList);
        

        // Soul Menu
        const soulMenuContainer = menuContainer.cloneNode();
        soulMenuContainer.setAttribute('id', 'soul-menu-container');

        // Soul Menu: Title
        const soulMenuTitle = menuTitle.cloneNode();
        soulMenuTitle.setAttribute('id', 'soul-menu-title');
        soulMenuTitle.textContent = 'Soul Food';

        // Soul Menu: List
        const soulMenuList = menuList.cloneNode();
        const soulItem1 = lineItem.cloneNode();
        const soulItem2 = lineItem.cloneNode();
        const soulItem3 = lineItem.cloneNode();

        const soulItem1Name = "Ribs";
        const soulItem2Name = "Wings";
        const soulItem3Name = "Fries";

        soulItem1.textContent = soulItem1Name;
        soulItem2.textContent = soulItem2Name;
        soulItem3.textContent = soulItem3Name;

        soulMenuList.appendChild(soulItem1);
        soulMenuList.appendChild(soulItem2);
        soulMenuList.appendChild(soulItem3);

        soulMenuContainer.appendChild(soulMenuTitle);
        soulMenuContainer.appendChild(soulMenuList);

        content.appendChild(chineseMenuContainer);
        content.appendChild(soulMenuContainer);
    };

    const contactPage = () => {

        // Create contact page container
        const contactPageContainer = pageContainer.cloneNode();

        // Create contact page form
        const contactForm = document.createElement('form');
        contactForm.setAttribute('id', 'contact-form');

        // Contact Form Item: Input Containers
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        // Contact Form Item: Text Input
        const textInput = document.createElement('input');
        textInput.type = 'text';

        // Contact Form: Title
        const contactFormTitle = document.createElement('h2');
        contactFormTitle.setAttribute('id', 'contact-form-title');
        contactFormTitle.textContent = 'Contact Us';

        // Contact Form: Name Input Container
        const nameInputContainer = inputContainer.cloneNode();
        nameInputContainer.setAttribute('id', 'name-input-container');

        const firstNameInput = textInput.cloneNode();
        const lastNameInput = textInput.cloneNode();
        nameInputContainer.appendChild(firstNameInput);
        nameInputContainer.appendChild(lastNameInput);

        // Contact Form: Email Input Container
        const emailInputContainer = inputContainer.cloneNode();
        emailInputContainer.setAttribute('id', 'email-input-container');

        const emailInput = textInput.cloneNode();
        emailInputContainer.appendChild(emailInput);

        //Contact Form: Subject Input Container
        const subjectInputContainer = inputContainer.cloneNode();
        subjectInputContainer.setAttribute('id', 'subject-input-container');

        const subjectInput = textInput.cloneNode();
        subjectInputContainer.appendChild(subjectInput);

        //Contact Form: Message Input Container
        const messageInputContainer = inputContainer.cloneNode();
        messageInputContainer.setAttribute('id', 'message-input-container');

        const messageInput = textInput.cloneNode();
        messageInputContainer.appendChild(messageInput);

        contactForm.appendChild(contactFormTitle);
        contactForm.appendChild(nameInputContainer);
        contactForm.appendChild(emailInputContainer);
        contactForm.appendChild(subjectInputContainer);
        contactForm.appendChild(messageInputContainer);
        
        contactPageContainer.appendChild(contactForm);

        content.appendChild(contactPageContainer);
    };

    return {
        homePage,
        menuPage,
        contactPage
    }
})();

/***/ }),

/***/ "./src/front.png":
/*!***********************!*\
  !*** ./src/front.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3eb692e6768d23aac49.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-load.js */ "./src/init-load.js");


console.log("Noods on Noods");

_init_load_js__WEBPACK_IMPORTED_MODULE_0__.Page.homePage();
_init_load_js__WEBPACK_IMPORTED_MODULE_0__.Page.menuPage();
_init_load_js__WEBPACK_IMPORTED_MODULE_0__.Page.contactPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7O0FBRXpCO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUFLO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZm9DOztBQUVwQzs7QUFFQSx3REFBYTtBQUNiLHdEQUFhO0FBQ2IsMkRBQWdCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvdXNlIGZyb20gJy4vZnJvbnQucG5nJztcblxuZXhwb3J0IGNvbnN0IFBhZ2UgPSAoICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGhvbWVwYWdlIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBob21lUGFnZUNvbnRhaW5lciA9IHBhZ2VDb250YWluZXIuY2xvbmVOb2RlKCk7XG4gICAgICAgIGhvbWVQYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1wYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIEhvbWUgc3ViLWNvbnRhaW5lcnNcbiAgICAgICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGFpbmVyJyk7XG5cblxuICAgICAgICAvLyBIb21lIERpc3BsYXkgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IGhvbWVEaXNwbGF5Q29udGFpbmVyID0gaG9tZUNvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgaG9tZURpc3BsYXlDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gSG9tZSBEaXNwbGF5IENvbnRhaW5lcjogQWRkIGltYWdlIHRvIGhvbWUgZGlzcGxheVxuICAgICAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG15SW1hZ2Uuc3JjID0gSG91c2U7XG4gICAgICAgIGhvbWVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuXG4gICAgICAgIC8vIEhvbWUgRGlzcGxheSBDb250YWluZXI6IEFkZCBjb3B5IHRvIGhvbWUgZGlzcGxheVxuICAgICAgICBjb25zdCBjb3B5ID0gXCJDb21lIHRyeSBvdXQgb3VyIGNoZWFwIGdyZWFzeSBmb29kLiBXZSBzZXJ2ZSB0aGUgYmVzdCBDaGluZXNlIGFuZCBTb3VsIGZvb2QgaW4gdG93biEgQXZhaWxhYmxlIGZvciBsdW5jaCwgZGlubmVyLCBhbmQgYmFucXVldHMuXCJcbiAgICAgICAgY29uc3QgY29weU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb3B5KTtcbiAgICAgICAgaG9tZURpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoY29weU5vZGUpO1xuICAgICAgICBcblxuICAgICAgICAvLyBIb21lIEluZm8gQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IGhvbWVJbmZvQ29udGFpbmVyID0gaG9tZUNvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgaG9tZUluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWluZm8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gSG9tZSBJbmZvIENvbnRhaW5lcjogU2V0dXAgaW5mbyBzdWItY29udGFpbmVyc1xuICAgICAgICBjb25zdCBpbmZvU3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGluZm9TdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWJjb250YWluZXInKTtcblxuICAgICAgICAvLyBIb21lIEluZm8gQ29udGFpbmVyOiBMb2NhdGlvbiBjb250YWluZXJcbiAgICAgICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBpbmZvU3ViQ29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLXN1YmNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IFwiTG9jYXRpb25cIjtcbiAgICAgICAgY29uc3QgbG9jYXRpb25MaW5lMSA9IFwiOTQ5IE5vcnRoIEhpbGwgU3RyZWV0XCI7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uTGluZTIgPSBcIkxvcyBBbmdlbGVzLCBDQSA5MDAxMlwiO1xuICAgICAgICBjb25zdCBsb2NhdGlvblRpdGxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvY2F0aW9uVGl0bGUpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbjFOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobG9jYXRpb25MaW5lMSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uMk5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2NhdGlvbkxpbmUyKTtcblxuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlTm9kZSk7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24xTm9kZSk7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbjJOb2RlKTtcblxuICAgICAgICBob21lSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gSG9tZSBJbmZvIENvbnRhaW5lcjogSG91cnMgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gaW5mb1N1YkNvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy1zdWJjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBob3Vyc1RpdGxlID0gXCJIb3Vyc1wiO1xuICAgICAgICBjb25zdCBob3VycyA9IFwiMTFhbSB0byAxMXBtXCI7XG4gICAgICAgIGNvbnN0IGRheXMgPSBcIkNsb3NlZCBGcmlkYXlzXCI7XG4gICAgICAgIGNvbnN0IGhvdXJzVGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaG91cnNUaXRsZSk7XG4gICAgICAgIGNvbnN0IGhvdXJzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGhvdXJzKTtcbiAgICAgICAgY29uc3QgZGF5c05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXlzKTtcblxuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc1RpdGxlTm9kZSk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNOb2RlKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheXNOb2RlKTtcblxuICAgICAgICBob21lSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICAvLyBIb21lIEluZm8gQ29udGFpbmVyOiBDb250YWN0IEluZm8gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gaW5mb1N1YkNvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29udGFjdEluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWluZm8tc3ViY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFjdEluZm9UaXRsZSA9IFwiQ29udGFjdFwiO1xuICAgICAgICBjb25zdCBwaG9uZSA9IFwiKDU1NSkgNTU1LTU1NTVcIjtcbiAgICAgICAgY29uc3QgZW1haWwgPSBcImp1bnRhb0Bmb29jaG93LmNvbVwiO1xuICAgICAgICBjb25zdCBjb250YWN0VGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGFjdEluZm9UaXRsZSk7XG4gICAgICAgIGNvbnN0IHBob25lTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBob25lKTtcbiAgICAgICAgY29uc3QgZW1haWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZW1haWwpO1xuXG4gICAgICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZU5vZGUpO1xuICAgICAgICBjb250YWN0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgICAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTm9kZSk7XG4gICAgICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBjb250YWN0SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbE5vZGUpO1xuXG4gICAgICAgIGhvbWVJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBIb21lIFJldmlldyBDb250YWluZXJcbiAgICAgICAgY29uc3QgaG9tZVJldmlld3NDb250YWluZXIgPSBob21lQ29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICBob21lUmV2aWV3c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtcmV2aWV3cy1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCByZXZpZXdzVGl0bGUgPSBcIlJldmlld3NcIlxuICAgICAgICBjb25zdCByZXZpZXcxID0gXCJLaW5kYSBnb29kISBOZWVkIGEgbGlsIGhvdCBzYXVjZSwgYnV0IGl0J3Mga2luZGEgZ29vZCB0aG8uIC0gRGV0ZWN0aXZlIENhcnRlclwiO1xuICAgICAgICBjb25zdCByZXZpZXcyID0gXCJWZXJ5IGdvb2QuIC0gRGV0ZWN0aXZlIExlZVwiO1xuICAgICAgICBjb25zdCByZXZpZXdzVGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmV2aWV3c1RpdGxlKTtcbiAgICAgICAgY29uc3QgcmV2aWV3MU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXZpZXcxKTtcbiAgICAgICAgY29uc3QgcmV2aWV3Mk5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXZpZXcyKTtcblxuICAgICAgICBob21lUmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdzVGl0bGVOb2RlKTtcbiAgICAgICAgaG9tZVJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIGhvbWVSZXZpZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlldzFOb2RlKTtcbiAgICAgICAgaG9tZVJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIGhvbWVSZXZpZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlldzJOb2RlKTtcblxuXG4gICAgICAgIC8vIEFkZCBob21lIGNvbnRhaW5lcnMgdG8gaG9tZXBhZ2UgY29udGFpbmVyXG4gICAgICAgIGhvbWVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgaG9tZVBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUluZm9Db250YWluZXIpO1xuICAgICAgICBob21lUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lUmV2aWV3c0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gQWRkIGhvbWVwYWdlIHRvIGNvbnRlbnRcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZUNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIGNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIENyZWF0ZSBtZW51IHBhZ2UgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBwYWdlQ29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1wYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBtZW51IHRpdGxlXG4gICAgICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG1lbnUgbGlzdFxuICAgICAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBtZW51IGl0ZW1cbiAgICAgICAgY29uc3QgbGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaW5lSXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuXG4gICAgICAgIC8vIENoaW5lc2UgTWVudVxuICAgICAgICBjb25zdCBjaGluZXNlTWVudUNvbnRhaW5lciA9IG1lbnVDb250YWluZXIuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNoaW5lc2VNZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hpbmVzZS1tZW51LWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hpbmVzZSBNZW51OiBUaXRsZVxuICAgICAgICBjb25zdCBjaGluZXNlTWVudVRpdGxlID0gbWVudVRpdGxlLmNsb25lTm9kZSgpO1xuICAgICAgICBjaGluZXNlTWVudVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hpbmVzZS1tZW51LXRpdGxlJyk7XG4gICAgICAgIGNoaW5lc2VNZW51VGl0bGUudGV4dENvbnRlbnQgPSAnQ2hpbmVzZSBGb29kJztcblxuICAgICAgICAvLyBDaGluZXNlIE1lbnU6IExpc3RcbiAgICAgICAgY29uc3QgY2hpbmVzZU1lbnVMaXN0ID0gbWVudUxpc3QuY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IGNoaW5lc2VJdGVtMSA9IGxpbmVJdGVtLmNsb25lTm9kZSgpO1xuICAgICAgICBjb25zdCBjaGluZXNlSXRlbTIgPSBsaW5lSXRlbS5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgY2hpbmVzZUl0ZW0zID0gbGluZUl0ZW0uY2xvbmVOb2RlKCk7XG5cbiAgICAgICAgY29uc3QgY2hpbmVzZUl0ZW0xTmFtZSA9IFwiQmlnIEJveCBvZiBHcmVhc2VcIjtcbiAgICAgICAgY29uc3QgY2hpbmVzZUl0ZW0yTmFtZSA9IFwiRWVsXCI7XG4gICAgICAgIGNvbnN0IGNoaW5lc2VJdGVtM05hbWUgPSBcIkNhbWVsJ3MgSHVtcFwiO1xuXG4gICAgICAgIGNoaW5lc2VJdGVtMS50ZXh0Q29udGVudCA9IGNoaW5lc2VJdGVtMU5hbWU7XG4gICAgICAgIGNoaW5lc2VJdGVtMi50ZXh0Q29udGVudCA9IGNoaW5lc2VJdGVtMk5hbWU7XG4gICAgICAgIGNoaW5lc2VJdGVtMy50ZXh0Q29udGVudCA9IGNoaW5lc2VJdGVtM05hbWU7XG5cbiAgICAgICAgY2hpbmVzZU1lbnVMaXN0LmFwcGVuZENoaWxkKGNoaW5lc2VJdGVtMSk7XG4gICAgICAgIGNoaW5lc2VNZW51TGlzdC5hcHBlbmRDaGlsZChjaGluZXNlSXRlbTIpO1xuICAgICAgICBjaGluZXNlTWVudUxpc3QuYXBwZW5kQ2hpbGQoY2hpbmVzZUl0ZW0zKTtcblxuXG4gICAgICAgIGNoaW5lc2VNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaW5lc2VNZW51VGl0bGUpO1xuICAgICAgICBjaGluZXNlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGluZXNlTWVudUxpc3QpO1xuICAgICAgICBcblxuICAgICAgICAvLyBTb3VsIE1lbnVcbiAgICAgICAgY29uc3Qgc291bE1lbnVDb250YWluZXIgPSBtZW51Q29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICBzb3VsTWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NvdWwtbWVudS1jb250YWluZXInKTtcblxuICAgICAgICAvLyBTb3VsIE1lbnU6IFRpdGxlXG4gICAgICAgIGNvbnN0IHNvdWxNZW51VGl0bGUgPSBtZW51VGl0bGUuY2xvbmVOb2RlKCk7XG4gICAgICAgIHNvdWxNZW51VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdzb3VsLW1lbnUtdGl0bGUnKTtcbiAgICAgICAgc291bE1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdTb3VsIEZvb2QnO1xuXG4gICAgICAgIC8vIFNvdWwgTWVudTogTGlzdFxuICAgICAgICBjb25zdCBzb3VsTWVudUxpc3QgPSBtZW51TGlzdC5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3Qgc291bEl0ZW0xID0gbGluZUl0ZW0uY2xvbmVOb2RlKCk7XG4gICAgICAgIGNvbnN0IHNvdWxJdGVtMiA9IGxpbmVJdGVtLmNsb25lTm9kZSgpO1xuICAgICAgICBjb25zdCBzb3VsSXRlbTMgPSBsaW5lSXRlbS5jbG9uZU5vZGUoKTtcblxuICAgICAgICBjb25zdCBzb3VsSXRlbTFOYW1lID0gXCJSaWJzXCI7XG4gICAgICAgIGNvbnN0IHNvdWxJdGVtMk5hbWUgPSBcIldpbmdzXCI7XG4gICAgICAgIGNvbnN0IHNvdWxJdGVtM05hbWUgPSBcIkZyaWVzXCI7XG5cbiAgICAgICAgc291bEl0ZW0xLnRleHRDb250ZW50ID0gc291bEl0ZW0xTmFtZTtcbiAgICAgICAgc291bEl0ZW0yLnRleHRDb250ZW50ID0gc291bEl0ZW0yTmFtZTtcbiAgICAgICAgc291bEl0ZW0zLnRleHRDb250ZW50ID0gc291bEl0ZW0zTmFtZTtcblxuICAgICAgICBzb3VsTWVudUxpc3QuYXBwZW5kQ2hpbGQoc291bEl0ZW0xKTtcbiAgICAgICAgc291bE1lbnVMaXN0LmFwcGVuZENoaWxkKHNvdWxJdGVtMik7XG4gICAgICAgIHNvdWxNZW51TGlzdC5hcHBlbmRDaGlsZChzb3VsSXRlbTMpO1xuXG4gICAgICAgIHNvdWxNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvdWxNZW51VGl0bGUpO1xuICAgICAgICBzb3VsTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VsTWVudUxpc3QpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbmVzZU1lbnVDb250YWluZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNvdWxNZW51Q29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRhY3QgcGFnZSBjb250YWluZXJcbiAgICAgICAgY29uc3QgY29udGFjdFBhZ2VDb250YWluZXIgPSBwYWdlQ29udGFpbmVyLmNsb25lTm9kZSgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjb250YWN0IHBhZ2UgZm9ybVxuICAgICAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWZvcm0nKTtcblxuICAgICAgICAvLyBDb250YWN0IEZvcm0gSXRlbTogSW5wdXQgQ29udGFpbmVyc1xuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICAvLyBDb250YWN0IEZvcm0gSXRlbTogVGV4dCBJbnB1dFxuICAgICAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0ZXh0SW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICAvLyBDb250YWN0IEZvcm06IFRpdGxlXG4gICAgICAgIGNvbnN0IGNvbnRhY3RGb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb250YWN0Rm9ybVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1mb3JtLXRpdGxlJyk7XG4gICAgICAgIGNvbnRhY3RGb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG5cbiAgICAgICAgLy8gQ29udGFjdCBGb3JtOiBOYW1lIElucHV0IENvbnRhaW5lclxuICAgICAgICBjb25zdCBuYW1lSW5wdXRDb250YWluZXIgPSBpbnB1dENvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgbmFtZUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZS1pbnB1dC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IHRleHRJbnB1dC5jbG9uZU5vZGUoKTtcbiAgICAgICAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IHRleHRJbnB1dC5jbG9uZU5vZGUoKTtcbiAgICAgICAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0TmFtZUlucHV0KTtcbiAgICAgICAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhc3ROYW1lSW5wdXQpO1xuXG4gICAgICAgIC8vIENvbnRhY3QgRm9ybTogRW1haWwgSW5wdXQgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXRDb250YWluZXIgPSBpbnB1dENvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICAgICAgZW1haWxJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSB0ZXh0SW5wdXQuY2xvbmVOb2RlKCk7XG4gICAgICAgIGVtYWlsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5cbiAgICAgICAgLy9Db250YWN0IEZvcm06IFN1YmplY3QgSW5wdXQgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IHN1YmplY3RJbnB1dENvbnRhaW5lciA9IGlucHV0Q29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICBzdWJqZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJqZWN0LWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHN1YmplY3RJbnB1dCA9IHRleHRJbnB1dC5jbG9uZU5vZGUoKTtcbiAgICAgICAgc3ViamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1YmplY3RJbnB1dCk7XG5cbiAgICAgICAgLy9Db250YWN0IEZvcm06IE1lc3NhZ2UgSW5wdXQgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJbnB1dENvbnRhaW5lciA9IGlucHV0Q29udGFpbmVyLmNsb25lTm9kZSgpO1xuICAgICAgICBtZXNzYWdlSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlLWlucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IHRleHRJbnB1dC5jbG9uZU5vZGUoKTtcbiAgICAgICAgbWVzc2FnZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG5cbiAgICAgICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1UaXRsZSk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXRDb250YWluZXIpO1xuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJqZWN0SW5wdXRDb250YWluZXIpO1xuICAgICAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXRDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgY29udGFjdFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2VDb250YWluZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lUGFnZSxcbiAgICAgICAgbWVudVBhZ2UsXG4gICAgICAgIGNvbnRhY3RQYWdlXG4gICAgfVxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge1BhZ2V9IGZyb20gJy4vaW5pdC1sb2FkLmpzJztcblxuY29uc29sZS5sb2coXCJOb29kcyBvbiBOb29kc1wiKTtcblxuUGFnZS5ob21lUGFnZSgpO1xuUGFnZS5tZW51UGFnZSgpO1xuUGFnZS5jb250YWN0UGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==