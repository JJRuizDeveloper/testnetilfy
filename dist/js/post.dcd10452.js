"use strict";(self["webpackChunk_27_public_api"]=self["webpackChunk_27_public_api"]||[]).push([[913],{6657:function(t,s,o){function e(t,s,o){return s in t?Object.defineProperty(t,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[s]=o,t}o.d(s,{Z:function(){return c}});var a=o(4870);class n{constructor(){e(this,"post",void 0),e(this,"posts",void 0),this.post=(0,a.iH)({}),this.posts=(0,a.iH)([])}getPost(){return this.post}getPosts(){return this.posts}async fetchAll(){try{const t="https://jsonplaceholder.typicode.com/posts",s=await fetch(t),o=await s.json();this.posts.value=await o}catch(t){console.log(t)}}async fetchById(t){try{const s=`https://jsonplaceholder.typicode.com/posts/${t}`,o=await fetch(s),e=await o.json();this.post.value=await e}catch(s){console.log(s)}}}var c=n},1869:function(t,s,o){o.r(s),o.d(s,{default:function(){return f}});var e=o(3396),a=o(7139);const n={class:"post-container"},c={class:"post-card"},i=(0,e.Uk)("Volver atrás");function r(t,s,o,r,l,p){const u=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("div",c,[(0,e._)("h3",null,(0,a.zw)(t.post.title),1),(0,e._)("p",null,(0,a.zw)(t.post.body),1)]),(0,e.Wm)(u,{to:"/posts",class:"link"},{default:(0,e.w5)((()=>[i])),_:1})])}var l=o(678),p=o(6657),u=(0,e.aZ)({name:"PostView",setup(){const t=new p.Z,s=t.getPost();return(0,e.bv)((async()=>{const s=(0,l.yj)();let o=s.params.id;await t.fetchById(o)})),{post:s}}}),h=o(89);const d=(0,h.Z)(u,[["render",r],["__scopeId","data-v-6f52ae0a"]]);var f=d}}]);
//# sourceMappingURL=post.dcd10452.js.map