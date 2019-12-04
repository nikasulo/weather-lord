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
  console.log(countryData)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9tYWluLnNjc3M/N2RhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0Es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OztBQUVuRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUJBQXVCO0FBQ3JELCtCQUErQixxQkFBcUIsRUFBRSxTQUFTLEVBQUUseUJBQXlCOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBLG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUVBQWlCLENBQUMsd0VBQWdCO0FBQ3BDLG9GQUFvRixjQUFjO0FBQ2xHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0VBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRUEsY0FBYyxtQkFBTyxDQUFDLG1OQUFvRzs7QUFFMUg7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFsb28rQmhhaXxEb3Npc3xOdW5pdG98UGFjaWZpY298UmFqZGhhbml8UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7IH1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7IH1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7IH1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnNlYXJjaC1mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5zZWFyY2gtZm9ybSAuc2VhcmNoLWJveCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyB9XFxuICAuc2VhcmNoLWZvcm0gLnNlYXJjaC1idG4ge1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7IH1cXG4gICAgLnNlYXJjaC1mb3JtIC5zZWFyY2gtYnRuOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNjAwO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY291bnRyeS1kZXRhaWxzIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuY291bnRyeS1kZXRhaWxzIC5jb3VudHJ5LW5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7IH1cXG4gIC5jb3VudHJ5LWRldGFpbHMgLnJlZ2lvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjsgfVxcbiAgLmNvdW50cnktZGV0YWlscyAubG9uZ2l0dWRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG4gIC5jb3VudHJ5LWRldGFpbHMgLmxvbmdpdHVkZSwgLmNvdW50cnktZGV0YWlscyAubGF0aXR1ZGUge1xcbiAgICBmb250LWZhbWlseTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZjsgfVxcblxcbi5jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnN1bi1naWYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uOiByZXZlcnNlbGlnaHRzb3VyY2UgLjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsOyB9XFxuICAuc3VuLWdpZiBpbWcge1xcbiAgICB3aWR0aDogNDAwcHg7IH1cXG5cXG4ubW9vbi1naWYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uOiByZXZlcnNlbGlnaHRzb3VyY2UgLjVzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsOyB9XFxuICAubW9vbi1naWYgaW1nIHtcXG4gICAgd2lkdGg6IDE1MHB4OyB9XFxuXFxuLm5pZ2h0IHtcXG4gIGFuaW1hdGlvbjogbmlnaHQgMnMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7IH1cXG4gIC5uaWdodCAuY291bnRyeS1kZXRhaWxzIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAubmlnaHQgLnNlYXJjaC1ib3g6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAnI2YxYzQwZic7IH1cXG4gIC5uaWdodCAuZGV0YWlscy1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWUwMDtcXG4gICAgY29sb3I6ICMwNTA1MDU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggLjVweCB3aGl0ZTsgfVxcblxcbi5kYXkge1xcbiAgYW5pbWF0aW9uOiBkYXkgMnMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWw7IH1cXG5cXG5Aa2V5ZnJhbWVzIG5pZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOTAwOyB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTA1MDU7IH0gfVxcblxcbkBrZXlmcmFtZXMgZGF5IHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTA1OyB9XFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQyNzE7IH0gfVxcblxcbkBrZXlmcmFtZXMgc3VuIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdG9wOiAtNTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogLTMwcHg7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgbW9vbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogLTUwcHg7IH1cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogLTMwcHg7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDUwcHg7IH0gfVxcblxcbkBrZXlmcmFtZXMgcmV2ZXJzZWxpZ2h0c291cmNlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwOyB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IC0zMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdG9wOiAtNTBweDsgfSB9XFxuXFxuLmRldGFpbHMtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuOGVtIDJlbTtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAuNXB4IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAuOGVtOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiZXhwb3J0IGNvbnN0IHJlbmRlckNvdW50cnlOYW1lID0gKGNvdW50cnlOYW1lKSA9PiB7XG4gIGNvbnN0IGNvdW50cnlOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktbmFtZScpO1xuICBjb3VudHJ5TmFtZUNvbnRhaW5lci5pbm5lckhUTUwgPSBjb3VudHJ5TmFtZTtcbn1cblxuXG5leHBvcnQgY29uc3QgcmVuZGVyRGF0YSA9IChsb25naXR1ZGUsIGxhdGl0dWRlLCBpY29uLCBpc0RheSwgdGVtcENlbGNpdXMsIHRlbXBGYWhlcm5laXQsIHdlYXRoZXIsIHJlZ2lvbiwgZmVlbHNMaWtlQywgZmVlbHNMaWtlRikgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJyk7XG4gIGNvbnN0IGxvbmdpdHVkZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb25naXR1ZGUnKTsgXG4gIGNvbnN0IGxhdGl0dWRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdGl0dWRlJyk7IFxuICBjb25zdCByZWdpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uJyk7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL1wiICsgaWNvbjtcbiAgY2hhbmdlQmFja2dyb3VuZChpc0RheSwgbWFpbik7XG5cbiAgbG9uZ2l0dWRlQ29udGFpbmVyLmlubmVySFRNTCA9IGBMb25naXR1ZGU6ICR7bG9uZ2l0dWRlfWA7XG4gIGxhdGl0dWRlQ29udGFpbmVyLmlubmVySFRNTCA9IGBMYXRpdHVkZTogJHtsYXRpdHVkZX1gO1xuICByZWdpb25Db250YWluZXIuaW5uZXJIVE1MID0gYFJlZ2lvbjogJHtyZWdpb259YDtcbiAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBgSXQncyAke3dlYXRoZXJ9YDtcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7dGVtcENlbGNpdXN9ICYjODQ1MTsvICR7dGVtcEZhaGVybmVpdH1cdCYjODQ1NztgOyBcbiAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGBGZWVscyBsaWtlIDxicj4gJHtmZWVsc0xpa2VDfSAmIzg0NTE7LyAke2ZlZWxzTGlrZUZ9XHQmIzg0NTc7YFxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9IChpc0RheSwgbWFpbikgPT4ge1xuICBpZiAoIWlzRGF5KSB7XG4gICAgaWYgKG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXknKSl7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2RheScpO1xuICAgIH0gXG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bi1naWYnKS5zdHlsZS5hbmltYXRpb24gPSBcInJldmVyc2VsaWdodHNvdXJjZSAuNXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWxcIlxuXG4gICAgaWYgKCFtYWluLmNsYXNzTGlzdC5jb250YWlucygnbmlnaHQnKSl7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ25pZ2h0Jyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbi1naWYnKS5zdHlsZS5hbmltYXRpb24gPSBcIm1vb24gMXMgZWFzZS1pbi1vdXQgMHMgMSBmb3J3YXJkcyBub3JtYWxcIlxuICAgIH0gXG4gIH0gZWxzZSB7XG4gICAgaWYgKG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCduaWdodCcpKXtcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnbmlnaHQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uLWdpZicpLnN0eWxlLmFuaW1hdGlvbiA9IFwicmV2ZXJzZWxpZ2h0c291cmNlIC41cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbFwiXG4gICAgfSBcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uLWdpZicpLnN0eWxlLmFuaW1hdGlvbiA9IFwicmV2ZXJzZWxpZ2h0c291cmNlIC41cyBlYXNlLWluLW91dCAwcyAxIGZvcndhcmRzIG5vcm1hbFwiXG5cbiAgICBpZiAoIW1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXknKSl7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2RheScpXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VuLWdpZicpLnN0eWxlLmFuaW1hdGlvbiA9IFwic3VuIDFzIGVhc2UtaW4tb3V0IDBzIDEgZm9yd2FyZHMgbm9ybWFsXCJcbiAgICB9IFxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVTdHJpbmcgPSAoc3RyaW5nKSA9PiB7XG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnICcpO1xuICBzdHJpbmcgPSBzdHJpbmcubWFwKCh3b3JkKSA9PiBjYXBpdGFsaXplV29yZCh3b3JkKSk7XG4gIHN0cmluZyA9IHN0cmluZy5qb2luKCcgJyk7XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplV29yZCA9ICh3b3JkKSA9PiB7XG4gIHdvcmQgPSB3b3JkLnNwbGl0KCcnKTtcbiAgd29yZFswXSA9IHdvcmRbMF0udG9VcHBlckNhc2UoKTtcbiAgd29yZCA9IHdvcmQuam9pbignJylcbiAgcmV0dXJuIHdvcmQ7XG59IiwiaW1wb3J0IHsgcmVuZGVyRGF0YSwgY2FwaXRhbGl6ZVN0cmluZyxyZW5kZXJDb3VudHJ5TmFtZSB9IGZyb20gJy4vYXV4aWxpYXJpZXMuanMnO1xuXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vc3R5bGVzaGVldHMvbWFpbi5zY3NzJztcblxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYXBpLmFlcmlzYXBpLmNvbS9cIjtcbmNvbnN0IENMSUVOVF9JRCA9IFwic0U1NlBxQW40UzN3Q2Y5SFF3OG4xXCI7XG5jb25zdCBBUFBfU0VDUkVUID0gXCJlTUdqaWdsSXhWYXBQelFDazFkVkZsQ0dGdHZkSnVxNjNnWVBMaFVtXCI7XG5jb25zdCBTRUNSRVRTID0gYGNsaWVudF9pZD0ke0NMSUVOVF9JRH0mY2xpZW50X3NlY3JldD0ke0FQUF9TRUNSRVR9YDtcblxuY29uc3QgZ2V0RGF0YSA9IChlbmRwb2ludCwgYWN0aW9uLCBzZWxlY3RvciwgZXh0cmFRdWVyeSA9ICcnKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IHVybCA9IEJBU0VfVVJMICsgYCR7ZW5kcG9pbnQudG9Mb3dlckNhc2UoKX0vYCArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FjdGlvbi50b0xvd2VyQ2FzZSgpfSR7c2VsZWN0b3J9JHtleHRyYVF1ZXJ5LnRvTG93ZXJDYXNlKCl9YCArIFNFQ1JFVFM7XG5cbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LnN0YXR1c1RleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QocmVxdWVzdC5zdGF0dXNUZXh0KTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5zZW5kKCk7XG4gIH0pO1xufVxuXG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGNvdW50cnkpID0+IHtcbiAgY29uc3QgY291bnRyeURhdGEgPSBhd2FpdCBnZXREYXRhKCdjb3VudHJpZXMnLCBgJHtjb3VudHJ5fWAsICc/JylcbiAgY29uc29sZS5sb2coY291bnRyeURhdGEpXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gY291bnRyeURhdGEucmVzcG9uc2UucGxhY2UubmFtZTtcbiAgY29uc3QgY291bnRyeVN5bWJvbCA9IGNvdW50cnlEYXRhLnJlc3BvbnNlLnBsYWNlLmlzbztcbiAgcmVuZGVyQ291bnRyeU5hbWUoY2FwaXRhbGl6ZVN0cmluZyhjb3VudHJ5TmFtZSkpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldERhdGEoJ29ic2VydmF0aW9ucycsICdzZWFyY2gnLCAnPycsIGBxdWVyeT1jb3VudHJ5OiR7Y291bnRyeVN5bWJvbH0mYCk7XG4gIGV4dHJhY3RSZWxldmFudERhdGEod2VhdGhlckRhdGEpO1xufVxuXG5jb25zdCBnZXRSZWdpb24gPSAocmVnaW9uKSA9PiB7XG4gIHJlZ2lvbiA9IHJlZ2lvbi5zcGxpdCgnLycpO1xuICByZWdpb24gPSByZWdpb25bMF07XG4gIHJldHVybiByZWdpb247XG59XG5cbmNvbnN0IGV4dHJhY3RSZWxldmFudERhdGEgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGRhdGEucmVzcG9uc2VbMF07XG4gIGNvbnN0IGxvbmdpdHVkZSA9IHdlYXRoZXJEYXRhLmxvYy5sb25nO1xuICBjb25zdCBsYXRpdHVkZSA9IHdlYXRoZXJEYXRhLmxvYy5sYXQ7XG4gIGNvbnN0IHN0YXRpb25EYXRhID0gd2VhdGhlckRhdGEub2I7XG4gIGNvbnN0IGljb24gPSBzdGF0aW9uRGF0YS5pY29uO1xuICBjb25zdCBpc0RheSA9IHN0YXRpb25EYXRhLmlzRGF5O1xuICBjb25zdCB0ZW1wQ2VsY2l1cyA9IHN0YXRpb25EYXRhLnRlbXBDO1xuICBjb25zdCB0ZW1wRmFoZXJuZWl0ID0gc3RhdGlvbkRhdGEudGVtcEY7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBzdGF0aW9uRGF0YS5mZWVsc2xpa2VDO1xuICBjb25zdCBmZWVsc0xpa2VGID0gc3RhdGlvbkRhdGEuZmVlbHNsaWtlRjtcbiAgY29uc3Qgd2VhdGhlciA9IHN0YXRpb25EYXRhLndlYXRoZXI7XG4gIGNvbnN0IHJlZ2lvbiAgPSBnZXRSZWdpb24od2VhdGhlckRhdGEucHJvZmlsZS50eik7XG4gIHJlbmRlckRhdGEobG9uZ2l0dWRlLCBsYXRpdHVkZSwgaWNvbiwgaXNEYXksIHRlbXBDZWxjaXVzLCB0ZW1wRmFoZXJuZWl0LCB3ZWF0aGVyLCByZWdpb24sIGZlZWxzTGlrZUMsIGZlZWxzTGlrZUYpO1xufVxuXG5jb25zdCBmZXRjaE5ld1dlYXRoZXJEYXRhID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1mb3JtJyk7XG4gIGNvbnN0IGNvdW50cnkgPSBmb3JtWzBdLnZhbHVlO1xuICBnZXRXZWF0aGVyRGF0YShjb3VudHJ5KTtcbiAgfVxuICBcbiAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGZldGNoTmV3V2VhdGhlckRhdGEoZXZlbnQpKTtcbiAgfVxuICBcbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoJ25pZ2VyaWEnKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIFxuICBcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=