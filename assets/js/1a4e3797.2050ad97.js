"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[62138],{53465:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(96540),a=r(44586);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},41283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var s=r(96540),a=r(44586),n=r(25476),c=r(5260),l=r(28774),o=r(21312),u=r(53465),h=r(20053),i=r(56347),m=r(92303);const d=function(){const e=(0,m.A)(),t=(0,i.W6)(),r=(0,i.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l,searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var p=r(5891),g=r(32384),x=r(86841),f=r(43810),y=r(27674),C=r(2849),S=r(4471),j=r(11088);const v={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var I=r(74848);function w(){const{siteConfig:{baseUrl:e}}=(0,a.A)(),{selectMessage:t}=(0,u.W)(),{searchValue:r,searchContext:n,searchVersion:l,updateSearchPath:i,updateSearchContext:m}=d(),[x,f]=(0,s.useState)(r),[y,S]=(0,s.useState)(),[w,A]=(0,s.useState)(),P=`${e}${l}`,b=(0,s.useMemo)((()=>x?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:x}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[x]);(0,s.useEffect)((()=>{i(x),y&&(x?y(x,(e=>{A(e)})):A(void 0))}),[x,y]);const _=(0,s.useCallback)((e=>{f(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==x&&f(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.Z)(P,n);S((()=>(0,g.m)(e,t,100)))}()}),[n,P]),(0,I.jsxs)(s.Fragment,{children:[(0,I.jsxs)(c.A,{children:[(0,I.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,I.jsx)("title",{children:b})]}),(0,I.jsxs)("div",{className:"container margin-vert--lg",children:[(0,I.jsx)("h1",{children:b}),(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:(0,h.A)("col",{[v.searchQueryColumn]:Array.isArray(j.Hg),"col--9":Array.isArray(j.Hg),"col--12":!Array.isArray(j.Hg)}),children:(0,I.jsx)("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:_,value:x,autoComplete:"off",autoFocus:!0})}),Array.isArray(j.Hg)?(0,I.jsx)("div",{className:(0,h.A)("col","col--3","padding-left--none",v.searchContextColumn),children:(0,I.jsxs)("select",{name:"search-context",className:v.searchContextInput,id:"context-selector",value:n,onChange:e=>m(e.target.value),children:[(0,I.jsx)("option",{value:"",children:j.dz?(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),j.Hg.map((e=>(0,I.jsx)("option",{value:e,children:e},e)))]})}):null]}),!y&&x&&(0,I.jsx)("div",{children:(0,I.jsx)(C.A,{})}),w&&(w.length>0?(0,I.jsx)("p",{children:t(w.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))}):(0,I.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,I.jsx)("section",{children:w&&w.map((e=>(0,I.jsx)(R,{searchResult:e},e.document.i)))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(j.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,I.jsxs)("article",{className:v.searchResultItem,children:[(0,I.jsx)("h2",{children:(0,I.jsx)(l.A,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,x.Z)(h,a):(0,f.C)(h,(0,y.g)(n,"t"),a,100)}})}),u.length>0&&(0,I.jsx)("p",{className:v.searchResultItemPath,children:(0,S.$)(u)}),o&&(0,I.jsx)("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,f.C)(t.t,(0,y.g)(n,"t"),a,100)}})]})}const A=function(){return(0,I.jsx)(n.A,{children:(0,I.jsx)(w,{})})}}}]);