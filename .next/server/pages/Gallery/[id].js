/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/Gallery/[id]";
exports.ids = ["pages/Gallery/[id]"];
exports.modules = {

/***/ "./components/photo_reports/PhotoReportTemplate.js":
/*!*********************************************************!*\
  !*** ./components/photo_reports/PhotoReportTemplate.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fragments_DateAndAuthor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fragments/DateAndAuthor */ \"./components/fragments/DateAndAuthor.js\");\n/* harmony import */ var _fragments_PhotosQuantityHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fragments/PhotosQuantityHolder */ \"./components/fragments/PhotosQuantityHolder.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-gallery */ \"react-image-gallery\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fragments_ShareBySocialNetworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fragments/ShareBySocialNetworks */ \"./components/fragments/ShareBySocialNetworks.js\");\n/* harmony import */ var _fragments_PhotoReportItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fragments/PhotoReportItem */ \"./components/fragments/PhotoReportItem.js\");\n/* harmony import */ var _fragments_BannersPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fragments/BannersPanel */ \"./components/fragments/BannersPanel.js\");\n/* harmony import */ var _fragments_GorizontalAdBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fragments/GorizontalAdBanner */ \"./components/fragments/GorizontalAdBanner.js\");\n/* harmony import */ var _fragments_SubscriptionBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fragments/SubscriptionBanner */ \"./components/fragments/SubscriptionBanner.js\");\n/* harmony import */ var _common_SocialNetworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/SocialNetworks */ \"./components/common/SocialNetworks.js\");\n/* harmony import */ var _fragments_TagsPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fragments/TagsPanel */ \"./components/fragments/TagsPanel.js\");\n/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Header */ \"./components/common/Header.js\");\n/* harmony import */ var _fragments_Fragment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fragments/Fragment */ \"./components/fragments/Fragment.js\");\n/* harmony import */ var _common_PublicationAbstract__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/PublicationAbstract */ \"./components/common/PublicationAbstract.js\");\n/* harmony import */ var _common_PatreonPopup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/PatreonPopup */ \"./components/common/PatreonPopup.js\");\n/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ \"./node_modules/react-image-gallery/styles/css/image-gallery.css\");\n/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_15__);\nvar _jsxFileName = \"/home/dali/Documents/tyzhden/tyzhden/components/photo_reports/PhotoReportTemplate.js\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getDate(public_ts) {\n  let today = new Date();\n  let options = {\n    hour: 'numeric',\n    minute: 'numeric',\n    month: 'long',\n    day: 'numeric',\n    timeZone: 'UTC'\n  };\n  let date = \"\";\n\n  if (public_ts) {\n    date = new Date(public_ts).toLocaleTimeString('uK-UK', options);\n\n    if (new Date(public_ts).getDate() === today.getDate() && new Date(public_ts).getMonth() === today.getMonth() && new Date(public_ts).getFullYear() === today.getFullYear()) {\n      options = {\n        hour: 'numeric',\n        minute: 'numeric',\n        timeZone: 'UTC'\n      };\n      date = new Date(public_ts).toLocaleTimeString('uK-UK', options);\n      date = `Cьогодні, ${date}`;\n    }\n\n    if (new Date(public_ts).getYear() < today.getYear()) {\n      options = {\n        year: 'numeric',\n        hour: 'numeric',\n        minute: 'numeric',\n        month: 'long',\n        day: 'numeric',\n        timeZone: 'UTC'\n      };\n      date = new Date(public_ts).toLocaleTimeString('uK-UK', options);\n    }\n  }\n\n  return date;\n}\n\nfunction PhotoReportTemplate(props) {\n  let photoReport = props.photoReport;\n  let authors = photoReport.author ? [photoReport.author] : [];\n  const images = photoReport.items ? photoReport.items.map(image => {\n    return {\n      \"original\": image.image,\n      \"thumbnail\": image.preview\n    };\n  }) : [];\n  const link = \"Gallery\";\n  const photoReportsComponents = photoReport.more ? photoReport.more.map(photoReport => __jsx(\"div\", {\n    className: \"col-12 col-md-6\",\n    key: photoReport.id + 100,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(_fragments_PhotoReportItem__WEBPACK_IMPORTED_MODULE_5__.default, {\n    key: photoReport.id,\n    reportItem: photoReport,\n    link: link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }))) : \"\";\n  return __jsx(_common_PublicationAbstract__WEBPACK_IMPORTED_MODULE_13__.default, {\n    publication: photoReport,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(_common_PatreonPopup__WEBPACK_IMPORTED_MODULE_14__.default, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"big-post-header news-header \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, photoReport.title)), __jsx(\"div\", {\n    className: \"col-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"news-date\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }, __jsx(_fragments_DateAndAuthor__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: getDate(photoReport.public_ts),\n    author: authors,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 25\n    }\n  }))), __jsx(\"div\", {\n    className: \"d-none d-md-block col-md-2 text-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, __jsx(_fragments_PhotosQuantityHolder__WEBPACK_IMPORTED_MODULE_2__.default, {\n    quantity: photoReport.count,\n    noFrame: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12 col-md-10 offset-md-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"article-block-abstract-big\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 22\n    }\n  }, photoReport.abstract))), __jsx((react_image_gallery__WEBPACK_IMPORTED_MODULE_3___default()), {\n    className: \"image-gallery\",\n    items: images,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }), __jsx(_fragments_TagsPanel__WEBPACK_IMPORTED_MODULE_10__.default, {\n    tags: photoReport.tags ? photoReport.tags.split(\",\") : [],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"shared-flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(_common_SocialNetworks__WEBPACK_IMPORTED_MODULE_9__.default, {\n    shareFb: true,\n    shareTwitter: true,\n    shareLink: `${\"https://tyzhden.ua/api\"}/Gallery/${photoReport.id}`,\n    shareText: photoReport.title,\n    color: \"red\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  })), __jsx(_fragments_SubscriptionBanner__WEBPACK_IMPORTED_MODULE_8__.default, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }), __jsx(_fragments_GorizontalAdBanner__WEBPACK_IMPORTED_MODULE_7__.default, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"d-block d-md-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, __jsx(_fragments_BannersPanel__WEBPACK_IMPORTED_MODULE_6__.default, {\n    admixer_id: \"admixed-photo-report\",\n    admixer: true,\n    ria: true,\n    adriver: true,\n    adriver_id: \"adriver-photo-report\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  })), __jsx(_fragments_Fragment__WEBPACK_IMPORTED_MODULE_12__.default, {\n    size: \"big\",\n    showMoreLink: \"/Gallery\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(_common_Header__WEBPACK_IMPORTED_MODULE_11__.default, {\n    size: \"big\",\n    title: \"B\\u0430\\u043C \\u0442\\u0430\\u043A\\u043E\\u0436 \\u0431\\u0443\\u0434\\u0435 \\u0446\\u0456\\u043A\\u0430\\u0432\\u043E \\u043F\\u043E\\u0447\\u0438\\u0442\\u0430\\u0442\\u0438\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, photoReportsComponents))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoReportTemplate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXpkZW4tZnJvbnRlbmQvLi9jb21wb25lbnRzL3Bob3RvX3JlcG9ydHMvUGhvdG9SZXBvcnRUZW1wbGF0ZS5qcz9kOGI1Il0sIm5hbWVzIjpbImdldERhdGUiLCJwdWJsaWNfdHMiLCJ0b2RheSIsIkRhdGUiLCJvcHRpb25zIiwiaG91ciIsIm1pbnV0ZSIsIm1vbnRoIiwiZGF5IiwidGltZVpvbmUiLCJkYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldFllYXIiLCJ5ZWFyIiwiUGhvdG9SZXBvcnRUZW1wbGF0ZSIsInByb3BzIiwicGhvdG9SZXBvcnQiLCJhdXRob3JzIiwiYXV0aG9yIiwiaW1hZ2VzIiwiaXRlbXMiLCJtYXAiLCJpbWFnZSIsInByZXZpZXciLCJsaW5rIiwicGhvdG9SZXBvcnRzQ29tcG9uZW50cyIsIm1vcmUiLCJpZCIsInRpdGxlIiwiY291bnQiLCJhYnN0cmFjdCIsInRhZ3MiLCJzcGxpdCIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxPQUFULENBQWlCQyxTQUFqQixFQUEyQjtBQUN6QixNQUFJQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsTUFBSUMsT0FBTyxHQUFHO0FBQUdDLFFBQUksRUFBRSxTQUFUO0FBQW9CQyxVQUFNLEVBQUUsU0FBNUI7QUFBdUNDLFNBQUssRUFBRSxNQUE5QztBQUFzREMsT0FBRyxFQUFFLFNBQTNEO0FBQXVFQyxZQUFRLEVBQUU7QUFBakYsR0FBZDtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE1BQUlULFNBQUosRUFBZTtBQUNiUyxRQUFJLEdBQUcsSUFBSVAsSUFBSixDQUFTRixTQUFULEVBQW9CVSxrQkFB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QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQVEsUUFBSSxFQUFDLEtBQWI7QUFBbUIsU0FBSyxFQUFDLDZKQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUgsc0JBREosQ0FGRixDQTFDQSxDQUZGLENBREY7QUFzREg7O0FBRUQsK0RBQWVYLG1CQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9waG90b19yZXBvcnRzL1Bob3RvUmVwb3J0VGVtcGxhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0IERhdGVBbmRBdXRob3IgZnJvbSBcIi4uL2ZyYWdtZW50cy9EYXRlQW5kQXV0aG9yXCI7XG5pbXBvcnQgUGhvdG9zUXVhbnRpdHlIb2xkZXIgZnJvbSBcIi4uL2ZyYWdtZW50cy9QaG90b3NRdWFudGl0eUhvbGRlclwiO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICdyZWFjdC1pbWFnZS1nYWxsZXJ5JztcbmltcG9ydCBTaGFyZUJ5U29jaWFsTmV0d29ya3MgZnJvbSBcIi4uL2ZyYWdtZW50cy9TaGFyZUJ5U29jaWFsTmV0d29ya3NcIjtcbmltcG9ydCBQaG90b1JlcG9ydEl0ZW0gZnJvbSBcIi4uL2ZyYWdtZW50cy9QaG90b1JlcG9ydEl0ZW1cIjtcbmltcG9ydCBCYW5uZXJzUGFuZWwgZnJvbSBcIi4uL2ZyYWdtZW50cy9CYW5uZXJzUGFuZWxcIjtcbmltcG9ydCBHb3Jpem9udGFsQWRCYW5uZXIgZnJvbSBcIi4uL2ZyYWdtZW50cy9Hb3Jpem9udGFsQWRCYW5uZXJcIjtcbmltcG9ydCBTdWJzY3JpcHRpb25CYW5uZXIgZnJvbSBcIi4uL2ZyYWdtZW50cy9TdWJzY3JpcHRpb25CYW5uZXJcIjtcbmltcG9ydCBTb2NpYWxOZXR3b3JrcyBmcm9tIFwiLi4vY29tbW9uL1NvY2lhbE5ldHdvcmtzXCI7XG5pbXBvcnQgVGFnc1BhbmVsIGZyb20gXCIuLi9mcmFnbWVudHMvVGFnc1BhbmVsXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21tb24vSGVhZGVyXCI7XG5pbXBvcnQgRnJhZ21lbnQgZnJvbSBcIi4uL2ZyYWdtZW50cy9GcmFnbWVudFwiO1xuaW1wb3J0IFB1YmxpY2F0aW9uQWJzdHJhY3QgZnJvbSBcIi4uL2NvbW1vbi9QdWJsaWNhdGlvbkFic3RyYWN0XCI7XG5pbXBvcnQgUGF0cmVvblBvcHVwIGZyb20gXCIuLi9jb21tb24vUGF0cmVvblBvcHVwXCI7XG5cbmltcG9ydCBcInJlYWN0LWltYWdlLWdhbGxlcnkvc3R5bGVzL2Nzcy9pbWFnZS1nYWxsZXJ5LmNzc1wiO1xuXG5cblxuZnVuY3Rpb24gZ2V0RGF0ZShwdWJsaWNfdHMpe1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgb3B0aW9ucyA9IHsgIGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCAgdGltZVpvbmU6ICdVVEMnfTtcbiAgbGV0IGRhdGUgPSBcIlwiO1xuICBpZiAocHVibGljX3RzKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKHB1YmxpY190cykudG9Mb2NhbGVUaW1lU3RyaW5nKCd1Sy1VSycsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG5ldyBEYXRlKHB1YmxpY190cykuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiYgbmV3IERhdGUocHVibGljX3RzKS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpICYmIG5ldyBEYXRlKHB1YmxpY190cykuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgb3B0aW9ucyA9IHsgIGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsICB0aW1lWm9uZTogJ1VUQyd9O1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKHB1YmxpY190cykudG9Mb2NhbGVUaW1lU3RyaW5nKCd1Sy1VSycsIG9wdGlvbnMpO1xuICAgICAgZGF0ZSA9IGBD0YzQvtCz0L7QtNC90ZYsICR7ZGF0ZX1gO1xuICAgIH1cbiBcbiAgaWYgKG5ldyBEYXRlKHB1YmxpY190cykuZ2V0WWVhcigpIDwgdG9kYXkuZ2V0WWVhcigpKSB7XG4gICAgICBvcHRpb25zID0geyB5ZWFyOidudW1lcmljJyxob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgdGltZVpvbmU6ICdVVEMnfTtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShwdWJsaWNfdHMpLnRvTG9jYWxlVGltZVN0cmluZygndUstVUsnLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cblxuZnVuY3Rpb24gUGhvdG9SZXBvcnRUZW1wbGF0ZShwcm9wcyl7XG4gICBsZXQgcGhvdG9SZXBvcnQgPSBwcm9wcy5waG90b1JlcG9ydDtcbiAgXG4gICBsZXQgYXV0aG9ycyA9IHBob3RvUmVwb3J0LmF1dGhvcj8gW3Bob3RvUmVwb3J0LmF1dGhvcl06W107XG4gXG4gIFxuICAgIFxuICAgIGNvbnN0IGltYWdlcyA9IHBob3RvUmVwb3J0Lml0ZW1zPyBwaG90b1JlcG9ydC5pdGVtcy5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICByZXR1cm4ge1wib3JpZ2luYWxcIjogaW1hZ2UuaW1hZ2UsXG4gICAgICAgIFwidGh1bWJuYWlsXCI6IGltYWdlLnByZXZpZXd9fSk6W107XG4gICAgY29uc3QgbGluayA9IFwiR2FsbGVyeVwiO1xuICAgIGNvbnN0IHBob3RvUmVwb3J0c0NvbXBvbmVudHMgPSBwaG90b1JlcG9ydC5tb3JlPyBwaG90b1JlcG9ydC5tb3JlLm1hcChwaG90b1JlcG9ydCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCIga2V5PXtwaG90b1JlcG9ydC5pZCsxMDB9PlxuICAgICAgICAgICAgPFBob3RvUmVwb3J0SXRlbSBrZXk9e3Bob3RvUmVwb3J0LmlkfSByZXBvcnRJdGVtPXtwaG90b1JlcG9ydH0gbGluaz17bGlua30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICkpOlwiXCI7XG4gICAgcmV0dXJuICggICAgXG4gICAgICA8UHVibGljYXRpb25BYnN0cmFjdCBwdWJsaWNhdGlvbj17cGhvdG9SZXBvcnR9PlxuICAgICAgICA8UGF0cmVvblBvcHVwIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJpZy1wb3N0LWhlYWRlciBuZXdzLWhlYWRlciBcIj57cGhvdG9SZXBvcnQudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVBbmRBdXRob3IgZGF0ZT17Z2V0RGF0ZShwaG90b1JlcG9ydC5wdWJsaWNfdHMpfSBhdXRob3I9e2F1dGhvcnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9jayBjb2wtbWQtMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG90b3NRdWFudGl0eUhvbGRlciBxdWFudGl0eT17cGhvdG9SZXBvcnQuY291bnR9IG5vRnJhbWU9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgb2Zmc2V0LW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtYmxvY2stYWJzdHJhY3QtYmlnXCI+e3Bob3RvUmVwb3J0LmFic3RyYWN0fTwvcD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlcIiBpdGVtcz17aW1hZ2VzfSAvPlxuICAgICAgICAgXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwibm90aWNlLW1pc3Rha2UgZC1ub25lIGQtbWQtYmxvY2tcIj5cbiAgICAgICAgICAgINCv0LrRidC+INCy0Lgg0L/QvtC80ZbRgtC40LvQuCDQv9C+0LzQuNC70LrRgywg0LLQuNC00ZbQu9GW0YLRjCDQvdC10L7QsdGF0L7QtNGW0L3QuNC5INGC0LXQutGB0YIg0ZYg0L3QsNGC0LjRgdC90ZbRgtGMXG4gICAgICAgICAgICBDVFJMICsgRU5URVIsINGJ0L7QsSDQv9C+0LLRltC00L7QvNC40YLQuCDQv9GA0L4g0YbQtSDRgNC10LTQsNC60YbRltGOLlxuICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgXG4gICAgICAgICAgPFRhZ3NQYW5lbCB0YWdzPXtwaG90b1JlcG9ydC50YWdzPyBwaG90b1JlcG9ydC50YWdzLnNwbGl0KFwiLFwiKTpbXX0gLz5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVkLWZsZXhcIj5cbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJxdWFudGl0eS1sYWJlbFwiPlxuICAgICAgICAgICAgICDQn9C+0LTRltC70LjQu9C+0YHRjzogPGI+ezEyfSDQvtGB0ZbQsTwvYj5cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICA8U29jaWFsTmV0d29ya3Mgc2hhcmVGYj17dHJ1ZX0gc2hhcmVUd2l0dGVyPXt0cnVlfSBzaGFyZUxpbms9e2Ake3Byb2Nlc3MuZW52LmFwaURvbWFpbn0vR2FsbGVyeS8ke3Bob3RvUmVwb3J0LmlkfWB9IHNoYXJlVGV4dD17cGhvdG9SZXBvcnQudGl0bGV9IGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U3Vic2NyaXB0aW9uQmFubmVyIC8+XG4gICAgICAgICAgPEdvcml6b250YWxBZEJhbm5lciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgIDxCYW5uZXJzUGFuZWwgIGFkbWl4ZXJfaWQ9XCJhZG1peGVkLXBob3RvLXJlcG9ydFwiIGFkbWl4ZXI9e3RydWV9IHJpYT17dHJ1ZX0gYWRyaXZlcj17dHJ1ZX0gYWRyaXZlcl9pZD1cImFkcml2ZXItcGhvdG8tcmVwb3J0XCIgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGcmFnbWVudCBzaXplPVwiYmlnXCIgc2hvd01vcmVMaW5rPVwiL0dhbGxlcnlcIj5cbiAgICAgICAgICA8SGVhZGVyIHNpemU9XCJiaWdcIiB0aXRsZT1cIkLQsNC8INGC0LDQutC+0LYg0LHRg9C00LUg0YbRltC60LDQstC+INC/0L7Rh9C40YLQsNGC0LhcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAge3Bob3RvUmVwb3J0c0NvbXBvbmVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L1B1YmxpY2F0aW9uQWJzdHJhY3Q+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9SZXBvcnRUZW1wbGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/photo_reports/PhotoReportTemplate.js\n");

/***/ }),

/***/ "./pages/Gallery/[id].js":
/*!*******************************!*\
  !*** ./pages/Gallery/[id].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gallery; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_photo_reports_PhotoReportTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/photo_reports/PhotoReportTemplate */ \"./components/photo_reports/PhotoReportTemplate.js\");\nvar _jsxFileName = \"/home/dali/Documents/tyzhden/tyzhden/pages/Gallery/[id].js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nfunction Gallery({\n  data\n}) {\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, data.title)), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(_components_photo_reports_PhotoReportTemplate__WEBPACK_IMPORTED_MODULE_3__.default, {\n    photoReport: data,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })));\n}\nasync function getServerSideProps(context) {\n  let apiUrl = `${\"https://tyzhden.ua/api\"}/galleries/${context.params.id}/`;\n  const res = await fetch(apiUrl);\n\n  if (res.status == 200) {\n    const data = await res.json();\n    return {\n      props: {\n        data\n      }\n    };\n  } else {\n    return {\n      notFound: true\n    };\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXpkZW4tZnJvbnRlbmQvLi9wYWdlcy9HYWxsZXJ5L1tpZF0uanM/NjcwMSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiZGF0YSIsInRpdGxlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImFwaVVybCIsInByb2Nlc3MiLCJwYXJhbXMiLCJpZCIsInJlcyIsImZldGNoIiwic3RhdHVzIiwianNvbiIsInByb3BzIiwibm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQTJCO0FBQ3hDLFNBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxJQUFJLENBQUNDLEtBQWIsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0ZBQUQ7QUFBcUIsZUFBVyxFQUFFRCxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGO0FBVUQ7QUFHTSxlQUFlRSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsTUFBSUMsTUFBTSxHQUFJLEdBQUVDLHdCQUFzQixjQUFhRixPQUFPLENBQUNHLE1BQVIsQ0FBZUMsRUFBRyxHQUFyRTtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNMLE1BQUQsQ0FBdkI7O0FBQ0EsTUFBSUksR0FBRyxDQUFDRSxNQUFKLElBQWMsR0FBbEIsRUFBdUI7QUFDckIsVUFBTVYsSUFBSSxHQUFHLE1BQU1RLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUNBLFdBQU87QUFBRUMsV0FBSyxFQUFFO0FBQUVaO0FBQUY7QUFBVCxLQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsV0FBTztBQUFFYSxjQUFRLEVBQUU7QUFBWixLQUFQO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL0dhbGxlcnkvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUGhvdG9SZXBvcnRUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9waG90b19yZXBvcnRzL1Bob3RvUmVwb3J0VGVtcGxhdGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KHsgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2RhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQaG90b1JlcG9ydFRlbXBsYXRlIHBob3RvUmVwb3J0PXtkYXRhfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBsZXQgYXBpVXJsID0gYCR7cHJvY2Vzcy5lbnYuYXBpRG9tYWlufS9nYWxsZXJpZXMvJHtjb250ZXh0LnBhcmFtcy5pZH0vYFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwpXG4gIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBub3RGb3VuZDogdHJ1ZSB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Gallery/[id].js\n");

/***/ }),

/***/ "./node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \***********************************************************************/
/***/ (function() {



/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("jquery");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-image-gallery":
/*!**************************************!*\
  !*** external "react-image-gallery" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-image-gallery");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-meta-tags":
/*!**********************************!*\
  !*** external "react-meta-tags" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-meta-tags");;

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ "react-script-tag":
/*!***********************************!*\
  !*** external "react-script-tag" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-script-tag");;

/***/ }),

/***/ "use-media":
/*!****************************!*\
  !*** external "use-media" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("use-media");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-ad777a","vendors-node_modules_next_image_js-node_modules_next_link_js","components_common_Header_js-components_fragments_BannersPanel_js-components_fragments_DateAnd-c9c815","components_common_PatreonPopup_js-components_common_PublicationAbstract_js-components_fragmen-b922a8","components_fragments_PhotoReportItem_js-components_fragments_SubscriptionBanner_js"], function() { return __webpack_exec__("./pages/Gallery/[id].js"); });
module.exports = __webpack_exports__;

})();