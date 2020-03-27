/*! For license information please see 52a3cb50.14106f1d.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(6),c=(a(0),a(170)),l=(a(177),a(178),a(175)),o=a(174),s={title:"Azure Quickstart",sidebar_label:"Azure",description:"Run Pinot on Azure"},i={id:"administration/installation/cloud/azure",title:"Azure Quickstart",description:"Run Pinot on Azure",source:"@site/docs/administration/installation/cloud/azure.md",permalink:"/docs/administration/installation/cloud/azure",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/azure.md",sidebar_label:"Azure",sidebar:"docs",previous:{title:"GCP Quickstart",permalink:"/docs/administration/installation/cloud/gcp"},next:{title:"Install Pinot On MacOS",permalink:"/docs/administration/installation/operating-systems/macos"}},u=[{value:"Install Kubectl",id:"install-kubectl",children:[]},{value:"(Optional) Login to your Azure account",id:"optional-login-to-your-azure-account",children:[]},{value:"(Optional) Create a Resource Group",id:"optional-create-a-resource-group",children:[]},{value:"(Optional) Create a Kubernetes cluster(AKS) in Azure",id:"optional-create-a-kubernetes-clusteraks-in-azure",children:[]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],b={rightToc:u},p="wrapper";function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(p,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"To set up a Kubernetes Cluster on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"}),"Azure Kubernetes Service (AKS)")),Object(c.b)("h2",{id:"install-kubectl"},"Install Kubectl"),Object(c.b)("p",null,"Please follow this link (",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"}),"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"For Mac User")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-cli\n")),Object(c.b)("p",null,"Please check kubectl version after installation."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl version\n")),Object(c.b)(l.a,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install Helm")),Object(c.b)("p",null,"Please follow this link (",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://helm.sh/docs/using_helm/#installing-helm"}),"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),Object(c.b)("p",null,"For Mac User"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install kubernetes-helm\n")),Object(c.b)("p",null,"Please check helm version after installation."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"helm version\n")),Object(c.b)(l.a,{icon:!1,type:"info",mdxType:"Alert"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1. Please pick the script based on your helm version."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install Azure CLI")),Object(c.b)("p",null,"Please follow this link to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"}),"install Azure CLI")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"For Mac User")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew update && brew install azure-cli\n")),Object(c.b)("h2",{id:"optional-login-to-your-azure-account"},"(Optional) Login to your Azure account"),Object(c.b)("p",null,"Below script will open default browser to sign-in to ",Object(c.b)("strong",{parentName:"p"},"your Azure Account"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"az login\n")),Object(c.b)("h2",{id:"optional-create-a-resource-group"},"(Optional) Create a Resource Group"),Object(c.b)("p",null,"Below script will create a resource group in location ",Object(c.b)("inlineCode",{parentName:"p"},"eastus"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_RESOURCE_GROUP_LOCATION=eastus\naz group create --name ${AKS_RESOURCE_GROUP} \\\n                --location ${AKS_RESOURCE_GROUP_LOCATION}\n")),Object(c.b)("h2",{id:"optional-create-a-kubernetes-clusteraks-in-azure"},"(Optional) Create a Kubernetes cluster(AKS) in Azure"),Object(c.b)("p",null,"Below script will create a ",Object(c.b)("strong",{parentName:"p"},"3 nodes")," cluster named ",Object(c.b)("strong",{parentName:"p"},"pinot-quickstart")," for demo purposes.\nPlease modify the parameters in the example command below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks create --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME} \\\n              --node-count 3\n")),Object(c.b)("p",null,"Once the command is succeed, it's ready to be used."),Object(c.b)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),Object(c.b)("p",null,"Simply run below command to get the credential for the cluster ",Object(c.b)("strong",{parentName:"p"},"pinot-quickstart")," that you just created or your existing cluster."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks get-credentials --resource-group ${AKS_RESOURCE_GROUP} \\\n                       --name ${AKS_CLUSTER_NAME}\n")),Object(c.b)("p",null,"To verify the connection, you can run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes\n")),Object(c.b)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),Object(c.b)("p",null,"Please follow this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/administration/installation/cloud/on-premises"}),"Kubernetes QuickStart")," to deploy your Pinot Demo."),Object(c.b)(o.a,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),Object(c.b)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks delete --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME}\n")))}m.isMDXComponent=!0},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n),c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},o=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)};var s="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),u=l(a),b=n,p=u[o+"."+b]||u[b]||i[b]||c;return a?r.a.createElement(p,Object.assign({},{ref:t},s,{components:a})):r.a.createElement(p,Object.assign({},{ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},171:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},172:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(19),o=a(173),s=a(8),i=a.n(s);t.a=function(e){const{to:t,href:a}=e,s=t||a,u=Object(o.a)(s),b=Object(r.useRef)(!1),p=i.a.canUseIntersectionObserver;let m;return Object(r.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(s),()=>{p&&m&&m.disconnect()}),[s,p,u]),s&&u?c.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(s),b.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{m=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},173:function(e,t,a){"use strict";function n(e){return/^\/(?!\/)/.test(e)}a.d(t,"a",(function(){return n}))},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(172),l=a(171),o=a.n(l);a(93);t.a=function({children:e,className:t,badge:a,icon:n,size:l,target:s,to:i}){let u=o()("jump-to",`jump-to--${l}`,t),b=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?r.a.createElement("a",{href:i,target:s,className:u},b):r.a.createElement(c.a,{to:i,className:u},b)}},175:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(171),l=a.n(c);a(94);t.a=function({children:e,classNames:t,fill:a,icon:n,type:c}){let o=null;switch(c){case"danger":o="alert-triangle";break;case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return r.a.createElement("div",{className:l()(t,"alert",`alert--${c}`,{"alert--fill":a,"alert--icon":!1!==n}),role:"alert"},!1!==n&&r.a.createElement("i",{className:l()("feather",`icon-${n||o}`)}),e)}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(171),l=a.n(c),o=a(95),s=a.n(o);const i={left:37,right:39};t.a=function(e){const{block:t,children:a,defaultValue:c,values:o}=e,[u,b]=Object(n.useState)(c),p=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:l()("tab-item",s.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case i.right:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i.left:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},178:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);