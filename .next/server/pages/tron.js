"use strict";
(() => {
var exports = {};
exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 9045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tron)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/footer/Footer.tsx + 5 modules
var Footer = __webpack_require__(9358);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/customicons/background.svg
var background = __webpack_require__(3025);
// EXTERNAL MODULE: ./src/components/ui/TopButton.tsx
var TopButton = __webpack_require__(8109);
;// CONCATENATED MODULE: ./src/components/header/TronHeader.tsx




const TronHeader = ()=>{
    const [tronAccountFormatted, setTronAccountFormatted] = (0,external_react_.useState)("");
    const [Isactive, SetIsActive] = (0,external_react_.useState)(false);
    const [tronBalance, setTronBalance] = (0,external_react_.useState)(0.0);
    const getTronweb = async ()=>{
        const tron = window.tronWeb;
        //if (!tron.loggedIn) {
        //    tron.defaultAddress = {
        //        hex: tron.address.toHex(MyTronAddress),
        //        base58: MyTronAddress
        //    };
        //}
        var obj = setInterval(async ()=>{
            if (tron && tron.defaultAddress.base58) {
                clearInterval(obj);
                setTronAccountFormatted(tron.defaultAddress.base58.substring(0, 6) + "...");
            }
        }, 10);
        const userBalance = await tron.trx.getBalance(tron.defaultAddress.base58) / Math.pow(10, 6);
        setTronBalance(userBalance);
    };
    const onClickConnect = ()=>{
        console.log("Connecting");
        getTronweb();
        SetIsActive(true);
        console.log("Connected");
    };
    const onClickDisconnect = ()=>{
        SetIsActive(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavBar, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TopButton/* default */.Z, {
                        title: "Convictzees",
                        fontFamily: "IrishGrover-Regular, cursive"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavLink, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            children: "EXPLORE"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            children: "MARKETPLACE"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                            children: "REDEEM"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FirstDisplay, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                children: "ROADMAP"
                            })
                        }),
                        Isactive ? /*#__PURE__*/ jsx_runtime_.jsx(ConnectButton, {
                            onClick: onClickDisconnect,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ConnectButtonText, {
                                children: [
                                    tronAccountFormatted,
                                    tronBalance === undefined ? "..." : tronBalance === null ? "Error" : ` : ${tronBalance.toPrecision(4)} TRX`
                                ]
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(ConnectButton, {
                            onClick: ()=>onClickConnect(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ConnectButtonText, {
                                children: "CONNECT WALLET"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const header_TronHeader = (TronHeader);
const FirstDisplay = (external_styled_components_default()).div`
    @media screen and (max-width: 1024px) {
        display : none;
    }
`;
const StyledButton = (external_styled_components_default()).div`
    margin-left: 6%;
    width : 18%;
    @media screen and (max-width: 1824px) {
        width : 18%;
    }
    @media screen and (max-width: 1600px) {
        width : 17%;
    }
    @media screen and (max-width: 1440px) {
        width : 15%;
    }
    @media screen and (max-width: 1280px) {
        width : 15%;
    }
    @media screen and (max-width: 1024px) {
        width : 15%;
    }
`;
const NavBar = (external_styled_components_default()).nav`
    width : 100%;
    top: 1.2%;
    position: absolute; 
    display: inline-flex;
    align-items: center;
    
  `;
const NavLink = (external_styled_components_default()).div`
    display: flex; 
    float: right;
    gap:6%;
    display: inline-flex;
    align-items: center;
    margin-left : 10.3%;
    width : 100%;
    @media screen and (max-width: 1024px) {
        margin-left : 25%;
    }
    @media screen and (max-width: 1280px) {
        margin-left : 15%;
    }
    
`;
const NavItem = (external_styled_components_default()).p`
    lex-grow: 0; 
    flex-shrink: 0; 

    font-family : Fresca;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: -0.06em;

    
    text-align: left; 
    text-transform: uppercase; 
    color: #fff;

    @media screen and (max-width: 1824px) {
        font-size: 32px;
    }
    @media screen and (max-width: 1600px) {
        font-size: 28px;
    }
    @media screen and (max-width: 1440px) {
        font-size: 26px;
    }
    @media screen and (max-width: 1280px) {
        font-size: 24px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 22px;
    }

`;
const ConnectButton = (external_styled_components_default()).button`
    border-radius: 35px; 
    background: #ff8a00; 
    border-width: 5px; 
    border-color: #ff8a00;
    height : 60px;
    @media screen and (max-width: 1824px) {
        width : 263px;
        height: 55px;
    }
    @media screen and (max-width: 1600px) {
        width : 220px;
        height: 50px;
    }
    @media screen and (max-width: 1440px) {
        width : 200px;
        height: 45px;
    }
    @media screen and (max-width: 1280px) {
        width : 150px;
        height: 40px;
    }
    @media screen and (max-width: 1024px) {
        width : 140px;
        height: 35px;
    }


`;
const ConnectButtonText = (external_styled_components_default()).p`
    width : inherited;
    height: inherited;

    font-family : Impact;
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    text-transform: uppercase;
    text-align: center; 
    margin:0;
    color: #FFFFFF;

    @media screen and (max-width: 1824px) {
        font-size : 29px;
    }
    @media screen and (max-width: 1600px) {
        font-size : 19px;
    }
    @media screen and (max-width: 1440px) {
        font-size : 18px;
    }
    @media screen and (max-width: 1280px) {
        font-size : 14px;
    }
    @media screen and (max-width: 1024px) {
        font-size : 14px;
    }
`;

;// CONCATENATED MODULE: ./src/components/layouts/TronLayout.tsx







const TronLayout = (props)=>{
    console.log("[Logging] : Tron");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: background/* default */.Z,
                alt: "Unable to Load Background",
                layout: "responsive"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_TronHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const layouts_TronLayout = (TronLayout);
const ImageContainer = (external_styled_components_default()).div`
    width: 100%;
    position: relative;
`;

// EXTERNAL MODULE: ./src/components/ui/About.tsx
var About = __webpack_require__(5965);
// EXTERNAL MODULE: ./src/components/ui/Center.tsx + 1 modules
var Center = __webpack_require__(2334);
// EXTERNAL MODULE: ./src/components/ui/Diagram.tsx + 4 modules
var Diagram = __webpack_require__(9154);
// EXTERNAL MODULE: ./src/components/ui/RoadMap.tsx + 2 modules
var RoadMap = __webpack_require__(6287);
// EXTERNAL MODULE: ./src/components/ui/Section1.tsx + 8 modules
var Section1 = __webpack_require__(9767);
// EXTERNAL MODULE: ./src/components/ui/Section2.tsx + 8 modules
var Section2 = __webpack_require__(1401);
;// CONCATENATED MODULE: ./src/pages/tron/index.tsx








const TronHome = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts_TronLayout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Center/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(About/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Diagram/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Section1/* default */.Z, {
                isTron: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Section2/* default */.Z, {
                isTron: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RoadMap/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const tron = (TronHome);


/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,558,644], () => (__webpack_exec__(9045)));
module.exports = __webpack_exports__;

})();