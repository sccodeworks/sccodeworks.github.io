"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9829],{69829:(ie,h,s)=>{s.r(h),s.d(h,{ReceivablesInvoiceInquirySiComponent:()=>ee});var d=s(98739),l=s(7155),T=s(70879),e=s(94650),u=s(24006),S=s(19132),C=s(81543),g=s(36895),y=s(97392),f=s(28255),b=s(4859),v=s(59549),A=s(44144),I=s(99602),p=s(73546),Z=s(10266),D=s(90455);function q(i,n){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",13)(2,"div",49)(3,"span",50),e.NdJ("click",function(a){return a.stopPropagation()}),e.TgZ(4,"mat-slide-toggle",51),e.NdJ("ngModelChange",function(a){const _=e.CHM(t).$implicit;return e.KtG(_.isActive=a)})("change",function(){const r=e.CHM(t).$implicit,_=e.oxw();return e.KtG(_.toggleColumn(r))}),e._uU(5),e.qZA()()()(),e.BQk()}if(2&i){const t=n.$implicit;e.xp6(4),e.Q6J("ngModel",t.isActive),e.xp6(1),e.hij(" ",t.name," ")}}function R(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1," Item "),e.qZA())}function N(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.hij(" ",t.WKITDSC," ")}}function U(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Balance"),e.qZA())}function E(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.lnq("",0!==t.WK1BALN?t.WK1BALN:""," ",0!==t.WK1BALN&&0!==t.WK1BUNT?" ":"","",0!==t.WK1BUNT?t.WK1BUNT:"","")}}function M(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Weight"),e.qZA())}function W(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.lnq("",0!==t.WK1WGHT?t.WK1WGHT:""," ",0!==t.WK1WGHT&&0!==t.WK1WUNT?" ":"","",0!==t.WK1WUNT?t.WK1WUNT:"","")}}function P(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Date Received"),e.qZA())}function O(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(t.WKS1RCVD)}}function K(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Charge Amount"),e.qZA())}function x(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(0!==t.WKAMT?t.WKAMT:"")}}function B(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"MN"),e.qZA())}function L(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(t.WK1MIN)}}function G(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Transaction Date"),e.qZA())}function Y(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(t.WKS1TRAN)}}function w(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Shipped"),e.qZA())}function H(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(t.WSHIP)}}function Q(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Rate"),e.qZA())}function $(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(0!==t.WKRATE?t.WKRATE:"")}}function k(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Days Past Grace"),e.qZA())}function J(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(0!==t.WKPGRAC?t.WKPGRAC:"")}}function F(i,n){1&i&&(e.TgZ(0,"th",52),e._uU(1,"Months Storage"),e.qZA())}function z(i,n){if(1&i&&(e.TgZ(0,"td",53),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(0!==t.WKS1MULT?t.WKS1MULT:"")}}function j(i,n){1&i&&e._UZ(0,"tr",54)}function V(i,n){1&i&&e._UZ(0,"tr",55)}const X=function(){return[8,16,24]};let ee=(()=>{class i{constructor(t,o,a){this.fb=t,this.router=o,this.RecvSvc=a,this.dataSource=new l.by,this.duplicateSource=[],this.user=localStorage.getItem("userName")||"",this.editedRows=[],this.searchTextDisplay=!1,this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.pageNumber=1,this.displayedColumns=["Item","Balance","Weight","DateReceived","ChargeAmount","MN"],this.columnShowHideList=[],this.totalAmountDue=0,this.Storer=0,this.StorerName="",this.isNavigating=!1,this.receivablesUrl="/main-nav/receivables/read"}toggleColumn(t){if(t.isActive)this.displayedColumns.splice(t.position>this.displayedColumns.length-1?this.displayedColumns.length-1:t.position,0,t.name);else{let o=this.displayedColumns.indexOf(t.name);o>-1&&this.displayedColumns.splice(o,1)}}initializeColumnProperties(){this.displayedColumns.forEach((t,o)=>{"Actions"!=t&&this.columnShowHideList.push({position:o,name:t,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"TransactionDate",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Shipped",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Rate",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"DaysPastGrace",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"MonthsStorage",isActive:!1})}searchItem(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.element=history.state,this.form=this.fb.group({invoiceNumber:this.element.WKINV,PositiontoItem:"",GENDT:"",GENTM:"",Period:this.element.AHDESC}),this.initializeColumnProperties(),this.editedRows=[],this.getInvInquirySI(this.pageSize,this.pageNumber),this.dataSource.filterPredicate=this.createFilter()}ngOnDestroy(){this.invoiceInquirySubscription&&this.invoiceInquirySubscription.unsubscribe()}createFilter(){return(t,o)=>{const a=JSON.parse(o);return Object.keys(a).every(r=>t[r].toString().toLowerCase().includes(a[r].toLowerCase()))}}getInvInquirySI(t,o){const a=this.currentFilters||{},{WKINVN:r=`${this.element.WKINV}`}=a;this.invoiceInquirySubscription&&this.invoiceInquirySubscription.unsubscribe(),this.invoiceInquirySubscription=this.RecvSvc.FreightInv(this.user,r,t,o).subscribe(_=>{try{const c=JSON.parse(_[0].data[1]?.value),m=c.returnedData;if("SI1"===c.Type)return void this.router.navigate(["/main-nav/receivables/invoice-inquiry-Storage-SI2"],{state:{invoice:this.element.WKINV,Name:m[0].WKSNAME}});this.displayedColumns=98===m[0]?.WKS1TYPE?["Item"]:["Item","Balance","Weight","DateReceived","ChargeAmount","MN"],this.dataSource.data=m,this.loadGeneratedDateTime(m[0].WKGEND),this.totalAmountDue=c["Total Amount Due"],this.Storer=m[0].S1STOR,this.StorerName=m[0].WKSNAME,this.fullStorer=`${this.Storer}  ${this.StorerName}`,this.totalAmountDue=c["Total Amount Due"],console.log(this.fullStorer),this.totalRecords=c.TotalRecords}catch(c){console.error("Error processing response:",c)}})}loadGeneratedDateTime(t){const o=t.replace('WKGEND":"',"").replace(/"/g,""),a="20"+o.substring(1,3),r=o.substring(3,5),_=o.substring(5,7),c=o.substring(7,9),m=o.substring(9,11);this.form.patchValue({GENDT:new Date(`${a}-${r}-${_}`),GENTM:`${c}:${m}`})}onPaginateChange(t){this.pageSize=t.pageSize,this.getInvInquirySI(t.pageSize,t.pageIndex+this.pageNumber)}getInquireBySearch(t){this.currentFilters=t,this.paginator.firstPage(),this.getInvInquirySI(this.pageSize,this.pageNumber)}resetSearch(){this.form.reset(),this.currentFilters=null,this.paginator.firstPage(),this.getInvInquirySI(this.pageSize,this.pageNumber)}onBack(){this.router.navigate([this.receivablesUrl])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.qu),e.Y36(S.F0),e.Y36(C.Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-receivables-invoice-inquiry-si"]],viewQuery:function(t,o){if(1&t&&e.Gf(d.NW,5),2&t){let a;e.iGM(a=e.CRH())&&(o.paginator=a.first)}},standalone:!0,features:[e.jDz],decls:100,vars:16,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],["mat-button","","type","reset","value","Reset","matTooltip","Reset",1,"addButton","buttons",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","invoiceNumber"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","Period"],["matInput","","formControlName","positionToItem"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","GENDT","readonly","",3,"matDatepicker"],["GeneratedDatePicker",""],["matInput","","formControlName","GENTM","readonly",""],["matInput","",3,"value"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","Item"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Balance"],["matColumnDef","Weight"],["matColumnDef","DateReceived"],["matColumnDef","ChargeAmount"],["matColumnDef","MN"],["matColumnDef","TransactionDate"],["matColumnDef","Shipped"],["matColumnDef","Rate"],["matColumnDef","DaysPastGrace"],["matColumnDef","MonthsStorage"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"Content-page-both"],[1,"left-side1"],[1,"buttons","button3"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),e.NdJ("click",function(){return o.onBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before "),e.qZA()(),e._uU(6,"Grace Period Exception Inquiry"),e.qZA(),e.TgZ(7,"div",3)(8,"mat-menu",4,5)(10,"div",6),e.YNc(11,q,6,2,"ng-container",7),e.qZA()(),e.TgZ(12,"button",8,9)(14,"mat-icon"),e._uU(15,"visibility_off"),e.qZA()(),e.TgZ(16,"button",10),e.NdJ("click",function(){return o.resetSearch()}),e.TgZ(17,"mat-icon"),e._uU(18,"loop"),e.qZA()()()(),e.TgZ(19,"mat-card-content",11)(20,"form",12)(21,"div",13)(22,"div",14)(23,"mat-form-field",15)(24,"mat-label"),e._uU(25," Invoice Number "),e.qZA(),e._UZ(26,"input",16),e.qZA(),e.TgZ(27,"mat-form-field",17)(28,"mat-label"),e._uU(29," Period "),e.qZA(),e._UZ(30,"input",18),e.qZA(),e.TgZ(31,"mat-form-field",15)(32,"mat-label"),e._uU(33,"Position to Item"),e.qZA(),e._UZ(34,"input",19),e.qZA(),e.TgZ(35,"div",20)(36,"label",21),e._uU(37,"Generated"),e.qZA(),e.TgZ(38,"div",22)(39,"mat-form-field",15)(40,"mat-label"),e._uU(41,"Generated Date "),e.qZA(),e._UZ(42,"input",23)(43,"mat-datepicker",null,24),e.qZA(),e.TgZ(45,"mat-form-field",15)(46,"mat-label"),e._uU(47,"Generated Time"),e.qZA(),e._UZ(48,"input",25),e.qZA()()(),e.TgZ(49,"mat-form-field",17)(50,"mat-label"),e._uU(51," Storer "),e.qZA(),e._UZ(52,"input",26),e.qZA()()(),e.TgZ(53,"button",27),e._uU(54," Search "),e.qZA()()(),e._UZ(55,"br"),e.TgZ(56,"table",28),e.ynx(57,29),e.YNc(58,R,2,0,"th",30),e.YNc(59,N,2,1,"td",31),e.BQk(),e.ynx(60,32),e.YNc(61,U,2,0,"th",30),e.YNc(62,E,2,3,"td",31),e.BQk(),e.ynx(63,33),e.YNc(64,M,2,0,"th",30),e.YNc(65,W,2,3,"td",31),e.BQk(),e.ynx(66,34),e.YNc(67,P,2,0,"th",30),e.YNc(68,O,2,1,"td",31),e.BQk(),e.ynx(69,35),e.YNc(70,K,2,0,"th",30),e.YNc(71,x,2,1,"td",31),e.BQk(),e.ynx(72,36),e.YNc(73,B,2,0,"th",30),e.YNc(74,L,2,1,"td",31),e.BQk(),e.ynx(75,37),e.YNc(76,G,2,0,"th",30),e.YNc(77,Y,2,1,"td",31),e.BQk(),e.ynx(78,38),e.YNc(79,w,2,0,"th",30),e.YNc(80,H,2,1,"td",31),e.BQk(),e.ynx(81,39),e.YNc(82,Q,2,0,"th",30),e.YNc(83,$,2,1,"td",31),e.BQk(),e.ynx(84,40),e.YNc(85,k,2,0,"th",30),e.YNc(86,J,2,1,"td",31),e.BQk(),e.ynx(87,41),e.YNc(88,F,2,0,"th",30),e.YNc(89,z,2,1,"td",31),e.BQk(),e.YNc(90,j,1,0,"tr",42),e.YNc(91,V,1,0,"tr",43),e.qZA(),e._UZ(92,"br"),e.TgZ(93,"div",44)(94,"div",45)(95,"button",46),e._uU(96),e.ALo(97,"number"),e.qZA()()(),e.TgZ(98,"mat-paginator",47,48),e.NdJ("page",function(r){return o.onPaginateChange(r)}),e.qZA()()),2&t){const a=e.MAs(9),r=e.MAs(44);e.xp6(11),e.Q6J("ngForOf",o.columnShowHideList),e.xp6(1),e.Q6J("matMenuTriggerFor",a),e.xp6(8),e.Q6J("formGroup",o.form),e.xp6(22),e.Q6J("matDatepicker",r),e.xp6(10),e.Q6J("value",o.StorerName),e.xp6(4),e.Q6J("dataSource",o.dataSource),e.xp6(34),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(5),e.hij(" Total Amount Due : $",e.xi3(97,12,o.totalAmountDue,"1.2-2")," "),e.xp6(2),e.Q6J("length",o.totalRecords)("pageSizeOptions",e.DdM(15,X))("pageSize",o.pageSize)}},dependencies:[T.m,g.sg,u._Y,u.Fj,u.JJ,u.JL,u.On,u.sg,u.u,d.NW,y.Hw,f.VK,f.p6,b.lW,v.KE,v.hX,A.Nt,I.Mq,I.hl,p.a8,p.dk,p.dn,p.n5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,Z.gM,D.Rr,g.JJ]}),i})()}}]);