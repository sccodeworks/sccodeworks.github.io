"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5621],{25621:(X,p,o)=>{o.r(p),o.d(p,{ReceivablesInvoiceInquiryRIComponent:()=>G});var s=o(98739),l=o(7155),I=o(70879),e=o(94650),g=o(19132),c=o(24006),f=o(36895),d=o(97392),v=o(4859),r=o(59549),R=o(44144),u=o(99602),m=o(73546);function C(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Date"),e.qZA())}function T(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Date)}}function y(n,t){1&n&&(e.ynx(0,35),e.YNc(1,C,2,0,"th",36),e.YNc(2,T,2,1,"td",37),e.BQk())}function h(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Tally"),e.qZA())}function Z(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Tally)}}function q(n,t){1&n&&(e.ynx(0,40),e.YNc(1,h,2,0,"th",36),e.YNc(2,Z,2,1,"td",37),e.BQk())}function b(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Reference Number"),e.qZA())}function D(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.ReferenceNo)}}function A(n,t){1&n&&(e.ynx(0,41),e.YNc(1,b,2,0,"th",36),e.YNc(2,D,2,1,"td",37),e.BQk())}function U(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Pieces"),e.qZA())}function N(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Pieces)}}function P(n,t){1&n&&(e.ynx(0,42),e.YNc(1,U,2,0,"th",36),e.YNc(2,N,2,1,"td",37),e.BQk())}function O(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Weight"),e.qZA())}function x(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Weight)}}function E(n,t){1&n&&(e.ynx(0,43),e.YNc(1,O,2,0,"th",36),e.YNc(2,x,2,1,"td",37),e.BQk())}function M(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Type"),e.qZA())}function Y(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Type)}}function Q(n,t){1&n&&(e.ynx(0,44),e.YNc(1,M,2,0,"th",36),e.YNc(2,Y,2,1,"td",37),e.BQk())}function B(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Return Payment Type"),e.qZA())}function W(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.RtnPayTp)}}function J(n,t){1&n&&(e.ynx(0,45),e.YNc(1,B,2,0,"th",36),e.YNc(2,W,2,1,"td",37),e.BQk())}function S(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Consignee"),e.qZA())}function k(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Consignee)}}function L(n,t){1&n&&(e.ynx(0,46),e.YNc(1,S,2,0,"th",36),e.YNc(2,k,2,1,"td",37),e.BQk())}function K(n,t){1&n&&(e.TgZ(0,"th",38),e._uU(1,"Min"),e.qZA())}function z(n,t){if(1&n&&(e.TgZ(0,"td",39),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.Min)}}function w(n,t){1&n&&(e.ynx(0,47),e.YNc(1,K,2,0,"th",36),e.YNc(2,z,2,1,"td",37),e.BQk())}function $(n,t){1&n&&e._UZ(0,"tr",48)}function F(n,t){1&n&&e._UZ(0,"tr",49)}const H=function(){return[8,16,24]};let G=(()=>{class n{constructor(i,a){this.router=i,this.fb=a,this.dataSource=new l.by,this.duplicateSource=[],this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.pageNumber=1,this.totalAmountDue=0,this.headerColumns=["Date","Tally","ReferenceNo","Pieces","Weight","Type","RtnPayTp","Consignee","Min"],this.fullWidthColumns=["Date","Tally","ReferenceNo","Pieces","Weight","Type","RtnPayTp","Consignee","Min"],this.displayedColumns=this.fullWidthColumns,this.receivablesUrl="/main-nav/receivables/read"}ngOnInit(){this.element=history.state,this.form=this.fb.group({invoiceNumber:"",period:"",storer:"",generated:"",date:"",time:"",pageOf:"1"}),this.getInvInquiryAI(this.pageSize,1)}ngOnDestroy(){this.invoiceInquirySubscription&&this.invoiceInquirySubscription.unsubscribe()}getInvInquiryAI(i,a){}onPaginateChange(i){this.pageSize=i.pageSize,this.getInvInquiryAI(i.pageSize,i.pageIndex+1)}onBack(){this.router.navigate([this.receivablesUrl])}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(g.F0),e.Y36(c.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-receivables-invoice-inquiry-ri"]],viewQuery:function(i,a){if(1&i&&e.Gf(s.NW,5),2&i){let _;e.iGM(_=e.CRH())&&(a.paginator=_.first)}},standalone:!0,features:[e.jDz],decls:64,vars:23,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","invoiceNumber"],["matInput","","formControlName","period"],["matInput","","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["datePicker",""],["matInput","","type","Time","formControlName","time","placeholder","HH:mm","id","generatedtime"],["matInput","","formControlName","generated"],["matInput","","formControlName","pageOf"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","storer"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","Date",4,"ngIf"],["matColumnDef","Tally",4,"ngIf"],["matColumnDef","ReferenceNo",4,"ngIf"],["matColumnDef","Pieces",4,"ngIf"],["matColumnDef","Weight",4,"ngIf"],["matColumnDef","Type",4,"ngIf"],["matColumnDef","RtnPayTp",4,"ngIf"],["matColumnDef","Consignee",4,"ngIf"],["matColumnDef","Min",4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"Content-page-both"],[1,"left-side"],[1,"buttons","button3"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],["matColumnDef","Date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["matColumnDef","Tally"],["matColumnDef","ReferenceNo"],["matColumnDef","Pieces"],["matColumnDef","Weight"],["matColumnDef","Type"],["matColumnDef","RtnPayTp"],["matColumnDef","Consignee"],["matColumnDef","Min"],["mat-header-row",""],["mat-row",""]],template:function(i,a){if(1&i&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),e.NdJ("click",function(){return a.onBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before "),e.qZA()(),e._uU(6,"Receiving Invoice Worksheet Inquiry "),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),e._uU(13," Invoice Number "),e.qZA(),e._UZ(14,"input",8),e.qZA(),e.TgZ(15,"mat-form-field",7)(16,"mat-label"),e._uU(17,"Period"),e.qZA(),e._UZ(18,"input",9),e.qZA(),e.TgZ(19,"mat-form-field",7)(20,"mat-label"),e._uU(21,"date "),e.qZA(),e._UZ(22,"input",10)(23,"mat-datepicker-toggle",11)(24,"mat-datepicker",null,12),e.qZA(),e.TgZ(26,"mat-form-field",7)(27,"mat-label"),e._uU(28,"Time"),e.qZA(),e._UZ(29,"input",13),e.qZA(),e.TgZ(30,"mat-form-field",7)(31,"mat-label"),e._uU(32,"Generated"),e.qZA(),e._UZ(33,"input",14),e.qZA(),e.TgZ(34,"mat-form-field",7)(35,"mat-label"),e._uU(36," Page Of "),e.qZA(),e._UZ(37,"input",15),e.qZA(),e.TgZ(38,"mat-form-field",16)(39,"mat-label"),e._uU(40," Storer "),e.qZA(),e._UZ(41,"input",17),e.qZA()()()()(),e._UZ(42,"br"),e.TgZ(43,"table",18),e.YNc(44,y,3,0,"ng-container",19),e.YNc(45,q,3,0,"ng-container",20),e.YNc(46,A,3,0,"ng-container",21),e.YNc(47,P,3,0,"ng-container",22),e.YNc(48,E,3,0,"ng-container",23),e.YNc(49,Q,3,0,"ng-container",24),e.YNc(50,J,3,0,"ng-container",25),e.YNc(51,L,3,0,"ng-container",26),e.YNc(52,w,3,0,"ng-container",27),e.YNc(53,$,1,0,"tr",28),e.YNc(54,F,1,0,"tr",29),e.qZA(),e.TgZ(55,"div",30),e._UZ(56,"br")(57,"br"),e.TgZ(58,"div",31)(59,"button",32),e._uU(60),e.ALo(61,"number"),e.qZA()()(),e.TgZ(62,"mat-paginator",33,34),e.NdJ("page",function(j){return a.onPaginateChange(j)}),e.qZA()()),2&i){const _=e.MAs(25);e.xp6(8),e.Q6J("formGroup",a.form),e.xp6(14),e.Q6J("matDatepicker",_),e.xp6(1),e.Q6J("for",_),e.xp6(20),e.Q6J("dataSource",a.dataSource),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Date")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Tally")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("ReferenceNo")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Pieces")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Weight")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Type")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("RtnPayTp")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Consignee")),e.xp6(1),e.Q6J("ngIf",a.displayedColumns.includes("Min")),e.xp6(1),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(6),e.hij(" Total Amount : $",e.xi3(61,19,a.totalAmountDue,"1.2-2")," "),e.xp6(2),e.Q6J("length",a.totalRecords)("pageSizeOptions",e.DdM(22,H))("pageSize",a.pageSize)}},dependencies:[I.m,f.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,s.NW,d.Hw,v.lW,r.KE,r.hX,r.R9,R.Nt,u.Mq,u.hl,u.nW,m.a8,m.dk,m.dn,m.n5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,f.JJ]}),n})()}}]);