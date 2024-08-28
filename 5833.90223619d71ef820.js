"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5833,1790,8754,5645,2313],{11790:(U,C,s)=>{s.d(C,{y:()=>h});var l=s(65412),m=s(94650),f=s(97392),D=s(4859);let A=(()=>{class d{constructor(c,g){this.dialogRef=c,this.data=g}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return d.\u0275fac=function(c){return new(c||d)(m.Y36(l.so),m.Y36(l.WI))},d.\u0275cmp=m.Xpm({type:d,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(c,g){1&c&&(m.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),m.NdJ("click",function(){return g.closeDialog()}),m._uU(3,"close "),m.qZA(),m.TgZ(4,"span",3),m._uU(5),m.qZA()(),m.TgZ(6,"button",4),m._uU(7,"Cancel"),m.qZA(),m.TgZ(8,"button",5),m._uU(9,"Delete"),m.qZA()()),2&c&&(m.xp6(5),m.Oqu(g.data.message),m.xp6(1),m.Q6J("mat-dialog-close",!1),m.xp6(2),m.Q6J("mat-dialog-close",!0))},dependencies:[f.Hw,D.lW,l.ZT]}),d})(),h=(()=>{class d{constructor(c){this.dialog=c}openCustomAlert(c){return this.dialog.open(A,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:c}})}}return d.\u0275fac=function(c){return new(c||d)(m.LFG(l.uw))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},15833:(U,C,s)=>{s.r(C),s.d(C,{WwGeneralInvoiceDetailsComponent:()=>ne});var l=s(24006),m=s(98739),f=s(7155),D=s(65412),A=s(35226),h=s.n(A),d=s(70879),e=s(94650),c=s(19132),g=s(20532),Z=s(97392),G=s(4859),v=s(59549),T=s(44144),_=s(84385),I=s(3238),p=s(73546);let y=(()=>{class a{constructor(t,n,i,r,u){this.router=t,this.fb=n,this.anyvariable=i,this.GeneralInvoiceDetailsSvc=r,this.dialogRef=u,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),console.log(this.anyvariable.WKCTRL),this.form=this.fb.group({DGTASK:"",DGLEGC:"",DGLEGS:"",DGQTY:".00",DGRATE:".00",DGBASE:"",DGAMT:"",DGMINM:"",DGDESC:"",DGDTYP:"",DGDOCN:""}),this.form.get("DGQTY")?.valueChanges.subscribe(()=>this.updateAmount()),this.form.get("DGRATE")?.valueChanges.subscribe(()=>this.updateAmount())}updateAmount(){const i=(parseFloat(this.form.get("DGQTY")?.value)||0)*(parseFloat(this.form.get("DGRATE")?.value)||0);this.form.get("DGAMT")?.setValue(i.toFixed(2))}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}createGeneralInvoiceDetails(){this.updateAmount();var t=this.form.value;console.log(t),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.GeneralInvoiceDetailsSvc.createGeneralInvoiceDetails(this.user,this.anyvariable.WKCTRL,t.DGTASK.toUpperCase(),t.DGLEGC,t.DGLEGS,t.DGQTY.toUpperCase(),t.DGRATE,t.DGBASE,t.DGAMT,t.DGMINM,t.DGDESC,t.DGDTYP,t.DGDOCN).subscribe(n=>{const r=JSON.parse(n[0].data[n[0].data.length-1].value).returnedData.message;"Record Created Successfully"===r?(this.successMessage(r),this.closeDialog(),this.router.navigateByUrl("/main-nav/generalInvoiceDetails/read",{state:this.anyvariable})):this.failureMessage(r)})}successMessage(t){h().fire(t,"","success")}failureMessage(t){h().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.F0),e.Y36(l.qu),e.Y36(D.WI),e.Y36(g.u),e.Y36(D.so))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-general-invoice-details-add"]],standalone:!0,features:[e.jDz],decls:71,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","DGTASK",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","DGLEGC"],["matInput","","formControlName","DGLEGS"],["matInput","","formControlName","DGQTY"],["matInput","","formControlName","DGRATE"],["matInput","","formControlName","DGBASE"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","DGAMT"],["formControlName","DGMINM"],["value",""],["value","Y"],["value","N"],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","DGDESC"],["matInput","","formControlName","DGDTYP",2,"text-transform","uppercase"],["matInput","","formControlName","DGDOCN"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Generate Invoice Detail Maintenance"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return n.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Task ID "),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"div",10)(17,"label",11),e._uU(18,"Ledger Codes"),e.qZA(),e.TgZ(19,"div",12)(20,"mat-form-field",8)(21,"mat-label"),e._uU(22,"Ledger Code"),e.qZA(),e._UZ(23,"input",13),e.qZA(),e.TgZ(24,"mat-form-field",8)(25,"mat-label"),e._uU(26,"Ledger Code Suffix"),e.qZA(),e._UZ(27,"input",14),e.qZA()()(),e._UZ(28,"br"),e.TgZ(29,"mat-form-field",8)(30,"mat-label"),e._uU(31,"Quantity"),e.qZA(),e._UZ(32,"input",15),e.qZA(),e.TgZ(33,"mat-form-field",8)(34,"mat-label"),e._uU(35,"Rate "),e.qZA(),e._UZ(36,"input",16),e.qZA(),e.TgZ(37,"mat-form-field",8)(38,"mat-label"),e._uU(39,"Basis"),e.qZA(),e._UZ(40,"input",17),e.qZA(),e.TgZ(41,"mat-form-field",18)(42,"mat-label"),e._uU(43,"Amount=Q*R"),e.qZA(),e._UZ(44,"input",19),e.qZA(),e._UZ(45,"br"),e.TgZ(46,"mat-form-field",8)(47,"mat-label"),e._uU(48,"Minimum Applied"),e.qZA(),e.TgZ(49,"mat-select",20)(50,"mat-option",21),e._uU(51,"-- Select --"),e.qZA(),e.TgZ(52,"mat-option",22),e._uU(53,"Yes"),e.qZA(),e.TgZ(54,"mat-option",23),e._uU(55,"No"),e.qZA()()(),e.TgZ(56,"mat-form-field",24)(57,"mat-label"),e._uU(58,"Description"),e.qZA(),e.TgZ(59,"textarea",25),e._uU(60," Description"),e.qZA()(),e.TgZ(61,"mat-form-field",8)(62,"mat-label"),e._uU(63,"Document Type"),e.qZA(),e._UZ(64,"input",26),e.qZA(),e.TgZ(65,"mat-form-field",8)(66,"mat-label"),e._uU(67,"Document Number"),e.qZA(),e._UZ(68,"input",27),e.qZA()()(),e.TgZ(69,"button",28),e.NdJ("click",function(){return n.createGeneralInvoiceDetails()}),e._uU(70," Add "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",n.form))},dependencies:[d.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,Z.Hw,G.lW,v.KE,v.hX,T.Nt,_.gD,I.ey,p.a8,p.dk,p.dn,p.n5]}),a})(),N=(()=>{class a{constructor(t,n,i,r,u){this.router=t,this.fb=n,this.anyvariable=i,this.GeneralInvoiceDetailsSvc=r,this.dialogRef=u,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({DGTASK:this.anyvariable[0].DGTASK,DGLEGC:this.anyvariable[0].DGLEGC,DGLEGS:this.anyvariable[0].DGLEGS,DGQTY:this.anyvariable[0].DGQTY,DGRATE:this.anyvariable[0].DGRATE,DGBASE:this.anyvariable[0].DGBASE,DGAMT:this.anyvariable[0].DGAMT,DGMINM:this.anyvariable[0].DGMINM,DGDESC:this.anyvariable[0].WKGDESC,DGDTYP:this.anyvariable[0].DGDTYP,DGDOCN:this.anyvariable[0].DGDOCN})}ngOnDestroy(){this.ChangeSubscription&&this.ChangeSubscription.unsubscribe()}updateGeneralInvoiceDetails(){var t=this.form.value;console.log(t),this.GeneralInvoiceDetailsSvc.updateGeneralInvoiceDetails(this.user,this.anyvariable[0].WKCTL,this.anyvariable[0].DGSEQ,this.anyvariable[0].DGTASK,t.DGLEGC,t.DGLEGS,t.DGQTY,t.DGRATE,t.DGBASE,t.DGAMT,t.DGMINM,t.DGDESC,t.DGDTYP,t.DGDOCN).subscribe(n=>{this.result=n,console.log(this.result);const r=JSON.parse(n[0].data[n[0].data.length-1].value).returnedData.message;if("Record Updated Successfully"===r)this.successMessage(r),this.closeDialog(),this.router.navigateByUrl("/main-nav/generalInvoiceDetails/read",{state:this.anyvariable[1]});else{const u=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(u)}})}successMessage(t){h().fire(t,"","success")}failureMessage(t){h().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.F0),e.Y36(l.qu),e.Y36(D.WI),e.Y36(g.u),e.Y36(D.so))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-general-invoice-details-change"]],standalone:!0,features:[e.jDz],decls:71,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","DGTASK",2,"text-transform","uppercase"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","required","","formControlName","DGLEGC"],["matInput","","required","","formControlName","DGLEGS"],["matInput","","formControlName","DGQTY"],["matInput","","formControlName","DGRATE",2,"text-transform","uppercase"],["matInput","","formControlName","DGBASE"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","DGAMT"],["formControlName","DGMINM"],["value",""],["value","Y"],["value","N"],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","DGDESC"],["matInput","","formControlName","DGDTYP",2,"text-transform","uppercase"],["matInput","","formControlName","DGDOCN",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Generate Invoice Detail Maintenance"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return n.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Task ID "),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"div",10)(17,"label",11),e._uU(18,"Ledger Codes"),e.qZA(),e.TgZ(19,"div",12)(20,"mat-form-field",8)(21,"mat-label"),e._uU(22,"Ledger Code"),e.qZA(),e._UZ(23,"input",13),e.qZA(),e.TgZ(24,"mat-form-field",8)(25,"mat-label"),e._uU(26,"Ledger Code Suffix"),e.qZA(),e._UZ(27,"input",14),e.qZA()()(),e._UZ(28,"br"),e.TgZ(29,"mat-form-field",8)(30,"mat-label"),e._uU(31,"Quantity"),e.qZA(),e._UZ(32,"input",15),e.qZA(),e.TgZ(33,"mat-form-field",8)(34,"mat-label"),e._uU(35,"Rate "),e.qZA(),e._UZ(36,"input",16),e.qZA(),e.TgZ(37,"mat-form-field",8)(38,"mat-label"),e._uU(39,"Basis"),e.qZA(),e._UZ(40,"input",17),e.qZA(),e.TgZ(41,"mat-form-field",18)(42,"mat-label"),e._uU(43,"Amount=Q*R"),e.qZA(),e._UZ(44,"input",19),e.qZA(),e._UZ(45,"br"),e.TgZ(46,"mat-form-field",8)(47,"mat-label"),e._uU(48,"Minimum Applied"),e.qZA(),e.TgZ(49,"mat-select",20)(50,"mat-option",21),e._uU(51,"-- Select --"),e.qZA(),e.TgZ(52,"mat-option",22),e._uU(53,"Yes"),e.qZA(),e.TgZ(54,"mat-option",23),e._uU(55,"No"),e.qZA()()(),e.TgZ(56,"mat-form-field",24)(57,"mat-label"),e._uU(58,"Description"),e.qZA(),e.TgZ(59,"textarea",25),e._uU(60," Description"),e.qZA()(),e.TgZ(61,"mat-form-field",8)(62,"mat-label"),e._uU(63,"Document Type"),e.qZA(),e._UZ(64,"input",26),e.qZA(),e.TgZ(65,"mat-form-field",8)(66,"mat-label"),e._uU(67,"Document Number"),e.qZA(),e._UZ(68,"input",27),e.qZA()()(),e.TgZ(69,"button",28),e.NdJ("click",function(){return n.updateGeneralInvoiceDetails()}),e._uU(70," Update "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",n.form))},dependencies:[d.m,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,Z.Hw,G.lW,v.KE,v.hX,T.Nt,_.gD,I.ey,p.a8,p.dk,p.dn,p.n5]}),a})();var S=s(11790);let q=(()=>{class a{constructor(t,n,i,r,u,b){this.fb=t,this.router=n,this.CustomAlertService=i,this.anyvariable=r,this.GeneralInvoiceDetailsSvc=u,this.dialogRef=b,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({ControlNumber:this.anyvariable[0].WKCTL,PrintSequence:this.anyvariable[0].DGSEQ,LedgerCode:this.anyvariable[0].DGLEGC,Description:this.anyvariable[0].WKGDESC,Quantity:this.anyvariable[0].DGAMT}),this.form.disable()}ngOnDestroy(){this.deleteSubscription&&this.deleteSubscription.unsubscribe()}deleteGeneralInvoiceDetails(){this.CustomAlertService.openCustomAlert("Are you sure want to delete this Control Number "+this.anyvariable[0].WKCTL+"?").afterClosed().subscribe(n=>{n&&(this.deleteSubscription&&this.deleteSubscription.unsubscribe(),this.deleteSubscription=this.GeneralInvoiceDetailsSvc.deleteGeneralInvoiceDetails(this.user,this.anyvariable[0].WKCTL,this.anyvariable[0].DGSEQ).subscribe(i=>{this.result=i,console.log(this.result);var r=i[0].data.length;const u=i[0].data[r-1].value;"SUCCESSFULLY DELETED"===u?(this.successMessage(u),this.closeDialog(),this.router.navigateByUrl("/main-nav/generalInvoiceDetails/read",{state:this.anyvariable[1]})):this.failureMessage(i[0].data[r-1].value)}))})}successMessage(t){h().fire(t,"","success")}failureMessage(t){h().fire(t,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(l.qu),e.Y36(c.F0),e.Y36(S.y),e.Y36(D.WI),e.Y36(g.u),e.Y36(D.so))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-general-invoice-details-delete"]],standalone:!0,features:[e.jDz],decls:34,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ControlNumber"],["matInput","","formControlName","PrintSequence"],["matInput","","formControlName","LedgerCode"],["matInput","","formControlName","Description"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","Quantity"],["mat-raised-button","",1,"buttons","removeButton",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4,"Delete a Line from an Invoice"),e.qZA()(),e.TgZ(5,"button",2),e.NdJ("click",function(){return n.closeDialog()}),e.TgZ(6,"mat-icon",3),e._uU(7,"close"),e.qZA()()(),e.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),e._uU(14,"Control Number"),e.qZA(),e._UZ(15,"input",9),e.qZA(),e.TgZ(16,"mat-form-field",8)(17,"mat-label"),e._uU(18,"Print Sequence"),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"mat-form-field",8)(21,"mat-label"),e._uU(22," Ledger Code "),e.qZA(),e._UZ(23,"input",11),e.qZA(),e.TgZ(24,"mat-form-field",8)(25,"mat-label"),e._uU(26,"Description"),e.qZA(),e._UZ(27,"input",12),e.qZA(),e.TgZ(28,"mat-form-field",13)(29,"mat-label"),e._uU(30,"Quantity"),e.qZA(),e._UZ(31,"input",14),e.qZA()()(),e.TgZ(32,"button",15),e.NdJ("click",function(){return n.deleteGeneralInvoiceDetails()}),e._uU(33," Delete "),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("formGroup",n.form))},dependencies:[d.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,Z.Hw,G.lW,v.KE,v.hX,T.Nt,p.a8,p.dk,p.dn,p.n5]}),a})();var w=s(10266),Y=s(36895);function x(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1," Status "),e.qZA())}function W(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.DGSTAT," ")}}function M(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1," Task Code "),e.qZA())}function E(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu(t.DGTASK)}}function L(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1," Ledger Codes "),e.qZA())}function Q(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.DGLEGC," ")}}function k(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1," Description "),e.qZA())}function R(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.WKGDESC," ")}}function J(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1," Document Number "),e.qZA())}function F(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.DGDOCN," ")}}function B(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1," Quantity"),e.qZA())}function O(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.ALo(2,"number"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.DGQTY,"1.2-2"))}}function K(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1,"Rate"),e.qZA())}function H(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.ALo(2,"number"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.DGRATE,"1.4-4"))}}function $(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1,"Charge Amount"),e.qZA())}function j(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.ALo(2,"number"),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.hij("$ ",e.xi3(2,1,t.DGAMT,"1.2-2"),"")}}function z(a,o){1&a&&(e.TgZ(0,"th",34),e._uU(1,"Minimum"),e.qZA())}function P(a,o){if(1&a&&(e.TgZ(0,"td",35),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu(t.DGMINM)}}function X(a,o){1&a&&e._UZ(0,"th",36)}function V(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"td",35)(1,"div",37)(2,"button",38)(3,"mat-icon"),e._uU(4,"more_vert"),e.qZA()(),e.TgZ(5,"ul",39)(6,"li")(7,"button",40),e.NdJ("click",function(){const r=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.change(r))}),e.TgZ(8,"mat-icon",41),e._uU(9,"edit"),e.qZA(),e.TgZ(10,"mat-label"),e._uU(11,"Change"),e.qZA()()(),e.TgZ(12,"li")(13,"button",42),e.NdJ("click",function(){const r=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.Comments(r))}),e.TgZ(14,"mat-icon",41),e._uU(15,"comment"),e.qZA(),e.TgZ(16,"mat-label"),e._uU(17,"Comments"),e.qZA()()(),e.TgZ(18,"li")(19,"button",42),e.NdJ("click",function(){const r=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.delete(r))}),e.TgZ(20,"mat-icon",43),e._uU(21,"delete"),e.qZA(),e.TgZ(22,"mat-label"),e._uU(23,"Delete"),e.qZA()()()()()()}}function ee(a,o){1&a&&e._UZ(0,"tr",44)}function te(a,o){1&a&&e._UZ(0,"tr",45)}const ae=function(){return[8,16,24]};let ne=(()=>{class a{constructor(t,n,i,r,u){this.router=t,this.fb=n,this.route=i,this.matDialog=r,this.GeneralInvoiceDetailsSvc=u,this.searchTextDisplay=!1,this.duplicateSource=[],this.user=localStorage.getItem("userName"),this.total=0,this.displayedColumns=["Status","TaskCode","LedgerCodes","Description","DocumentNumber","Quantity","Rate","ChargeAmount","MN","Actions"]}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}formatRate(t){return t.toFixed(2)}ngOnInit(){this.element=history.state,console.log(this.element),this.form=this.fb.group({ControlNum:{value:this.element.WKCTRL,disabled:!0},Customer:{value:this.element.WKCUST,disabled:!0},InvAmount:[{value:"$"+this.formatRate(parseFloat(this.element.WKAMT)),disabled:!0},[l.kI.pattern("^[0-9]{1,3}(\\.[0-9]{4})$")]]}),this.getGeneralInvoiceDetails()}onBack(){this.router.navigate(["/main-nav/generalInvoice/read"])}getGeneralInvoiceDetails(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.GeneralInvoiceDetailsSvc.getGeneralInvoiceDetails(this.user,this.element.WKCTRL).subscribe(t=>{this.total=0;var i=JSON.parse(t[0].data[1].value);if(this.duplicateSource=i.returnedData,console.log(this.duplicateSource),this.dataSource=new f.by(this.duplicateSource),this.dataSource.paginator=this.paginator,this.duplicateSource.length>0){this.dataSource.paginator=this.paginator;for(let r=0;r<this.duplicateSource.length;r++)this.total+=this.duplicateSource[r].DGAMT,console.log(this.total)}})}add(t){this.matDialog.open(y,{width:"1000px",maxHeight:"80vh",data:t,autoFocus:!1})}change(t){var i=history.state;this.matDialog.open(N,{width:"1000px",maxHeight:"80vh",data:[t,i],autoFocus:!1})}delete(t){var i=history.state;this.matDialog.open(q,{width:"1000px",maxHeight:"80vh",data:[t,i],autoFocus:!1})}Comments(t){var r=[t,history.state];console.log(r),this.router.navigateByUrl("/main-nav/generalInvoiceDetails/comments/read",{state:r})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.F0),e.Y36(l.qu),e.Y36(c.gz),e.Y36(D.uw),e.Y36(g.u))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-ww-general-invoice-details"]],viewQuery:function(t,n){if(1&t&&e.Gf(m.NW,5),2&t){let i;e.iGM(i=e.CRH())&&(n.paginator=i.first)}},standalone:!0,features:[e.jDz],decls:70,vars:10,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","matTooltip","Add New General Invoice Details",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","ControlNum"],["matInput","","readonly","","formControlName","Customer"],["matInput","","formControlName","InvAmount"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","TaskCode"],["matColumnDef","LedgerCodes"],["matColumnDef","Description"],["matColumnDef","DocumentNumber"],["matColumnDef","Quantity"],["matColumnDef","Rate"],["matColumnDef","ChargeAmount"],["matColumnDef","MN"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"Content-page-both"],[1,"left-side"],[1,"buttons","button3"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),e.NdJ("click",function(){return n.onBack()}),e.TgZ(4,"mat-icon"),e._uU(5,"navigate_before "),e.qZA()(),e._uU(6," Work With General Invoice Details "),e.qZA(),e.TgZ(7,"div",3)(8,"button",4),e.NdJ("click",function(){return n.add(n.element)}),e.TgZ(9,"mat-icon"),e._uU(10,"add"),e.qZA()()()(),e.TgZ(11,"mat-card-content",5)(12,"form",6)(13,"div",7)(14,"div",8)(15,"mat-form-field",9)(16,"mat-label"),e._uU(17,"Control No"),e.qZA(),e._UZ(18,"input",10),e.qZA(),e.TgZ(19,"mat-form-field",9)(20,"mat-label"),e._uU(21,"Customer"),e.qZA(),e._UZ(22,"input",11),e.qZA(),e.TgZ(23,"mat-form-field",9)(24,"mat-label"),e._uU(25,"Invoice Amount"),e.qZA(),e._UZ(26,"input",12),e.qZA()()()()(),e.TgZ(27,"table",13),e.ynx(28,14),e.YNc(29,x,2,0,"th",15),e.YNc(30,W,2,1,"td",16),e.BQk(),e.ynx(31,17),e.YNc(32,M,2,0,"th",15),e.YNc(33,E,2,1,"td",16),e.BQk(),e.ynx(34,18),e.YNc(35,L,2,0,"th",15),e.YNc(36,Q,2,1,"td",16),e.BQk(),e.ynx(37,19),e.YNc(38,k,2,0,"th",15),e.YNc(39,R,2,1,"td",16),e.BQk(),e.ynx(40,20),e.YNc(41,J,2,0,"th",15),e.YNc(42,F,2,1,"td",16),e.BQk(),e.ynx(43,21),e.YNc(44,B,2,0,"th",15),e.YNc(45,O,3,4,"td",16),e.BQk(),e.ynx(46,22),e.YNc(47,K,2,0,"th",15),e.YNc(48,H,3,4,"td",16),e.BQk(),e.ynx(49,23),e.YNc(50,$,2,0,"th",15),e.YNc(51,j,3,4,"td",16),e.BQk(),e.ynx(52,24),e.YNc(53,z,2,0,"th",15),e.YNc(54,P,2,1,"td",16),e.BQk(),e.ynx(55,25),e.YNc(56,X,1,0,"th",26),e.YNc(57,V,24,0,"td",16),e.BQk(),e.YNc(58,ee,1,0,"tr",27),e.YNc(59,te,1,0,"tr",28),e.qZA(),e.TgZ(60,"div",29)(61,"div",30)(62,"button",31),e._UZ(63,"br"),e._uU(64," Total :$ "),e.TgZ(65,"b"),e._uU(66),e.ALo(67,"number"),e.qZA()()()(),e._UZ(68,"mat-paginator",32,33),e.qZA()),2&t&&(e.xp6(12),e.Q6J("formGroup",n.form),e.xp6(15),e.Q6J("dataSource",n.dataSource),e.xp6(31),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(7),e.Oqu(e.xi3(67,6,n.total,"1.2-2")),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(9,ae)))},dependencies:[d.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,m.NW,Z.Hw,G.lW,v.KE,v.hX,T.Nt,p.a8,p.dk,p.dn,p.n5,f.BZ,f.fO,f.as,f.w1,f.Dz,f.nj,f.ge,f.ev,f.XQ,f.Gk,w.gM,Y.JJ]}),a})()}}]);