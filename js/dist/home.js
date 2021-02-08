!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));const o=document.querySelector(".comeBack .btn");function r(t){t?o.classList.remove("hidden"):o.classList.add("hidden")}function c(t){o.onclick=()=>{o.classList.remove("hidden"),t()}}},function(t,e,n){"use strict";const o={method:"GET",redirect:"follow"},r=new Promise(t=>{fetch("js/site-with-alt.json",o).then(t=>t.json()).then(e=>{t(e)})});e.a=r},function(t,e,n){"use strict";function o(t,e,n=null){const o=document.createElement("li");o.classList.add("tags__elt");const r=document.createElement(e);return"a"===e&&(r.href=n),r.classList.add("tags__btn","btn","btn--tags"),r.textContent="#"+t,o.append(r),o}function r(t){const e=document.createElement("article");e.classList.add("cardAuthor");const n=document.createElement("a");n.classList.add("cardAuthor__link"),n.href="./photographe.html?author="+t.id,e.append(n);const r=document.createElement("div");r.classList.add("cardAuthor__imgBox"),n.append(r);const c=document.createElement("img");c.classList.add("cardAuthor__img"),c.alt="Portrait du photographe "+t.name,c.src="./img/authors/"+t.portrait,r.append(c);const a=document.createElement("h2");a.classList.add("cardAuthor__name"),a.textContent=t.name,n.append(a);const s=document.createElement("div");s.classList.add("cardAuthor__content"),e.append(s);const d=document.createElement("p");d.classList.add("cardAuthor__localisation"),d.textContent=`${t.city}, ${t.country}`,s.append(d);const l=document.createElement("p");l.classList.add("cardAuthor__citation"),l.textContent=t.tagline,s.append(l);const u=document.createElement("p");u.classList.add("cardAuthor__tarif"),u.textContent=t.price+"/jour",s.append(u);const i=document.createElement("div");i.classList.add("cardAuthor__tags"),e.append(i);const h=document.createElement("ul");return h.classList.add("tags"),i.append(h),t.tags.forEach(t=>{const e=o(t,"button");h.append(e)}),e}function c(t){const e=document.querySelector("title"),n="header_author",r=document.querySelector(`#${n} .author__title`),c=document.querySelector(`#${n} .author__localisation`),a=document.querySelector(`#${n} .author__slogan`),s=document.querySelector(`#${n} .tags`),d=document.querySelector(`#${n} .author__img`),l=document.querySelector(".infoAuthor__price span");e.textContent=e.textContent+t.name,r.textContent=t.name,c.textContent=`${t.city}, ${t.country}`,a.textContent=t.tagline,d.src="./img/authors/"+t.portrait,d.alt="Portrait du photographe "+t.name,l.textContent=t.price,t.tags.forEach(t=>{const e=o(t,"a","./../?filter="+t);s.append(e)})}n.d(e,"a",(function(){return s}));var a=n(0);function s(){this.CreateElement=function(t,e,n){const o=t;return"card"===e?o.cardPhotographer=new r(t):o.cardHeaderPhotographer=new c(t),o.showCard=function(){const t=document.getElementById("listPhotographers"),e=this.cardPhotographer.querySelectorAll(".tags__btn");Array.from(e).forEach(t=>{t.onclick=()=>{const e=t.textContent.replace(/#/,"").toLowerCase();Object(a.b)(!0),n(e)}}),t.append(this.cardPhotographer)},o}}},,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(2),c=n(0);const a=window.location.search;var s=new URLSearchParams(a).get("filter");const d=new r.a,l=[];function u(t){i(l.filter(e=>e.tags.includes(t)))}function i(t=l){document.getElementById("listPhotographers").innerHTML=null,t.forEach(t=>{t.showCard()})}o.a.then(t=>{t.photographers.forEach(t=>{const e=new d.CreateElement(t,"card",u);l.push(e),e.showCard()}),s&&u(s)});const h=document.getElementsByClassName("tags__btn");Array.from(h).forEach(t=>{t.onclick=()=>{const e=t.textContent.replace(/#/,"").toLowerCase();Object(c.b)(!0),u(e)}});const m=document.querySelector("header"),p=document.getElementsByClassName("cardAuthor");window.onscroll=function(){console.log(l.length===p.length),console.log(m.offsetHeight>window.scrollY),console.log(m.offsetHeight>window.scrollY&&l.length===p.length),m.offsetHeight>window.scrollY&&l.length===p.length?Object(c.b)(!1):Object(c.b)(!0)},Object(c.a)(i)}]);