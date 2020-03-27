(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(170)),c={id:"pinot-architecture",title:"Pinot Architecture",sidebar_label:"Pinot Architecture"},o={id:"concepts/pinot-architecture",title:"Pinot Architecture",description:"![Arch](../../static/img/pinot-architecture.png)",source:"@site/docs/concepts/pinot-architecture.md",permalink:"/docs/concepts/pinot-architecture",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/concepts/pinot-architecture.md",sidebar_label:"Pinot Architecture"},p=[],s={rightToc:p},l="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../../static/img/pinot-architecture.png",alt:"Arch"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Terminology:\nFirst, a bit of naming notions. Pinot has has different components, and different ways of representing the data. In particular, data is represented by:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Table:\nA table is a logical abstraction to refer to a collection of related data. It consists of columns and rows (documents).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Segment:\nData in table is divided into (horizontal) shards referred to as segments."))))}u.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=c(n),u=r,d=l[o+"."+u]||l[u]||s[u]||i;return n?a.a.createElement(d,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(d,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=l;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);