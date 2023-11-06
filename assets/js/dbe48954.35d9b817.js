"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,p]=h({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=s??c;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,i]),tabValues:i}}var b=a(72389);const f="tabList__CuJ",y="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",y,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},80658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),o=a(85162);const l={title:"Authenticate over JSON-RPC requests",sidebar_position:4,description:"Hyperledger Besu authentication and authorization for JSON-RPC",tags:["public networks","private networks"]},s="Authenticate and authorize JSON-RPC",p={unversionedId:"public-networks/how-to/use-besu-api/authenticate",id:"version-23.10.0/public-networks/how-to/use-besu-api/authenticate",title:"Authenticate over JSON-RPC requests",description:"Hyperledger Besu authentication and authorization for JSON-RPC",source:"@site/versioned_docs/version-23.10.0/public-networks/how-to/use-besu-api/authenticate.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/authenticate",permalink:"/23.10.0/public-networks/how-to/use-besu-api/authenticate",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/public-networks/how-to/use-besu-api/authenticate.md",tags:[{label:"public networks",permalink:"/23.10.0/tags/public-networks"},{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1698969477,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:4,frontMatter:{title:"Authenticate over JSON-RPC requests",sidebar_position:4,description:"Hyperledger Besu authentication and authorization for JSON-RPC",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use GraphQL over HTTP",permalink:"/23.10.0/public-networks/how-to/use-besu-api/graphql"},next:{title:"Access logs using JSON-RPC",permalink:"/23.10.0/public-networks/how-to/use-besu-api/access-logs"}},u={},c=[{value:"Username and password authentication",id:"username-and-password-authentication",level:2},{value:"1. Create the credentials file",id:"1-create-the-credentials-file",level:3},{value:"2. Enable authentication",id:"2-enable-authentication",level:3},{value:"3. Generate an authentication token",id:"3-generate-an-authentication-token",level:3},{value:"JWT public key authentication",id:"jwt-public-key-authentication",level:2},{value:"1. Generate a private and public key pair",id:"1-generate-a-private-and-public-key-pair",level:3},{value:"2. Create the JWT",id:"2-create-the-jwt",level:3},{value:"3. Enable authentication",id:"3-enable-authentication",level:3},{value:"JSON-RPC permissions",id:"json-rpc-permissions",level:2},{value:"Use an authentication token to make requests",id:"use-an-authentication-token-to-make-requests",level:2},{value:"Postman",id:"postman",level:3},{value:"cURL",id:"curl",level:3}],m={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authenticate-and-authorize-json-rpc"},"Authenticate and authorize JSON-RPC"),(0,r.kt)("p",null,"Authentication identifies a user, and authorization verifies user access to requested JSON-RPC methods. Hyperledger Besu verifies users using ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens (JWT)"),". JWT is also used in ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/concepts/privacy/multi-tenancy"},"multi-tenancy")," to verify tenant data access."),(0,r.kt)("p",null,"Besu supports two mutually exclusive authentication methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#username-and-password-authentication"},"Username and password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#jwt-public-key-authentication"},"JWT public key"),".")),(0,r.kt)("p",null,"Besu creates JWT internally with ",(0,r.kt)("a",{parentName:"p",href:"#username-and-password-authentication"},"username and password authentication"),", and externally with ",(0,r.kt)("a",{parentName:"p",href:"#jwt-public-key-authentication"},"JWT public key authentication"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using JSON-RPC authentication and authorization with ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is not supported.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To prevent interception of authentication credentials and authenticated tokens, make authenticated requests over HTTPS. We recommend running production deployments behind a network layer that provides SSL termination. Besu does not provide a HTTPS connection natively.")),(0,r.kt)("h2",{id:"username-and-password-authentication"},"Username and password authentication"),(0,r.kt)("p",null,"Enable authentication from the command line. Supply the credentials file and send a request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," endpoint using the username and password. The ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," endpoint creates a JWT for making permitted JSON-RPC requests."),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"#jwt-public-key-authentication"},"public key authentication")," disables the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," endpoint."),(0,r.kt)("h3",{id:"1-create-the-credentials-file"},"1. Create the credentials file"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toml")," credentials file defines user details and the JSON-RPC methods they can access."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Sample ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"auth.toml")," credentials file"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[Users.username1]\npassword = "$2a$10$l3GA7K8g6rJ/Yv.YFSygCuI9byngpEzxgWS9qEg5emYDZomQW7fGC"\npermissions=["net:*","eth:blockNumber"]\nprivacyPublicKey="U7ANiOOd5L9Z/dMxRFjdbhA1Qragw6fLuYgmgCvLoX4="\n\n[Users.username2]\npassword = "$2b$10$6sHt1J0MVUGIoNKvJiK33uaZzUwNmMmJlaVLkIwinkPiS1UBnAnF2"\npermissions=["net:version","admin:*"]\nprivacyPublicKey="quhb1pQPGN1w8ZSZSyiIfncEAlVY/M/rauSyQ5wVMRE="\n'))),(0,r.kt)("p",null,"Each user requiring JSON-RPC access the configuration file lists the:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username. ",(0,r.kt)("inlineCode",{parentName:"li"},"Users.")," is mandatory and followed by the username. That is, replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<username>")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"[Users.<username>]")," with the username."),(0,r.kt)("li",{parentName:"ul"},"Hash of the user password. Use the ",(0,r.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/cli/subcommands#password"},(0,r.kt)("inlineCode",{parentName:"a"},"password hash"))," subcommand to generate the hash."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#json-rpc-permissions"},"JSON-RPC permissions"),"."),(0,r.kt)("li",{parentName:"ul"},"Optional. The tenant's Tessera public key using ",(0,r.kt)("inlineCode",{parentName:"li"},"privacyPublicKey"),". Only used for ",(0,r.kt)("a",{parentName:"li",href:"/23.10.0/private-networks/concepts/privacy/multi-tenancy"},"multi-tenancy"),".")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"besu password hash --password=MyPassword\n"))),(0,r.kt)(o.Z,{label:"Hash output",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$2a$10$L3Xb5G/AJOsEK5SuOn9uzOhpCCfuVWTajc5hwWerY6N5xBM/xlrMK\n")))),(0,r.kt)("h3",{id:"2-enable-authentication"},"2. Enable authentication"),(0,r.kt)("p",null,"To require authentication for the JSON-RPC API, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-enabled"))," or ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-ws-authentication-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-authentication-enabled"))," options."),(0,r.kt)("p",null,"To specify the ",(0,r.kt)("a",{parentName:"p",href:"#1-create-the-credentials-file"},"credentials file"),", use the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-credentials-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-credentials-file"))," and ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-ws-authentication-credentials-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-authentication-credentials-file"))," options."),(0,r.kt)("h3",{id:"3-generate-an-authentication-token"},"3. Generate an authentication token"),(0,r.kt)("p",null,"To generate an authentication token, make a request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," endpoint with your username and password. Specify the HTTP port or the WS port to generate a token to authenticate over HTTP or WS respectively. HTTP and WS requires a different token."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Generate a token for HTTP",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' <JSON-RPC-http-hostname:http-port>/login\n'))),(0,r.kt)(o.Z,{label:"Example for HTTP",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' http://localhost:8545/login\n'))),(0,r.kt)(o.Z,{label:"Generate a token for WS",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' <JSON-RPC-ws-hostname:ws-port>/login\n'))),(0,r.kt)(o.Z,{label:"Example for WS",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' http://localhost:8546/login\n'))),(0,r.kt)(o.Z,{label:"JSON result",value:"tab5",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU1MDQ2MDYwNCwiZXhwIjoxNTUwNDYwOTA0fQ.l2Ycqzl_AyvReXBeUSayOlOMS_E8-DCuz3q0Db0DKD7mqyl6q-giWoEtfdWzUEvZbRRi2_ecKO3N6JkXq7zMKQAJbVAEzobfbaaXWcQEpHOjtnK4_Yz-UPyKiXtu7HGdcdl5Tfx3dKoksbqkBl3U3vFWxzmFnuu3dAISfVJYUNA"\n}\n')))),(0,r.kt)("p",null,"Authentication tokens expire five minutes after generation. If you require access after the token expires, you need to generate a new token."),(0,r.kt)("h2",{id:"jwt-public-key-authentication"},"JWT public key authentication"),(0,r.kt)("p",null,"Enable authentication from the command line and supply the external JWT provider's public key."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"JWT public authentication disables the Besu ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," endpoint, meaning ",(0,r.kt)("a",{parentName:"p",href:"#username-and-password-authentication"},"username and password authentication")," will not work.")),(0,r.kt)("h3",{id:"1-generate-a-private-and-public-key-pair"},"1. Generate a private and public key pair"),(0,r.kt)("p",null,"The private and accompanying public key files must be in ",(0,r.kt)("inlineCode",{parentName:"p"},".pem")," format."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7518#section-3.1"},"key algorithm")," can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RSA with private key length of at least 2048 bits using algorithm ",(0,r.kt)("inlineCode",{parentName:"li"},"RS256"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"RS384")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"RS512"),"."),(0,r.kt)("li",{parentName:"ul"},"ECDSA private key, using ",(0,r.kt)("inlineCode",{parentName:"li"},"ES256")," (",(0,r.kt)("inlineCode",{parentName:"li"},"secp256r1")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"secp256k1"),"), ",(0,r.kt)("inlineCode",{parentName:"li"},"ES384")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ES512"),".")),(0,r.kt)("p",null,"Besu default is ",(0,r.kt)("inlineCode",{parentName:"p"},"RS256"),"."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"RS256 RSA Keys",value:"tab1",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the private key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa -out privateRSAKey.pem 2048\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the public key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl rsa -pubout -in privateRSAKey.pem -pubout -out publicRSAKey.pem\n"))))),(0,r.kt)(o.Z,{label:"ES256 secp256r1 ECDSA Keys",value:"tab2",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the private key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl ecparam -name secp256r1 -genkey -out privateECDSAKey.pem\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate the public key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl ec -in privateECDSAKey.pem -pubout -out publicECDSAKey.pem\n")))))),(0,r.kt)("admonition",{title:"Private key security",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The private key must be kept secret. Never share private keys publicly or on a Web site, even if advertised as secure."),(0,r.kt)("p",{parentName:"admonition"},"Always keep your private keys safe -- ideally using ",(0,r.kt)("a",{parentName:"p",href:"https://connect2id.com/products/nimbus-jose-jwt/examples/pkcs11"},"hardware")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/secrets/identity/identity-token"},"vault")," -- and define a strong security policy and ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/best-practices/token-best-practices"},"best practices"),"."),(0,r.kt)("p",{parentName:"admonition"},"Compromised keys can provide attackers access to you nodes RPC-API.")),(0,r.kt)("h3",{id:"2-create-the-jwt"},"2. Create the JWT"),(0,r.kt)("p",null,"Create the JWT using a trusted authentication provider",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/libraries"},"library")," in your own code."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NicolasMassart/java-jwt-sample-generation/"},"Java code sample to generate JWT using Vertx")," for an example implementation."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The JWT must use one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RS256"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RS384"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RS512"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ES256"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ES384"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"ES512")," algorithms.")),(0,r.kt)("p",null,"Each payload for the JWT must contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#json-rpc-permissions"},"JSON-RPC permissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7519#section-4.1.4"},(0,r.kt)("inlineCode",{parentName:"a"},"exp")," (Expiration Time) claim")),(0,r.kt)("li",{parentName:"ul"},"Optionally, the tenant's Tessera public key using ",(0,r.kt)("inlineCode",{parentName:"li"},"privacyPublicKey"),". Only used for ",(0,r.kt)("a",{parentName:"li",href:"/23.10.0/private-networks/concepts/privacy/multi-tenancy"},"multi-tenancy"),".")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Example JSON Payload",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": ["*:*"],\n  "privacyPublicKey": "2UKH3VJThkOoKskrLFpwoxCnnRARyobV1bEdgseFHTs=",\n  "exp": 1600899999002\n}\n'))),(0,r.kt)(o.Z,{label:"Example JWT result",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example result",src:a(37330).Z,width:"493",height:"486"})))),(0,r.kt)("h3",{id:"3-enable-authentication"},"3. Enable authentication"),(0,r.kt)("p",null,"To require authentication for the JSON-RPC API, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-enabled"))," or ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-ws-authentication-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-authentication-enabled"))," options."),(0,r.kt)("p",null,"To specify the JWT provider's public key file to use with the externally created JWT, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-authentication-jwt-public-key-file"))," or ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-ws-authentication-jwt-public-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-authentication-jwt-public-key-file"))," options."),(0,r.kt)("h2",{id:"json-rpc-permissions"},"JSON-RPC permissions"),(0,r.kt)("p",null,"Each user has a list of permissions strings defining the methods they can access. To give access to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All API methods, specify ",(0,r.kt)("inlineCode",{parentName:"li"},'["*:*"]'),"."),(0,r.kt)("li",{parentName:"ul"},"All API methods in an API group, specify ",(0,r.kt)("inlineCode",{parentName:"li"},'["<api_group>:*"]'),". For example, ",(0,r.kt)("inlineCode",{parentName:"li"},'["eth:*"]'),"."),(0,r.kt)("li",{parentName:"ul"},"Specific API methods, specify ",(0,r.kt)("inlineCode",{parentName:"li"},'["<api_group>:<method_name>"]'),". For example, ",(0,r.kt)("inlineCode",{parentName:"li"},'["admin:peers"]'),".")),(0,r.kt)("p",null,"With authentication enabled, to explicitly specify a user cannot access any methods, include the user with an empty permissions list (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"). Users with an empty permissions list and users not included in the credentials file cannot access any JSON-RPC methods."),(0,r.kt)("h2",{id:"use-an-authentication-token-to-make-requests"},"Use an authentication token to make requests"),(0,r.kt)("p",null,"Specify the authentication token as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer")," token in the JSON-RPC request header."),(0,r.kt)("h3",{id:"postman"},"Postman"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Authorization")," tab in the ",(0,r.kt)("strong",{parentName:"p"},"TYPE")," drop-down list, select ",(0,r.kt)("strong",{parentName:"p"},"Bearer Token")," and specify the token (generated either ",(0,r.kt)("a",{parentName:"p",href:"#2-create-the-jwt"},"externally")," or by the ",(0,r.kt)("a",{parentName:"p",href:"#3-generate-an-authentication-token"},(0,r.kt)("inlineCode",{parentName:"a"},"login")," request"),")."),(0,r.kt)("h3",{id:"curl"},"cURL"),(0,r.kt)("p",null,"Specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer")," in the header."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"cURL Request with authentication placeholders",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H \'Authorization: Bearer <JWT_TOKEN>\' -d \'{"jsonrpc":"2.0","method":"<API_METHOD>","params":[],"id":1}\' <JSON-RPC-http-hostname:port>\n'))),(0,r.kt)(o.Z,{label:"cURL Request with authentication",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU1MDQ2MTQxNiwiZXhwIjoxNTUwNDYxNzE2fQ.WQ1mqpqzRLHaoL8gOSEZPvnRs_qf6j__7A3Sg8vf9RKvWdNTww_vRJF1gjcVy-FFh96AchVnQyXVx0aNUz9O0txt8VN3jqABVWbGMfSk2T_CFdSw5aDjuriCsves9BQpP70Vhj-tseaudg-XU5hCokX0tChbAqd9fB2138zYm5M\' -d \'{"jsonrpc":"2.0","method":"net_listening","params":[],"id":1}\' http://localhost:8545\n')))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"for example ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/"},"Auth0")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"Keycloak"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},37330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jwt-49a83901a587794e24b4684fc0a089b2.png"}}]);