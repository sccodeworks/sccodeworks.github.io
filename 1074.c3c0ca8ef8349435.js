"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[1074],{61074:(k,s,i)=>{i.r(s),i.d(s,{RAgingInquiryComponent:()=>J});var p=i(98739),l=i(7155),f=i(70879),A=i(89881),t=i(94650),g=i(19132),u=i(24006),T=i(65412),Z=i(81543),C=i(97392),h=i(4859),d=i(59549),I=i(44144),_=i(73546);function q(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Status"),t.qZA())}function y(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHSTAT)}}function U(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Invoice Number"),t.qZA())}function D(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHINV)}}function b(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Invoice Date"),t.qZA())}function O(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHDATE)}}function v(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Transaction Type"),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHDATE)}}function N(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Transaction Code"),t.qZA())}function x(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHTRNC)}}function E(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Building Number"),t.qZA())}function B(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHBLDG)}}function M(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Bill-To Customer"),t.qZA())}function S(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.CUST)}}function P(e,n){1&e&&(t.TgZ(0,"th",42),t._uU(1,"Balance Due"),t.qZA())}function Y(e,n){if(1&e&&(t.TgZ(0,"td",43),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.AHBALN)}}function H(e,n){1&e&&t._UZ(0,"th",44)}function L(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"td",43)(1,"div",45)(2,"button",46)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",47)(6,"li")(7,"button",48),t.NdJ("click",function(){const m=t.CHM(a).$implicit,c=t.oxw();return t.KtG(c.AgingInquiryRead(m))}),t.TgZ(8,"mat-icon",49),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Read Inquiry"),t.qZA()()()()()()}}function w(e,n){1&e&&t._UZ(0,"tr",50)}function Q(e,n){1&e&&t._UZ(0,"tr",51)}function W(e,n){1&e&&t._UZ(0,"tr",50)}function K(e,n){1&e&&t._UZ(0,"tr",51)}const G=function(){return[8,16,24]};let J=(()=>{class e{constructor(a,o,r,m,c){this.router=a,this.fb=o,this.route=r,this.matDialog=m,this.ReceivablesSvc=c,this.displayedColumns=["Status","Invoice Number","Invoice Date","Invoice Type","Transaction Code","Building Number","Bill-To Customer","Balance Due","Actions"],this.LT30="",this.Over30="",this.Due="",this.Over60="",this.Over90="",this.Unapplied="",this.Over120="",this.Net="",this.dataSource=[],this.duplicateSource=[{AHSTAT:"",AHINV:"",AHDATE:"",AHTRNC:"",AHTYPE:"",AHBLDG:"",CUST:"",AHBALN:""}],this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,console.log(this.element),this.invoice=this.element.WKINV,this.building=this.element.AHBLDG,this.form=this.fb.group({AGDAT:"",CSDSC:this.element.WKCUST+"\xa0"+this.element.CUNAME,IncludeTypes1:"",IncludeTypes2:"",IncludeTypes3:"",IncludeTypes4:"",IncludeTypes5:"",Omit1:"",Omit2:"",Omit3:"",Omit4:"",Omit5:""}),this.getInquiry()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getInquiry(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ReceivablesSvc.getInvoiceInquiry(this.user,this.building,this.invoice).subscribe(a=>{var o=a[0].data[1].value;console.log(o);var r=JSON.parse(o);this.duplicateSource=r.returnedData;var m=r.returnedData;this.BillTo="",this.HGCAR=m[0].HGCAR,console.log(this.duplicateSource),this.dataSource=new l.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}onBack(){this.router.navigate(["/main-nav/customers/read"])}AgingInquiryRead(a){this.matDialog.open(A.R,{width:"1000px",maxHeight:"80vh",data:a,autoFocus:!1})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(g.F0),t.Y36(u.qu),t.Y36(g.gz),t.Y36(T.uw),t.Y36(Z.Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-r-aging-inquiry"]],viewQuery:function(a,o){if(1&a&&t.Gf(p.NW,5),2&a){let r;t.iGM(r=t.CRH())&&(o.paginator=r.first)}},standalone:!0,features:[t.jDz],decls:133,vars:8,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","AGDAT"],["appearance","outline",1,"full-width2"],["readonly","","matInput","","formControlName","CSDSC"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","IncludeTypes1","maxlength","2",2,"text-transform","uppercase"],["matInput","","formControlName","IncludeTypes2",2,"text-transform","uppercase"],["matInput","","formControlName","IncludeTypes3",2,"text-transform","uppercase"],["matInput","","formControlName","IncludeTypes4",2,"text-transform","uppercase"],["matInput","","formControlName","IncludeTypes5",2,"text-transform","uppercase"],["matInput","","formControlName","Omit1",2,"text-transform","uppercase"],["matInput","","formControlName","Omit2",2,"text-transform","uppercase"],["matInput","","formControlName","Omit3",2,"text-transform","uppercase"],["matInput","","formControlName","Omit4",2,"text-transform","uppercase"],["matInput","","formControlName","Omit5",2,"text-transform","uppercase"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Invoice Number"],["matColumnDef","Invoice Date"],["matColumnDef","Invoice Type"],["matColumnDef","Transaction Code"],["matColumnDef","Building Number"],["matColumnDef","Bill-To Customer"],["matColumnDef","Balance Due"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],[1,"space"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(a,o){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return o.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Customer Receivables Inquiry"),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Aging Date"),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"mat-form-field",9)(16,"mat-label"),t._uU(17,"Customer"),t.qZA(),t._UZ(18,"input",10),t.qZA(),t.TgZ(19,"div",11)(20,"label",12),t._uU(21,"Include Types"),t.qZA(),t.TgZ(22,"div",13)(23,"mat-form-field",7)(24,"mat-label"),t._uU(25,"IncludeTypes 1"),t.qZA(),t._UZ(26,"input",14),t.qZA(),t.TgZ(27,"mat-form-field",7)(28,"mat-label"),t._uU(29,"IncludeTypes 2"),t.qZA(),t._UZ(30,"input",15),t.qZA(),t.TgZ(31,"mat-form-field",7)(32,"mat-label"),t._uU(33,"IncludeTypes 3"),t.qZA(),t._UZ(34,"input",16),t.qZA(),t.TgZ(35,"mat-form-field",7)(36,"mat-label"),t._uU(37,"IncludeTypes 4"),t.qZA(),t._UZ(38,"input",17),t.qZA(),t.TgZ(39,"mat-form-field",7)(40,"mat-label"),t._uU(41,"IncludeTypes 5"),t.qZA(),t._UZ(42,"input",18),t.qZA()()(),t._UZ(43,"br"),t.TgZ(44,"div",11)(45,"label",12),t._uU(46,"Omit"),t.qZA(),t.TgZ(47,"div",13)(48,"mat-form-field",7)(49,"mat-label"),t._uU(50,"Omit 1"),t.qZA(),t._UZ(51,"input",19),t.qZA(),t.TgZ(52,"mat-form-field",7)(53,"mat-label"),t._uU(54,"Omit 2"),t.qZA(),t._UZ(55,"input",20),t.qZA(),t.TgZ(56,"mat-form-field",7)(57,"mat-label"),t._uU(58,"Omit 3"),t.qZA(),t._UZ(59,"input",21),t.qZA(),t.TgZ(60,"mat-form-field",7)(61,"mat-label"),t._uU(62,"Omit 4"),t.qZA(),t._UZ(63,"input",22),t.qZA(),t.TgZ(64,"mat-form-field",7)(65,"mat-label"),t._uU(66,"Omit 5"),t.qZA(),t._UZ(67,"input",23),t.qZA()()(),t._UZ(68,"br"),t.qZA()()()(),t.TgZ(69,"table",24),t.ynx(70,25),t.YNc(71,q,2,0,"th",26),t.YNc(72,y,2,1,"td",27),t.BQk(),t.ynx(73,28),t.YNc(74,U,2,0,"th",26),t.YNc(75,D,2,1,"td",27),t.BQk(),t.ynx(76,29),t.YNc(77,b,2,0,"th",26),t.YNc(78,O,2,1,"td",27),t.BQk(),t._uU(79," 'Bill-To Customer', "),t.ynx(80,30),t.YNc(81,v,2,0,"th",26),t.YNc(82,R,2,1,"td",27),t.BQk(),t.ynx(83,31),t.YNc(84,N,2,0,"th",26),t.YNc(85,x,2,1,"td",27),t.BQk(),t.ynx(86,32),t.YNc(87,E,2,0,"th",26),t.YNc(88,B,2,1,"td",27),t.BQk(),t.ynx(89,33),t.YNc(90,M,2,0,"th",26),t.YNc(91,S,2,1,"td",27),t.BQk(),t.ynx(92,34),t.YNc(93,P,2,0,"th",26),t.YNc(94,Y,2,1,"td",27),t.BQk(),t.ynx(95,35),t.YNc(96,H,1,0,"th",36),t.YNc(97,L,12,0,"td",27),t.BQk(),t.YNc(98,w,1,0,"tr",37),t.YNc(99,Q,1,0,"tr",38),t.qZA(),t._UZ(100,"mat-paginator",39,40),t.TgZ(102,"mat-card-content",3)(103,"div",5)(104,"p")(105,"label")(106,"b"),t._uU(107,"LT 30 :"),t.qZA()(),t.TgZ(108,"label")(109,"b"),t._uU(110,"Over 30:"),t.qZA()(),t.TgZ(111,"label")(112,"b"),t._uU(113,"Due:"),t.qZA()(),t._UZ(114,"br"),t.TgZ(115,"label")(116,"b"),t._uU(117,"Over 60:"),t.qZA()(),t.TgZ(118,"label")(119,"b"),t._uU(120,"Over 90:"),t.qZA()(),t.TgZ(121,"label")(122,"b"),t._uU(123,"Unapplied:"),t.qZA()(),t._UZ(124,"br"),t.TgZ(125,"label")(126,"b"),t._uU(127,"Over 120:"),t.qZA()(),t.TgZ(128,"label",41)(129,"b"),t._uU(130,"Net:"),t.qZA()()()()(),t.YNc(131,W,1,0,"tr",37),t.YNc(132,K,1,0,"tr",38),t.qZA()),2&a&&(t.xp6(8),t.Q6J("formGroup",o.form),t.xp6(61),t.Q6J("dataSource",o.dataSource),t.xp6(29),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,G)),t.xp6(31),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[f.m,u._Y,u.Fj,u.JJ,u.JL,u.nD,u.sg,u.u,p.NW,C.Hw,h.lW,d.KE,d.hX,I.Nt,_.a8,_.dk,_.dn,_.n5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk],styles:["label[_ngcontent-%COMP%]{margin-left:60px}"]}),e})()}}]);