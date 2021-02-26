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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotographerCard; });\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/DomConstructor/Tag.js\");\n\n/**\n *\n * @param {object} data les données du photgraphe\n */\n\nfunction PhotographerCard(data) {\n  // creation de la carte\n  const card = document.createElement('article');\n  card.classList.add('cardAuthor'); // creation du lien\n\n  const link = document.createElement('a');\n  link.classList.add('cardAuthor__link');\n  link.href = `./photographe.html?author=${data.id}`;\n  link.ariaLabel = data.name;\n  card.append(link); // creation de la box d'image est titre\n\n  const imgBox = document.createElement('div');\n  imgBox.classList.add('cardAuthor__imgBox');\n  link.append(imgBox); // creation de l'image\n\n  const img = document.createElement('img');\n  img.classList.add('cardAuthor__img');\n  img.alt = `Portrait du photographe ${data.name}`;\n  img.src = `./img/authors/${data.portrait}`;\n  imgBox.append(img); // creation du nom de l'auteur\n\n  const title = document.createElement('h2');\n  title.classList.add('cardAuthor__name');\n  title.textContent = data.name;\n  link.append(title); // creation de la box d'information de l'auteur\n\n  const info = document.createElement('div');\n  info.classList.add('cardAuthor__content');\n  card.append(info); // Ajout de la localisation de l'auteur\n\n  const local = document.createElement('p');\n  local.classList.add('cardAuthor__localisation');\n  local.textContent = `${data.city}, ${data.country}`;\n  info.append(local); // ajout de la tagline\n\n  const tagline = document.createElement('p');\n  tagline.classList.add('cardAuthor__citation');\n  tagline.textContent = data.tagline;\n  info.append(tagline); // Ajout de la du tarif\n\n  const tarif = document.createElement('p');\n  tarif.classList.add('cardAuthor__tarif');\n  tarif.textContent = `${data.price}/jour`;\n  info.append(tarif); // creation de la box tags\n\n  const tagsBox = document.createElement('div');\n  tagsBox.classList.add('cardAuthor__tags');\n  card.append(tagsBox); // ouverture de la liste des tags\n\n  const tags = document.createElement('ul');\n  tags.classList.add('tags');\n  tagsBox.append(tags); // Creation des tags un par un\n\n  data.tags.forEach(tag => {\n    const tagElt = Object(_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag, 'button');\n    tags.append(tagElt);\n  });\n  return card;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/PhotographerCard.js?");

/***/ }),

/***/ "./src/DomConstructor/PhotographerHeaderCard.js":
/*!******************************************************!*\
  !*** ./src/DomConstructor/PhotographerHeaderCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotographerHeaderCard; });\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/DomConstructor/Tag.js\");\n\n/**\n *\n * @param {object} data les données du photographe\n */\n\nfunction PhotographerHeaderCard(data) {\n  // récupération des l'emplacements\n  const siteTitle = document.querySelector('title');\n  const headerId = 'header_author';\n  const title = document.querySelector(`#${headerId} .author__title`);\n  const local = document.querySelector(`#${headerId} .author__localisation`);\n  const tagline = document.querySelector(`#${headerId} .author__slogan`);\n  const tags = document.querySelector(`#${headerId} .tags`);\n  const img = document.querySelector(`#${headerId} .author__img`);\n  const price = document.querySelector('.infoAuthor__price span'); // modifier le contenu\n\n  siteTitle.textContent = siteTitle.textContent + data.name;\n  title.textContent = data.name;\n  local.textContent = `${data.city}, ${data.country}`;\n  tagline.textContent = data.tagline;\n  img.src = `./img/authors/${data.portrait}`;\n  img.alt = `Portrait du photographe ${data.name}`;\n  price.textContent = data.price; // ajouter les tags\n\n  data.tags.forEach(tag => {\n    const tagElt = Object(_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag, 'a', `./?filter=${tag}`);\n    tags.append(tagElt);\n  });\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/PhotographerHeaderCard.js?");

/***/ }),

/***/ "./src/DomConstructor/Tag.js":
/*!***********************************!*\
  !*** ./src/DomConstructor/Tag.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tag; });\n/**\n * Constructeur html d'un bouton Tag\n * @param {string} tag le nom du tag\n */\nfunction Tag(tag, type, href = null) {\n  const tagElt = document.createElement('li');\n  tagElt.classList.add('tags__elt');\n  const tagBtn = document.createElement(type);\n\n  if (type === 'a') {\n    tagBtn.href = href;\n  }\n\n  tagBtn.classList.add('tags__btn', 'btn', 'btn--tags');\n  tagBtn.textContent = `#${tag}`;\n  tagBtn.ariaLabel = 'Tag';\n  tagElt.append(tagBtn);\n  return tagElt;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Tag.js?");

/***/ }),

/***/ "./src/Factory/FactoryPhotographe.js":
/*!*******************************************!*\
  !*** ./src/Factory/FactoryPhotographe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryPhotographe; });\n/* harmony import */ var _DomConstructor_PhotographerCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/PhotographerCard */ \"./src/DomConstructor/PhotographerCard.js\");\n/* harmony import */ var _DomConstructor_PhotographerHeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomConstructor/PhotographerHeaderCard */ \"./src/DomConstructor/PhotographerHeaderCard.js\");\n/* harmony import */ var _utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/btnComeBack */ \"./src/utils/btnComeBack.js\");\n\n\n\n/**\n * Factory de creation des photographe\n */\n\nfunction FactoryPhotographe() {\n  /**\n   * Le constructeur prend en parametres :\n   * @param {object} data les données du photographe\n   * @param {string} type 'card' si c'est une carte de photographe\n   *                       ou 'header' si c'est un header de page de photographe\n   */\n  this.CreateElement = function (data, type, filterTag) {\n    const element = data;\n\n    if (type === 'card') {\n      element.cardPhotographer = new _DomConstructor_PhotographerCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    } else {\n      element.cardHeaderPhotographer = new _DomConstructor_PhotographerHeaderCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n    }\n\n    element.showCard = function () {\n      const main = document.getElementById('listPhotographers');\n      const allFilter = this.cardPhotographer.querySelectorAll('.tags__btn');\n      Array.from(allFilter).forEach(filter => {\n        filter.onclick = () => {\n          const value = filter.textContent.replace(/#/, '').toLowerCase();\n          Object(_utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__[\"showBtnComeBack\"])(true);\n          filterTag(value);\n        };\n      });\n      main.append(this.cardPhotographer);\n    };\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryPhotographe.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Récupère les données via l'api\n */\nconst routeAPI = 'js/site-with-alt.json';\nconst requestOptions = {\n  method: 'GET',\n  redirect: 'follow'\n};\nconst getData = new Promise(resolve => {\n  fetch(routeAPI, requestOptions).then(response => response.json()).then(result => {\n    resolve(result);\n  }).catch(error => console.error(error));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/getData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory/FactoryPhotographe */ \"./src/Factory/FactoryPhotographe.js\");\n/* harmony import */ var _utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/btnComeBack */ \"./src/utils/btnComeBack.js\");\n/* harmony import */ var _paramUrl_paramUrlFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paramUrl/paramUrlFilter */ \"./src/paramUrl/paramUrlFilter.js\");\n/**\n * Js de la page d'accueil\n */\n\n\n\n/**\n * récupère les données des photographes et affiche le rendu html de chaque carte\n */\n\n\nconst factPhotographe = new _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst photographers = [];\n_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].then(result => {\n  result.photographers.forEach(photographer => {\n    const newPhotographer = new factPhotographe.CreateElement(photographer, 'card', filterTag);\n    photographers.push(newPhotographer);\n    newPhotographer.showCard();\n  });\n\n  if (_paramUrl_paramUrlFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n    filterTag(_paramUrl_paramUrlFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  }\n});\n/**\n * Créé un nouvel array de photogrphes en fonction de la valeur d'un filtre\n * @param {string} value Du filtre sélectionné\n */\n\nfunction filterTag(value) {\n  const newArray = photographers.filter(x => x.tags.includes(value));\n  filterPhotographer(newArray);\n}\n/**\n * affiche les cartes de photographes filtrées\n * @param {array} arrayPhotographer un tableau d'objet des photographes à afficher\n */\n\n\nfunction filterPhotographer(arrayPhotographer = photographers) {\n  const main = document.getElementById('listPhotographers');\n  main.innerHTML = null;\n  arrayPhotographer.forEach(element => {\n    element.showCard();\n  });\n} // gestion du click sur les filtres du header\n\n\nconst allFilter = document.getElementsByClassName('tags__btn');\nArray.from(allFilter).forEach(filter => {\n  filter.onclick = () => {\n    const value = filter.textContent.replace(/#/, '').toLowerCase();\n    Object(_utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__[\"showBtnComeBack\"])(true);\n    filterTag(value);\n  };\n}); // gestion du boutton passer au contenu\n// const menu = document.querySelector('header')\n\nconst listPhotographers = document.getElementById('listPhotographers');\nconst cardAuthor = document.getElementsByClassName('cardAuthor');\n\nwindow.onscroll = function () {\n  if (listPhotographers.offsetTop + 100 > window.scrollY && photographers.length === cardAuthor.length) {\n    Object(_utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__[\"showBtnComeBack\"])(false);\n  } else {\n    Object(_utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__[\"showBtnComeBack\"])(true);\n  }\n};\n\nObject(_utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__[\"resetData\"])(filterPhotographer);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/paramUrl/paramUrlFilter.js":
/*!****************************************!*\
  !*** ./src/paramUrl/paramUrlFilter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * récupère le fitre en parmetre d'url\n */\nconst queryString = window.location.search;\nconst urlParams = new URLSearchParams(queryString);\nconst filter = urlParams.get('filter');\n/* harmony default export */ __webpack_exports__[\"default\"] = (filter);\n\n//# sourceURL=webpack:///./src/paramUrl/paramUrlFilter.js?");

/***/ }),

/***/ "./src/utils/btnComeBack.js":
/*!**********************************!*\
  !*** ./src/utils/btnComeBack.js ***!
  \**********************************/
/*! exports provided: showBtnComeBack, resetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showBtnComeBack\", function() { return showBtnComeBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetData\", function() { return resetData; });\nconst btnComeBack = document.querySelector('.comeBack .btn');\nfunction showBtnComeBack(show) {\n  if (show) {\n    btnComeBack.classList.remove('hidden');\n  } else {\n    btnComeBack.classList.add('hidden');\n  }\n}\nfunction resetData(resetFunction) {\n  btnComeBack.onclick = () => {\n    btnComeBack.classList.add('hidden');\n    resetFunction();\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/btnComeBack.js?");

/***/ })

/******/ });