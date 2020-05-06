(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{221:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),i=(r(0),r(227)),o={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},c={id:"tutorials/structured_config/intro",title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the [Basic Tutorial](/tutorials/basic/1_simple_cli_app.md).",source:"@site/docs/tutorials/structured_config/0_intro.md",permalink:"/docs/next/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/0_intro.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1588782682,sidebar_label:"Introduction to Structured Configs",sidebar:"Docs",previous:{title:"Debugging",permalink:"/docs/next/tutorials/basic/debugging"},next:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/simple_cli"}),"Basic Tutorial"),"."),Object(i.b)("p",null,"Structured Configs enables the use of Python ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3.7/library/dataclasses.html"}),"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),Object(i.b)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Primitive types (",Object(i.b)("inlineCode",{parentName:"li"},"int"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"float"),", ",Object(i.b)("inlineCode",{parentName:"li"},"str"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Enums"),") "),Object(i.b)("li",{parentName:"ul"},"Nesting of structured configs"),Object(i.b)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),Object(i.b)("li",{parentName:"ul"},"Optional fields")),Object(i.b)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",Object(i.b)("inlineCode",{parentName:"li"},"Optional"),")"),Object(i.b)("li",{parentName:"ul"},"User methods are not supported")),Object(i.b)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/minimal_example"}),"config"),", in place of configuration files (often a starting place)"),Object(i.b)("li",{parentName:"ul"},"As a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/tutorials/structured_config/schema"}),"config schema")," validating configuration files (better for complex use cases)")),Object(i.b)("p",null,"With both patterns, you get everything Hydra has to offer (Config composition, Command line overrides etc).\nThis tutorial covers both. ","*",Object(i.b)("strong",{parentName:"p"},"Read it in order"),"*","."),Object(i.b)("p",null,"Structured Configs are a feature of OmegaConf. This tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",Object(i.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."),Object(i.b)("div",{class:"alert alert--info",role:"alert"},"1. The APIs and behaviors described in this tutorial are experimental and may change in a future version",Object(i.b)("br",null),"2. Structured configs are new, please report any issues",Object(i.b)("br",null)),Object(i.b)("br",null))}l.isMDXComponent=!0},227:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(f,c({ref:t},u,{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);