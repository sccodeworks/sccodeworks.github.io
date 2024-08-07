"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6368],{6368:(j,g,s)=>{s.r(g),s.d(g,{LtlBatchesComponent:()=>K});var C=s(98739),i=s(7155),p=s(65412),L=s(35226),h=s.n(L),B=s(70879),t=s(94650),c=s(24006),T=s(72947),b=s(97392),Z=s(4859),u=s(59549),_=s(44144),d=s(99602),r=s(73546);let S=(()=>{class a{constructor(e,o,l,m){this.anyvariable=e,this.fb=o,this.LtlBatchesSvc=l,this.dialogRef=m,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getLtlBatchesSubscription&&this.getLtlBatchesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({BHBTCH:{value:this.anyvariable.BHBTCH,disabled:!0},BHSCAC:this.anyvariable.BHSCAC,BHCHGD:this.anyvariable.BHCHGD,BHCHGU:this.anyvariable.ScheduledShipDate,BHSTAT:{value:this.anyvariable.BHCHGD,disabled:!0},Status:{value:this.anyvariable.BHSTAT,disabled:!0}})}UpdateLtlBatches(){var e=this.form.value;this.getLtlBatchesSubscription&&this.getLtlBatchesSubscription.unsubscribe(),this.getLtlBatchesSubscription=this.LtlBatchesSvc.updateLTLbatches(e.BHBTCH,e.BHSCAC,e.BHCHGD,e.BHCHGU,e.BHSTAT,e.Status,this.user).subscribe(o=>{var l=o.acknowledgement;console.log(o),JSON.parse(o.success)?(this.successMessage(l),this.closeDialog()):this.failureMessage(l)})}successMessage(e){h().fire(e,"","success")}failureMessage(e){h().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.WI),t.Y36(c.qu),t.Y36(T.s),t.Y36(p.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ltl-batch-change"]],standalone:!0,features:[t.jDz],decls:41,vars:3,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","BHBTCH","readonly",""],["matInput","","formControlName","BHSCAC",2,"text-transform","uppercase"],["type","datetime-local","matInput","","formControlName","BHCHGD"],["readonly","","matInput","","formControlName","BHCHGU",3,"matDatepicker"],["matSuffix","",3,"for"],["ChangedDatePicker",""],["matInput","","formControlName","BHSTAT","readonly",""],["matInput","","formControlName","Status","readonly",""],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Batch"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Batch Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"SCAC Code"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Scheduled Ship"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26," Changed Date "),t.qZA(),t._UZ(27,"input",12)(28,"mat-datepicker-toggle",13)(29,"mat-datepicker",null,14),t.qZA(),t.TgZ(31,"mat-form-field",8)(32,"mat-label"),t._uU(33,"Changed By"),t.qZA(),t._UZ(34,"input",15),t.qZA(),t.TgZ(35,"mat-form-field",8)(36,"mat-label"),t._uU(37,"Status"),t.qZA(),t._UZ(38,"input",16),t.qZA()()(),t.TgZ(39,"button",17),t.NdJ("click",function(){return o.UpdateLtlBatches()}),t._uU(40,"Update"),t.qZA()()()()),2&e){const l=t.MAs(30);t.xp6(9),t.Q6J("formGroup",o.form),t.xp6(18),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l)}},dependencies:[B.m,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,b.Hw,Z.lW,u.KE,u.hX,u.R9,_.Nt,d.Mq,d.hl,d.nW,r.a8,r.dk,r.dn,r.n5]}),a})();var A=s(19132),v=s(36895),y=s(10266);function x(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.searchLTLBatches())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function U(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.searchLTLBatches())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function H(a,n){if(1&a&&(t.TgZ(0,"form",24)(1,"div",25)(2,"div",26)(3,"mat-form-field",27)(4,"mat-label"),t._uU(5," Batch Number"),t.qZA(),t._UZ(6,"input",28),t.qZA()()(),t.TgZ(7,"button",29),t._uU(8," Search "),t.qZA()()),2&a){const e=t.oxw();t.Q6J("formGroup",e.form)}}function D(a,n){1&a&&(t.TgZ(0,"th",30),t._uU(1," Batch Number "),t.qZA())}function N(a,n){if(1&a&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.BHBTCH)}}function q(a,n){1&a&&(t.TgZ(0,"th",30),t._uU(1," SCAC Code "),t.qZA())}function Y(a,n){if(1&a&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.BHSCAC)}}function w(a,n){1&a&&(t.TgZ(0,"th",30),t._uU(1," Number of Shipments "),t.qZA())}function J(a,n){if(1&a&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.NUMB)}}function k(a,n){1&a&&(t.TgZ(0,"th",30),t._uU(1," Scheduled Ship Date "),t.qZA())}function G(a,n){if(1&a&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.ScheduledShipDate)}}function Q(a,n){1&a&&(t.TgZ(0,"th",30),t._uU(1," Changed By "),t.qZA())}function M(a,n){if(1&a&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.BHCHGD)}}function I(a,n){1&a&&(t.TgZ(0,"th",30),t._uU(1," Status "),t.qZA())}function O(a,n){if(1&a&&(t.TgZ(0,"td",31),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.BHSTAT)}}function F(a,n){1&a&&t._UZ(0,"th",32)}function R(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"td",31)(1,"div",33)(2,"button",34)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",35)(6,"li")(7,"button",36),t.NdJ("click",function(){const m=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.Update(m))}),t.TgZ(8,"mat-icon",37),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",36),t.NdJ("click",function(){const m=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.Details(m))}),t.TgZ(14,"mat-icon",37),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Details"),t.qZA()()()()()()}}function W(a,n){1&a&&t._UZ(0,"tr",38)}function $(a,n){1&a&&t._UZ(0,"tr",39)}const z=function(){return[8,16,24]};let K=(()=>{class a{constructor(e,o,l,m){this.fb=e,this.matDialog=o,this.LtlBatchesSvc=l,this.router=m,this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.displayedColumns=["BatchNumber","SCACCode","NumberofShipments","ScheduledShipDate","ChangedBy","Status","Actions"]}searchLTLBatches(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.form=this.fb.group({SRCH:""}),this.getLTLbatches()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getLTLbatches(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LtlBatchesSvc.getLTLbatches().subscribe(e=>{console.log(e);var o=e.data[1].value;console.log(o);var l=JSON.parse(o);this.dataSource=new i.by(l.returnedData),this.dataSource.paginator=this.paginator})}Update(e){this.matDialog.open(S,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}Details(e){this.router.navigateByUrl("/main-nav/LtlBatches/Details",{state:e})}successMessage(e){h().fire(e,"","success")}failureMessage(e){h().fire(e,"","error")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(c.qu),t.Y36(p.uw),t.Y36(T.s),t.Y36(A.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ltl-batches"]],viewQuery:function(e,o){if(1&e&&t.Gf(C.NW,5),2&e){let l;t.iGM(l=t.CRH())&&(o.paginator=l.first)}},standalone:!0,features:[t.jDz],decls:35,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton","matTooltip","search LTLBatches",3,"click",4,"ngIf"],["mat-button","","class","addButton",3,"click",4,"ngIf"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","BatchNumber"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","SCACCode"],["matColumnDef","NumberofShipments"],["matColumnDef","ScheduledShipDate"],["matColumnDef","ChangedBy"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","","matTooltip","search LTLBatches",1,"addButton",3,"click"],["mat-button","",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With LTL Batches "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,x,3,0,"button",3),t.YNc(6,U,3,0,"button",4),t.qZA()(),t.TgZ(7,"mat-card-content",5),t.YNc(8,H,9,1,"form",6),t.qZA(),t.TgZ(9,"table",7),t.ynx(10,8),t.YNc(11,D,2,0,"th",9),t.YNc(12,N,2,1,"td",10),t.BQk(),t.ynx(13,11),t.YNc(14,q,2,0,"th",9),t.YNc(15,Y,2,1,"td",10),t.BQk(),t.ynx(16,12),t.YNc(17,w,2,0,"th",9),t.YNc(18,J,2,1,"td",10),t.BQk(),t.ynx(19,13),t.YNc(20,k,2,0,"th",9),t.YNc(21,G,2,1,"td",10),t.BQk(),t.ynx(22,14),t.YNc(23,Q,2,0,"th",9),t.YNc(24,M,2,1,"td",10),t.BQk(),t.ynx(25,15),t.YNc(26,I,2,0,"th",9),t.YNc(27,O,2,1,"td",10),t.BQk(),t.ynx(28,16),t.YNc(29,F,1,0,"th",17),t.YNc(30,R,18,0,"td",10),t.BQk(),t.YNc(31,W,1,0,"tr",18),t.YNc(32,$,1,0,"tr",19),t.qZA(),t._UZ(33,"mat-paginator",20,21),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",!o.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(2),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,z)))},dependencies:[B.m,v.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,C.NW,b.Hw,Z.lW,u.KE,u.hX,_.Nt,r.a8,r.dk,r.dn,r.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,y.gM]}),a})()}}]);