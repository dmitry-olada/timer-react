(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){"use strict";(function(e){var n=a(31),r=a(32),i=a(34),o=a(33),c=a(35),l=a(1),s=a.n(l),u=a(52),m=a(532),d=a(534),f=a(144),p=a(145),h=a(533),g=a(148),b=a(81),v=a(20),O=a(39),E=a(40),j=a.n(E),y=a(41),S=a.n(y),k=a(38),T=a(25),I=a(70),C=a(42),D=function(t){function a(){var t,r;Object(n.a)(this,a);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(r=Object(i.a)(this,(t=Object(o.a)(a)).call.apply(t,[this].concat(l)))).state={chartData:[]},r.calculateData=function(){var e=r.props.list;r.setState({chartData:Object(I.a)(e)})},r.generateEvents=function(){var t=r.props,a=t.addToLog;(0,t.clearLog)();for(var n=v.DateTime.fromObject({hour:C.i}),i=1;i<Object(I.c)(C.h,C.e);i++){var o=Object(I.c)(C.g,C.d),c=Object(I.c)(C.f,C.c),l=n.plus({minutes:o}),s=l.plus({minutes:c});n=n.plus({minutes:c+o}),a({id:i,name:"item".concat(i),start:l.toISO(),end:s.toISO(),duration:s.diff(l,["hours","minutes","seconds"]).toObject()})}e(function(){r.calculateData()})},r}return Object(c.a)(a,t),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.calculateData()}},{key:"render",value:function(){var e=this.state.chartData,t=this.props.classes;return s.a.createElement(l.Fragment,null,s.a.createElement(m.a,{width:"100%",height:300},s.a.createElement(d.a,{data:e,margin:{top:20,right:30,left:0,bottom:0}},">",s.a.createElement(f.a,{dataKey:"hour"}),s.a.createElement(p.a,null),s.a.createElement(h.a,null),s.a.createElement(g.a,{type:"monotone",dataKey:"value",name:"Minutes in this hours",fill:"#3248C7",barSize:30}),s.a.createElement(b.a,{verticalAlign:"bottom"}))),s.a.createElement(S.a,{container:!0},s.a.createElement(S.a,{item:!0,xs:12,className:t.chartButtonContainer},s.a.createElement(j.a,{variant:"contained",size:"small",className:t.button,onClick:this.generateEvents},"Generate"))))}}]),a}(l.Component);t.a=Object(u.b)(function(e){return{list:e.timer.list}},function(e){return{addToLog:function(t){return e(Object(T.f)(t))},clearLog:function(t){return e(Object(T.g)())}}})(Object(O.withStyles)(k.a)(D))}).call(this,a(377).setImmediate)},243:function(e,t,a){e.exports=a(529)},25:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return c}),a.d(t,"h",function(){return l}),a.d(t,"j",function(){return s}),a.d(t,"f",function(){return u}),a.d(t,"i",function(){return m}),a.d(t,"g",function(){return d});var n="CREATE_ITEM",r="ITEM_SET_NAME",i="ADD_TO_LOG",o="DELETE_FROM_LOG",c="CLEAR_LOG";function l(e){return{type:n,payload:e}}function s(e){return{type:r,payload:e}}function u(e){return{type:i,payload:e}}function m(e){return{type:o,payload:e}}function d(){return{type:c}}},254:function(e,t,a){},38:function(e,t,a){"use strict";t.a={button:{background:"#fff",color:"#3f51b5",padding:"5px"},mainContainer:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"},mainTabList:{flexGrow:1,backgroundColor:"#02BCD4",width:"100%",color:"#fff"},mainTab:{fontWeight:600,fontSize:"small"},timerClock:{background:"#fff",color:"#3f51b5",fontWeight:900,fontSize:"x-large",padding:"65px 80px 90px",margin:"20px"},taskWrapper:{margin:"10px 0 25px 0",textAlign:"center"},infoCard:{marginTop:20,textAlign:"left"},infoFooter:{justifyContent:"center"},logRow:{background:"#EAF6FF"},logCell:{textAlign:"center",paddingTop:"10px",paddingBottom:"10px",color:"#3f51b5"},chartButtonContainer:{textAlign:"right",marginBottom:30},dialogTitle:{color:"#ff0000"},dialogButton:{color:"#0EBFD7"},infoPreloader:{marginTop:50}}},42:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"j",function(){return i}),a.d(t,"h",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"f",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"g",function(){return u}),a.d(t,"d",function(){return m}),a.d(t,"i",function(){return d});var n=0,r=23,i=60,o=10,c=15,l=10,s=90,u=10,m=50,d=4},529:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(57),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(51),l=a(52),s=a(242),u=a(20),m=a(212),d=a(25),f=a(241),p=a(117),h={item:{id:0,name:"",start:null,end:null,duration:null},list:[]};var g="GET_TASK",b="GET_TASK_LOADING",v="GET_TASK_SUCCESS",O="GET_TASK_FAILED",E="CLEAR_TASK";var j={loading:!1,success:!1,failed:!1,item:{id:0,name:null,start:null,end:null,duration:null}};var y=Object(c.combineReducers)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.c:return{item:t.payload,list:e.list};case d.e:return{item:Object(p.a)({},e.item,{name:t.payload}),list:e.list};case d.a:return{item:h.item,list:[].concat(Object(f.a)(e.list),[t.payload])};case d.d:return{item:e.item,list:e.list.filter(function(e){return e.id!==t.payload})};case d.b:return{item:e.item,list:h.list};default:return e}},task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(p.a)({},e,{loading:!0});case v:return{loading:!1,success:!0,failed:!1,item:t.payload};case O:return{loading:!1,success:!1,failed:!0,item:t.payload};case g:return e;case E:return j;default:return e}}}),S=a(66),k=a.n(S),T=a(47),I=k.a.mark(w),C=k.a.mark(x),D=function(e){return new Promise(function(t){return setTimeout(t,e)})},N=function(e){return e.timer.list};function w(e){var t,a;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(T.d)({type:b});case 3:return n.next=5,Object(T.b)(D,1e3);case 5:return n.next=7,Object(T.e)(N);case 7:if(t=n.sent,!(a=t.find(function(t){return t.id===+e.payload}))){n.next=14;break}return n.next=12,Object(T.d)({type:v,payload:a});case 12:n.next=16;break;case 14:return n.next=16,Object(T.d)({type:O,payload:404});case 16:n.next=22;break;case 18:return n.prev=18,n.t0=n.catch(0),n.next=22,Object(T.d)({type:O,payload:n.t0});case 22:case"end":return n.stop()}},I,this,[[0,18]])}function x(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.f)(g,w)]);case 2:case"end":return e.stop()}},C,this)}var F=k.a.mark(A);function A(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.c)(x)]);case 2:case"end":return e.stop()}},F,this)}a(254);var L=a(31),M=a(32),_=a(34),B=a(33),H=a(35),J=a(537),G=a(538),W=a(536),R=a(531),K=a(41),P=a.n(K),z=a(235),U=a.n(z),Y=a(146),$=a.n(Y),q=a(39),Q=a(38),V=a(219),X=a.n(V),Z=a(40),ee=a.n(Z),te=a(213),ae=a.n(te),ne=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(_.a)(this,Object(B.a)(t).call(this,e))).state={time:null},a.state={time:u.Duration.fromMillis(e.duration?e.duration:0),intervalId:null},a}return Object(H.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.started;this.runner(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.started;t!==e.started&&this.runner(t)}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;clearInterval(e)}},{key:"runner",value:function(e){var t=this,a=this.state.intervalId;if(e){var n=setInterval(function(){t.addSecond()},1e3);this.setState({intervalId:n})}else clearInterval(a),this.setState({time:u.Duration.fromMillis(0)})}},{key:"addSecond",value:function(){var e=this.state.time;this.setState({time:e.plus(u.Duration.fromMillis(1e3))})}},{key:"render",value:function(){var e=this.state.time,t=this.props.classes;return r.a.createElement(ae.a,{variant:"round",className:t.timerClock},e.toFormat("hh:mm:ss"))}}]),t}(n.PureComponent),re=Object(q.withStyles)(Q.a)(ne),ie=a(214),oe=a.n(ie),ce=a(218),le=a.n(ce),se=a(216),ue=a.n(se),me=a(217),de=a.n(me),fe=a(215),pe=a.n(fe),he=function(e){function t(){return Object(L.a)(this,t),Object(_.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.closeDialog,n=e.classes;return r.a.createElement(oe.a,{open:t,onClose:a(),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(pe.a,{id:"alert-dialog-title",disableTypography:!0},r.a.createElement("h2",{className:n.dialogTitle},"Empty task name")),r.a.createElement(ue.a,null,r.a.createElement(de.a,{id:"alert-dialog-description"},"You are trying close your task without name, enter the title and try again!")),r.a.createElement(le.a,null,r.a.createElement(ee.a,{onClick:a(),className:n.dialogButton,autoFocus:!0},"Close")))}}]),t}(n.Component),ge=Object(q.withStyles)(Q.a)(he),be=a(70),ve=function(e){function t(e){var a;Object(L.a)(this,t),(a=Object(_.a)(this,Object(B.a)(t).call(this))).state={name:"",started:!1,duration:0,dialog:!1},a.onChangeName=function(e){var t=a.props.changeName;a.setState({name:e.target.value}),t(e.target.value)},a.onStartClick=function(){var e=a.state.name,t=a.props.createItem;a.setState({started:!0}),t({id:Object(be.b)(),start:u.DateTime.local().toISO(),name:e,end:null,duration:null})},a.onStopClick=function(){var e=a.state.name,t=a.props,n=t.addToLog,r=t.timer.item;if(e){a.setState({started:!1,name:""});var i=u.DateTime.local();n({id:r.id,name:e,start:r.start,end:i.toISO(),duration:i.diff(u.DateTime.fromISO(r.start),["hours","minutes","seconds"]).toObject()})}else a.openDialog()},a.closeDialog=function(){return function(){a.setState({dialog:!1})}},a.openDialog=function(){a.setState({dialog:!0})},a.renderButton=function(e){var t=a.props.classes;return r.a.createElement(ee.a,{className:t.button,variant:"contained",size:"small",onClick:e?a.onStopClick:a.onStartClick},e?"Stop":"Start")};var n=e.timer.item;if(n&&0!==n.id){var i=u.DateTime.fromISO(n.start).diffNow("millisecond");a.state={started:!0,duration:Math.abs(i.valueOf()),name:n.name,dialog:!1}}return a}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.state,t=e.started,a=e.duration,n=e.name,i=e.dialog,o=this.props.classes;return r.a.createElement(P.a,{container:!0,spacing:8,justify:"center",className:o.taskWrapper},r.a.createElement(ge,{open:i,closeDialog:this.closeDialog}),r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(X.a,{className:"taskInput",value:n,name:"timerName",onChange:this.onChangeName})),r.a.createElement(P.a,{item:!0,xs:12},r.a.createElement(re,{started:t,duration:a})),r.a.createElement(P.a,{item:!0,xs:12},this.renderButton(t)))}}]),t}(n.Component),Oe=Object(l.b)(function(e){return{timer:e.timer}},function(e){return{changeName:function(t){return e(Object(d.j)(t))},addToLog:function(t){return e(Object(d.f)(t))},createItem:function(t){return e(Object(d.h)(t))}}})(Object(q.withStyles)(Q.a)(ve)),Ee=a(220),je=a.n(Ee),ye=a(222),Se=a.n(ye),ke=a(43),Te=a.n(ke),Ie=a(221),Ce=a.n(Ie),De=a(140),Ne=a.n(De),we=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(_.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).destroy=function(e){return function(){(0,a.props.deleteFromLog)(e)}},a}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.list;return r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,null,r.a.createElement(Ce.a,null,r.a.createElement(Ne.a,null,r.a.createElement(Te.a,{align:"center"},"\u2116"),r.a.createElement(Te.a,{align:"center"},"Task"),r.a.createElement(Te.a,{align:"center"},"Time Start"),r.a.createElement(Te.a,{align:"center"},"Time End"),r.a.createElement(Te.a,{align:"center"},"Time Spend"),r.a.createElement(Te.a,{align:"center"},"Info"),r.a.createElement(Te.a,{align:"center"},"Delete"))),r.a.createElement(Se.a,null,n.map(function(t){return r.a.createElement(Ne.a,{className:a.logRow,key:t.id},r.a.createElement(Te.a,{className:a.logCell},t.id),r.a.createElement(Te.a,{className:a.logCell},t.name),r.a.createElement(Te.a,{className:a.logCell},u.DateTime.fromISO(t.start).toFormat("HH:mm:ss")),r.a.createElement(Te.a,{className:a.logCell},u.DateTime.fromISO(t.end).toFormat("HH:mm:ss")),r.a.createElement(Te.a,{className:a.logCell},u.DateTime.fromObject(t.duration).toFormat("HH:mm:ss")),r.a.createElement(Te.a,{className:a.logCell},r.a.createElement(ee.a,{className:a.button,variant:"contained",component:R.a,to:"/tasks/".concat(t.id)},"Info")),r.a.createElement(Te.a,{align:"center"},r.a.createElement(ee.a,{className:a.button,variant:"contained",size:"small",onClick:e.destroy(t.id)},"Delete")))}))))}}]),t}(n.PureComponent),xe=Object(l.b)(function(e){return{list:e.timer.list}},function(e){return{deleteFromLog:function(t){return e(Object(d.i)(t))}}})(Object(q.withStyles)(Q.a)(we)),Fe=a(223),Ae=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(_.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(i)))).getCurrentTab=function(){var e=a.props.match.params.tab;return void 0===e?"log":e},a.renderTab=function(){switch(a.getCurrentTab()){case"log":return r.a.createElement(xe,null);case"chart":return r.a.createElement(Fe.a,null);default:return""}},a}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.getCurrentTab();return r.a.createElement(n.Fragment,null,r.a.createElement(Oe,null),r.a.createElement(P.a,{container:!0,spacing:8,justify:"center",className:e.mainContainer},r.a.createElement(P.a,{container:!0,spacing:8,lg:1,md:0}),r.a.createElement(P.a,{container:!0,spacing:8,lg:9,md:12},r.a.createElement(U.a,{value:t,className:e.mainTabList,variant:"fullWidth"},r.a.createElement($.a,{className:e.mainTab,label:"Tasks log",value:"log",component:R.a,to:"/log"}),r.a.createElement($.a,{className:e.mainTab,label:"Tasks chart",value:"chart",component:R.a,to:"/chart"})),this.renderTab()),r.a.createElement(P.a,{container:!0,spacing:8,lg:1,md:0})))}}]),t}(n.Component),Le=Object(q.withStyles)(Q.a)(Ae),Me=a(535),_e=a(236),Be=a.n(_e),He=a(237),Je=a.n(He),Ge=a(240),We=a.n(Ge),Re=a(239),Ke=a.n(Re),Pe=a(238),ze=a.n(Pe),Ue=a(147),Ye=a.n(Ue),$e=a(63),qe=a.n($e),Qe=function(e){function t(){return Object(L.a)(this,t),Object(_.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.getTask;t.params.id&&a(t.params.id)}},{key:"componentWillUnmount",value:function(){(0,this.props.clearTask)()}},{key:"renderInfo",value:function(){var e=this.props,t=e.task,a=e.classes,n=t.item;return t.loading?r.a.createElement("div",{className:a.infoPreloader},r.a.createElement("img",{src:"/ring.svg",alt:"",height:100})):t.failed&&404===n?r.a.createElement(Me.a,{to:"/404"}):t.success?r.a.createElement(Be.a,{className:a.infoCard},r.a.createElement(Je.a,null,r.a.createElement(ze.a,{title:n.name,align:"center"}),r.a.createElement(Ye.a,null),r.a.createElement(Ke.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(qe.a,{variant:"h6",component:"h5"},"ID: ",n.id),r.a.createElement(qe.a,{variant:"h6",component:"h5"},"Start: ",u.DateTime.fromISO(n.start).toFormat("HH:mm:ss")),r.a.createElement(qe.a,{variant:"h6",component:"h5"},"End: ",u.DateTime.fromISO(n.end).toFormat("HH:mm:ss")),r.a.createElement(qe.a,{variant:"h6",component:"h5"},"Duration: ",u.DateTime.fromObject(n.duration||{}).toFormat("HH:mm:ss")))),r.a.createElement(Ye.a,null)),r.a.createElement(We.a,{className:a.infoFooter},r.a.createElement(ee.a,{className:a.button,variant:"contained",component:R.a,to:"/log"},"Back"))):void 0}},{key:"render",value:function(){return r.a.createElement(P.a,{container:!0,justify:"center"},this.renderInfo())}}]),t}(n.PureComponent),Ve=Object(l.b)(function(e){return{task:e.task}},function(e){return{getTask:function(t){return e(function(e){return{type:g,payload:e}}(t))},clearTask:function(){return e({type:E})}}})(Object(q.withStyles)(Q.a)(Qe)),Xe=function(e){function t(){return Object(L.a)(this,t),Object(_.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{align:"center"},r.a.createElement("h2",null,"404 - Not found"),r.a.createElement(ee.a,{className:e.button,variant:"contained",component:R.a,to:"/log"},"Back"))}}]),t}(n.PureComponent),Ze=Object(q.withStyles)(Q.a)(Xe),et=function(e){function t(){return Object(L.a)(this,t),Object(_.a)(this,Object(B.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,null,r.a.createElement(J.a,null,r.a.createElement(G.a,{exact:!0,path:"/404",component:Ze}),r.a.createElement(G.a,{path:"/tasks/:id",component:Ve}),r.a.createElement(G.a,{path:"/:tab?",component:Le})))}}]),t}(n.Component),tt=Object(s.a)(),at=function(){var e={timer:{item:{id:0,name:"",start:null,end:null,duration:null},list:[]}};try{var t=JSON.parse(localStorage.getItem("item"));if(t){var a=u.DateTime.fromISO(t.start).diffNow("millisecond");e.timer.item={id:t.id,name:localStorage.getItem("name")||"",start:t.start,duration:Math.abs(a.valueOf())}}var n=JSON.parse(localStorage.getItem("list"))||[];return e.timer.list=n.map(function(e){return{id:e.id,name:e.name,start:e.start,end:e.end,duration:e.duration}}),e}catch(r){console.error("startup",r)}}(),nt=Object(c.createStore)(y,at,Object(m.composeWithDevTools)(Object(c.applyMiddleware)(function(){return function(e){return function(t){if(t.type)switch(t.type){case d.c:localStorage.setItem("item",JSON.stringify(t.payload));break;case d.a:var a=JSON.parse(localStorage.getItem("list"))||[];a.push(t.payload),localStorage.removeItem("item"),localStorage.removeItem("name"),localStorage.setItem("list",JSON.stringify(a));break;case d.d:var n=JSON.parse(localStorage.getItem("list"));n&&(n=n.filter(function(e){return e.id!==t.payload}),localStorage.setItem("list",JSON.stringify(n)));break;case d.e:var r=JSON.parse(localStorage.getItem("item"));r&&(r.name=t.payload,localStorage.setItem("item",JSON.stringify(r))),localStorage.setItem("name",t.payload||"");break;case d.b:localStorage.removeItem("list")}return e(t)}}},tt)));tt.run(A),o.a.render(r.a.createElement(l.a,{store:nt},r.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return c});var n=a(20),r=a(42),i=function(){var e=JSON.parse(localStorage.getItem("list")),t=1;return e&&(e.sort(function(e,t){return e.id-t.id}),t=++e.pop().id),t},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return Math.floor(Math.random()*(t-e)+e+1)},c=function(e){for(var t=e.map(function(e){var t=n.DateTime.fromISO(e.start),a=n.DateTime.fromISO(e.end);return{id:e.id,interval:n.Interval.fromDateTimes(t,a),start:t,end:a}}),a=[],i=function(e){var i=0,o=n.DateTime.fromObject({hour:e,minute:0,second:0}),c=n.DateTime.fromObject({hour:e,minute:59,second:59}),l=n.Interval.fromDateTimes(o,c),s=t.filter(function(e){return l.intersection(e.interval)});if(s.length>0){var u=r.j;s.forEach(function(t){t.end.hour===e&&t.start.hour===e?u=t.end.diff(t.start,["minutes"]).toObject().minutes:t.end.hour===e?u=t.end.minute:t.start.hour===e&&(u=r.j-t.start.minute),i+=u})}a.push({hour:e,value:i>r.j?r.j:i})},o=r.b;o<=r.a;o++)i(o);return a}}},[[243,2,1]]]);
//# sourceMappingURL=main.c524413e.chunk.js.map