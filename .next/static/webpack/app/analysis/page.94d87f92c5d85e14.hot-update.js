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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TalkToPDF = (param)=>{\n    let { onClose } = param;\n    _s();\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // TODO: Implement the API call to process the question\n        // For now, we'll just set a dummy answer\n        setAnswer('This is a dummy answer to your question: \"'.concat(question, '\"'));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow overflow-auto p-4\",\n                children: [\n                    !answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-gray-500 mt-30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Start a conversation and ask questions about the PDF.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Q: \",\n                                    question\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"A: \",\n                                    answer\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"p-4 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: question,\n                            onChange: (e)=>setQuestion(e.target.value),\n                            placeholder: \"Type your message here...\",\n                            className: \"flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transform rotate-90\",\n                                children: \"➤\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\TalkToPDF.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TalkToPDF, \"z//ctU94R2UzDKliEZDQnqFHB00=\");\n_c = TalkToPDF;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TalkToPDF);\nvar _c;\n$RefreshReg$(_c, \"TalkToPDF\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RhbGtUb1BERi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBTXhDLE1BQU1FLFlBQXNDO1FBQUMsRUFBRUMsT0FBTyxFQUFFOztJQUN0RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1PLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsdURBQXVEO1FBQ3ZELHlDQUF5QztRQUN6Q0gsVUFBVSw2Q0FBc0QsT0FBVEgsVUFBUztJQUNsRTtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFLYiw4REFBQ0M7Z0JBQUtELFdBQVU7O29CQUNiLENBQUNOLHdCQUNBLDhEQUFDSzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7c0NBQUU7Ozs7Ozs7Ozs7O29CQUlOUix3QkFDQyw4REFBQ0s7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBRUYsV0FBVTs7b0NBQVk7b0NBQUlSOzs7Ozs7OzBDQUM3Qiw4REFBQ1U7O29DQUFFO29DQUFJUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLYiw4REFBQ1M7Z0JBQU9ILFdBQVU7MEJBQ2hCLDRFQUFDSTtvQkFBS0MsVUFBVVQ7b0JBQWNJLFdBQVU7O3NDQUN0Qyw4REFBQ007NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU9oQjs0QkFDUGlCLFVBQVUsQ0FBQ1osSUFBTUosWUFBWUksRUFBRWEsTUFBTSxDQUFDRixLQUFLOzRCQUMzQ0csYUFBWTs0QkFDWlgsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDWTs0QkFDQ0wsTUFBSzs0QkFDTFAsV0FBVTtzQ0FFViw0RUFBQ2E7Z0NBQUtiLFdBQVU7MENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxEO0dBbkRNVjtLQUFBQTtBQXFETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UYWxrVG9QREYudHN4PzViMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFRhbGtUb1BERlByb3BzIHtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBUYWxrVG9QREY6IFJlYWN0LkZDPFRhbGtUb1BERlByb3BzPiA9ICh7IG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIFRPRE86IEltcGxlbWVudCB0aGUgQVBJIGNhbGwgdG8gcHJvY2VzcyB0aGUgcXVlc3Rpb25cclxuICAgIC8vIEZvciBub3csIHdlJ2xsIGp1c3Qgc2V0IGEgZHVtbXkgYW5zd2VyXHJcbiAgICBzZXRBbnN3ZXIoYFRoaXMgaXMgYSBkdW1teSBhbnN3ZXIgdG8geW91ciBxdWVzdGlvbjogXCIke3F1ZXN0aW9ufVwiYCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBiZy13aGl0ZVwiPlxyXG4gICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLWJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+8J+RiyBUYWxrIHRvIFBERjwvaDE+XHJcbiAgICAgIDwvaGVhZGVyPiAqL31cclxuICAgICAgXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy1hdXRvIHAtNFwiPlxyXG4gICAgICAgIHshYW5zd2VyICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBtdC0zMFwiPlxyXG4gICAgICAgICAgICA8cD5TdGFydCBhIGNvbnZlcnNhdGlvbiBhbmQgYXNrIHF1ZXN0aW9ucyBhYm91dCB0aGUgUERGLjwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHthbnN3ZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlE6IHtxdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwPkE6IHthbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICBcclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWwtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcm91bmRlZC1yLW1kIGhvdmVyOmJnLWdyZWVuLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNmb3JtIHJvdGF0ZS05MFwiPuKepDwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFsa1RvUERGO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhbGtUb1BERiIsIm9uQ2xvc2UiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInAiLCJmb290ZXIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TalkToPDF.tsx\n"));

/***/ })

});