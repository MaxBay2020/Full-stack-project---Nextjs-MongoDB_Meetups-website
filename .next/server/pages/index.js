module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupItem.module.css */ \"./components/meetups/MeetupItem.module.css\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Volumes/Seagate Bac/\\u5B66\\u4E60\\u6750\\u6599/\\u524D\\u7AEF/\\u6211\\u7684\\u7EC3\\u4E60/Nextjs/Youtub\\u6559\\u5B66-Nextjs/Next.js Crash Course for Beginners 2021/nextjs-course-main-project/components/meetups/MeetupItem.js\";\n\n\n\n\nfunction MeetupItem(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const showDetail = id => {\n    router.push(`/${id}`);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: props.image,\n          alt: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n          children: props.address\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => showDetail(props.id),\n          children: \"Show Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcz85MGI5Il0sIm5hbWVzIjpbIk1lZXR1cEl0ZW0iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3dEZXRhaWwiLCJpZCIsInB1c2giLCJjbGFzc2VzIiwiaXRlbSIsImltYWdlIiwidGl0bGUiLCJjb250ZW50IiwiYWRkcmVzcyIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsUUFBTUMsTUFBTSxHQUFDQyw2REFBUyxFQUF0Qjs7QUFFQSxRQUFNQyxVQUFVLEdBQUlDLEVBQUQsSUFBTztBQUN0QkgsVUFBTSxDQUFDSSxJQUFQLENBQWEsSUFBR0QsRUFBRyxFQUFuQjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSSxhQUFTLEVBQUVFLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELDZEQUFPLENBQUNFLEtBQXhCO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVSLEtBQUssQ0FBQ1EsS0FBaEI7QUFBdUIsYUFBRyxFQUFFUixLQUFLLENBQUNTO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVILDZEQUFPLENBQUNJLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS1YsS0FBSyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFVVCxLQUFLLENBQUNXO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUFLLGlCQUFTLEVBQUVMLDZEQUFPLENBQUNNLE9BQXhCO0FBQUEsK0JBQ0U7QUFBUSxpQkFBTyxFQUFFLE1BQUlULFVBQVUsQ0FBQ0gsS0FBSyxDQUFDSSxFQUFQLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7QUFFY0wseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBJdGVtLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIE1lZXR1cEl0ZW0ocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXG5cbiAgY29uc3Qgc2hvd0RldGFpbCA9IChpZCk9PiB7XG4gICAgICByb3V0ZXIucHVzaChgLyR7aWR9YClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNob3dEZXRhaWwocHJvcHMuaWQpfT5TaG93IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.js\n");

/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"MeetupItem_item__3siMU\",\n\t\"image\": \"MeetupItem_image__13rAP\",\n\t\"content\": \"MeetupItem_content__3uEkT\",\n\t\"actions\": \"MeetupItem_actions__LvT9B\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzPzFiMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIk1lZXR1cEl0ZW1faXRlbV9fM3NpTVVcIixcblx0XCJpbWFnZVwiOiBcIk1lZXR1cEl0ZW1faW1hZ2VfXzEzckFQXCIsXG5cdFwiY29udGVudFwiOiBcIk1lZXR1cEl0ZW1fY29udGVudF9fM3VFa1RcIixcblx0XCJhY3Rpb25zXCI6IFwiTWVldHVwSXRlbV9hY3Rpb25zX19MdlQ5QlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupItem */ \"./components/meetups/MeetupItem.js\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ \"./components/meetups/MeetupList.module.css\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Volumes/Seagate Bac/\\u5B66\\u4E60\\u6750\\u6599/\\u524D\\u7AEF/\\u6211\\u7684\\u7EC3\\u4E60/Nextjs/Youtub\\u6559\\u5B66-Nextjs/Next.js Crash Course for Beginners 2021/nextjs-course-main-project/components/meetups/MeetupList.js\";\n\n\n\nfunction MeetupList(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n    children: props.meetups.map((meetup, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MeetupItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      id: meetup.id,\n      image: meetup.image,\n      title: meetup.title,\n      address: meetup.address\n    }, meetup.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcz82OTFiIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJwcm9wcyIsImNsYXNzZXMiLCJsaXN0IiwibWVldHVwcyIsIm1hcCIsIm1lZXR1cCIsImluZGV4IiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pCLHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2REFBTyxDQUFDQyxJQUF2QjtBQUFBLGNBQ0dGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxHQUFkLENBQWtCLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxrQkFDakIscUVBQUMsbURBQUQ7QUFFRSxRQUFFLEVBQUVELE1BQU0sQ0FBQ0UsRUFGYjtBQUdFLFdBQUssRUFBRUYsTUFBTSxDQUFDRyxLQUhoQjtBQUlFLFdBQUssRUFBRUgsTUFBTSxDQUFDSSxLQUpoQjtBQUtFLGFBQU8sRUFBRUosTUFBTSxDQUFDSztBQUxsQixPQUNPTCxNQUFNLENBQUNFLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0FBRWNSLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwLCBpbmRleCkgPT4gKFxuICAgICAgICA8TWVldHVwSXRlbVxuICAgICAgICAgIGtleT17bWVldHVwLmlkfVxuICAgICAgICAgIGlkPXttZWV0dXAuaWR9XG4gICAgICAgICAgaW1hZ2U9e21lZXR1cC5pbWFnZX1cbiAgICAgICAgICB0aXRsZT17bWVldHVwLnRpdGxlfVxuICAgICAgICAgIGFkZHJlc3M9e21lZXR1cC5hZGRyZXNzfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.js\n");

/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"MeetupList_list__1iafn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzPzlhMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlzdFwiOiBcIk1lZXR1cExpc3RfbGlzdF9fMWlhZm5cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.module.css\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Volumes/Seagate Bac/\\u5B66\\u4E60\\u6750\\u6599/\\u524D\\u7AEF/\\u6211\\u7684\\u7EC3\\u4E60/Nextjs/Youtub\\u6559\\u5B66-Nextjs/Next.js Crash Course for Beginners 2021/nextjs-course-main-project/components/ui/Card.js\";\n\n\nfunction Card(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanM/OTVlYSJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2FyZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLHNCQUFPO0FBQUssYUFBUyxFQUFFQyx1REFBTyxDQUFDQyxJQUF4QjtBQUFBLGNBQStCRixLQUFLLENBQUNHO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjSixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__3KSLO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz8yNGQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Volumes/Seagate Bac/\\u5B66\\u4E60\\u6750\\u6599/\\u524D\\u7AEF/\\u6211\\u7684\\u7EC3\\u4E60/Nextjs/Youtub\\u6559\\u5B66-Nextjs/Next.js Crash Course for Beginners 2021/nextjs-course-main-project/pages/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // 我们一般在后端js文件中对数据库进行操作，这个文件是前端js文件\n// 我们之所以能在这个前端js文件中直接操作数据库，是因为next.js会帮助\n// 我们分离这些代码到后端js文件中\n// 因此我们可以在前端js文件中写操作数据库的代码了\n// 这里使用的是原生mongodb，我们也可以使用mongoose来操作数据库\n\n // 使用next/head包中的Head，来优化搜索引擎检索\n\n\nconst DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: 'A First Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',\n  address: 'Toronto',\n  description: 'This is a first meetup'\n}, {\n  id: 'm2',\n  title: 'A First Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',\n  address: 'Toronto',\n  description: 'This is a first meetup'\n}, {\n  id: 'm3',\n  title: 'A First Meetup',\n  image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ontario_Legislative_Building%2C_Toronto%2C_South_view_20170417_1.jpg',\n  address: 'Toronto',\n  description: 'This is a first meetup'\n}]; // 这里的props是getStaticProps()方法中返回的props\n\nconst HomePage = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Next Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Browse a huge list of highly active Next meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n}; // 从数据库取数据\n// 方法一：使用getStaticProps()函数\n// next.js会先找这个名字的函数，这个函数会在这个组件挂载前执行\n// 这个函数一般是异步的，因为我们要在这里方法里准备此组件需要的数据\n// 只有数据回来了，才挂载此组件\n// 这个函数中的代码会执行在后端，因此从数据库获取数据的代码写在这里\n\n\nconst getStaticProps = async () => {\n  // 从数据库中获取数据的代码\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__[\"MongoClient\"].connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups'); // 查询所有数据\n\n  const meetups = await meetupsCollection.find().toArray();\n  client.close(); // 最后必须返回一个对象\n\n  return {\n    // 里面必须有个叫props的对象，这个就是页面需要的数据了\n    props: {\n      meetups: meetups.map(meetup => _objectSpread(_objectSpread({}, meetup), {}, {\n        id: meetup._id.toString(),\n        _id: meetup._id.toString()\n      }))\n    },\n    // revalidate使用来告诉next.js，多久要重新从数据库获取数据的\n    revalidate: 10 // 单位：秒，10秒表示在10秒内请求数据还是旧的数据，超过10秒请求数据next.js就会从数据库读取新数据了\n\n  };\n}; // 从数据库取数据\n// 方法二：使用getStaticProps()函数，这个函数会在每次向数据库请求的时候都会请求最新数据\n// next.js会先找这个名字的函数，这个函数会在这个组件挂载前执行\n// 这个函数一般是异步的，因为我们要在这里方法里准备此组件需要的数据\n// 只有数据回来了，才挂载此组件\n// 这个函数中的代码会执行在后端，因此从数据库获取数据的代码写在这里\n// 这个方法接收context作为参数，context身上可以获取req和res对象，我们就可以获取session了\n// export const  getServerSideProps = async (context)=>{\n//     const req=context.req\n//     const res=context.res\n//     // 从数据库中获取数据的代码\n//\n//     // 最后必须返回一个对象\n//     return {\n//         // 里面必须有个叫props的对象，这个就是页面需要的数据了\n//         props: {\n//             meetups: DUMMY_MEETUPS\n//         }\n//\n//         // 与getStaticProps()方法不同的是：getServerSideProps()方法返回的对象中没有revalidate\n//         // 因为getServerSideProps()方法的实行特点是：每发送一次请求，就从数据库中获取最新数据\n//\n//     }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImNsb3NlIiwibWFwIiwibWVldHVwIiwiX2lkIiwidG9TdHJpbmciLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0NBRUE7O0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUMsQ0FDaEI7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSwwSEFIWDtBQUlJQyxTQUFPLEVBQUUsU0FKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FEZ0IsRUFRaEI7QUFDSUosSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSwwSEFIWDtBQUlJQyxTQUFPLEVBQUUsU0FKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FSZ0IsRUFlaEI7QUFDSUosSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSwwSEFIWDtBQUlJQyxTQUFPLEVBQUUsU0FKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FmZ0IsQ0FBcEIsQyxDQXdCQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUV4QixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxrQkFESjtBQVVILENBWkQsQyxDQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTUMsY0FBYyxHQUFHLFlBQVU7QUFDcEM7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQiwyR0FBcEIsQ0FBckI7QUFDQSxRQUFNQyxFQUFFLEdBQUNILE1BQU0sQ0FBQ0csRUFBUCxFQUFUO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUIsQ0FMb0MsQ0FNcEM7O0FBQ0EsUUFBTVAsT0FBTyxHQUFHLE1BQU1NLGlCQUFpQixDQUFDRSxJQUFsQixHQUF5QkMsT0FBekIsRUFBdEI7QUFFQVAsUUFBTSxDQUFDUSxLQUFQLEdBVG9DLENBV3BDOztBQUNBLFNBQU87QUFDSDtBQUNBWCxTQUFLLEVBQUU7QUFDSEMsYUFBTyxFQUFFQSxPQUFPLENBQUNXLEdBQVIsQ0FBWUMsTUFBTSxvQ0FDcEJBLE1BRG9CO0FBRXZCbkIsVUFBRSxFQUFFbUIsTUFBTSxDQUFDQyxHQUFQLENBQVdDLFFBQVgsRUFGbUI7QUFHdkJELFdBQUcsRUFBRUQsTUFBTSxDQUFDQyxHQUFQLENBQVdDLFFBQVg7QUFIa0IsUUFBbEI7QUFETixLQUZKO0FBU0g7QUFDQUMsY0FBVSxFQUFFLEVBVlQsQ0FVWTs7QUFWWixHQUFQO0FBWUgsQ0F4Qk0sQyxDQTBCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVqQix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCJcbi8vIOaIkeS7rOS4gOiIrOWcqOWQjuerr2pz5paH5Lu25Lit5a+55pWw5o2u5bqT6L+b6KGM5pON5L2c77yM6L+Z5Liq5paH5Lu25piv5YmN56uvanPmlofku7Zcbi8vIOaIkeS7rOS5i+aJgOS7peiDveWcqOi/meS4quWJjeerr2pz5paH5Lu25Lit55u05o6l5pON5L2c5pWw5o2u5bqT77yM5piv5Zug5Li6bmV4dC5qc+S8muW4ruWKqVxuLy8g5oiR5Lus5YiG56a76L+Z5Lqb5Luj56CB5Yiw5ZCO56uvanPmlofku7bkuK1cbi8vIOWboOatpOaIkeS7rOWPr+S7peWcqOWJjeerr2pz5paH5Lu25Lit5YaZ5pON5L2c5pWw5o2u5bqT55qE5Luj56CB5LqGXG4vLyDov5nph4zkvb/nlKjnmoTmmK/ljp/nlJ9tb25nb2Ri77yM5oiR5Lus5Lmf5Y+v5Lul5L2/55SobW9uZ29vc2XmnaXmk43kvZzmlbDmja7lupNcbmltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInXG4vLyDkvb/nlKhuZXh0L2hlYWTljIXkuK3nmoRIZWFk77yM5p2l5LyY5YyW5pCc57Si5byV5pOO5qOA57SiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IERVTU1ZX01FRVRVUFM9W1xuICAgIHtcbiAgICAgICAgaWQ6ICdtMScsXG4gICAgICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xNS9PbnRhcmlvX0xlZ2lzbGF0aXZlX0J1aWxkaW5nJTJDX1Rvcm9udG8lMkNfU291dGhfdmlld18yMDE3MDQxN18xLmpwZycsXG4gICAgICAgIGFkZHJlc3M6ICdUb3JvbnRvJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ20yJyxcbiAgICAgICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE1L09udGFyaW9fTGVnaXNsYXRpdmVfQnVpbGRpbmclMkNfVG9yb250byUyQ19Tb3V0aF92aWV3XzIwMTcwNDE3XzEuanBnJyxcbiAgICAgICAgYWRkcmVzczogJ1Rvcm9udG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbTMnLFxuICAgICAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzEvMTUvT250YXJpb19MZWdpc2xhdGl2ZV9CdWlsZGluZyUyQ19Ub3JvbnRvJTJDX1NvdXRoX3ZpZXdfMjAxNzA0MTdfMS5qcGcnLFxuICAgICAgICBhZGRyZXNzOiAnVG9yb250bycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCdcbiAgICB9XG5dXG5cbi8vIOi/memHjOeahHByb3Bz5pivZ2V0U3RhdGljUHJvcHMoKeaWueazleS4rei/lOWbnueahHByb3BzXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5OZXh0IE1lZXR1cHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdCcm93c2UgYSBodWdlIGxpc3Qgb2YgaGlnaGx5IGFjdGl2ZSBOZXh0IG1lZXR1cHMnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxuXG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG4vLyDku47mlbDmja7lupPlj5bmlbDmja5cbi8vIOaWueazleS4gO+8muS9v+eUqGdldFN0YXRpY1Byb3BzKCnlh73mlbBcbi8vIG5leHQuanPkvJrlhYjmib7ov5nkuKrlkI3lrZfnmoTlh73mlbDvvIzov5nkuKrlh73mlbDkvJrlnKjov5nkuKrnu4Tku7bmjILovb3liY3miafooYxcbi8vIOi/meS4quWHveaVsOS4gOiIrOaYr+W8guatpeeahO+8jOWboOS4uuaIkeS7rOimgeWcqOi/memHjOaWueazlemHjOWHhuWkh+atpOe7hOS7tumcgOimgeeahOaVsOaNrlxuLy8g5Y+q5pyJ5pWw5o2u5Zue5p2l5LqG77yM5omN5oyC6L295q2k57uE5Lu2XG4vLyDov5nkuKrlh73mlbDkuK3nmoTku6PnoIHkvJrmiafooYzlnKjlkI7nq6/vvIzlm6DmraTku47mlbDmja7lupPojrflj5bmlbDmja7nmoTku6PnoIHlhpnlnKjov5nph4xcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpPT57XG4gICAgLy8g5LuO5pWw5o2u5bqT5Lit6I635Y+W5pWw5o2u55qE5Luj56CBXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly93YW5neGlhb2JlaToxM1VMb3ZFaTE0OTYyNDY0QGNsdXN0ZXIwLnhwbmhpLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcbiAgICAvLyDmn6Xor6LmiYDmnInmlbDmja5cbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxuXG4gICAgY2xpZW50LmNsb3NlKClcblxuICAgIC8vIOacgOWQjuW/hemhu+i/lOWbnuS4gOS4quWvueixoVxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIOmHjOmdouW/hemhu+acieS4quWPq3Byb3Bz55qE5a+56LGh77yM6L+Z5Liq5bCx5piv6aG16Z2i6ZyA6KaB55qE5pWw5o2u5LqGXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5tZWV0dXAsXG4gICAgICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBfaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJldmFsaWRhdGXkvb/nlKjmnaXlkYror4luZXh0Lmpz77yM5aSa5LmF6KaB6YeN5paw5LuO5pWw5o2u5bqT6I635Y+W5pWw5o2u55qEXG4gICAgICAgIHJldmFsaWRhdGU6IDEwIC8vIOWNleS9je+8muenku+8jDEw56eS6KGo56S65ZyoMTDnp5LlhoXor7fmsYLmlbDmja7ov5jmmK/ml6fnmoTmlbDmja7vvIzotoXov4cxMOenkuivt+axguaVsOaNrm5leHQuanPlsLHkvJrku47mlbDmja7lupPor7vlj5bmlrDmlbDmja7kuoZcbiAgICB9XG59XG5cbi8vIOS7juaVsOaNruW6k+WPluaVsOaNrlxuLy8g5pa55rOV5LqM77ya5L2/55SoZ2V0U3RhdGljUHJvcHMoKeWHveaVsO+8jOi/meS4quWHveaVsOS8muWcqOavj+asoeWQkeaVsOaNruW6k+ivt+axgueahOaXtuWAmemDveS8muivt+axguacgOaWsOaVsOaNrlxuLy8gbmV4dC5qc+S8muWFiOaJvui/meS4quWQjeWtl+eahOWHveaVsO+8jOi/meS4quWHveaVsOS8muWcqOi/meS4que7hOS7tuaMgui9veWJjeaJp+ihjFxuLy8g6L+Z5Liq5Ye95pWw5LiA6Iis5piv5byC5q2l55qE77yM5Zug5Li65oiR5Lus6KaB5Zyo6L+Z6YeM5pa55rOV6YeM5YeG5aSH5q2k57uE5Lu26ZyA6KaB55qE5pWw5o2uXG4vLyDlj6rmnInmlbDmja7lm57mnaXkuobvvIzmiY3mjILovb3mraTnu4Tku7Zcbi8vIOi/meS4quWHveaVsOS4reeahOS7o+eggeS8muaJp+ihjOWcqOWQjuerr++8jOWboOatpOS7juaVsOaNruW6k+iOt+WPluaVsOaNrueahOS7o+eggeWGmeWcqOi/memHjFxuLy8g6L+Z5Liq5pa55rOV5o6l5pS2Y29udGV4dOS9nOS4uuWPguaVsO+8jGNvbnRleHTouqvkuIrlj6/ku6Xojrflj5ZyZXHlkoxyZXPlr7nosaHvvIzmiJHku6zlsLHlj6/ku6Xojrflj5ZzZXNzaW9u5LqGXG4vLyBleHBvcnQgY29uc3QgIGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KT0+e1xuLy8gICAgIGNvbnN0IHJlcT1jb250ZXh0LnJlcVxuLy8gICAgIGNvbnN0IHJlcz1jb250ZXh0LnJlc1xuLy8gICAgIC8vIOS7juaVsOaNruW6k+S4reiOt+WPluaVsOaNrueahOS7o+eggVxuLy9cbi8vICAgICAvLyDmnIDlkI7lv4Xpobvov5Tlm57kuIDkuKrlr7nosaFcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICAvLyDph4zpnaLlv4XpobvmnInkuKrlj6twcm9wc+eahOWvueixoe+8jOi/meS4quWwseaYr+mhtemdoumcgOimgeeahOaVsOaNruS6hlxuLy8gICAgICAgICBwcm9wczoge1xuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xuLy8gICAgICAgICB9XG4vL1xuLy8gICAgICAgICAvLyDkuI5nZXRTdGF0aWNQcm9wcygp5pa55rOV5LiN5ZCM55qE5piv77yaZ2V0U2VydmVyU2lkZVByb3BzKCnmlrnms5Xov5Tlm57nmoTlr7nosaHkuK3msqHmnIlyZXZhbGlkYXRlXG4vLyAgICAgICAgIC8vIOWboOS4umdldFNlcnZlclNpZGVQcm9wcygp5pa55rOV55qE5a6e6KGM54m554K55piv77ya5q+P5Y+R6YCB5LiA5qyh6K+35rGC77yM5bCx5LuO5pWw5o2u5bqT5Lit6I635Y+W5pyA5paw5pWw5o2uXG4vL1xuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });