(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(278)),i={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},s={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"version-1.0/tutorials/basic/running_your_app/multi-run",isDocsHomePage:!1,title:"Multi-run",description:"Sometimes you want to run a parameter sweep.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/2_multirun.md",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/2_multirun.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1618597436,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Multi-run",sidebar:"version-1.0/docs",previous:{title:"Putting it all together",permalink:"/docs/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/tutorials/basic/running_your_app/working_directory"}},p=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]}],c={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you want to run a parameter sweep.\nA parameter sweep is a method of evaluating a function (or a program) with a pre-determined set of parameters.\nThe examples below will clarify what this means."),Object(o.b)("p",null,"To run a parameter sweep, use the ",Object(o.b)("inlineCode",{parentName:"p"},"--multirun")," (",Object(o.b)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list for each\ndimension you want to sweep.  "),Object(o.b)("p",null,"To run your program with the 3 different schemas in schema config group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ python my_app.py -m schema=warehouse,support,school\n")),Object(o.b)("p",null,"Here is sweep over the db types (mysql,postgresql) and the schemas (warehouse,support,school).\nOutput does not contain the configuration prints."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"}," $ python my_app.py schema=warehouse,support,school db=mysql,postgresql -m\n[2019-10-01 14:44:16,254] - Launching 6 jobs locally\n[2019-10-01 14:44:16,254] - Sweep output dir : multirun/2019-10-01/14-44-16\n[2019-10-01 14:44:16,254] -     #0 : schema=warehouse db=mysql\n[2019-10-01 14:44:16,321] -     #1 : schema=warehouse db=postgresql\n[2019-10-01 14:44:16,390] -     #2 : schema=support db=mysql\n[2019-10-01 14:44:16,458] -     #3 : schema=support db=postgresql\n[2019-10-01 14:44:16,527] -     #4 : schema=school db=mysql\n[2019-10-01 14:44:16,602] -     #5 : schema=school db=postgresql\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Hydra supports other kind of sweeps, for example a range sweep: ",Object(o.b)("strong",{parentName:"p"},"x=range(1,10)")," or a glob: ",Object(o.b)("strong",{parentName:"p"},"support=glob(*)"),".",Object(o.b)("br",{parentName:"p"}),"\n","See the ",Object(o.b)("a",{parentName:"p",href:"/docs/advanced/override_grammar/extended"},"Extended Override syntax")," for details."))),Object(o.b)("h3",{id:"sweeper"},"Sweeper"),Object(o.b)("p",null,"The sweeping logic is implemented by a simple sweeper that is built into Hydra.\nAdditional sweepers are available as plugins.\nFor example, the ",Object(o.b)("a",{parentName:"p",href:"/docs/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),Object(o.b)("h3",{id:"launcher"},"Launcher"),Object(o.b)("p",null,"A Launcher is what runs your job. Hydra comes with a simple launcher that runs the jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",Object(o.b)("a",{parentName:"p",href:"/docs/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}l.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,s(s({ref:t},c),{},{components:r})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);