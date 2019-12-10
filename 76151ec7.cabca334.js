/*! For license information please see 76151ec7.cabca334.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(178),r(177)),c={id:"adding-typescript",title:"Adding TypeScript"},i=[{value:"Installation",id:"installation",children:[]},{value:"Getting Started with TypeScript and React",id:"getting-started-with-typescript-and-react",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={id:"adding-typescript",title:"Adding TypeScript",description:"> Note: this feature is available with `react-scripts@2.1.0` and higher.",source:"@site/../docs/adding-typescript.md",permalink:"/docs/adding-typescript",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-typescript.md",lastUpdatedBy:"Brody McKee",lastUpdatedAt:1571955461,sidebar:"docs",previous:{title:"Adding Flow",permalink:"/docs/adding-flow"},next:{title:"Adding Relay",permalink:"/docs/adding-relay"}},u={rightToc:i,metadata:p},l="wrapper";function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts@2.1.0")," and higher.")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a typed superset of JavaScript that compiles to plain JavaScript."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"To start a new Create React App project with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),", you can run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-react-app my-app --template typescript\n\n# or\n\nyarn create react-app my-app --template typescript\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you've previously installed ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," globally via ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g create-react-app"),", we recommend you uninstall the package using ",Object(o.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," to ensure that ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," always uses the latest version."),Object(o.b)("p",{parentName:"blockquote"},"Global installs of ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," are no longer supported.")),Object(o.b)("p",null,"To add ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," to a Create React App project, first install it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save typescript @types/node @types/react @types/react-dom @types/jest\n\n# or\n\nyarn add typescript @types/node @types/react @types/react-dom @types/jest\n")),Object(o.b)("p",null,"Next, rename any file to be a TypeScript file (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.js")," to ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.tsx"),") and ",Object(o.b)("strong",{parentName:"p"},"restart your development server"),"!"),Object(o.b)("p",null,"Type errors will show up in the same console as the build one. You'll have to fix these type errors before you continue development or build your project. For advanced configuration, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced-configuration"}),"see here"),"."),Object(o.b)("h2",{id:"getting-started-with-typescript-and-react"},"Getting Started with TypeScript and React"),Object(o.b)("p",null,"You are not required to make a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),Object(o.b)("inlineCode",{parentName:"a"},"tsconfig.json")," file"),", one will be made for you. You are allowed to edit the generated TypeScript configuration."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript Handbook")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react"}),"TypeScript Example on React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"}),"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"If your project is not created with TypeScript enabled, npx may be using a cached version of ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app"),". Remove previously installed versions with ",Object(o.b)("inlineCode",{parentName:"p"},"npm uninstall -g create-react-app")," (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/6119#issuecomment-451614035"}),"#6119"),")."),Object(o.b)("p",null,"If you are currently using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wmonk/create-react-app-typescript/"}),"create-react-app-typescript"),", see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"}),"this blog post")," for instructions on how to migrate to Create React App."),Object(o.b)("p",null,"Constant enums and namespaces are not supported, you can learn about the constraints of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats"}),"using Babel with TypeScript here"),"."))}s.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),l=c(r),s=n,f=l[i+"."+s]||l[s]||u[s]||o;return r?a.a.createElement(f,Object.assign({},{ref:t},p,{components:r})):a.a.createElement(f,Object.assign({},{ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},178:function(e,t,r){"use strict";e.exports=r(179)},179:function(e,t,r){"use strict";var n=r(180),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113;a&&Symbol.for("react.suspense_list");var d=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}function v(){}function w(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var S=w.prototype=new v;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var N={current:null},k={current:null},C=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,n)&&!x.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){for(var u=Array(p),l=0;l<p;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,R=[];function P(e,t,r,n){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var p=!1;if(null===t)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case o:case c:p=!0}}if(p)return n(a,t,""===r?"."+I(t,0):r),1;if(p=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var l=r+I(i=t[u],u);p+=e(i,l,n,a)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),u=0;!(i=t.next()).done;)p+=e(i=i.value,l=r+I(i,u++),n,a);else if("object"===i)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return p}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(E,"$&/")+"/"),A(e,M,t=P(t,o,n,a)),$(t)}function F(){var e=N.current;if(null===e)throw Error(h(321));return e}var D={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,q,t=P(null,null,t,r)),$(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:i,Profiler:u,StrictMode:p,Suspense:b,createElement:T,cloneElement:function(e,t,r){if(null==e)throw Error(h(267,e));var a=n({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,p=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)C.call(t,l)&&!x.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){u=Array(l);for(var s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:p}},createFactory:function(e){var t=T.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},B={default:D},L=B&&D||B;e.exports=L.default||L},180:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,p=c(e),u=1;u<arguments.length;u++){for(var l in r=Object(arguments[u]))a.call(r,l)&&(p[l]=r[l]);if(n){i=n(r);for(var s=0;s<i.length;s++)o.call(r,i[s])&&(p[i[s]]=r[i[s]])}}return p}}}]);