(function(){"use strict";var t={1985:function(t,e,s){var a=s(9242),n=s(3396);const o={class:"app"};function r(t,e,s,a,r,i){const u=(0,n.up)("header-component"),c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(u),(0,n.Wm)(c)])}const i={class:"container_1200"},u={class:"row"};function c(t,e,s,a,o,r){const c=(0,n.up)("header-item");return(0,n.wg)(),(0,n.iD)("header",null,[(0,n._)("div",i,[(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.myRoutes,(t=>((0,n.wg)(),(0,n.j4)(c,{key:t.title,route:t},null,8,["route"])))),128))])])])}var l=s(7139);const d=t=>((0,n.dD)("data-v-119d1692"),t=t(),(0,n.Cn)(),t),p={class:"container"},h={class:"column"},m=d((()=>(0,n._)("h1",null,"My Vue Todo App",-1))),k={key:0,class:"error"};function v(t,e,s,o,r,i){const u=(0,n.up)("custom-input"),c=(0,n.up)("custom-button"),d=(0,n.up)("to-do-table"),v=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",h,[m,(0,n._)("form",{class:"row",onSubmit:e[1]||(e[1]=(0,a.iM)(((...t)=>i.onSubmit&&i.onSubmit(...t)),["prevent"]))},[(0,n.wy)((0,n.Wm)(u,{modelValue:r.taskInput,"onUpdate:modelValue":e[0]||(e[0]=t=>r.taskInput=t),placeholder:"Enter task",className:r.inputStyle},null,8,["modelValue","className"]),[[v]]),(0,n.Wm)(c,{buttonText:"Submit"})],32),r.errors?((0,n.wg)(),(0,n.iD)("div",k,(0,l.zw)(r.errors[0]),1)):(0,n.kq)("",!0),(0,n.Wm)(d,{tasks:i.tasks,onRemove:i.onDelete,onEdit:i.editTask,onChangeStatus:i.changeStatus,statusArr:r.statusArr},null,8,["tasks","onRemove","onEdit","onChangeStatus","statusArr"])])])}const f=t=>((0,n.dD)("data-v-6a6ff4b5"),t=t(),(0,n.Cn)(),t),g={class:"table"},w=f((()=>(0,n._)("tr",null,[(0,n._)("td",{width:"60%"},"Task"),(0,n._)("td",{width:"22%"},"Status"),(0,n._)("td",{width:"18%"},"Actions")],-1))),T={key:0,class:"no_items"};function S(t,e,s,a,o,r){const i=(0,n.up)("to-do-item");return(0,n.wg)(),(0,n.iD)("table",g,[w,s.tasks.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",T,"There aren't tasks!")),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.tasks,(e=>((0,n.wg)(),(0,n.j4)(i,{key:e.id,task:e,statusArr:s.statusArr,onRemove:s=>t.$emit("remove",e.id),onUpdateTask:r.updateTask,onChangeStatus:s=>t.$emit("changeStatus",e)},null,8,["task","statusArr","onRemove","onUpdateTask","onChangeStatus"])))),128))])}const y={key:1},L=["value"],_={class:"icons"};function C(t,e,s,a,o,r){const i=(0,n.up)("trash-icon"),u=(0,n.up)("tick-icon"),c=(0,n.up)("edit-icon"),d=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("tr",null,[o.isEdit?((0,n.wg)(),(0,n.iD)("td",y,[(0,n.wy)((0,n._)("input",{type:"text",value:s.task.task,class:"input",onBlur:e[0]||(e[0]=(...t)=>r.switchEdit&&r.switchEdit(...t))},null,40,L),[[d]])])):((0,n.wg)(),(0,n.iD)("td",{key:0,class:(0,l.C_)(o.toDoStyle.done&&"inputDone")},(0,l.zw)(s.task.task),3)),(0,n._)("td",{onClick:e[1]||(e[1]=e=>t.$emit("changeStatus")),class:(0,l.C_)(o.toDoStyle)},(0,l.zw)(s.task.status),3),(0,n._)("td",null,[(0,n._)("div",_,[(0,n._)("span",{onClick:e[2]||(e[2]=e=>t.$emit("remove"))},[(0,n.Wm)(i)]),o.isEdit?((0,n.wg)(),(0,n.iD)("span",{key:0,onClick:e[3]||(e[3]=(...t)=>r.switchEdit&&r.switchEdit(...t))},[(0,n.Wm)(u)])):((0,n.wg)(),(0,n.iD)("span",{key:1,onClick:e[4]||(e[4]=t=>o.isEdit=!0)},[(0,n.Wm)(c)]))])])])}const b={fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"64px",height:"64px"},D=(0,n._)("path",{d:"M 28 6 C 25.791 6 24 7.791 24 10 L 24 12 L 23.599609 12 L 10 14 L 10 17 L 54 17 L 54 14 L 40.400391 12 L 40 12 L 40 10 C 40 7.791 38.209 6 36 6 L 28 6 z M 28 10 L 36 10 L 36 12 L 28 12 L 28 10 z M 12 19 L 14.701172 52.322266 C 14.869172 54.399266 16.605453 56 18.689453 56 L 45.3125 56 C 47.3965 56 49.129828 54.401219 49.298828 52.324219 L 51.923828 20 L 12 19 z M 20 26 C 21.105 26 22 26.895 22 28 L 22 51 L 19 51 L 18 28 C 18 26.895 18.895 26 20 26 z M 32 26 C 33.657 26 35 27.343 35 29 L 35 51 L 29 51 L 29 29 C 29 27.343 30.343 26 32 26 z M 44 26 C 45.105 26 46 26.895 46 28 L 45 51 L 42 51 L 42 28 C 42 26.895 42.895 26 44 26 z"},null,-1),I=[D];function E(t,e,s,a,o,r){return(0,n.wg)(),(0,n.iD)("svg",b,I)}var x={},A=s(89);const O=(0,A.Z)(x,[["render",E]]);var $=O;const M={fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px"},Z=(0,n._)("path",{d:"M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"},null,-1),j=[Z];function z(t,e,s,a,o,r){return(0,n.wg)(),(0,n.iD)("svg",M,j)}var N={};const V=(0,A.Z)(N,[["render",z]]);var W=V;const R={fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px"},B=(0,n._)("path",{d:"M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"},null,-1),H=[B];function P(t,e,s,a,o,r){return(0,n.wg)(),(0,n.iD)("svg",R,H)}var U={};const q=(0,A.Z)(U,[["render",P]]);var F=q,J={components:{TrashIcon:$,EditIcon:W,TickIcon:F},props:{task:[Object],statusArr:[Array]},data(){return{isEdit:!1,toDoStyle:{toDoLink:!0}}},methods:{switchEdit(t){this.isEdit=!1,this.$emit("updateTask",{newValue:t.target.value,oldTask:this.task})},checkStatus(){this.statusArr.forEach((t=>{const e=t.replace(/\s/g,"_").toLowerCase();this.task.status===t?this.toDoStyle[e]=!0:this.toDoStyle[e]=!1}))}},mounted(){this.checkStatus()},watch:{"task.status"(){this.checkStatus()}}};const K=(0,A.Z)(J,[["render",C],["__scopeId","data-v-32d60770"]]);var Q=K,Y={components:{ToDoItem:Q},props:{tasks:[Array],statusArr:[Array]},methods:{updateTask(t){t.oldTask.task!==t.newValue&&(t.oldTask.task=t.newValue,this.$emit("edit",t.oldTask))}}};const G=(0,A.Z)(Y,[["render",S],["__scopeId","data-v-6a6ff4b5"]]);var X=G,tt={components:{ToDoTable:X},data(){return{errors:[],taskInput:"",statusArr:["To do","In progress","Done"],inputStyle:{input:!0,inputError:!1}}},methods:{onSubmit(){0!==this.taskInput.length?(this.$store.dispatch("setTasksToStorage",{task:this.taskInput,status:this.statusArr[0],id:Date.now()}),this.taskInput="",this.inputStyle.inputError=!1,this.errors=[]):(this.errors.push("This field is required!"),this.inputStyle.inputError=!0)},onDelete(t){this.$store.dispatch("deleteTask",t)},editTask(t){this.$store.dispatch("editTask",t)},changeStatus(t){let e;this.statusArr.forEach(((s,a)=>{t.status===s&&(e=a)}));let s=this.statusArr[++e];this.$store.dispatch("editStatus",{editedTask:t,newStatus:s})}},mounted(){this.$store.dispatch("getTasksFromStorage")},computed:{tasks:function(){return this.$store.state.toDoList.tasks}}};const et=(0,A.Z)(tt,[["render",v],["__scopeId","data-v-119d1692"]]);var st=et,at=s(678);const nt=[{path:"/",component:st,title:"To Do List"},{path:"/else",component:st,title:"Next Page"}],ot=(0,at.p7)({routes:nt,history:(0,at.PO)("/")});var rt=ot;function it(t,e,s,a,o,r){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(i,{to:s.route.path,class:(0,l.C_)(o.itemStyle)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(s.route.title),1)])),_:1},8,["to","class"])}var ut={data(){return{itemStyle:{item:!0,active:!1}}},props:{route:[Object]},mounted(){this.$route.path===this.route.path?this.itemStyle.active=!0:this.itemStyle.active=!1},watch:{"$route.path"(){this.$route.path===this.route.path?this.itemStyle.active=!0:this.itemStyle.active=!1}}};const ct=(0,A.Z)(ut,[["render",it],["__scopeId","data-v-2f517597"]]);var lt=ct,dt={components:{HeaderItem:lt},data(){return{myRoutes:nt}}};const pt=(0,A.Z)(dt,[["render",c],["__scopeId","data-v-4c8d20fb"]]);var ht=pt,mt={components:{HeaderComponent:ht}};const kt=(0,A.Z)(mt,[["render",r]]);var vt=kt,ft={mounted(t){t.focus()}};const gt=["type","placeholder","value"];function wt(t,e,s,a,o,r){return(0,n.wg)(),(0,n.iD)("input",{type:s.type,placeholder:s.placeholder,class:(0,l.C_)(s.className),value:s.modelValue,onInput:e[0]||(e[0]=(...t)=>r.changeInput&&r.changeInput(...t))},null,42,gt)}var Tt={name:"custom-input",props:{modelValue:[String,Number],placeholder:[String],type:{type:String,default:"text"},className:[Object]},methods:{changeInput(t){this.$emit("update:modelValue",t.target.value)}}};const St=(0,A.Z)(Tt,[["render",wt],["__scopeId","data-v-cdb1e884"]]);var yt=St;function Lt(t,e,s,a,o,r){return(0,n.wg)(),(0,n.iD)("button",{class:(0,l.C_)(s.className)},(0,l.zw)(s.buttonText),3)}var _t={name:"custom-button",props:{buttonText:[String],className:[String]}};const Ct=(0,A.Z)(_t,[["render",Lt],["__scopeId","data-v-9fbfd454"]]);var bt=Ct,Dt=[yt,bt],It=s(65);const Et={state:()=>({tasks:[]}),getters:{getTasks:t=>t.tasks},mutations:{setTasks(t,e){t.tasks=e}},actions:{setTasks({commit:t},e){localStorage.clear(),t("setTasks",e),localStorage.setItem("tasks",JSON.stringify(e))},getTasksFromStorage({commit:t}){try{const e=localStorage.getItem("tasks")||[],s=JSON.parse(e);t("setTasks",s)}catch(e){t("setTasks",[])}},setTasksToStorage({state:t},e){this.dispatch("setTasks",[...t.tasks,e])},deleteTask({state:t},e){this.dispatch("setTasks",t.tasks.filter((t=>t.id!==e)))},editTask({state:t},e){const s=[...t.tasks];s.forEach((t=>{t.id===e.id&&(t=e)})),this.dispatch("setTasks",s)},editStatus({state:t},{editedTask:e,newStatus:s}){const a=[...t.tasks];a.forEach((t=>{t.id===e.id&&(t.status=s||"To do")})),this.dispatch("setTasks",a)}}};var xt=(0,It.MT)({modules:{toDoList:Et}});const At=(0,a.ri)(vt);Dt.forEach((t=>{At.component(t.name,t)})),At.directive("focus",ft),At.use(rt).use(xt).mount("#app")}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,o){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],o=t[l][2];for(var i=!0,u=0;u<a.length;u++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[u])}))?a.splice(u--,1):(i=!1,o<r&&(r=o));if(i){t.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,n,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,r=a[0],i=a[1],u=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)var l=u(s)}for(e&&e(a);c<r.length;c++)o=r[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},a=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(1985)}));a=s.O(a)})();
//# sourceMappingURL=app.43ac1005.js.map