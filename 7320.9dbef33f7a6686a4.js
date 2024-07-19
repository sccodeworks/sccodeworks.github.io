"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[7320],{47237:(xt,T,l)=>{l.r(T),l.d(T,{WwSequencedcommoditiesComponent:()=>Dt});var f=l(98739),c=l(7155),p=l(65412),_=l(70879),t=l(94650),a=l(24006),S=l(97392),Z=l(4859),r=l(59549),C=l(44144),u=l(73546);let A=(()=>{class e{constructor(o,i,m){this.anyvariable=o,this.fb=i,this.dialogRef=m,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getSequencedCommoditiesSubscription&&this.getSequencedCommoditiesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({S1STOR:{value:this.anyvariable.S1STOR,disabled:!0},S1SSFX:{value:"",disabled:!0},S1NAME:this.anyvariable.S1NAME,S1DAYS:this.anyvariable.S1DAYS,S1FWDR:this.anyvariable.S1FWDR,DROPZ:"",S1CQTY:9,DOCK:"",S1PREF:"",S1COMD:{value:this.anyvariable.S1COMD,disabled:!0},S1PLNT:{value:"",disabled:!0},S1CONT:"",S1BULD:"",S1KITB:"",S1LOCN:"",S1INV:"",KTPRT:"",FILL:"",S1STAT:this.anyvariable.S1STAT})}updateSequencedCommodities(){}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.WI),t.Y36(a.qu),t.Y36(p.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-sequencedcommodities-change"]],standalone:!0,features:[t.jDz],decls:94,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","S1STOR","readonly",""],["matInput","","formControlName","S1SSFX","readonly",""],["matInput","","formControlName","S1NAME",2,"text-transform","uppercase"],["matInput","","formControlName","S1DAYS"],["matInput","","formControlName","S1FWDR"],["matInput","","formControlName","DROPZ"],["matInput","","formControlName","S1CQTY"],["matInput","","formControlName","DOCK",2,"text-transform","uppercase"],["matInput","","formControlName","S1PREF",2,"text-transform","uppercase"],["matInput","","formControlName","S1COMD","readonly",""],["matInput","","formControlName","S1PLNT","readonly",""],["matInput","","formControlName","S1CONT",2,"text-transform","uppercase"],["matInput","","formControlName","S1BULD",2,"text-transform","uppercase"],["matInput","","formControlName","S1KITB",2,"text-transform","uppercase"],["matInput","","formControlName","S1LOCN",2,"text-transform","uppercase"],["matInput","","formControlName","S1INV",2,"text-transform","uppercase"],["matInput","","formControlName","KTPRT",2,"text-transform","uppercase"],["matInput","","formControlName","FILL",2,"text-transform","uppercase"],["matInput","","formControlName","S1STAT",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Sequenced Commodities "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return i.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Storer"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Storer Number"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Storer Suffix"),t.qZA(),t._UZ(23,"input",13),t.qZA()()(),t.TgZ(24,"mat-form-field",11)(25,"mat-label"),t._uU(26,"Description"),t.qZA(),t._UZ(27,"input",14),t.qZA(),t.TgZ(28,"mat-form-field",11)(29,"mat-label"),t._uU(30,"Build Day"),t.qZA(),t._UZ(31,"input",15),t.qZA(),t.TgZ(32,"mat-form-field",11)(33,"mat-label"),t._uU(34,"Build Forward"),t.qZA(),t._UZ(35,"input",16),t.qZA(),t.TgZ(36,"mat-form-field",11)(37,"mat-label"),t._uU(38,"Drop Zone"),t.qZA(),t._UZ(39,"input",17),t.qZA(),t.TgZ(40,"mat-form-field",11)(41,"mat-label"),t._uU(42,"Quantity/Container"),t.qZA(),t._UZ(43,"input",18),t.qZA(),t.TgZ(44,"mat-form-field",11)(45,"mat-label"),t._uU(46,"Dock"),t.qZA(),t._UZ(47,"input",19),t.qZA(),t.TgZ(48,"mat-form-field",11)(49,"mat-label"),t._uU(50,"Serial Prefix"),t.qZA(),t._UZ(51,"input",20),t.qZA(),t.TgZ(52,"mat-form-field",11)(53,"mat-label"),t._uU(54,"Commodity"),t.qZA(),t._UZ(55,"input",21),t.qZA(),t.TgZ(56,"mat-form-field",11)(57,"mat-label"),t._uU(58,"Plant"),t.qZA(),t._UZ(59,"input",22),t.qZA(),t.TgZ(60,"mat-form-field",11)(61,"mat-label"),t._uU(62,"Container"),t.qZA(),t._UZ(63,"input",23),t.qZA(),t.TgZ(64,"mat-form-field",11)(65,"mat-label"),t._uU(66,"Build Process"),t.qZA(),t._UZ(67,"input",24),t.qZA(),t.TgZ(68,"mat-form-field",11)(69,"mat-label"),t._uU(70,"Kit Build"),t.qZA(),t._UZ(71,"input",25),t.qZA(),t.TgZ(72,"mat-form-field",11)(73,"mat-label"),t._uU(74,"Location"),t.qZA(),t._UZ(75,"input",26),t.qZA(),t.TgZ(76,"mat-form-field",11)(77,"mat-label"),t._uU(78,"Use Inventory"),t.qZA(),t._UZ(79,"input",27),t.qZA(),t.TgZ(80,"mat-form-field",11)(81,"mat-label"),t._uU(82,"Replenish Printer"),t.qZA(),t._UZ(83,"input",28),t.qZA(),t.TgZ(84,"mat-form-field",11)(85,"mat-label"),t._uU(86,"Fill Rack"),t.qZA(),t._UZ(87,"input",29),t.qZA(),t.TgZ(88,"mat-form-field",11)(89,"mat-label"),t._uU(90,"Status"),t.qZA(),t._UZ(91,"input",30),t.qZA()()(),t.TgZ(92,"button",31),t.NdJ("click",function(){return i.updateSequencedCommodities()}),t._uU(93,"Update"),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",i.form))},dependencies:[_.m,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,S.Hw,Z.lW,r.KE,r.hX,C.Nt,u.a8,u.dk,u.dn,u.n5]}),e})();var w=l(3034);function b(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Line Set"),t.qZA())}function D(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.LineSet)}}function x(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"P"),t.qZA())}function U(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.P)}}function N(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Job Date"),t.qZA())}function y(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.JobDate)}}function W(e,n){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Item Number"),t.qZA())}function v(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.ItemNumber)}}function Y(e,n){if(1&e&&(t.TgZ(0,"th",30),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.Processed," ")}}function R(e,n){1&e&&(t.TgZ(0,"th",31),t._uU(1," Quantity Date"),t.qZA())}function k(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.QuantityDate)}}function O(e,n){1&e&&(t.TgZ(0,"th",31),t._uU(1," Status"),t.qZA())}function B(e,n){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.Status)}}function F(e,n){1&e&&t._UZ(0,"tr",32)}function L(e,n){1&e&&t._UZ(0,"tr",32)}function I(e,n){1&e&&t._UZ(0,"tr",33)}const Q=function(){return["LineSet","P","JobDate","ItemNumber","Processed"]},J=function(){return["QuantityDate","Status"]},M=function(){return[6,12,18]};let H=(()=>{class e{constructor(o,i,m){this.data=o,this.dialogRef=i,this.fb=m,this.displayedColumns=["LineSet","P","JobDate","ItemNumber","QuantityDate","Status"],this.user=localStorage.getItem("userName"),this.duplicateSource=[{LineSet:"",P:"",JobDate:"",ItemNumber:"",QuantityDate:"",Status:"",S1STOR:1300,S1NAME:"BATTERY BOX",S1DAYS:1,S1FWDR:1,LSET:"",CRT:"",BLT:"",SHP:"",S1STAT:"AC",S1COMD:"BATTERY BOX",LDATE:"",S1SSFX:"",DROPZ:"",S1CQTY:1,DOCK:"",S1PREF:"",S1PLNT:"",S1CONT:"",S1BULD:"",S1KITB:"",S1LOCN:"",S1INV:"",KTPRT:"",FILL:"",RackNumber:"",DatePrinted:"",User:"",Commodity:"BATTERY BOX",Plant:44,ReceivedDate:"",FirstLineSet:""}]}ngOnInit(){this.form=this.fb.group({Commodity:"BATTERY BOX",Received:""}),this.dataSource=new c.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.WI),t.Y36(p.so),t.Y36(a.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-sequencedcommodities-details"]],viewQuery:function(o,i){if(1&o&&t.Gf(f.NW,5),2&o){let m;t.iGM(m=t.CRH())&&(i.paginator=m.first)}},standalone:!0,features:[t.jDz],decls:47,vars:9,consts:[[1,"over-Flow"],[1,"main-header-title"],[1,"button"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","Commodity","readonly",""],["matInput","","formControlName","Received","readonly",""],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","LineSet"],["mat-header-cell","","mat-header-cell","","rowspan","2",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","P"],["matColumnDef","JobDate"],["matColumnDef","ItemNumber"],["matColumnDef","Processed"],["mat-header-cell","","colspan","2",4,"matHeaderCellDef"],["matColumnDef","QuantityDate"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","Status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell","","rowspan","2"],["mat-cell",""],["mat-header-cell","","colspan","2"],["mat-header-cell","","mat-header-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,i){1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Sequenced Commodity Inquiry"),t.qZA()(),t.TgZ(5,"div",2)(6,"button",3),t.NdJ("click",function(){return i.closeDialog()}),t.TgZ(7,"mat-icon",4),t._uU(8,"close"),t.qZA()()()(),t.TgZ(9,"mat-card-content",5)(10,"form",6)(11,"div",7)(12,"div",8)(13,"mat-form-field",9)(14,"mat-label"),t._uU(15,"Commodity"),t.qZA(),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"mat-form-field",9)(18,"mat-label"),t._uU(19,"Received"),t.qZA(),t._UZ(20,"input",11),t.qZA()()()()(),t.TgZ(21,"table",12),t.ynx(22,13),t.YNc(23,b,2,0,"th",14),t.YNc(24,D,2,1,"td",15),t.BQk(),t.ynx(25,16),t.YNc(26,x,2,0,"th",14),t.YNc(27,U,2,1,"td",15),t.BQk(),t.ynx(28,17),t.YNc(29,N,2,0,"th",14),t.YNc(30,y,2,1,"td",15),t.BQk(),t.ynx(31,18),t.YNc(32,W,2,0,"th",14),t.YNc(33,v,2,1,"td",15),t.BQk(),t.ynx(34,19),t.YNc(35,Y,2,1,"th",20),t.BQk(),t.ynx(36,21),t.YNc(37,R,2,0,"th",22),t.YNc(38,k,2,1,"td",15),t.BQk(),t.ynx(39,23),t.YNc(40,O,2,0,"th",22),t.YNc(41,B,2,1,"td",15),t.BQk(),t.YNc(42,F,1,0,"tr",24),t.YNc(43,L,1,0,"tr",24),t.YNc(44,I,1,0,"tr",25),t.qZA(),t._UZ(45,"mat-paginator",26,27),t.qZA()),2&o&&(t.xp6(10),t.Q6J("formGroup",i.form),t.xp6(11),t.Q6J("dataSource",i.dataSource),t.xp6(21),t.Q6J("matHeaderRowDef",t.DdM(6,Q)),t.xp6(1),t.Q6J("matHeaderRowDef",t.DdM(7,J)),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,M)))},dependencies:[_.m,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,f.NW,S.Hw,Z.lW,r.KE,r.hX,C.Nt,u.a8,u.dk,u.dn,u.n5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk]}),e})();var h=l(99602);let P=(()=>{class e{constructor(o,i,m){this.anyvariable=o,this.fb=i,this.dialogRef=m,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getSequencedCommoditiesSubscription&&this.getSequencedCommoditiesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({Commodity:"BATTERY BOX",Plant:44,ReceivedDate:"",FirstLineSet:""})}setfirstlineSequencedCommodities(){}closeDialog(){this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.WI),t.Y36(a.qu),t.Y36(p.so))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-sequencedcommodities-set-first-line"]],standalone:!0,features:[t.jDz],decls:33,vars:3,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","Commodity","readonly",""],["matInput","","formControlName","Plant","readonly",""],["matInput","","formControlName","ReceivedDate",3,"matDatepicker"],["matSuffix","",3,"for"],["ReceivedDatePicker",""],["matInput","","formControlName","FirstLineSet",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(o,i){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Set Begining Line Set "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return i.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Commodity"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Plant"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Received Date"),t.qZA(),t._UZ(23,"input",11)(24,"mat-datepicker-toggle",12)(25,"mat-datepicker",null,13),t.qZA(),t.TgZ(27,"mat-form-field",8)(28,"mat-label"),t._uU(29,"First Line Set"),t.qZA(),t._UZ(30,"input",14),t.qZA()()(),t.TgZ(31,"button",15),t.NdJ("click",function(){return i.setfirstlineSequencedCommodities()}),t._uU(32,"Set First Line "),t.qZA()()()()),2&o){const m=t.MAs(26);t.xp6(9),t.Q6J("formGroup",i.form),t.xp6(14),t.Q6J("matDatepicker",m),t.xp6(1),t.Q6J("for",m)}},dependencies:[_.m,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,S.Hw,Z.lW,r.KE,r.hX,r.R9,C.Nt,h.Mq,h.hl,h.nW,u.a8,u.dk,u.dn,u.n5]}),e})();var E=l(19132),g=l(36895),q=l(28255),K=l(10266),$=l(90455);function G(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(o);const m=t.oxw();return t.KtG(m.searchSequencedCommodities())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function X(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(o);const m=t.oxw();return t.KtG(m.searchSequencedCommodities())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function z(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"span",34),t.NdJ("click",function(m){return m.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",35),t.NdJ("ngModelChange",function(m){const d=t.CHM(o).$implicit;return t.KtG(d.isActive=m)})("change",function(){const s=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.toggleColumn(s))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&e){const o=n.$implicit;t.xp6(1),t.Q6J("ngModel",o.isActive),t.xp6(1),t.hij(" ",o.name," ")}}function j(e,n){if(1&e&&(t.TgZ(0,"form",36)(1,"div",37)(2,"div",38)(3,"div",39)(4,"label",40),t._uU(5,"Storer"),t.qZA(),t.TgZ(6,"div",41)(7,"mat-form-field",42)(8,"mat-label"),t._uU(9,"Storer Number"),t.qZA(),t._UZ(10,"input",43),t.qZA(),t.TgZ(11,"mat-form-field",42)(12,"mat-label"),t._uU(13,"Storer Suffix"),t.qZA(),t._UZ(14,"input",44),t.qZA()()(),t.TgZ(15,"mat-form-field",42)(16,"mat-label"),t._uU(17,"Commodity"),t.qZA(),t._UZ(18,"input",45),t.qZA(),t.TgZ(19,"mat-form-field",42)(20,"mat-label"),t._uU(21,"Status"),t.qZA(),t._UZ(22,"input",46),t.qZA()()(),t.TgZ(23,"button",47),t._uU(24," Search "),t.qZA()()),2&e){const o=t.oxw();t.Q6J("formGroup",o.form)}}function V(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Storer"),t.qZA())}function tt(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.S1STOR)}}function et(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Commodity Name"),t.qZA())}function ot(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.S1NAME)}}function nt(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Day"),t.qZA())}function it(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.S1DAYS)}}function mt(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Forward"),t.qZA())}function at(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.S1FWDR)}}function ct(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Line Set"),t.qZA())}function lt(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.LSET)}}function ut(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Created"),t.qZA())}function dt(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.CRT)}}function st(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Built"),t.qZA())}function rt(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.BLT)}}function pt(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Ship"),t.qZA())}function ft(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.SHP)}}function _t(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Status"),t.qZA())}function St(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.S1STAT)}}function Zt(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Commodity"),t.qZA())}function Ct(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.S1COMD)}}function ht(e,n){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Last Received"),t.qZA())}function Tt(e,n){if(1&e&&(t.TgZ(0,"td",49),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.LDATE)}}function gt(e,n){1&e&&t._UZ(0,"th",50)}function qt(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",49)(1,"div",51)(2,"button",52)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",53)(6,"li")(7,"button",54),t.NdJ("click",function(){const s=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.updateSequencedCommodities(s))}),t.TgZ(8,"mat-icon",55),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",54),t.NdJ("click",function(){const s=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.detailsSequencedCommodities(s))}),t.TgZ(14,"mat-icon",55),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Details"),t.qZA()()(),t.TgZ(18,"li")(19,"button",54),t.NdJ("click",function(){const s=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.setfirstlineSequencedCommodities(s))}),t.TgZ(20,"mat-icon",55),t._uU(21,"call_made"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Set First Line"),t.qZA()()(),t.TgZ(24,"li")(25,"button",54),t.NdJ("click",function(){const s=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.printedracksSequencedCommodities(s))}),t.TgZ(26,"mat-icon",55),t._uU(27,"call_made"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Printed Racks"),t.qZA()()(),t.TgZ(30,"li")(31,"button",54),t.NdJ("click",function(){const s=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.kitreplenishmentSequencedCommodities(s))}),t.TgZ(32,"mat-icon",55),t._uU(33,"call_made"),t.qZA(),t.TgZ(34,"mat-label"),t._uU(35,"Kit Replenishment"),t.qZA()()()()()()}}function At(e,n){1&e&&t._UZ(0,"tr",56)}function wt(e,n){1&e&&t._UZ(0,"tr",57)}const bt=function(){return[6,12,18]};let Dt=(()=>{class e{constructor(o,i,m){this.fb=o,this.matDialog=i,this.router=m,this.displayedColumns=["Storer","CommodityName","Day","Forward","LineSet","Created","Built","Ship","Status","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.duplicateSource=[{S1STOR:1300,S1NAME:"BATTERY BOX",S1DAYS:1,S1FWDR:1,LSET:"",CRT:"",BLT:"",SHP:"",S1STAT:"AC",S1COMD:"BATTERY BOX",LDATE:""}],this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({STOR:1,StorerSuffix:"",Commodity:"",Status:""}),this.dataSource=new c.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchSequencedCommodities(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(o){if(o.isActive)this.displayedColumns.splice(o.position>this.displayedColumns.length-1?this.displayedColumns.length-1:o.position,0,o.name);else{let i=this.displayedColumns.indexOf(o.name);i>-1&&this.displayedColumns.splice(i,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((o,i)=>{"Actions"!=o&&"Commodity"!=o&&this.columnShowHideList.push({position:i,name:o,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Commodity",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"LastReceived",isActive:!1}),console.log(this.columnShowHideList)}addSequencedcommodities(){this.matDialog.open(w.WwSequencedcommoditiesAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}updateSequencedCommodities(o){this.matDialog.open(A,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}detailsSequencedCommodities(o){this.matDialog.open(H,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}printedracksSequencedCommodities(o){this.router.navigateByUrl("/main-nav/sequenced-commodities/printedracks")}kitreplenishmentSequencedCommodities(o){this.router.navigateByUrl("/main-nav/kit-replenishment/read")}setfirstlineSequencedCommodities(o){this.matDialog.open(P,{width:"1000px",maxHeight:"80vh",data:o,autoFocus:!1})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(p.uw),t.Y36(E.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-sequencedcommodities"]],viewQuery:function(o,i){if(1&o&&t.Gf(f.NW,5),2&o){let m;t.iGM(m=t.CRH())&&(i.paginator=m.first)}},standalone:!0,features:[t.jDz],decls:60,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search SequencedCommodities",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New SequencedCommodities",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Storer"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","CommodityName"],["matColumnDef","Day"],["matColumnDef","Forward"],["matColumnDef","LineSet"],["matColumnDef","Created"],["matColumnDef","Built"],["matColumnDef","Ship"],["matColumnDef","Status"],["matColumnDef","Commodity"],["matColumnDef","LastReceived"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search SequencedCommodities",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","formControlName","STOR"],["matInput","","formControlName","StorerSuffix",2,"text-transform","uppercase"],["matInput","","formControlName","Commodity",2,"text-transform","uppercase"],["matInput","","formControlName","Status",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(o,i){if(1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Sequenced Commodities "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,G,3,0,"button",3),t.YNc(6,X,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return i.addSequencedcommodities()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"mat-menu",null,6),t.YNc(12,z,4,2,"span",7),t.qZA(),t.TgZ(13,"button",8,9)(15,"mat-icon"),t._uU(16,"visibility_off"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,j,25,1,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,V,2,0,"th",14),t.YNc(22,tt,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,et,2,0,"th",14),t.YNc(25,ot,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,nt,2,0,"th",14),t.YNc(28,it,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,mt,2,0,"th",14),t.YNc(31,at,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,ct,2,0,"th",14),t.YNc(34,lt,2,1,"td",15),t.BQk(),t.ynx(35,20),t.YNc(36,ut,2,0,"th",14),t.YNc(37,dt,2,1,"td",15),t.BQk(),t.ynx(38,21),t.YNc(39,st,2,0,"th",14),t.YNc(40,rt,2,1,"td",15),t.BQk(),t.ynx(41,22),t.YNc(42,pt,2,0,"th",14),t.YNc(43,ft,2,1,"td",15),t.BQk(),t.ynx(44,23),t.YNc(45,_t,2,0,"th",14),t.YNc(46,St,2,1,"td",15),t.BQk(),t.ynx(47,24),t.YNc(48,Zt,2,0,"th",14),t.YNc(49,Ct,2,1,"td",15),t.BQk(),t.ynx(50,25),t.YNc(51,ht,2,0,"th",14),t.YNc(52,Tt,2,1,"td",15),t.BQk(),t.ynx(53,26),t.YNc(54,gt,1,0,"th",27),t.YNc(55,qt,36,0,"td",15),t.BQk(),t.YNc(56,At,1,0,"tr",28),t.YNc(57,wt,1,0,"tr",29),t.qZA(),t._UZ(58,"mat-paginator",30,31),t.qZA()),2&o){const m=t.MAs(11);t.xp6(5),t.Q6J("ngIf",i.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!i.searchTextDisplay),t.xp6(6),t.Q6J("ngForOf",i.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",m),t.xp6(5),t.Q6J("ngIf",i.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",i.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,bt))}},dependencies:[_.m,g.sg,g.O5,a._Y,a.Fj,a.JJ,a.JL,a.On,a.sg,a.u,f.NW,S.Hw,q.VK,q.p6,Z.lW,r.KE,r.hX,C.Nt,u.a8,u.dk,u.dn,u.n5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,K.gM,$.Rr]}),e})()}}]);