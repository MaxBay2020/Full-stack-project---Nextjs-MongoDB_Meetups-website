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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Volumes/Seagate Bac/\\u5B66\\u4E60\\u6750\\u6599/\\u524D\\u7AEF/\\u6211\\u7684\\u7EC3\\u4E60/Nextjs/Youtub\\u6559\\u5B66-Nextjs/Next.js Crash Course for Beginners 2021/nextjs-course-main-project/components/meetups/MeetupDetail.js\";\n\n\n\nconst MeetupDetail = ({\n  image,\n  title,\n  address,\n  description\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: image,\n        alt: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n        children: address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsInN0eWxlcyIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0MsT0FBRDtBQUFRQyxPQUFSO0FBQWVDLFNBQWY7QUFBd0JDO0FBQXhCLENBQUQsS0FBMEM7QUFDM0Qsc0JBQ0k7QUFBQSwyQkFDSTtBQUFTLGVBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsTUFBM0I7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBRUwsS0FBVjtBQUFpQixXQUFHLEVBQUVDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLGtCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGtCQUFVQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFBLGtCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFVSCxDQVhEOztBQWFlSiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXG5cbmNvbnN0IE1lZXR1cERldGFpbCA9ICh7aW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9Lz5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPGFkZHJlc3M+e2FkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId].js":
/*!*****************************!*\
  !*** ./pages/[meetupId].js ***!
  \*****************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Volumes/Seagate Bac/\\u5B66\\u4E60\\u6750\\u6599/\\u524D\\u7AEF/\\u6211\\u7684\\u7EC3\\u4E60/Nextjs/Youtub\\u6559\\u5B66-Nextjs/Next.js Crash Course for Beginners 2021/nextjs-course-main-project/pages/[meetupId].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst MeetupDetails = props => {\n  const {\n    image,\n    title,\n    address,\n    description\n  } = props.meetupData;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: image,\n      title: title,\n      address: address,\n      description: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n}; // 因为这个页面是动态页面，且getStaticProps()函数是在build时生成静态页面的，\n// 因此next.js需要知道静态页面的这个meetupId是多少来预渲染\n// 因此getStaticPaths()函数就是用来告诉next.js，这个动态参数都有什么\n\n\nconst getStaticPaths = async () => {\n  // 从数据库中获取数据的代码\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__[\"MongoClient\"].connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups'); // 获取所有数据，但只保留_id这个字段，取值1\n\n  const meetups = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    // 必须有fallback键，值是布尔值，一般写false\n    // false表示：下面的paths写死了，如果url超出了paths范围，会显示错误页面\n    // true表示：下面的paths没写死，如果url里面没有paths里的选项，不会报错，会自动生成一个页面\n    fallback: false,\n    // 必须有paths键，值是一个数组，里面是一个个的对象，每个对象必须有params键，值是一个对象\n    // 这里不应该hard code，要从数据库获取数据\n    paths: meetups.map(meetup => ({\n      params: {\n        meetupId: meetup._id.toString()\n      }\n    })) // paths:\n    //     [{\n    //     params: {\n    //         meetupId: 'm1' // 这里写可能的动态数据\n    //     }\n    // }, {\n    //     params: {\n    //         meetupId: 'm2'\n    //     }\n    // }]\n\n  };\n};\nconst getStaticProps = async context => {\n  const {\n    meetupId\n  } = context.params; // 从数据库中获取数据的代码\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__[\"MongoClient\"].connect('mongodb+srv://wangxiaobei:13ULovEi14962464@cluster0.xpnhi.mongodb.net/meetups?retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups'); // 获取所有数据，但只保留_id这个字段，取值1\n\n  const getMeetupById = await meetupsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_4__[\"ObjectId\"])(meetupId)\n  });\n  client.close();\n  return {\n    props: {\n      meetupData: _objectSpread(_objectSpread({}, getMeetupById), {}, {\n        _id: getMeetupById._id.toString()\n      })\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdLmpzPzQ1NDciXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm1lZXR1cERhdGEiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibWVldHVwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImdldE1lZXR1cEJ5SWQiLCJmaW5kT25lIiwiT2JqZWN0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNO0FBQUNDLFNBQUQ7QUFBUUMsU0FBUjtBQUFlQyxXQUFmO0FBQXdCQztBQUF4QixNQUFxQ0osS0FBSyxDQUFDSyxVQUFqRDtBQUNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsd0VBQUQ7QUFDSSxXQUFLLEVBQUVKLEtBRFg7QUFFSSxXQUFLLEVBQUVDLEtBRlg7QUFHSSxhQUFPLEVBQUVDLE9BSGI7QUFJSSxpQkFBVyxFQUFFQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFXSCxDQWJELEMsQ0FlQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1FLGNBQWMsR0FBRSxZQUFVO0FBQ25DO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsMkdBQXBCLENBQXJCO0FBQ0EsUUFBTUMsRUFBRSxHQUFDSCxNQUFNLENBQUNHLEVBQVAsRUFBVDtBQUVBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCLENBTG1DLENBTW5DOztBQUNBLFFBQU1DLE9BQU8sR0FBQyxNQUFNRixpQkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUIsRUFBdkIsRUFBMkI7QUFBQ0MsT0FBRyxFQUFFO0FBQU4sR0FBM0IsRUFBcUNDLE9BQXJDLEVBQXBCO0FBRUFULFFBQU0sQ0FBQ1UsS0FBUDtBQUNBLFNBQU87QUFDSDtBQUNBO0FBQ0E7QUFDQUMsWUFBUSxFQUFFLEtBSlA7QUFLSDtBQUNBO0FBQ0FDLFNBQUssRUFBRU4sT0FBTyxDQUFDTyxHQUFSLENBQVlDLE1BQU0sS0FBSztBQUMxQkMsWUFBTSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ04sR0FBUCxDQUFXUyxRQUFYO0FBRE47QUFEa0IsS0FBTCxDQUFsQixDQVBKLENBWUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckJHLEdBQVA7QUF1QkgsQ0FqQ007QUFtQ0EsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLE9BQVAsSUFBaUI7QUFDM0MsUUFBTTtBQUFDSDtBQUFELE1BQVdHLE9BQU8sQ0FBQ0osTUFBekIsQ0FEMkMsQ0FHM0M7O0FBQ0EsUUFBTWYsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsMkdBQXBCLENBQXJCO0FBQ0EsUUFBTUMsRUFBRSxHQUFDSCxNQUFNLENBQUNHLEVBQVAsRUFBVDtBQUVBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCLENBUDJDLENBUTNDOztBQUNBLFFBQU1lLGFBQWEsR0FBRyxNQUFNaEIsaUJBQWlCLENBQUNpQixPQUFsQixDQUEwQjtBQUFDYixPQUFHLEVBQUVjLHdEQUFRLENBQUNOLFFBQUQ7QUFBZCxHQUExQixDQUE1QjtBQUVBaEIsUUFBTSxDQUFDVSxLQUFQO0FBRUEsU0FBTztBQUNIakIsU0FBSyxFQUFFO0FBQ0hLLGdCQUFVLGtDQUNIc0IsYUFERztBQUVOWixXQUFHLEVBQUNZLGFBQWEsQ0FBQ1osR0FBZCxDQUFrQlMsUUFBbEI7QUFGRTtBQURQO0FBREosR0FBUDtBQVFILENBckJNO0FBdUJRekIsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xuaW1wb3J0IHtNb25nb0NsaWVudCwgT2JqZWN0SWR9IGZyb20gJ21vbmdvZGInXG5cbmNvbnN0IE1lZXR1cERldGFpbHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7aW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbn09cHJvcHMubWVldHVwRGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TWVldHVwRGV0YWlsXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBhZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuXG4pO1xufTtcblxuLy8g5Zug5Li66L+Z5Liq6aG16Z2i5piv5Yqo5oCB6aG16Z2i77yM5LiUZ2V0U3RhdGljUHJvcHMoKeWHveaVsOaYr+WcqGJ1aWxk5pe255Sf5oiQ6Z2Z5oCB6aG16Z2i55qE77yMXG4vLyDlm6DmraRuZXh0Lmpz6ZyA6KaB55+l6YGT6Z2Z5oCB6aG16Z2i55qE6L+Z5LiqbWVldHVwSWTmmK/lpJrlsJHmnaXpooTmuLLmn5Ncbi8vIOWboOatpGdldFN0YXRpY1BhdGhzKCnlh73mlbDlsLHmmK/nlKjmnaXlkYror4luZXh0Lmpz77yM6L+Z5Liq5Yqo5oCB5Y+C5pWw6YO95pyJ5LuA5LmIXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM9IGFzeW5jICgpPT57XG4gICAgLy8g5LuO5pWw5o2u5bqT5Lit6I635Y+W5pWw5o2u55qE5Luj56CBXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly93YW5neGlhb2JlaToxM1VMb3ZFaTE0OTYyNDY0QGNsdXN0ZXIwLnhwbmhpLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcbiAgICAvLyDojrflj5bmiYDmnInmlbDmja7vvIzkvYblj6rkv53nlZlfaWTov5nkuKrlrZfmrrXvvIzlj5blgLwxXG4gICAgY29uc3QgbWVldHVwcz1hd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7X2lkOiAxfSkudG9BcnJheSgpXG5cbiAgICBjbGllbnQuY2xvc2UoKVxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIOW/hemhu+aciWZhbGxiYWNr6ZSu77yM5YC85piv5biD5bCU5YC877yM5LiA6Iis5YaZZmFsc2VcbiAgICAgICAgLy8gZmFsc2XooajnpLrvvJrkuIvpnaLnmoRwYXRoc+WGmeatu+S6hu+8jOWmguaenHVybOi2heWHuuS6hnBhdGhz6IyD5Zu077yM5Lya5pi+56S66ZSZ6K+v6aG16Z2iXG4gICAgICAgIC8vIHRydWXooajnpLrvvJrkuIvpnaLnmoRwYXRoc+ayoeWGmeatu++8jOWmguaenHVybOmHjOmdouayoeaciXBhdGhz6YeM55qE6YCJ6aG577yM5LiN5Lya5oql6ZSZ77yM5Lya6Ieq5Yqo55Sf5oiQ5LiA5Liq6aG16Z2iXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgLy8g5b+F6aG75pyJcGF0aHPplK7vvIzlgLzmmK/kuIDkuKrmlbDnu4TvvIzph4zpnaLmmK/kuIDkuKrkuKrnmoTlr7nosaHvvIzmr4/kuKrlr7nosaHlv4XpobvmnIlwYXJhbXPplK7vvIzlgLzmmK/kuIDkuKrlr7nosaFcbiAgICAgICAgLy8g6L+Z6YeM5LiN5bqU6K+laGFyZCBjb2Rl77yM6KaB5LuO5pWw5o2u5bqT6I635Y+W5pWw5o2uXG4gICAgICAgIHBhdGhzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC8vIHBhdGhzOlxuICAgICAgICAvLyAgICAgW3tcbiAgICAgICAgLy8gICAgIHBhcmFtczoge1xuICAgICAgICAvLyAgICAgICAgIG1lZXR1cElkOiAnbTEnIC8vIOi/memHjOWGmeWPr+iDveeahOWKqOaAgeaVsOaNrlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LCB7XG4gICAgICAgIC8vICAgICBwYXJhbXM6IHtcbiAgICAgICAgLy8gICAgICAgICBtZWV0dXBJZDogJ20yJ1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpPT57XG4gICAgY29uc3Qge21lZXR1cElkfT1jb250ZXh0LnBhcmFtc1xuXG4gICAgLy8g5LuO5pWw5o2u5bqT5Lit6I635Y+W5pWw5o2u55qE5Luj56CBXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly93YW5neGlhb2JlaToxM1VMb3ZFaTE0OTYyNDY0QGNsdXN0ZXIwLnhwbmhpLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JylcbiAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcbiAgICAvLyDojrflj5bmiYDmnInmlbDmja7vvIzkvYblj6rkv53nlZlfaWTov5nkuKrlrZfmrrXvvIzlj5blgLwxXG4gICAgY29uc3QgZ2V0TWVldHVwQnlJZCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe19pZDogT2JqZWN0SWQobWVldHVwSWQpfSlcblxuICAgIGNsaWVudC5jbG9zZSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwRGF0YToge1xuICAgICAgICAgICAgICAgIC4uLmdldE1lZXR1cEJ5SWQsXG4gICAgICAgICAgICAgICAgX2lkOmdldE1lZXR1cEJ5SWQuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId].js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

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