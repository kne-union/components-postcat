"use strict";(self.webpackChunk_kne_components_components_postcat=self.webpackChunk_kne_components_components_postcat||[]).push([[284],{38284:(e,t,s)=>{s.r(t),s.d(t,{OpenAPIDisplayItem:()=>M,OpenAPIMenu:()=>B,default:()=>W,parseOpenApiData:()=>h,transformSchemaComponents:()=>u,transformSchemaToList:()=>m});var a=s(22717),r=s.n(a),n=s(33097),o=s.n(n),i=s(1488),l=s.n(i),c=s(12322),d=s.n(c),p=s(53536);const m=e=>{let{properties:t,required:s}=e;return Object.keys(t).map((e=>{var a,r,n;const o=(0,p.uniqueId)(e),i={name:e,description:t[e].description,type:t[e].type,format:null===(a=t[e])||void 0===a?void 0:a.format,example:null===(r=t[e])||void 0===r?void 0:r.example,id:o,required:!!(s||[]).includes(e)};var l,c,d,u;return"object"===t[e].type&&null!==(n=t[e])&&void 0!==n&&n.properties?Object.assign({},i,{children:m({properties:null===(l=t[e])||void 0===l?void 0:l.properties,required:(null===(c=t[e])||void 0===c?void 0:c.required)||[]})}):"array"!==t[e].type||(0,p.isEmpty)(t[e].items)?(i.key=o,i):Object.assign({},i,{children:m({properties:null===(d=t[e].items)||void 0===d?void 0:d.properties,required:(null===(u=t[e].items)||void 0===u?void 0:u.required)||[]})})}))},u=(e,t)=>{if(d()(e)&&e.hasOwnProperty("schema")&&e.schema.hasOwnProperty("$ref")){const s=e.schema.$ref.replace(/^#\//,"").split("/");return{schema:u(o()(t,s),t)}}return d()(e)?r()(e,((e,s,a)=>{e[a]=u(s,t)}),{}):Array.isArray(e)?e.map((e=>u(e,t))):e},h=e=>({info:o()(e,"info",{}),servers:o()(e,"servers",{}),openapi:o()(e,"openapi"),paths:r()(e.paths,((t,s,a)=>{t[a]=r()(u(s,e),((e,t,s)=>{e[s]={summary:o()(t,"summary",""),deprecated:o()(t,"deprecated",!1),description:o()(t,"description",""),tags:o()(t,"tags",[]),operationId:o()(t,"operationId",""),query:r()(o()(t,"parameters",[]),((e,t)=>{"query"===o()(t,"in")&&e.push(l()(t,["in"]))}),[]),headers:r()(o()(t,"parameters",[]),((e,t)=>{"header"===o()(t,"in")&&e.push(l()(t,["in"]))}),[]),requestBody:r()(o()(t,"requestBody.content"),((e,t,s)=>{e.push(Object.assign({},t,{"content-type":s}))}),[]),responses:r()(o()(t,"responses"),((e,t,s)=>{e.push(Object.assign({},{content:r()(o()(t,"content",{}),((e,t,s)=>{e.push(Object.assign({},t,{type:s}))}),[])},{statusCode:s,description:o()(t,"description","")}))}),[])}}),{})}),{})});var y=s(13050),_=s(73884),j=s(9376),q=s.n(j),b=s(55199);const x={"request-method":"style_request-method__i5WuB__9NGbh","request-method-post":"style_request-method-post__GtwJB__9NGbh","request-method-get":"style_request-method-get__9yHCj__9NGbh","request-method-put":"style_request-method-put__wEgzb__9NGbh","request-method-options":"style_request-method-options__0l2bP__9NGbh","request-method-delete":"style_request-method-delete__gTjPA__9NGbh","request-method-head":"style_request-method-head__fWDUx__9NGbh","request-method-patch":"style_request-method-patch__xs0Km__9NGbh","collapse-wrapper":"style_collapse-wrapper__W7jWX__9NGbh","path-line":"style_path-line__Ukgxa__9NGbh","header-info":"style_header-info__wuEcc__9NGbh","menu-url":"style_menu-url__4rqrQ__9NGbh","api-description":"style_api-description__Pa2ho__9NGbh"};var v=s(98139),f=s.n(v),g=s(70579);const N=(0,y.createWithRemoteLoader)({modules:["components-core:Table","components-core:InfoPage.Collapse"]})((e=>{let{remoteModules:t,label:s,data:a,...r}=e;const[n,o]=t;return(0,g.jsx)(o,{className:x["collapse-wrapper"],defaultActiveKey:["current"],items:[{label:s,key:"current",children:(0,g.jsx)(n,{...r,sticky:!1,dataSource:a})}]})})),w=()=>[{name:"name",title:"\u53c2\u6570\u540d",type:"mainInfo",hover:!1,primary:!1,fixed:"left"},{name:"type",title:"\u7c7b\u578b",type:"other",valueOf:e=>"".concat(e.schema.type).concat(e.schema.format?"<".concat(e.schema.format,">"):"")},{name:"required",title:"\u5fc5\u586b",type:"singleRow",valueOf:(e,t)=>{var s;let{name:a}=t;return null===(s=e[a])||void 0===s?void 0:s.toString()}},{name:"description",title:"\u8bf4\u660e",type:"description"},{name:"example",title:"\u793a\u4f8b",type:"description"}],O=e=>{let{data:t,...s}=e;return(0,g.jsx)(N,{...s,data:t,columns:w()})},C=()=>[{name:"name",title:"\u5b57\u6bb5\u540d",type:"mainInfo",hover:!1,primary:!1,fixed:"left"},{name:"type",title:"\u7c7b\u578b",type:"other"},{name:"required",title:"\u5fc5\u586b",type:"singleRow",valueOf:(e,t)=>{var s;let{name:a}=t;return null===(s=e[a])||void 0===s?void 0:s.toString()}},{name:"description",title:"\u8bf4\u660e",type:"description"},{name:"example",title:"\u793a\u4f8b",type:"description"}],k=e=>{let{data:t,...s}=e;return(0,g.jsx)(N,{...s,data:m(t),columns:C()})},G=e=>{let{data:t}=e;return(0,g.jsxs)(b.Card,{title:"Request",size:"small",type:"inner",className:x["collapse-wrapper"],children:[t.headers&&t.headers.length>0&&(0,g.jsx)(O,{data:t.headers,rowKey:"name",label:"Header Parameters"}),t.query&&t.query.length>0&&(0,g.jsx)(O,{data:t.query,rowKey:"name",label:"Query Parameters"}),t.requestBody&&t.requestBody.length>0&&(0,g.jsx)(b.Card,{title:"Request Body",size:"small",type:"inner",className:x["collapse-wrapper"],bordered:!1,children:t.requestBody.map((e=>(0,g.jsx)(k,{label:"content-type:".concat(e["content-type"]),data:e.schema},e["content-type"])))})]})},R=(0,y.createWithRemoteLoader)({modules:["components-core:InfoPage.Collapse"]})((e=>{let{remoteModules:t,data:s}=e;const[a]=t;return(0,g.jsx)(b.Card,{title:"Responses",size:"small",type:"inner",className:x["collapse-wrapper"],children:(0,g.jsx)(a,{defaultActiveKey:o()(s,[0,"statusCode"]),items:s.map((e=>{let{statusCode:t,description:s,content:a}=e;return{key:t,label:"".concat(t," ").concat(s),children:a.map((e=>{let{type:t,schema:s}=e;return(0,g.jsx)(k,{label:t,data:s},t)}))}}))})})})),B=(0,y.createWithRemoteLoader)({modules:["components-core:Menu"]})((e=>{let{remoteModules:t,data:s,...a}=e;const[r]=t,n=(0,_.useMemo)((()=>{const e=[],t={};return Object.keys(s.paths).forEach((a=>{const r=Object.assign({},s.paths[a]);Object.keys(r).forEach((s=>{const n=Object.assign({},r[s]).tags||[];e.push(...n),n.forEach((e=>{t[e]||(t[e]=[]),t[e].push({label:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{className:f()(x["request-method"],x["request-method-".concat(s)]),children:s.toUpperCase()}),(0,g.jsx)("span",{className:x["menu-url"],children:a})]}),key:"".concat(a,"-").concat(s.toLowerCase()),data:{path:a,method:s}})}))}))})),q()(e).map((e=>({label:e,key:e,iconType:"icon-wenjianjia",children:t[e]})))}),[s]);return(0,g.jsx)(r,{...a,items:n})})),P=(0,y.createWithRemoteLoader)({modules:[]})((e=>{let{data:t}=e;return(0,g.jsxs)(b.Row,{className:x["header-info"],justify:"space-between",children:[(0,g.jsx)(b.Col,{children:t.info.title}),(0,g.jsxs)(b.Col,{children:["\u7248\u672c:",t.info.version]})]})})),I=(0,y.createWithRemoteLoader)({modules:["components-core:Menu"]})((e=>{let{remoteModules:t,data:s}=e;const a=(0,_.useMemo)((()=>h(s)),[s]),r=(0,_.useMemo)((()=>{const e=Object.assign({},a.paths),t=Object.keys(e)[0];if(!t)return null;const s=Object.assign({},e[t]),r=Object.keys(s)[0];return r?{path:t,method:r}:null}),[a]),[n,o]=(0,_.useState)(r);return(0,g.jsxs)(b.Row,{gutter:10,children:[(0,g.jsx)(b.Col,{span:4,children:(0,g.jsx)(B,{data:a,currentKey:"".concat(n.path,"-").concat(n.method.toLowerCase()),onChange:(e,t)=>{let{data:s}=t;o(s)}})}),(0,g.jsxs)(b.Col,{span:20,children:[(0,g.jsx)(P,{data:a}),(0,g.jsx)(M,{data:a,api:n})]})]})})),M=e=>{let{data:t,api:s}=e;const a=o()(t,["paths",s.path,s.method]);return(0,g.jsxs)(b.Space,{direction:"vertical",children:[(0,g.jsxs)(b.Space,{className:x["path-line"],children:[(0,g.jsx)(b.Badge,{status:a.deprecated?"error":"success"}),(0,g.jsx)("div",{className:f()(x["request-method"],x["request-method-".concat(s.method)]),children:s.method.toUpperCase()}),(0,g.jsx)("div",{className:x["path-line-url"],children:s.path})]}),(0,g.jsxs)("div",{className:x["api-description"],children:[(0,g.jsx)("div",{children:a.summary}),(0,g.jsx)("div",{children:a.description})]}),(0,g.jsx)(G,{data:{headers:a.headers,query:a.query,requestBody:a.requestBody}}),(0,g.jsx)(R,{data:a.responses})]})},W=I}}]);
//# sourceMappingURL=284.6629bcf9.chunk.js.map