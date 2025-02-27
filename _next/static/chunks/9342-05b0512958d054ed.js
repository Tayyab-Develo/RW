(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9342],{92e3:function(t,e,r){"use strict";var n=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(t,e)=>s(t,"name",{value:e,configurable:!0}),l=(t,e,r,n)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let o of a(e))u.call(t,o)||o===r||s(t,o,{get:()=>e[o],enumerable:!(n=i(e,o))||n.enumerable});return t},p=(t,e,r)=>(r=null!=t?n(o(t)):{},l(!e&&t&&t.__esModule?r:s(r,"default",{value:t,enumerable:!0}),t)),h={};((t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})})(h,{Next13ProgressBar:()=>w,default:()=>P,useRouter:()=>y}),t.exports=l(s({},"__esModule",{value:!0}),h);var d=p(r(2265)),f=p(r(14918)),m=r(24033),g=d.default.memo(({color:t="#0A2FFF",height:e="2px",options:r,showOnShallow:n=!1,delay:s=0,style:i})=>{let a=d.default.createElement("style",null,i||`
          #nprogress {
            pointer-events: none;
          }
          
          #nprogress .bar {
            background: ${t};
          
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
          
            width: 100%;
            height: ${e};
          }
          
          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
            opacity: 1.0;
          
            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }
          
          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }
          
          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
          
            border: solid 2px transparent;
            border-top-color: ${t};
            border-left-color: ${t};
            border-radius: 50%;
          
            -webkit-animation: nprogress-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
          }
          
          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }
          
          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }
          
          @-webkit-keyframes nprogress-spinner {
            0%   { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
          @keyframes nprogress-spinner {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `);f.default.configure(r||{});let o=(0,m.usePathname)(),u=(0,m.useSearchParams)();return(0,d.useEffect)(()=>{f.default.done()},[o,u]),(0,d.useEffect)(()=>{let t,e=c(()=>{t=setTimeout(f.default.start,s)},"startProgress"),r=c(()=>{clearTimeout(t),f.default.done()},"stopProgress"),i=c(t=>{let r=t.currentTarget;if("_self"!==r.target&&r.target?.trim()!==""||r.hasAttribute("download"))return;let s=new URL(r.href),i=new URL(location.href),a=s?.searchParams?.toString()!==i?.searchParams?.toString()&&s?.search!==i?.search,o=s?.pathname===i?.pathname&&!a;t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n&&o||o||e()},"handleAnchorClick"),a=c(()=>{Array.from(document.querySelectorAll("a")).filter(t=>!(t.href.startsWith("tel:+")||t.href.startsWith("mailto:"))&&("_self"===t.target||t.target?.trim()==="")&&t.href).forEach(t=>t.addEventListener("click",i))},"handleMutation");new MutationObserver(a).observe(document,{childList:!0,subtree:!0}),window.history.pushState=new Proxy(window.history.pushState,{apply:(t,e,n)=>(r(),t.apply(e,n))})},[]),a},()=>!0);function y(){let t=(0,m.useRouter)(),e=(0,m.usePathname)();function r(r,n){let s=new URL(r,location.href),i=new URL(location.href),a=s?.searchParams?.toString()!==i?.searchParams?.toString()&&s?.search!==i?.search;return s.pathname!==e||a?(f.default.start(),t.push(r,n)):Promise.resolve(!0)}function n(r,n){return new URL(r,location.href).pathname===e?Promise.resolve(!0):(f.default.start(),t.replace(r,n))}return c(r,"push"),c(n,"replace"),{...t,push:r,replace:n}}c(y,"useRouter");var v=p(r(2265));function b(t){return c(function(e){return v.default.createElement(v.default.Suspense,null,v.default.createElement(t,{...e}))},"WithSuspenseComponent")}c(b,"withSuspense");var w=b(g),P=w},24033:function(t,e,r){t.exports=r(50094)},14918:function(t,e,r){var n,s;void 0!==(s="function"==typeof(n=function(){var t,e,r,n={};n.version="0.2.0";var s=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,r){return t<e?e:t>r?r:t}n.configure=function(t){var e,r;for(e in t)void 0!==(r=t[e])&&t.hasOwnProperty(e)&&(s[e]=r);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=i(t,s.minimum,1),n.status=1===t?null:t;var r=n.render(!e),u=r.querySelector(s.barSelector),c=s.speed,l=s.easing;return r.offsetWidth,a(function(e){var i,a;""===s.positionUsing&&(s.positionUsing=n.getPositioningCSS()),o(u,(i=t,(a="translate3d"===s.positionUsing?{transform:"translate3d("+(-1+i)*100+"%,0,0)"}:"translate"===s.positionUsing?{transform:"translate("+(-1+i)*100+"%,0)"}:{"margin-left":(-1+i)*100+"%"}).transition="all "+c+"ms "+l,a)),1===t?(o(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){o(r,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},c)},c)):setTimeout(e,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},s.trickleSpeed)};return s.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*s.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()&&(0===e&&n.start(),t++,e++,r.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=s.template;var r,i,a=e.querySelector(s.barSelector),u=t?"-100":(-1+(n.status||0))*100,l=document.querySelector(s.parent);return o(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),!s.showSpinner&&(i=e.querySelector(s.spinnerSelector))&&h(i),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(s.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective" in t?"translate3d":e+"Transform" in t?"translate":"margin"};var a=(r=[],function(t){r.push(t),1==r.length&&function t(){var e=r.shift();e&&e(t)}()}),o=function(){var t=["Webkit","O","Moz","ms"],e={};function r(r,n,s){var i;n=e[i=(i=n).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]||(e[i]=function(e){var r=document.body.style;if(e in r)return e;for(var n,s=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);s--;)if((n=t[s]+i)in r)return n;return e}(i)),r.style[n]=s}return function(t,e){var n,s,i=arguments;if(2==i.length)for(n in e)void 0!==(s=e[n])&&e.hasOwnProperty(n)&&r(t,n,s);else r(t,i[1],i[2])}}();function u(t,e){return("string"==typeof t?t:p(t)).indexOf(" "+e+" ")>=0}function c(t,e){var r=p(t),n=r+e;u(r,e)||(t.className=n.substring(1))}function l(t,e){var r,n=p(t);u(t,e)&&(r=n.replace(" "+e+" "," "),t.className=r.substring(1,r.length-1))}function p(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?n.call(e,r,e,t):n)&&(t.exports=s)},18354:function(t,e,r){"use strict";r.d(e,{Gm:function(){return s},Qy:function(){return o},ZF:function(){return u}});var n=r(40300);function s(t){return{onFetch:(e,r)=>{let s=async()=>{let r;let s=e.options,o=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],c=e.state.data?.pageParams||[],l=!1,p=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?l=!0:e.signal.addEventListener("abort",()=>{l=!0}),e.signal)})},h=(0,n.cG)(e.options,e.fetchOptions),d=async(t,r,s)=>{if(l)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:r,direction:s?"backward":"forward",meta:e.options.meta};p(i);let a=await h(i),{maxPages:o}=e.options,u=s?n.Ht:n.VX;return{pages:u(t.pages,a,o),pageParams:u(t.pageParams,r,o)}};if(o&&u.length){let t="backward"===o,e=t?a:i,n={pages:u,pageParams:c},l=e(s,n);r=await d(n,l,t)}else{r=await d({pages:[],pageParams:[]},c[0]??s.initialPageParam);let e=t??u.length;for(let t=1;t<e;t++){let t=i(s,r);if(null==t)break;r=await d(r,t)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(s,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=s}}}function i(t,{pages:e,pageParams:r}){let n=e.length-1;return e.length>0?t.getNextPageParam(e[n],e,r[n],r):void 0}function a(t,{pages:e,pageParams:r}){return e.length>0?t.getPreviousPageParam?.(e[0],e,r[0],r):void 0}function o(t,e){return!!e&&null!=i(t,e)}function u(t,e){return!!e&&!!t.getPreviousPageParam&&null!=a(t,e)}},77470:function(t,e,r){"use strict";r.d(e,{R:function(){return o},m:function(){return a}});var n=r(17987),s=r(99024),i=r(11640),a=class extends s.F{#t;#e;#r;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.mutationCache,this.#t=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#e.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(t){this.#r=(0,i.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});let e="pending"===this.state.status,r=!this.#r.canStart();try{if(!e){this.#n({type:"pending",variables:t,isPaused:r}),await this.#e.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#n({type:"pending",context:e,variables:t,isPaused:r})}let n=await this.#r.start();return await this.#e.config.onSuccess?.(n,t,this.state.context,this),await this.options.onSuccess?.(n,t,this.state.context),await this.#e.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,t,this.state.context),this.#n({type:"success",data:n}),n}catch(e){try{throw await this.#e.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#e.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#n({type:"error",error:e})}}finally{this.#e.runNext(this)}}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#e.notify({mutation:this,type:"updated",action:t})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}}}]);