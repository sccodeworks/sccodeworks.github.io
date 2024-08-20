"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[6962,1790,8754,5645,2313],{11790:(q,g,u)=>{u.d(g,{y:()=>t});var n=u(65412),s=u(94650),C=u(97392),Z=u(4859);let T=(()=>{class p{constructor(c,N){this.dialogRef=c,this.data=N}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return p.\u0275fac=function(c){return new(c||p)(s.Y36(n.so),s.Y36(n.WI))},p.\u0275cmp=s.Xpm({type:p,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(c,N){1&c&&(s.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),s.NdJ("click",function(){return N.closeDialog()}),s._uU(3,"close "),s.qZA(),s.TgZ(4,"span",3),s._uU(5),s.qZA()(),s.TgZ(6,"button",4),s._uU(7,"Cancel"),s.qZA(),s.TgZ(8,"button",5),s._uU(9,"Delete"),s.qZA()()),2&c&&(s.xp6(5),s.Oqu(N.data.message),s.xp6(1),s.Q6J("mat-dialog-close",!1),s.xp6(2),s.Q6J("mat-dialog-close",!0))},dependencies:[C.Hw,Z.lW,n.ZT]}),p})(),t=(()=>{class p{constructor(c){this.dialog=c}openCustomAlert(c){return this.dialog.open(T,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:c}})}}return p.\u0275fac=function(c){return new(c||p)(s.LFG(n.uw))},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},96962:(q,g,u)=>{u.r(g),u.d(g,{WwSupplytransactionsComponent:()=>ht});var n=u(24006),s=u(65412),C=u(35226),Z=u.n(C),T=u(70879),t=u(94650),p=u(95190),d=u(19132),c=u(97392),N=u(4859),h=u(59549),_=u(44144),S=u(73546);let v=(()=>{class a{constructor(e,i,o,l,m){this.SupplyTransactions=e,this.anyvariable=i,this.dialogRef=o,this.router=l,this.fb=m,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({SNTRAN:[this.anyvariable.SNTRAN,n.kI.required],SNSTOR:[this.anyvariable.SNSTOR,[n.kI.required,n.kI.maxLength(4),n.kI.pattern("^[0-9]*$")]],SNSSFX:[this.anyvariable.SNSSFX,[n.kI.required,n.kI.maxLength(2),n.kI.pattern("^[A-Za-z]*$")]],SNCONS:[this.anyvariable.SNCONS,[n.kI.required,n.kI.maxLength(12),n.kI.pattern("^[A-Za-z]*$")]],SNCARR:[this.anyvariable.SNCARR,[n.kI.required,n.kI.maxLength(15),n.kI.pattern("^[A-Za-z]*$")]],SNTYPE:[this.anyvariable.SNTYPE,[n.kI.required,n.kI.maxLength(10),n.kI.pattern("^[A-Za-z]*$")]],SNDOCT:[this.anyvariable.SNDOCT,[n.kI.required,n.kI.maxLength(1),n.kI.pattern("^[A-Za-z]*$")]],SNDOCN:[this.anyvariable.SNDOCN,[n.kI.maxLength(9),n.kI.pattern("^[0-9]*$")]],SNLOCN:[this.anyvariable.SNLOCN,[n.kI.maxLength(16),n.kI.pattern("^[A-Za-z0-9]*$")]],SNRQTY:[this.anyvariable.SNRQTY,[n.kI.maxLength(7),n.kI.pattern("^[0-9]*$")]],SNUQTY:[this.anyvariable.SNUQTY,[n.kI.maxLength(7),n.kI.pattern("^[0-9]*$")]],SNXQTY:[this.anyvariable.SNXQTY,[n.kI.maxLength(7),n.kI.pattern("^[0-9]*$")]],SNPOOL:[this.anyvariable.SNPOOL,[n.kI.required,n.kI.maxLength(1),n.kI.pattern("^[A-Za-z]*$")]],SNREAS:[this.anyvariable.SNREAS,[n.kI.maxLength(2),n.kI.pattern("^[A-Za-z]*$")]],SNSPID:[this.anyvariable.SNSPID,[n.kI.maxLength(30),n.kI.pattern("^[A-Za-z0-9]*$")]],SNNUMB:[this.anyvariable.SNNUMB,[n.kI.maxLength(3),n.kI.pattern("^[0-9]*$")]],SNINVP:[this.anyvariable.SNINVP,[n.kI.required,n.kI.maxLength(1),n.kI.pattern("^[A-Za-z]*$")]],SNSTAT:[this.anyvariable.SNSTAT,[n.kI.maxLength(2),n.kI.pattern("^[A-Za-z]*$")]]})}updateSupplyTransactions(){var e=this.form.value;console.log(e),this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe(),this.SupplyTransactionSubscription=this.SupplyTransactions.updateSupplyTransactions(this.user,e.SNTRAN,e.SNSTOR,e.SNSSFX,e.SNCONS,e.SNCARR,e.SNDOCT,e.SNDOCN,e.SNTYPE,e.SNLOCN,e.SNRQTY,e.SNUQTY,e.SNXQTY,e.SNPOOL,e.SNINVP,e.SNREAS,e.SNSPID,e.SNNUMB,e.SNSTAT).subscribe(i=>{this.result=i,console.log(this.result);const l=JSON.parse(i[0].data[i[0].data.length-1].value).returnedData.message;if("Record Updated Successfully"===l)this.successMessage(l),this.closeDialog(),this.router.navigate(["/main-nav/supply-transactions/read"]);else{const m=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(m)}})}successMessage(e){Z().fire(e,"","success")}failureMessage(e){Z().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.c),t.Y36(s.WI),t.Y36(s.so),t.Y36(d.F0),t.Y36(n.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-supplytransactions-change"]],standalone:!0,features:[t.jDz],decls:86,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNTRAN"],["matInput","","formControlName","SNSTOR"],["matInput","","formControlName","SNSSFX",2,"text-transform","uppercase"],["matInput","","formControlName","SNCONS",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNLOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNRQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNXQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNUQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNPOOL",2,"text-transform","uppercase"],["matInput","","formControlName","SNINVP",2,"text-transform","uppercase"],["matInput","","formControlName","SNREAS",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID"],["matInput","","formControlName","SNNUMB",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT",2,"text-transform","uppercase"],[1,"row"],[1,"col"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Supply Transaction "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return i.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"Transaction Number"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"Storer Number"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Storer suffix"),t.qZA(),t._UZ(21,"input",9),t.qZA(),t.TgZ(22,"mat-form-field",6)(23,"mat-label"),t._uU(24,"Consignee Code"),t.qZA(),t._UZ(25,"input",10),t.qZA(),t.TgZ(26,"mat-form-field",6)(27,"mat-label"),t._uU(28,"Carrier Code"),t.qZA(),t._UZ(29,"input",11),t.qZA(),t.TgZ(30,"mat-form-field",6)(31,"mat-label"),t._uU(32,"Supply Type"),t.qZA(),t._UZ(33,"input",12),t.qZA(),t.TgZ(34,"mat-form-field",6)(35,"mat-label"),t._uU(36,"Document Type"),t.qZA(),t._UZ(37,"input",13),t.qZA(),t.TgZ(38,"mat-form-field",6)(39,"mat-label"),t._uU(40," Document No"),t.qZA(),t._UZ(41,"input",14),t.qZA(),t.TgZ(42,"mat-form-field",6)(43,"mat-label"),t._uU(44,"Location"),t.qZA(),t._UZ(45,"input",15),t.qZA(),t.TgZ(46,"mat-form-field",6)(47,"mat-label"),t._uU(48,"Returned"),t.qZA(),t._UZ(49,"input",16),t.qZA(),t.TgZ(50,"mat-form-field",6)(51,"mat-label"),t._uU(52,"Rejected"),t.qZA(),t._UZ(53,"input",17),t.qZA(),t.TgZ(54,"mat-form-field",6)(55,"mat-label"),t._uU(56,"Used"),t.qZA(),t._UZ(57,"input",18),t.qZA(),t.TgZ(58,"mat-form-field",6)(59,"mat-label"),t._uU(60,"Pool Affected"),t.qZA(),t._UZ(61,"input",19),t.qZA(),t.TgZ(62,"mat-form-field",6)(63,"mat-label"),t._uU(64,"Whose Invoice"),t.qZA(),t._UZ(65,"input",20),t.qZA(),t.TgZ(66,"mat-form-field",6)(67,"mat-label"),t._uU(68,"Reason Code"),t.qZA(),t._UZ(69,"input",21),t.qZA(),t.TgZ(70,"mat-form-field",6)(71,"mat-label"),t._uU(72,"Supply ID number"),t.qZA(),t._UZ(73,"input",22),t.qZA(),t.TgZ(74,"mat-form-field",6)(75,"mat-label"),t._uU(76,"Rate Number"),t.qZA(),t._UZ(77,"input",23),t.qZA(),t.TgZ(78,"mat-form-field",6)(79,"mat-label"),t._uU(80,"Status"),t.qZA(),t._UZ(81,"input",24),t.qZA(),t.TgZ(82,"div",25),t._UZ(83,"div",26),t.qZA(),t.TgZ(84,"button",27),t.NdJ("click",function(){return i.updateSupplyTransactions()}),t._uU(85,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",i.form))},dependencies:[T.m,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,c.Hw,N.lW,h.KE,h.hX,_.Nt,S.a8,S.dk,S.dn,S.n5]}),a})(),I=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-supplytransactions-comments"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,i){},dependencies:[T.m]}),a})();var x=u(11790);let w=(()=>{class a{constructor(e,i,o,l,m,y){this.anyvariable=e,this.CustomAlertService=i,this.dialogRef=o,this.router=l,this.fb=m,this.SupplyTransactionsService=y,this.user=localStorage.getItem("userName"),this.form=this.fb.group({SNTRAN:this.anyvariable.SNTRAN,SNSTOR:this.anyvariable.SNSTOR,SNSSFX:this.anyvariable.SNSSFX,SNCONS:this.anyvariable.SNCONS,SNCARR:this.anyvariable.SNCARR,SNTYPE:this.anyvariable.SNTYPE,SNDOCT:this.anyvariable.SNDOCT,SNDOCN:this.anyvariable.SNDOCN,SNQTY:this.anyvariable.SNQTY,SNSPID:this.anyvariable.SNSPID,SNINV:this.anyvariable.SNINV,SNTDAT:this.anyvariable.SNTDAT,SNPOOL:this.anyvariable.SNPOOL,SNLOCN:this.anyvariable.SNLOCN,SNINVP:this.anyvariable.SNINVP,SNNUMB:this.anyvariable.SNNUMB,SNSTAT:this.anyvariable.SNSTAT})}ngOnDestroy(){this.SupplyTransactionSubscription&&this.SupplyTransactionSubscription.unsubscribe()}ngOnInit(){}DeleteSupplyTransaction(){this.CustomAlertService.openCustomAlert("Are you sure you want to delete this supply transaction? ").afterClosed().subscribe(i=>{i&&(this.result=this.SupplyTransactionsService.DeleteSupplytransaction(this.user,this.anyvariable.SNTRAN).subscribe(o=>{if(this.result=o,console.log(this.result),JSON.parse(this.result[0].data[1].value).success){const l=JSON.parse(this.result[0].data[1].value).returnedData.message;this.successMessage(l),this.closeDialog(),this.router.navigate(["/main-nav/supply-transactions/read"])}else{const l=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(l)}}))})}successMessage(e){Z().fire(e,"","success"),this.router.navigate(["/main-nav/supply-transactions/read"])}failureMessage(e){Z().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.WI),t.Y36(x.y),t.Y36(s.so),t.Y36(d.F0),t.Y36(n.qu),t.Y36(p.c))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-supplytransactions-delete"]],standalone:!0,features:[t.jDz],decls:82,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNTRAN","readonly",""],["matInput","","formControlName","SNSTOR","readonly",""],["matInput","","formControlName","SNSSFX","readonly",""],["matInput","","formControlName","SNCONS","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNQTY","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID","readonly",""],["matInput","","formControlName","SNINV","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNTDAT","readonly",""],["matInput","","formControlName","SNPOOL","readonly","",2,"text-transform","uppercase"],["appearance","outline"],["matInput","","formControlName","SNLOCN","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNINVP","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNNUMB","readonly","",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT","readonly","",2,"text-transform","uppercase"],[1,"row"],[1,"col"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Delete Supply Transaction "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return i.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"Transaction Number"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"Storer Number"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Storer suffix"),t.qZA(),t._UZ(21,"input",9),t.qZA(),t.TgZ(22,"mat-form-field",6)(23,"mat-label"),t._uU(24,"Consignee Code"),t.qZA(),t._UZ(25,"input",10),t.qZA(),t.TgZ(26,"mat-form-field",6)(27,"mat-label"),t._uU(28,"Carrier Code"),t.qZA(),t._UZ(29,"input",11),t.qZA(),t.TgZ(30,"mat-form-field",6)(31,"mat-label"),t._uU(32,"Supply Type"),t.qZA(),t._UZ(33,"input",12),t.qZA(),t.TgZ(34,"mat-form-field",6)(35,"mat-label"),t._uU(36,"Document Type"),t.qZA(),t._UZ(37,"input",13),t.qZA(),t.TgZ(38,"mat-form-field",6)(39,"mat-label"),t._uU(40," Document Number"),t.qZA(),t._UZ(41,"input",14),t.qZA(),t.TgZ(42,"mat-form-field",6)(43,"mat-label"),t._uU(44,"Transaction Quantity"),t.qZA(),t._UZ(45,"input",15),t.qZA(),t.TgZ(46,"mat-form-field",6)(47,"mat-label"),t._uU(48,"Supply ID number"),t.qZA(),t._UZ(49,"input",16),t.qZA(),t.TgZ(50,"mat-form-field",6)(51,"mat-label"),t._uU(52," Invoice number"),t.qZA(),t._UZ(53,"input",17),t.qZA(),t.TgZ(54,"mat-form-field",6)(55,"mat-label"),t._uU(56," Transaction Date"),t.qZA(),t._UZ(57,"input",18),t.qZA(),t.TgZ(58,"mat-form-field",6)(59,"mat-label"),t._uU(60,"Pool Affected"),t.qZA(),t._UZ(61,"input",19),t.qZA(),t.TgZ(62,"mat-form-field",20)(63,"mat-label"),t._uU(64,"Location"),t.qZA(),t._UZ(65,"input",21),t.qZA(),t.TgZ(66,"mat-form-field",6)(67,"mat-label"),t._uU(68," Invoice party"),t.qZA(),t._UZ(69,"input",22),t.qZA(),t.TgZ(70,"mat-form-field",6)(71,"mat-label"),t._uU(72,"Rate Number"),t.qZA(),t._UZ(73,"input",23),t.qZA(),t.TgZ(74,"mat-form-field",6)(75,"mat-label"),t._uU(76,"Status"),t.qZA(),t._UZ(77,"input",24),t.qZA(),t.TgZ(78,"div",25),t._UZ(79,"div",26),t.qZA(),t.TgZ(80,"button",27),t.NdJ("click",function(){return i.DeleteSupplyTransaction()}),t._uU(81,"Delete"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",i.form))},dependencies:[T.m,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,c.Hw,N.lW,h.KE,h.hX,_.Nt,S.a8,S.dk,S.dn,S.n5]}),a})(),D=(()=>{class a{constructor(e,i,o,l,m){this.SupplyTransactions=e,this.anyvariable=i,this.dialogRef=o,this.router=l,this.fb=m,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({SNSTOR:this.anyvariable.SNSTOR,SNCONS:this.anyvariable.SNCONS,SNCARR:this.anyvariable.SNCARR,SNTYPE:this.anyvariable.SNTYPE,SNDOCT:this.anyvariable.SNDOCT,SNDOCN:this.anyvariable.SNDOCN,SNLOCN:this.anyvariable.SNLOCN,SNRQTY:this.anyvariable.SNRQTY,SNUQTY:this.anyvariable.SNUQTY,SNXQTY:this.anyvariable.SNXQTY,SNPOOL:this.anyvariable.SNPOOL,SNREAS:this.anyvariable.SNREAS,SNSPID:this.anyvariable.SNSPID,SNNUMB:this.anyvariable.SNNUMB,SNINVP:this.anyvariable.SNINVP,SNSTAT:this.anyvariable.SNSTAT})}getSupplyTransactionData(){this.SupplyTransactions.getSupplyTransactionsInquiry(this.user,this.anyvariable.SNSTOR,this.anyvariable.SNSSFX,this.anyvariable.SNTRAN).subscribe(e=>{this.result=e;const i=this.result[0].data[1]?.value,o=JSON.parse(i);this.form.patchValue({SNSTOR:o.SNSTOR,SNCONS:o.SNCONS,SNCARR:o.SNCARR,SNTYPE:o.SNTYPE,SNDOCT:o.SNDOCT,SNDOCN:o.SNDOCN,SNLOCN:o.SNLOCN,SNRQTY:o.SNRQTY,SNUQTY:o.SNUQTY,SNXQTY:o.SNXQTY,SNPOOL:o.SNPOOL,SNREAS:o.SNREAS,SNSPID:o.SNSPID,SNNUMB:o.SNNUMB,SNINVP:o.SNINVP,SNSTAT:o.SNSTAT})})}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.c),t.Y36(s.WI),t.Y36(s.so),t.Y36(d.F0),t.Y36(n.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-supplytransactions-inquiry"]],standalone:!0,features:[t.jDz],decls:76,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SNSTOR",2,"text-transform","uppercase"],["matInput","","formControlName","SNCONS",2,"text-transform","uppercase"],["matInput","","formControlName","SNCARR",2,"text-transform","uppercase"],["matInput","","formControlName","SNTYPE",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCT",2,"text-transform","uppercase"],["matInput","","formControlName","SNDOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNLOCN",2,"text-transform","uppercase"],["matInput","","formControlName","SNRQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNXQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNUQTY",2,"text-transform","uppercase"],["matInput","","formControlName","SNPOOL",2,"text-transform","uppercase"],["matInput","","formControlName","SNREAS",2,"text-transform","uppercase"],["matInput","","formControlName","SNSPID",2,"text-transform","uppercase"],["matInput","","formControlName","SNNUMB",2,"text-transform","uppercase"],["matInput","","formControlName","SNINVP",2,"text-transform","uppercase"],["matInput","","formControlName","SNSTAT",2,"text-transform","uppercase"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Supply Transaction Inquiry"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return i.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Storer Number"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Consignee Code "),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Carrier Code"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Supply Type "),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Document Type"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Document No"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Location"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Returned"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Rejected"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Used"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Pool Affected"),t.qZA(),t._UZ(55,"input",19),t.qZA(),t.TgZ(56,"mat-form-field",8)(57,"mat-label"),t._uU(58,"Reason Code"),t.qZA(),t._UZ(59,"input",20),t.qZA(),t.TgZ(60,"mat-form-field",8)(61,"mat-label"),t._uU(62,"Supply ID number"),t.qZA(),t._UZ(63,"input",21),t.qZA(),t.TgZ(64,"mat-form-field",8)(65,"mat-label"),t._uU(66,"Rate Number"),t.qZA(),t._UZ(67,"input",22),t.qZA(),t.TgZ(68,"mat-form-field",8)(69,"mat-label"),t._uU(70,"Whose Invoice"),t.qZA(),t._UZ(71,"input",23),t.qZA(),t.TgZ(72,"mat-form-field",8)(73,"mat-label"),t._uU(74,"Status"),t.qZA(),t._UZ(75,"input",24),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",i.form))},dependencies:[T.m,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,c.Hw,N.lW,h.KE,h.hX,_.Nt,S.a8,S.dk,S.dn,S.n5]}),a})();var O=u(19344),f=u(7155),A=u(98739),b=u(36895),U=u(28255),Y=u(10266),R=u(90455);function W(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"button",37),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.searchSupplytransactions())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function k(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.searchSupplytransactions())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function P(a,r){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",39)(2,"div",40)(3,"span",41),t.NdJ("click",function(o){return o.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",42),t.NdJ("ngModelChange",function(o){const m=t.CHM(e).$implicit;return t.KtG(m.isActive=o)})("change",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.toggleColumn(l))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&a){const e=r.$implicit;t.xp6(4),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function L(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"form",43),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.getSupplyBySearch(o.form.value))}),t.TgZ(1,"div",39)(2,"div",44)(3,"mat-form-field",45)(4,"mat-label"),t._uU(5,"Storer"),t.qZA(),t._UZ(6,"input",46),t.qZA(),t.TgZ(7,"mat-form-field",45)(8,"mat-label"),t._uU(9,"Consignee"),t.qZA(),t._UZ(10,"input",47),t.qZA(),t.TgZ(11,"mat-form-field",45)(12,"mat-label"),t._uU(13,"Carrier"),t.qZA(),t._UZ(14,"input",48),t.qZA(),t.TgZ(15,"mat-form-field",45)(16,"mat-label"),t._uU(17,"Document Type"),t.qZA(),t._UZ(18,"input",49),t.qZA(),t.TgZ(19,"mat-form-field",45)(20,"mat-label"),t._uU(21,"Document No"),t.qZA(),t._UZ(22,"input",50),t.qZA(),t.TgZ(23,"mat-form-field",45)(24,"mat-label"),t._uU(25,"Type"),t.qZA(),t._UZ(26,"input",51),t.qZA(),t.TgZ(27,"mat-form-field",45)(28,"mat-label"),t._uU(29,"Date"),t.qZA(),t._UZ(30,"input",52),t.qZA(),t.TgZ(31,"mat-form-field",45)(32,"mat-label"),t._uU(33," End Date"),t.qZA(),t._UZ(34,"input",53),t.qZA(),t.TgZ(35,"mat-form-field",45)(36,"mat-label"),t._uU(37,"Pool"),t.qZA(),t._UZ(38,"input",54),t.qZA(),t.TgZ(39,"mat-form-field",45)(40,"mat-label"),t._uU(41,"Invoice"),t.qZA(),t._UZ(42,"input",55),t.qZA()()(),t.TgZ(43,"button",56),t._uU(44," Search "),t.qZA()()}if(2&a){const e=t.oxw();t.Q6J("formGroup",e.form)}}function Q(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Storer"),t.qZA())}function F(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNSTOR)}}function J(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Consignee"),t.qZA())}function E(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNCONS)}}function M(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Carrier"),t.qZA())}function B(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNCARR)}}function H(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Pool"),t.qZA())}function $(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNPOOL)}}function V(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Transaction Pool"),t.qZA())}function X(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNDOCT)}}function z(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Supply"),t.qZA())}function G(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNTYPE)}}function K(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Net Quantity"),t.qZA())}function j(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNQTY)}}function tt(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Date"),t.qZA())}function et(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNTDAT)}}function at(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Status"),t.qZA())}function nt(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNSTAT)}}function ot(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Tran"),t.qZA())}function rt(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNTRAN)}}function it(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Doc"),t.qZA())}function st(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNDOCN)}}function lt(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Invoice"),t.qZA())}function ut(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNINV)}}function mt(a,r){1&a&&(t.TgZ(0,"th",57),t._uU(1,"Location"),t.qZA())}function pt(a,r){if(1&a&&(t.TgZ(0,"td",58),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.SNLOCN)}}function ct(a,r){1&a&&t._UZ(0,"th",59)}function St(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"td",58)(1,"div",60)(2,"button",61)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",62)(6,"li")(7,"button",63),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.getUpdateForm(l))}),t.TgZ(8,"mat-icon",64),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",63),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.SupplytransactionsCommentsForm(l))}),t.TgZ(14,"mat-icon",64),t._uU(15,"comments"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Comments"),t.qZA()()(),t.TgZ(18,"li")(19,"button",63),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.SupplytransactionsDeleteForm(l))}),t.TgZ(20,"mat-icon",65),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()(),t.TgZ(24,"li")(25,"button",63),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.SupplytransactionsInquiryForm(l))}),t.TgZ(26,"mat-icon",64),t._uU(27,"call_made"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Inquiry"),t.qZA()()()()()()}}function ft(a,r){1&a&&t._UZ(0,"tr",66)}function dt(a,r){1&a&&t._UZ(0,"tr",67)}const Nt=function(){return[8,16,24]};let ht=(()=>{class a{constructor(e,i,o,l,m,y){this.fb=e,this.router=i,this.route=o,this.SupplyTransactionsService=l,this.matDialog=m,this.cdr=y,this.displayedColumns=["Storer","Consignee","Carrier","Pool","TransactionPool","Supply","NetQuantity","Date","Status","Actions"],this.columnShowHideList=[],this.form=this.fb.group({STOR:"",CONS:"",CARR:"",DOCT:"",DOCN:"",TYPE:"",WKSDATE:"",WKEDATE:"",POOL:"",INV:""}),this.Storer=new n.NI(""),this.Consignee=new n.NI(""),this.Carrier=new n.NI(""),this.Pool=new n.NI(""),this.TransactionPool=new n.NI(""),this.Supply=new n.NI(""),this.NetQuantity=new n.NI(""),this.Date=new n.NI(""),this.Status=new n.NI(""),this.searchTextDisplay=!1,this.duplicateSource=[],this.user=localStorage.getItem("userName")||"",this.dataSource=new f.by(this.duplicateSource)}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.getSupplyTransactions(),this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=this.createFilter()}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let i=this.displayedColumns.indexOf(e.name);i>-1&&this.displayedColumns.splice(i,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((e,i)=>{"Actions"!=e&&"Tran"!=e&&this.columnShowHideList.push({position:i,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Tran",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Doc",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Invoice",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Location",isActive:!1})}createFilter(){return(e,i)=>{const o=JSON.parse(i);return Object.keys(o).every(l=>e[l].toString().toLowerCase().includes(o[l].toLowerCase()))}}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}resetSearch(){this.Storer.setValue(""),this.Consignee.setValue(""),this.Carrier.setValue(""),this.Pool.setValue(""),this.TransactionPool.setValue(""),this.Supply.setValue(""),this.NetQuantity.setValue(""),this.Date.setValue(""),this.Status.setValue(""),this.form.reset(),this.dataSource=new f.by(this.duplicateSource),this.dataSource.filter="",this.dataSource.sort=null,this.refresh()}refresh(){this.form.reset(),this.SupplyTransactionsService.getSupplyTransactions(this.user,"","","","","","","","","","").subscribe(e=>{this.result=e;var i=this.result[0].data[1]?.value,o=JSON.parse(i);this.dataSource.data=o.returnedData,this.dataSource.paginator=this.paginator})}searchSupplyTransactions(){this.searchTextDisplay=1!=this.searchTextDisplay}getSupplyTransactions(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.SupplyTransactionsService.getSupplyTransactions(this.user,"","","","","","","","","","").subscribe(e=>{var o=JSON.parse(e[0].data[1].value);this.duplicateSource=o.returnedData,this.dataSource=new f.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}getSupplyBySearch(e){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),console.log("SEARCH"),this.getAll2Subscription=this.SupplyTransactionsService.getSupplyTransactions(this.user,e.STOR,e.CONS,e.CARR,e.DOCT,e.DOCN,e.TYPE,e.SDATE,e.EDATE,e.POOL,e.INV).subscribe(o=>{var m=JSON.parse(o[0].data[1].value);this.duplicateSource=m.returnedData,this.dataSource=new f.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}getUpdateForm(e){this.matDialog.open(v,{width:"1000px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}SupplytransactionsCommentsForm(e){this.matDialog.open(I,{width:"1000px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}SupplytransactionsDeleteForm(e){this.matDialog.open(w,{width:"1000px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}SupplytransactionsInquiryForm(e){this.matDialog.open(D,{width:"1000px",height:"auto",maxHeight:"95vh",data:e,autoFocus:!1})}addSupplytransactions(){this.matDialog.open(O.WwSupplytransactionsAddComponent,{width:"1000px",height:"auto",maxHeight:"95vh",autoFocus:!1})}searchSupplytransactions(){this.searchTextDisplay=1!=this.searchTextDisplay}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(p.c),t.Y36(s.uw),t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ww-supplytransactions"]],viewQuery:function(e,i){if(1&e&&t.Gf(A.NW,5),2&e){let o;t.iGM(o=t.CRH())&&(i.paginator=o.first)}},standalone:!0,features:[t.jDz],decls:70,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Supply Transactions",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Supplytransactions",1,"addButton",3,"click"],["mat-button","","type","reset","value","Reset","matTooltip","Reset storer values",1,"addButton","buttons",3,"click"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Storer"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Consignee"],["matColumnDef","Carrier"],["matColumnDef","Pool"],["matColumnDef","TransactionPool"],["matColumnDef","Supply"],["matColumnDef","NetQuantity"],["matColumnDef","Date"],["matColumnDef","Status"],["matColumnDef","Tran"],["matColumnDef","Doc"],["matColumnDef","Invoice"],["matColumnDef","Location"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Supply Transactions",1,"addButton",3,"click"],[1,"row"],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup","ngSubmit"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","STOR"],["matInput","","formControlName","CONS",2,"text-transform","uppercase"],["matInput","","formControlName","CARR",2,"text-transform","uppercase"],["matInput","","formControlName","DOCT",2,"text-transform","uppercase"],["matInput","","formControlName","DOCN",2,"text-transform","uppercase"],["matInput","","formControlName","TYPE",2,"text-transform","uppercase"],["matInput","","formControlName","WKSDATE",2,"text-transform","uppercase"],["matInput","","formControlName","WKEDATE",2,"text-transform","uppercase"],["matInput","","formControlName","POOL",2,"text-transform","uppercase"],["matInput","","formControlName","INV",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Supply Transactions "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,W,3,0,"button",3),t.YNc(6,k,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return i.addSupplytransactions()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"button",6),t.NdJ("click",function(){return i.resetSearch()}),t.TgZ(11,"mat-icon"),t._uU(12,"loop"),t.qZA()(),t.TgZ(13,"mat-menu",7,8)(15,"div",9),t.YNc(16,P,6,2,"ng-container",10),t.qZA()(),t.TgZ(17,"button",11,12)(19,"mat-icon"),t._uU(20,"visibility_off"),t.qZA()()()(),t.TgZ(21,"mat-card-content",13),t.YNc(22,L,45,1,"form",14),t.qZA(),t.TgZ(23,"table",15),t.ynx(24,16),t.YNc(25,Q,2,0,"th",17),t.YNc(26,F,2,1,"td",18),t.BQk(),t.ynx(27,19),t.YNc(28,J,2,0,"th",17),t.YNc(29,E,2,1,"td",18),t.BQk(),t.ynx(30,20),t.YNc(31,M,2,0,"th",17),t.YNc(32,B,2,1,"td",18),t.BQk(),t.ynx(33,21),t.YNc(34,H,2,0,"th",17),t.YNc(35,$,2,1,"td",18),t.BQk(),t.ynx(36,22),t.YNc(37,V,2,0,"th",17),t.YNc(38,X,2,1,"td",18),t.BQk(),t.ynx(39,23),t.YNc(40,z,2,0,"th",17),t.YNc(41,G,2,1,"td",18),t.BQk(),t.ynx(42,24),t.YNc(43,K,2,0,"th",17),t.YNc(44,j,2,1,"td",18),t.BQk(),t.ynx(45,25),t.YNc(46,tt,2,0,"th",17),t.YNc(47,et,2,1,"td",18),t.BQk(),t.ynx(48,26),t.YNc(49,at,2,0,"th",17),t.YNc(50,nt,2,1,"td",18),t.BQk(),t.ynx(51,27),t.YNc(52,ot,2,0,"th",17),t.YNc(53,rt,2,1,"td",18),t.BQk(),t.ynx(54,28),t.YNc(55,it,2,0,"th",17),t.YNc(56,st,2,1,"td",18),t.BQk(),t.ynx(57,29),t.YNc(58,lt,2,0,"th",17),t.YNc(59,ut,2,1,"td",18),t.BQk(),t.ynx(60,30),t.YNc(61,mt,2,0,"th",17),t.YNc(62,pt,2,1,"td",18),t.BQk(),t.ynx(63,31),t.YNc(64,ct,1,0,"th",32),t.YNc(65,St,30,0,"td",18),t.BQk(),t.YNc(66,ft,1,0,"tr",33),t.YNc(67,dt,1,0,"tr",34),t.qZA(),t._UZ(68,"mat-paginator",35,36),t.qZA()),2&e){const o=t.MAs(14);t.xp6(5),t.Q6J("ngIf",i.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!i.searchTextDisplay),t.xp6(10),t.Q6J("ngForOf",i.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(5),t.Q6J("ngIf",i.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",i.dataSource),t.xp6(43),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,Nt))}},dependencies:[T.m,b.sg,b.O5,n._Y,n.Fj,n.JJ,n.JL,n.On,n.sg,n.u,A.NW,c.Hw,U.VK,U.p6,N.lW,h.KE,h.hX,_.Nt,S.a8,S.dk,S.dn,S.n5,f.BZ,f.fO,f.as,f.w1,f.Dz,f.nj,f.ge,f.ev,f.XQ,f.Gk,Y.gM,R.Rr]}),a})()}}]);