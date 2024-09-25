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

/***/ "(app-pages-browser)/./app/components/PDFAnalysisPage.tsx":
/*!********************************************!*\
  !*** ./app/components/PDFAnalysisPage.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AnalysisForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnalysisForm */ \"(app-pages-browser)/./app/components/AnalysisForm.tsx\");\n/* harmony import */ var _TalkToPDF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TalkToPDF */ \"(app-pages-browser)/./app/components/TalkToPDF.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PDFAnalysisPage = (param)=>{\n    let { pdfName } = param;\n    _s();\n    const [showAnalysisForm, setShowAnalysisForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [pdfData, setPdfData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPdfData = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:8000/get-pdf-data/?pdfName=\".concat(encodeURIComponent(pdfName)));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch PDF data\");\n                }\n                const data = await response.json();\n                setPdfData(data);\n            } catch (error) {\n                console.error(\"Error fetching PDF data:\", error);\n            }\n        };\n        fetchPdfData();\n    }, [\n        pdfName\n    ]);\n    const handleGenerateSummary = ()=>{\n        setShowAnalysisForm(true);\n    };\n    const handleAnalysisFormSubmit = (formData)=>{\n        console.log(formData);\n        // TODO: Implement actual summary generation based on form data\n        setSummary(\"This is a placeholder summary based on the submitted form data.\");\n        setShowAnalysisForm(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"w-full md:w-1/2 p-6 overflow-auto\",\n                initial: {\n                    opacity: 0,\n                    x: -50\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                transition: {\n                    duration: 0.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white shadow-lg rounded-lg p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold mb-6 text-gray-800\",\n                            children: [\n                                \"PDF Analysis: \",\n                                pdfName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleGenerateSummary,\n                            className: \"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6\",\n                            children: \"Generate Summary\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        summary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            className: \"mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200\",\n                            initial: {\n                                opacity: 0,\n                                y: 20\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            transition: {\n                                duration: 0.5\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-semibold mb-3 text-gray-700\",\n                                    children: \"Summary\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 leading-relaxed\",\n                                    children: summary\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"w-full md:w-1/2 p-6 bg-white\",\n                initial: {\n                    opacity: 0,\n                    x: 50\n                },\n                animate: {\n                    opacity: 1,\n                    x: 0\n                },\n                transition: {\n                    duration: 0.5\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold mb-6 text-gray-800\",\n                        children: \"Talk to PDF\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TalkToPDF__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            showAnalysisForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnalysisForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                questions: [\n                    {\n                        id: \"question1\",\n                        text: \"What is the company's carbon footprint?\"\n                    },\n                    {\n                        id: \"question2\",\n                        text: \"How does the company handle waste management?\"\n                    },\n                    {\n                        id: \"question3\",\n                        text: \"What are the company's diversity and inclusion policies?\"\n                    }\n                ],\n                onSubmit: handleAnalysisFormSubmit,\n                onClose: ()=>setShowAnalysisForm(false)\n            }, void 0, false, {\n                fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\ESG-mongo\\\\app\\\\components\\\\PDFAnalysisPage.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PDFAnalysisPage, \"70mbL7N25Mg/RMb1CfnlOzFmotU=\");\n_c = PDFAnalysisPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PDFAnalysisPage);\nvar _c;\n$RefreshReg$(_c, \"PDFAnalysisPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BERkFuYWx5c2lzUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ1Q7QUFDTjtBQUNHO0FBTXZDLE1BQU1NLGtCQUFrRDtRQUFDLEVBQUVDLE9BQU8sRUFBRTs7SUFDbEUsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQWdCO0lBQ3RELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBTTtJQUU1Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxlQUFlO1lBQ25CLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLCtDQUEyRSxPQUE1QkMsbUJBQW1CVjtnQkFDL0YsSUFBSSxDQUFDUSxTQUFTRyxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO2dCQUNoQ1IsV0FBV087WUFDYixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzVDO1FBQ0Y7UUFFQVI7SUFDRixHQUFHO1FBQUNQO0tBQVE7SUFFWixNQUFNaUIsd0JBQXdCO1FBQzVCZixvQkFBb0I7SUFDdEI7SUFFQSxNQUFNZ0IsMkJBQTJCLENBQUNDO1FBQ2hDSCxRQUFRSSxHQUFHLENBQUNEO1FBQ1osK0RBQStEO1FBQy9EZixXQUFXO1FBQ1hGLG9CQUFvQjtJQUN0QjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN4QixpREFBTUEsQ0FBQ3VCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLFNBQVM7b0JBQUdDLEdBQUcsQ0FBQztnQkFBRztnQkFDOUJDLFNBQVM7b0JBQUVGLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUU7Z0JBQzVCRSxZQUFZO29CQUFFQyxVQUFVO2dCQUFJOzBCQUU1Qiw0RUFBQ1A7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFBR1AsV0FBVTs7Z0NBQXdDO2dDQUFldEI7Ozs7Ozs7c0NBQ3JFLDhEQUFDOEI7NEJBQ0NDLFNBQVNkOzRCQUNUSyxXQUFVO3NDQUNYOzs7Ozs7d0JBR0FuQix5QkFDQyw4REFBQ0wsaURBQU1BLENBQUN1QixHQUFHOzRCQUNUQyxXQUFVOzRCQUNWQyxTQUFTO2dDQUFFQyxTQUFTO2dDQUFHUSxHQUFHOzRCQUFHOzRCQUM3Qk4sU0FBUztnQ0FBRUYsU0FBUztnQ0FBR1EsR0FBRzs0QkFBRTs0QkFDNUJMLFlBQVk7Z0NBQUVDLFVBQVU7NEJBQUk7OzhDQUU1Qiw4REFBQ0s7b0NBQUdYLFdBQVU7OENBQTJDOzs7Ozs7OENBQ3pELDhEQUFDWTtvQ0FBRVosV0FBVTs4Q0FBaUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRELDhEQUFDTCxpREFBTUEsQ0FBQ3VCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUc7Z0JBQzdCQyxTQUFTO29CQUFFRixTQUFTO29CQUFHQyxHQUFHO2dCQUFFO2dCQUM1QkUsWUFBWTtvQkFBRUMsVUFBVTtnQkFBSTs7a0NBRTVCLDhEQUFDQzt3QkFBR1AsV0FBVTtrQ0FBd0M7Ozs7OztrQ0FDdEQsOERBQUN6QixrREFBU0E7Ozs7Ozs7Ozs7O1lBR1hJLGtDQUNDLDhEQUFDTCxxREFBWUE7Z0JBQ1h1QyxXQUFXO29CQUNUO3dCQUFFQyxJQUFJO3dCQUFhQyxNQUFNO29CQUEyQztvQkFDcEU7d0JBQUVELElBQUk7d0JBQWFDLE1BQU07b0JBQWdEO29CQUN6RTt3QkFBRUQsSUFBSTt3QkFBYUMsTUFBTTtvQkFBNEQ7aUJBQ3RGO2dCQUNEQyxVQUFVcEI7Z0JBQ1ZxQixTQUFTLElBQU1yQyxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUs3QztHQXRGTUg7S0FBQUE7QUF3Rk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUERGQW5hbHlzaXNQYWdlLnRzeD84N2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5hbHlzaXNGb3JtIGZyb20gJy4vQW5hbHlzaXNGb3JtJztcclxuaW1wb3J0IFRhbGtUb1BERiBmcm9tICcuL1RhbGtUb1BERic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuaW50ZXJmYWNlIFBERkFuYWx5c2lzUGFnZVByb3BzIHtcclxuICBwZGZOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBERkFuYWx5c2lzUGFnZTogUmVhY3QuRkM8UERGQW5hbHlzaXNQYWdlUHJvcHM+ID0gKHsgcGRmTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dBbmFseXNpc0Zvcm0sIHNldFNob3dBbmFseXNpc0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtwZGZEYXRhLCBzZXRQZGZEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBkZkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dldC1wZGYtZGF0YS8/cGRmTmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChwZGZOYW1lKX1gKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBQREYgZGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFBkZkRhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgUERGIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUGRmRGF0YSgpO1xyXG4gIH0sIFtwZGZOYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlU3VtbWFyeSA9ICgpID0+IHtcclxuICAgIHNldFNob3dBbmFseXNpc0Zvcm0odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5hbHlzaXNGb3JtU3VibWl0ID0gKGZvcm1EYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYWN0dWFsIHN1bW1hcnkgZ2VuZXJhdGlvbiBiYXNlZCBvbiBmb3JtIGRhdGFcclxuICAgIHNldFN1bW1hcnkoXCJUaGlzIGlzIGEgcGxhY2Vob2xkZXIgc3VtbWFyeSBiYXNlZCBvbiB0aGUgc3VibWl0dGVkIGZvcm0gZGF0YS5cIik7XHJcbiAgICBzZXRTaG93QW5hbHlzaXNGb3JtKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBwLTYgb3ZlcmZsb3ctYXV0b1wiXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtNTAgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC02XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1ncmF5LTgwMFwiPlBERiBBbmFseXNpczoge3BkZk5hbWV9PC9oMj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR2VuZXJhdGVTdW1tYXJ5fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS02MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMyBweC02IHJvdW5kZWQtbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIG1iLTZcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHZW5lcmF0ZSBTdW1tYXJ5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtzdW1tYXJ5ICYmIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBiZy1ncmF5LTUwIHAtNCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDBcIlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMyB0ZXh0LWdyYXktNzAwXCI+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj57c3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBwLTYgYmctd2hpdGVcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogNTAgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNiB0ZXh0LWdyYXktODAwXCI+VGFsayB0byBQREY8L2gyPlxyXG4gICAgICAgIDxUYWxrVG9QREYgLz5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAge3Nob3dBbmFseXNpc0Zvcm0gJiYgKFxyXG4gICAgICAgIDxBbmFseXNpc0Zvcm1cclxuICAgICAgICAgIHF1ZXN0aW9ucz17W1xyXG4gICAgICAgICAgICB7IGlkOiAncXVlc3Rpb24xJywgdGV4dDogJ1doYXQgaXMgdGhlIGNvbXBhbnlcXCdzIGNhcmJvbiBmb290cHJpbnQ/JyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAncXVlc3Rpb24yJywgdGV4dDogJ0hvdyBkb2VzIHRoZSBjb21wYW55IGhhbmRsZSB3YXN0ZSBtYW5hZ2VtZW50PycgfSxcclxuICAgICAgICAgICAgeyBpZDogJ3F1ZXN0aW9uMycsIHRleHQ6ICdXaGF0IGFyZSB0aGUgY29tcGFueVxcJ3MgZGl2ZXJzaXR5IGFuZCBpbmNsdXNpb24gcG9saWNpZXM/JyB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVBbmFseXNpc0Zvcm1TdWJtaXR9XHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93QW5hbHlzaXNGb3JtKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBERkFuYWx5c2lzUGFnZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQW5hbHlzaXNGb3JtIiwiVGFsa1RvUERGIiwibW90aW9uIiwiUERGQW5hbHlzaXNQYWdlIiwicGRmTmFtZSIsInNob3dBbmFseXNpc0Zvcm0iLCJzZXRTaG93QW5hbHlzaXNGb3JtIiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJwZGZEYXRhIiwic2V0UGRmRGF0YSIsImZldGNoUGRmRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVHZW5lcmF0ZVN1bW1hcnkiLCJoYW5kbGVBbmFseXNpc0Zvcm1TdWJtaXQiLCJmb3JtRGF0YSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ5IiwiaDMiLCJwIiwicXVlc3Rpb25zIiwiaWQiLCJ0ZXh0Iiwib25TdWJtaXQiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PDFAnalysisPage.tsx\n"));

/***/ })

});