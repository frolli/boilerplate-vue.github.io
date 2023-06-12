import{g as A,x as K,y as T,z as B,m as D,j as R,A as c,q as O,_ as z,r as p,B as P,o as m,c as h,e as a,w as d,a as b,C as k,v as N,D as S,E as x,n as C,b as $}from"../index84091.js";const E={setup(){A(()=>{i.value=!0,s.value={first:0,rows:y.value.rows,sortField:null,sortOrder:null,filters:r.value},K.register("myfilter",(l,V)=>l===V),e()});const v=T(),t=B(),_=D(()=>v.responseUsers),o=D(()=>v.userRoles),U=R(),y=c(),f=c(),r=c({global:{value:null,matchMode:"contains"},full_name:{value:"",matchMode:"contains"},email:{value:"",matchMode:"contains"},company_name:{value:"",matchMode:"contains"},enabled:{value:"",matchMode:"contains"},role:{value:"",matchMode:"contains"}}),i=c(!0),s=c(),w=c(0),M=c([{label:"Attivo",value:"true"},{label:"Disattivo",value:"false"}]),F=c([{label:"Utente",value:"user"},{label:"Admin",value:"admin"}]),g=c([{label:"My Filter",value:"myfilter"}]);function e(){i.value=!0;const l=new Map;l.set("company_name",r.value.company_name.value),l.set("email",r.value.email.value),l.set("full_name",r.value.full_name.value),l.set("enabled",r.value.enabled.value),l.set("role",r.value.role.value),l.set("page",s.value.page+1),l.set("per_page",s.value.rows),s.value.sortField&&(s.value.sortOrder==1?l.set("sorted_by",s.value.sortField+"_asc"):l.set("sorted_by",s.value.sortField+"_desc")),setTimeout(()=>{u(l)},Math.random()*1e3+250)}const u=async function(l){await v.fetchAllUsers(l).then(()=>{i.value=!1}).catch(V=>{i.value=!1,O(U,V)})};return{dt:y,responseUsers:_,filters:r,loading:i,totalRecords:w,lazyParams:s,matchModes:g,userRoles:o,status:M,roles:F,currentUser:f,onPage:l=>{s.value=l,e()},onSort:l=>{s.value=l,e()},onFilter:()=>{s.value.page=0,s.value.filters=r.value,e()},showSidebar:function(l){t.setDetailType("user",!1,"Dettaglio utente",l.id),t.updateSidebar(!0)},loadLazyData:e}},components:{}};const j={class:"flex justify-content-between align-items-center"},L={class:"p-input-icon-left w-full mr-3 py-2"},I=b("i",{class:"pi pi-search"},null,-1),q={key:0,class:"pi pi-check font-semibold"},G={key:1,class:"pi pi-times text-red-600 font-semibold"};function H(v,t,_,o,U,y){const f=p("InputText"),r=p("Button"),i=p("Column"),s=p("Dropdown"),w=p("Badge"),M=p("DataTable"),F=p("ConfirmPopup"),g=P("tooltip");return m(),h("div",null,[a(M,{value:o.responseUsers.users,totalRecords:o.responseUsers.total,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":t[1]||(t[1]=e=>o.filters=e),ref:"dt",dataKey:"id",loading:o.loading,onPage:t[2]||(t[2]=e=>o.onPage(e)),onSort:t[3]||(t[3]=e=>o.onSort(e)),onFilter:t[4]||(t[4]=e=>o.onFilter()),filterDisplay:"row",removableSort:"",stripedRows:""},{header:d(()=>[b("div",j,[b("span",L,[I,a(f,{modelValue:o.filters.global.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.filters.global.value=e),placeholder:"Ricerca utente",class:"border-none w-full"},null,8,["modelValue"])]),b("div",null,[k(a(r,{icon:"pi pi-download",text:"",rounded:"","aria-label":"Dowload",size:"large"},null,512),[[g,"Scarica",void 0,{top:!0}]])])])]),empty:d(()=>[N(" Nessun utente trovato. ")]),default:d(()=>[a(i,{field:"company_name",header:"Azienda",filterMatchMode:"contains",ref:"company_name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:u})=>[a(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:S(n=>u(),["enter"]),class:"p-column-filter",placeholder:"Filtra per azienda"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),a(i,{field:"full_name",header:"Nome Cognome",filterMatchMode:"contains",ref:"full_name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:u})=>[a(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:S(n=>u(),["enter"]),class:"p-column-filter",placeholder:"Filtra per nome cognome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),a(i,{field:"email",header:"Email",filterMatchMode:"contains",ref:"email",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:u})=>[a(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,onKeydown:S(n=>u(),["enter"]),class:"p-column-filter",placeholder:"Filtra per email"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),a(i,{header:"Ruolo",filterMatchMode:"contains",ref:"role",field:"role",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:u})=>[a(s,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:o.roles,optionValue:"value",optionLabel:"label",onChange:n=>u(),placeholder:"Filtra per ruolo"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:d(({data:e})=>[e.role=="user"?(m(),x(w,{key:0,value:"Utente",class:C(["px-4",e.role])},null,8,["class"])):e.role=="admin"?(m(),x(w,{key:1,value:"Admin",class:C(["px-4",e.role])},null,8,["class"])):(m(),x(w,{key:2,value:e.role,class:C(["px-4",e.role])},null,8,["value","class"]))]),_:1},512),a(i,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:d(({filterModel:e,filterCallback:u})=>[a(s,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:o.status,optionValue:"value",optionLabel:"label",onChange:n=>u(),placeholder:"Filtra per stato"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),body:d(({data:e})=>[e.enabled?(m(),h("i",q)):(m(),h("i",G))]),_:1},512),a(i,{header:"",style:{width:"4rem"}},{body:d(({data:e})=>[k(a(r,{type:"button",onClick:u=>o.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[g,"Edit",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"]),a(F)])}const J=z(E,[["render",H]]),Q={setup(){const v=T(),t=D(()=>v.getTotalUsers),_=B();return{totalUser:t,showSidebar:function(){_.setDetailType("user",!0,"Nuovo utente",null),_.updateSidebar(!0),_.setShowDetail(!0)}}},components:{UsersTable:J}},W={class:"flex justify-content-between align-items-center"},X={class:""},Y={key:0},Z={key:1};function ee(v,t,_,o,U,y){const f=p("Button"),r=p("UsersTable");return m(),h("div",null,[b("div",W,[b("h1",X,[o.totalUser==1?(m(),h("span",Y," 1 Utente")):(m(),h("span",Z,$(o.totalUser)+" Utenti",1))]),a(f,{label:"Aggiungi utente",onClick:t[0]||(t[0]=i=>o.showSidebar()),class:"mb-3",rounded:"",outlined:""})]),a(r)])}const se=z(Q,[["render",ee]]);export{se as default};
