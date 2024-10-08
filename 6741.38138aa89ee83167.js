"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6741,1790,8754,5645,2313],{11790:(S,v,m)=>{m.d(v,{y:()=>f});var g=m(65412),n=m(94650),Z=m(97392),p=m(4859);let M=(()=>{class l{constructor(u,_){this.dialogRef=u,this.data=_}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return l.\u0275fac=function(u){return new(u||l)(n.Y36(g.so),n.Y36(g.WI))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(u,_){1&u&&(n.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),n.NdJ("click",function(){return _.closeDialog()}),n._uU(3,"close "),n.qZA(),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.TgZ(6,"button",4),n._uU(7,"Cancel"),n.qZA(),n.TgZ(8,"button",5),n._uU(9,"Delete"),n.qZA()()),2&u&&(n.xp6(5),n.Oqu(_.data.message),n.xp6(1),n.Q6J("mat-dialog-close",!1),n.xp6(2),n.Q6J("mat-dialog-close",!0))},dependencies:[Z.Hw,p.lW,g.ZT]}),l})(),f=(()=>{class l{constructor(u){this.dialog=u}openCustomAlert(u){return this.dialog.open(M,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:u}})}}return l.\u0275fac=function(u){return new(u||l)(n.LFG(g.uw))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},6741:(S,v,m)=>{m.r(v),m.d(v,{WorkWithMemorizedInvoicesComponent:()=>pe});var g=m(70879),n=m(24006),Z=m(98739),p=m(7155),M=m(35226),f=m.n(M),l=m(65412),e=m(94650),u=m(19132),_=m(18740),C=m(97392),b=m(4859),T=m(59549),W=m(44144),A=m(84385),I=m(3238),h=m(73546);let q=(()=>{class o{constructor(t,i,r,s,c,d){this.anyvariable=t,this.router=i,this.route=r,this.fb=s,this.MemorizedInvoices=c,this.dialogRef=d,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getMemorizedInvoicesSubscription&&this.getMemorizedInvoicesSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({ControlNumber:"",BaseControlNumber:"",Frequency:"",Period:"",DescriptionLeader:"",InvoiceDate:"",LastRun:"",StatusCode:""})}addMemorizedInvoice(){var t=this.form.value;console.log(t),this.MemorizedInvoices.createMemorizedInvoices(t.ControlNumber,t.BaseControlNumber,t.Frequency,t.Period,t.DescriptionLeader,t.InvoiceDate,t.LastRun,t.StatusCode,this.user).subscribe(i=>{if(this.result=i,console.log(this.result),JSON.parse(this.result.success))this.successMessage("Memorized Invoices created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/MemorizedInvoices/read"]);else{const r=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(r)}})}successMessage(t){f().fire(t,"","success")}failureMessage(t){f().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.WI),e.Y36(u.F0),e.Y36(u.gz),e.Y36(n.qu),e.Y36(_.D),e.Y36(l.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-work-with-memorized-invoices"]],standalone:!0,features:[e.jDz],decls:79,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","BaseControlNumber","maxlength","7"],["formControlName","Frequency"],["value","*MONTHLY"],["value","*HALFMONTH"],["value","*WEEKLY"],["formControlName","Period"],["value","*THISM"],["value","*LASTM"],["value","*THISW"],["value","*LASTW"],["value","*NONE"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","DescriptionLeader","maxlength","30"],["formControlName","InvoiceDate"],["value","*CURRENT"],["value","*START"],["value","*END"],["appearance","outline"],["required","","type","date","matInput","","formControlName","LastRun"],["matInput","","formControlName","StatusCode","maxlength","2",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain Memorized Invoice"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return i.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Base Control Number"),e.qZA(),e._UZ(15,"input",9),e.TgZ(16,"mat-hint"),e._uU(17," Only "),e.TgZ(18,"strong"),e._uU(19,"numbers upto 7 digits "),e.qZA(),e._uU(20," are allowed"),e.qZA()(),e.TgZ(21,"mat-form-field",8)(22,"mat-label"),e._uU(23," Frequency "),e.qZA(),e.TgZ(24,"mat-select",10)(25,"mat-option",11),e._uU(26," *MONTHLY "),e.qZA(),e.TgZ(27,"mat-option",12),e._uU(28," *HALFMONTH "),e.qZA(),e.TgZ(29,"mat-option",13),e._uU(30," *WEEKLY "),e.qZA()()(),e.TgZ(31,"mat-form-field",8)(32,"mat-label"),e._uU(33," Period "),e.qZA(),e.TgZ(34,"mat-select",14)(35,"mat-option",15),e._uU(36," *THISM "),e.qZA(),e.TgZ(37,"mat-option",16),e._uU(38," *LASTM "),e.qZA(),e.TgZ(39,"mat-option",17),e._uU(40," *THISW "),e.qZA(),e.TgZ(41,"mat-option",18),e._uU(42," *LASTW "),e.qZA(),e.TgZ(43,"mat-option",19),e._uU(44," *NONE "),e.qZA()()(),e.TgZ(45,"mat-form-field",20)(46,"mat-label"),e._uU(47,"Description Leader"),e.qZA(),e._UZ(48,"input",21),e.TgZ(49,"mat-hint"),e._uU(50," Only "),e.TgZ(51,"strong"),e._uU(52,"30 characters "),e.qZA(),e._uU(53," are allowed"),e.qZA()(),e.TgZ(54,"mat-form-field",8)(55,"mat-label"),e._uU(56," Invoice Date "),e.qZA(),e.TgZ(57,"mat-select",22)(58,"mat-option",23),e._uU(59," *CURRENT "),e.qZA(),e.TgZ(60,"mat-option",24),e._uU(61," *START "),e.qZA(),e.TgZ(62,"mat-option",25),e._uU(63," *END "),e.qZA()()(),e.TgZ(64,"mat-form-field",26)(65,"mat-label"),e._uU(66,"Last Run"),e.qZA(),e._UZ(67,"input",27),e.qZA(),e.TgZ(68,"mat-form-field",8)(69,"mat-label"),e._uU(70,"Status Code"),e.qZA(),e._UZ(71,"input",28),e.TgZ(72,"mat-hint"),e._uU(73," Only "),e.TgZ(74,"strong"),e._uU(75,"2 characters "),e.qZA(),e._uU(76," are allowed"),e.qZA()()()(),e.TgZ(77,"button",29),e.NdJ("click",function(){return i.addMemorizedInvoice()}),e._uU(78,"Create"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",i.form))},dependencies:[g.m,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,C.Hw,b.lW,T.KE,T.bx,T.hX,W.Nt,A.gD,I.ey,h.a8,h.dk,h.dn,h.n5]}),o})(),k=(()=>{class o{constructor(t,i,r,s,c){this.anyvariable=t,this.router=i,this.fb=r,this.MemorizedInvoices=s,this.dialogRef=c,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({ControlNumber:this.anyvariable.WkCTL,BaseControlNumber:[this.anyvariable.WkBCTL,n.kI.pattern("[0-9]{1,7}")],Frequency:this.anyvariable.WKFREQ,Period:this.anyvariable.WCMGPERD,DescriptionLeader:[this.anyvariable.WCMGDESC,n.kI.maxLength(30)],InvoiceDate:this.anyvariable.WCMGDATE,LastRun:this.anyvariable.WCMGLAST,StatusCode:[this.anyvariable.WCMGSTAT,n.kI.maxLength(2)]})}ngOnDestroy(){this.getMemorizedInvoicesSubscription&&this.getMemorizedInvoicesSubscription.unsubscribe()}updateMemorizedInvoices(){var t=this.form.value;console.log(t),this.getMemorizedInvoicesSubscription&&this.getMemorizedInvoicesSubscription.unsubscribe(),this.getMemorizedInvoicesSubscription=this.MemorizedInvoices.updateMemorizedInvoices(this.user,t.ControlNumber,t.BaseControlNumber,t.Frequency,t.Period,t.DescriptionLeader,t.InvoiceDate,t.LastRun,t.StatusCode).subscribe(i=>{const s=JSON.parse(i[0].data[i[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===s?(this.successMessage(s),this.closeDialog(),this.router.navigate(["/main-nav/MemorizedInvoices/read"])):this.failureMessage(s)})}successMessage(t){f().fire(t,"","success")}failureMessage(t){f().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.WI),e.Y36(u.F0),e.Y36(n.qu),e.Y36(_.D),e.Y36(l.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-work-with-memorized-invoices"]],standalone:!0,features:[e.jDz],decls:83,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","ControlNumber"],["matInput","","formControlName","BaseControlNumber","maxlength","7"],["formControlName","Frequency"],["value","*MONTHLY"],["value","*HALFMONTH"],["value","*WEEKLY"],["formControlName","Period"],["value","*THISM"],["value","*LASTM"],["value","*THISW"],["value","*LASTW"],["value","*NONE"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","DescriptionLeader","maxlength","30"],["formControlName","InvoiceDate"],["value","*CURRENT"],["value","*START"],["value","*END"],["required","","matInput","","formControlName","LastRun"],["matInput","","formControlName","StatusCode","maxlength","2",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Maintain Memorized Invoice"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return i.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Control Number"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Base Control Number"),e.qZA(),e._UZ(19,"input",10),e.TgZ(20,"mat-hint"),e._uU(21," Only "),e.TgZ(22,"strong"),e._uU(23,"numbers upto 7 digits "),e.qZA(),e._uU(24," are allowed"),e.qZA()(),e.TgZ(25,"mat-form-field",8)(26,"mat-label"),e._uU(27," Frequency "),e.qZA(),e.TgZ(28,"mat-select",11)(29,"mat-option",12),e._uU(30," *MONTHLY "),e.qZA(),e.TgZ(31,"mat-option",13),e._uU(32," *HALFMONTH "),e.qZA(),e.TgZ(33,"mat-option",14),e._uU(34," *WEEKLY "),e.qZA()()(),e.TgZ(35,"mat-form-field",8)(36,"mat-label"),e._uU(37," Period "),e.qZA(),e.TgZ(38,"mat-select",15)(39,"mat-option",16),e._uU(40," *THISM "),e.qZA(),e.TgZ(41,"mat-option",17),e._uU(42," *LASTM "),e.qZA(),e.TgZ(43,"mat-option",18),e._uU(44," *THISW "),e.qZA(),e.TgZ(45,"mat-option",19),e._uU(46," *LASTW "),e.qZA(),e.TgZ(47,"mat-option",20),e._uU(48," *NONE "),e.qZA()()(),e.TgZ(49,"mat-form-field",21)(50,"mat-label"),e._uU(51,"Description Leader"),e.qZA(),e._UZ(52,"input",22),e.TgZ(53,"mat-hint"),e._uU(54," Only "),e.TgZ(55,"strong"),e._uU(56,"30 characters "),e.qZA(),e._uU(57," are allowed"),e.qZA()(),e.TgZ(58,"mat-form-field",8)(59,"mat-label"),e._uU(60," Invoice Date "),e.qZA(),e.TgZ(61,"mat-select",23)(62,"mat-option",24),e._uU(63," *CURRENT "),e.qZA(),e.TgZ(64,"mat-option",25),e._uU(65," *START "),e.qZA(),e.TgZ(66,"mat-option",26),e._uU(67," *END "),e.qZA()()(),e.TgZ(68,"mat-form-field",21)(69,"mat-label"),e._uU(70,"Last Run"),e.qZA(),e._UZ(71,"input",27),e.qZA(),e.TgZ(72,"mat-form-field",8)(73,"mat-label"),e._uU(74,"Status Code"),e.qZA(),e._UZ(75,"input",28),e.TgZ(76,"mat-hint"),e._uU(77," Only "),e.TgZ(78,"strong"),e._uU(79,"2 characters "),e.qZA(),e._uU(80," are allowed"),e.qZA()()()(),e.TgZ(81,"button",29),e.NdJ("click",function(){return i.updateMemorizedInvoices()}),e._uU(82,"Update"),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",i.form))},dependencies:[g.m,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,C.Hw,b.lW,T.KE,T.bx,T.hX,W.Nt,A.gD,I.ey,h.a8,h.dk,h.dn,h.n5]}),o})();var y=m(11790),U=m(36895),z=m(28255),D=m(10266),x=m(90455);function L(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.searchMemorizedInvoices())}),e.TgZ(1,"mat-icon"),e._uU(2,"clear"),e.qZA()()}}function Y(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.searchMemorizedInvoices())}),e.TgZ(1,"mat-icon"),e._uU(2,"search"),e.qZA()()}}function w(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"span",35),e.NdJ("click",function(r){return r.stopPropagation()}),e.TgZ(1,"mat-slide-toggle",36),e.NdJ("ngModelChange",function(r){const c=e.CHM(t).$implicit;return e.KtG(c.isActive=r)})("change",function(){const s=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.toggleColumn(s))}),e._uU(2),e.qZA(),e._UZ(3,"br"),e.qZA()}if(2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngModel",t.isActive),e.xp6(1),e.hij(" ",t.name," ")}}function F(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"form",37),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.getInvoiceBySearch(r.form.value))}),e.TgZ(1,"div",38)(2,"div",39)(3,"mat-form-field",40)(4,"mat-label"),e._uU(5," Control Number"),e.qZA(),e._UZ(6,"input",41),e.qZA(),e.TgZ(7,"mat-form-field",40)(8,"mat-label"),e._uU(9," Customer"),e.qZA(),e._UZ(10,"input",42),e.qZA(),e.TgZ(11,"mat-form-field",40)(12,"mat-label"),e._uU(13," Frequency "),e.qZA(),e.TgZ(14,"mat-select",43)(15,"mat-option",44),e._uU(16," *MONTHLY "),e.qZA(),e.TgZ(17,"mat-option",45),e._uU(18," *HALFMONTH "),e.qZA(),e.TgZ(19,"mat-option",46),e._uU(20," *WEEKLY "),e.qZA()()()()(),e.TgZ(21,"button",47),e._uU(22," Search "),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("formGroup",t.form)}}function H(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Number"),e.qZA())}function O(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WkCTL)}}function R(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Type"),e.qZA())}function E(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCHGTYPE)}}function J(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Customer"),e.qZA())}function B(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WKCUST)}}function G(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Building"),e.qZA())}function Q(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCHGBLDG)}}function P(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Amount"),e.qZA())}function K(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCHGAMT)}}function $(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Frequency"),e.qZA())}function j(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WKFREQ)}}function X(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Period"),e.qZA())}function V(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCMGPERD)}}function ee(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Date"),e.qZA())}function te(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCMGDATE)}}function oe(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Status"),e.qZA())}function ie(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCMGSTAT)}}function ne(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1," Description Leader "),e.qZA())}function ae(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCMGDESC)}}function re(o,a){1&o&&(e.TgZ(0,"th",48),e._uU(1,"Last Generated"),e.qZA())}function se(o,a){if(1&o&&(e.TgZ(0,"td",49),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Oqu(t.WCMGLAST)}}function me(o,a){1&o&&e._UZ(0,"th",50)}function ce(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"td",49)(1,"div",51)(2,"button",52)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"ul",53)(6,"li")(7,"button",54),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.updateMemorizedInvoices(s))}),e.TgZ(8,"mat-icon",55),e._uU(9,"edit"),e.qZA(),e.TgZ(10,"mat-label"),e._uU(11,"Update"),e.qZA()()(),e.TgZ(12,"li")(13,"button",54),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.deleteMemorizedInvoices(s))}),e.TgZ(14,"mat-icon",56),e._uU(15,"delete"),e.qZA(),e.TgZ(16,"mat-label"),e._uU(17,"Delete"),e.qZA()()(),e.TgZ(18,"li")(19,"button",54),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.generateMemorizedInvoices(s))}),e.TgZ(20,"mat-icon",55),e._uU(21,"comment"),e.qZA(),e.TgZ(22,"mat-label"),e._uU(23,"Generate Memo Invoice"),e.qZA()()()()()()}}function le(o,a){1&o&&e._UZ(0,"tr",57)}function ue(o,a){1&o&&e._UZ(0,"tr",58)}const de=function(){return[8,16,24]};let pe=(()=>{class o{constructor(t,i,r,s,c,d){this.fb=t,this.matDialog=i,this.router=r,this.route=s,this.CustomAlertService=c,this.memoService=d,this.displayedColumns=["Number","TP","Customer","Bldg","Amount","Frequency","Period","Date","St","Actions"],this.dataSource=new p.by,this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.pageSize=8,this.totalRecords=0,this.currentFilters=null,this.pageNumber=1,this.columnShowHideList=[],this.controlNumber=""}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({CLT:["",n.kI.pattern("[0-9]{1,7}")],CUST:["",n.kI.pattern("[0-9]{1,4}")],FREQ:""}),this.getMemorizedInvoices(this.pageSize,this.pageNumber),this.dataSource.filterPredicate=this.createFilter()}resetSearch(){this.form.reset();const t=this.pageSize,i=this.pageNumber;this.currentFilters=null,this.paginator.firstPage(),this.getMemorizedInvoices(t,i)}createFilter(){return(t,i)=>{const r=JSON.parse(i);return Object.keys(r).every(s=>t[s].toString().toLowerCase().includes(r[s].toLowerCase()))}}ngOnDestroy(){this.memoSubscription&&this.memoSubscription.unsubscribe()}getMemorizedInvoices(t,i){const r=this.currentFilters||{},{CLT:s="",CUST:c="",FREQ:d=""}=r;this.memoSubscription&&this.memoSubscription.unsubscribe(),this.memoSubscription=this.memoService.getMemorizedInvoices(this.user,s,c,d,t,i).subscribe(he=>{var N=JSON.parse(he[0].data[1]?.value);this.dataSource.data=N.returnedData,this.totalRecords=N.TotalRecords})}getInvoiceBySearch(t){this.currentFilters=t,this.paginator.firstPage(),this.getMemorizedInvoices(this.pageSize,this.pageNumber)}onPaginateChange(t){this.pageSize=t.pageSize,this.getMemorizedInvoices(t.pageSize,t.pageIndex+1)}searchMemorizedInvoices(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(t){if(t.isActive)this.displayedColumns.splice(t.position>this.displayedColumns.length-1?this.displayedColumns.length-1:t.position,0,t.name);else{let i=this.displayedColumns.indexOf(t.name);i>-1&&this.displayedColumns.splice(i,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((t,i)=>{"Actions"!=t&&"LastChangedBy"!=t&&this.columnShowHideList.push({position:i,name:t,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Description Leader",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Last Generated",isActive:!1})}addMemorizedInvoices(){this.matDialog.open(q,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}updateMemorizedInvoices(t){this.matDialog.open(k,{width:"1000px",maxHeight:"80vh",data:t,autoFocus:!1})}deleteMemorizedInvoices(t){this.CustomAlertService.openCustomAlert("Are you sure you want to delete this control number: "+t.WkCTL+"? ").afterClosed().subscribe(r=>{r&&(this.memoSubscription&&this.memoSubscription.unsubscribe(),this.memoSubscription=this.memoService.deleteMemorizedInvoices(this.user,t.WkCTL,t.WkBCTL,t.WKFREQ,t.WCMGPERD,t.WCMGDESC,t.WCMGDATE,t.WCMGLAST,t.WCMGSTAT).subscribe(s=>{const d=JSON.parse(s[0].data[s[0].data.length-1].value).returnedData.message;"Record Deleted Successfully"===d?(this.successMessage(d),this.getMemorizedInvoices()):(this.failureMessage(d),this.getMemorizedInvoices())}))})}generateMemorizedInvoices(t){var c;this.memoSubscription&&this.memoSubscription.unsubscribe(),this.memoSubscription=this.memoService.memoInvoiceGenerate((c=t.WkCTL,7,String(c).padStart(7,"0"))).subscribe(c=>{const d=c?.[0]?.data?.[c[0].data.length-1]?.value;d?.toUpperCase()==="SUBMITTED SUCCESSFULLY".toUpperCase()?(this.successMessage(d),this.getMemorizedInvoices()):this.failureMessage(d)})}successMessage(t){f().fire(t,"","success")}failureMessage(t){f().fire(t,"","error")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.qu),e.Y36(l.uw),e.Y36(u.F0),e.Y36(u.gz),e.Y36(y.y),e.Y36(_.D))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-work-with-memorized-invoices"]],viewQuery:function(t,i){if(1&t&&e.Gf(Z.NW,5),2&t){let r;e.iGM(r=e.CRH())&&(i.paginator=r.first)}},standalone:!0,features:[e.jDz],decls:63,vars:12,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search MemorizedInvoices",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add Memorized Invoices",1,"addButton",3,"click"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],["mat-button","","type","reset","value","Reset","matTooltip","Reset invoice values",1,"addButton","buttons",3,"click"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Number"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","TP"],["matColumnDef","Customer"],["matColumnDef","Bldg"],["matColumnDef","Amount"],["matColumnDef","Frequency"],["matColumnDef","Period"],["matColumnDef","Date"],["matColumnDef","St"],["matColumnDef","Description Leader"],["matColumnDef","Last Generated"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"length","pageSizeOptions","pageSize","page"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search MemorizedInvoices",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CLT"],["matInput","","formControlName","CUST"],["formControlName","FREQ"],["value","*MONTHLY"],["value","*HALFMONTH"],["value","*WEEKLY"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(t,i){if(1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),e._uU(3," Work With Memorized Invoices "),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,L,3,0,"button",3),e.YNc(6,Y,3,0,"button",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return i.addMemorizedInvoices()}),e.TgZ(8,"mat-icon"),e._uU(9,"add"),e.qZA()(),e.TgZ(10,"mat-menu",null,6),e.YNc(12,w,4,2,"span",7),e.qZA(),e.TgZ(13,"button",8,9)(15,"mat-icon"),e._uU(16,"visibility_off"),e.qZA()(),e.TgZ(17,"button",10),e.NdJ("click",function(){return i.resetSearch()}),e.TgZ(18,"mat-icon"),e._uU(19,"loop"),e.qZA()()()(),e.TgZ(20,"mat-card-content",11),e.YNc(21,F,23,1,"form",12),e.qZA(),e.TgZ(22,"table",13),e.ynx(23,14),e.YNc(24,H,2,0,"th",15),e.YNc(25,O,2,1,"td",16),e.BQk(),e.ynx(26,17),e.YNc(27,R,2,0,"th",15),e.YNc(28,E,2,1,"td",16),e.BQk(),e.ynx(29,18),e.YNc(30,J,2,0,"th",15),e.YNc(31,B,2,1,"td",16),e.BQk(),e.ynx(32,19),e.YNc(33,G,2,0,"th",15),e.YNc(34,Q,2,1,"td",16),e.BQk(),e.ynx(35,20),e.YNc(36,P,2,0,"th",15),e.YNc(37,K,2,1,"td",16),e.BQk(),e.ynx(38,21),e.YNc(39,$,2,0,"th",15),e.YNc(40,j,2,1,"td",16),e.BQk(),e.ynx(41,22),e.YNc(42,X,2,0,"th",15),e.YNc(43,V,2,1,"td",16),e.BQk(),e.ynx(44,23),e.YNc(45,ee,2,0,"th",15),e.YNc(46,te,2,1,"td",16),e.BQk(),e.ynx(47,24),e.YNc(48,oe,2,0,"th",15),e.YNc(49,ie,2,1,"td",16),e.BQk(),e.ynx(50,25),e.YNc(51,ne,2,0,"th",15),e.YNc(52,ae,2,1,"td",16),e.BQk(),e.ynx(53,26),e.YNc(54,re,2,0,"th",15),e.YNc(55,se,2,1,"td",16),e.BQk(),e.ynx(56,27),e.YNc(57,me,1,0,"th",28),e.YNc(58,ce,24,0,"td",16),e.BQk(),e.YNc(59,le,1,0,"tr",29),e.YNc(60,ue,1,0,"tr",30),e.qZA(),e.TgZ(61,"mat-paginator",31,32),e.NdJ("page",function(s){return i.onPaginateChange(s)}),e.qZA()()),2&t){const r=e.MAs(11);e.xp6(5),e.Q6J("ngIf",i.searchTextDisplay),e.xp6(1),e.Q6J("ngIf",!i.searchTextDisplay),e.xp6(6),e.Q6J("ngForOf",i.columnShowHideList),e.xp6(1),e.Q6J("matMenuTriggerFor",r),e.xp6(8),e.Q6J("ngIf",i.searchTextDisplay),e.xp6(1),e.Q6J("dataSource",i.dataSource),e.xp6(37),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(1),e.Q6J("length",i.totalRecords)("pageSizeOptions",e.DdM(11,de))("pageSize",i.pageSize)}},dependencies:[g.m,U.sg,U.O5,n._Y,n.Fj,n.JJ,n.JL,n.On,n.sg,n.u,Z.NW,C.Hw,z.VK,z.p6,b.lW,T.KE,T.hX,W.Nt,A.gD,I.ey,h.a8,h.dk,h.dn,h.n5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk,D.gM,x.Rr]}),o})()}}]);