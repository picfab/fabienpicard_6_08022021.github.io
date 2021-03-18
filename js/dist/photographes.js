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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\nvar eltsForm = [{\n  label: 'Prénom',\n  name: 'prenom',\n  type: 'text'\n}, {\n  label: 'Nom',\n  name: 'nom',\n  type: 'text'\n}, {\n  label: 'Email',\n  name: 'email',\n  type: 'email'\n}, {\n  label: 'Votre message',\n  name: 'message',\n  type: 'textarea'\n}];\n\nfunction createInput(params, i) {\n  var formElt = document.createElement('div');\n  formElt.classList.add('form__elt');\n  var labelElt = document.createElement('label');\n  labelElt.classList.add('form__label');\n  labelElt.textContent = params.label;\n  labelElt.for = params.name;\n  labelElt.id = params.name;\n  var input;\n\n  if (params.type === 'textarea') {\n    input = document.createElement('textarea');\n    input.classList.add('form__textarea');\n  } else {\n    input = document.createElement('input');\n    input.type = params.type;\n  }\n\n  input.name = params.name;\n  input.ariaLabelledby = params.name;\n  input.classList.add('form__input');\n  input.tabIndex = i;\n  formElt.append(labelElt);\n  formElt.append(input);\n  return formElt;\n}\n\nfunction Form(name, formObject) {\n  var form = document.createElement('div');\n  form.ariaLabel = \"Contactez-moi \".concat(name);\n  form.ariaLabelledby = 'formTitle';\n  form.role = 'dialog';\n  form.classList.add('form');\n  form.id = 'contact';\n  var content = document.createElement('div');\n  content.classList.add('form__content');\n  var close = document.createElement('div');\n  close.classList.add('form__close', 'fas', 'fa-times');\n  close.ariaLabel = 'Close Contact form';\n  var title = document.createElement('h1');\n  title.id = 'formTitle';\n  title.classList.add('form__title');\n  title.innerHTML = \"Contactez-moi <br> \".concat(name);\n  content.append(title);\n  content.append(close);\n  var i = 50;\n  eltsForm.forEach(function (elt) {\n    var eltDom = createInput(elt, i);\n    content.append(eltDom);\n    i = i + 1;\n  });\n  var btn = document.createElement('button');\n  btn.type = 'submit';\n  btn.tabIndex = i;\n  close.tabIndex = i + 1;\n  btn.textContent = 'Envoyer';\n  btn.ariaLabel = 'Envoyer';\n  btn.classList.add('form__submit', 'btn');\n  content.append(btn);\n  form.append(content);\n\n  btn.onclick = function () {\n    var inputs = form.getElementsByClassName('form__input');\n    Array.from(inputs).forEach(function (input) {\n      console.log(\"\".concat(input.name, \" : \").concat(input.value));\n    });\n  };\n\n  return form;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Form.js?");

/***/ }),

/***/ "./src/DomConstructor/Lightbox.js":
/*!****************************************!*\
  !*** ./src/DomConstructor/Lightbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lightbox; });\n/**\n *\n * @param {object} data les données du média\n * @param {string} type le type de media 'image' ou 'video'\n */\nfunction Lightbox(medias, index) {\n  // Tableau des slides\n  var listSLide = []; // creation des elements de la lightbox\n\n  var body = document.querySelector('body');\n  var lightbox = document.createElement('div');\n  lightbox.classList.add('lightbox');\n  lightbox.ariaLabel = 'image closeup view';\n  var container = document.createElement('div');\n  container.classList.add('lightbox__container');\n  var navLeft = document.createElement('div');\n  navLeft.classList.add('lightbox__blockNav');\n  var navRight = document.createElement('div');\n  navRight.classList.add('lightbox__blockNav');\n  var left = document.createElement('span');\n  left.classList.add('lightbox__left', 'fas', 'fa-chevron-left');\n  left.tabIndex = 2;\n  left.ariaLabel = 'Previous image';\n  var right = document.createElement('span');\n  right.classList.add('lightbox__right', 'fas', 'fa-chevron-right');\n  right.tabIndex = 3;\n  right.ariaLabel = 'Next image';\n  var closeBtn = document.createElement('span');\n  closeBtn.classList.add('lightbox__close', 'fas', 'fa-times');\n  closeBtn.tabIndex = 1;\n  closeBtn.ariaLabel = 'Close dialog';\n  var arrow = document.createElement('div');\n  arrow.classList.add('lightbox__arrow'); // creation de tous les slides de la lightbox\n\n  medias.forEach(function (media, i) {\n    var content = document.createElement('div');\n    content.classList.add('lightbox__content');\n\n    if (i === index) {\n      content.classList.add('show');\n    }\n\n    var imgbox = document.createElement('div');\n    imgbox.classList.add('lightbox__imgbox');\n    var img;\n\n    if (media.type === 'video') {\n      img = document.createElement('video');\n      img.textContent = media.alt;\n      img.autoplay = true;\n      img.loop = true;\n    } else {\n      img = document.createElement('img');\n      img.alt = media.alt;\n    }\n\n    img.classList.add('lightbox__img');\n    img.src = media.url;\n    img.ariaLabel = media.title;\n    var title = document.createElement('div');\n    title.classList.add('lightbox__title');\n    title.textContent = media.title;\n    content.append(imgbox);\n    content.append(title);\n    imgbox.append(img);\n    container.append(content);\n    listSLide.push(content);\n  }); // creation de tout les éléments\n\n  lightbox.append(container);\n  navLeft.append(left);\n  navRight.append(closeBtn);\n  navRight.append(right);\n  container.prepend(navLeft);\n  container.append(navRight);\n  /**\n   * Fonction de navigation\n   */\n  // Droite\n\n  var goRight = function goRight() {\n    listSLide[index].classList.remove('show');\n    index = index + 1 === medias.length ? 0 : index + 1;\n    listSLide[index].classList.add('show');\n  }; // Gauche\n\n\n  var goLeft = function goLeft() {\n    listSLide[index].classList.remove('show');\n    index = index - 1 < 0 ? medias.length - 1 : index - 1;\n    listSLide[index].classList.add('show');\n  };\n\n  var close = function close() {\n    var imgInitial = medias[index].html.querySelector('.listPhoto__img');\n    imgInitial.focus();\n    lightbox.remove();\n    document.querySelector('html').removeAttribute('style');\n  };\n  /**\n   * Gestion des clicks\n   */\n  // ferme la lightbox\n\n\n  closeBtn.onclick = function () {\n    close();\n  }; // image precedante\n\n\n  left.onclick = function () {\n    goLeft();\n  }; // image suivante\n\n\n  right.onclick = function () {\n    goRight();\n  };\n  /**\n   * Gestion du clavier\n   */\n\n\n  right.onkeydown = function (e) {\n    if (!e.shiftKey && e.key === 'Tab') {\n      e.preventDefault();\n      closeBtn.focus();\n    }\n\n    if (e.key === 'Enter') {\n      goRight();\n    }\n  };\n\n  closeBtn.onkeydown = function (e) {\n    if (e.shiftKey && e.key === 'Tab') {\n      e.preventDefault();\n      right.focus();\n    }\n\n    if (e.key === 'Enter') {\n      close();\n    }\n  };\n\n  left.onkeydown = function (e) {\n    if (e.key === 'Enter') {\n      goLeft();\n    }\n  };\n\n  lightbox.onkeydown = function (e) {\n    if (e.key === 'Escape') {\n      close();\n    }\n\n    if (e.key === 'ArrowLeft') {\n      goLeft();\n    }\n\n    if (e.key === 'ArrowRight') {\n      goRight();\n    }\n  };\n\n  body.append(lightbox);\n  closeBtn.focus();\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Lightbox.js?");

/***/ }),

/***/ "./src/DomConstructor/MediaCard.js":
/*!*****************************************!*\
  !*** ./src/DomConstructor/MediaCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MediaCard; });\n/**\n *\n * @param {object} data les données du média\n * @param {string} type le type de media 'image' ou 'video'\n */\nfunction MediaCard(data, type) {\n  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var card = document.createElement('div');\n  card.classList.add('listPhoto__card');\n  var container = document.createElement('div');\n  container.classList.add('listPhoto__container');\n  var imgBox = document.createElement('div');\n  imgBox.classList.add('listPhoto__imgBox');\n  var img;\n\n  if (type === 'video') {\n    img = document.createElement('video');\n    img.textContent = data.alt;\n  } else {\n    img = document.createElement('img');\n    img.alt = data.alt;\n  }\n\n  img.classList.add('listPhoto__img');\n  img.src = data.url;\n  img.tabIndex = index;\n  img.ariaLabel = \"\".concat(data.title, \", closeup view\");\n  var content = document.createElement('div');\n  content.classList.add('listPhoto__content');\n  var title = document.createElement('h2');\n  title.classList.add('listPhoto__title');\n  title.textContent = data.title;\n  var info = document.createElement('div');\n  info.classList.add('listPhoto__info');\n  var price = document.createElement('span');\n  price.classList.add('listPhoto__price');\n  price.textContent = \"\".concat(data.price, \" \\u20AC \");\n  var likes = document.createElement('div');\n  likes.roles = 'button';\n  likes.ariaLabel = 'AJouter un like';\n  likes.classList.add('listPhoto__like');\n  likes.innerHTML = \"<span>\".concat(data.likes, \"</span>\");\n  var likeBtn = document.createElement('span');\n  likeBtn.classList.add('fas', 'fa-heart');\n  likeBtn.tabIndex = index;\n  likes.ariaLabel = 'Likes';\n  card.append(container);\n  container.append(imgBox);\n  container.append(content);\n  imgBox.append(img);\n  content.append(title);\n  content.append(info);\n  info.append(price);\n  info.append(likes);\n  likes.append(likeBtn);\n  return card;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/MediaCard.js?");

/***/ }),

/***/ "./src/DomConstructor/PhotographerCard.js":
/*!************************************************!*\
  !*** ./src/DomConstructor/PhotographerCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotographerCard; });\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/DomConstructor/Tag.js\");\n\n/**\n *\n * @param {object} data les données du photgraphe\n */\n\nfunction PhotographerCard(data) {\n  // creation de la carte\n  var card = document.createElement('article');\n  card.classList.add('cardAuthor'); // creation du lien\n\n  var link = document.createElement('a');\n  link.classList.add('cardAuthor__link');\n  link.href = \"./photographe.html?author=\".concat(data.id);\n  link.ariaLabel = data.name;\n  card.append(link); // creation de la box d'image est titre\n\n  var imgBox = document.createElement('div');\n  imgBox.classList.add('cardAuthor__imgBox');\n  link.append(imgBox); // creation de l'image\n\n  var img = document.createElement('img');\n  img.classList.add('cardAuthor__img');\n  img.alt = \"Portrait du photographe \".concat(data.name);\n  img.src = \"./img/authors/\".concat(data.portrait);\n  imgBox.append(img); // creation du nom de l'auteur\n\n  var title = document.createElement('h2');\n  title.classList.add('cardAuthor__name');\n  title.textContent = data.name;\n  link.append(title); // creation de la box d'information de l'auteur\n\n  var info = document.createElement('div');\n  info.classList.add('cardAuthor__content');\n  card.append(info); // Ajout de la localisation de l'auteur\n\n  var local = document.createElement('p');\n  local.classList.add('cardAuthor__localisation');\n  local.textContent = \"\".concat(data.city, \", \").concat(data.country);\n  info.append(local); // ajout de la tagline\n\n  var tagline = document.createElement('p');\n  tagline.classList.add('cardAuthor__citation');\n  tagline.textContent = data.tagline;\n  info.append(tagline); // Ajout de la du tarif\n\n  var tarif = document.createElement('p');\n  tarif.classList.add('cardAuthor__tarif');\n  tarif.textContent = \"\".concat(data.price, \"/jour\");\n  info.append(tarif); // creation de la box tags\n\n  var tagsBox = document.createElement('div');\n  tagsBox.classList.add('cardAuthor__tags');\n  card.append(tagsBox); // ouverture de la liste des tags\n\n  var tags = document.createElement('ul');\n  tags.classList.add('tags');\n  tagsBox.append(tags); // Creation des tags un par un\n\n  data.tags.forEach(function (tag) {\n    var tagElt = Object(_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag, 'button');\n    tags.append(tagElt);\n  });\n  return card;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/PhotographerCard.js?");

/***/ }),

/***/ "./src/DomConstructor/PhotographerHeaderCard.js":
/*!******************************************************!*\
  !*** ./src/DomConstructor/PhotographerHeaderCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotographerHeaderCard; });\n/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tag */ \"./src/DomConstructor/Tag.js\");\n\n/**\n *\n * @param {object} data les données du photographe\n */\n\nfunction PhotographerHeaderCard(data) {\n  // récupération des l'emplacements\n  var siteTitle = document.querySelector('title');\n  var headerId = 'header_author';\n  var title = document.querySelector(\"#\".concat(headerId, \" .author__title\"));\n  var local = document.querySelector(\"#\".concat(headerId, \" .author__localisation\"));\n  var tagline = document.querySelector(\"#\".concat(headerId, \" .author__slogan\"));\n  var tags = document.querySelector(\"#\".concat(headerId, \" .tags\"));\n  var img = document.querySelector(\"#\".concat(headerId, \" .author__img\"));\n  var price = document.querySelector('.infoAuthor__price span'); // modifier le contenu\n\n  siteTitle.textContent = siteTitle.textContent + data.name;\n  title.textContent = data.name;\n  local.textContent = \"\".concat(data.city, \", \").concat(data.country);\n  tagline.textContent = data.tagline;\n  img.src = \"./img/authors/\".concat(data.portrait);\n  img.alt = \"Portrait du photographe \".concat(data.name);\n  price.textContent = data.price; // ajouter les tags\n\n  data.tags.forEach(function (tag) {\n    var tagElt = Object(_Tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag, 'a', \"./?filter=\".concat(tag));\n    tags.append(tagElt);\n  });\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/PhotographerHeaderCard.js?");

/***/ }),

/***/ "./src/DomConstructor/Tag.js":
/*!***********************************!*\
  !*** ./src/DomConstructor/Tag.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tag; });\n/**\n * Constructeur html d'un bouton Tag\n * @param {string} tag le nom du tag\n */\nfunction Tag(tag, type) {\n  var href = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var tagElt = document.createElement('li');\n  tagElt.classList.add('tags__elt');\n  var tagBtn = document.createElement(type);\n\n  if (type === 'a') {\n    tagBtn.href = href;\n  }\n\n  tagBtn.classList.add('tags__btn', 'btn', 'btn--tags');\n  tagBtn.textContent = \"#\".concat(tag);\n  tagBtn.ariaLabel = \"Tag \".concat(tag);\n  tagElt.append(tagBtn);\n  return tagElt;\n}\n\n//# sourceURL=webpack:///./src/DomConstructor/Tag.js?");

/***/ }),

/***/ "./src/Factory/FactoryForm.js":
/*!************************************!*\
  !*** ./src/Factory/FactoryForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryForm; });\n/* harmony import */ var _DomConstructor_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/Form */ \"./src/DomConstructor/Form.js\");\n\n/**\n * Factory pour creer les objets Media\n */\n\nfunction FactoryForm() {\n  this.CreateElement = function (nameAuthor) {\n    var element = {};\n    /**\n     * création du rendu html\n     */\n\n    element.html = new _DomConstructor_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameAuthor);\n    /**\n     * Methode pour ouvrir le formulaire\n     */\n\n    element.open = function () {\n      var _this = this;\n\n      var close = this.html.querySelector('.form__close');\n\n      close.onclick = function () {\n        return _this.close();\n      };\n\n      var body = document.querySelector('body');\n      body.append(this.html);\n      this.html.querySelector('[name=\"prenom\"]').focus();\n    };\n    /**\n     * Methode pour fermer le formulaire\n     */\n\n\n    element.close = function () {\n      var form = document.getElementById('contact');\n      form.remove();\n      document.querySelector('html').removeAttribute('style');\n      document.querySelector('.author__btn').focus();\n    }; // event\n\n\n    var btnClose = element.html.querySelector('.form__close');\n    var firstInput = element.html.querySelector('.form__input');\n\n    btnClose.onkeydown = function (e) {\n      if (e.key === 'Enter') {\n        e.preventDefault();\n        element.close();\n      }\n\n      if (!e.shiftKey && e.key === 'Tab') {\n        e.preventDefault();\n        firstInput.focus();\n      }\n    };\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryForm.js?");

/***/ }),

/***/ "./src/Factory/FactoryMedia.js":
/*!*************************************!*\
  !*** ./src/Factory/FactoryMedia.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryMedia; });\n/* harmony import */ var _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/MediaCard */ \"./src/DomConstructor/MediaCard.js\");\n\n/**\n * Factory pour creer les objets Media\n */\n\nfunction FactoryMedia() {\n  /**\n   * Le constructeur prend en parametre :\n   * @param {object} media les données du média\n   * @param {function} updateTotalLikes une fonction pour mettre à jour le total de like du photographe\n   */\n  this.CreateElement = function (media, updateTotalLikes) {\n    var element = media;\n\n    if (media.video) {\n      element.type = 'video';\n      element.title = media.video.replace(/_/g, ' ').replace(/.mp4/g, '');\n      element.url = \"img/\".concat(media.photographerId, \"/\").concat(media.video);\n      element.html = new _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](media, 'video');\n    } else if (media.image) {\n      element.type = 'image';\n      element.title = media.image.replace(/_/g, ' ').replace(/.jpg/g, '');\n      element.url = \"img/\".concat(media.photographerId, \"/\").concat(media.image);\n      element.html = new _DomConstructor_MediaCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](media, 'image');\n    } // Methode pour incrémenter le nombre de like de l'objet\n    // et mets à jour le total de likes du photographe\n\n\n    element.updateLikes = function () {\n      var textLikes = this.html.querySelector('.listPhoto__like span');\n      this.likes = this.likes + 1;\n      textLikes.textContent = this.likes;\n      updateTotalLikes();\n    }; // Methode pour afficher le rendu html de l'object\n    // gérer les evenement sur l'élément like\n\n\n    element.showElement = function () {\n      var _this = this;\n\n      var container = document.querySelector('.listPhoto');\n\n      if (this.html) {\n        var btn = this.html.querySelector('.fa-heart');\n\n        btn.onclick = function (e) {\n          _this.updateLikes();\n        };\n\n        btn.onkeydown = function (e) {\n          if ([32, 13].includes(e.keyCode)) {\n            _this.updateLikes();\n          }\n        };\n\n        container.append(this.html);\n      }\n    };\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryMedia.js?");

/***/ }),

/***/ "./src/Factory/FactoryPhotographe.js":
/*!*******************************************!*\
  !*** ./src/Factory/FactoryPhotographe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FactoryPhotographe; });\n/* harmony import */ var _DomConstructor_PhotographerCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomConstructor/PhotographerCard */ \"./src/DomConstructor/PhotographerCard.js\");\n/* harmony import */ var _DomConstructor_PhotographerHeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomConstructor/PhotographerHeaderCard */ \"./src/DomConstructor/PhotographerHeaderCard.js\");\n/* harmony import */ var _utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/btnComeBack */ \"./src/utils/btnComeBack.js\");\n\n\n\n/**\n * Factory de creation des photographe\n */\n\nfunction FactoryPhotographe() {\n  /**\n   * Le constructeur prend en parametres :\n   * @param {object} data les données du photographe\n   * @param {string} type 'card' si c'est une carte de photographe\n   *                       ou 'header' si c'est un header de page de photographe\n   */\n  this.CreateElement = function (data, type, filterTag) {\n    var element = data;\n\n    if (type === 'card') {\n      element.cardPhotographer = new _DomConstructor_PhotographerCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    } else {\n      element.cardHeaderPhotographer = new _DomConstructor_PhotographerHeaderCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n    }\n\n    if (type === 'card') {\n      element.showCard = function () {\n        var main = document.getElementById('listPhotographers');\n        var allFilter = this.cardPhotographer.querySelectorAll('.tags__btn');\n        Array.from(allFilter).forEach(function (filter) {\n          filter.onclick = function () {\n            var value = filter.textContent.replace(/#/, '').toLowerCase();\n            Object(_utils_btnComeBack__WEBPACK_IMPORTED_MODULE_2__[\"showBtnComeBack\"])(true);\n            filterTag(value);\n          };\n        });\n        main.append(this.cardPhotographer);\n      };\n    }\n\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/FactoryPhotographe.js?");

/***/ }),

/***/ "./src/Factory/ListBox.js":
/*!********************************!*\
  !*** ./src/Factory/ListBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListBox; });\n/**\n * fait fonctionner la listbox\n */\nfunction ListBox() {\n  /**\n   * initialise le fonctionnement de la listbox\n   * @param {objcet} listbox L'élément du dom conmprenant la listbox\n   * @param {function} updateAfterTri function pour mettre à jour le composant parent\n   */\n  this.CreateElement = function (listbox, updateAfterTri) {\n    var element = {};\n    element.btn = listbox.querySelector('.listbox__btn');\n    element.boxContent = listbox.querySelector('.listbox__list');\n    element.options = listbox.getElementsByClassName('listbox__elt');\n    /**\n     * mets à jour aria-expended\n     * @param {boolean} value true si la listbox est déplié sinon false\n     */\n\n    element.ariaExpanded = function (value) {\n      this.btn.setAttribute('aria-expanded', value);\n    };\n    /**\n     * action sur le bouton de la listbox\n     */\n\n    /**\n     * action sur les touches\n     * @param {event} e evenement\n     */\n\n\n    element.btn.onkeydown = function (e) {\n      if (['Enter', 'Space'].includes(e.key)) {\n        if (element.boxContent.classList.contains('hidden')) {\n          element.open();\n        } else {\n          element.boxContent.classList.add('hidden');\n          element.btn.focus();\n          element.close();\n        }\n      }\n    }; // action au click\n\n\n    element.btn.onclick = function () {\n      element.open();\n    };\n    /**\n     * Ouvrir la listbox et Ajoute les TabIndex aux options\n     */\n\n\n    element.open = function () {\n      var i = 100;\n      Array.from(this.options).forEach(function (elt) {\n        elt.tabIndex = i;\n\n        if (i === 100) {\n          elt.focus();\n        }\n\n        i = i + 1;\n      });\n      this.boxContent.classList.remove('hidden');\n      this.ariaExpanded(true);\n      this.boxContent.focus();\n    };\n    /**\n     * Ferme la listbox\n     */\n\n\n    element.close = function () {\n      element.boxContent.classList.add('hidden');\n      element.ariaExpanded(false);\n      element.btn.focus();\n      Array.from(element.options).forEach(function (elt) {\n        elt.removeAttribute('tabIndex');\n      });\n    };\n    /**\n     * mets à jour les valeur et attributs de la listbox\n     * @param {int} newIndex nouvel index de la valeur sélectionné\n     */\n\n\n    element.updateValue = function (newIndex) {\n      this.close();\n      var id = this.options[newIndex].id;\n      var textContent = this.options[newIndex].textContent;\n      this.btn.querySelector('.listbox__btn__text').textContent = textContent;\n      this.btn.nextSibling.nextElementSibling.setAttribute('aria-activedescendant', id);\n      var old = Array.from(this.options).findIndex(function (x) {\n        return x.classList.contains('selected');\n      });\n      this.options[old].classList.remove('selected');\n      this.options[old].removeAttribute('aria-selected');\n      this.options[newIndex].classList.add('selected');\n      this.options[newIndex].setAttribute('aria-selected', true);\n      updateAfterTri(textContent.toLowerCase().trim());\n    };\n    /**\n     * Ajoute les événnements aux options de la listbox\n     */\n\n\n    Array.from(element.options).forEach(function (option, i) {\n      option.onkeydown = function (e) {\n        if (!e.shiftKey && e.key === 'Tab') {\n          if (i === element.options.length - 1) {\n            e.preventDefault();\n            element.options[0].focus();\n          }\n        }\n\n        if (e.shiftKey && e.key === 'Tab') {\n          if (i === 0) {\n            e.preventDefault();\n            element.options[element.options.length - 1].focus();\n          }\n        }\n\n        if (['Enter', 'Space'].includes(e.key)) {\n          e.preventDefault();\n          element.updateValue(i);\n        }\n      };\n\n      option.onclick = function () {\n        element.updateValue(i);\n      };\n    });\n    return element;\n  };\n}\n\n//# sourceURL=webpack:///./src/Factory/ListBox.js?");

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Récupère les données via l'api\n */\nvar routeAPI = 'js/site-with-alt.json';\nvar requestOptions = {\n  method: 'GET',\n  redirect: 'follow'\n};\nvar getData = new Promise(function (resolve) {\n  fetch(routeAPI, requestOptions).then(function (response) {\n    return response.json();\n  }).then(function (result) {\n    resolve(result);\n  }).catch(function (error) {\n    return console.error(error);\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/getData.js?");

/***/ }),

/***/ "./src/paramUrl/paramUrlAuthor.js":
/*!****************************************!*\
  !*** ./src/paramUrl/paramUrlAuthor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * récupère l'id du photogrape d'une page\n */\nvar queryString = window.location.search;\nvar urlParams = new URLSearchParams(queryString);\nvar author = parseInt(urlParams.get('author'), 10);\n\nif (!author) {\n  window.location.replace('/');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (author);\n\n//# sourceURL=webpack:///./src/paramUrl/paramUrlAuthor.js?");

/***/ }),

/***/ "./src/photographes.js":
/*!*****************************!*\
  !*** ./src/photographes.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paramUrl_paramUrlAuthor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paramUrl/paramUrlAuthor */ \"./src/paramUrl/paramUrlAuthor.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/getData.js\");\n/* harmony import */ var _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Factory/FactoryPhotographe */ \"./src/Factory/FactoryPhotographe.js\");\n/* harmony import */ var _Factory_FactoryMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Factory/FactoryMedia */ \"./src/Factory/FactoryMedia.js\");\n/* harmony import */ var _utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/updateTotalLikes */ \"./src/utils/updateTotalLikes.js\");\n/* harmony import */ var _DomConstructor_Lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DomConstructor/Lightbox */ \"./src/DomConstructor/Lightbox.js\");\n/* harmony import */ var _Factory_ListBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Factory/ListBox */ \"./src/Factory/ListBox.js\");\n/* harmony import */ var _utils_tri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/tri */ \"./src/utils/tri.js\");\n/* harmony import */ var _Factory_FactoryForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Factory/FactoryForm */ \"./src/Factory/FactoryForm.js\");\n/**\n * initialisation des fonctionnalité de la page d'un photographe\n */\n\n\n\n\n\n\n\n\n\nvar container = document.querySelector('.listPhoto');\nvar medias = [];\nvar factPhotographe = new _Factory_FactoryPhotographe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar factMedia = new _Factory_FactoryMedia__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar factForm = new _Factory_FactoryForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\nvar form;\n/**\n * Afficher la lightbox au click sur les images\n */\n\nfunction showMedia() {\n  medias.forEach(function (media, i) {\n    media.showElement();\n    var img = media.html.querySelector('.listPhoto__img');\n\n    img.onclick = function () {\n      Object(_DomConstructor_Lightbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(medias, i);\n      document.querySelector('html').style.overflow = 'hidden';\n    };\n\n    img.onkeydown = function (e) {\n      if (['Enter', 'Space'].includes(e.key)) {\n        Object(_DomConstructor_Lightbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(medias, i);\n        document.querySelector('html').style.overflow = 'hidden';\n      }\n    };\n  });\n}\n/** On récupère les données et on les traites */\n\n\n_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].then(function (result) {\n  // on retrouve les données du photographe de la page\n  var findPhotographe = result.photographers.find(function (x) {\n    return x.id === _paramUrl_paramUrlAuthor__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }); // On créait l'objet photographe\n\n  var photographe = factPhotographe.CreateElement(findPhotographe, 'header'); // on récupère les médias du photographe\n\n  var mediaFilter = result.media.filter(function (x) {\n    return x.photographerId === _paramUrl_paramUrlAuthor__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }); // on créait chaque\n\n  mediaFilter.forEach(function (elt) {\n    // condition temporaire, il faut traiter les vdo\n    var newElement = factMedia.CreateElement(elt, function () {\n      return Object(_utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(medias);\n    });\n    medias.push(newElement);\n    Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triPopularite\"])(medias);\n    showMedia();\n  }); // on créait l'objet du formulaire\n\n  form = factForm.CreateElement(photographe.name); // Une fois tous les objects média créé on affiche le total des likes\n\n  Object(_utils_updateTotalLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(medias);\n});\n/**\n * Gestion de la listBox\n * @param {string} type nom du type de tri\n */\n\nfunction updateAfterTri(type) {\n  switch (type) {\n    case 'popularité':\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triPopularite\"])(medias);\n      break;\n\n    case 'titre':\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triTitre\"])(medias);\n      break;\n\n    case 'date':\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triDate\"])(medias);\n      break;\n\n    default:\n      Object(_utils_tri__WEBPACK_IMPORTED_MODULE_7__[\"triPopularite\"])(medias);\n      break;\n  }\n\n  container.innerHTML = '';\n  showMedia();\n}\n\nvar lisboxPhotographe = new _Factory_ListBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nlisboxPhotographe.CreateElement(document.querySelector('.listbox'), updateAfterTri);\n/**\n * Afficher le formulaire de contact\n */\n\nvar btnForm = document.querySelector('.author__btn');\n\nbtnForm.onclick = function () {\n  form.open();\n  document.querySelector('html').style.overflow = 'hidden';\n};\n\n//# sourceURL=webpack:///./src/photographes.js?");

/***/ }),

/***/ "./src/utils/btnComeBack.js":
/*!**********************************!*\
  !*** ./src/utils/btnComeBack.js ***!
  \**********************************/
/*! exports provided: showBtnComeBack, resetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showBtnComeBack\", function() { return showBtnComeBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetData\", function() { return resetData; });\nvar btnComeBack = document.querySelector('.comeBack .btn');\nfunction showBtnComeBack(show) {\n  if (show) {\n    btnComeBack.classList.remove('hidden');\n  } else {\n    btnComeBack.classList.add('hidden');\n  }\n}\nfunction resetData(resetFunction) {\n  btnComeBack.onclick = function () {\n    btnComeBack.classList.add('hidden');\n    resetFunction();\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/btnComeBack.js?");

/***/ }),

/***/ "./src/utils/tri.js":
/*!**************************!*\
  !*** ./src/utils/tri.js ***!
  \**************************/
/*! exports provided: triPopularite, triDate, triTitre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triPopularite\", function() { return triPopularite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triDate\", function() { return triDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triTitre\", function() { return triTitre; });\n/**\n * function de tri\n */\n\n/**\n * Tri par likes\n * @param {array} medias\n */\nfunction triPopularite(medias) {\n  medias.sort(function (a, b) {\n    return b.likes - a.likes;\n  });\n}\n/**\n * Tri par date\n * @param {array} medias\n */\n\nfunction triDate(medias) {\n  medias.sort(function (a, b) {\n    return Date.parse(a.date) - Date.parse(b.date);\n  });\n}\n/**\n * Tri par Titre\n * @param {array} medias\n */\n\nfunction triTitre(medias) {\n  medias.sort(function (a, b) {\n    ;\n    [a, b].forEach(function (elt) {\n      if (elt.image) {\n        elt.text = elt.image.replace(/_/g, ' ');\n      } else if (elt.video) {\n        elt.text = elt.video.replace(/_/g, ' ');\n      }\n    });\n    return a.text.localeCompare(b.text);\n  });\n}\n\n//# sourceURL=webpack:///./src/utils/tri.js?");

/***/ }),

/***/ "./src/utils/updateTotalLikes.js":
/*!***************************************!*\
  !*** ./src/utils/updateTotalLikes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return updateTotalLikes; });\n/**\n * Calculer le total des likes et l'afficher\n * @param {object} data un array avec toutes les données des médias\n */\nfunction updateTotalLikes(data) {\n  var likesBox = document.querySelector('.infoAuthor__like span');\n  var likes = 0;\n  data.forEach(function (elt) {\n    likes = likes + elt.likes;\n  });\n  likesBox.textContent = likes;\n}\n\n//# sourceURL=webpack:///./src/utils/updateTotalLikes.js?");

/***/ })

/******/ });