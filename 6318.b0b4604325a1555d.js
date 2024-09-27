"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6318],{6318:(W,p,n)=>{n.r(p),n.d(p,{RecordSupplyComponent:()=>Q});var f=n(35226),u=n.n(f),s=n(98739),r=n(7155),h=n(70879),t=n(94650),c=n(24006),C=n(15627),g=n(65412),T=n(19132),S=n(97392),Z=n(4859),d=n(59549),R=n(44144),m=n(73546);function y(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Pool"),t.qZA())}function A(e,a){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.RSPOOL," ")}}function O(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Type"),t.qZA())}function D(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.RSTYPE," ")}}function U(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1,"In"),t.qZA())}function E(e,a){if(1&e&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.RSRQTY," ")}}function M(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Out"),t.qZA())}function v(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.RSUQTY," ")}}function N(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Reject"),t.qZA())}function P(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.RSXQTY," ")}}function x(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1,"Net"),t.qZA())}function b(e,a){if(1&e&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.hij(" ",o.RSQTY," ")}}function B(e,a){1&e&&(t.TgZ(0,"th",28),t._uU(1," Actions"),t.qZA())}function I(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"td",30)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",33)(6,"li")(7,"button",34),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.RecordUsageSupplyUpdate())}),t.TgZ(8,"mat-icon",35),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()()()()()}}function Y(e,a){1&e&&t._UZ(0,"tr",36)}function L(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"tr",37),t.NdJ("click",function(){const _=t.CHM(o).$implicit,K=t.oxw();return t.KtG(K.rowClick(_))}),t.qZA()}}const w=function(){return[8,16,24]};let Q=(()=>{class e{constructor(o,l,i,_){this.fb=o,this.iheaderSvc=l,this.matDialog=i,this.router=_,this.displayedColumns=["Pool","Type","In","Out","Reject","Net","Actions"],this.dataSource=[],this.duplicateSource=[],this.update=!1,this.type=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,this.form=this.fb.group({docNumber:"O\xa0\xa0"+this.element.OHBILL,Coverage:"S",Storer:this.element.OHSTOR,Consignee:this.element.OHCONS,Carrier:this.element.OHCAR}),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.iheaderSvc.getSupplyUsage(this.user,"O",this.element.OHBILL,this.element.OHSTOR,this.element.OHSSFX,this.element.OHCONS,this.element.OHCAR).subscribe(o=>{var i=JSON.parse(o[0].data[1].value);this.duplicateSource=i.returnedData,this.dataSource=new r.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}onBack(){this.router.navigate(["/main-nav/orders/read"])}rowClick(o){this.selectedRow=o}RecordUsageSupplyUpdate(){}successMessage(o){u().fire(o,"","success")}failureMessage(o){u().fire(o,"","error")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.qu),t.Y36(C.X),t.Y36(g.uw),t.Y36(T.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-record-supply"]],viewQuery:function(o,l){if(1&o&&t.Gf(s.NW,5),2&o){let i;t.iGM(i=t.CRH())&&(l.paginator=i.first)}},standalone:!0,features:[t.jDz],decls:57,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Pool"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","uppercase-text",4,"matCellDef"],["matColumnDef","Type"],["mat-cell","",4,"matCellDef"],["matColumnDef","In"],["matColumnDef","Out"],["matColumnDef","Reject"],["matColumnDef","Net"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell","",1,"uppercase-text"],["mat-cell",""],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(o,l){1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return l.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Record Supply Usage "),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Document:"),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"mat-form-field",7)(16,"mat-label"),t._uU(17,"Coverage:"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Storer:"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.TgZ(23,"mat-form-field",7)(24,"mat-label"),t._uU(25,"Consignee:"),t.qZA(),t._UZ(26,"input",11),t.qZA(),t.TgZ(27,"mat-form-field",7)(28,"mat-label"),t._uU(29,"Carrier:"),t.qZA(),t._UZ(30,"input",12),t.qZA()()()()(),t.TgZ(31,"table",13),t.ynx(32,14),t.YNc(33,y,2,0,"th",15),t.YNc(34,A,2,1,"td",16),t.BQk(),t.ynx(35,17),t.YNc(36,O,2,0,"th",15),t.YNc(37,D,2,1,"td",18),t.BQk(),t.ynx(38,19),t.YNc(39,U,2,0,"th",15),t.YNc(40,E,2,1,"td",16),t.BQk(),t.ynx(41,20),t.YNc(42,M,2,0,"th",15),t.YNc(43,v,2,1,"td",18),t.BQk(),t.ynx(44,21),t.YNc(45,N,2,0,"th",15),t.YNc(46,P,2,1,"td",18),t.BQk(),t.ynx(47,22),t.YNc(48,x,2,0,"th",15),t.YNc(49,b,2,1,"td",18),t.BQk(),t.ynx(50,23),t.YNc(51,B,2,0,"th",15),t.YNc(52,I,12,0,"td",18),t.BQk(),t.YNc(53,Y,1,0,"tr",24),t.YNc(54,L,1,0,"tr",25),t.qZA(),t._UZ(55,"mat-paginator",26,27),t.qZA()),2&o&&(t.xp6(8),t.Q6J("formGroup",l.form),t.xp6(23),t.Q6J("dataSource",l.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",l.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,w)))},dependencies:[h.m,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,s.NW,S.Hw,Z.lW,d.KE,d.hX,R.Nt,m.a8,m.dk,m.dn,m.n5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk]}),e})()}}]);