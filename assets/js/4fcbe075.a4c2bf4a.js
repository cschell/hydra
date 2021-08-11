(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8182:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=["components"],i={id:"objects",title:"Creating objects",sidebar_label:"Creating objects"},c=void 0,l={unversionedId:"patterns/objects",id:"version-0.11/patterns/objects",isDocsHomePage:!1,title:"Creating objects",description:"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-0.11/patterns/objects.md",sourceDirName:"patterns",slug:"/patterns/objects",permalink:"/docs/0.11/patterns/objects",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/patterns/objects.md",version:"0.11",lastUpdatedBy:"Louis Martin",lastUpdatedAt:1628701326,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"objects",title:"Creating objects",sidebar_label:"Creating objects"},sidebar:"version-0.11/docs",previous:{title:"Debugging",permalink:"/docs/0.11/tutorial/debugging"},next:{title:"Specializing configuration",permalink:"/docs/0.11/patterns/specializing_config"}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the best ways to drive different behavior in the application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),(0,o.kt)("p",null,"A Database connection interface may have a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," method, implemented by different database drivers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class DBConnection:\n    def connect(self):\n        pass\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host, user, password):\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self):\n        print(\n            "MySQL connecting to {} with user={} and password={}".format(\n                self.host, self.user, self.password\n            )\n        )\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host, user, password, database):\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self):\n        print(\n            "PostgreSQL connecting to {} "\n            "with user={} and password={} and database={}".format(\n                self.host, self.user, self.password, self.database\n            )\n        )\n')),(0,o.kt)("p",null,"To support this, we can have a parallel config structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.kt)("p",null,"Config file: ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n")),(0,o.kt)("p",null,"Config file: ",(0,o.kt)("inlineCode",{parentName:"p"},"db/mysql.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"db:\n  class: tutorial.objects_example.objects.MySQLConnection\n  params:\n    host: localhost\n    user: root\n    password: 1234\n")),(0,o.kt)("p",null,"db/postgresql.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"db:\n  class: tutorial.objects_example.objects.PostgreSQLConnection\n  params:\n    host: localhost\n    user: root\n    password: 1234\n    database: tutorial\n")),(0,o.kt)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf/config.yaml")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')),(0,o.kt)("p",null,"MySQL is the default per the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n")),(0,o.kt)("p",null,"Change the instantiated object class and override values from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py db=postgresql db.params.password=abcde\nPostgreSQL connecting to localhost with user=root and password=abcde and database=tutorial\n")))}u.isMDXComponent=!0}}]);