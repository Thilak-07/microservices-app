"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// export default ({ req }) => {\n//     if (typeof window === \"undefined\") {\n//         // We are on the server\n//         return axios.create({\n//             baseURL:\n//                 \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n//             headers: req.headers,\n//         });\n//     } else {\n//         // We must be on the browser\n//         return axios.create({\n//             baseUrl: \"/\",\n//         });\n//     }\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseUrl: \"http://localhost:4000\",\n        withCredentials: true\n    });\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGdDQUFnQztBQUNoQywyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBRWxDLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkIscUZBQXFGO0FBQ3JGLG9DQUFvQztBQUNwQyxjQUFjO0FBQ2QsZUFBZTtBQUNmLHVDQUF1QztBQUN2QyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLGNBQWM7QUFDZCxRQUFRO0FBQ1IsS0FBSztBQUVMLGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ25CLE9BQU9ELG9EQUFZLENBQUM7UUFDaEJHLFNBQVM7UUFDVEMsaUJBQWlCO0lBQ3JCO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XG4vLyAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbi8vICAgICAgICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXJcblxuLy8gICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbi8vICAgICAgICAgICAgIGJhc2VVUkw6XG4vLyAgICAgICAgICAgICAgICAgXCJodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWxcIixcbi8vICAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuLy8gICAgICAgICB9KTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAvLyBXZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXG4vLyAgICAgICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuLy8gICAgICAgICAgICAgYmFzZVVybDogXCIvXCIsXG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCIsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVXJsIiwid2l0aENyZWRlbnRpYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ currentUser })=>{\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"nav-link\",\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, undefined)\n        }, href, false, {\n            fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\components\\\\header.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"navbar-brand\",\n                href: \"/\",\n                children: \"GitTix\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\components\\\\header.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsaUVBQWUsQ0FBQyxFQUFFQyxXQUFXLEVBQUU7SUFDN0IsTUFBTUMsUUFBUTtRQUNaLENBQUNELGVBQWU7WUFBRUUsT0FBTztZQUFXQyxNQUFNO1FBQWU7UUFDekQsQ0FBQ0gsZUFBZTtZQUFFRSxPQUFPO1lBQVdDLE1BQU07UUFBZTtRQUN6REgsZUFBZTtZQUFFRSxPQUFPO1lBQVlDLE1BQU07UUFBZ0I7S0FDM0QsQ0FDRUMsTUFBTSxDQUFDLENBQUNDLGFBQWVBLFlBQ3ZCQyxHQUFHLENBQUMsQ0FBQyxFQUFFSixLQUFLLEVBQUVDLElBQUksRUFBRTtRQUNuQixxQkFDRSw4REFBQ0k7WUFBY0MsV0FBVTtzQkFDdkIsNEVBQUNULGtEQUFJQTtnQkFBQ1MsV0FBVTtnQkFBV0wsTUFBTUE7MEJBQzlCRDs7Ozs7O1dBRklDOzs7OztJQU1iO0lBRUYscUJBQ0UsOERBQUNNO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDVCxrREFBSUE7Z0JBQUNTLFdBQVU7Z0JBQWVMLE1BQUs7MEJBQUk7Ozs7OzswQkFJeEMsOERBQUNPO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRztvQkFBR0gsV0FBVTs4QkFBaUNQOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBVcCcsIGhyZWY6ICcvYXV0aC9zaWdudXAnIH0sXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIEluJywgaHJlZjogJy9hdXRoL3NpZ25pbicgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiAnL2F1dGgvc2lnbm91dCcgfSxcbiAgXVxuICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgR2l0VGl4XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+e2xpbmtzfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIiwibGkiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__]);\n_api_build_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// import axios from \"axios\";\n\n// axios.defaults.baseURL = \"http://localhost:4000\";\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ThilakkumarV\\\\Downloads\\\\Resources\\\\Mini-Microservices App\\\\291-manual\\\\ticketing\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    const { data } = await client.get(\"/api/users/currentuser\");\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n    }\n    return {\n        pageProps,\n        ...data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDOUMsNkJBQTZCO0FBQ2E7QUFFMUMsb0RBQW9EO0FBRXBELE1BQU1FLGVBQWUsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0lBQ3ZELHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNMLDBEQUFNQTtnQkFBQ0ksYUFBYUE7Ozs7OzswQkFDckIsOERBQUNGO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUdwQztBQUVBRixhQUFhSyxlQUFlLEdBQUcsT0FBT0M7SUFDbEMsTUFBTUMsU0FBU1QsNkRBQVdBLENBQUNRLFdBQVdFLEdBQUc7SUFDekMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRixPQUFPRyxHQUFHLENBQUM7SUFFbEMsSUFBSVIsWUFBWSxDQUFDO0lBQ2pCLElBQUlJLFdBQVdMLFNBQVMsQ0FBQ0ksZUFBZSxFQUFFO1FBQ3RDSCxZQUFZLE1BQU1JLFdBQVdMLFNBQVMsQ0FBQ0ksZUFBZSxDQUFDQyxXQUFXRSxHQUFHO0lBQ3pFO0lBRUEsT0FBTztRQUNITjtRQUNBLEdBQUdPLElBQUk7SUFDWDtBQUNKO0FBRUEsaUVBQWVULFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcbmltcG9ydCBidWlsZENsaWVudCBmcm9tIFwiLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcblxuLy8gYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCI7XG5cbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldChcIi9hcGkvdXNlcnMvY3VycmVudHVzZXJcIik7XG5cbiAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBhcHBDb250ZXh0LkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dC5jdHgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wcyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbImJ1aWxkQ2xpZW50IiwiSGVhZGVyIiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJkaXYiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiY3R4IiwiZGF0YSIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();