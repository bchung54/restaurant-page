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
    const homePage = () => {
        
        const content = document.getElementById('content');

        // Setup image display and description for homepage
        const homeDisplayContainer = document.createElement('div');
        homeDisplayContainer.setAttribute('id', 'home-display-container');

        const myImage = new Image();
        myImage.src = _front_png__WEBPACK_IMPORTED_MODULE_0__;
        homeDisplayContainer.appendChild(myImage);

        const copy = "Come try out our cheap greasy food. We serve the best Chinese and Soul food in town! Available for lunch, dinner, and banquets."
        const copyNode = document.createTextNode(copy);
        homeDisplayContainer.appendChild(copyNode);
        
        // Setup info container for homepage
        const homeInfoContainer = document.createElement('div');
        homeInfoContainer.setAttribute('id', 'home-info-container');

        // Setup location container
        const locationContainer = document.createElement('div');
        locationContainer.classList.add('info-subcontainer');
        
        const locationTitle = "Location";
        const locationLine1 = "949 North Hill Street";
        const locationLine2 = "Los Angeles, CA 90012";
        const locationTitleNode = document.createTextNode(locationTitle);
        const location1Node = document.createTextNode(locationLine1);
        const location2Node = document.createTextNode(locationLine2);
        var br = document.createElement('br');

        locationContainer.appendChild(locationTitleNode);
        locationContainer.appendChild(br);
        locationContainer.appendChild(br.cloneNode());
        locationContainer.appendChild(location1Node);
        locationContainer.appendChild(br.cloneNode());
        locationContainer.appendChild(location2Node);

        homeInfoContainer.appendChild(locationContainer);

        // Setup hours container
        const hoursContainer = document.createElement('div');
        hoursContainer.classList.add('info-subcontainer');

        const hoursTitle = "Hours";
        const hours = "11am to 11pm";
        const days = "Closed Fridays";
        const hoursTitleNode = document.createTextNode(hoursTitle);
        const hoursNode = document.createTextNode(hours);
        const daysNode = document.createTextNode(days);

        hoursContainer.appendChild(hoursTitleNode);
        hoursContainer.appendChild(br.cloneNode());
        hoursContainer.appendChild(br.cloneNode());
        hoursContainer.appendChild(hoursNode);
        hoursContainer.appendChild(br.cloneNode());
        hoursContainer.appendChild(daysNode);

        homeInfoContainer.appendChild(hoursContainer);
        
        // Setup contact container
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('info-subcontainer');

        const contactTitle = "Contact";
        const phone = "(555) 555-5555";
        const email = "juntao@foochow.com";
        const contactTitleNode = document.createTextNode(contactTitle);
        const phoneNode = document.createTextNode(phone);
        const emailNode = document.createTextNode(email);

        contactContainer.appendChild(contactTitleNode);
        contactContainer.appendChild(br.cloneNode());
        contactContainer.appendChild(br.cloneNode());
        contactContainer.appendChild(phoneNode);
        contactContainer.appendChild(br.cloneNode());
        contactContainer.appendChild(emailNode);

        homeInfoContainer.appendChild(contactContainer);

        // Setup review container
        const homeReviewsContainer = document.createElement('div');
        homeReviewsContainer.classList.add('info-subcontainer');

        const reviewsTitle = "Reviews"
        const review1 = "Kinda good! Need a lil hot sauce, but it's kinda good tho. - Detective Carter";
        const review2 = "Very good. - Detective Lee";
        const reviewsTitleNode = document.createTextNode(reviewsTitle);
        const review1Node = document.createTextNode(review1);
        const review2Node = document.createTextNode(review2);

        homeReviewsContainer.appendChild(reviewsTitleNode);
        homeReviewsContainer.appendChild(br.cloneNode());
        homeReviewsContainer.appendChild(review1Node);
        homeReviewsContainer.appendChild(br.cloneNode());
        homeReviewsContainer.appendChild(review2Node);

        content.appendChild(homeDisplayContainer);
        content.appendChild(homeInfoContainer);
        content.appendChild(homeReviewsContainer);


    };

    return {
        homePage
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7O0FBRXpCO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix1Q0FBSztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztVQy9HRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZm9DOztBQUVwQztBQUNBLHdEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvdXNlIGZyb20gJy4vZnJvbnQucG5nJztcblxuZXhwb3J0IGNvbnN0IFBhZ2UgPSAoICgpID0+IHtcbiAgICBjb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgICAgIC8vIFNldHVwIGltYWdlIGRpc3BsYXkgYW5kIGRlc2NyaXB0aW9uIGZvciBob21lcGFnZVxuICAgICAgICBjb25zdCBob21lRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGlzcGxheUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtZGlzcGxheS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG15SW1hZ2Uuc3JjID0gSG91c2U7XG4gICAgICAgIGhvbWVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IGNvcHkgPSBcIkNvbWUgdHJ5IG91dCBvdXIgY2hlYXAgZ3JlYXN5IGZvb2QuIFdlIHNlcnZlIHRoZSBiZXN0IENoaW5lc2UgYW5kIFNvdWwgZm9vZCBpbiB0b3duISBBdmFpbGFibGUgZm9yIGx1bmNoLCBkaW5uZXIsIGFuZCBiYW5xdWV0cy5cIlxuICAgICAgICBjb25zdCBjb3B5Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvcHkpO1xuICAgICAgICBob21lRGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5Tm9kZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBTZXR1cCBpbmZvIGNvbnRhaW5lciBmb3IgaG9tZXBhZ2VcbiAgICAgICAgY29uc3QgaG9tZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZUluZm9Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWluZm8tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gU2V0dXAgbG9jYXRpb24gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tc3ViY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBsb2NhdGlvblRpdGxlID0gXCJMb2NhdGlvblwiO1xuICAgICAgICBjb25zdCBsb2NhdGlvbkxpbmUxID0gXCI5NDkgTm9ydGggSGlsbCBTdHJlZXRcIjtcbiAgICAgICAgY29uc3QgbG9jYXRpb25MaW5lMiA9IFwiTG9zIEFuZ2VsZXMsIENBIDkwMDEyXCI7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uVGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobG9jYXRpb25UaXRsZSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uMU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsb2NhdGlvbkxpbmUxKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24yTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxvY2F0aW9uTGluZTIpO1xuICAgICAgICB2YXIgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuXG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGVOb2RlKTtcbiAgICAgICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnIpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMU5vZGUpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uMk5vZGUpO1xuXG4gICAgICAgIGhvbWVJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBTZXR1cCBob3VycyBjb250YWluZXJcbiAgICAgICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWJjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBob3Vyc1RpdGxlID0gXCJIb3Vyc1wiO1xuICAgICAgICBjb25zdCBob3VycyA9IFwiMTFhbSB0byAxMXBtXCI7XG4gICAgICAgIGNvbnN0IGRheXMgPSBcIkNsb3NlZCBGcmlkYXlzXCI7XG4gICAgICAgIGNvbnN0IGhvdXJzVGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaG91cnNUaXRsZSk7XG4gICAgICAgIGNvbnN0IGhvdXJzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGhvdXJzKTtcbiAgICAgICAgY29uc3QgZGF5c05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXlzKTtcblxuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc1RpdGxlTm9kZSk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc05vZGUpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheXNOb2RlKTtcblxuICAgICAgICBob21lSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICAvLyBTZXR1cCBjb250YWN0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWJjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjb250YWN0VGl0bGUgPSBcIkNvbnRhY3RcIjtcbiAgICAgICAgY29uc3QgcGhvbmUgPSBcIig1NTUpIDU1NS01NTU1XCI7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gXCJqdW50YW9AZm9vY2hvdy5jb21cIjtcbiAgICAgICAgY29uc3QgY29udGFjdFRpdGxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRhY3RUaXRsZSk7XG4gICAgICAgIGNvbnN0IHBob25lTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBob25lKTtcbiAgICAgICAgY29uc3QgZW1haWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZW1haWwpO1xuXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlTm9kZSk7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU5vZGUpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbE5vZGUpO1xuXG4gICAgICAgIGhvbWVJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuXG4gICAgICAgIC8vIFNldHVwIHJldmlldyBjb250YWluZXJcbiAgICAgICAgY29uc3QgaG9tZVJldmlld3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZVJldmlld3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1zdWJjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCByZXZpZXdzVGl0bGUgPSBcIlJldmlld3NcIlxuICAgICAgICBjb25zdCByZXZpZXcxID0gXCJLaW5kYSBnb29kISBOZWVkIGEgbGlsIGhvdCBzYXVjZSwgYnV0IGl0J3Mga2luZGEgZ29vZCB0aG8uIC0gRGV0ZWN0aXZlIENhcnRlclwiO1xuICAgICAgICBjb25zdCByZXZpZXcyID0gXCJWZXJ5IGdvb2QuIC0gRGV0ZWN0aXZlIExlZVwiO1xuICAgICAgICBjb25zdCByZXZpZXdzVGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmV2aWV3c1RpdGxlKTtcbiAgICAgICAgY29uc3QgcmV2aWV3MU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXZpZXcxKTtcbiAgICAgICAgY29uc3QgcmV2aWV3Mk5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXZpZXcyKTtcblxuICAgICAgICBob21lUmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdzVGl0bGVOb2RlKTtcbiAgICAgICAgaG9tZVJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICAgICAgICBob21lUmV2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXcxTm9kZSk7XG4gICAgICAgIGhvbWVSZXZpZXdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgICAgICAgaG9tZVJldmlld3NDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Mk5vZGUpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpc3BsYXlDb250YWluZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVJbmZvQ29udGFpbmVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lUmV2aWV3c0NvbnRhaW5lcik7XG5cblxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lUGFnZVxuICAgIH1cbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtQYWdlfSBmcm9tICcuL2luaXQtbG9hZC5qcyc7XG5cbmNvbnNvbGUubG9nKFwiTm9vZHMgb24gTm9vZHNcIik7XG5QYWdlLmhvbWVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9