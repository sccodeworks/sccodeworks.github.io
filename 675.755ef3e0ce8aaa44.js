"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[675,1860,3765,3483],{51860:(N,T,i)=>{i.d(T,{c:()=>_});var h=i(80529),f=i(75625),g=i(70262),o=i(62843),y=i(92340),A=i(94650);let _=(()=>{class t{constructor(a){this.httpClient=a,this.url=y.N.API_BASE_URL,this.httpHeader={headers:new h.WM({"Content-Type":"application/json"})}}getPayments(a,s,p,u,C,c,b,M,P,v){return this.httpClient.get(this.url+`/Payments/read?user=${a}&customer=${s}&customersuffixone=${p}&customersuffixtwo=${u}&checknumber=${C}&startdate=${c}&enddate=${b}&paymentno=${M}&refno=${P}&status=${v}`)}getPaymentInquiry(a,s){return this.httpClient.get(this.url+`/Payments/read/Inquiry?user=${a}&paymentno=${s}`)}getPaymentDetailInquiry(a,s){return this.httpClient.get(this.url+`/Payments/read/Detail/Inquiry?user=${a}&paymentno=${s}`)}getPaymentApply(a,s,p){return this.httpClient.get(this.url+`/Payments/read/Apply?user=${a}&PaymentNumber=${s}&Customer=${p}`)}getPaymentApplyDetail(a,s){return this.httpClient.get(this.url+`/Payments/read/Apply/Details?user=${a}&PaymentNumber=${s}`)}createpayments(a,s,p,u,C,c,b,M,P,v,U){return this.httpClient.post(this.url+"/Payments/create",{PHTDAT:a,PHCUST:s,PHCSFX:p,PHCSF2:u,PHCHK:C,PHREF:c,PHDESC:b,PHAMT:M,PHDATE:P,PHDDAT:v,user:U}).pipe((0,f.X)(1),(0,g.K)(this.httpError))}updatepayments(a,s,p,u,C,c,b,M,P,v,U,S,w,E){return this.httpClient.put(this.url+"/Payments/update",{PHPAY:a,PHTDAT:s,PHCUST:p,PHCSFX:u,PHCSF2:C,PHCHK:c,PHREF:b,PHDESC:M,PHAMT:P,PHDATE:v,PHDDAT:U,PHSTAT:S,PHTRNC:w,user:E}).pipe((0,f.X)(1),(0,g.K)(this.httpError))}getPaymentComment(a,s){return this.httpClient.get(this.url+`/Payments/comments/read?user=${a}&key=${s}`)}updateComment(a,s,p,u,C){return this.httpClient.put(this.url+"/Payments/comments/update",{user:a,fileID:s,key:p,sub:u,comment:C}).pipe((0,f.X)(1),(0,g.K)(this.httpError))}createComment(a,s,p,u,C){return this.httpClient.post(this.url+"/Payments/comments/create",{user:a,fileID:s,key:p,sub:u,comment:C}).pipe((0,f.X)(1),(0,g.K)(this.httpError))}deleteComment(a,s,p,u){return this.httpClient.delete(this.url+`/Payments/comments/delete?user=${a}&fieldID=${s}&key=${p}&sub=${u}`)}PaymentsPrint(a,s){return this.httpClient.put(this.url+"/Payments/Print",{PaymentNumber:a,user:s}).pipe((0,f.X)(1),(0,g.K)(this.httpError))}PaymentsRecal(a,s){return this.httpClient.put(this.url+"/Payments/Recalculate",{PaymentNumber:a,user:s}).pipe((0,f.X)(1),(0,g.K)(this.httpError))}PaymentDelete(a,s){return this.httpClient.delete(this.url+`/Payments/delete?user=${a}&PaymentNum=${s}`)}httpError(a){let s="";return s=a.error instanceof ErrorEvent?a.error.message:`Error Code: ${a.status}\nMessage: ${a.message}`,console.log(s),(0,o._)(()=>new Error(s))}}return t.\u0275fac=function(a){return new(a||t)(A.LFG(h.eN))},t.\u0275prov=A.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},60675:(N,T,i)=>{i.r(T),i.d(T,{WwPaymentsCommentsComponent:()=>Y});var h=i(7155),f=i(98739),g=i(70879),o=i(24006),y=i(65412),A=i(35226),_=i.n(A),t=i(94650),D=i(19132),a=i(51860),s=i(97392),p=i(4859),u=i(59549),C=i(44144),c=i(73546);let b=(()=>{class r{constructor(e,n,m,l,Z){this.data=e,this.dialogRef=n,this.router=m,this.fb=l,this.PaymentSvc=Z,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.CommentSubscription&&this.CommentSubscription.unsubscribe()}ngOnInit(){console.log(this.data),this.form=this.fb.group({CMRECD:"PH",CMKEY:this.data[1],CMSUBD:"PM",CMCOMM:["",o.kI.maxLength(60)]})}CommentCreate(){var e=this.form.value;this.CommentSubscription&&this.CommentSubscription.unsubscribe(),this.CommentSubscription=this.PaymentSvc.createComment(this.user,e.CMRECD,e.CMKEY,e.CMSUBD,e.CMCOMM).subscribe(n=>{const l=JSON.parse(n[0].data[n[0].data.length-1].value).returnedData.message;"Record Created Successfully"===l?(this.successMessage(l),this.closeDialog(),this.router.navigateByUrl("/main-nav/Payments/comments/read",{state:this.data[0]})):this.failureMessage(l)})}successMessage(e){_().fire(e,"","success")}failureMessage(e){_().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(y.WI),t.Y36(y.so),t.Y36(D.F0),t.Y36(o.qu),t.Y36(a.c))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-payments-create"]],standalone:!0,features:[t.jDz],decls:36,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CMRECD"],["readonly","","matInput","","formControlName","CMKEY"],["readonly","","matInput","","formControlName","CMSUBD"],["appearance","outline",1,"full-width","w-100"],["matInput","","required","","maxlength","60","formControlName","CMCOMM"],["mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain System Comments"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," File ID "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22," Sub Type"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",12)(25,"mat-label"),t._uU(26,"Comment :"),t.qZA(),t.TgZ(27,"textarea",13),t._uU(28," "),t.qZA(),t.TgZ(29,"mat-hint"),t._uU(30," Only "),t.TgZ(31,"strong"),t._uU(32,"60 characters "),t.qZA(),t._uU(33," are allowed"),t.qZA()()()(),t.TgZ(34,"button",14),t.NdJ("click",function(){return n.CommentCreate()}),t._uU(35," Create "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(25),t.Q6J("disabled",!(n.form.valid&&n.form.dirty)))},dependencies:[g.m,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.nD,o.sg,o.u,s.Hw,p.lW,u.KE,u.bx,u.hX,C.Nt,c.a8,c.dk,c.dn,c.n5]}),r})(),M=(()=>{class r{constructor(e,n,m,l,Z){this.data=e,this.dialogRef=n,this.router=m,this.fb=l,this.PaymentSvc=Z,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.CommentSubscription&&this.CommentSubscription.unsubscribe()}ngOnInit(){console.log(this.data),this.form=this.fb.group({CMRECD:"PH",CMKEY:this.data[0][0].CMKEY,CMSUBD:"PM",CMCOMM:[this.data[0][0].CMCOMM,o.kI.maxLength(60)]})}CommentUpdate(){var e=this.form.value;console.log(e),this.CommentSubscription&&this.CommentSubscription.unsubscribe(),this.CommentSubscription=this.PaymentSvc.updateComment(this.user,e.CMRECD,e.CMKEY,e.CMSUBD,e.CMCOMM).subscribe(n=>{const l=JSON.parse(n[0].data[n[0].data.length-1].value).returnedData.message;"Record Updated Successfully"===l?(this.successMessage(l),this.closeDialog(),this.router.navigateByUrl("/main-nav/Payments/comments/read",{state:this.data[0][1]})):this.failureMessage(l)})}successMessage(e){_().fire(e,"","success")}failureMessage(e){_().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(y.WI),t.Y36(y.so),t.Y36(D.F0),t.Y36(o.qu),t.Y36(a.c))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-payments-update"]],decls:36,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CMRECD"],["readonly","","matInput","","formControlName","CMKEY"],["readonly","","matInput","","formControlName","CMSUBD"],["appearance","outline",1,"full-width","w-100"],["matInput","","required","","maxlength","60","formControlName","CMCOMM"],["mat-raised-button","",1,"buttons","addButton",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain System Comments"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," File ID "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22," Sub Type"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",12)(25,"mat-label"),t._uU(26,"Comment :"),t.qZA(),t.TgZ(27,"textarea",13),t._uU(28," "),t.qZA(),t.TgZ(29,"mat-hint"),t._uU(30," Only "),t.TgZ(31,"strong"),t._uU(32,"60 characters "),t.qZA(),t._uU(33," are allowed"),t.qZA()()()(),t.TgZ(34,"button",14),t.NdJ("click",function(){return n.CommentUpdate()}),t._uU(35," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(25),t.Q6J("disabled",!(n.form.valid&&n.form.dirty)))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.nD,o.sg,o.u,s.Hw,p.lW,u.KE,u.bx,u.hX,C.Nt,c.a8,c.dk,c.dn,c.n5]}),r})(),P=(()=>{class r{constructor(e,n,m,l,Z){this.data=e,this.dialogRef=n,this.router=m,this.fb=l,this.PaymentSvc=Z,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.CommentSubscription&&this.CommentSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({CMRECD:"AH",CMKEY:this.data[0][0].CMKEY,CMSUBD:"IN",CMCOMM:[this.data[0][0].CMCOMM,o.kI.maxLength(60)]}),this.form.disable()}CommentDelete(){var e=this.form.value;this.CommentSubscription&&this.CommentSubscription.unsubscribe(),this.CommentSubscription=this.PaymentSvc.deleteComment(this.user,e.CMRECD,e.CMKEY,e.CMSUBD).subscribe(n=>{const l=JSON.parse(n[0].data[n[0].data.length-1].value).returnedData.message;"Record Deleted Successfully"===l?(this.successMessage(l),this.closeDialog(),this.router.navigateByUrl("/main-nav/receivables/comments/read",{state:this.data[0][1]})):this.failureMessage(l)})}successMessage(e){_().fire(e,"","success")}failureMessage(e){_().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(y.WI),t.Y36(y.so),t.Y36(D.F0),t.Y36(o.qu),t.Y36(a.c))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-payments-delete"]],decls:36,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CMRECD"],["readonly","","matInput","","formControlName","CMKEY"],["readonly","","matInput","","formControlName","CMSUBD"],["appearance","outline",1,"full-width","w-100"],["matInput","","required","","maxlength","60","formControlName","CMCOMM"],["mat-raised-button","",1,"buttons","removeButton",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain System Comments"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14," File ID "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18," Key"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22," Sub Type"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",12)(25,"mat-label"),t._uU(26,"Comment :"),t.qZA(),t.TgZ(27,"textarea",13),t._uU(28," "),t.qZA(),t.TgZ(29,"mat-hint"),t._uU(30," Only "),t.TgZ(31,"strong"),t._uU(32,"60 characters "),t.qZA(),t._uU(33," are allowed"),t.qZA()()()(),t.TgZ(34,"button",14),t.NdJ("click",function(){return n.CommentDelete()}),t._uU(35," Delete "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.nD,o.sg,o.u,s.Hw,p.lW,u.KE,u.bx,u.hX,C.Nt,c.a8,c.dk,c.dn,c.n5]}),r})();function v(r,d){1&r&&(t.TgZ(0,"th",22),t._uU(1,"Comments"),t.qZA())}function U(r,d){if(1&r&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&r){const e=d.$implicit;t.xp6(1),t.Oqu(e.CMCOMM)}}function S(r,d){1&r&&t._UZ(0,"th",22)}function w(r,d){if(1&r){const e=t.EpF();t.TgZ(0,"td",23)(1,"div",24)(2,"button",25)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",26)(6,"li")(7,"button",27),t.NdJ("click",function(){t.CHM(e);const m=t.oxw();return t.KtG(m.updateComment())}),t.TgZ(8,"mat-icon",28),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()(),t.TgZ(12,"li")(13,"button",27),t.NdJ("click",function(){const l=t.CHM(e).$implicit,Z=t.oxw();return t.KtG(Z.deleteComment(l))}),t.TgZ(14,"mat-icon",29),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function E(r,d){1&r&&t._UZ(0,"tr",30)}function q(r,d){if(1&r){const e=t.EpF();t.TgZ(0,"tr",31),t.NdJ("click",function(){const l=t.CHM(e).$implicit,Z=t.oxw();return t.KtG(Z.rowClick(l))}),t.qZA()}}const I=function(){return[8,16,24]};let Y=(()=>{class r{constructor(e,n,m,l){this.router=e,this.fb=n,this.PaymentSvc=m,this.matDialog=l,this.user=localStorage.getItem("userName"),this.duplicateSource=[],this.keyValue="",this.displayedColumns=["Comments","Actions"]}ngOnDestroy(){this.getPaymentsSubscription&&this.getPaymentsSubscription.unsubscribe()}ngOnInit(){this.element=history.state,console.log(this.element);const e=(n,m)=>String(n).padStart(m,"0");console.log(e(this.element.WKPAY,7)),this.keyValue=e(this.element.WKPAY,7),this.form=this.fb.group({CMRECD:"PH",CMKEY:e(this.element.WKPAY,7),CMSUBD:"PM",commData:""}),this.Comments()}rowClick(e){this.selectedRow=e}Comments(){var e=this.form.value;this.getPaymentsSubscription&&this.getPaymentsSubscription.unsubscribe(),this.getPaymentsSubscription=this.PaymentSvc.getPaymentComment(this.user,e.CMKEY).subscribe(n=>{var m=n[0].data[1]?.value,l=JSON.parse(m);this.duplicateSource=l.returnedData,console.log(this.duplicateSource),this.dataSource=new h.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}createComment(){this.matDialog.open(b,{width:"1000px",maxHeight:"80vh",data:[this.element,this.keyValue],autoFocus:!1})}updateComment(){this.matDialog.open(M,{width:"1000px",maxHeight:"80vh",data:[[this.duplicateSource[0],history.state]],autoFocus:!1})}deleteComment(e){this.matDialog.open(P,{width:"1000px",maxHeight:"80vh",data:[[this.duplicateSource[0],history.state]],autoFocus:!1})}onBack(){this.router.navigate(["/main-nav/Payments/read"])}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(D.F0),t.Y36(o.qu),t.Y36(a.c),t.Y36(y.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-ww-payments-comments"]],viewQuery:function(e,n){if(1&e&&t.Gf(f.NW,5),2&e){let m;t.iGM(m=t.CRH())&&(n.paginator=m.first)}},standalone:!0,features:[t.jDz],decls:40,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","",1,"addButton",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","CMRECD"],["readonly","","matInput","","formControlName","CMKEY"],["readonly","","matInput","","formControlName","CMSUBD"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Comments"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return n.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Maintain System Comments"),t.qZA(),t.TgZ(7,"div",3)(8,"button",4),t.NdJ("click",function(){return n.createComment()}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA(),t.TgZ(11,"span"),t._uU(12,"New Comment"),t.qZA()()()(),t.TgZ(13,"mat-card-content",5)(14,"form",6)(15,"div",7)(16,"div",8)(17,"mat-form-field",9)(18,"mat-label"),t._uU(19,"File ID"),t.qZA(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"mat-form-field",9)(22,"mat-label"),t._uU(23,"Key"),t.qZA(),t._UZ(24,"input",11),t.qZA(),t.TgZ(25,"mat-form-field",9)(26,"mat-label"),t._uU(27,"Sub"),t.qZA(),t._UZ(28,"input",12),t.qZA()()()()(),t.TgZ(29,"table",13),t.ynx(30,14),t.YNc(31,v,2,0,"th",15),t.YNc(32,U,2,1,"td",16),t.BQk(),t.ynx(33,17),t.YNc(34,S,1,0,"th",15),t.YNc(35,w,18,0,"td",16),t.BQk(),t.YNc(36,E,1,0,"tr",18),t.YNc(37,q,1,0,"tr",19),t.qZA(),t._UZ(38,"mat-paginator",20,21),t.qZA()),2&e&&(t.xp6(14),t.Q6J("formGroup",n.form),t.xp6(15),t.Q6J("dataSource",n.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,I)))},dependencies:[g.m,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,f.NW,s.Hw,p.lW,u.KE,u.hX,C.Nt,c.a8,c.dk,c.dn,c.n5,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk]}),r})()}}]);