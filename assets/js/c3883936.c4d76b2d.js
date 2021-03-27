(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{223:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(8),a=(t(0),t(277)),i={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},c={unversionedId:"configure_hydra/workdir",id:"version-1.0/configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Example application",source:"@site/versioned_docs/version-1.0/configure_hydra/workdir.md",slug:"/configure_hydra/workdir",permalink:"/docs/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/configure_hydra/workdir.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1616885857,formattedLastUpdatedAt:"3/27/2021",sidebar_label:"Customizing working directory pattern",sidebar:"version-1.0/docs",previous:{title:"Customizing logging",permalink:"/docs/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/configure_hydra/app_help"}},p=[],u={toc:p};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/workdir"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),Object(a.b)("p",null,"Below are a few examples of customizing output directory patterns."),Object(a.b)("p",null,"Run output directory grouped by day:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),Object(a.b)("p",null,"Sweep sub directory contains the the job number and the override parameters for the job instance:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  sweep:\n    subdir: ${hydra.job.num}_${hydra.job.override_dirname}\n")),Object(a.b)("p",null,"Run output directory grouped by job name:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),Object(a.b)("p",null,"Run output directory can contain user configuration variables:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n\n")),Object(a.b)("p",null,"Run output directory can contain override parameters for the job:"),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"./job#hydrajoboverride_dirname"},"Override dirname")," in the Job configuration page for details on how to customize\n",Object(a.b)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")))}d.isMDXComponent=!0},277:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=n,m=l["".concat(i,".").concat(b)]||l[b]||s[b]||a;return t?o.a.createElement(m,c(c({ref:r},u),{},{components:t})):o.a.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);