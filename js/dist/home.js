/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DomConstructor/PhotographerCard.js":
/*!************************************************!*\
  !*** ./src/DomConstructor/PhotographerCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotographerCard; });\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/DomConstructor/Tag.js\");\n\n/**\n *\n * @param {object} data les données du photgraphe\n */\n\nfunction PhotographerCard(data) {\n  //creation de la carte\n  const card = document.createElement('article');\n  card.classList.add('cardAuthor'); //creation du lien\n\n  const link = document.createElement('a');\n  link.classList.add('cardAuthor__link');\n  link.href = `./photographe.html?author=${data.id}`;\n  card.append(link); // creation de la box d'image est titre\n\n  const imgBox = document.createElement('div');\n  imgBox.classList.add('cardAuthor__imgBox');\n  link.append(imgBox); // creation de l'image\n\n  const img = document.createElement('img');\n  img.classList.add('cardAuthor__img');\n  img.alt = `Portrait du photographe ${data.name}`;\n  img.src = `./img/authors/${data.portrait}`;\n  imgBox.append(img); //creation du nom de l'auteur\n\n  const title = document.createElement('h2');\n  title.classList.add('cardAuthor__name');\n  title.textContent = data.name;\n  link.append(title); // creation de la box d'information de l'auteur\n\n  const info = document.createElement('div');\n  info.classList.add('cardAuthor__content');\n  card.append(info); //Ajout de la localisation de l'auteur\n\n  const local = document.createElement('p');\n  local.classList.add('cardAuthor__localisation');\n  local.textContent = `${data.city}, ${data.country}`;\n  info.append(local); // ajout de la tagline\n\n  const tagline = document.createElement('p');\n  tagline.classList.add('cardAuthor__citation');\n  tagline.textContent = data.tagline;\n  info.append(tagline); //Ajout de la du tarif\n\n  const tarif = document.createElement('p');\n  tarif.classList.add('cardAuthor__tarif');\n  tarif.textContent = `${data.price}/jour`;\n  info.append(tarif); //creation de la box tags\n\n  const tagsBox = document.createElement('div');\n  tagsBox.classList.add('cardAuthor__tags');\n  card.append(tagsBox); //ouverture de la liste des tags\n\n  const tags = document.createElement('ul');\n  tags.classList.add('tags');\n  tagsBox.append(tags); // Creation des tags un par un\n\n  data.tags.map(tag => {\n    const tagElt = Object(_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag);\n    tags.append(tagElt);\n  });\n  return card;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/PhotographerCard.js?");

/***/ }),

/***/ "./src/DomConstructor/PhotographerHeaderCard.js":
/*!******************************************************!*\
  !*** ./src/DomConstructor/PhotographerHeaderCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotographerHeaderCard; });\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/DomConstructor/Tag.js\");\n\n/**\n *\n * @param {object} data les données du photographe\n */\n\nfunction PhotographerHeaderCard(data) {\n  //récupération de l'emplacement\n  const headerId = 'header_author';\n  const title = document.querySelector(`#${headerId} .author__title`);\n  const local = document.querySelector(`#${headerId} .author__localisation`);\n  const tagline = document.querySelector(`#${headerId} .author__slogan`);\n  const tags = document.querySelector(`#${headerId} .tags`);\n  const img = document.querySelector(`#${headerId} .author__img`);\n  const price = document.querySelector('.infoAuthor__price span');\n  title.textContent = data.name;\n  local.textContent = `${data.city}, ${data.country}`;\n  tagline.textContent = data.tagline;\n  img.src = `./img/authors/${data.portrait}`;\n  img.alt = `Portrait du photographe ${data.name}`;\n  price.textContent = data.price;\n  data.tags.map(tag => {\n    const tagElt = Object(_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag);\n    tags.append(tagElt);\n  });\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/PhotographerHeaderCard.js?");

/***/ }),

/***/ "./src/DomConstructor/Tag.js":
/*!***********************************!*\
  !*** ./src/DomConstructor/Tag.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tag; });\n/**\n * Constructeur html d'un bouton Tag\n * @param {string} tag le nom du tag\n */\nfunction Tag(tag) {\n  const tagElt = document.createElement('li');\n  tagElt.classList.add('tags__elt');\n  const tagBtn = document.createElement('button');\n  tagBtn.classList.add('tags__btn', 'btn', 'btn--tags');\n  tagBtn.textContent = tag;\n  tagElt.append(tagBtn);\n  return tagElt;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Tag.js?");

/***/ }),

/***/ "./src/Factory/FactoryPhotographe.js":
/*!*******************************************!*\
  !*** ./src/Factory/FactoryPhotographe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryPhotographe; });\n/* harmony import */ var _DomConstructor_PhotographerCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/PhotographerCard */ \"./src/DomConstructor/PhotographerCard.js\");\n/* harmony import */ var _DomConstructor_PhotographerHeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomConstructor/PhotographerHeaderCard */ \"./src/DomConstructor/PhotographerHeaderCard.js\");\n\n\n/**\n * Factory de creation des photographe\n */\n\nfunction FactoryPhotographe() {\n  /**\n   * Le constructeur prend en parametres :\n   * @param {object} data les données du photographe\n   * @param {string} type 'card' si c'est une carte de photographe\n  *                       ou 'header' si c'est un header de page de photographe\n   */\n  this.createElement = function (data, type) {\n    let element = data;\n\n    if (type === 'card') {\n      element.cardPhotographer = new _DomConstructor_PhotographerCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    } else {\n      element.cardHeaderPhotographer = new _DomConstructor_PhotographerHeaderCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n    }\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryPhotographe.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Récupère les données via l'api\n */\nconst requestOptions = {\n  method: 'GET',\n  redirect: 'follow'\n};\nconst getData = new Promise(resolve => {\n  fetch(\"js/site-with-alt.json\", requestOptions).then(response => response.json()).then(result => {\n    resolve(result);\n  }).catch(error => resolve('error'));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/getData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory/FactoryPhotographe */ \"./src/Factory/FactoryPhotographe.js\");\n\n\n/**\n * récupère les données des photographes et affiche le rendu html de chaque carte\n */\n\nconst factPhotographe = new _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst photographers = [];\nconst main = document.getElementById('listPhotographers');\n_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].then(result => {\n  result.photographers.forEach(photographer => {\n    const newPhotographer = new factPhotographe.createElement(photographer, 'card');\n    photographers.push(newPhotographer);\n    main.append(newPhotographer.cardPhotographer);\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });