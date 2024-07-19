"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[8220,1790,8754,5645,2313],{11790:(v,A,l)=>{l.d(A,{y:()=>g});var u=l(65412),n=l(94650),Z=l(97392),h=l(4859);let _=(()=>{class t{constructor(r,f){this.dialogRef=r,this.data=f}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(r){return new(r||t)(n.Y36(u.so),n.Y36(u.WI))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(r,f){1&r&&(n.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),n.NdJ("click",function(){return f.closeDialog()}),n._uU(3,"close "),n.qZA(),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.TgZ(6,"button",4),n._uU(7,"Cancel"),n.qZA(),n.TgZ(8,"button",5),n._uU(9,"Delete"),n.qZA()()),2&r&&(n.xp6(5),n.Oqu(f.data.message),n.xp6(1),n.Q6J("mat-dialog-close",!1),n.xp6(2),n.Q6J("mat-dialog-close",!0))},dependencies:[Z.Hw,h.lW,u.ZT]}),t})(),g=(()=>{class t{constructor(r){this.dialog=r}openCustomAlert(r){return this.dialog.open(_,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:r}})}}return t.\u0275fac=function(r){return new(r||t)(n.LFG(u.uw))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},78220:(v,A,l)=>{l.r(A),l.d(A,{WorkWithApplicationFieldsComponent:()=>et});var u=l(98739),n=l(7155),Z=l(35226),h=l.n(Z),_=l(70879),g=l(65412),t=l(94650),c=l(24006),r=l(19132),f=l(34478),C=l(97392),D=l(4859),F=l(59549),T=l(44144),d=l(73546);let y=(()=>{class i{constructor(e,o,s,m,p){this.anyvariable=e,this.fb=o,this.router=s,this.Applicationfields=m,this.dialogRef=p,this.result=[],this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getApplicationfieldsSubscription&&this.getApplicationfieldsSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({FDFLID:{value:this.anyvariable.FDFLID,disabled:!0},FDFDNO:{value:this.anyvariable.FDFDNO,disabled:!0},FDDOMN:this.anyvariable.DOMN,FDFLD:this.anyvariable.FDFLD,FDHDG1:"",FDHDG2:"",FDHDG3:"",FDALIS:"",FDUSER:{value:this.anyvariable.FDUSER,disabled:!0},FDTMST:{value:this.anyvariable.FDTMST,disabled:!0}})}updateApplicationfields(){var e=this.form.value;console.log(e),this.getApplicationfieldsSubscription&&this.getApplicationfieldsSubscription.unsubscribe(),this.getApplicationfieldsSubscription=this.Applicationfields.updateApplicationfields(e.FDFLID,e.FDFDNO,e.FDDOMN,e.FDFLD,e.FDHDG1,e.FDHDG2,e.FDHDG3,e.FDALIS,e.FDUSER,e.FDTMST,this.user).subscribe(o=>{if(console.log(o),JSON.parse(o.success))this.successMessage("Application fields updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/Applicationfields/read"]);else{const s=JSON.parse(o[0].data[1].value).returnedData.message;this.failureMessage(s)}})}successMessage(e){h().fire(e,"","success")}failureMessage(e){h().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.WI),t.Y36(c.qu),t.Y36(r.F0),t.Y36(f.B),t.Y36(g.so))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-update-work-with-application-fields"]],standalone:!0,features:[t.jDz],decls:58,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FDFLID","readonly",""],["matInput","","formControlName","FDFDNO","readonly",""],["matInput","","formControlName","FDDOMN",2,"text-transform","uppercase"],["matInput","","formControlName","FDFLD",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","FDHDG1"],["matInput","","formControlName","FDHDG2"],["matInput","","formControlName","FDHDG3"],["matInput","","formControlName","FDALIS",2,"text-transform","uppercase"],["matInput","","formControlName","FDUSER","readonly",""],["matInput","","formControlName","FDTMST","readonly",""],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Application Fields"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"File ID"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Field Number"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Domain Name"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Field Name"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"div",13)(29,"label",14),t._uU(30,"Column Headings"),t.qZA(),t.TgZ(31,"div",15)(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Column Headings 1"),t.qZA(),t._UZ(35,"input",16),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Column Headings 2"),t.qZA(),t._UZ(39,"input",17),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Column Headings 3"),t.qZA(),t._UZ(43,"input",18),t.qZA()()(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Alias Name"),t.qZA(),t._UZ(47,"input",19),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Change Profile"),t.qZA(),t._UZ(51,"input",20),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Last Changed"),t.qZA(),t._UZ(55,"input",21),t.qZA()()(),t.TgZ(56,"button",22),t.NdJ("click",function(){return o.updateApplicationfields()}),t._uU(57,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.form))},dependencies:[_.m,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,C.Hw,D.lW,F.KE,F.hX,T.Nt,d.a8,d.dk,d.dn,d.n5]}),i})();var U=l(72441),k=l(11790),b=l(36895),W=l(28255),x=l(10266),N=l(90455);function S(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchApplicationFields())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function w(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchApplicationFields())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function q(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(s){return s.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",31),t.NdJ("ngModelChange",function(s){const p=t.CHM(e).$implicit;return t.KtG(p.isActive=s)})("change",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.toggleColumn(m))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&i){const e=a.$implicit;t.xp6(1),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function H(i,a){if(1&i&&(t.TgZ(0,"form",32)(1,"div",33)(2,"div",34)(3,"mat-form-field",35)(4,"mat-label"),t._uU(5,"File ID "),t.qZA(),t._UZ(6,"input",36),t.qZA()()(),t.TgZ(7,"button",37),t._uU(8," Search "),t.qZA()()),2&i){const e=t.oxw();t.Q6J("formGroup",e.form)}}function M(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"File ID"),t.qZA())}function I(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.FDFLID)}}function Y(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"Field Number"),t.qZA())}function O(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.FDFDNO)}}function J(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"Field Name"),t.qZA())}function L(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.FDFLD)}}function B(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"Domain"),t.qZA())}function G(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.DOMN)}}function Q(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"Description"),t.qZA())}function R(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.DTEXT)}}function E(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"Last Changed By"),t.qZA())}function $(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.FDUSER)}}function K(i,a){1&i&&(t.TgZ(0,"th",38),t._uU(1,"On"),t.qZA())}function z(i,a){if(1&i&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.FDTMST)}}function X(i,a){1&i&&t._UZ(0,"th",40)}function j(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",39)(1,"div",41)(2,"button",42)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",43)(6,"li")(7,"button",44),t.NdJ("click",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.updateApplicationfields(m))}),t.TgZ(8,"mat-icon",45),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",44),t.NdJ("click",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.keywordsApplicationfields(m))}),t.TgZ(14,"mat-icon",45),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Keywords"),t.qZA()()(),t.TgZ(18,"li")(19,"button",44),t.NdJ("click",function(){const m=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteApplicationfields(m))}),t.TgZ(20,"mat-icon",46),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()()()()()}}function P(i,a){1&i&&t._UZ(0,"tr",47)}function V(i,a){1&i&&t._UZ(0,"tr",48)}const tt=function(){return[8,16,24]};let et=(()=>{class i{constructor(e,o,s,m,p,it){this.fb=e,this.matDialog=o,this.router=s,this.route=m,this.CustomAlertService=p,this.Applicationfields=it,this.displayedColumns=["FileID","FieldNumber","FieldName","Domain","Description","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({SRCH:""}),this.getApplicationfields()}getApplicationfields(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.Applicationfields.getApplicationfields().subscribe(e=>{console.log(e);var s=JSON.parse(e.data[1].value);this.dataSource=new n.by(s.returnedData),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchApplicationFields(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let o=this.displayedColumns.indexOf(e.name);o>-1&&this.displayedColumns.splice(o,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((e,o)=>{"Actions"!=e&&"LastChangedBy"!=e&&this.columnShowHideList.push({position:o,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"LastChangedBy",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"On",isActive:!1}),console.log(this.columnShowHideList)}addApplicationfields(){this.matDialog.open(U.AddWorkWithApplicationFieldsComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}updateApplicationfields(e){this.matDialog.open(y,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}keywordsApplicationfields(e){this.router.navigateByUrl("/main-nav/applicationdomains/keywords")}deleteApplicationfields(e){this.successMessage("Application Fields Deleted successfully")}successMessage(e){h().fire(e,"","success"),this.router.navigate(["/main-nav/Applicationfields/read"])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.qu),t.Y36(g.uw),t.Y36(r.F0),t.Y36(r.gz),t.Y36(k.y),t.Y36(f.B))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-work-with-application-fields"]],viewQuery:function(e,o){if(1&e&&t.Gf(u.NW,5),2&e){let s;t.iGM(s=t.CRH())&&(o.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:48,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton","matTooltip","search ApplicationFields",3,"click",4,"ngIf"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New ApplicationDomains",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","FileID"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","FieldNumber"],["matColumnDef","FieldName"],["matColumnDef","Domain"],["matColumnDef","Description"],["matColumnDef","LastChangedBy"],["matColumnDef","On"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","","matTooltip","search ApplicationFields",1,"addButton",3,"click"],["mat-button","",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Application Fields"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,S,3,0,"button",3),t.YNc(6,w,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return o.addApplicationfields()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"mat-menu",null,6),t.YNc(12,q,4,2,"span",7),t.qZA(),t.TgZ(13,"button",8,9)(15,"mat-icon"),t._uU(16,"visibility_off"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,H,9,1,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,M,2,0,"th",14),t.YNc(22,I,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,Y,2,0,"th",14),t.YNc(25,O,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,J,2,0,"th",14),t.YNc(28,L,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,B,2,0,"th",14),t.YNc(31,G,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,Q,2,0,"th",14),t.YNc(34,R,2,1,"td",15),t.BQk(),t.ynx(35,20),t.YNc(36,E,2,0,"th",14),t.YNc(37,$,2,1,"td",15),t.BQk(),t.ynx(38,21),t.YNc(39,K,2,0,"th",14),t.YNc(40,z,2,1,"td",15),t.BQk(),t.ynx(41,22),t.YNc(42,X,1,0,"th",23),t.YNc(43,j,24,0,"td",15),t.BQk(),t.YNc(44,P,1,0,"tr",24),t.YNc(45,V,1,0,"tr",25),t.qZA(),t._UZ(46,"mat-paginator",26,27),t.qZA()),2&e){const s=t.MAs(11);t.xp6(5),t.Q6J("ngIf",!o.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(6),t.Q6J("ngForOf",o.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(5),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,tt))}},dependencies:[_.m,b.sg,b.O5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.sg,c.u,u.NW,C.Hw,W.VK,W.p6,D.lW,F.KE,F.hX,T.Nt,d.a8,d.dk,d.dn,d.n5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,x.gM,N.Rr]}),i})()}}]);