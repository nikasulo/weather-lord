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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Baloo+Bhai|Dosis|Nunito|Pacifico|Rajdhani|Righteous&display=swap);", ""]);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nmain {\n  height: 100vh;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n  background-color: grey; }\n\n.row {\n  display: flex;\n  flex-flow: row nowrap; }\n\n.column {\n  display: flex;\n  flex-flow: column nowrap; }\n\n.weather-icon {\n  width: 100px;\n  height: auto; }\n\n.search-form {\n  width: 100%; }\n  .search-form input {\n    border: none;\n    padding: 1em;\n    outline: none; }\n  .search-form .search-box {\n    width: 90%;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px; }\n  .search-form .search-btn {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    transition: .5s; }\n    .search-form .search-btn:hover {\n      background-color: #ffe600;\n      color: white;\n      cursor: pointer; }\n\n.country-details {\n  justify-content: center; }\n  .country-details .country-name {\n    font-family: 'Righteous', cursive; }\n  .country-details .region {\n    font-family: 'Nunito', sans-serif; }\n  .country-details .longitude {\n    margin-right: 1em; }\n  .country-details .longitude, .country-details .latitude {\n    font-family: 'Rajdhani', sans-serif; }\n\n.container {\n  align-items: center;\n  justify-content: flex-start; }\n\n.main-container {\n  width: 40%;\n  margin: auto;\n  position: relative; }\n\n.sun-gif {\n  position: absolute;\n  animation: reverselightsource .5s ease-in-out 0s 1 forwards normal; }\n  .sun-gif img {\n    width: 400px; }\n\n.moon-gif {\n  position: absolute;\n  animation: reverselightsource .5s ease-in-out 0s 1 forwards normal; }\n  .moon-gif img {\n    width: 150px; }\n\n.night {\n  animation: night 2s ease-in-out 0s 1 forwards normal; }\n  .night .country-details {\n    color: white; }\n  .night .search-box:focus {\n    border: 1px solid '#f1c40f'; }\n  .night .details-card {\n    background-color: #ffee00;\n    color: #050505;\n    box-shadow: 0 0 5px .5px white; }\n\n.day {\n  animation: day 2s ease-in-out 0s 1 forwards normal; }\n\n@keyframes night {\n  from {\n    background-color: #ffd900; }\n  to {\n    background-color: #050505; } }\n\n@keyframes day {\n  from {\n    background-color: #050505; }\n  to {\n    background-color: #ffd271; } }\n\n@keyframes sun {\n  0% {\n    opacity: 0;\n    top: -50px;\n    display: block; }\n  20% {\n    opacity: 1;\n    top: -30px; }\n  100% {\n    opacity: 1;\n    top: 0; } }\n\n@keyframes moon {\n  0% {\n    opacity: 0;\n    top: -50px; }\n  20% {\n    opacity: 1;\n    top: -30px; }\n  100% {\n    opacity: 1;\n    top: 50px; } }\n\n@keyframes reverselightsource {\n  0% {\n    opacity: 1;\n    top: 0; }\n  20% {\n    opacity: 1;\n    top: -30px; }\n  100% {\n    opacity: 0;\n    top: -50px; } }\n\n.details-card {\n  background-color: white;\n  padding: 1.8em 2em;\n  margin-right: 1em;\n  border-radius: 5px;\n  box-shadow: 0 0 5px .5px black;\n  font-family: 'Nunito', sans-serif;\n  font-size: .8em; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/auxiliaries.js":
/*!****************************!*\
  !*** ./src/auxiliaries.js ***!
  \****************************/
/*! exports provided: renderCountryName, renderData, changeBackground, capitalizeString, capitalizeWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCountryName", function() { return renderCountryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderData", function() { return renderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBackground", function() { return changeBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeString", function() { return capitalizeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeWord", function() { return capitalizeWord; });
const renderCountryName = (countryName) => {
  const countryNameContainer = document.querySelector('.country-name');
  countryNameContainer.innerHTML = countryName;
}


const renderData = (longitude, latitude, icon, isDay, tempCelcius, tempFaherneit, weather, region, feelsLikeC, feelsLikeF) => {
  const img = document.querySelector('.weather-icon');
  const longitudeContainer = document.querySelector('.longitude'); 
  const latitudeContainer = document.querySelector('.latitude'); 
  const regionContainer = document.querySelector('.region');
  const weatherContainer = document.querySelector('.weather');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const main = document.querySelector('main');
  img.src = "../src/images/" + icon;
  changeBackground(isDay, main);

  longitudeContainer.innerHTML = `Longitude: ${longitude}`;
  latitudeContainer.innerHTML = `Latitude: ${latitude}`;
  regionContainer.innerHTML = `Region: ${region}`;
  weatherContainer.innerHTML = `It's ${weather}`;
  temperature.innerHTML = `${tempCelcius} &#8451;/ ${tempFaherneit}	&#8457;`; 
  feelsLike.innerHTML = `Feels like <br> ${feelsLikeC} &#8451;/ ${feelsLikeF}	&#8457;`
}

const changeBackground = (isDay, main) => {
  if (!isDay) {
    if (main.classList.contains('day')){
      main.classList.toggle('day');
    } 
    
    document.querySelector('.sun-gif').style.animation = "reverselightsource .5s ease-in-out 0s 1 forwards normal"

    if (!main.classList.contains('night')){
      main.classList.toggle('night');
      document.querySelector('.moon-gif').style.animation = "moon 1s ease-in-out 0s 1 forwards normal"
    } 
  } else {
    if (main.classList.contains('night')){
      main.classList.toggle('night');
      document.querySelector('.moon-gif').style.animation = "reverselightsource .5s ease-in-out 0s 1 forwards normal"
    } 

    document.querySelector('.moon-gif').style.animation = "reverselightsource .5s ease-in-out 0s 1 forwards normal"

    if (!main.classList.contains('day')){
      main.classList.toggle('day')
      document.querySelector('.sun-gif').style.animation = "sun 1s ease-in-out 0s 1 forwards normal"
    } 
  }
}


const capitalizeString = (string) => {
  string = string.split(' ');
  string = string.map((word) => capitalizeWord(word));
  string = string.join(' ');
  return string;
}

const capitalizeWord = (word) => {
  word = word.split('');
  word[0] = word[0].toUpperCase();
  word = word.join('')
  return word;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auxiliaries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliaries.js */ "./src/auxiliaries.js");
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_1__);




const BASE_URL = "https://api.aerisapi.com/";
const CLIENT_ID = "sE56PqAn4S3wCf9HQw8n1";
const APP_SECRET = "eMGjiglIxVapPzQCk1dVFlCGFtvdJuq63gYPLhUm";
const SECRETS = `client_id=${CLIENT_ID}&client_secret=${APP_SECRET}`;

const getData = (endpoint, action, selector, extraQuery = '') => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const url = BASE_URL + `${endpoint.toLowerCase()}/` + 
                            `${action.toLowerCase()}${selector}${extraQuery.toLowerCase()}` + SECRETS;

    request.open('GET', url, true);
    request.onload = () => {
      if (request.status == 200){
        resolve(JSON.parse(request.response));
      } else {
        reject(request.statusText);
      }
    };

    request.onerror = () => {
      reject(request.statusText);
    };

    request.send();
  });
}


const getWeatherData = async (country) => {
  const countryData = await getData('countries', `${country}`, '?')
  const countryName = countryData.response.place.name;
  const countrySymbol = countryData.response.place.iso;
  Object(_auxiliaries_js__WEBPACK_IMPORTED_MODULE_0__["renderCountryName"])(Object(_auxiliaries_js__WEBPACK_IMPORTED_MODULE_0__["capitalizeString"])(countryName));
  const weatherData = await getData('observations', 'search', '?', `query=country:${countrySymbol}&`);
  extractRelevantData(weatherData);
}

const getRegion = (region) => {
  region = region.split('/');
  region = region[0];
  return region;
}

const extractRelevantData = (data) => {
  const weatherData = data.response[0];
  const longitude = weatherData.loc.long;
  const latitude = weatherData.loc.lat;
  const stationData = weatherData.ob;
  const icon = stationData.icon;
  const isDay = stationData.isDay;
  const tempCelcius = stationData.tempC;
  const tempFaherneit = stationData.tempF;
  const feelsLikeC = stationData.feelslikeC;
  const feelsLikeF = stationData.feelslikeF;
  const weather = stationData.weather;
  const region  = getRegion(weatherData.profile.tz);
  Object(_auxiliaries_js__WEBPACK_IMPORTED_MODULE_0__["renderData"])(longitude, latitude, icon, isDay, tempCelcius, tempFaherneit, weather, region, feelsLikeC, feelsLikeF);
}

const fetchNewWeatherData = (e) => {
  e.preventDefault();
  const form = document.querySelector('.search-form');
  const country = form[0].value;
  getWeatherData(country);
  }
  
  const addEventListeners = () => {
  document.querySelector('.search-btn').addEventListener('click', (event) => fetchNewWeatherData(event));
  }
  
  window.onload = () => {
  getWeatherData('nigeria');
  addEventListeners();
  }

  
  


/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3M/N2RhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0Es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OztBQUVuRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JELCtCQUErQixxQkFBcUIsRUFBRSxTQUFTLEVBQUUseUJBQXlCOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBLG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0E7QUFDQSxFQUFFLHlFQUFpQixDQUFDLHdFQUFnQjtBQUNwQyxvRkFBb0YsY0FBYztBQUNsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtFQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBLGNBQWMsbUJBQU8sQ0FBQyxtTkFBb0c7O0FBRTFIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNKQUEyRTs7QUFFaEc7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbG9vK0JoYWl8RG9zaXN8TnVuaXRvfFBhY2lmaWNvfFJhamRoYW5pfFJpZ2h0ZW91cyZkaXNwbGF5PXN3YXApO1wiLCBcIlwiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyB9XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgbm93cmFwOyB9XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwOyB9XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5zZWFyY2gtZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAuc2VhcmNoLWZvcm0gLnNlYXJjaC1ib3gge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxcbiAgLnNlYXJjaC1mb3JtIC5zZWFyY2gtYnRuIHtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogLjVzOyB9XFxuICAgIC5zZWFyY2gtZm9ybSAuc2VhcmNoLWJ0bjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTYwMDtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNvdW50cnktZGV0YWlscyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLmNvdW50cnktZGV0YWlscyAuY291bnRyeS1uYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBjdXJzaXZlOyB9XFxuICAuY291bnRyeS1kZXRhaWxzIC5yZWdpb24ge1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7IH1cXG4gIC5jb3VudHJ5LWRldGFpbHMgLmxvbmdpdHVkZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuICAuY291bnRyeS1kZXRhaWxzIC5sb25naXR1ZGUsIC5jb3VudHJ5LWRldGFpbHMgLmxhdGl0dWRlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWpkaGFuaScsIHNhbnMtc2VyaWY7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zdW4tZ2lmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogcmV2ZXJzZWxpZ2h0c291cmNlIC41cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDsgfVxcbiAgLnN1bi1naWYgaW1nIHtcXG4gICAgd2lkdGg6IDQwMHB4OyB9XFxuXFxuLm1vb24tZ2lmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogcmV2ZXJzZWxpZ2h0c291cmNlIC41cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbDsgfVxcbiAgLm1vb24tZ2lmIGltZyB7XFxuICAgIHdpZHRoOiAxNTBweDsgfVxcblxcbi5uaWdodCB7XFxuICBhbmltYXRpb246IG5pZ2h0IDJzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsOyB9XFxuICAubmlnaHQgLmNvdW50cnktZGV0YWlscyB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLm5pZ2h0IC5zZWFyY2gtYm94OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJyNmMWM0MGYnOyB9XFxuICAubmlnaHQgLmRldGFpbHMtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVlMDA7XFxuICAgIGNvbG9yOiAjMDUwNTA1O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IC41cHggd2hpdGU7IH1cXG5cXG4uZGF5IHtcXG4gIGFuaW1hdGlvbjogZGF5IDJzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsOyB9XFxuXFxuQGtleWZyYW1lcyBuaWdodCB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDkwMDsgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTA1OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGRheSB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUwNTsgfVxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkMjcxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHN1biB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogLTUwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IC0zMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIG1vb24ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IC01MHB4OyB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IC0zMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiA1MHB4OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHJldmVyc2VsaWdodHNvdXJjZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMDsgfVxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAtMzBweDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogLTUwcHg7IH0gfVxcblxcbi5kZXRhaWxzLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxLjhlbSAyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggLjVweCBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogLjhlbTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImV4cG9ydCBjb25zdCByZW5kZXJDb3VudHJ5TmFtZSA9IChjb3VudHJ5TmFtZSkgPT4ge1xuICBjb25zdCBjb3VudHJ5TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LW5hbWUnKTtcbiAgY291bnRyeU5hbWVDb250YWluZXIuaW5uZXJIVE1MID0gY291bnRyeU5hbWU7XG59XG5cblxuZXhwb3J0IGNvbnN0IHJlbmRlckRhdGEgPSAobG9uZ2l0dWRlLCBsYXRpdHVkZSwgaWNvbiwgaXNEYXksIHRlbXBDZWxjaXVzLCB0ZW1wRmFoZXJuZWl0LCB3ZWF0aGVyLCByZWdpb24sIGZlZWxzTGlrZUMsIGZlZWxzTGlrZUYpID0+IHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpO1xuICBjb25zdCBsb25naXR1ZGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZ2l0dWRlJyk7IFxuICBjb25zdCBsYXRpdHVkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXRpdHVkZScpOyBcbiAgY29uc3QgcmVnaW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbicpO1xuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9cIiArIGljb247XG4gIGNoYW5nZUJhY2tncm91bmQoaXNEYXksIG1haW4pO1xuXG4gIGxvbmdpdHVkZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgTG9uZ2l0dWRlOiAke2xvbmdpdHVkZX1gO1xuICBsYXRpdHVkZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgTGF0aXR1ZGU6ICR7bGF0aXR1ZGV9YDtcbiAgcmVnaW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBSZWdpb246ICR7cmVnaW9ufWA7XG4gIHdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gYEl0J3MgJHt3ZWF0aGVyfWA7XG4gIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke3RlbXBDZWxjaXVzfSAmIzg0NTE7LyAke3RlbXBGYWhlcm5laXR9XHQmIzg0NTc7YDsgXG4gIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBgRmVlbHMgbGlrZSA8YnI+ICR7ZmVlbHNMaWtlQ30gJiM4NDUxOy8gJHtmZWVsc0xpa2VGfVx0JiM4NDU3O2Bcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoaXNEYXksIG1haW4pID0+IHtcbiAgaWYgKCFpc0RheSkge1xuICAgIGlmIChtYWluLmNsYXNzTGlzdC5jb250YWlucygnZGF5Jykpe1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXknKTtcbiAgICB9IFxuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW4tZ2lmJykuc3R5bGUuYW5pbWF0aW9uID0gXCJyZXZlcnNlbGlnaHRzb3VyY2UgLjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsXCJcblxuICAgIGlmICghbWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ25pZ2h0Jykpe1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCduaWdodCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb24tZ2lmJykuc3R5bGUuYW5pbWF0aW9uID0gXCJtb29uIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsXCJcbiAgICB9IFxuICB9IGVsc2Uge1xuICAgIGlmIChtYWluLmNsYXNzTGlzdC5jb250YWlucygnbmlnaHQnKSl7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ25pZ2h0Jyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbi1naWYnKS5zdHlsZS5hbmltYXRpb24gPSBcInJldmVyc2VsaWdodHNvdXJjZSAuNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWxcIlxuICAgIH0gXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbi1naWYnKS5zdHlsZS5hbmltYXRpb24gPSBcInJldmVyc2VsaWdodHNvdXJjZSAuNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWxcIlxuXG4gICAgaWYgKCFtYWluLmNsYXNzTGlzdC5jb250YWlucygnZGF5Jykpe1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdkYXknKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bi1naWYnKS5zdHlsZS5hbmltYXRpb24gPSBcInN1biAxcyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbFwiXG4gICAgfSBcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplU3RyaW5nID0gKHN0cmluZykgPT4ge1xuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyAnKTtcbiAgc3RyaW5nID0gc3RyaW5nLm1hcCgod29yZCkgPT4gY2FwaXRhbGl6ZVdvcmQod29yZCkpO1xuICBzdHJpbmcgPSBzdHJpbmcuam9pbignICcpO1xuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZVdvcmQgPSAod29yZCkgPT4ge1xuICB3b3JkID0gd29yZC5zcGxpdCgnJyk7XG4gIHdvcmRbMF0gPSB3b3JkWzBdLnRvVXBwZXJDYXNlKCk7XG4gIHdvcmQgPSB3b3JkLmpvaW4oJycpXG4gIHJldHVybiB3b3JkO1xufSIsImltcG9ydCB7IHJlbmRlckRhdGEsIGNhcGl0YWxpemVTdHJpbmcscmVuZGVyQ291bnRyeU5hbWUgfSBmcm9tICcuL2F1eGlsaWFyaWVzLmpzJztcblxuaW1wb3J0IFN0eWxlcyBmcm9tICcuL3N0eWxlc2hlZXRzL21haW4uc2Nzcyc7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FwaS5hZXJpc2FwaS5jb20vXCI7XG5jb25zdCBDTElFTlRfSUQgPSBcInNFNTZQcUFuNFMzd0NmOUhRdzhuMVwiO1xuY29uc3QgQVBQX1NFQ1JFVCA9IFwiZU1HamlnbEl4VmFwUHpRQ2sxZFZGbENHRnR2ZEp1cTYzZ1lQTGhVbVwiO1xuY29uc3QgU0VDUkVUUyA9IGBjbGllbnRfaWQ9JHtDTElFTlRfSUR9JmNsaWVudF9zZWNyZXQ9JHtBUFBfU0VDUkVUfWA7XG5cbmNvbnN0IGdldERhdGEgPSAoZW5kcG9pbnQsIGFjdGlvbiwgc2VsZWN0b3IsIGV4dHJhUXVlcnkgPSAnJykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCB1cmwgPSBCQVNFX1VSTCArIGAke2VuZHBvaW50LnRvTG93ZXJDYXNlKCl9L2AgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthY3Rpb24udG9Mb3dlckNhc2UoKX0ke3NlbGVjdG9yfSR7ZXh0cmFRdWVyeS50b0xvd2VyQ2FzZSgpfWAgKyBTRUNSRVRTO1xuXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCl7XG4gICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QocmVxdWVzdC5zdGF0dXNUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KHJlcXVlc3Quc3RhdHVzVGV4dCk7XG4gICAgfTtcblxuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9KTtcbn1cblxuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChjb3VudHJ5KSA9PiB7XG4gIGNvbnN0IGNvdW50cnlEYXRhID0gYXdhaXQgZ2V0RGF0YSgnY291bnRyaWVzJywgYCR7Y291bnRyeX1gLCAnPycpXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gY291bnRyeURhdGEucmVzcG9uc2UucGxhY2UubmFtZTtcbiAgY29uc3QgY291bnRyeVN5bWJvbCA9IGNvdW50cnlEYXRhLnJlc3BvbnNlLnBsYWNlLmlzbztcbiAgcmVuZGVyQ291bnRyeU5hbWUoY2FwaXRhbGl6ZVN0cmluZyhjb3VudHJ5TmFtZSkpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldERhdGEoJ29ic2VydmF0aW9ucycsICdzZWFyY2gnLCAnPycsIGBxdWVyeT1jb3VudHJ5OiR7Y291bnRyeVN5bWJvbH0mYCk7XG4gIGV4dHJhY3RSZWxldmFudERhdGEod2VhdGhlckRhdGEpO1xufVxuXG5jb25zdCBnZXRSZWdpb24gPSAocmVnaW9uKSA9PiB7XG4gIHJlZ2lvbiA9IHJlZ2lvbi5zcGxpdCgnLycpO1xuICByZWdpb24gPSByZWdpb25bMF07XG4gIHJldHVybiByZWdpb247XG59XG5cbmNvbnN0IGV4dHJhY3RSZWxldmFudERhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGRhdGEucmVzcG9uc2VbMF07XG4gIGNvbnN0IGxvbmdpdHVkZSA9IHdlYXRoZXJEYXRhLmxvYy5sb25nO1xuICBjb25zdCBsYXRpdHVkZSA9IHdlYXRoZXJEYXRhLmxvYy5sYXQ7XG4gIGNvbnN0IHN0YXRpb25EYXRhID0gd2VhdGhlckRhdGEub2I7XG4gIGNvbnN0IGljb24gPSBzdGF0aW9uRGF0YS5pY29uO1xuICBjb25zdCBpc0RheSA9IHN0YXRpb25EYXRhLmlzRGF5O1xuICBjb25zdCB0ZW1wQ2VsY2l1cyA9IHN0YXRpb25EYXRhLnRlbXBDO1xuICBjb25zdCB0ZW1wRmFoZXJuZWl0ID0gc3RhdGlvbkRhdGEudGVtcEY7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBzdGF0aW9uRGF0YS5mZWVsc2xpa2VDO1xuICBjb25zdCBmZWVsc0xpa2VGID0gc3RhdGlvbkRhdGEuZmVlbHNsaWtlRjtcbiAgY29uc3Qgd2VhdGhlciA9IHN0YXRpb25EYXRhLndlYXRoZXI7XG4gIGNvbnN0IHJlZ2lvbiAgPSBnZXRSZWdpb24od2VhdGhlckRhdGEucHJvZmlsZS50eik7XG4gIHJlbmRlckRhdGEobG9uZ2l0dWRlLCBsYXRpdHVkZSwgaWNvbiwgaXNEYXksIHRlbXBDZWxjaXVzLCB0ZW1wRmFoZXJuZWl0LCB3ZWF0aGVyLCByZWdpb24sIGZlZWxzTGlrZUMsIGZlZWxzTGlrZUYpO1xufVxuXG5jb25zdCBmZXRjaE5ld1dlYXRoZXJEYXRhID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG4gIGNvbnN0IGNvdW50cnkgPSBmb3JtWzBdLnZhbHVlO1xuICBnZXRXZWF0aGVyRGF0YShjb3VudHJ5KTtcbiAgfVxuICBcbiAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGZldGNoTmV3V2VhdGhlckRhdGEoZXZlbnQpKTtcbiAgfVxuICBcbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoJ25pZ2VyaWEnKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIFxuICBcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=