"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8611],{8611:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var s=l(9636),a=l(3238),r=l(7190),o=l(6685),i=l(7829),u=l(1630),n=l(8430),c=l(2549);const h=["/DailyRoutine.html","/Fitness.html","/","/blog.html","/intro.html","/posts/2024-09-13-blog_markdown01.html","/posts/2024-09-13-blog_tkserver.html","/posts/2024-09-26-blog_linuxshell.html","/posts/2024-09-27-blog_Upgrading%20MySQL.html","/posts/2024-09-27-blog_dropcaches.html","/posts/2024-09-29-blog_win_mysql.html","/posts/2024-0927-blog_linuxcurl.html","/posts/2024-10-10-blog_redis.html","/posts/2024-10-17-blog_openssh_l.html","/posts/2024-10-23-blog_excel01.html","/posts/2024-10-24-blog_linuxdisk.html","/posts/2024-10-24-blog_linuxsed.html","/posts/2024-10-25-blog_mongodb.html","/posts/2024-10-30-blog_win_java01.html","/apps/Applist.html","/apps/Chrome.html","/apps/design.html","/apps/toolbox.html","/code/AutoHotkey.html","/code/Electron.html","/code/HTML.html","/code/Javascript.html","/code/Markdown.html","/code/Python.html","/code/","/code/Regex.html","/code/Vue.html","/deploy/CloudServices.html","/deploy/Cloudflare.html","/deploy/DNS.html","/deploy/GitHub.html","/deploy/MySQL.html","/deploy/Static.html","/deploy/VPS.html","/family/Coupon.html","/family/Diet.html","/family/Life.html","/web/Comments.html","/web/VuePress.html","/web/docsify.html","/xiashuo/bpxxuo.html","/xiashuo/other.html","/apps/iso/","/apps/iso/Windows.html","/apps/topic/","/apps/topic/topic01.html","/apps/topic/topic02anytitle.html","/404.html","/posts/","/apps/","/deploy/","/family/","/web/","/xiashuo/","/category/","/category/%E7%BD%91%E7%AB%99%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F/","/category/linux/","/category/mysql/","/category/curl/","/category/redis/","/category/centos/","/category/%E5%AE%89%E5%85%A8/","/category/excel/","/category/mongodb/","/category/windows/","/tag/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/markdown/","/tag/twikoo/","/tag/linux/","/tag/mysql/","/tag/drop-caches/","/tag/curl/","/tag/redis/","/tag/max-open-files/","/tag/openssh/","/tag/openssl/","/tag/%E5%90%88%E5%B9%B6%E5%8D%95%E5%85%83%E6%A0%BC/","/tag/disk/","/tag/%E6%9C%8D%E5%8A%A1%E5%AE%95%E6%9C%BA/","/tag/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F/","/article/","/star/","/timeline/"];l(5034);const p=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),d=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:v}=c.s,m=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var y=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:t}){const l=(0,u.rd)(),h=(0,u.Zv)(),y=(0,s.s5)(c.a),{enabled:g,addQueryHistory:E,queryHistory:b,removeQueryHistory:f}=(()=>{const{queryHistoryCount:e}=c.s,t=e>0;return{enabled:t,queryHistory:p,addQueryHistory:l=>{t&&(p.value=Array.from(new Set([l,...p.value.slice(0,e-1)])))},removeQueryHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),{enabled:x,resultHistory:w,addResultHistory:k,removeResultHistory:H}=(()=>{const e=v>0;return{enabled:e,resultHistory:m,addResultHistory:t=>{if(e){const e={link:d(t),display:t.display};"header"in t&&(e.header=t.header),m.value=[e,...m.value.slice(0,v-1)]}},removeResultHistory:e=>{m.value=[...m.value.slice(0,e),...m.value.slice(e+1)]}}})(),_=g||x,A=(0,o.lW)(e,"queries"),{results:C,isSearching:Q}=(e=>{const t=(0,c.u)(),l=(0,u.Zv)(),s=(0,u.BV)(),a=(0,o.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,o.IJ)([]);return(0,i.sV)((()=>{const{search:o,terminate:u}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:u,suggestionsFilter:n,...c}=t.value;r?(a.value+=1,o(e.join(" "),l.value,c).then((e=>i(e,r,l.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,l],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{u()}))})),{isSearching:n,results:h}})(A),R=(0,o.Kh)({isQuery:!0,index:0}),B=(0,o.KR)(0),S=(0,o.KR)(0),q=(0,i.EW)((()=>_&&(b.value.length>0||w.value.length>0))),D=(0,i.EW)((()=>C.value.length>0)),F=(0,i.EW)((()=>C.value[B.value]||null)),M=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),W=e=>{if("customField"===e.type){const t=c.b[e.index]||"$content",[l,a=""]=(0,s.Qd)(t)?t[h.value].split("$content"):t.split("$content");return e.display.map((e=>(0,i.h)("div",M([l,...e,a]))))}return e.display.map((e=>(0,i.h)("div",M(e))))},L=()=>{B.value=0,S.value=0,t("updateQuery",""),t("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(D.value){if("ArrowUp"===s.key)S.value>0?S.value-=1:(B.value=B.value>0?B.value-1:C.value.length-1,S.value=F.value.contents.length-1);else if("ArrowDown"===s.key)S.value<F.value.contents.length-1?S.value+=1:(B.value=B.value<C.value.length-1?B.value+1:0,S.value=0);else if("Enter"===s.key){const t=F.value.contents[S.value];E(e.queries.join(" ")),k(t),l.push(d(t)),L()}}else if(x)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:t}=R;0===t?(R.isQuery=!e,R.index=e?w.value.length-1:b.value.length-1):R.index=t-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:t}=R;t===(e?b.value.length-1:w.value.length-1)?(R.isQuery=!e,R.index=0):R.index=t+1})();else if("Enter"===s.key){const{index:e}=R;R.isQuery?(t("updateQuery",b.value[e]),s.preventDefault()):(l.push(w.value[e].link),L())}})),(0,i.wB)([B,S],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!D.value:!q.value}],id:"search-pro-results"},e.queries.length?Q.value?(0,i.h)(n.S,{hint:y.value.searching}):D.value?(0,i.h)("ul",{class:"search-pro-result-list"},C.value.map((({title:t,contents:l},s)=>{const a=B.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},t||y.value.defaultTitle),l.map(((t,l)=>{const s=a&&S.value===l;return(0,i.h)(u.Wt,{to:d(t),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{E(e.queries.join(" ")),k(t),L()}},(()=>["text"===t.type?null:(0,i.h)("title"===t.type?n.T:"heading"===t.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===t.type&&t.header?(0,i.h)("div",{class:"content-header"},t.header):null,(0,i.h)("div",W(t))])]))}))])}))):y.value.emptyResult:_?q.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},y.value.queryHistory),b.value.map(((e,l)=>(0,i.h)("div",{class:["search-pro-result-item",{active:R.isQuery&&R.index===l}],onClick:()=>{t("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),f(l)}})])))])):null,x?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},y.value.resultHistory),w.value.map(((e,t)=>(0,i.h)(u.Wt,{to:e.link,class:["search-pro-result-item",{active:!R.isQuery&&R.index===t}],onClick:()=>{L()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>M(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),H(t)}})]))))])):null]:y.value.emptyHistory:y.value.emptyResult)}})}}]);