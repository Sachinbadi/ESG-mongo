"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/analysis/page",{

/***/ "(app-pages-browser)/./app/components/TalkToPDF.tsx":
/*!**************************************!*\
  !*** ./app/components/TalkToPDF.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TalkToPDF = (param)=>{\n    let { onClose } = param;\n    _s();\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // TODO: Implement the API call to process the question\n        setAnswer('This is a dummy answer to your question: \"'.concat(question, '\"'));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-full bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow overflow-auto p-4\",\n                children: [\n                    !answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-gray-500 mt-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Start a conversation and ask questions about the PDF.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Q: \",\n                                    question\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"A: \",\n                                    answer\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"p-4 mt-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: question,\n                            onChange: (e)=>setQuestion(e.target.value),\n                            placeholder: \"Type your message here...\",\n                            className: \"flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transform rotate-90\",\n                                children: \"➤\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TalkToPDF, \"z//ctU94R2UzDKliEZDQnqFHB00=\");\n_c = TalkToPDF;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TalkToPDF);\nvar _c;\n$RefreshReg$(_c, \"TalkToPDF\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RhbGtUb1BERi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBTXhDLE1BQU1FLFlBQXNDO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUN0RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1PLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsdURBQXVEO1FBQ3ZESCxVQUFVLDZDQUFzRCxPQUFUSCxVQUFTO0lBQ2xFO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0QsV0FBVTs7b0JBQ2IsQ0FBQ04sd0JBQ0EsOERBQUNLO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTtzQ0FBRTs7Ozs7Ozs7Ozs7b0JBR05SLHdCQUNDLDhEQUFDSzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFFRixXQUFVOztvQ0FBWTtvQ0FBSVI7Ozs7Ozs7MENBQzdCLDhEQUFDVTs7b0NBQUU7b0NBQUlSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtiLDhEQUFDUztnQkFBT0gsV0FBVTswQkFDaEIsNEVBQUNJO29CQUFLQyxVQUFVVDtvQkFBY0ksV0FBVTs7c0NBQ3RDLDhEQUFDTTs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT2hCOzRCQUNQaUIsVUFBVSxDQUFDWixJQUFNSixZQUFZSSxFQUFFYSxNQUFNLENBQUNGLEtBQUs7NEJBQzNDRyxhQUFZOzRCQUNaWCxXQUFVOzs7Ozs7c0NBRVosOERBQUNZOzRCQUNDTCxNQUFLOzRCQUNMUCxXQUFVO3NDQUVWLDRFQUFDYTtnQ0FBS2IsV0FBVTswQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQ7R0E3Q01WO0tBQUFBO0FBK0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RhbGtUb1BERi50c3g/NWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVGFsa1RvUERGUHJvcHMge1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFRhbGtUb1BERjogUmVhY3QuRkM8VGFsa1RvUERGUHJvcHM+ID0gKHsgb25DbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IHRoZSBBUEkgY2FsbCB0byBwcm9jZXNzIHRoZSBxdWVzdGlvblxyXG4gICAgc2V0QW5zd2VyKGBUaGlzIGlzIGEgZHVtbXkgYW5zd2VyIHRvIHlvdXIgcXVlc3Rpb246IFwiJHtxdWVzdGlvbn1cImApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIGJnLXdoaXRlXCI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy1hdXRvIHAtNFwiPlxyXG4gICAgICAgIHshYW5zd2VyICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBtdC0yMFwiPlxyXG4gICAgICAgICAgICA8cD5TdGFydCBhIGNvbnZlcnNhdGlvbiBhbmQgYXNrIHF1ZXN0aW9ucyBhYm91dCB0aGUgUERGLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Fuc3dlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+UToge3F1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHA+QToge2Fuc3dlcn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInAtNCBtdC1hdXRvXCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVzdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWwtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIHRleHQtc21cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSByb3VuZGVkLXItbWQgaG92ZXI6YmctZ3JlZW4tNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gcm90YXRlLTkwXCI+4p6kPC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWxrVG9QREY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFsa1RvUERGIiwib25DbG9zZSIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicCIsImZvb3RlciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TalkToPDF.tsx\n"));

/***/ })

});