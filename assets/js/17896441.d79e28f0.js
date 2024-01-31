"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27918],{44500:(e,t,s)=>{s.d(t,{Z:()=>U});s(67294);var a=s(86010),n=s(87524),o=s(65130),i=s(92894),l=s(22119),d=s(35281),r=s(93471),c=s(84881);const u={lastUpdated:"lastUpdated_VsjB"};var h=s(85893);function m(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:o}=e;return(0,h.jsxs)("div",{className:(0,a.Z)(d.k.docs.docFooterEditMetaRow,"row"),children:[(0,h.jsx)("div",{className:"col",children:t&&(0,h.jsx)(c.Z,{editUrl:t})}),(0,h.jsx)("div",{className:(0,a.Z)("col",u.lastUpdated),children:(s||n)&&(0,h.jsx)(r.Z,{lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:n})})]})}function v(){const{metadata:e}=(0,o.k)(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:i}=e,l=!!(t||s||i);return l?(0,h.jsx)("footer",{className:(0,a.Z)(d.k.docs.docFooter,"docusaurus-mt-lg"),children:l&&(0,h.jsx)(m,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:n})}):null}var j=s(71526);function x(e){return(0,h.jsx)("div",{className:(0,a.Z)(d.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,h.jsx)("div",{className:"col",children:(0,h.jsx)(j.Z,{...e})})})}function b(){const{metadata:e}=(0,o.k)(),{tags:t}=e,s=t.length>0;return(0,h.jsx)("footer",{className:(0,a.Z)(d.k.docs.docFooter,"docusaurus-mt-lg","margin-top--sm"),children:s&&(0,h.jsx)(x,{tags:t})})}var f=s(6781),p=s(28832),g=s(40842),k=s(1310);const Z={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function U(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=(0,o.k)(),s=(0,n.i)(),a=e.hide_table_of_contents,i=!a&&t.length>0;return{hidden:a,mobile:i?(0,h.jsx)(f.Z,{}):void 0,desktop:!i||"desktop"!==s&&"ssr"!==s?void 0:(0,h.jsx)(p.Z,{})}}();return(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:(0,a.Z)("col",!s.hidden&&Z.docItemCol),children:[(0,h.jsx)(l.Z,{}),(0,h.jsxs)("div",{className:Z.docItemContainer,children:[(0,h.jsxs)("article",{children:[(0,h.jsx)(k.Z,{}),(0,h.jsx)(b,{}),s.mobile,(0,h.jsx)(g.Z,{children:t}),(0,h.jsx)(v,{})]}),(0,h.jsx)(i.Z,{})]})]}),s.desktop&&(0,h.jsx)("div",{className:"col col--3",children:s.desktop})]})}},22119:(e,t,s)=>{s.d(t,{Z:()=>x});s(67294);var a=s(86010),n=s(52263),o=s(39960),i=s(95999),l=s(80143),d=s(35281),r=s(60373),c=s(74477),u=s(85893);const h={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is the development version of the documentation and some features may not yet be available in the stable release."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for Besu version {versionLabel}, which is no longer actively maintained."})}};function m(e){const t=h[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)(o.Z,{to:s,onClick:a,children:(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"stable version"})})},children:" You can switch to the {latestVersionLink} ({versionLabel})."})}function j(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:o}}=(0,n.Z)(),{pluginId:i}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,r.J)(i),{latestDocSuggestion:h,latestVersionSuggestion:j}=(0,l.Jo)(i),x=h??(b=j).docs.find((e=>e.id===b.mainDocId));var b;return(0,u.jsx)("div",{className:(0,a.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:(0,u.jsxs)("div",{children:[(0,u.jsx)(m,{siteTitle:o,versionMetadata:s}),(0,u.jsx)(v,{versionLabel:j.name,to:x.path,onClick:()=>c(j.name)})]})})}function x(e){let{className:t}=e;const s=(0,c.E)();return s.banner?(0,u.jsx)(j,{className:t,versionMetadata:s}):null}}}]);