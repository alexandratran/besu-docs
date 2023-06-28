"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27918],{44500:(e,t,a)=>{a.d(t,{Z:()=>L});var n=a(67294),l=a(86010),s=a(87524),o=a(65130),r=a(92894),i=a(22119),c=a(35281),d=a(93471),m=a(84881);const u={lastUpdated:"lastUpdated_VsjB"};function v(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:o}=e;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(m.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",u.lastUpdated)},(a||s)&&n.createElement(d.Z,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:s})))}function E(){const{metadata:e}=(0,o.k)(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r}=e,i=!!(t||a||r);return i?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},i&&n.createElement(v,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s})):null}var b=a(71526);function h(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(b.Z,e)))}function f(){const{metadata:e}=(0,o.k)(),{tags:t}=e,a=t.length>0;return n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg","margin-top--sm")},a&&n.createElement(h,{tags:t}))}var p=a(6781),g=a(28832),k=a(28221),Z=a(1310);const U={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function L(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=(0,o.k)(),a=(0,s.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(p.Z,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(g.Z,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!a.hidden&&U.docItemCol)},n.createElement(i.Z,null),n.createElement("div",{className:U.docItemContainer},n.createElement("article",null,n.createElement(Z.Z,null),n.createElement(f,null),a.mobile,n.createElement(k.Z,null,t),n.createElement(E,null)),n.createElement(r.Z,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}},22119:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(86010),s=a(52263),o=a(39960),r=a(95999),i=a(80143),c=a(35281),d=a(60373),m=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is the development version of the documentation and some features may not yet be available in the stable release.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for Besu version {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement(o.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"stable version"))}}," You can switch to the {latestVersionLink} ({versionLabel}).")}function b(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:o}}=(0,s.Z)(),{pluginId:r}=(0,i.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(r),{latestDocSuggestion:u,latestVersionSuggestion:b}=(0,i.Jo)(r),h=u??(f=b).docs.find((e=>e.id===f.mainDocId));var f;return n.createElement("div",{className:(0,l.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:o,versionMetadata:a}),n.createElement(E,{versionLabel:b.name,to:h.path,onClick:()=>m(b.name)})))}function h(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}}}]);