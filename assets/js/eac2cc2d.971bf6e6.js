(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(277)),c={id:"search_path",title:"Config Search Path"},i={unversionedId:"advanced/search_path",id:"version-1.0/advanced/search_path",isDocsHomePage:!1,title:"Config Search Path",description:"The Config Search Path is a list of paths that are searched in order to find configs. It is similar to",source:"@site/versioned_docs/version-1.0/advanced/search_path.md",slug:"/advanced/search_path",permalink:"/docs/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/search_path.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1616885857,formattedLastUpdatedAt:"3/27/2021",sidebar:"version-1.0/docs",previous:{title:"Overriding packages",permalink:"/docs/advanced/overriding_packages"},next:{title:"Hydra plugins types",permalink:"/docs/advanced/plugins"}},s=[],p={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Config Search Path is a list of paths that are searched in order to find configs. It is similar to\nthe Python PYTHONPATH."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When a config is requested, The first matching config in the search path is used."),Object(o.b)("li",{parentName:"ul"},"Each search path element has a schema prefix such as file:// or pkg:// that is corresponding to a ConfigSourcePlugin."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SearchPathPlugin")," can manipulate the search path.")),Object(o.b)("p",null,"You can inspect the search path and the configurations loaded by Hydra by turning on verbose logging for the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," logger:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=hydra\n")))}l.isMDXComponent=!0},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);