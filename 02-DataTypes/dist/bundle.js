/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n/*\n    PRIMITIVE TYPES:\n    - number\n    - string\n    - boolean\n    - bigint\n    - symbol\n    - null & undefined\n\n    OBJECT TYPES:\n    - objects\n    - array\n    - tuples [string, number]\n    - enums\n\n    SPECYAL TYPES:\n    - any\n    - unknown\n\n    FUNCTION TYPES:\n    - void (function doesn't return)\n    - never (code that will not be executed)\n\n    ADVANCED TYPES:\n    - union (string | number)\n    - intersection\n    - literal\n    - interface\n*/\nfunction sayHello(message) {\n    console.log(message);\n}\n// sayHello(\"hello\");\nfunction add(a, b) {\n    return a + b;\n}\nconst serversLogs = [\n    [25, 440, \"WARRNING\"]\n];\nfunction addOrder(name, place, zipCode, product, price, currency) {\n    const splitedName = name.split(\" \");\n    const splitedLocation = place.split(\",\");\n    return {\n        firstName: splitedName[0],\n        lastName: splitedName[1],\n        city: splitedLocation[0],\n        country: splitedLocation[1],\n        zipCode: zipCode,\n        product: product,\n        price: price,\n        currency: currency\n    };\n}\nconsole.log(addOrder(\"Milan Vasovic\", \"Belgrade, Serbia\", 11000, \"toy\", 120, \"EUR\"));\n\n\n//# sourceURL=webpack://02-datatypes/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;