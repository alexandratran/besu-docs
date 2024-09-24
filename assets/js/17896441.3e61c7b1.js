"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8401],{69102:(e,t,s)=>{s.d(t,{A:()=>L});s(96540);var a=s(20053),n=s(24581),o=s(60542),i=s(23679),l=s(76858),d=s(17559),r=s(19175),c=s(61943);const u={lastUpdated:"lastUpdated_VsjB"};var h=s(74848);function m(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:o}=e;return(0,h.jsxs)("div",{className:(0,a.A)(d.G.docs.docFooterEditMetaRow,"row"),children:[(0,h.jsx)("div",{className:"col",children:t&&(0,h.jsx)(c.A,{editUrl:t})}),(0,h.jsx)("div",{className:(0,a.A)("col",u.lastUpdated),children:(s||n)&&(0,h.jsx)(r.A,{lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:n})})]})}function v(){const{metadata:e}=(0,o.u)(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:i}=e,l=!!(t||s||i);return l?(0,h.jsx)("footer",{className:(0,a.A)(d.G.docs.docFooter,"docusaurus-mt-lg"),children:l&&(0,h.jsx)(m,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:n})}):null}var j=s(62053);function x(e){return(0,h.jsx)("div",{className:(0,a.A)(d.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,h.jsx)("div",{className:"col",children:(0,h.jsx)(j.A,{...e})})})}function b(){const{metadata:e}=(0,o.u)(),{tags:t}=e,s=t.length>0;return(0,h.jsx)("footer",{className:(0,a.A)(d.G.docs.docFooter,"docusaurus-mt-lg","margin-top--sm"),children:s&&(0,h.jsx)(x,{tags:t})})}var A=s(51683),f=s(90206),p=s(25685),g=s(71243);const U={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function L(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=(0,o.u)(),s=(0,n.l)(),a=e.hide_table_of_contents,i=!a&&t.length>0;return{hidden:a,mobile:i?(0,h.jsx)(A.A,{}):void 0,desktop:!i||"desktop"!==s&&"ssr"!==s?void 0:(0,h.jsx)(f.A,{})}}();return(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:(0,a.A)("col",!s.hidden&&U.docItemCol),children:[(0,h.jsx)(l.A,{}),(0,h.jsxs)("div",{className:U.docItemContainer,children:[(0,h.jsxs)("article",{children:[(0,h.jsx)(g.A,{}),(0,h.jsx)(b,{}),s.mobile,(0,h.jsx)(p.A,{children:t}),(0,h.jsx)(v,{})]}),(0,h.jsx)(i.A,{})]})]}),s.desktop&&(0,h.jsx)("div",{className:"col col--3",children:s.desktop})]})}},76858:(e,t,s)=>{s.d(t,{A:()=>x});s(96540);var a=s(20053),n=s(44586),o=s(28774),i=s(21312),l=s(44070),d=s(17559),r=s(53886),c=s(23025),u=s(74848);const h={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is the development version of the documentation and some features may not yet be available in the stable release."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for Besu version {versionLabel}, which is no longer actively maintained."})}};function m(e){const t=h[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)(o.A,{to:s,onClick:a,children:(0,u.jsx)(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"stable version"})})},children:" You can switch to the {latestVersionLink} ({versionLabel})."})}function j(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:o}}=(0,n.A)(),{pluginId:i}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:c}=(0,r.g1)(i),{latestDocSuggestion:h,latestVersionSuggestion:j}=(0,l.HW)(i),x=h??(b=j).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsx)("div",{className:(0,a.A)(t,d.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:(0,u.jsxs)("div",{children:[(0,u.jsx)(m,{siteTitle:o,versionMetadata:s}),(0,u.jsx)(v,{versionLabel:j.name,to:x.path,onClick:()=>c(j.name)})]})})}function x(e){let{className:t}=e;const s=(0,c.r)();return s.banner?(0,u.jsx)(j,{className:t,versionMetadata:s}):null}}}]);