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

/***/ "./src/DomConstructor/Form.js":
/*!************************************!*\
  !*** ./src/DomConstructor/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\nconst eltsForm = [{\n  label: 'Prénom',\n  name: 'prenom',\n  type: 'text'\n}, {\n  label: 'Nom',\n  name: 'nom',\n  type: 'text'\n}, {\n  label: 'Email',\n  name: 'email',\n  type: 'email'\n}, {\n  label: 'Votre message',\n  name: 'message',\n  type: 'textarea'\n}];\n\nfunction createInput(params) {\n  const formElt = document.createElement('div');\n  formElt.classList.add('form__elt');\n  const labelElt = document.createElement('label');\n  labelElt.classList.add('form__label');\n  labelElt.textContent = params.label;\n  labelElt.for = params.name;\n  labelElt.id = params.name;\n  let input;\n\n  if (params.type === 'textarea') {\n    input = document.createElement('textarea');\n    input.classList.add('form__textarea');\n  } else {\n    input = document.createElement('input');\n    input.type = params.type;\n  }\n\n  input.name = params.name;\n  input.ariaLabelledby = params.name;\n  input.classList.add('form__input');\n  formElt.append(labelElt);\n  formElt.append(input);\n  return formElt;\n}\n\nfunction Form(name) {\n  const form = document.createElement('div');\n  form.ariaLabel = `Contactez-moi ${name}`;\n  form.ariaLabelledby = 'formTitle';\n  form.classList.add('form');\n  form.id = 'contact';\n  const content = document.createElement('div');\n  content.classList.add('form__content');\n  const close = document.createElement('div');\n  close.classList.add('form__close', 'fas', 'fa-times');\n  close.ariaLabel = 'Close Contact form';\n  const title = document.createElement('h1');\n  title.id = 'formTitle';\n  title.classList.add('form__title');\n  title.innerHTML = `Contactez-moi <br> ${name}`;\n  content.append(title);\n  content.append(close);\n  eltsForm.forEach(elt => {\n    const eltDom = createInput(elt);\n    content.append(eltDom);\n  });\n  const btn = document.createElement('button');\n  btn.type = 'submit';\n  btn.textContent = 'Envoyer';\n  btn.ariaLabel = 'Envoyer';\n  btn.classList.add('form__submit', 'btn');\n  content.append(btn);\n  form.append(content);\n  return form;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Form.js?");

/***/ }),

/***/ "./src/DomConstructor/Lightbox.js":
/*!****************************************!*\
  !*** ./src/DomConstructor/Lightbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lightbox; });\n/**\n *\n * @param {object} data les données du média\n * @param {string} type le type de media 'image' ou 'video'\n */\nfunction Lightbox(medias, index) {\n  // Tableau des slides\n  const listSLide = []; // creation des elements de la lightbox\n\n  const body = document.querySelector('body');\n  const lightbox = document.createElement('div');\n  lightbox.classList.add('lightbox');\n  lightbox.ariaLabel('image closeup view');\n  const container = document.createElement('div');\n  container.classList.add('lightbox__container');\n  const navLeft = document.createElement('div');\n  navLeft.classList.add('lightbox__blockNav');\n  const navRight = document.createElement('div');\n  navRight.classList.add('lightbox__blockNav');\n  const left = document.createElement('span');\n  left.classList.add('lightbox__left', 'fas', 'fa-chevron-left');\n  left.tabIndex = 2;\n  left.ariaLabel = 'Previous image';\n  const right = document.createElement('span');\n  right.classList.add('lightbox__right', 'fas', 'fa-chevron-right');\n  right.tabIndex = 3;\n  right.ariaLabel = 'Next image';\n  const closeBtn = document.createElement('span');\n  closeBtn.classList.add('lightbox__close', 'fas', 'fa-times');\n  closeBtn.tabIndex = 1;\n  closeBtn.ariaLabel = 'Close dialog';\n  const arrow = document.createElement('div');\n  arrow.classList.add('lightbox__arrow'); // creation de tous les slides de la lightbox\n\n  medias.forEach((media, i) => {\n    const content = document.createElement('div');\n    content.classList.add('lightbox__content');\n\n    if (i === index) {\n      content.classList.add('show');\n    }\n\n    const imgbox = document.createElement('div');\n    imgbox.classList.add('lightbox__imgbox');\n    const img = document.createElement('img');\n    img.classList.add('lightbox__img');\n    img.src = media.url;\n    img.ariaLabel = media.title;\n    img.alt = media.alt;\n    const title = document.createElement('div');\n    title.classList.add('lightbox__title');\n    title.textContent = media.title;\n    content.append(imgbox);\n    content.append(title);\n    imgbox.append(img);\n    container.append(content);\n    listSLide.push(content);\n  }); // creation de tout les éléments\n\n  lightbox.append(container);\n  navLeft.append(left);\n  navRight.append(closeBtn);\n  navRight.append(right);\n  container.prepend(navLeft);\n  container.append(navRight);\n  /**\n   * Fonction de navigation\n   */\n  // Droite\n\n  const goRight = () => {\n    listSLide[index].classList.remove('show');\n    index = index + 1 === medias.length ? 0 : index + 1;\n    listSLide[index].classList.add('show');\n  }; // Gauche\n\n\n  const goLeft = () => {\n    listSLide[index].classList.remove('show');\n    index = index - 1 < 0 ? medias.length - 1 : index - 1;\n    listSLide[index].classList.add('show');\n  };\n\n  const close = () => {\n    const imgInitial = medias[index].html.querySelector('img');\n    imgInitial.focus();\n    lightbox.remove();\n  };\n  /**\n   * Gestion des clicks\n   */\n  // ferme la lightbox\n\n\n  closeBtn.onclick = () => {\n    close();\n  }; // image precedante\n\n\n  left.onclick = () => {\n    goLeft();\n  }; // image suivante\n\n\n  right.onclick = () => {\n    goRight();\n  };\n  /**\n   * Gestion du clavier\n   */\n\n\n  right.onkeydown = e => {\n    if (!e.shiftKey && e.key === 'Tab') {\n      e.preventDefault();\n      closeBtn.focus();\n      console.log(left);\n    }\n\n    if (e.key === 'Enter') {\n      goRight();\n    }\n  };\n\n  closeBtn.onkeydown = e => {\n    if (e.shiftKey && e.key === 'Tab') {\n      e.preventDefault();\n      right.focus();\n    }\n\n    if (e.key === 'Enter') {\n      close();\n    }\n  };\n\n  left.onkeydown = e => {\n    if (e.key === 'Enter') {\n      goLeft();\n    }\n  };\n\n  lightbox.onkeydown = e => {\n    if (e.key === 'Escape') {\n      close();\n    }\n\n    if (e.key === 'ArrowLeft') {\n      goLeft();\n    }\n\n    if (e.key === 'ArrowRight') {\n      goRight();\n    }\n  };\n\n  body.append(lightbox);\n  closeBtn.focus();\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Lightbox.js?");

/***/ }),

/***/ "./src/DomConstructor/MediaCard.js":
/*!*****************************************!*\
  !*** ./src/DomConstructor/MediaCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaCard; });\n/**\n *\n * @param {object} data les données du média\n * @param {string} type le type de media 'image' ou 'video'\n */\nfunction MediaCard(data, type, index = 0) {\n  const card = document.createElement('div');\n  card.classList.add('listPhoto__card');\n  const container = document.createElement('div');\n  container.classList.add('listPhoto__container');\n  const imgBox = document.createElement('div');\n  imgBox.classList.add('listPhoto__imgBox');\n  const img = document.createElement('img');\n  img.classList.add('listPhoto__img');\n  img.alt = data.alt;\n  img.src = data.url;\n  img.tabIndex = index;\n  img.ariaLabel = `${data.title}, closeup view`;\n  const content = document.createElement('div');\n  content.classList.add('listPhoto__content');\n  const title = document.createElement('h2');\n  title.classList.add('listPhoto__title');\n  title.textContent = data.title;\n  const info = document.createElement('div');\n  info.classList.add('listPhoto__info');\n  const price = document.createElement('span');\n  price.classList.add('listPhoto__price');\n  price.textContent = `${data.price} € `;\n  const likes = document.createElement('div');\n  likes.tabIndex = index;\n  likes.roles = 'button';\n  likes.ariaLabel = 'AJouter un like';\n  likes.classList.add('listPhoto__like');\n  likes.innerHTML = `<span>${data.likes}</span>`;\n  const likeBtn = document.createElement('span');\n  likeBtn.classList.add('fas', 'fa-heart');\n  likes.ariaLabel = 'Likes';\n  card.append(container);\n  container.append(imgBox);\n  container.append(content);\n  imgBox.append(img);\n  content.append(title);\n  content.append(info);\n  info.append(price);\n  info.append(likes);\n  likes.append(likeBtn);\n  return card;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/MediaCard.js?");

/***/ }),

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

/***/ "./src/Factory/FactoryForm.js":
/*!************************************!*\
  !*** ./src/Factory/FactoryForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryForm; });\n/* harmony import */ var _DomConstructor_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/Form */ \"./src/DomConstructor/Form.js\");\n\n/**\n * Factory pour creer les objets Media\n */\n\nfunction FactoryForm() {\n  this.CreateElement = function (nameAuthor) {\n    const element = {};\n    /**\n     * création du rendu html\n     */\n\n    element.html = new _DomConstructor_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameAuthor);\n    /**\n     * Methode pour ouvrir le formulaire\n     */\n\n    element.open = function () {\n      const close = this.html.querySelector('.form__close');\n\n      close.onclick = () => this.close();\n\n      const body = document.querySelector('body');\n      body.append(this.html);\n    };\n    /**\n     * Methode pour fermer le formulaire\n     */\n\n\n    element.close = function () {\n      const form = document.getElementById('contact');\n      form.remove();\n    };\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryForm.js?");

/***/ }),

/***/ "./src/Factory/FactoryMedia.js":
/*!*************************************!*\
  !*** ./src/Factory/FactoryMedia.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryMedia; });\n/* harmony import */ var _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/MediaCard */ \"./src/DomConstructor/MediaCard.js\");\n\n/**\n * Factory pour creer les objets Media\n */\n\nfunction FactoryMedia() {\n  /**\n   * Le constructeur prend en parametre :\n   * @param {object} media les données du média\n   * @param {function} updateTotalLikes une fonction pour mettre à jour le total de like du photographe\n   */\n  this.CreateElement = function (media, updateTotalLikes) {\n    const element = media;\n\n    if (media.video) {\n      element.html = new _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](media, 'video');\n    } else if (media.image) {\n      element.title = media.image.replace(/_/g, ' ').replace(/.jpg/g, '');\n      element.url = `img/${media.photographerId}/${media.image}`;\n      element.html = new _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](media, 'image');\n    } // Methode pour incrémenter le nombre de like de l'objet\n    // et mets à jour le total de likes du photographe\n\n\n    element.updateLikes = function () {\n      const textLikes = this.html.querySelector('.listPhoto__like span');\n      this.likes = this.likes + 1;\n      textLikes.textContent = this.likes;\n      updateTotalLikes();\n    }; // Methode pour afficher le rendu html de l'object\n    // gérer les evenement sur l'élément like\n\n\n    element.showElement = function () {\n      const container = document.querySelector('.listPhoto');\n\n      if (this.html) {\n        const btn = this.html.querySelector('.listPhoto__like');\n\n        btn.onclick = e => {\n          this.updateLikes();\n        };\n\n        btn.onkeydown = e => {\n          if ([32, 13].includes(e.keyCode)) {\n            this.updateLikes();\n          }\n        };\n\n        container.append(this.html);\n      }\n    };\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryMedia.js?");

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

/***/ "./src/paramUrl/paramUrlAuthor.js":
/*!****************************************!*\
  !*** ./src/paramUrl/paramUrlAuthor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * récupère l'id du photogrape d'une page\n */\nconst queryString = window.location.search;\nconst urlParams = new URLSearchParams(queryString);\nconst author = parseInt(urlParams.get('author'), 10);\n\nif (!author) {\n  window.location.replace('/');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (author);\n\n//# sourceURL=webpack:///./src/paramUrl/paramUrlAuthor.js?");

/***/ }),

/***/ "./src/photographes.js":
/*!*****************************!*\
  !*** ./src/photographes.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paramUrl_paramUrlAuthor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paramUrl/paramUrlAuthor */ \"./src/paramUrl/paramUrlAuthor.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/FactoryPhotographe */ \"./src/Factory/FactoryPhotographe.js\");\n/* harmony import */ var _Factory_FactoryMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Factory/FactoryMedia */ \"./src/Factory/FactoryMedia.js\");\n/* harmony import */ var _utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/updateTotalLikes */ \"./src/utils/updateTotalLikes.js\");\n/* harmony import */ var _DomConstructor_Lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DomConstructor/Lightbox */ \"./src/DomConstructor/Lightbox.js\");\n/* harmony import */ var _utils_ListBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ListBox */ \"./src/utils/ListBox.js\");\n/* harmony import */ var _utils_tri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/tri */ \"./src/utils/tri.js\");\n/* harmony import */ var _Factory_FactoryForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Factory/FactoryForm */ \"./src/Factory/FactoryForm.js\");\n/**\n * initialisation des fonctionnalité de la page d'un photographe\n */\n\n\n\n\n\n\n\n\n\nconst container = document.querySelector('.listPhoto');\nconst medias = [];\nconst factPhotographe = new _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst factMedia = new _Factory_FactoryMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst factForm = new _Factory_FactoryForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\nlet form;\n/**\n * Afficher la lightbox au click sur les images\n */\n\nfunction showMedia() {\n  medias.forEach((media, i) => {\n    media.showElement();\n    const img = media.html.querySelector('img');\n\n    img.onclick = () => {\n      Object(_DomConstructor_Lightbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(medias, i);\n    };\n\n    img.onkeydown = e => {\n      if (['Enter', 'Space'].includes(e.key)) {\n        Object(_DomConstructor_Lightbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(medias, i);\n      }\n    };\n  });\n}\n/** On récupère les données et on les traites */\n\n\n_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].then(result => {\n  // on retrouve les données du photographe de la page\n  const findPhotographe = result.photographers.find(x => x.id === _paramUrl_paramUrlAuthor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // On créait l'objet photographe\n\n  const photographe = factPhotographe.CreateElement(findPhotographe, 'header'); // on récupère les médias du photographe\n\n  const mediaFilter = result.media.filter(x => x.photographerId === _paramUrl_paramUrlAuthor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); // on créait chaque\n\n  mediaFilter.forEach(elt => {\n    // condition temporaire, il faut traiter les vdo\n    if (elt.image) {\n      const newElement = factMedia.CreateElement(elt, () => Object(_utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(medias));\n      medias.push(newElement);\n    }\n\n    Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triPopularite\"])(medias);\n    showMedia();\n  }); // on créait l'objet du formulaire\n\n  form = factForm.CreateElement(photographe.name); // Une fois tous les objects média créé on affiche le total des likes\n\n  Object(_utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(medias);\n});\n/**\n * Gestion de la listBox\n * @param {string} type nom du type de tri\n */\n\nfunction updateAfterTri(type) {\n  switch (type) {\n    case 'popularité':\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triPopularite\"])(medias);\n      break;\n\n    case 'titre':\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triTitre\"])(medias);\n      break;\n\n    case 'date':\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triDate\"])(medias);\n      break;\n\n    default:\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triPopularite\"])(medias);\n      break;\n  }\n\n  container.innerHTML = '';\n  showMedia();\n}\n\nconst lisboxPhotographe = new _utils_ListBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nlisboxPhotographe.CreateElement(document.querySelector('.listbox'), updateAfterTri);\n/**\n * Afficher le formulaire de contact\n */\n\nconst btnForm = document.querySelector('.author__btn');\n\nbtnForm.onclick = () => {\n  form.open();\n};\n\n//# sourceURL=webpack:///./src/photographes.js?");

/***/ }),

/***/ "./src/utils/ListBox.js":
/*!******************************!*\
  !*** ./src/utils/ListBox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListBox; });\n/**\n * fait fonctionner la listbox\n */\nfunction ListBox() {\n  /**\n   * initialise le fonctionnement de la listbox\n   * @param {objcet} listbox L'élément du dom conmprenant la listbox\n   * @param {function} updateAfterTri function pour mettre à jour le composant parent\n   */\n  this.CreateElement = function (listbox, updateAfterTri) {\n    const element = {};\n    element.btn = listbox.querySelector('.listbox__btn');\n    element.boxContent = listbox.querySelector('.listbox__list');\n    element.options = listbox.getElementsByClassName('listbox__elt');\n    /**\n     * mets à jour aria-expended\n     * @param {boolean} value true si la listbox est déplié sinon false\n     */\n\n    element.ariaExpanded = function (value) {\n      this.btn.setAttribute('aria-expanded', value);\n    };\n    /**\n     * action sur le bouton de la listbox\n     */\n\n    /**\n     * action sur les touches\n     * @param {event} e evenement\n     */\n\n\n    element.btn.onkeydown = e => {\n      if (['Enter', 'Space'].includes(e.key)) {\n        if (element.boxContent.classList.contains('hidden')) {\n          element.open();\n        } else {\n          element.boxContent.classList.add('hidden');\n          element.btn.focus();\n          element.close();\n        }\n      }\n    }; // action au click\n\n\n    element.btn.onclick = function () {\n      element.open();\n    };\n    /**\n     * Ouvrir la listbox et Ajoute les TabIndex aux options\n     */\n\n\n    element.open = function () {\n      let i = 100;\n      Array.from(this.options).forEach(elt => {\n        elt.tabIndex = i;\n\n        if (i === 100) {\n          elt.focus();\n        }\n\n        i = i + 1;\n      });\n      this.boxContent.classList.remove('hidden');\n      this.ariaExpanded(true);\n      this.boxContent.focus();\n    };\n    /**\n     * Ferme la listbox\n     */\n\n\n    element.close = function () {\n      Array.from(element.options).forEach(elt => {\n        elt.removeAttribute('tabIndex');\n      });\n      element.ariaExpanded(false);\n      element.boxContent.classList.add('hidden');\n      element.btn.focus();\n    };\n    /**\n     * mets à jour les valeur et attributs de la listbox\n     * @param {int} newIndex nouvel index de la valeur sélectionné\n     */\n\n\n    element.updateValue = function (newIndex) {\n      const id = this.options[newIndex].id;\n      const textContent = this.options[newIndex].textContent;\n      this.btn.querySelector('.listbox__btn__text').textContent = textContent;\n      this.btn.nextSibling.nextElementSibling.setAttribute('aria-activedescendant', id);\n      const old = Array.from(this.options).findIndex(x => x.classList.contains('selected'));\n      this.options[old].classList.remove('selected');\n      this.options[old].removeAttribute('aria-selected');\n      this.options[newIndex].classList.add('selected');\n      this.options[newIndex].setAttribute('aria-selected', true);\n      updateAfterTri(textContent.toLowerCase().trim());\n      this.close();\n    };\n    /**\n     * Ajoute les événnements aux options de la listbox\n     */\n\n\n    Array.from(element.options).forEach((option, i) => {\n      option.onkeydown = e => {\n        if (!e.shiftKey && e.key === 'Tab') {\n          if (i === element.options.length - 1) {\n            e.preventDefault();\n            element.options[0].focus();\n          }\n        }\n\n        if (e.shiftKey && e.key === 'Tab') {\n          if (i === 0) {\n            e.preventDefault();\n            element.options[element.options.length - 1].focus();\n          }\n        }\n\n        if (['Enter', 'Space'].includes(e.key)) {\n          element.updateValue(i);\n        }\n      };\n\n      option.onclick = () => {\n        element.updateValue(i);\n      };\n    });\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/ListBox.js?");

/***/ }),

/***/ "./src/utils/btnComeBack.js":
/*!**********************************!*\
  !*** ./src/utils/btnComeBack.js ***!
  \**********************************/
/*! exports provided: showBtnComeBack, resetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showBtnComeBack\", function() { return showBtnComeBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetData\", function() { return resetData; });\nconst btnComeBack = document.querySelector('.comeBack .btn');\nfunction showBtnComeBack(show) {\n  if (show) {\n    btnComeBack.classList.remove('hidden');\n  } else {\n    btnComeBack.classList.add('hidden');\n  }\n}\nfunction resetData(resetFunction) {\n  btnComeBack.onclick = () => {\n    btnComeBack.classList.add('hidden');\n    resetFunction();\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/btnComeBack.js?");

/***/ }),

/***/ "./src/utils/tri.js":
/*!**************************!*\
  !*** ./src/utils/tri.js ***!
  \**************************/
/*! exports provided: triPopularite, triDate, triTitre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triPopularite\", function() { return triPopularite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triDate\", function() { return triDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triTitre\", function() { return triTitre; });\n/**\n * function de tri\n */\n\n/**\n * Tri par likes\n * @param {array} medias\n */\nfunction triPopularite(medias) {\n  medias.sort(function (a, b) {\n    return b.likes - a.likes;\n  });\n}\n/**\n * Tri par date\n * @param {array} medias\n */\n\nfunction triDate(medias) {\n  medias.sort(function (a, b) {\n    return Date.parse(a.date) - Date.parse(b.date);\n  });\n}\n/**\n * Tri par Titre\n * @param {array} medias\n */\n\nfunction triTitre(medias) {\n  medias.sort(function (a, b) {\n    ;\n    [a, b].forEach(elt => {\n      if (elt.image) {\n        elt.text = elt.image.replace(/_/g, ' ');\n      } else if (elt.video) {\n        elt.text = elt.video.replace(/_/g, ' ');\n      }\n    });\n    return a.text.localeCompare(b.text);\n  });\n}\n\n//# sourceURL=webpack:///./src/utils/tri.js?");

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