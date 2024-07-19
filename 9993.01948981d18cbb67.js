"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9993,1790,8754,5645,2313],{11790:(y,F,i)=>{i.d(F,{y:()=>v});var p=i(65412),s=i(94650),C=i(97392),T=i(4859);let t=(()=>{class o{constructor(m,h){this.dialogRef=m,this.data=h}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return o.\u0275fac=function(m){return new(m||o)(s.Y36(p.so),s.Y36(p.WI))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(m,h){1&m&&(s.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),s.NdJ("click",function(){return h.closeDialog()}),s._uU(3,"close "),s.qZA(),s.TgZ(4,"span",3),s._uU(5),s.qZA()(),s.TgZ(6,"button",4),s._uU(7,"Cancel"),s.qZA(),s.TgZ(8,"button",5),s._uU(9,"Delete"),s.qZA()()),2&m&&(s.xp6(5),s.Oqu(h.data.message),s.xp6(1),s.Q6J("mat-dialog-close",!1),s.xp6(2),s.Q6J("mat-dialog-close",!0))},dependencies:[C.Hw,T.lW,p.ZT]}),o})(),v=(()=>{class o{constructor(m){this.dialog=m}openCustomAlert(m){return this.dialog.open(t,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:m}})}}return o.\u0275fac=function(m){return new(m||o)(s.LFG(p.uw))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},69993:(y,F,i)=>{i.r(F),i.d(F,{MaintainEmailFormatsComponent:()=>G});var p=i(65412),s=i(35226),C=i.n(s),T=i(70879),t=i(94650),v=i(19132),o=i(24006),g=i(82302),m=i(97392),h=i(4859),Z=i(59549),_=i(44144),f=i(73546);let M=(()=>{class e{constructor(a,n,r,u,d,R){this.data=a,this.dialogRef=n,this.router=r,this.fb=u,this.EmailFormatsSvc=d,this.anyvariable=R,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({DocumentName:this.anyvariable.EFDNAM,NewName:""})}copyEmailFormats(){var a=this.form.value;console.log(a),this.EmailFormatsSvc.copyEmailFormats(a.NewName,this.user).subscribe(n=>{if(this.result=n,console.log(this.result),JSON.parse(this.result.success))this.successMessage("created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/MaintainEmailFormats/read"]);else{const r=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(r)}})}successMessage(a){C().fire(a,"","success")}failureMessage(a){C().fire(a,"","error")}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(p.WI),t.Y36(p.so),t.Y36(v.F0),t.Y36(o.qu),t.Y36(g.r),t.Y36(p.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-copy-maintain-email-formats"]],standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","DocumentName","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","NewName",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Copy An e-Mail Format"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," Document Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"New Name "),t.qZA(),t._UZ(19,"input",10),t.qZA()()(),t.TgZ(20,"button",11),t.NdJ("click",function(){return n.copyEmailFormats()}),t._uU(21,"Copy"),t.qZA()()()()),2&a&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[T.m,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,m.Hw,h.lW,Z.KE,Z.hX,_.Nt,f.a8,f.dk,f.dn,f.n5]}),e})();var c=i(7155),b=i(98739),E=i(11790),D=i(36895),A=i(10266);function x(e,l){if(1&e){const a=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(a);const r=t.oxw();return t.KtG(r.searcheMailFormats())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function N(e,l){if(1&e){const a=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(a);const r=t.oxw();return t.KtG(r.searcheMailFormats())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function U(e,l){if(1&e&&(t.TgZ(0,"form",21)(1,"div",22)(2,"div",23)(3,"mat-form-field",24)(4,"mat-label"),t._uU(5,"Document Name"),t.qZA(),t._UZ(6,"input",25),t.qZA()()(),t.TgZ(7,"button",26),t._uU(8," Search "),t.qZA()()),2&e){const a=t.oxw();t.Q6J("formGroup",a.form)}}function w(e,l){1&e&&(t.TgZ(0,"th",27),t._uU(1,"Document"),t.qZA())}function S(e,l){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const a=l.$implicit;t.xp6(1),t.Oqu(a.EFDNAM)}}function J(e,l){1&e&&(t.TgZ(0,"th",27),t._uU(1,"Description"),t.qZA())}function Y(e,l){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const a=l.$implicit;t.xp6(1),t.Oqu(a.DESC)}}function I(e,l){1&e&&(t.TgZ(0,"th",27),t._uU(1,"Last Changed"),t.qZA())}function Q(e,l){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const a=l.$implicit;t.xp6(1),t.Oqu(a.EFDATE)}}function k(e,l){1&e&&t._UZ(0,"th",29)}function q(e,l){if(1&e){const a=t.EpF();t.TgZ(0,"td",28)(1,"div",30)(2,"button",31)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",32)(6,"li")(7,"button",33),t.NdJ("click",function(){const u=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.Copy(u))}),t.TgZ(8,"mat-icon",34),t._uU(9,"call_made"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Copy"),t.qZA()()(),t.TgZ(12,"li")(13,"button",33),t.NdJ("click",function(){const u=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.Details(u))}),t.TgZ(14,"mat-icon",34),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Details"),t.qZA()()(),t.TgZ(18,"li")(19,"button",33),t.NdJ("click",function(){const u=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.deleteEmailFormat(u.EFDNAM))}),t.TgZ(20,"mat-icon",35),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()()()()()}}function H(e,l){1&e&&t._UZ(0,"tr",36)}function O(e,l){1&e&&t._UZ(0,"tr",37)}const B=function(){return[8,16,24]};let G=(()=>{class e{constructor(a,n,r,u,d){this.fb=a,this.router=n,this.matDialog=r,this.CustomAlertService=u,this.EmailFormatsSvc=d,this.form=this.fb.group({SRCH:""}),this.displayedColumns=["Document","Description","Last Changed","Actions"],this.searchTextDisplay=!1,this.dataSource=[],this.user=localStorage.getItem("userName")}Copy(a){this.matDialog.open(M,{width:"1000px",maxHeight:"80vh",data:a,autoFocus:!1})}Details(a){console.log(a),this.router.navigateByUrl("/main-nav/email-format/read",{state:a})}searcheMailFormats(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.getEmailFormats()}getEmailFormats(){this.EmailFormatsSvc.getEmailFormats().subscribe(a=>{console.log(a),this.result=a,console.log(this.result);var n=this.result.data[1].value;console.log(n);var r=JSON.parse(n);console.log("DaTA"),this.dataSource=new c.by(r.returnedData),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}deleteEmailFormat(a){this.CustomAlertService.openCustomAlert("Delete this Document : "+a+"? ").afterClosed().subscribe(r=>{r&&(this.result=this.EmailFormatsSvc.deleteEmailFormat(a,this.user).subscribe(u=>{if(this.result=u,console.log(this.result),JSON.parse(this.result.success))this.successMessage(" deleted successfully"),this.getEmailFormats();else{const d=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(d),this.getEmailFormats()}}))})}successMessage(a){C().fire(a,"","success"),this.router.navigate(["/main-nav/MaintainEmailFormats/read"])}failureMessage(a){C().fire(a,"","error")}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(o.qu),t.Y36(v.F0),t.Y36(p.uw),t.Y36(E.y),t.Y36(g.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-maintain-email-formats"]],viewQuery:function(a,n){if(1&a&&t.Gf(b.NW,5),2&a){let r;t.iGM(r=t.CRH())&&(n.paginator=r.first)}},standalone:!0,features:[t.jDz],decls:26,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton","matTooltip","search eMailFormats",3,"click",4,"ngIf"],["mat-button","","class","addButton",3,"click",4,"ngIf"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Document"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Description"],["matColumnDef","Last Changed"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","","matTooltip","search eMailFormats",1,"addButton",3,"click"],["mat-button","",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(a,n){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With e-Mail Formats "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,x,3,0,"button",3),t.YNc(6,N,3,0,"button",4),t.qZA()(),t.TgZ(7,"mat-card-content",5),t.YNc(8,U,9,1,"form",6),t.qZA(),t.TgZ(9,"table",7),t.ynx(10,8),t.YNc(11,w,2,0,"th",9),t.YNc(12,S,2,1,"td",10),t.BQk(),t.ynx(13,11),t.YNc(14,J,2,0,"th",9),t.YNc(15,Y,2,1,"td",10),t.BQk(),t.ynx(16,12),t.YNc(17,I,2,0,"th",9),t.YNc(18,Q,2,1,"td",10),t.BQk(),t.ynx(19,13),t.YNc(20,k,1,0,"th",14),t.YNc(21,q,24,0,"td",10),t.BQk(),t.YNc(22,H,1,0,"tr",15),t.YNc(23,O,1,0,"tr",16),t.qZA(),t._UZ(24,"mat-paginator",17,18),t.qZA()),2&a&&(t.xp6(5),t.Q6J("ngIf",!n.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(2),t.Q6J("ngIf",n.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,B)))},dependencies:[T.m,D.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,b.NW,m.Hw,h.lW,Z.KE,Z.hX,_.Nt,f.a8,f.dk,f.dn,f.n5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,A.gM]}),e})()}}]);