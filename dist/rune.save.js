var Rune = Rune || {}; Rune["Save"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Rune = __webpack_require__(1);
const saveAs = __webpack_require__(2);

Rune.prototype.save = saveAs;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Rune;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const saveAs = function(filename = 'image.jpg', scale = 2, quality = .92) {

    const _ext = ['svg', 'png', 'jpg', 'jpeg'];
    if (Boolean(window.chrome)) { _ext.push('webp') };

    // ------
    // Split filename
    let _file = filename.split('.');
    let _extension = _file[_file.length-1].toLowerCase();
    let _filename = filename.replace(_extension, '').replace(/.$/,'');

        if (_ext.indexOf(_extension) < 0 || !_filename) {
            throw new Error('Wrong filename. Please use "image-name.extension" format (Only svg, png and jpg image extensions allowed. Plus .webp - only on Chrome)');
        }

    // ------
    // Trigger link
    let _trigger = null;
    if ( !document.getElementById('rune-download-trigger') ) {

        _trigger = document.createElement('a');
        _trigger.id = 'rune-download-trigger';
        _trigger.target = '_blank';
        _trigger.download = filename;
        document.body.appendChild(_trigger);

    } else {

        _trigger = document.getElementById('rune-download-trigger');
    }

    // ------
    // ImageData from SVG
    let _svg = this.el.outerHTML;

    if (_extension == 'svg') {

        let _svgEncoded = _svg.replace( /"/g, '\'' );
            _svgEncoded = _svgEncoded.replace( /[\r\n%#()<>?\[\\\]^`{|}]/g, encodeURIComponent )
        var _svgData = "data:image/svg+xml;utf8," + _svgEncoded;

        _trigger.href = _svgData;
        _trigger.click();

    } else {

        const types = {
            "png" : "image/png",
            "jpg" : "image/jpeg",
            "jpeg" : "image/jpeg",
            "webp" : "image/webp"
        }

        let _svg64 = btoa(_svg);
        var _svgData = "data:image/svg+xml;base64," + _svg64;

        let _canvas = document.createElement("canvas");
            _canvas.width = this.width*scale;
            _canvas.height = this.height*scale;
        let _ctx = _canvas.getContext("2d");
        let _img = document.createElement("img");
            _img.setAttribute("src", _svgData);
            _img.onload = function() {

                _ctx.drawImage( _img, 0, 0, _canvas.width, _canvas.height );
                let _graphic = _canvas.toDataURL(types[_extension], quality);
                    _trigger.href = _graphic;
                    _trigger.click();
            };
    }
}

module.exports = saveAs


/***/ })
/******/ ]);