"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[4512,1790,8754,5645,2313],{11790:(y,f,m)=>{m.d(f,{y:()=>T});var _=m(65412),a=m(94650),h=m(97392),t=m(4859);let c=(()=>{class r{constructor(s,g){this.dialogRef=s,this.data=g}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return r.\u0275fac=function(s){return new(s||r)(a.Y36(_.so),a.Y36(_.WI))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(s,g){1&s&&(a.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),a.NdJ("click",function(){return g.closeDialog()}),a._uU(3,"close "),a.qZA(),a.TgZ(4,"span",3),a._uU(5),a.qZA()(),a.TgZ(6,"button",4),a._uU(7,"Cancel"),a.qZA(),a.TgZ(8,"button",5),a._uU(9,"Delete"),a.qZA()()),2&s&&(a.xp6(5),a.Oqu(g.data.message),a.xp6(1),a.Q6J("mat-dialog-close",!1),a.xp6(2),a.Q6J("mat-dialog-close",!0))},dependencies:[h.Hw,t.lW,_.ZT]}),r})(),T=(()=>{class r{constructor(s){this.dialog=s}openCustomAlert(s){return this.dialog.open(c,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:s}})}}return r.\u0275fac=function(s){return new(s||r)(a.LFG(_.uw))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},74512:(y,f,m)=>{m.r(f),m.d(f,{WwPendingpaymentsComponent:()=>it});var _=m(98739),a=m(7155),h=m(70879),t=m(94650),c=m(24006),T=m(65412),r=m(19132),d=m(11790),s=m(36895),g=m(97392),P=m(28255),D=m(4859),Z=m(59549),x=m(44144),A=m(99602),C=m(73546),U=m(10266),w=m(90455);function E(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.searchPendingPayments())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function W(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.searchPendingPayments())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function b(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"span",33),t.NdJ("click",function(l){return l.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",34),t.NdJ("ngModelChange",function(l){const p=t.CHM(n).$implicit;return t.KtG(p.isActive=l)})("change",function(){const u=t.CHM(n).$implicit,p=t.oxw();return t.KtG(p.toggleColumn(u))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngModel",n.isActive),t.xp6(1),t.hij(" ",n.name," ")}}function N(e,o){if(1&e&&(t.TgZ(0,"form",35)(1,"div",36)(2,"div",37)(3,"div",38)(4,"label",39),t._uU(5,"Customer"),t.qZA(),t.TgZ(6,"div",40)(7,"mat-form-field",41)(8,"mat-label"),t._uU(9,"Costumer"),t.qZA(),t._UZ(10,"input",42),t.qZA(),t.TgZ(11,"mat-form-field",41)(12,"mat-label"),t._uU(13,"Costumer Suffix"),t.qZA(),t._UZ(14,"input",43),t.qZA(),t.TgZ(15,"mat-form-field",44)(16,"mat-label"),t._uU(17,"Costumer Secondary Suffix"),t.qZA(),t._UZ(18,"input",45),t.qZA()()(),t.TgZ(19,"mat-form-field",41)(20,"mat-label"),t._uU(21,"Check Number"),t.qZA(),t._UZ(22,"input",46),t.qZA(),t.TgZ(23,"div",38)(24,"label",39),t._uU(25,"Date"),t.qZA(),t.TgZ(26,"div",40)(27,"mat-form-field",41)(28,"mat-label"),t._uU(29,"Start Date"),t.qZA(),t._UZ(30,"input",47)(31,"mat-datepicker-toggle",48)(32,"mat-datepicker",null,49),t.qZA(),t.TgZ(34,"mat-form-field",41)(35,"mat-label"),t._uU(36,"End Date"),t.qZA(),t._UZ(37,"input",50)(38,"mat-datepicker-toggle",48)(39,"mat-datepicker",null,51),t.qZA()()(),t.TgZ(41,"mat-form-field",41)(42,"mat-label"),t._uU(43,"Payment Number"),t.qZA(),t._UZ(44,"input",52),t.qZA(),t.TgZ(45,"mat-form-field",41)(46,"mat-label"),t._uU(47,"Reference Number"),t.qZA(),t._UZ(48,"input",53),t.qZA(),t.TgZ(49,"mat-form-field",41)(50,"mat-label"),t._uU(51,"Status"),t.qZA(),t._UZ(52,"input",54),t.qZA()()(),t.TgZ(53,"button",55),t._uU(54," Search "),t.qZA()()),2&e){const n=t.MAs(33),i=t.MAs(40),l=t.oxw();t.Q6J("formGroup",l.form),t.xp6(30),t.Q6J("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(6),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i)}}function S(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Status"),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHSTAT)}}function v(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Transaction Code"),t.qZA())}function O(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHTRNC)}}function q(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Paying Customer"),t.qZA())}function H(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.CSDSC)}}function B(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Check Number"),t.qZA())}function R(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHCHK)}}function Y(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Payment Date"),t.qZA())}function k(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHDATE)}}function I(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Un-applied Balance"),t.qZA())}function L(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHUBAL)}}function Q(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Check Amount"),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHAMT)}}function J(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1," Payment Number"),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHPAY)}}function $(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Payment Reference"),t.qZA())}function G(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHREF)}}function z(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Deposit Date"),t.qZA())}function X(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHDDAT)}}function j(e,o){1&e&&(t.TgZ(0,"th",56),t._uU(1,"Description "),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"td",57),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.PHDESC)}}function tt(e,o){1&e&&t._UZ(0,"th",58)}function et(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",57)(1,"div",59)(2,"button",60)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",61)(6,"li")(7,"button",62),t.NdJ("click",function(){const u=t.CHM(n).$implicit,p=t.oxw();return t.KtG(p.deletePendingpayments(u))}),t.TgZ(8,"mat-icon",63),t._uU(9,"delete"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Delete"),t.qZA()()(),t.TgZ(12,"li")(13,"button",62),t.NdJ("click",function(){const u=t.CHM(n).$implicit,p=t.oxw();return t.KtG(p.PendingPaymentsReviewerrors(u))}),t.TgZ(14,"mat-icon",64),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Review Errors"),t.qZA()()()()()()}}function nt(e,o){1&e&&t._UZ(0,"tr",65)}function ot(e,o){1&e&&t._UZ(0,"tr",66)}const at=function(){return[8,16,24]};let it=(()=>{class e{constructor(n,i,l,u){this.fb=n,this.matDialog=i,this.router=l,this.CustomAlertService=u,this.displayedColumns=["Status","TransactionCode","PayingCustomer","CheckNumber","PaymentDate","UnappliedBalance","CheckAmount","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.duplicateSource=[{PHSTAT:"UB",PHTRNC:"C",CSDSC:"1301 Neils Serial St",PHCHK:"Cr0000093",PHDATE:"02/03/23",PHUBAL:"$100.00",PHAMT:"$100.00",PHPAY:4,PHREF:"",PHDDAT:"",PHDESC:""}],this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({CUST:"",CSFX:"",CSF2:"",CHK:"",STDT:"",ENDT:"",PAY:"",REF:"",STAT:""}),this.dataSource=new a.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchPendingPayments(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(n){if(n.isActive)this.displayedColumns.splice(n.position>this.displayedColumns.length-1?this.displayedColumns.length-1:n.position,0,n.name);else{let i=this.displayedColumns.indexOf(n.name);i>-1&&this.displayedColumns.splice(i,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((n,i)=>{"Actions"!=n&&"PaymentNumber"!=n&&this.columnShowHideList.push({position:i,name:n,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"PaymentNumber",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"PaymentReference",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"DepositDate",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Description",isActive:!1}),console.log(this.columnShowHideList)}PendingPaymentsReviewerrors(n){this.router.navigateByUrl("/main-nav/validation-errors/read")}deletePendingpayments(n){this.CustomAlertService.openCustomAlert("Are you sure you want to delete this Pending Payments  ? ")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.qu),t.Y36(T.uw),t.Y36(r.F0),t.Y36(d.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-pendingpayments"]],viewQuery:function(n,i){if(1&n&&t.Gf(_.NW,5),2&n){let l;t.iGM(l=t.CRH())&&(i.paginator=l.first)}},standalone:!0,features:[t.jDz],decls:57,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search PendingPayments ",3,"click",4,"ngIf"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","TransactionCode"],["matColumnDef","PayingCustomer"],["matColumnDef","CheckNumber"],["matColumnDef","PaymentDate"],["matColumnDef","UnappliedBalance"],["matColumnDef","CheckAmount"],["matColumnDef","PaymentNumber"],["matColumnDef","PaymentReference"],["matColumnDef","DepositDate"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search PendingPayments ",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CUST"],["matInput","","formControlName","CSFX",2,"text-transform","uppercase"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","CSF2",2,"text-transform","uppercase"],["matInput","","formControlName","CHK",2,"text-transform","uppercase"],["matInput","","formControlName","STDT",3,"matDatepicker"],["matSuffix","",3,"for"],["StartDatePicker",""],["matInput","","formControlName","ENDT",3,"matDatepicker"],["EndDatePicker",""],["matInput","","formControlName","PAY"],["matInput","","formControlName","REF",2,"text-transform","uppercase"],["matInput","","formControlName","STAT",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(n,i){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Pending Payments "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,E,3,0,"button",3),t.YNc(6,W,3,0,"button",4),t.TgZ(7,"mat-menu",null,5),t.YNc(9,b,4,2,"span",6),t.qZA(),t.TgZ(10,"button",7,8)(12,"mat-icon"),t._uU(13,"visibility_off"),t.qZA()()()(),t.TgZ(14,"mat-card-content",9),t.YNc(15,N,55,5,"form",10),t.qZA(),t.TgZ(16,"table",11),t.ynx(17,12),t.YNc(18,S,2,0,"th",13),t.YNc(19,M,2,1,"td",14),t.BQk(),t.ynx(20,15),t.YNc(21,v,2,0,"th",13),t.YNc(22,O,2,1,"td",14),t.BQk(),t.ynx(23,16),t.YNc(24,q,2,0,"th",13),t.YNc(25,H,2,1,"td",14),t.BQk(),t.ynx(26,17),t.YNc(27,B,2,0,"th",13),t.YNc(28,R,2,1,"td",14),t.BQk(),t.ynx(29,18),t.YNc(30,Y,2,0,"th",13),t.YNc(31,k,2,1,"td",14),t.BQk(),t.ynx(32,19),t.YNc(33,I,2,0,"th",13),t.YNc(34,L,2,1,"td",14),t.BQk(),t.ynx(35,20),t.YNc(36,Q,2,0,"th",13),t.YNc(37,K,2,1,"td",14),t.BQk(),t.ynx(38,21),t.YNc(39,J,2,0,"th",13),t.YNc(40,F,2,1,"td",14),t.BQk(),t.ynx(41,22),t.YNc(42,$,2,0,"th",13),t.YNc(43,G,2,1,"td",14),t.BQk(),t.ynx(44,23),t.YNc(45,z,2,0,"th",13),t.YNc(46,X,2,1,"td",14),t.BQk(),t.ynx(47,24),t.YNc(48,j,2,0,"th",13),t.YNc(49,V,2,1,"td",14),t.BQk(),t.ynx(50,25),t.YNc(51,tt,1,0,"th",26),t.YNc(52,et,18,0,"td",14),t.BQk(),t.YNc(53,nt,1,0,"tr",27),t.YNc(54,ot,1,0,"tr",28),t.qZA(),t._UZ(55,"mat-paginator",29,30),t.qZA()),2&n){const l=t.MAs(8);t.xp6(5),t.Q6J("ngIf",i.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!i.searchTextDisplay),t.xp6(3),t.Q6J("ngForOf",i.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",l),t.xp6(5),t.Q6J("ngIf",i.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",i.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,at))}},dependencies:[h.m,s.sg,s.O5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.sg,c.u,_.NW,g.Hw,P.VK,P.p6,D.lW,Z.KE,Z.hX,Z.R9,x.Nt,A.Mq,A.hl,A.nW,C.a8,C.dk,C.dn,C.n5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,U.gM,w.Rr]}),e})()}}]);