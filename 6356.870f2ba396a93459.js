"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6356,1790,8754,5645,2313],{11790:(_,b,r)=>{r.d(b,{y:()=>M});var f=r(65412),o=r(94650),h=r(97392),C=r(4859);let d=(()=>{class t{constructor(u,U){this.dialogRef=u,this.data=U}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return t.\u0275fac=function(u){return new(u||t)(o.Y36(f.so),o.Y36(f.WI))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(u,U){1&u&&(o.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),o.NdJ("click",function(){return U.closeDialog()}),o._uU(3,"close "),o.qZA(),o.TgZ(4,"span",3),o._uU(5),o.qZA()(),o.TgZ(6,"button",4),o._uU(7,"Cancel"),o.qZA(),o.TgZ(8,"button",5),o._uU(9,"Delete"),o.qZA()()),2&u&&(o.xp6(5),o.Oqu(U.data.message),o.xp6(1),o.Q6J("mat-dialog-close",!1),o.xp6(2),o.Q6J("mat-dialog-close",!0))},dependencies:[h.Hw,C.lW,f.ZT]}),t})(),M=(()=>{class t{constructor(u){this.dialog=u}openCustomAlert(u){return this.dialog.open(d,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:u}})}}return t.\u0275fac=function(u){return new(u||t)(o.LFG(f.uw))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},26356:(_,b,r)=>{r.r(b),r.d(b,{MetricUnitsComponent:()=>$});var f=r(98739),o=r(7155),h=r(65412),C=r(35226),d=r.n(C),M=r(70879),t=r(94650),c=r(24006),u=r(80529),U=r(75625),Z=r(70262),D=r(62843),N=r(92340);let T=(()=>{class i{constructor(e){this.httpClient=e,this.url=N.N.API_BASE_URL1,this.httpHeader={headers:new u.WM({"Content-Type":"application/json"})}}getMetricUnits(){return this.httpClient.get(this.url+"/MetricUnits/read")}getAll(e){return this.httpClient.get(this.url+`/MetricUnits/readAll?user=${e}`)}createMetricUnits(e,n,s,l){return this.httpClient.post(this.url+"/MetricUnits/create",{U2MTYP:e,U2MEAS:n,U2DESC:s,user:l}).pipe((0,U.X)(1),(0,Z.K)(this.httpError))}updateMetricUnits(e,n,s,l){return this.httpClient.put(this.url+"/MetricUnits/update",{U2MTYP:e,U2MEAS:n,U2DESC:s,user:l}).pipe((0,U.X)(1),(0,Z.K)(this.httpError))}deleteMetricUnits(e,n){return this.httpClient.delete(this.url+`/MetricUnits/delete?user=${e}&U2MTYP=${n}`)}httpError(e){let n="";return n=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(n),(0,D._)(()=>new Error(n))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(u.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var v=r(97392),A=r(4859),g=r(59549),S=r(44144),m=r(73546);let Y=(()=>{class i{constructor(e,n,s,l){this.anyvariable=e,this.fb=n,this.MetricUnitSvc=s,this.dialogRef=l,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({U2MTYP:this.anyvariable.U2MTYP,U2MEAS:this.anyvariable.U2MEAS,U2DESC:this.anyvariable.U2DESC})}ngOnDestroy(){this.MetricUnitSubscription&&this.MetricUnitSubscription.unsubscribe()}updateMetricUnits(){var e=this.form.value;this.MetricUnitSubscription&&this.MetricUnitSubscription.unsubscribe(),this.MetricUnitSubscription=this.MetricUnitSvc.updateMetricUnits(e.U2MTYP,e.U2MEAS,e.U2DESC,this.user).subscribe(n=>{var s=n.acknowledgement;console.log(n),JSON.parse(n.success)?(this.successMessage(s),this.closeDialog()):this.failureMessage(s)})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.WI),t.Y36(c.qu),t.Y36(T),t.Y36(h.so))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-metric-units-update"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","U2MTYP"],["matInput","","formControlName","U2MEAS"],["matInput","","formControlName","U2DESC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Metric Units"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Metric Type "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Unit Of Measure"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return n.updateMetricUnits()}),t._uU(25," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[M.m,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,v.Hw,A.lW,g.KE,g.hX,S.Nt,m.a8,m.dk,m.dn,m.n5]}),i})(),x=(()=>{class i{constructor(e,n,s,l){this.anyvariable=e,this.fb=n,this.MetricUnitSvc=s,this.dialogRef=l,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({U2MTYP:"",U2MEAS:"",U2DESC:""})}ngOnDestroy(){this.MetricUnitSubscription&&this.MetricUnitSubscription.unsubscribe()}createMetricUnits(){var e=this.form.value;this.MetricUnitSubscription&&this.MetricUnitSubscription.unsubscribe(),this.MetricUnitSubscription=this.MetricUnitSvc.createMetricUnits(e.U2MTYP,e.U2MEAS,e.U2DESC,this.user).subscribe(n=>{console.log(n);var s=n.acknowledgement;JSON.parse(n.success)?(this.successMessage(s),this.closeDialog()):this.failureMessage(s)})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.WI),t.Y36(c.qu),t.Y36(T),t.Y36(h.so))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-metric-units-add"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","U2MTYP"],["readonly","","matInput","","formControlName","U2MEAS"],["matInput","","formControlName","U2DESC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Metric Units"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Metric Type "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Unit Of Measure"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t._UZ(23,"input",11),t.qZA()()(),t.TgZ(24,"button",12),t.NdJ("click",function(){return n.createMetricUnits()}),t._uU(25," Add "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[M.m,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,v.Hw,A.lW,g.KE,g.hX,S.Nt,m.a8,m.dk,m.dn,m.n5]}),i})();var y=r(19132),w=r(11790),J=r(36895),E=r(10266);function I(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchMetricUnits())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function F(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchMetricUnits())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function k(i,a){if(1&i&&(t.TgZ(0,"form",22)(1,"div",23)(2,"div",24)(3,"mat-form-field",25)(4,"mat-label"),t._uU(5,"Metric Type"),t.qZA(),t._UZ(6,"input",26),t.qZA()()(),t.TgZ(7,"button",27),t._uU(8," Search "),t.qZA()()),2&i){const e=t.oxw();t.Q6J("formGroup",e.form)}}function O(i,a){1&i&&(t.TgZ(0,"th",28),t._uU(1," Metric "),t.qZA())}function q(i,a){if(1&i&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.U2MTYP)}}function Q(i,a){1&i&&(t.TgZ(0,"th",28),t._uU(1," Unit Of Measure "),t.qZA())}function H(i,a){if(1&i&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.U2MEAS)}}function B(i,a){1&i&&(t.TgZ(0,"th",28),t._uU(1," Description "),t.qZA())}function R(i,a){if(1&i&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Oqu(e.U2DESC)}}function G(i,a){1&i&&t._UZ(0,"th",30)}function P(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"td",29)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",33)(6,"li")(7,"button",34),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.editMetricUnit(l))}),t.TgZ(8,"mat-icon",35),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()(),t.TgZ(12,"li")(13,"button",34),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteMetricUnits(l))}),t.TgZ(14,"mat-icon",36),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function W(i,a){1&i&&t._UZ(0,"tr",37)}function z(i,a){1&i&&t._UZ(0,"tr",38)}const X=function(){return[8,16,24]};let $=(()=>{class i{constructor(e,n,s,l,p,K){this.router=e,this.fb=n,this.route=s,this.matDialog=l,this.MetricUnitSvc=p,this.CustomAlertService=K,this.displayedColumns=["Metric","UnitOfMeasure","Description","Actions"],this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1}searchMetricUnits(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.form=this.fb.group({SRCH:""}),this.getMetricUnits()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getMetricUnits(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.MetricUnitSvc.getMetricUnits().subscribe(e=>{console.log(e);var n=e.data[1].value;console.log(n);var s=JSON.parse(n);this.dataSource=new o.by(s.returnedData),this.dataSource.paginator=this.paginator})}deleteMetricUnits(e){this.CustomAlertService.openCustomAlert("Are you sure you want to delete this Metric Type: "+e.U2MTYP+"? ").afterClosed().subscribe(s=>{s&&(this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.MetricUnitSvc.deleteMetricUnits(this.user,e.U2MTYP).subscribe(l=>{const p=l.message;JSON.parse(l.success)?(this.successMessage(p),this.getMetricUnits()):(this.failureMessage(p),this.getMetricUnits())}))})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}addMetricUnit(){this.matDialog.open(x,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}editMetricUnit(e){this.matDialog.open(Y,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y.F0),t.Y36(c.qu),t.Y36(y.gz),t.Y36(h.uw),t.Y36(T),t.Y36(w.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-metric-units"]],viewQuery:function(e,n){if(1&e&&t.Gf(f.NW,5),2&e){let s;t.iGM(s=t.CRH())&&(n.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:29,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Unit",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Unit ",1,"addButton",3,"click"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Metric"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","UnitOfMeasure"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Unit",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Metric Units"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,I,3,0,"button",3),t.YNc(6,F,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.addMetricUnit()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,k,9,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,O,2,0,"th",10),t.YNc(15,q,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,Q,2,0,"th",10),t.YNc(18,H,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,B,2,0,"th",10),t.YNc(21,R,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,G,1,0,"th",15),t.YNc(24,P,18,0,"td",11),t.BQk(),t.YNc(25,W,1,0,"tr",16),t.YNc(26,z,1,0,"tr",17),t.qZA(),t._UZ(27,"mat-paginator",18,19),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!n.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,X)))},dependencies:[M.m,J.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,f.NW,v.Hw,A.lW,g.KE,g.hX,S.Nt,m.a8,m.dk,m.dn,m.n5,o.BZ,o.fO,o.as,o.w1,o.Dz,o.nj,o.ge,o.ev,o.XQ,o.Gk,E.gM]}),i})()}}]);