"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[7731],{47731:(J,r,o)=>{o.r(r),o.d(r,{ItemTallysComponent:()=>k});var u=o(98739),p=o(70879),t=o(94650),s=o(19132),i=o(24006),T=o(65412),f=o(36895),D=o(97392),h=o(4859),d=o(59549),C=o(44144),c=o(73546),m=o(7155),I=o(10266);function g(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(n);const _=t.oxw();return t.KtG(_.searchInboundDetails())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function y(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(n);const _=t.oxw();return t.KtG(_.searchInboundDetails())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function Z(e,a){if(1&e&&(t.TgZ(0,"form",26)(1,"div",27)(2,"div",28)(3,"mat-form-field",29)(4,"mat-label"),t._uU(5,"Storer"),t.qZA(),t._UZ(6,"input",30),t.qZA(),t.TgZ(7,"mat-form-field",29)(8,"mat-label"),t._uU(9,"Storer Name"),t.qZA(),t._UZ(10,"input",31),t.qZA()()(),t.TgZ(11,"button",32),t._uU(12," Search "),t.qZA()()),2&e){const n=t.oxw();t.Q6J("formGroup",n.form)}}function A(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Tally Number"),t.qZA())}function E(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.IDTALY)}}function x(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Sequence Number"),t.qZA())}function O(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.IDSEQ)}}function b(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Transaction Date"),t.qZA())}function U(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.TRDAT)}}function v(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Arrival Date"),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.ARDAT)}}function M(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Excepted"),t.qZA())}function B(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.IDQREC)}}function R(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Received"),t.qZA())}function P(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Received)}}function Y(e,a){1&e&&(t.TgZ(0,"th",33),t._uU(1,"Lots"),t.qZA())}function q(e,a){if(1&e&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.LOTS)}}function S(e,a){1&e&&t._UZ(0,"th",35)}function L(e,a){1&e&&(t.TgZ(0,"td",34)(1,"div",36)(2,"button",37)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t._UZ(5,"ul",38),t.qZA()())}function Q(e,a){1&e&&t._UZ(0,"tr",39)}function W(e,a){1&e&&t._UZ(0,"tr",40)}const K=function(){return[8,16,24]};let k=(()=>{class e{constructor(n,l,_,w){this.router=n,this.fb=l,this.route=_,this.matDialog=w,this.searchTextDisplay=!1,this.displayedColumns=["TallyNumber","SequenceNumber","TransactionDate","ArrivalDate","Excepted","Received","Lots"],this.dataSource=[],this.duplicateSource=[{IDTALY:"",IDSEQ:"",TRDAT:"",ARDAT:"",IDQREC:"",Received:"",LOTS:""}]}ngOnInit(){this.form=this.fb.group({IDSTOR:"200",ITDSC:"55 ASK"}),this.dataSource=this.duplicateSource}onBack(){this.router.navigate(["/main-nav/item/read"])}searchInboundDetails(){this.searchTextDisplay=1!=this.searchTextDisplay}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.F0),t.Y36(i.qu),t.Y36(s.gz),t.Y36(T.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-item-tallys"]],viewQuery:function(n,l){if(1&n&&t.Gf(u.NW,5),2&n){let _;t.iGM(_=t.CRH())&&(l.paginator=_.first)}},standalone:!0,features:[t.jDz],decls:41,vars:8,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"button"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","search InboundDetails",3,"click",4,"ngIf"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","TallyNumber"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","SequenceNumber"],["matColumnDef","TransactionDate"],["matColumnDef","ArrivalDate"],["matColumnDef","Excepted"],["matColumnDef","Received"],["matColumnDef","Lots"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","search InboundDetails",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","IDSTOR","readonly",""],["matInput","","formControlName","ITDSC","readonly",""],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-header-row",""],["mat-row",""]],template:function(n,l){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return l.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Work With Inbound Details"),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,g,3,0,"button",4),t.YNc(9,y,3,0,"button",5),t.qZA()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,Z,13,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,A,2,0,"th",10),t.YNc(15,E,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,x,2,0,"th",10),t.YNc(18,O,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,b,2,0,"th",10),t.YNc(21,U,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,v,2,0,"th",10),t.YNc(24,N,2,1,"td",11),t.BQk(),t.ynx(25,15),t.YNc(26,M,2,0,"th",10),t.YNc(27,B,2,1,"td",11),t.BQk(),t.ynx(28,16),t.YNc(29,R,2,0,"th",10),t.YNc(30,P,2,1,"td",11),t.BQk(),t.ynx(31,17),t.YNc(32,Y,2,0,"th",10),t.YNc(33,q,2,1,"td",11),t.BQk(),t.ynx(34,18),t.YNc(35,S,1,0,"th",19),t.YNc(36,L,6,0,"td",11),t.BQk(),t.YNc(37,Q,1,0,"tr",20),t.YNc(38,W,1,0,"tr",21),t.qZA(),t._UZ(39,"mat-paginator",22,23),t.qZA()),2&n&&(t.xp6(8),t.Q6J("ngIf",l.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!l.searchTextDisplay),t.xp6(2),t.Q6J("ngIf",l.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",l.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",l.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,K)))},dependencies:[p.m,f.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,u.NW,D.Hw,h.lW,d.KE,d.hX,C.Nt,c.a8,c.dk,c.dn,c.n5,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,I.gM]}),e})()}}]);