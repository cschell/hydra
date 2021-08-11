(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2283],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6808:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],l={id:"hydra-command-line-flags",title:"Hydra's command line flags"},p=void 0,s={unversionedId:"advanced/hydra-command-line-flags",id:"version-1.0/advanced/hydra-command-line-flags",isDocsHomePage:!1,title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/versioned_docs/version-1.0/advanced/hydra-command-line-flags.md",sourceDirName:"advanced",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/1.0/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/hydra-command-line-flags.md",version:"1.0",lastUpdatedBy:"Louis Martin",lastUpdatedAt:1628701326,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"hydra-command-line-flags",title:"Hydra's command line flags"},sidebar:"version-1.0/docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/1.0/plugins/nevergrad_sweeper"},next:{title:"Basic Override syntax",permalink:"/docs/1.0/advanced/override_grammar/basic"}},d=[],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra is using the command line for two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuring your application (See ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.0/advanced/override_grammar/basic"},"Override Grammar"),")"),(0,i.kt)("li",{parentName:"ul"},"Telling Hydra what to do.")),(0,i.kt)("p",null,"Any argparse argument that is prefixed by ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),"  or ",(0,i.kt)("inlineCode",{parentName:"p"},"'-")," is telling Hydra what to do.\nThe rest of the parameters are used to configure your application."),(0,i.kt)("p",null,"You can view the Hydra specific flags via ",(0,i.kt)("inlineCode",{parentName:"p"},"--hydra-help"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="Example',metastring:'--hydra-help output"',"--hydra-help":!0,'output"':!0},"$ python my_app.py --hydra-help\nHydra (1.0.0rc3)\nSee https://hydra.cc for more info.\n\n== Flags ==\n--help,-h : Application's help\n--hydra-help : Hydra's help\n--version : Show Hydra's version and exit\n--cfg,-c : Show config instead of running [job|hydra|all]\n--package,-p : Config package to show\n--run,-r : Run a job\n--multirun,-m : Run multiple jobs with the configured launcher and sweeper\n--shell-completion,-sc : Install or Uninstall shell completion:\n    Bash - Install:\n    eval \"$(python my_app.py -sc install=bash)\"\n    Bash - Uninstall:\n    eval \"$(python my_app.py -sc uninstall=bash)\"\n\n    Fish - Install:\n    python my_app.py -sc install=fish | source\n    Fish - Uninstall:\n    python my_app.py -sc uninstall=fish | source\n\n--config-path,-cp : Overrides the config_path specified in hydra.main().\n                    The config_path is relative to the Python file declaring @hydra.main()\n--config-name,-cn : Overrides the config_name specified in hydra.main()\n--config-dir,-cd : Adds an additional config dir to the config search path\n--info,-i : Print Hydra information\nOverrides : Any key=value arguments to override config values (use dots for.nested=overrides)\n\n== Configuration groups ==\nCompose your configuration from those groups (For example, append hydra/job_logging=disabled to command line)\n\nhydra/help: default\nhydra/hydra_help: default\nhydra/hydra_logging: default, disabled, hydra_debug\nhydra/job_logging: default, disabled\nhydra/launcher: basic, rq, submitit_local, submitit_slurm\nhydra/output: default\nhydra/sweeper: ax, basic, nevergrad\n\n\nUse '--cfg hydra' to Show the Hydra config.\n"))),(0,i.kt)("h4",{id:"--help-h-"},"--help,-h :"),(0,i.kt)("p",null,"Shows the application's help. This can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/app_help"},"customized"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ python my_app.py --help\nmy_app is powered by Hydra.\n\n== Configuration groups ==\nCompose your configuration from those groups (group=option)\n\ndb: mysql, postgresql\n\n\n== Config ==\nOverride anything in the config (foo.bar=value)\n\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n"))),(0,i.kt)("h4",{id:"--version"},"--version"),(0,i.kt)("p",null,"Show Hydra's version and exit"),(0,i.kt)("h4",{id:"--cfg-c"},"--cfg,-c"),(0,i.kt)("p",null,"Show config instead of running. Takes as parameter one of ",(0,i.kt)("inlineCode",{parentName:"p"},"job"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"all"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py --cfg job\n# @package _global_\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n"))),(0,i.kt)("h4",{id:"--package-p"},"--package,-p"),(0,i.kt)("p",null,"Used in conjunction with --cfg.\n-p select a specific config package to show."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py --cfg hydra -p hydra.job\n# @package hydra.job\nname: my_app\noverride_dirname: ''\nid: ???\nnum: ???\nconfig_name: config\nenv_set: {}\nenv_copy: []\nconfig:\n  override_dirname:\n    kv_sep: '='\n    item_sep: ','\n    exclude_keys: []\n"))),(0,i.kt)("h4",{id:"--run-r"},"--run,-r"),(0,i.kt)("p",null,"Run is the default mode and is not normally needed."),(0,i.kt)("h4",{id:"--multirun-m"},"--multirun,-m"),(0,i.kt)("p",null,"Run multiple jobs with the configured launcher and sweeper. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/multi-run"}),"."),(0,i.kt)("h4",{id:"--shell-completion-sc"},"--shell-completion,-sc"),(0,i.kt)("p",null,"Install or Uninstall ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),"."),(0,i.kt)("h4",{id:"--config-path-cp"},"--config-path,-cp"),(0,i.kt)("p",null,"Overrides the config_path specified in hydra.main(). The config_path is relative to the Python file declaring @hydra.main()"),(0,i.kt)("h4",{id:"--config-name-cn"},"--config-name,-cn"),(0,i.kt)("p",null,"Overrides the config_name specified in hydra.main()"),(0,i.kt)("h4",{id:"--config-dir-cd"},"--config-dir,-cd"),(0,i.kt)("p",null,"Adds an additional config directory to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/advanced/search_path"},"config search path"),".\nThis is useful for installed apps that want to allow their users to provide additional configs."),(0,i.kt)("h4",{id:"--info-i"},"--info,-i"),(0,i.kt)("p",null,"Print Hydra information. This includes installed plugins, search path, composition trace, generated config and more."))}u.isMDXComponent=!0}}]);