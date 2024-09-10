"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[4644,1790,8754,5645,2313],{11790:(q,k,m)=>{m.d(k,{y:()=>C});var _=m(65412),c=m(94650),T=m(97392),f=m(4859);let b=(()=>{class p{constructor(d,r){this.dialogRef=d,this.data=r}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return p.\u0275fac=function(d){return new(d||p)(c.Y36(_.so),c.Y36(_.WI))},p.\u0275cmp=c.Xpm({type:p,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(d,r){1&d&&(c.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),c.NdJ("click",function(){return r.closeDialog()}),c._uU(3,"close "),c.qZA(),c.TgZ(4,"span",3),c._uU(5),c.qZA()(),c.TgZ(6,"button",4),c._uU(7,"Cancel"),c.qZA(),c.TgZ(8,"button",5),c._uU(9,"Delete"),c.qZA()()),2&d&&(c.xp6(5),c.Oqu(r.data.message),c.xp6(1),c.Q6J("mat-dialog-close",!1),c.xp6(2),c.Q6J("mat-dialog-close",!0))},dependencies:[T.Hw,f.lW,_.ZT]}),p})(),C=(()=>{class p{constructor(d){this.dialog=d}openCustomAlert(d){return this.dialog.open(b,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:d}})}}return p.\u0275fac=function(d){return new(d||p)(c.LFG(_.uw))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},14644:(q,k,m)=>{m.r(k),m.d(k,{WwTaskcodesComponent:()=>Ct});var _=m(98739),c=m(7155),T=m(65412),f=m(70879),b=m(35226),C=m.n(b),p=m(48529),t=m(94650),d=m(19132),r=m(24006),h=m(16799),Z=m(97392),S=m(4859),g=m(59549),A=m(44144),w=m(84385),U=m(3238),u=m(73546);let N=(()=>{class o{constructor(e,a,n,i,l){this.anyvariable=e,this.dialogRef=a,this.router=n,this.fb=i,this.TaskCodesService=l,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({TSTASK:{value:this.anyvariable.TSTASK,disabled:!0},TSSTOR:{value:this.anyvariable.TSSTOR+"\xa0"+this.anyvariable.TSSSFX,disabled:!0},TSDESC:this.anyvariable.TSDESC,TSMINM:this.anyvariable.TSMINM,TSBASE:this.anyvariable.TSBASE,TSRATE:this.anyvariable.TSRATE,TSLEGC:this.anyvariable.TSLEGC,TSLEGS:this.anyvariable.TSLEGS,TSMKUP:this.anyvariable.TSMKUP,TSQUOT:this.anyvariable.TSQUOT,TSAUTO:this.anyvariable.TSAUTO,TSVARC:this.anyvariable.TSVARC})}TaskCodesUpdate(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.TaskCodesUpdate(p.R.fullSlotAisl(this.anyvariable.TSTASK),this.anyvariable.TSSTOR,this.anyvariable.TSSSFX,e.TSDESC,e.TSMINM,e.TSBASE,e.TSRATE,e.TSLEGC,e.TSLEGS,e.TSMKUP,e.TSQUOT,e.TSAUTO,e.TSVARC,this.user).subscribe(a=>{const i=JSON.parse(a[0].data[a[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===i?(this.successMessage(i),this.closeDialog(),this.router.navigate(["/main-nav/task-codes/read"])):this.failureMessage(i)})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.WI),t.Y36(T.so),t.Y36(d.F0),t.Y36(r.qu),t.Y36(h.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-change"]],standalone:!0,features:[t.jDz],decls:77,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","TSTASK","readonly",""],["matInput","","formControlName","TSSTOR"],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","TSDESC"],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","TSRATE"],["matInput","","formControlName","TSBASE",2,"text-transform","uppercase"],["matInput","","formControlName","TSMINM"],["matInput","","formControlName","TSLEGC"],["appearance","outline"],["matInput","","formControlName","TSLEGS"],["matInput","","formControlName","TSMKUP"],["formControlName","TSAUTO"],["value","I"],["value","O"],["value","N"],["matInput","","formControlName","TSVARC",2,"text-transform","uppercase"],["matInput","","formControlName","TSQUOT",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Task Code Maintenance"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Task Code"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Storer"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t.TgZ(23,"textarea",12),t._uU(24," Description"),t.qZA()(),t.TgZ(25,"div",13)(26,"label",14),t._uU(27,"Rate/Base"),t.qZA(),t.TgZ(28,"div",15)(29,"mat-form-field",8)(30,"mat-label"),t._uU(31,"Rate"),t.qZA(),t._UZ(32,"input",16),t.qZA(),t.TgZ(33,"mat-form-field",8)(34,"mat-label"),t._uU(35,"Base"),t.qZA(),t._UZ(36,"input",17),t.qZA()()(),t.TgZ(37,"mat-form-field",8)(38,"mat-label"),t._uU(39,"Minimum"),t.qZA(),t._UZ(40,"input",18),t.qZA(),t.TgZ(41,"div",13)(42,"label",14),t._uU(43,"Ledger Code"),t.qZA(),t.TgZ(44,"div",15)(45,"mat-form-field",8)(46,"mat-label"),t._uU(47,"Ledger"),t.qZA(),t._UZ(48,"input",19),t.qZA(),t.TgZ(49,"mat-form-field",20)(50,"mat-label"),t._uU(51,"sub-code"),t.qZA(),t._UZ(52,"input",21),t.qZA()()(),t.TgZ(53,"mat-form-field",8)(54,"mat-label"),t._uU(55,"Markup"),t.qZA(),t._UZ(56,"input",22),t.qZA(),t.TgZ(57,"mat-form-field",8)(58,"mat-label"),t._uU(59,"Auto Charge"),t.qZA(),t.TgZ(60,"mat-select",23)(61,"mat-option",24),t._uU(62,"I"),t.qZA(),t.TgZ(63,"mat-option",25),t._uU(64,"O"),t.qZA(),t.TgZ(65,"mat-option",26),t._uU(66,"N"),t.qZA()()(),t.TgZ(67,"mat-form-field",8)(68,"mat-label"),t._uU(69,"Recalculate At Posting"),t.qZA(),t._UZ(70,"input",27),t.qZA(),t.TgZ(71,"mat-form-field",8)(72,"mat-label"),t._uU(73,"Task on Quote"),t.qZA(),t._UZ(74,"input",28),t.qZA()()(),t.TgZ(75,"button",29),t.NdJ("click",function(){return a.TaskCodesUpdate()}),t._uU(76,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[f.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,Z.Hw,S.lW,g.KE,g.hX,A.Nt,w.gD,U.ey,u.a8,u.dk,u.dn,u.n5]}),o})(),D=(()=>{class o{constructor(e,a,n,i,l){this.anyvariable=e,this.dialogRef=a,this.router=n,this.fb=i,this.TaskCodesService=l,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({ACTYPE:"",ACTASK:this.anyvariable.TSTASK,ACSTOR:this.anyvariable.TSSTOR,ACCNST:"",ACRLOP:"",ACVALU:"",ACSTAT:""})}TaskCodesConstraint(){}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.WI),t.Y36(T.so),t.Y36(d.F0),t.Y36(r.qu),t.Y36(h.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-constraint"]],standalone:!0,features:[t.jDz],decls:54,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ACTYPE"],["matInput","","formControlName","ACTASK"],["matInput","","formControlName","ACSTOR"],["matInput","","formControlName","ACCNST"],["formControlName","ACRLOP"],["value","EQ"],["value","NE"],["value","LE"],["value","LT"],["value","GE"],["value","GT"],["matInput","","formControlName","ACVALU"],["matInput","","formControlName","ACSTAT",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Autocharge Constraints"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Document Type"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Task Code"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Storer"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Constraint Field"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Relationship"),t.qZA(),t.TgZ(31,"mat-select",13)(32,"mat-option",14),t._uU(33,"EQ - Equal"),t.qZA(),t.TgZ(34,"mat-option",15),t._uU(35,"NE - Not Equal"),t.qZA(),t.TgZ(36,"mat-option",16),t._uU(37,"LE - Less than or equal "),t.qZA(),t.TgZ(38,"mat-option",17),t._uU(39,"LT - Less Than "),t.qZA(),t.TgZ(40,"mat-option",18),t._uU(41,"GE - Greater than or equal "),t.qZA(),t.TgZ(42,"mat-option",19),t._uU(43,"GT - Greater Than"),t.qZA()()(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Constraint Value"),t.qZA(),t._UZ(47,"input",20),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Status Code"),t.qZA(),t._UZ(51,"input",21),t.qZA()()(),t.TgZ(52,"button",22),t.NdJ("click",function(){return a.TaskCodesConstraint()}),t._uU(53,"Constraint"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[f.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,Z.Hw,S.lW,g.KE,g.hX,A.Nt,w.gD,U.ey,u.a8,u.dk,u.dn,u.n5]}),o})(),W=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-delete"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,a){},dependencies:[f.m]}),o})(),F=(()=>{class o{constructor(e,a,n,i){this.data=e,this.dialogRef=a,this.router=n,this.fb=i}closeDialog(){this.dialogRef.close()}ngOnInit(){this.TaskCodesCopyTaskCodeForm=this.fb.group({TSTASK:"SPCH",TSDESC:"Special Handling",TSRATE:"25.000",TSBASE:"HR",TSMINM:".00",TSLEGC:"100",TSLEGS:"",TSMKUP:"",TSAUTO:"N",TSQUOT:"Y",TSSTOR:"",TSSSFX:"",TSVARC:"N"})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.WI),t.Y36(T.so),t.Y36(d.F0),t.Y36(r.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-copytaskcode"]],standalone:!0,features:[t.jDz],decls:66,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","TSTASK",2,"text-transform","uppercase"],["matInput","","formControlName","TSDESC",2,"text-transform","uppercase"],["matInput","","formControlName","TSRATE",2,"text-transform","uppercase"],["matInput","","formControlName","TSBASE",2,"text-transform","uppercase"],["matInput","","formControlName","TSMINM",2,"text-transform","uppercase"],["matInput","","formControlName","TSLEGC",2,"text-transform","uppercase"],["matInput","","formControlName","TSLEGS",2,"text-transform","uppercase"],["matInput","","formControlName","TSMKUP",2,"text-transform","uppercase"],["matInput","","formControlName","TSAUTO",2,"text-transform","uppercase"],["matInput","","formControlName","TSQUOT",2,"text-transform","uppercase"],["matInput","","formControlName","TSSTOR",2,"text-transform","uppercase"],["matInput","","formControlName","TSSSFX",2,"text-transform","uppercase"],["matInput","","formControlName","TSVARC",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Task Code Maintenance"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Task Code"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Description"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Rate"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Base"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Minimum"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Ledger"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Code"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"Markup"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Auto Charge"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Task on Quote"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Storer"),t.qZA(),t._UZ(55,"input",19),t.qZA(),t.TgZ(56,"mat-form-field",8)(57,"mat-label"),t._uU(58,"Storer Suffix"),t.qZA(),t._UZ(59,"input",20),t.qZA(),t.TgZ(60,"mat-form-field",8)(61,"mat-label"),t._uU(62,"Recalculate At Posting"),t.qZA(),t._UZ(63,"input",21),t.qZA()()(),t.TgZ(64,"button",22),t._uU(65,"Copytaskcode"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.TaskCodesCopyTaskCodeForm))},dependencies:[f.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,Z.Hw,S.lW,g.KE,g.hX,A.Nt,u.a8,u.dk,u.dn,u.n5]}),o})(),M=(()=>{class o{constructor(e,a,n,i,l){this.anyvariable=e,this.dialogRef=a,this.router=n,this.fb=i,this.TaskCodesService=l,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({FromStorer:{value:this.anyvariable.TSSTOR+"\xa0"+this.anyvariable.TSSSFX,disabled:!0},ToStorer:"",ToStorerSfx:""})}TaskCodesCopySet(){var e=this.form.value;console.log(e),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.TaskCodesCopySet(this.anyvariable.TSSTOR,this.anyvariable.TSSSFX,e.ToStorer,e.ToStorerSfx).subscribe(a=>{this.result=a,console.log(this.result);const n=a[0].data[a[0].data.length-1].value;"COPIED SUCCESSFULLY"===n?(this.successMessage(n),this.closeDialog(),this.router.navigate(["/main-nav/task-codes/read"])):this.failureMessage(n)})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.WI),t.Y36(T.so),t.Y36(d.F0),t.Y36(r.qu),t.Y36(h.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-copytaskset"]],standalone:!0,features:[t.jDz],decls:31,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FromStorer","readonly",""],[1,"form-group1"],["for","inputField",1,"form-heading"],[1,"form-input"],["matInput","","formControlName","ToStorer"],["matInput","","formControlName","ToStorerSfx",2,"text-transform","uppercase"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Copy A Task Code Set"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"From Storer"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"div",10)(17,"label",11),t._uU(18,"To Storer"),t.qZA(),t.TgZ(19,"div",12)(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Storer"),t.qZA(),t._UZ(23,"input",13),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Storer Suffix"),t.qZA(),t._UZ(27,"input",14),t.qZA()()()()(),t._UZ(28,"br"),t.TgZ(29,"button",15),t.NdJ("click",function(){return a.TaskCodesCopySet()}),t._uU(30,"Copy Set"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[f.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,Z.Hw,S.lW,g.KE,g.hX,A.Nt,u.a8,u.dk,u.dn,u.n5]}),o})(),I=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-activatetask"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,a){},dependencies:[f.m]}),o})(),R=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes-deactivate"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,a){},dependencies:[f.m]}),o})();var O=m(5103),Y=m(11790),x=m(36895),y=m(28255),E=m(10266),J=m(90455);function L(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchTaskcodes())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function G(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchTaskcodes())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function H(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",35)(2,"div",36)(3,"span",37),t.NdJ("click",function(n){return n.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",38),t.NdJ("ngModelChange",function(n){const l=t.CHM(e).$implicit;return t.KtG(l.isActive=n)})("change",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.toggleColumn(i))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&o){const e=s.$implicit;t.xp6(4),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function B(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",39)(1,"div",35)(2,"div",40)(3,"mat-form-field",41)(4,"mat-label"),t._uU(5,"Storer"),t.qZA(),t._UZ(6,"input",42),t.qZA(),t.TgZ(7,"mat-form-field",41)(8,"mat-label"),t._uU(9,"Storer Suffix"),t.qZA(),t._UZ(10,"input",43),t.qZA(),t.TgZ(11,"mat-form-field",41)(12,"mat-label"),t._uU(13,"Status"),t.qZA(),t._UZ(14,"input",44),t.qZA()()(),t.TgZ(15,"button",45),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.getTaskCodesBySearch(n.form.value))}),t._uU(16," Search "),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function Q(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Storer"),t.qZA())}function K(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSSTOR)}}function X(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Task Code"),t.qZA())}function $(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSTASK)}}function P(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Description"),t.qZA())}function j(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSDESC)}}function z(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Auto Charge "),t.qZA())}function V(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSAUTO)}}function tt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Base"),t.qZA())}function et(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSBASE)}}function ot(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Rate"),t.qZA())}function at(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSRATE)}}function st(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Status"),t.qZA())}function nt(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSACDL)}}function it(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Minimum"),t.qZA())}function rt(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSMINM)}}function lt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Ledger Code"),t.qZA())}function ct(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSLEGC)}}function mt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Markup"),t.qZA())}function ut(o,s){if(1&o&&(t.TgZ(0,"td",47),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.TSMKUP)}}function dt(o,s){1&o&&t._UZ(0,"th",48)}function pt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",47)(1,"div",49)(2,"button",50)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",51)(6,"li")(7,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesChangeForm(i))}),t.TgZ(8,"mat-icon",53),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Change"),t.qZA()()(),t.TgZ(12,"li")(13,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesConstraintForm(i))}),t.TgZ(14,"mat-icon",53),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Constraint"),t.qZA()()(),t.TgZ(18,"li")(19,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesDelete(i))}),t.TgZ(20,"mat-icon",54),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()(),t.TgZ(24,"li")(25,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesDeactivate(i))}),t.TgZ(26,"mat-icon",54),t._uU(27,"delete"),t.qZA(),t.TgZ(28,"mat-label"),t._uU(29,"Deactivate"),t.qZA()()(),t.TgZ(30,"li")(31,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesCopyTaskCodeForm(i))}),t.TgZ(32,"mat-icon",53),t._uU(33,"call_made"),t.qZA(),t.TgZ(34,"mat-label"),t._uU(35,"CopyTaskCode"),t.qZA()()(),t.TgZ(36,"li")(37,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesCopyTaskSetForm(i))}),t.TgZ(38,"mat-icon",53),t._uU(39,"call_made"),t.qZA(),t.TgZ(40,"mat-label"),t._uU(41,"CopyTaskSet"),t.qZA()()(),t.TgZ(42,"li")(43,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesActivateTaskForm(i))}),t.TgZ(44,"mat-icon",53),t._uU(45,"call_made"),t.qZA(),t.TgZ(46,"mat-label"),t._uU(47,"ActivateTask"),t.qZA()()(),t.TgZ(48,"li")(49,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesDeactivateForm(i))}),t.TgZ(50,"mat-icon",53),t._uU(51,"call_made"),t.qZA(),t.TgZ(52,"mat-label"),t._uU(53,"Deactivate"),t.qZA()()(),t.TgZ(54,"li")(55,"button",52),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.TaskCodesAttributesForm(i))}),t.TgZ(56,"mat-icon",53),t._uU(57,"call_made"),t.qZA(),t.TgZ(58,"mat-label"),t._uU(59,"Attributes"),t.qZA()()()()()()}}function Tt(o,s){1&o&&t._UZ(0,"tr",55)}function ft(o,s){1&o&&t._UZ(0,"tr",56)}const gt=function(){return[8,16,24]};let Ct=(()=>{class o{constructor(e,a,n,i,l){this.fb=e,this.router=a,this.matDialog=n,this.TaskCodesService=i,this.CustomAlertService=l,this.selectedRow=[],this.editedRows=[],this.displayedColumns=["Storer","TaskCode","Description","AutoCharge","Base","Rate","Status","Actions"],this.duplicateSource=[],this.searchTextDisplay=!1,this.user=localStorage.getItem("userName"),this.columnShowHideList=[]}ngOnInit(){this.form=this.fb.group({STOR:"",SSFX:"",STS:"A"}),this.initializeColumnProperties(),this.editedRows=[],this.getTaskCodes()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.deleteTaskCodesSubscription&&this.deleteTaskCodesSubscription.unsubscribe()}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let a=this.displayedColumns.indexOf(e.name);a>-1&&this.displayedColumns.splice(a,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,a)=>{"Actions"!=e&&this.columnShowHideList.push({position:a,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Minimum",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"LedgerCode",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Markup",isActive:!1})}rowClick(e){this.selectedRow=e}getTaskCodes(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.getTaskCodes("",this.user,"","").subscribe(e=>{var n=JSON.parse(e[0].data[1].value);this.duplicateSource=n.returnedData,this.dataSource=new c.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}searchTaskcodes(){this.searchTextDisplay=1!=this.searchTextDisplay}getTaskCodesBySearch(e){console.log(this.form.value),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.TaskCodesService.getTaskCodes(e.STOR,this.user,e.SSFX,e.STS).subscribe(n=>{var i=n[0].data[1].value,l=JSON.parse(i);console.log(i),this.duplicateSource=l.returnedData,this.dataSource=new c.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}TaskCodesDelete(e){const a=this.CustomAlertService.openCustomAlert("Are you sure want to delete this Task ID:"+e.TSTASK+" ?");console.log(p.R.fullStorer(e.TSSTOR)),a.afterClosed().subscribe(n=>{n&&(this.deleteTaskCodesSubscription&&this.deleteTaskCodesSubscription.unsubscribe(),this.deleteTaskCodesSubscription=this.TaskCodesService.TaskCodesDelete(p.R.fullSlotAisl(e.TSTASK),e.TSSTOR,"").subscribe(i=>{const l=i[0].data[i[0].data.length-1].value;"DELETED SUCCESSFULLY"===l?(this.successMessage(l),this.getTaskCodes()):this.failureMessage(i[0].data[i[0].data.length-1].value)}))})}TaskCodesDeactivate(e){this.CustomAlertService.openCustomAlert("Are you sure want to de-activate this Task ID:"+e.TSTASK+" ?").afterClosed().subscribe(n=>{n&&(this.deactivateTaskCodesSubscription&&this.deactivateTaskCodesSubscription.unsubscribe(),this.deactivateTaskCodesSubscription=this.TaskCodesService.TaskCodesDeactivate(p.R.fullSlotAisl(e.TSTASK),e.TSSTOR,"").subscribe(i=>{this.result=i,console.log(this.result);const l=i[0].data[i[0].data.length-1].value;console.log(l),"UPDATED SUCCESSFULLY"===l?(this.successMessage(l),this.getTaskCodes()):this.failureMessage(i[0].data[i[0].data.length-1].value)}))})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}AddTaskCodes(){this.matDialog.open(O.WwTaskcodesAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}TaskCodesChangeForm(e){this.matDialog.open(N,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesConstraintForm(e){this.matDialog.open(D,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesDeleteForm(e){this.matDialog.open(W,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesCopyTaskCodeForm(e){this.matDialog.open(F,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesCopyTaskSetForm(e){this.matDialog.open(M,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesActivateTaskForm(e){this.matDialog.open(I,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesDeactivateForm(e){this.matDialog.open(R,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}TaskCodesAttributesForm(e){this.router.navigateByUrl("/main-nav/task-codes-attributes/read",{state:e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(d.F0),t.Y36(T.uw),t.Y36(h.x),t.Y36(Y.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-ww-taskcodes"]],viewQuery:function(e,a){if(1&e&&t.Gf(_.NW,5),2&e){let n;t.iGM(n=t.CRH())&&(a.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:58,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Taskcodes",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Taskcodes",1,"addButton",3,"click"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Storer"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","TaskCode"],["matColumnDef","Description"],["matColumnDef","AutoCharge"],["matColumnDef","Base"],["matColumnDef","Rate"],["matColumnDef","Status"],["matColumnDef","Minimum"],["matColumnDef","LedgerCode"],["matColumnDef","Markup"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Taskcodes",1,"addButton",3,"click"],[1,"row"],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[1,"form","over-Flow",3,"formGroup"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","STOR"],["matInput","","formControlName","SSFX",2,"text-transform","uppercase"],["matInput","","formControlName","STS",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn",3,"click"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Task Codes "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,L,3,0,"button",3),t.YNc(6,G,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.AddTaskCodes()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()(),t.TgZ(10,"mat-menu",6,7)(12,"div",8),t.YNc(13,H,6,2,"ng-container",9),t.qZA()(),t.TgZ(14,"button",10,11)(16,"mat-icon"),t._uU(17,"visibility_off"),t.qZA()()()(),t.TgZ(18,"mat-card-content",12),t.YNc(19,B,17,1,"form",13),t.qZA(),t.TgZ(20,"table",14),t.ynx(21,15),t.YNc(22,Q,2,0,"th",16),t.YNc(23,K,2,1,"td",17),t.BQk(),t.ynx(24,18),t.YNc(25,X,2,0,"th",16),t.YNc(26,$,2,1,"td",17),t.BQk(),t.ynx(27,19),t.YNc(28,P,2,0,"th",16),t.YNc(29,j,2,1,"td",17),t.BQk(),t.ynx(30,20),t.YNc(31,z,2,0,"th",16),t.YNc(32,V,2,1,"td",17),t.BQk(),t.ynx(33,21),t.YNc(34,tt,2,0,"th",16),t.YNc(35,et,2,1,"td",17),t.BQk(),t.ynx(36,22),t.YNc(37,ot,2,0,"th",16),t.YNc(38,at,2,1,"td",17),t.BQk(),t.ynx(39,23),t.YNc(40,st,2,0,"th",16),t.YNc(41,nt,2,1,"td",17),t.BQk(),t.ynx(42,24),t.YNc(43,it,2,0,"th",16),t.YNc(44,rt,2,1,"td",17),t.BQk(),t.ynx(45,25),t.YNc(46,lt,2,0,"th",16),t.YNc(47,ct,2,1,"td",17),t.BQk(),t.ynx(48,26),t.YNc(49,mt,2,0,"th",16),t.YNc(50,ut,2,1,"td",17),t.BQk(),t.ynx(51,27),t.YNc(52,dt,1,0,"th",28),t.YNc(53,pt,60,0,"td",17),t.BQk(),t.YNc(54,Tt,1,0,"tr",29),t.YNc(55,ft,1,0,"tr",30),t.qZA(),t._UZ(56,"mat-paginator",31,32),t.qZA()),2&e){const n=t.MAs(11);t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(7),t.Q6J("ngForOf",a.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(34),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,gt))}},dependencies:[f.m,x.sg,x.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.sg,r.u,_.NW,Z.Hw,y.VK,y.p6,S.lW,g.KE,g.hX,A.Nt,u.a8,u.dk,u.dn,u.n5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,E.gM,J.Rr]}),o})()}}]);