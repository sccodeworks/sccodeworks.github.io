"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3752],{3752:(M,b,l)=>{l.r(b),l.d(b,{InvInquiryLcTransactionsComponent:()=>z});var T=l(98739),C=l(70879),d=l(7155),E=l(36895),t=l(94650),S=l(19132),O=l(46546),_=l(24006),P=l(97392),i=l(28255),a=l(4859),s=l(59549),u=l(44144),c=l(73546),m=l(10266),h=l(90455);function g(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",11)(2,"div",41)(3,"span",42),t.NdJ("click",function(p){return p.stopPropagation()}),t.TgZ(4,"mat-slide-toggle",43),t.NdJ("ngModelChange",function(p){const y=t.CHM(n).$implicit;return t.KtG(y.isActive=p)})("change",function(){const f=t.CHM(n).$implicit,y=t.oxw();return t.KtG(y.toggleColumn(f))}),t._uU(5),t.qZA()()()(),t.BQk()}if(2&e){const n=r.$implicit;t.xp6(4),t.Q6J("ngModel",n.isActive),t.xp6(1),t.hij(" ",n.name," ")}}function A(e,r){1&e&&(t.TgZ(0,"th",44),t._uU(1," Originating Customer "),t.qZA())}function v(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t._UZ(2,"br"),t._uU(3),t._UZ(4,"br"),t._uU(5),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.WKOCNAM),t.xp6(2),t.Oqu(n.WKOCAD1+""+n.WKOCAD2),t.xp6(2),t.Oqu(n.WKOCAD3)}}function I(e,r){1&e&&(t.TgZ(0,"th",44),t._uU(1," Bill-to Customer "),t.qZA())}function L(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t._UZ(2,"br"),t._uU(3),t._UZ(4,"br"),t._uU(5),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.WKBCNAM),t.xp6(2),t.Oqu(n.WKBCAD1+""+n.WKBCAD2),t.xp6(2),t.Oqu(n.WKBCAD3)}}function D(e,r){1&e&&t._UZ(0,"tr",46)}function Z(e,r){1&e&&t._UZ(0,"tr",47)}function q(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Status"),t.qZA())}function U(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.ADSTAT)}}function N(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Sequence Number"),t.qZA())}function R(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.ADSEQ)}}function x(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1," Building Number "),t.qZA())}function K(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.ADBLDG)}}function B(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Ledger Description"),t.qZA())}function $(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.WKLGDSC)}}function W(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Paid Amount"),t.qZA())}function Y(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.hij("$",t.xi3(2,1,n.WKDPAID,"1.2-2"),"")}}function H(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1,"Adjustment Amount"),t.qZA())}function Q(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n.WKCRDT)}}function J(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1," Original Amount "),t.qZA())}function w(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.ALo(2,"number"),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.hij("$",t.xi3(2,1,n.ADAMT,"1.2-2"),"")}}function j(e,r){1&e&&(t.TgZ(0,"th",48),t._uU(1," Payment Number / Check Number "),t.qZA())}function F(e,r){if(1&e&&(t.TgZ(0,"td",45),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.PaymentNumber)}}function G(e,r){1&e&&t._UZ(0,"tr",46)}function k(e,r){1&e&&t._UZ(0,"tr",47)}const X=function(){return[8,16,24]};let z=(()=>{class e{constructor(n,o,p,f){this.router=n,this.LedgerCodes=o,this.fb=p,this.decimalPipe=f,this.displayedColumns1=["OriginatingCustomer","BillToCustomer"],this.displayedColumns=["Status","SequenceNumber","BuildingNumber","LedgerDescription","PaidAmount","Adjustment","OriginalAmount"],this.duplicateSource=[],this.user=localStorage.getItem("userName"),this.TransactionType="",this.Description="",this.Due=0,this.Paid=0,this.PaymentNumber="",this.selectedRow=[],this.editedRows=[],this.columnShowHideList=[]}ngOnInit(){this.element=history.state,console.log(this.element),this.form=this.fb.group({AHINV:{value:this.element[0].WKINV,disabled:!0},AHREF:{value:this.element[0].AHREF,disabled:!0}}),this.initializeColumnProperties(),this.editedRows=[],this.getInvInquiry()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(n){if(n.isActive)n.position>this.displayedColumns.length-1?this.displayedColumns.push(n.name):this.displayedColumns.splice(n.position,0,n.name);else{let o=this.displayedColumns.indexOf(n.name);o>-1&&this.displayedColumns.splice(o,1)}}initializeColumnProperties(){this.displayedColumns.forEach((n,o)=>{"OriginalAmount"!=n&&this.columnShowHideList.push({position:o,name:n,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"PaymentNumber",isActive:!1})}getInvInquiry(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.LedgerCodes.getLctInvInquiry(this.user,this.element[0].WKINV).subscribe(n=>{var o=n[0].data[1].value;console.log(o);var p=JSON.parse(o);if(this.duplicateSource=p.returnedData,this.dataSource=new d.by(this.duplicateSource),console.log(this.duplicateSource),this.InvoiceDate=this.duplicateSource[0].AHDATE,this.TransactionDate=this.duplicateSource[0].AHTDAT,this.DueDate=this.duplicateSource[0].AHDDAT,this.InvoiceAmount="$"+this.decimalPipe.transform(this.duplicateSource[0].AHAMT,"1.2-2"),this.InvoiceStatus=this.duplicateSource[0].AHSTAT,this.AdjustmentAmount="$"+this.decimalPipe.transform(this.duplicateSource[0].WKAJAMT,"1.2-2"),this.Description=this.duplicateSource[0].AHDESC,this.TransactionType=this.duplicateSource[0].TTDESC,this.PaymentNumber=this.duplicateSource[0].WKPAY1+this.duplicateSource[0].WKSLSH1+this.duplicateSource[0].WKCHK1,this.duplicateSource.length>0){this.dataSource.paginator=this.paginator;for(let f=0;f<this.duplicateSource.length;f++){const y=this.duplicateSource[f];this.Due+=y.ADAMT,this.Paid+=y.WKDPAID,console.log(this.Due)}}})}onBack(){this.router.navigateByUrl("/main-nav/ledgerCode/receivable-details",{state:this.element[1]})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(S.F0),t.Y36(O.f),t.Y36(_.qu),t.Y36(E.JJ))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inv-inquiry-lc-transactions"]],viewQuery:function(n,o){if(1&n&&t.Gf(T.NW,5),2&n){let p;t.iGM(p=t.CRH())&&(o.paginator=p.first)}},standalone:!0,features:[t._Bn([E.JJ]),t.jDz],decls:113,vars:27,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"button"],[1,"menu-container"],["mainMenuButton","matMenu"],[1,"grid-container"],[4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","AHINV"],["matInput","","disabled","",3,"value"],["matInput","","formControlName","AHREF"],["appearance","outline",1,"full-width2"],["disabled","","matInput","",3,"value"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","OriginatingCustomer"],["mat-header-cell","","mat-header-cell","","width","20%",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","BillToCustomer"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-table","",1,"mat-elevation-z8","tableCss",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","SequenceNumber"],["matColumnDef","BuildingNumber"],["matColumnDef","LedgerDescription"],["matColumnDef","PaidAmount"],["matColumnDef","Adjustment"],["matColumnDef","OriginalAmount"],["matColumnDef","PaymentNumber"],[1,"Content-page-both-right"],[1,"right-side-content"],[1,"buttons","button3"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],[1,"grid-item"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-header-cell","","mat-header-cell","","width","20%"],["mat-cell",""],["mat-header-row",""],["mat-row",""],["mat-header-cell","","mat-header-cell",""]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return o.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Receivables Transaction Inquiry"),t.qZA(),t.TgZ(7,"div",2)(8,"mat-menu",3,4)(10,"div",5),t.YNc(11,g,6,2,"ng-container",6),t.qZA()(),t.TgZ(12,"button",7,8)(14,"mat-icon"),t._uU(15,"visibility_off"),t.qZA()()()(),t.TgZ(16,"mat-card-content",9)(17,"form",10)(18,"div",11)(19,"div",12)(20,"mat-form-field",13)(21,"mat-label"),t._uU(22,"Invoice Number"),t.qZA(),t._UZ(23,"input",14),t.qZA(),t.TgZ(24,"mat-form-field",13)(25,"mat-label"),t._uU(26,"Status"),t.qZA(),t._UZ(27,"input",15),t.qZA(),t.TgZ(28,"mat-form-field",13)(29,"mat-label"),t._uU(30,"Reference Number "),t.qZA(),t._UZ(31,"input",16),t.qZA(),t.TgZ(32,"mat-form-field",13)(33,"mat-label"),t._uU(34,"Invoice Date"),t.qZA(),t._UZ(35,"input",15),t.qZA(),t.TgZ(36,"mat-form-field",13)(37,"mat-label"),t._uU(38,"Transaction Date"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",17)(41,"mat-label"),t._uU(42,"Description"),t.qZA(),t._UZ(43,"input",15),t.qZA(),t.TgZ(44,"mat-form-field",13)(45,"mat-label"),t._uU(46,"Due Date"),t.qZA(),t._UZ(47,"input",15),t.qZA(),t.TgZ(48,"mat-form-field",13)(49,"mat-label"),t._uU(50,"Transaction Type"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",13)(53,"mat-label"),t._uU(54,"Invoice Amount"),t.qZA(),t._UZ(55,"input",15),t.qZA(),t.TgZ(56,"mat-form-field",13)(57,"mat-label"),t._uU(58,"Adjusted Amount"),t.qZA(),t._UZ(59,"input",15),t.qZA()()()()(),t._UZ(60,"br"),t.TgZ(61,"table",19),t.ynx(62,20),t.YNc(63,A,2,0,"th",21),t.YNc(64,v,6,3,"td",22),t.BQk(),t.ynx(65,23),t.YNc(66,I,2,0,"th",21),t.YNc(67,L,6,3,"td",22),t.BQk(),t.YNc(68,D,1,0,"tr",24),t.YNc(69,Z,1,0,"tr",25),t.qZA(),t._UZ(70,"br"),t.TgZ(71,"table",26),t.ynx(72,27),t.YNc(73,q,2,0,"th",28),t.YNc(74,U,2,1,"td",22),t.BQk(),t.ynx(75,29),t.YNc(76,N,2,0,"th",28),t.YNc(77,R,2,1,"td",22),t.BQk(),t.ynx(78,30),t.YNc(79,x,2,0,"th",28),t.YNc(80,K,2,1,"td",22),t.BQk(),t.ynx(81,31),t.YNc(82,B,2,0,"th",28),t.YNc(83,$,2,1,"td",22),t.BQk(),t.ynx(84,32),t.YNc(85,W,2,0,"th",28),t.YNc(86,Y,3,4,"td",22),t.BQk(),t.ynx(87,33),t.YNc(88,H,2,0,"th",28),t.YNc(89,Q,2,1,"td",22),t.BQk(),t.ynx(90,34),t.YNc(91,J,2,0,"th",28),t.YNc(92,w,3,4,"td",22),t.BQk(),t.ynx(93,35),t.YNc(94,j,2,0,"th",28),t.YNc(95,F,2,1,"td",22),t.BQk(),t.YNc(96,G,1,0,"tr",24),t.YNc(97,k,1,0,"tr",25),t.qZA(),t.TgZ(98,"div",36)(99,"div",37)(100,"button",38),t._uU(101," Paid : "),t.TgZ(102,"b"),t._uU(103),t.ALo(104,"number"),t.qZA()()(),t.TgZ(105,"div",37)(106,"button",38),t._uU(107," Due : "),t.TgZ(108,"b"),t._uU(109),t.ALo(110,"number"),t.qZA()()()(),t._UZ(111,"mat-paginator",39,40),t.qZA()),2&n){const p=t.MAs(9);t.xp6(11),t.Q6J("ngForOf",o.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",p),t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(10),t.s9C("value",o.InvoiceStatus),t.xp6(8),t.s9C("value",o.InvoiceDate),t.xp6(4),t.s9C("value",o.TransactionDate),t.xp6(4),t.s9C("value",o.Description),t.xp6(4),t.s9C("value",o.DueDate),t.xp6(4),t.s9C("value",o.TransactionType),t.xp6(4),t.s9C("value",o.InvoiceAmount),t.xp6(4),t.s9C("value",o.AdjustmentAmount),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",o.displayedColumns1),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns1),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(6),t.hij("$ ",t.xi3(104,20,o.Paid,"1.2-2"),""),t.xp6(6),t.hij(" $ ",t.xi3(110,23,o.Due,"1.2-2"),""),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(26,X))}},dependencies:[C.m,E.sg,_._Y,_.Fj,_.JJ,_.JL,_.On,_.sg,_.u,T.NW,P.Hw,i.VK,i.p6,a.lW,s.KE,s.hX,u.Nt,c.a8,c.dk,c.dn,c.n5,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,m.gM,h.Rr,E.JJ]}),e})()},46546:(M,b,l)=>{l.d(b,{f:()=>O});var T=l(80529),C=l(75625),d=l(70262),E=l(62843),t=l(92340),S=l(94650);let O=(()=>{class _{constructor(i){this.httpClient=i,this.url=t.N.API_BASE_URL,this.httpHeader={headers:new T.WM({"Content-Type":"application/json"})}}getLedgerCodes(i,a,s,u){return this.httpClient.get(this.url+`/LedgerCodes/read?user=${i}&LedgerCode=${a}&recordsPerPage=${s}&pageNo=${u}`)}getAll(i){return this.httpClient.get(this.url+`/LedgerCodes/readAll?user=${i}`)}createLedgerCodes(i,a,s,u,c,m){return this.httpClient.post(this.url+"/LedgerCodes/create",{LELEGC:i,LELEGS:a,LEDESC:s,LECC:u,LECSFX:c,user:m}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}updateLedgerCodes(i,a,s,u,c,m){return this.httpClient.put(this.url+"/LedgerCodes/update",{LELEGC:i,LELEGS:a,LEDESC:s,LECC:u,LECSFX:c,user:m}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}deleteLedgerCodes(i,a,s){return this.httpClient.delete(this.url+`/LedgerCodes/delete?user=${i}&LedgerCode=${a}&LedgerSubCode=${s}`)}LedgerCodesConsolidate(i,a,s,u){return this.httpClient.put(this.url+"/LedgerCodes/consolidate",{LedgerCode1:i,LedgerSubCode1:a,LedgerCode2:s,LedgerSubCode2:u}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}getLCTransactions(i,a,s,u,c){return this.httpClient.get(this.url+`/LedgerCodes/transactions/read?user=${i}&LedgerCode=${a}&LedgerSubCode=${s}&recordsPerPage=${u}&pageNo=${c}`)}updateLcTransactions(i,a,s,u,c,m,h,g){return this.httpClient.put(this.url+"/LedgerCodes/transactions/update",{user:i,InvoiceNum:a,SequenceNum:s,InvoiceDate:u,LineAmount:c,LedgerCode:m,LedgerSubCode:h,Building:g}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}getLctInvInquiry(i,a){return this.httpClient.get(this.url+`/LedgerCodes/transactions/InvInquiry/read?user=${i}&InvoiceNum=${a}`)}getLctAdjInquiry(i,a){return this.httpClient.get(this.url+`/LedgerCodes/transactions/AdjInquiry/read?user=${i}&InvoiceNum=${a}`)}getLCAttributes(i,a,s,u){return this.httpClient.get(this.url+`/LedgerCodes/attributes/read?user=${i}&key=${a}&recordsPerPage=${s}&pageNo=${u}`)}LCAttributesCreate(i,a,s,u,c,m,h,g){return this.httpClient.post(this.url+"/LedgerCodes/attributes/create",{user:i,EAFLID:a,EAKEY:s,EAATRB:u,EAVALU:c,EASTAT:m,EATMST:h,EAUSER:g}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}LCAttributesUpdate(i,a,s,u,c,m,h,g){return this.httpClient.put(this.url+"/LedgerCodes/attributes/update",{EAFLID:i,EAKEY:a,EAATRB:s,EAVALU:u,EASTAT:c,EATMST:m,EAUSER:h,user:g}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}LCAttributesDelete(i,a){return this.httpClient.delete(this.url+`/LedgerCodes/attributes/delete?key=${i}&attribute=${a}`)}RevenueDistReport(i,a,s,u,c,m,h,g,A,v,I,L,D,Z){return this.httpClient.put(this.url+"/LedgerCodes/LedgerCodesRevReport/update",{LedgerCode:i,LedgerCodeSuffix:a,StartDate:s,EndDate:u,StartingCustomer:c,StartingCustomerSuffix:m,StartingCustomerSuffix2:h,EndingCustomer:g,EndingCustomerSuffix:A,EndingCustomerSuffix2:v,StartingBuildingNumber:I,EndingBuildingNumber:L,OutPut:D,Email:Z}).pipe((0,C.X)(1),(0,d.K)(this.httpError))}LCRevInquiry(i,a,s,u,c){return this.httpClient.get(this.url+`/LedgerCodes/LCRevInquiry/read?user=${i}&LedgerCode=${a}&LedgerSubCode=${s}&recordsPerPage=${u}&pageNo=${c}`)}ReceivableDetailsRevInquiryForm(i,a,s,u,c,m,h,g,A,v,I,L,D,Z,q){const U=(new T.LE).set("user",i||"").set("WKLEGC",a).set("WKLEGS",s).set("StDate",u).set("EndDate",c).set("Stcust",m).set("Stcustf",h||" ").set("Stcustf2",g||" ").set("Endcust",A).set("Ecustsuf",v||" ").set("Endcstf2",I||" ").set("Stbldng",L||"*FIRST").set("Endbldng",D||"*LAST").set("Output",Z).set("Emailadd",q||" ");return this.httpClient.get(`${this.url}/LedgerCodes/ReceivableDetailsRevInquiry/read`,{params:U})}LedgercodeRevReport(i,a,s,u,c,m,h,g,A,v,I,L,D,Z,q){const U=(new T.LE).set("user",i||"").set("WKLEGC",a).set("WKLEGS",s).set("StDate",u).set("EndDate",c).set("Stcust",m).set("Stcustf",h||" ").set("Stcustf2",g||" ").set("Endcust",A).set("Ecustsuf",v||" ").set("Endcstf2",I||" ").set("Stbldng",L||"*FIRST").set("Endbldng",D||"*LAST").set("Output",Z||"*DISPLAY").set("Emailadd",q||" ");return this.httpClient.get(`${this.url}/LedgerCodes/LedgercodeRevReport/read`,{params:U})}ReceivableDetailsRevInquiry(i,a,s,u,c){const m=(new T.LE).set("user",i||"").set("WKLEGC",a).set("WKLEGS",s).set("StDate",u).set("EndDate",c);return this.httpClient.get(`${this.url}/LedgerCodes/ReceivableDetailsRevInquiry/read`,{params:m})}httpError(i){let a="";return a=i.error instanceof ErrorEvent?i.error.message:`Error Code: ${i.status}\nMessage: ${i.message}`,console.log(a),(0,E._)(()=>new Error(a))}}return _.\u0275fac=function(i){return new(i||_)(S.LFG(T.eN))},_.\u0275prov=S.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);