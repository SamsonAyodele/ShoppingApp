if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const t=e=>s(e,f),c={module:{uri:f},exports:o,require:t};i[f]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-27547b5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"asset/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"asset/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"dexie.min.js",revision:"b13495b45cc618ff99998f1aacddc632"},{url:"index.html",revision:"3f5aa1e56aaaa008bfb6d701213729be"},{url:"README.md",revision:"fc967b3a8292ff7d7081d39e6f581d4f"},{url:"script.js",revision:"21163bb05c8ab2cfa2eec46fae8a8829"},{url:"style.css",revision:"b928ddb8553379674c80e00a9fba1af7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map