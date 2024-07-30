"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3729,1790,8754,5645,2313],{11790:(D,A,s)=>{s.d(A,{y:()=>t});var p=s(65412),m=s(94650),Z=s(97392),G=s(4859);let v=(()=>{class u{constructor(d,h){this.dialogRef=d,this.data=h}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return u.\u0275fac=function(d){return new(d||u)(m.Y36(p.so),m.Y36(p.WI))},u.\u0275cmp=m.Xpm({type:u,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(d,h){1&d&&(m.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),m.NdJ("click",function(){return h.closeDialog()}),m._uU(3,"close "),m.qZA(),m.TgZ(4,"span",3),m._uU(5),m.qZA()(),m.TgZ(6,"button",4),m._uU(7,"Cancel"),m.qZA(),m.TgZ(8,"button",5),m._uU(9,"Delete"),m.qZA()()),2&d&&(m.xp6(5),m.Oqu(h.data.message),m.xp6(1),m.Q6J("mat-dialog-close",!1),m.xp6(2),m.Q6J("mat-dialog-close",!0))},dependencies:[Z.Hw,G.lW,p.ZT]}),u})(),t=(()=>{class u{constructor(d){this.dialog=d}openCustomAlert(d){return this.dialog.open(v,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:d}})}}return u.\u0275fac=function(d){return new(d||u)(m.LFG(p.uw))},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3729:(D,A,s)=>{s.r(A),s.d(A,{GeneralInvoicesComponent:()=>gt});var p=s(7155),m=s(70879),Z=s(65412),G=s(35226),v=s.n(G),t=s(94650),u=s(19132),l=s(24006),d=s(20025),h=s(97392),T=s(4859),g=s(59549),b=s(44144),I=s(84385),U=s(3238),f=s(73546);let y=(()=>{class n{constructor(e,o,i,r,c,_){this.router=e,this.fb=o,this.route=i,this.GeneralInvoicesSvc=r,this.anyvariable=c,this.dialogRef=_,this.user=localStorage.getItem("userName")}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.form=this.fb.group({HGCUST:"",HGCSFX:"",HGCSF2:"",HGBLDG:"",HGBCST:"",HGBSFX:"",HGBSF2:"",HDATE:[e],HGTYPE:"",HGAMT:"",HGREF:"",HGCAR:"",HGDESC:""})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}createGeneralInvoices(){var e=this.form.value;console.log(e),this.GeneralInvoicesSvc.createGeneralInvoices(this.user,e.HGCUST,e.HGCSFX,e.HGCSF2,e.HGBLDG,e.HGBCST,e.HGBSFX,e.HGBSF2,e.HDATE,e.HGTYPE,e.HGAMT,e.HGREF,e.HGCAR,e.HGDESC).subscribe(o=>{this.result=o,console.log(this.result);const r=JSON.parse(o[0].data[o[0].data.length-1].value).returnedData.message;"Record Created Successfully"===r?(this.successMessage(r),this.closeDialog(),this.router.navigate(["/main-nav/generalInvoice/read"])):this.failureMessage(r)})}successMessage(e){v().fire(e,"","success")}failureMessage(e){v().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(l.qu),t.Y36(u.gz),t.Y36(d.m),t.Y36(Z.WI),t.Y36(Z.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-general-invoice"]],standalone:!0,features:[t.jDz],decls:86,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","required","","formControlName","HGCUST"],["matInput","","formControlName","HGCSFX"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","HGCSF2"],["matInput","","required","","formControlName","HGBLDG"],["matInput","","formControlName","HGBCST"],["matInput","","formControlName","HGBSFX"],["matInput","","formControlName","HGBSF2"],["type","date","matInput","","formControlName","HDATE"],["formControlName","HGTYPE"],["value",""],["value","GI"],["value","MI"],["value","AI"],["value","SI"],["value","FI"],["matInput","","formControlName","HGAMT"],["matInput","","formControlName","HGREF"],["matInput","","formControlName","HGCAR"],["matInput","","formControlName","HGDESC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"General Invoice Entry"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Customer"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Customer"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Customer Suffix"),t.qZA(),t._UZ(23,"input",13),t.qZA(),t.TgZ(24,"mat-form-field",14)(25,"mat-label"),t._uU(26,"Secondary Customer Suffix"),t.qZA(),t._UZ(27,"input",15),t.qZA()()(),t.TgZ(28,"mat-form-field",11)(29,"mat-label"),t._uU(30,"Building "),t.qZA(),t._UZ(31,"input",16),t.qZA(),t.TgZ(32,"div",8)(33,"label",9),t._uU(34,"Bill-to Customer"),t.qZA(),t.TgZ(35,"div",10)(36,"mat-form-field",11)(37,"mat-label"),t._uU(38,"Bill-to Customer"),t.qZA(),t._UZ(39,"input",17),t.qZA(),t.TgZ(40,"mat-form-field",11)(41,"mat-label"),t._uU(42,"Customer Suffix"),t.qZA(),t._UZ(43,"input",18),t.qZA(),t.TgZ(44,"mat-form-field",14)(45,"mat-label"),t._uU(46,"Secondary Customer Suffix"),t.qZA(),t._UZ(47,"input",19),t.qZA()()(),t.TgZ(48,"mat-form-field",11)(49,"mat-label"),t._uU(50,"Invoice Date"),t.qZA(),t._UZ(51,"input",20),t.qZA(),t.TgZ(52,"mat-form-field",11)(53,"mat-label"),t._uU(54,"Type"),t.qZA(),t.TgZ(55,"mat-select",21)(56,"mat-option",22),t._uU(57,"-- Select --"),t.qZA(),t.TgZ(58,"mat-option",23),t._uU(59,"GI = General Invoice"),t.qZA(),t.TgZ(60,"mat-option",24),t._uU(61,"MI = MiscellaneousInvoice"),t.qZA(),t.TgZ(62,"mat-option",25),t._uU(63,"AI = AccessorialInvoice"),t.qZA(),t.TgZ(64,"mat-option",26),t._uU(65,"SI = StorageInvoice"),t.qZA(),t.TgZ(66,"mat-option",27),t._uU(67,"FI = FreightInvoice"),t.qZA()()(),t.TgZ(68,"mat-form-field",11)(69,"mat-label"),t._uU(70,"Amount"),t.qZA(),t._UZ(71,"input",28),t.qZA(),t.TgZ(72,"mat-form-field",11)(73,"mat-label"),t._uU(74,"Reference Number "),t.qZA(),t._UZ(75,"input",29),t.qZA(),t.TgZ(76,"mat-form-field",11)(77,"mat-label"),t._uU(78,"Car/Trailer Number"),t.qZA(),t._UZ(79,"input",30),t.qZA(),t.TgZ(80,"mat-form-field",11)(81,"mat-label"),t._uU(82,"Description"),t.qZA(),t._UZ(83,"input",31),t.qZA()()(),t.TgZ(84,"button",32),t.NdJ("click",function(){return o.createGeneralInvoices()}),t._uU(85," Add "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.form))},dependencies:[m.m,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,h.Hw,T.lW,g.KE,g.hX,b.Nt,I.gD,U.ey,f.a8,f.dk,f.dn,f.n5]}),n})();var C=s(99602);let N=(()=>{class n{constructor(e,o,i,r,c,_){this.router=e,this.fb=o,this.route=i,this.GeneralInvoicesSvc=r,this.anyvariable=c,this.dialogRef=_,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({HGCUST:this.anyvariable.WKCUST,HGCSFX:this.anyvariable.HGCSFX,HGCSF2:this.anyvariable.HGCSF2,HGBLDG:this.anyvariable.HGBLDG,HGBCST:this.anyvariable.HGBCST,HGBSFX:this.anyvariable.HGBSFX,HGBSF2:this.anyvariable.HGBSF2,HDATE:this.anyvariable.WKDATE,HGTYPE:this.anyvariable.HGTYPE,HGAMT:this.anyvariable.WKAMT,HGREF:this.anyvariable.WKREF,HGCAR:this.anyvariable.WKCAR,HGDESC:this.anyvariable.HGDESC})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}updateGeneralInvoices(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.GeneralInvoicesSvc.updateGeneralInvoices(this.user,this.anyvariable.WKCTRL,e.HGCAR,e.HGDESC).subscribe(o=>{this.result=o,console.log(this.result);const r=JSON.parse(o[0].data[o[0].data.length-1].value).returnedData.message;if("Record Updated Successfully"===r)this.successMessage(r),this.closeDialog(),this.router.navigate(["/main-nav/generalInvoice/read"]);else{const c=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(c)}})}successMessage(e){v().fire(e,"","success")}failureMessage(e){v().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(l.qu),t.Y36(u.gz),t.Y36(d.m),t.Y36(Z.WI),t.Y36(Z.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-general-invoice"]],standalone:!0,features:[t.jDz],decls:89,vars:3,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["appearance","outline",1,"full-width"],["matInput","","required","","formControlName","HGCUST"],["matInput","","formControlName","HGCSFX"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","HGCSF2"],["matInput","","formControlName","HGBLDG"],["matInput","","formControlName","HGBCST"],["matInput","","formControlName","HGBSFX"],["matInput","","formControlName","HGBSF2"],["matInput","","formControlName","HDATE",3,"matDatepicker"],["matSuffix","",3,"for"],["InvoiceDatePicker",""],["formControlName","HGTYPE"],["value",""],["value","GI"],["value","MI"],["value","AI"],["value","SI"],["value","FI"],["matInput","","formControlName","HGAMT"],["matInput","","formControlName","HGREF"],["matInput","","formControlName","HGCAR"],["matInput","","formControlName","HGDESC",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"General Invoice Entry"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Customer"),t.qZA(),t.TgZ(15,"div",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Customer"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Customer Suffix"),t.qZA(),t._UZ(23,"input",13),t.qZA(),t.TgZ(24,"mat-form-field",14)(25,"mat-label"),t._uU(26,"Secondary Customer Suffix"),t.qZA(),t._UZ(27,"input",15),t.qZA()()(),t.TgZ(28,"mat-form-field",11)(29,"mat-label"),t._uU(30,"Building "),t.qZA(),t._UZ(31,"input",16),t.qZA(),t.TgZ(32,"div",8)(33,"label",9),t._uU(34,"Bill-to Customer"),t.qZA(),t.TgZ(35,"div",10)(36,"mat-form-field",11)(37,"mat-label"),t._uU(38,"Bill-to Customer"),t.qZA(),t._UZ(39,"input",17),t.qZA(),t.TgZ(40,"mat-form-field",11)(41,"mat-label"),t._uU(42,"Customer Suffix"),t.qZA(),t._UZ(43,"input",18),t.qZA(),t.TgZ(44,"mat-form-field",14)(45,"mat-label"),t._uU(46,"Secondary Customer Suffix"),t.qZA(),t._UZ(47,"input",19),t.qZA()()(),t.TgZ(48,"mat-form-field",11)(49,"mat-label"),t._uU(50,"Invoice Date"),t.qZA(),t._UZ(51,"input",20)(52,"mat-datepicker-toggle",21)(53,"mat-datepicker",null,22),t.qZA(),t.TgZ(55,"mat-form-field",11)(56,"mat-label"),t._uU(57,"Type"),t.qZA(),t.TgZ(58,"mat-select",23)(59,"mat-option",24),t._uU(60,"-- Select --"),t.qZA(),t.TgZ(61,"mat-option",25),t._uU(62,"GI = General Invoice"),t.qZA(),t.TgZ(63,"mat-option",26),t._uU(64,"MI = MiscellaneousInvoice"),t.qZA(),t.TgZ(65,"mat-option",27),t._uU(66,"AI = AccessorialInvoice"),t.qZA(),t.TgZ(67,"mat-option",28),t._uU(68,"SI = StorageInvoice"),t.qZA(),t.TgZ(69,"mat-option",29),t._uU(70,"FI = FreightInvoice"),t.qZA()()(),t.TgZ(71,"mat-form-field",11)(72,"mat-label"),t._uU(73,"Amount"),t.qZA(),t._UZ(74,"input",30),t.qZA(),t.TgZ(75,"mat-form-field",11)(76,"mat-label"),t._uU(77,"Reference Number "),t.qZA(),t._UZ(78,"input",31),t.qZA(),t.TgZ(79,"mat-form-field",11)(80,"mat-label"),t._uU(81,"Car/Trailer Number"),t.qZA(),t._UZ(82,"input",32),t.qZA(),t.TgZ(83,"mat-form-field",11)(84,"mat-label"),t._uU(85,"Description"),t.qZA(),t._UZ(86,"input",33),t.qZA()()(),t.TgZ(87,"button",34),t.NdJ("click",function(){return o.updateGeneralInvoices()}),t._uU(88," Update "),t.qZA()()()()),2&e){const i=t.MAs(54);t.xp6(9),t.Q6J("formGroup",o.form),t.xp6(42),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i)}},dependencies:[m.m,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,h.Hw,T.lW,g.KE,g.hX,g.R9,b.Nt,I.gD,U.ey,C.Mq,C.hl,C.nW,f.a8,f.dk,f.dn,f.n5]}),n})();var H=s(11790);let x=(()=>{class n{constructor(e,o,i,r,c,_){this.fb=e,this.router=o,this.CustomAlertService=i,this.GeneralInvoicesSvc=r,this.anyvariable=c,this.dialogRef=_,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({WKCTRL:this.anyvariable.WKCTRL,HGBLDG:this.anyvariable.HGBLDG,WKDATE:this.anyvariable.WKDATE,WKAMT:this.anyvariable.WKAMT,HGTYPE:this.anyvariable.HGTYPE,WKCUST:this.anyvariable.WKCUST,WKREF:this.anyvariable.WKREF,WKCAR:this.anyvariable.WKCAR,HGDESC:this.anyvariable.HGDESC})}ngOnDestroy(){this.deleteGISubscription&&this.deleteGISubscription.unsubscribe()}deleteGeneralInvoices(){console.log(this.form.value),this.CustomAlertService.openCustomAlert("Are you sure want to delete this Control Number :"+this.anyvariable.WKCTRL+"?").afterClosed().subscribe(i=>{i&&(this.deleteGISubscription&&this.deleteGISubscription.unsubscribe(),this.deleteGISubscription=this.GeneralInvoicesSvc.deleteGeneralInvoices(this.anyvariable.WKCTRL).subscribe(r=>{this.result=r,console.log(this.result);const c=r[0].data[r[0].data.length-1].value;"DELETED SUCCESSFULLY"===c?(this.successMessage(c),this.closeDialog(),this.router.navigate(["/main-nav/generalInvoice/read"])):this.failureMessage(r[0].data[r[0].data.length-1].value)}))})}successMessage(e){v().fire(e,"","success")}failureMessage(e){v().fire(e,"","error"),this.router.navigate(["/main-nav/generalInvoice/read"])}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu),t.Y36(u.F0),t.Y36(H.y),t.Y36(d.m),t.Y36(Z.WI),t.Y36(Z.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-delete-general-invoice"]],standalone:!0,features:[t.jDz],decls:50,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","WKCTRL"],["matInput","","readonly","","formControlName","HGBLDG"],["matInput","","readonly","","formControlName","WKDATE"],["matInput","","readonly","","formControlName","WKAMT"],["matInput","","readonly","","formControlName","HGTYPE",2,"text-transform","uppercase"],["matInput","","readonly","","formControlName","WKCUST"],["matInput","","readonly","","formControlName","WKREF",2,"text-transform","uppercase"],["matInput","","readonly","","formControlName","WKCAR",2,"text-transform","uppercase"],["matInput","","readonly","","formControlName","HGDESC"],["mat-button","",1,"buttons","removeButton",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Delete a General Invoice"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Control Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Building "),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Invoice Date"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Amount"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Invoice Type"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Customer"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Reference Number "),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Car/Trailer "),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Description"),t.qZA(),t._UZ(47,"input",17),t.qZA()()(),t.TgZ(48,"button",18),t.NdJ("click",function(){return o.deleteGeneralInvoices()}),t._uU(49,"Delete"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.form))},dependencies:[m.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,h.Hw,T.lW,g.KE,g.hX,b.Nt,f.a8,f.dk,f.dn,f.n5]}),n})();var S=s(36895),F=s(98739),q=s(28255),B=s(10266),E=s(90455);const Y=["paginator"];function w(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchGeneralInvoices())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function R(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",35)(2,"div",36)(3,"span",37),t.NdJ("click",function(i){return i.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",38),t.NdJ("ngModelChange",function(i){const c=t.CHM(e).$implicit;return t.KtG(c.isActive=i)})("change",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.toggleColumn(r))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&n){const e=a.$implicit;t.xp6(4),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function k(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchGeneralInvoices())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"form",40)(1,"div",35)(2,"div",41)(3,"mat-form-field",42)(4,"mat-label"),t._uU(5,"Control "),t.qZA(),t._UZ(6,"input",43),t.qZA(),t.TgZ(7,"div",44)(8,"label",45),t._uU(9,"Customer"),t.qZA(),t.TgZ(10,"div",46)(11,"mat-form-field",42)(12,"mat-label"),t._uU(13,"Customer Code"),t.qZA(),t._UZ(14,"input",47),t.qZA(),t.TgZ(15,"mat-form-field",42)(16,"mat-label"),t._uU(17,"Customer Suffix"),t.qZA(),t._UZ(18,"input",48),t.qZA(),t.TgZ(19,"mat-form-field",49)(20,"mat-label"),t._uU(21,"Customer Secondary suffix"),t.qZA(),t._UZ(22,"input",50),t.qZA()()(),t._UZ(23,"br"),t.TgZ(24,"div",44)(25,"label",45),t._uU(26,"Date"),t.qZA(),t.TgZ(27,"div",46)(28,"mat-form-field",42)(29,"mat-label"),t._uU(30,"Start Date"),t.qZA(),t._UZ(31,"input",51)(32,"mat-datepicker-toggle",52)(33,"mat-datepicker",null,53),t.qZA(),t.TgZ(35,"mat-form-field",42)(36,"mat-label"),t._uU(37,"End Date"),t.qZA(),t._UZ(38,"input",54)(39,"mat-datepicker-toggle",52)(40,"mat-datepicker",null,55),t.qZA()()(),t.TgZ(42,"mat-form-field",42)(43,"mat-label"),t._uU(44,"Invoice "),t.qZA(),t._UZ(45,"input",56),t.qZA(),t.TgZ(46,"mat-form-field",42)(47,"mat-label"),t._uU(48,"Reference Number "),t.qZA(),t._UZ(49,"input",57),t.qZA(),t.TgZ(50,"mat-form-field",42)(51,"mat-label"),t._uU(52,"Building "),t.qZA(),t._UZ(53,"input",58),t.qZA(),t.TgZ(54,"mat-form-field",42)(55,"mat-label"),t._uU(56,"Status "),t.qZA(),t._UZ(57,"input",59),t.qZA()()(),t.TgZ(58,"button",60),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.getGIBySearch(i.form.value))}),t._uU(59," Search "),t.qZA()()}if(2&n){const e=t.MAs(34),o=t.MAs(41),i=t.oxw();t.Q6J("formGroup",i.form),t.xp6(31),t.Q6J("matDatepicker",e),t.xp6(1),t.Q6J("for",e),t.xp6(6),t.Q6J("matDatepicker",o),t.xp6(1),t.Q6J("for",o)}}function J(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1,"Control Number "),t.qZA())}function K(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKCTRL," ")}}function W(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Status "),t.qZA())}function L(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e.WKSTAT)}}function Q(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1,"Type "),t.qZA())}function O(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.HGTYPE," ")}}function X(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Customer "),t.qZA())}function j(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKCUST," ")}}function $(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Invoice Date "),t.qZA())}function P(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKDATE," ")}}function z(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Invoice Amount "),t.qZA())}function V(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKAMT," ")}}function tt(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Invoice Number "),t.qZA())}function et(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKINV," ")}}function nt(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Reference Number "),t.qZA())}function ot(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKREF," ")}}function at(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Car/Tr Number "),t.qZA())}function it(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.WKCAR," ")}}function lt(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Description "),t.qZA())}function rt(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.HGDESC," ")}}function st(n,a){1&n&&(t.TgZ(0,"th",61),t._uU(1," Building "),t.qZA())}function mt(n,a){if(1&n&&(t.TgZ(0,"td",62),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.HGBLDG," ")}}function ct(n,a){1&n&&t._UZ(0,"th",63)}function ut(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"td",62)(1,"div",64)(2,"button",65)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",66)(6,"li")(7,"button",67),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.invoiceUpdate(r))}),t.TgZ(8,"mat-icon",68),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",67),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.InvoiceDetails(r))}),t.TgZ(14,"mat-icon",68),t._uU(15,"list_alt"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Details"),t.qZA()()(),t.TgZ(18,"li")(19,"button",69),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.Inquiry(r))}),t.TgZ(20,"mat-icon",68),t._uU(21,"call_made"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Inquiry"),t.qZA()()(),t.TgZ(24,"li")(25,"button",67),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.invoiceDelete(r))}),t.TgZ(26,"mat-icon",70),t._uU(27,"delete"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Delete"),t.qZA()()()()()()}}function pt(n,a){1&n&&t._UZ(0,"tr",71)}function dt(n,a){1&n&&t._UZ(0,"tr",72)}const ft=function(){return[8,16,24]};let gt=(()=>{class n{constructor(e,o,i,r){this.router=e,this.matDialog=o,this.fb=i,this.GeneralInvoicesSvc=r,this.searchTextDisplay=!1,this.selectedRow=[],this.editedRows=[],this.duplicateSource=[],this.user=localStorage.getItem("userName"),this.displayedColumns=["ControlNumber","Status","Type","Customer","InvoiceDate","InvoiceAmount","InvoiceNumber","Actions"],this.columnShowHideList=[]}ngOnInit(){this.form=this.fb.group({CTRL:"",CUST:"",CSFX:"",CSF2:"",SDAT:"",EDAT:"",INV:"",REF:"",BLDG:"",HGSTAT:""}),this.initializeColumnProperties(),this.editedRows=[],this.getGeneralInvoices()}searchGeneralInvoices(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(e){if(e.isActive)e.position>this.displayedColumns.length-1?this.displayedColumns.push(e.name):this.displayedColumns.splice(e.position,0,e.name);else{let o=this.displayedColumns.indexOf(e.name);o>-1&&this.displayedColumns.splice(o,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,o)=>{"Actions"!=e&&this.columnShowHideList.push({position:o,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"ReferenceNumber",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length-1,name:"Car/TrNumber",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Description",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length-1,name:"Building",isActive:!1}),console.log(this.columnShowHideList)}rowClick(e){this.selectedRow=e}getGeneralInvoices(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.GeneralInvoicesSvc.getGeneralInvoices(this.user,"","","","","","","","","","").subscribe(e=>{var i=JSON.parse(e[0].data[1].value);this.duplicateSource=i.returnedData,this.dataSource=new p.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}getGIBySearch(e){console.log(this.form.value),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.GeneralInvoicesSvc.getGeneralInvoices(this.user,e.CTRL,e.CUST,e.CSFX,e.CSF2,e.SDAT,e.EDAT,e.INV,e.REF,e.BLDG,e.HGSTAT).subscribe(i=>{var r=i[0].data[1].value,c=JSON.parse(r);console.log(r),this.duplicateSource=c.returnedData,this.dataSource=new p.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}Inquiry(e){this.router.navigateByUrl("/main-nav/generalInvoice/inquiry",{state:e})}invoiceCreate(){this.matDialog.open(y,{width:"950px",height:"auto",maxHeight:"95vh",autoFocus:!1})}invoiceUpdate(e){this.matDialog.open(N,{width:"950px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}invoiceDelete(e){this.matDialog.open(x,{width:"950px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}InvoiceDetails(e){this.router.navigateByUrl("/main-nav/generalInvoiceDetails/read",{state:e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(Z.uw),t.Y36(l.qu),t.Y36(d.m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-general-invoices"]],viewQuery:function(e,o){if(1&e&&t.Gf(Y,5),2&e){let i;t.iGM(i=t.CRH())&&(o.paginator=i.first)}},standalone:!0,features:[t.jDz],decls:61,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","class","addButton","matTooltip","Search General Invoices",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add General Invoices",1,"addButton",3,"click"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","ControlNumber"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Status"],["matColumnDef","Type"],["matColumnDef","Customer"],["matColumnDef","InvoiceDate"],["matColumnDef","InvoiceAmount"],["matColumnDef","InvoiceNumber"],["matColumnDef","ReferenceNumber"],["matColumnDef","Car/TrNumber"],["matColumnDef","Description"],["matColumnDef","Building"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],[1,"row"],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-button","","matTooltip","Search General Invoices",1,"addButton",3,"click"],[3,"formGroup"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CTRL"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","CUST"],["matInput","","formControlName","CSFX"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","CSF2"],["matInput","","formControlName","SDAT",3,"matDatepicker"],["matSuffix","",3,"for"],["StartDatePicker",""],["matInput","","formControlName","EDAT",3,"matDatepicker"],["EndDatePicker",""],["matInput","","formControlName","INV"],["matInput","","formControlName","REF"],["matInput","","formControlName","BLDG"],["matInput","","formControlName","HGSTAT"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn",3,"click"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",1,"dropdown-item",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With General Invoices "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,w,3,0,"button",3),t.TgZ(6,"mat-menu",4,5)(8,"div",6),t.YNc(9,R,6,2,"ng-container",7),t.qZA()(),t.YNc(10,k,3,0,"button",8),t.TgZ(11,"button",9),t.NdJ("click",function(){return o.invoiceCreate()}),t.TgZ(12,"mat-icon"),t._uU(13,"add"),t.qZA()(),t.TgZ(14,"button",10,11)(16,"mat-icon"),t._uU(17,"visibility_off"),t.qZA()()()(),t.TgZ(18,"mat-card-content",12),t.YNc(19,M,60,5,"form",13),t.qZA(),t.TgZ(20,"table",14),t.ynx(21,15),t.YNc(22,J,2,0,"th",16),t.YNc(23,K,2,1,"td",17),t.BQk(),t.ynx(24,18),t.YNc(25,W,2,0,"th",16),t.YNc(26,L,2,1,"td",17),t.BQk(),t.ynx(27,19),t.YNc(28,Q,2,0,"th",16),t.YNc(29,O,2,1,"td",17),t.BQk(),t.ynx(30,20),t.YNc(31,X,2,0,"th",16),t.YNc(32,j,2,1,"td",17),t.BQk(),t.ynx(33,21),t.YNc(34,$,2,0,"th",16),t.YNc(35,P,2,1,"td",17),t.BQk(),t.ynx(36,22),t.YNc(37,z,2,0,"th",16),t.YNc(38,V,2,1,"td",17),t.BQk(),t.ynx(39,23),t.YNc(40,tt,2,0,"th",16),t.YNc(41,et,2,1,"td",17),t.BQk(),t.ynx(42,24),t.YNc(43,nt,2,0,"th",16),t.YNc(44,ot,2,1,"td",17),t.BQk(),t.ynx(45,25),t.YNc(46,at,2,0,"th",16),t.YNc(47,it,2,1,"td",17),t.BQk(),t.ynx(48,26),t.YNc(49,lt,2,0,"th",16),t.YNc(50,rt,2,1,"td",17),t.BQk(),t.ynx(51,27),t.YNc(52,st,2,0,"th",16),t.YNc(53,mt,2,1,"td",17),t.BQk(),t.ynx(54,28),t.YNc(55,ct,1,0,"th",29),t.YNc(56,ut,30,0,"td",17),t.BQk(),t.YNc(57,pt,1,0,"tr",30),t.YNc(58,dt,1,0,"tr",31),t.qZA(),t._UZ(59,"mat-paginator",32,33),t.qZA()),2&e){const i=t.MAs(7);t.xp6(5),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(4),t.Q6J("ngForOf",o.columnShowHideList),t.xp6(1),t.Q6J("ngIf",!o.searchTextDisplay),t.xp6(4),t.Q6J("matMenuTriggerFor",i),t.xp6(5),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,ft))}},dependencies:[m.m,S.sg,S.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,F.NW,h.Hw,q.VK,q.p6,T.lW,g.KE,g.hX,g.R9,b.Nt,C.Mq,C.hl,C.nW,f.a8,f.dk,f.dn,f.n5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk,B.gM,E.Rr]}),n})()}}]);