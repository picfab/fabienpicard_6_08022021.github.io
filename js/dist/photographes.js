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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/photographes.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DomConstructor/MediaCard.js":
/*!*****************************************!*\
  !*** ./src/DomConstructor/MediaCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaCard; });\n/**\n *\n * @param {object} data les données du média\n * @param {string} type le type de media 'image' ou 'video'\n */\nfunction MediaCard(data, type) {\n  const card = document.createElement('div');\n  card.classList.add('listPhoto__card');\n  card.tabIndex = 0;\n  const container = document.createElement('div');\n  container.classList.add('listPhoto__container');\n  const imgBox = document.createElement('div');\n  imgBox.classList.add('listPhoto__imgBox');\n  const img = document.createElement('img');\n  img.classList.add('listPhoto__img');\n  img.alt = data.alt;\n  img.src = `img/${data.photographerId}/${data.image}`;\n  const content = document.createElement('div');\n  content.classList.add('listPhoto__content');\n  const title = document.createElement('h2');\n  title.classList.add('listPhoto__title');\n  const titleValue = data.image.replace(/_/g, '-').replace(/.jpg/g, '');\n  title.textContent = titleValue;\n  const info = document.createElement('div');\n  info.classList.add('listPhoto__info');\n  const price = document.createElement('p');\n  price.classList.add('listPhoto__price');\n  price.textContent = `${data.price} € `;\n  const likes = document.createElement('div');\n  likes.tabIndex = 0;\n  likes.roles = 'button';\n  likes.ariaLabel = \"AJouter un like\";\n  likes.classList.add('listPhoto__like');\n  likes.innerHTML = `<span>${data.likes}</span>`;\n  const likeBtn = document.createElement('i');\n  likeBtn.classList.add('fas', 'fa-heart');\n  card.append(container);\n  container.append(imgBox);\n  container.append(content);\n  imgBox.append(img);\n  content.append(title);\n  content.append(info);\n  info.append(price);\n  info.append(likes);\n  likes.append(likeBtn);\n  return card;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/MediaCard.js?");

/***/ }),

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

/***/ "./src/Factory/FactoryMedia.js":
/*!*************************************!*\
  !*** ./src/Factory/FactoryMedia.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryMedia; });\n/* harmony import */ var _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/MediaCard */ \"./src/DomConstructor/MediaCard.js\");\n\n/**\n * Factory pour creer les objets Media\n */\n\nfunction FactoryMedia() {\n  /**\n   * Le constructeur prend en parametre :\n   * @param {object} media les données du média\n   * @param {function} updateTotalLikes une fonction pour mettre à jour le total de like du photographe\n   */\n  this.createElement = function (media, updateTotalLikes) {\n    let element = media;\n\n    if (media.hasOwnProperty('video')) {\n      element.html = new _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](media, 'video');\n    } else if (media.hasOwnProperty('image')) {\n      element.html = new _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](media, 'image');\n    } //Methode pour incrémenter le nombre de like de l'objet\n    //et mets à jour le total de likes du photographe\n\n\n    element.updateLikes = function () {\n      const textLikes = this.html.querySelector('.listPhoto__like span');\n      this.likes = this.likes + 1;\n      textLikes.textContent = this.likes;\n      updateTotalLikes();\n    }; //Methode pour afficher le rendu html de l'object\n    //gérer les evenement sur l'élément like\n\n\n    element.showElement = function () {\n      const container = document.querySelector('.listPhoto');\n\n      if (this.html) {\n        const btn = this.html.querySelector('.listPhoto__like');\n\n        btn.onclick = e => {\n          this.updateLikes();\n        };\n\n        btn.onkeydown = e => {\n          if ([32, 13].includes(e.keyCode)) {\n            this.updateLikes();\n          }\n        };\n\n        container.append(this.html);\n      }\n    };\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryMedia.js?");

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

/***/ "./src/HeaderAuthor.js":
/*!*****************************!*\
  !*** ./src/HeaderAuthor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * récupère l'id du photogrape d'une page\n */\nconst queryString = window.location.search;\nconst urlParams = new URLSearchParams(queryString);\nconst author = parseInt(urlParams.get('author'), 10);\n/* harmony default export */ __webpack_exports__[\"default\"] = (author);\n\n//# sourceURL=webpack:///./src/HeaderAuthor.js?");

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

/***/ "./src/listBox.js":
/*!************************!*\
  !*** ./src/listBox.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listBox; });\n/**\n * fait fonctionner la listbox\n */\n\n/**\n * mets à jour les valeur et attributs de la listbox\n * @param {array} options un tabelau d'objet avec les valeurs de chaque option\n * @param {objet} listboxBtn élément du dom du bouton de la listbox\n * @param {int} newIndex nouvel index de la valeur sélectionné\n * @param {int} oldIndex index de l'ancienne valuer sélectionné\n */\nfunction updateValue(options, listboxBtn, newIndex, oldIndex) {\n  const id = options[newIndex].id;\n  const textContent = options[newIndex].textContent;\n  listboxBtn.querySelector('.listbox__btn__text').textContent = textContent;\n  listboxBtn.setAttribute('aria-activedescendant', id);\n  options[oldIndex].classList.remove('selected');\n  options[newIndex].classList.add('selected');\n  options[oldIndex].removeAttribute('aria-selected');\n  options[newIndex].setAttribute('aria-selected', true);\n}\n/**\n * mets à jour aria-expended\n * @param {oject} elt element du dom où la valuer de aria-expended est à modifier\n * @param {boolean} value true si la listbox est déplié sinon false\n */\n\n\nfunction ariaExpanded(elt, value) {\n  elt.setAttribute('aria-expanded', value);\n}\n/**\n * initialise le fonctionnement de la listbox\n */\n\n\nfunction listBox() {\n  const listboxes = document.getElementsByClassName('listbox');\n  Array.from(listboxes).forEach(listbox => {\n    const listboxBtn = listbox.querySelector('.listbox__btn');\n    const listboxContent = listbox.querySelector('.listbox__content');\n    const listboxList = listbox.querySelector('.listbox__list');\n    const options = listbox.getElementsByClassName('listbox__elt');\n    /**\n     * action au survol du bouton\n     * @param {event} e evenement\n     */\n\n    listboxBtn.onmouseover = function (e) {\n      ariaExpanded(listboxBtn, true);\n      listboxList.classList.remove('hidden');\n    };\n    /**\n     * action à la fin du survol\n     * @param {event} e évenement\n     */\n\n\n    listboxContent.onmouseout = function (e) {\n      if (!listboxContent.contains(e.relatedTarget)) {\n        // moused out of div\n        ariaExpanded(listboxBtn, false);\n        listboxList.classList.add('hidden');\n      }\n    };\n    /**\n     * action au focus du bouton\n     * @param {event} e évenement\n     */\n\n\n    listboxBtn.onfocus = e => {\n      ariaExpanded(listboxBtn, true);\n    };\n    /**\n     * action à la fin du focus\n     * @param {event} e evenement\n     */\n\n\n    listboxBtn.onfocusout = e => {\n      ariaExpanded(listboxBtn, false);\n    };\n    /**\n     * action lors de l'utilisation des bouton haut bas\n     * @param {event} e evenement\n     */\n\n\n    listbox.onkeydown = e => {\n      const index = Array.from(options).findIndex(x => x.classList.contains('selected')); // const selected =  listbox.getElementsByClassName('selected')[0]\n\n      if ([32, 13].includes(e.keyCode)) {\n        if (listboxList.classList.contains('hidden')) {\n          listboxList.classList.remove('hidden');\n          listboxList.focus();\n        } else {\n          listboxList.classList.add('hidden');\n          listboxBtn.focus();\n        }\n\n        if (e.keyCode === 38) {\n          //haut\n          const prev = index === 0 ? options.length - 1 : index - 1;\n          updateValue(options, listboxBtn, prev, index);\n        }\n\n        if (e.keyCode === 40) {\n          //bas\n          const next = index === options.length - 1 ? 0 : index + 1;\n          updateValue(options, listboxBtn, next, index);\n        }\n      }\n    };\n    /**\n     * action lors de l'utilisation de la souris\n     * @param {event} e evenement\n     */\n\n\n    listbox.onclick = e => {\n      const index = Array.from(options).findIndex(x => x.classList.contains('selected'));\n      const newValue = Array.from(options).findIndex(x => x === e.target);\n      updateValue(options, listboxBtn, newValue, index);\n      listboxList.classList.add('hidden');\n    };\n  });\n}\n\n//# sourceURL=webpack:///./src/listBox.js?");

/***/ }),

/***/ "./src/photographes.js":
/*!*****************************!*\
  !*** ./src/photographes.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HeaderAuthor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderAuthor */ \"./src/HeaderAuthor.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/FactoryPhotographe */ \"./src/Factory/FactoryPhotographe.js\");\n/* harmony import */ var _Factory_FactoryMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Factory/FactoryMedia */ \"./src/Factory/FactoryMedia.js\");\n/* harmony import */ var _utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/updateTotalLikes */ \"./src/utils/updateTotalLikes.js\");\n/* harmony import */ var _listBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listBox */ \"./src/listBox.js\");\n/**\n * initialisation des fonctionnalité de la page d'un photographe\n */\n\n\n\n\n\n\nObject(_listBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nlet photographe;\nconst medias = [];\nconst factPhotographe = new _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst factMedia = new _Factory_FactoryMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n/** On récupère les données et on les traites */\n\n_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].then(result => {\n  //on retrouve les données du photographe de la page\n  const findPhotographe = result.photographers.find(x => x.id === _HeaderAuthor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // On créait l'objet photographe\n\n  photographe = factPhotographe.createElement(findPhotographe, 'header'); //on récupère les médias du photographe\n\n  const mediaFilter = result.media.filter(x => x.photographerId === _HeaderAuthor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //on créait chaque\n\n  mediaFilter.forEach(elt => {\n    //condition temporaire, il faut traiter les vdo\n    if (elt.hasOwnProperty('image')) {\n      const newElement = factMedia.createElement(elt, () => Object(_utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(medias));\n      medias.push(newElement);\n      newElement.showElement();\n    }\n  }); // Une fois tous les objects média créé on affiche le total des likes\n\n  Object(_utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(medias);\n});\n\n//# sourceURL=webpack:///./src/photographes.js?");

/***/ }),

/***/ "./src/utils/updateTotalLikes.js":
/*!***************************************!*\
  !*** ./src/utils/updateTotalLikes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateTotalLikes; });\n/**\n * Calculer le total des likes et l'afficher\n * @param {object} data un array avec toutes les données des médias\n */\nfunction updateTotalLikes(data) {\n  const likesBox = document.querySelector('.infoAuthor__like span');\n  let likes = 0;\n  data.forEach(elt => {\n    likes = likes + elt.likes;\n  });\n  likesBox.textContent = likes;\n}\n\n//# sourceURL=webpack:///./src/utils/updateTotalLikes.js?");

/***/ })

/******/ });