(self.webpackChunk_kne_components_components_postcat=self.webpackChunk_kne_components_components_postcat||[]).push([[36,451],{72879:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(94679),s=n(19950),r=n(43302),a=n(79149),i=n(70579);const c=e=>{let{baseUrl:t,menuFixed:n,...c}=e;return(0,i.jsx)(s.Kq,{value:{baseUrl:t,...c},children:(0,i.jsxs)(o.Routes,{children:[(0,i.jsx)(o.Route,{index:!0,element:(0,i.jsx)(r.default,{menuFixed:n})}),(0,i.jsx)(o.Route,{path:":id",element:(0,i.jsx)(a.default,{menuFixed:n})}),(0,i.jsx)(o.Route,{path:":id/*",element:(0,i.jsx)(a.default,{menuFixed:n})}),(0,i.jsx)(o.Route,{path:"*",element:(0,i.jsx)(o.Navigate,{to:t})})]})})};c.defaultProps={baseUrl:"/"};const l=c},43302:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var o=n(13050),s=n(94679),r=n(73884),a=n(55199);const i=()=>[{name:"name",title:"\u9879\u76ee\u540d",type:"mainInfo",hover:!1,primary:!1,fixed:"left"},{name:"description",title:"\u63cf\u8ff0",type:"description"}];var c=n(70579);const l=(0,o.createWithRemoteLoader)({modules:["components-core:FormInfo"]})((e=>{let{remoteModules:t}=e;const[n]=t,{Input:o,TextArea:s}=n.fields;return(0,c.jsx)(n,{column:1,list:[(0,c.jsx)(o,{name:"name",label:"\u9879\u76ee\u540d",rule:"REQ LEN-0-50"}),(0,c.jsx)(s,{name:"description",label:"\u63cf\u8ff0"})]})}));var u=n(19950);const d=(0,o.createWithRemoteLoader)({modules:["components-core:Layout@TablePage","components-core:Global@usePreset","FormInfo@useFormModal"]})((e=>{let{remoteModules:t,...n}=e;const[o,d,p]=t,{apis:m}=(0,u.YY)(),{ajax:f,apis:x}=d(),v=p(),{getProjectList:j,doAddProject:h,doEditProject:b,doDeleteProject:g}=Object.assign({},x.postcat,m),{message:y}=a.App.useApp(),_=(0,r.useRef)(),k=(0,s.useNavigate)(),P=(0,s.useLocation)();return(0,c.jsx)(o,{...Object.assign({},j),ref:_,name:"env",page:{...n,title:"\u9879\u76ee",titleExtra:(0,c.jsx)(a.Space,{children:(0,c.jsx)(a.Button,{type:"primary",onClick:()=>{const e=v({title:"\u6dfb\u52a0\u9879\u76ee",size:"small",formProps:{onSubmit:async t=>{const{data:n}=await f(Object.assign({},h,{data:t}));0===n.code&&(y.success("\u6dfb\u52a0\u6210\u529f"),e.close(),_.current.reload())}},children:(0,c.jsx)(l,{})})},children:"\u6dfb\u52a0"})})},columns:[...i(),{name:"options",title:"\u64cd\u4f5c",type:"options",fixed:"right",valueOf:e=>[{children:"\u67e5\u770b",onClick:()=>{k("".concat(P.pathname,"/").concat(e.id))}},{onClick:()=>{const t=v({title:"\u7f16\u8f91\u9879\u76ee",size:"small",formProps:{data:e,onSubmit:async n=>{const{data:o}=await f(Object.assign({},b,{data:Object.assign({},n,{id:e.id})}));0===o.code&&(y.success("\u4fee\u6539\u6210\u529f"),t.close(),_.current.reload())}},children:(0,c.jsx)(l,{})})},children:"\u7f16\u8f91"},{onClick:async()=>{const{data:t}=await f(Object.assign({},g,{data:{id:e.id}}));0===t.code&&(y.success("\u5220\u9664\u6210\u529f"),_.current.reload())},children:"\u5220\u9664"}]}]})}))},63868:(e,t,n)=>{var o=n(71775),s=n(93211);e.exports=function(e,t,n){(void 0!==n&&!s(e[t],n)||void 0===n&&!(t in e))&&o(e,t,n)}},23253:(e,t,n)=>{var o=n(5538),s=n(63868),r=n(94258),a=n(83223),i=n(46686),c=n(30474),l=n(53737);e.exports=function e(t,n,u,d,p){t!==n&&r(n,(function(r,c){if(p||(p=new o),i(r))a(t,n,c,u,e,d,p);else{var m=d?d(l(t,c),r,c+"",t,n,p):void 0;void 0===m&&(m=r),s(t,c,m)}}),c)}},83223:(e,t,n)=>{var o=n(63868),s=n(44353),r=n(38710),a=n(91980),i=n(20310),c=n(22777),l=n(54052),u=n(76272),d=n(44543),p=n(11629),m=n(46686),f=n(12322),x=n(51268),v=n(53737),j=n(91609);e.exports=function(e,t,n,h,b,g,y){var _=v(e,n),k=v(t,n),P=y.get(k);if(P)o(e,n,P);else{var R=g?g(_,k,n+"",e,t,y):void 0,O=void 0===R;if(O){var F=l(k),w=!F&&d(k),C=!F&&!w&&x(k);R=k,F||w||C?l(_)?R=_:u(_)?R=a(_):w?(O=!1,R=s(k,!0)):C?(O=!1,R=r(k,!0)):R=[]:f(k)||c(k)?(R=_,c(_)?R=j(_):m(_)&&!p(_)||(R=i(k))):O=!1}O&&(y.set(k,R),b(R,k,h,g,y),y.delete(k)),o(e,n,R)}}},55647:(e,t,n)=>{var o=n(33279),s=n(55636),r=n(46350);e.exports=function(e,t){return r(s(e,t,o),e+"")}},84570:(e,t,n)=>{var o=n(55647),s=n(60929);e.exports=function(e){return o((function(t,n){var o=-1,r=n.length,a=r>1?n[r-1]:void 0,i=r>2?n[2]:void 0;for(a=e.length>3&&"function"==typeof a?(r--,a):void 0,i&&s(n[0],n[1],i)&&(a=r<3?void 0:a,r=1),t=Object(t);++o<r;){var c=n[o];c&&e(t,c,o,a)}return t}))}},60929:(e,t,n)=>{var o=n(93211),s=n(6571),r=n(69194),a=n(46686);e.exports=function(e,t,n){if(!a(n))return!1;var i=typeof t;return!!("number"==i?s(n)&&r(t,n.length):"string"==i&&t in n)&&o(n[t],e)}},53737:e=>{e.exports=function(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}},76272:(e,t,n)=>{var o=n(6571),s=n(22761);e.exports=function(e){return s(e)&&o(e)}},34677:(e,t,n)=>{var o=n(23253),s=n(84570)((function(e,t,n){o(e,t,n)}));e.exports=s},91609:(e,t,n)=>{var o=n(96614),s=n(30474);e.exports=function(e){return o(e,s(e))}}}]);
//# sourceMappingURL=36.9848bee6.chunk.js.map