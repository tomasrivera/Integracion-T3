(this["webpackJsonptarea-3"]=this["webpackJsonptarea-3"]||[]).push([[0],{103:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(9),o=n.n(i),s=(n(103),n(66)),r=n(50),l=n(11),j=n(12),d=n(181),b=n(195),h=n(191),u=n(198),m=n(196),p=n(197),O=n(184),x=n(91),g=n.n(x),f=n(64),v=n(186),w=n(203),y=n(202),N=n(187),S=n(188),C=n(189),k=n(190),I=n(204),z=n(13),T=n.n(z),A=(n(135),n.p+"static/media/plane.bbe99e39.svg"),H=n.p+"static/media/dot.6315a82d.svg",L=n(4),F=Object(d.a)((function(e){return{mapContainer:{height:"65vh",width:"100%"}}})),D=T.a.icon({iconUrl:H,iconSize:[10,10],iconAnchor:null,popupAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null}),M=T.a.icon({iconUrl:A,iconSize:[80,80],iconAnchor:null,popupAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null});function P(e){for(var t=e.positions,n=e.flights,a=e.positionsHistory,c=F(),i=[90,90],o=[-90,-90],s=0;s<n.length;s++)i[0]=Math.min(n[s].origin[0],i[0]),i[1]=Math.min(n[s].origin[1],i[1]),o[0]=Math.max(n[s].destination[0],i[0]),o[1]=Math.max(n[s].destination[1],i[1]);var r=[(i[0]+o[0])/2,(i[1]+o[1])/2];return 0===n.length?Object(L.jsx)(O.a,{children:"Loading"}):Object(L.jsxs)(v.a,{className:c.mapContainer,center:r,zoom:3,scrollWheelZoom:!0,children:[Object(L.jsx)(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(L.jsx)(y.a,{name:"history-markers",style:{zIndex:500},children:a.map((function(e,t){return Object(L.jsx)(N.a,{icon:D,position:[e[0],e[1]]},"marker-history-".concat(t))}))}),Object(L.jsx)(y.a,{name:"hover-tooltip-plane",style:{zIndex:502}}),Object(L.jsx)(y.a,{name:"plane-markers",style:{zIndex:501},children:Object.entries(t).map((function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(L.jsx)(N.a,{icon:M,position:[a.position[0],a.position[1]],children:Object(L.jsx)(y.a,{name:"hover-tooltip-plane-".concat(n),style:{zIndex:502},children:Object(L.jsx)(S.a,{children:"Code: ".concat(n)})})},"marker-".concat(n))}))}),Object(L.jsx)(y.a,{name:"lines",style:{zIndex:499},children:n.map((function(e){return Object(L.jsxs)(C.a,{children:[Object(L.jsx)(k.a,{positions:[e.origin,e.destination]}),Object(L.jsx)(I.a,{center:e.origin,radius:1e4}),Object(L.jsx)(I.a,{center:e.destination,radius:1e4})]},"line-".concat(e.code))}))})]})}var B=n(206),G=n(93),R=n(199),U=n(200),E=Object(d.a)((function(){return{root:{width:"90%",marginTop:15,padding:10},list:{height:"45vh",overflow:"auto"},paper:{padding:10,marginBottom:5},paperInline:{flexDirection:"row",justifyContent:"space-between",alignContent:"space-between"},name:{fontSize:16,fontWeight:"bold",marginRight:10,display:"inline-block"},date:{display:"inline-block"},message:{},inputText:{width:"75%",marginRight:5,backgroundColor:"white"},form:{padding:10,display:"flex",justifyContent:"center",alignItems:"center"},nameLabel:{marginRight:10}}}));function W(e){var t=e.messages,n=e.send,c=E(),i=Object(a.useState)(""),o=Object(j.a)(i,2),s=o[0],r=o[1],l=Object(a.useState)(""),d=Object(j.a)(l,2),b=d[0],u=d[1],m=Object(a.useState)(!1),p=Object(j.a)(m,2),x=p[0],g=p[1];return Object(L.jsxs)(h.a,{className:c.root,children:[Object(L.jsx)(O.a,{variant:"h5",children:"Chat"}),Object(L.jsx)(B.a,{className:c.list,children:t.map((function(e,t){return Object(L.jsxs)(G.a,{className:c.paper,children:[Object(L.jsxs)(h.a,{className:c.paperInline,children:[Object(L.jsx)(O.a,{className:c.name,variant:"body1",children:e.name}),Object(L.jsx)(O.a,{className:c.date,variant:"body1",align:"right",children:(n=e.date,new Date(n).toTimeString())})]}),Object(L.jsx)(h.a,{children:Object(L.jsx)(O.a,{className:c.message,variant:"body1",align:"right",children:e.message})})]},"message-".concat(t));var n}))}),Object(L.jsxs)(h.a,{children:[Object(L.jsxs)("form",{className:c.form,noValidate:!0,autoComplete:"off",children:[Object(L.jsx)(O.a,{className:c.nameLabel,variant:"body1",children:"Nickname"}),Object(L.jsx)(R.a,{error:x,value:b,onChange:function(e){return u(e.target.value)},className:c.inputText,variant:"outlined"})]}),Object(L.jsxs)("form",{className:c.form,noValidate:!0,autoComplete:"off",children:[Object(L.jsx)(R.a,{value:s,onChange:function(e){r(e.target.value)},className:c.inputText,variant:"outlined"}),Object(L.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){b?(n(b,s),r(""),g(!1)):g(!0)},children:"Enviar"})]})]})]})}var J=n(201),V=n(192),Z=n(193),q=n(194),K=Object(d.a)((function(e){return{container:{height:"24vh",width:"80vw",marginInline:"auto",flexDirection:"row",overflow:"auto"},card:{marginInline:3,width:"15vw",display:"inline-block"},paper:{top:"40%",left:"40%",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function Q(e){var t=e.flights,n=K(),c=Object(a.useState)(void 0),i=Object(j.a)(c,2),o=i[0],s=i[1],r=Object(a.useState)(!1),l=Object(j.a)(r,2),d=l[0],b=l[1];return Object(L.jsxs)(B.a,{className:n.container,children:[o&&Object(L.jsx)(J.a,{open:d,onClose:function(){return b(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(L.jsxs)("div",{className:n.paper,children:[Object(L.jsx)(O.a,{variant:"h4",children:"Pasajeros"}),o.passengers.map((function(e){return Object(L.jsx)(O.a,{variant:"body1",children:e.name},"passenger-".concat(e.name))}))]})}),t.map((function(e){return Object(L.jsxs)(V.a,{className:n.card,children:[Object(L.jsxs)(Z.a,{children:[Object(L.jsx)(O.a,{className:n.title,color:"textSecondary",gutterBottom:!0,children:e.plane}),Object(L.jsxs)(O.a,{variant:"h5",component:"h2",children:[e.airline," - ",e.code]}),Object(L.jsx)(O.a,{className:n.pos,color:"textSecondary",children:"Origen: ".concat(e.origin)}),Object(L.jsx)(O.a,{className:n.pos,color:"textSecondary",children:"Destino: ".concat(e.destination)})]}),Object(L.jsx)(q.a,{children:Object(L.jsx)(U.a,{size:"small",onClick:function(){return function(e){s(e),b(!0)}(e)},children:"Pasajeros"})})]},"flight-card-".concat(e.code))}))]})}var X="wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",Y=Object(d.a)((function(e){return{root:{minHeight:"100vh",backgroundColor:"#cfe8fc"},icon:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function $(){var e=Y(),t=Object(a.useState)({}),n=Object(j.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)([]),d=Object(j.a)(o,2),x=d[0],v=d[1],w=Object(a.useState)([]),y=Object(j.a)(w,2),N=y[0],S=y[1],C=Object(a.useState)([]),k=Object(j.a)(C,2),I=k[0],z=k[1];return Object(a.useEffect)((function(){var e=Object(f.io)(X,{path:"/flights"});return e.emit("FLIGHTS"),e.on("connect",(function(){console.log("connected to websocket with id: ".concat(e.id))})),e.on("POSITION",(function(e){i((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(r.a)({},e.code,{position:e.position}))})),S((function(t){return[].concat(Object(s.a)(t),[e.position])}))})),e.on("FLIGHTS",(function(e){v(e)})),e.on("CHAT",(function(e){z((function(t){return[].concat(Object(s.a)(t),[e])}))})),function(){e.close()}}),[]),Object(L.jsxs)(h.a,{className:e.root,maxWidth:!1,disableGutters:!0,children:[Object(L.jsx)(b.a,{}),Object(L.jsx)(m.a,{position:"static",children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)(g.a,{className:e.icon,color:"inherit","aria-label":"icon"}),Object(L.jsx)(O.a,{variant:"h5",className:e.title,children:"Tarea 3"})]})}),Object(L.jsxs)(u.a,{container:!0,spacing:0,children:[Object(L.jsx)(u.a,{item:!0,xs:8,children:Object(L.jsx)(P,{flights:x,positions:c,positionsHistory:N})}),Object(L.jsx)(u.a,{item:!0,xs:4,children:Object(L.jsx)(W,{messages:I,send:function(e,t){var n=Object(f.io)(X,{path:"/flights"});n.on("connect",(function(){n.emit("CHAT",{name:e,message:t},(function(){return n.close()}))}))}})}),Object(L.jsx)(u.a,{item:!0,xs:12,children:Object(L.jsx)(Q,{flights:x})})]})]})}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)($,{})}),document.getElementById("root")),_()}},[[146,1,2]]]);
//# sourceMappingURL=main.36971d3a.chunk.js.map