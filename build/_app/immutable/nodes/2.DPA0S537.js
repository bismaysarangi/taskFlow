import{a as y,t as D,n as ne}from"../chunks/disclose-version.DVDfKPOb.js";import"../chunks/legacy.BOPDpHUB.js";import{w as he,L as me,i as x,B as F,j as _e,K as ke,al as le,N as pe,O as $,P as K,A as L,as as O,Q as oe,R as ie,V as be,y as ee,at as xe,au as ye,a9 as we,av as Te,aw as Ee,x as Ie,ai as Ae,ab as De,X as Se,E as te,ax as Me,ay as Ce,az as Ne,ag as Le,aA as Be,aB as Oe,aC as Re,b as He,ao as Pe,p as R,o as k,q as _,v as w,t as j,m as H,g as M,G as S,k as ze,aD as Ve,aE as Y}from"../chunks/runtime.DyVzdBaq.js";import{i as P}from"../chunks/lifecycle.1KwN2U2q.js";import{p as C,i as W,s as de,b as ue,c as qe}from"../chunks/props.YLoWuLsu.js";import{a as Fe,l as Ke,e as A,s as Q,r as Ye}from"../chunks/render.BwbCjm5k.js";import{w as ve}from"../chunks/index.BjD1dZ2y.js";function Ge(t,e){return e}function Je(t,e,a,s){for(var r=[],n=e.length,d=0;d<n;d++)ye(e[d].e,r,!0);var u=n>0&&r.length===0&&a!==null;if(u){var v=a.parentNode;we(v),v.append(a),s.clear(),I(t,e[0].prev,e[n-1].next)}Te(r,()=>{for(var c=0;c<n;c++){var h=e[c];u||(s.delete(h.k),I(t,h.prev,h.next)),Ee(h.e,!u)}})}function Xe(t,e,a,s,r,n=null){var d=t,u={flags:e,items:new Map,first:null};{var v=t;d=x?F(Ie(v)):v.appendChild(he())}x&&_e();var c=null,h=!1;me(()=>{var l=a(),f=ke(l)?l:l==null?[]:le(l),o=f.length;if(h&&o===0)return;h=o===0;let i=!1;if(x){var m=d.data===pe;m!==(o===0)&&(d=$(),F(d),K(!1),i=!0)}if(x){for(var p=null,T,g=0;g<o;g++){if(L.nodeType===8&&L.data===Ae){d=L,i=!0,K(!1);break}var b=f[g],B=s(b,g);T=ce(L,u,p,null,b,B,g,r,e),u.items.set(B,T),p=T}o>0&&F($())}if(!x){var N=De;je(f,u,d,r,e,(N.f&O)!==0,s)}n!==null&&(o===0?c?oe(c):c=ie(()=>n(d)):c!==null&&be(c,()=>{c=null})),i&&K(!0),a()}),x&&(d=L)}function je(t,e,a,s,r,n,d,u){var v=t.length,c=e.items,h=e.first,l=h,f,o=null,i=[],m=[],p,T,g,b;for(b=0;b<v;b+=1){if(p=t[b],T=d(p,b),g=c.get(T),g===void 0){var B=l?l.e.nodes_start:a;o=ce(B,e,o,o===null?e.first:o.next,p,T,b,s,r),c.set(T,o),i=[],m=[],l=o.next;continue}if(Qe(g,p,b),g.e.f&O&&oe(g.e),g!==l){if(f!==void 0&&f.has(g)){if(i.length<m.length){var N=m[0],E;o=N.prev;var Z=i[0],V=i[i.length-1];for(E=0;E<i.length;E+=1)ae(i[E],N,a);for(E=0;E<m.length;E+=1)f.delete(m[E]);I(e,Z.prev,V.next),I(e,o,Z),I(e,V,N),l=N,o=V,b-=1,i=[],m=[]}else f.delete(g),ae(g,l,a),I(e,g.prev,g.next),I(e,g,o===null?e.first:o.next),I(e,o,g),o=g;continue}for(i=[],m=[];l!==null&&l.k!==T;)(n||!(l.e.f&O))&&(f??(f=new Set)).add(l),m.push(l),l=l.next;if(l===null)continue;g=l}i.push(g),o=g,l=g.next}if(l!==null||f!==void 0){for(var q=f===void 0?[]:le(f);l!==null;)(n||!(l.e.f&O))&&q.push(l),l=l.next;var fe=q.length;if(fe>0){var ge=v===0?a:null;Je(e,q,ge,c)}}ee.first=e.first&&e.first.e,ee.last=o&&o.e}function Qe(t,e,a,s){xe(t.v,e),t.i=a}function ce(t,e,a,s,r,n,d,u,v,c){var h=(v&Ce)!==0,l=(v&Ne)===0,f=h?l?Se(r):te(r):r,o=v&Me?te(d):d,i={i:o,v:f,k:n,a:null,e:null,prev:a,next:s};try{return i.e=ie(()=>u(t,f,o),x),i.e.prev=a&&a.e,i.e.next=s&&s.e,a===null?e.first=i:(a.next=i,a.e.next=i.e),s!==null&&(s.prev=i,s.e.prev=i.e),i}finally{}}function ae(t,e,a){for(var s=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,n=t.e.nodes_start;n!==s;){var d=Le(n);r.before(n),n=d}}function I(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ue(t){if(x){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var s=t.value;re(t,"value",null),t.value=s}if(t.hasAttribute("checked")){var r=t.checked;re(t,"checked",null),t.checked=r}}};t.__on_r=a,Be(a),Fe()}}function re(t,e,a,s){var r=t.__attributes??(t.__attributes={});x&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Oe]=a),t.removeAttribute(e))}function se(t,e,a=e){var s=Re();Ke(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=G(t)?J(n):n,a(n),s&&n!==(n=e())){var d=t.selectionStart,u=t.selectionEnd;t.value=n??"",u!==null&&(t.selectionStart=d,t.selectionEnd=Math.min(u,t.value.length))}}),(x&&t.defaultValue!==t.value||He(e)==null&&t.value)&&a(G(t)?J(t.value):t.value),Pe(()=>{var r=e();G(t)&&r===J(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function G(t){var e=t.type;return e==="number"||e==="range"}function J(t){return t===""?null:+t}function We(t){return function(...e){var a=e[0];return a.preventDefault(),t==null?void 0:t.apply(this,e)}}const Ze={todo:[{title:"Learn Svelte",description:"Study Svelte fundamentals"},{title:"Build TaskFlow",description:"Create a task management app"}],inProgress:[{title:"Setup Project",description:"Initialize project with SvelteKit"}],completed:[{title:"Install Dependencies",description:"Install required packages"}]},$e=()=>{const{subscribe:t,update:e}=ve(Ze);return{subscribe:t,addTask:(a,s)=>e(r=>(r[a]=[...r[a],s],r)),moveTask:(a,s,r)=>e(n=>{const d=n[a].splice(r,1)[0];return n[s].push(d),n}),deleteTask:(a,s)=>e(r=>(r[a].splice(s,1),r))}},z=$e();var et=D('<p class="text-sm text-gray-600 dark:text-gray-300 mt-1"> </p>'),tt=D('<div class="bg-white dark:bg-gray-700 p-3 rounded shadow cursor-move hover:shadow-md transition-all flex justify-between items-center" draggable="true"><div><h3 class="font-semibold text-gray-800 dark:text-white"> </h3> <!></div> <button class="ml-4 px-2 py-1 bg-emerald-400 text-white rounded hover:bg-red-600 text-sm">Delete</button></div>');function at(t,e){R(e,!1);let a=C(e,"task",8),s=C(e,"columnId",8),r=C(e,"index",8);function n(i){i.dataTransfer.setData("text/plain",JSON.stringify({columnId:s(),index:r()}))}function d(){z.deleteTask(s(),r())}P();var u=tt(),v=k(u),c=k(v),h=k(c,!0);_(c);var l=w(c,2);{var f=i=>{var m=et(),p=k(m,!0);_(m),j(()=>Q(p,a().description)),y(i,m)};W(l,i=>{a().description&&i(f)})}_(v);var o=w(v,2);_(u),j(()=>Q(h,a().title)),A("click",o,d),A("dragstart",u,n),y(t,u),H()}var rt=D('<textarea placeholder="Add description (optional)" rows="2" class="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition-colors"></textarea> <div class="flex justify-end space-x-2"><button type="button" class="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Cancel</button> <button type="submit" class="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Add Task</button></div>',1),st=D('<form class="mt-4 space-y-2"><input placeholder="Add new task" class="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"> <!></form>');function nt(t,e){R(e,!1);let a=C(e,"id",8),s=Y(""),r=Y(""),n=Y(!1);function d(){M(s).trim()&&(z.addTask(a(),{title:M(s),description:M(r)}),S(s,""),S(r,""),S(n,!1))}P();var u=st(),v=k(u);Ue(v);var c=w(v,2);{var h=l=>{var f=rt(),o=ze(f);Ye(o);var i=w(o,2),m=k(i);Ve(2),_(i),se(o,()=>M(r),p=>S(r,p)),A("click",m,()=>S(n,!1)),y(l,f)};W(c,l=>{M(n)&&l(h)})}_(u),se(v,()=>M(s),l=>S(s,l)),A("focus",v,()=>S(n,!0)),A("submit",u,We(d)),y(t,u),H()}var lt=D('<div class="w-full md:w-1/3 bg-gray-200 dark:bg-gray-800 rounded-lg p-4 transition-colors"><h2 class="font-bold mb-4 text-gray-700 dark:text-gray-200"> </h2> <div class="space-y-2 min-h-[200px]"></div> <!></div>');function X(t,e){R(e,!1);let a=C(e,"title",8),s=C(e,"id",8),r=C(e,"tasks",8);function n(f){f.preventDefault()}function d(f){f.preventDefault();const o=JSON.parse(f.dataTransfer.getData("text/plain"));o.columnId!==s()&&z.moveTask(o.columnId,s(),o.index)}P();var u=lt(),v=k(u),c=k(v,!0);_(v);var h=w(v,2);Xe(h,5,r,Ge,(f,o,i)=>{at(f,{get task(){return M(o)},get columnId(){return s()},index:i})}),_(h);var l=w(h,2);nt(l,{get id(){return s()}}),_(u),j(()=>Q(c,a())),A("dragover",u,n),A("drop",u,d),y(t,u),H()}var ot=D('<div class="flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:overflow-x-auto min-h-screen"><!> <!> <!></div>');function it(t,e){R(e,!1);const a=de(),s=()=>ue(z,"$tasks",a);P();var r=ot(),n=k(r);X(n,{title:"To Do",id:"todo",get tasks(){return s().todo}});var d=w(n,2);X(d,{title:"In Progress",id:"inProgress",get tasks(){return s().inProgress}});var u=w(d,2);X(u,{title:"Completed",id:"completed",get tasks(){return s().completed}}),_(r),y(t,r),H()}const dt=typeof window<"u"?localStorage.getItem("theme"):"light",U=ve(dt==="dark");typeof window<"u"&&U.subscribe(t=>{localStorage.setItem("theme",t?"dark":"light"),t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")});var ut=ne('<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'),vt=ne('<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'),ct=D('<button class="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle theme"><!></button>');function ft(t){const e=de(),a=()=>ue(U,"$darkMode",e);function s(){qe(U,!a())}var r=ct(),n=k(r);{var d=v=>{var c=ut();y(v,c)},u=v=>{var c=vt();y(v,c)};W(n,v=>{a()?v(d):v(u,!1)})}_(r),A("click",r,s),y(t,r)}var gt=D('<main class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"><div class="container mx-auto py-8"><h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">TaskFlow</h1> <!></div> <!></main>');function yt(t){var e=gt(),a=k(e),s=w(k(a),2);it(s,{}),_(a);var r=w(a,2);ft(r),_(e),y(t,e)}export{yt as component};