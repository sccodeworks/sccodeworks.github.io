"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[4417],{94417:(N,Z,c)=>{c.r(Z),c.d(Z,{LoadDiagramWorkWithDockSchedulerComponent:()=>x});var M=c(98739),l=c(7155),s=c(70879),t=c(94650),U=c(19132),B=c(15627),C=c(24006),L=c(72122),y=c(65412),r=c(97392),o=c(4859),i=c(59549),h=c(44144),u=c(73546);function d(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Pos"),t.qZA())}function m(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Pos)}}function D(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"PAllet"),t.qZA())}function _(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Pallet)}}function S(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Doc"),t.qZA())}function k(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Doc)}}function g(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Stk"),t.qZA())}function f(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Stk)}}function E(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Loaded By"),t.qZA())}function T(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.LoadedBy)}}function P(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Date"),t.qZA())}function A(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Date)}}function v(e,a){1&e&&(t.TgZ(0,"th",23),t._uU(1,"Time"),t.qZA())}function K(e,a){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.Time)}}function I(e,a){1&e&&t._UZ(0,"tr",25)}function R(e,a){1&e&&t._UZ(0,"tr",26)}let x=(()=>{class e{constructor(n,p,W,O,Y,X){this.router=n,this.iHeaderSvc=p,this.fb=W,this.route=O,this.WorkWithDockSchedulerService=Y,this.matDialog=X,this.displayedColumns=["Pos","PAllet","Doc","Stk","LoadedBy","Date","Time"],this.dataSource=[],this.duplicateSource=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({DSAPPT:[""],Carrier:[""],Pallets:[""]}),this.LoadDiagram()}LoadDiagram(){this.WorkWithDockSchedulerService.LoadDiagram().subscribe(n=>{this.result=n,console.log(this.result);var p=this.result.data[1].value;console.log(p);var W=JSON.parse(p);if(console.log(W),this.dataSource=new l.by(W.returnedData),console.log(this.dataSource),W.returnedData.length>0){const O=W.returnedData[0];this.form.patchValue({DSAPPT:O.DSAPPT,Carrier:O.Carrier,Pallets:O.Pallets})}this.dataSource.paginator=this.paginator})}onBack(){this.router.navigate(["/main-nav/WorkWithDockScheduler/read"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(U.F0),t.Y36(B.X),t.Y36(C.qu),t.Y36(U.gz),t.Y36(L.A),t.Y36(y.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-load-diagram-work-with-dock-scheduler"]],viewQuery:function(n,p){if(1&n&&t.Gf(M.NW,5),2&n){let W;t.iGM(W=t.CRH())&&(p.paginator=W.first)}},standalone:!0,features:[t.jDz],decls:47,vars:4,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","DSAPPT",2,"text-transform","uppercase"],["matInput","","formControlName","Carrier",2,"text-transform","uppercase"],["matInput","","formControlName","Pallets",2,"text-transform","uppercase"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Pos"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","PAllet"],["matColumnDef","Doc"],["matColumnDef","Stk"],["matColumnDef","LoadedBy"],["matColumnDef","Date"],["matColumnDef","Time"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,p){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return p.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Load Diagram"),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Appointment "),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"mat-form-field",7)(16,"mat-label"),t._uU(17,"Carrier "),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Pallets "),t.qZA(),t._UZ(22,"input",10),t.qZA()()()()(),t.TgZ(23,"table",11),t.ynx(24,12),t.YNc(25,d,2,0,"th",13),t.YNc(26,m,2,1,"td",14),t.BQk(),t.ynx(27,15),t.YNc(28,D,2,0,"th",13),t.YNc(29,_,2,1,"td",14),t.BQk(),t.ynx(30,16),t.YNc(31,S,2,0,"th",13),t.YNc(32,k,2,1,"td",14),t.BQk(),t.ynx(33,17),t.YNc(34,g,2,0,"th",13),t.YNc(35,f,2,1,"td",14),t.BQk(),t.ynx(36,18),t.YNc(37,E,2,0,"th",13),t.YNc(38,T,2,1,"td",14),t.BQk(),t.ynx(39,19),t.YNc(40,P,2,0,"th",13),t.YNc(41,A,2,1,"td",14),t.BQk(),t.ynx(42,20),t.YNc(43,v,2,0,"th",13),t.YNc(44,K,2,1,"td",14),t.BQk(),t.YNc(45,I,1,0,"tr",21),t.YNc(46,R,1,0,"tr",22),t.qZA()()),2&n&&(t.xp6(8),t.Q6J("formGroup",p.form),t.xp6(15),t.Q6J("dataSource",p.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",p.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",p.displayedColumns))},dependencies:[s.m,C._Y,C.Fj,C.JJ,C.JL,C.sg,C.u,r.Hw,o.lW,i.KE,i.hX,h.Nt,u.a8,u.dk,u.dn,u.n5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk],styles:[".button[_ngcontent-%COMP%]{color:#fff}"]}),e})()},72122:(N,Z,c)=>{c.d(Z,{A:()=>C});var M=c(80529),l=c(75625),s=c(70262),t=c(62843),U=c(92340),B=c(94650);let C=(()=>{class L{constructor(r){this.httpClient=r,this.url=U.N.API_BASE_URL1,this.httpHeader={headers:new M.WM({"Content-Type":"application/json"})}}getWDockScheduler(){return this.httpClient.get(this.url+"/WDockScheduler/read")}getWDockSchedulerDetails(){return this.httpClient.get(this.url+"/WDockScheduler/WDockSchedulerDetails/read")}WDockSchedulerCreate(r,o,i,h,u,d,m,D,_,S,k,g,f,E,T,P,A){return this.httpClient.post(this.url+"/WDockScheduler/create",{DCAPPT:r,DSBLDG:o,DSINOU:i,DSSCAC:h,SRQDT:u,SRQTM:d,DSATYP:m,DSLTYP:D,DSDURN:_,DSQTY:S,DSWGHT:k,DSTRAL:g,DSPRTY:f,DSCONT:E,DSCNPH:T,EMAIL:P,user:A}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}WDockSchedulerUpdate(r,o,i,h,u,d,m,D,_,S,k,g,f,E,T,P,A){return this.httpClient.put(this.url+"/WDockScheduler/update",{DCAPPT:r,DSBLDG:o,DSINOU:i,DSSCAC:h,SRQDT:u,SRQTM:d,DSATYP:m,DSLTYP:D,DSDURN:_,DSQTY:S,DSWGHT:k,DSTRAL:g,DSPRTY:f,DSCONT:E,DSCNPH:T,EMAIL:P,user:A}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}WDockSchedulerDetailsCreate(r,o,i,h,u,d,m){return this.httpClient.post(this.url+"/WDockScheduler/WDockSchedulerDetailsCreate/create",{DOCN:r,D1DOCT:o,D1ACCT:i,D1REFN:h,D1PRO:u,D1PO:d,user:m}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}WDockSchedulerDetailsDelete(r,o){return this.httpClient.delete(this.url+`/WDockScheduler/WDockSchedulerDetailsDelete/delete?user=${r}&DCAPPT=${o}`)}WDockSchedulerDelete(r,o){return this.httpClient.delete(this.url+`/WDockScheduler/delete?user=${r}&DCAPPT=${o}`)}CommentsWDockScheduler(){return this.httpClient.get(this.url+"/WDockScheduler/read")}getCompleteDockScheduler(){return this.httpClient.get(this.url+"/WDockScheduler/read/WDockSchedulerComplete")}getAppointmentTimeSlot(){return this.httpClient.get(this.url+"/WDockScheduler/AppointmentTimeSlot/read")}StartStopTime(r,o,i,h,u,d,m,D,_,S,k,g,f,E,T,P,A,v,K,I,R,x,e,a){return this.httpClient.post(this.url+"/WDockScheduler/StartStoptime/create",{DSAPPT:r,DSBLDG:o,DSINOU:i,ATYPD:h,DSLTYP:u,DSSCAC:d,SAPDT:m,SAPTM:D,DSLOCN:_,DSTRAL:S,DSBRK1:k,DSBRK2:g,DSSEA1:f,DSSEA2:E,CDATE:T,CTIME:P,STRDT:A,STRTM:v,ENDDT:K,CheckOutDate:I,CheckOutTime:R,DSDURN:x,ACDUR:e,user:a}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}DriverIn(r,o,i,h,u,d,m,D,_,S,k,g,f,E,T,P,A,v){return this.httpClient.post(this.url+"/WDockScheduler/DriverCheckIn/create",{DSAPPT:r,DSBLDG:o,DSINOU:i,ATYPD:h,LoadType:u,DSSCAC:d,SAPDT:m,DRIVR:D,DRVRL:_,TrailerNo:S,Sealnumberone:k,Sealnumbertwo:g,Brokenone:f,Brokentwo:E,CheckInDate:T,CheckInTime:P,ActualDoor:A,user:v}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}Cancel(r,o,i,h,u,d,m,D,_){return this.httpClient.put(this.url+"/WDockScheduler/CancelAppointmnent/update",{DSAPPT:r,DSBLDG:o,DSINOU:i,ATYPD:h,DSLTYP:u,DSSCAC:d,SAPDT:m,CNLBY:D,user:_}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}getStopTimeSlot(){return this.httpClient.get(this.url+"/WDockScheduler/StopTimeSlot/read")}getEventSynopsis(){return this.httpClient.get(this.url+"/WDockScheduler/EventSynopsis/read")}LoadOut(r,o,i,h){return this.httpClient.post(this.url+"/WDockScheduler/LoadOut/create",{DSAPPT:r,LOCN:o,TRAL:i,user:h}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}LoadDiagram(){return this.httpClient.get(this.url+"/WDockScheduler/LoadDiagram/read")}DriverCheckOut(){return this.httpClient.get(this.url+"/WDockScheduler/DriverCheckOut/read")}SplitAppt(r,o,i,h,u){return this.httpClient.post(this.url+"/WDockScheduler/SplitAppt/create",{AppointmentNumber:r,SCACCode:o,TrailerRailCarNumber:i,OrderReferenceNumber:h,user:u}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}AutoReceive(r,o,i){return this.httpClient.post(this.url+"/WDockScheduler/AutoReceive/create",{Appointment:r,Location:o,user:i}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}VerifyLoad(r,o,i,h){return this.httpClient.post(this.url+"/WDockScheduler/VerifyLoad/create",{DSAPPT:r,LOCN:o,TRAL:i,user:h}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}LoadHistory(){return this.httpClient.get(this.url+"/WDockScheduler/LoadHistory/read")}WSynopsis(){return this.httpClient.get(this.url+"/WDockScheduler/WSynopsis/read")}PostTrailer(r,o,i){return this.httpClient.put(this.url+"/WDockScheduler/TrailerInspection/update",{AppointmentNumber:r,PerformSafetyCheck:o,user:i}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}MetricsInquiry(){return this.httpClient.get(this.url+"/WDockScheduler/MetricsInquiry/read")}SignAllBills(r,o,i,h,u){return this.httpClient.put(this.url+"/WDockScheduler/SignAllBills/update",{DSAPPT:r,TRAL:o,TotalBills:i,TotalSigned:h,user:u}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}getStartTime(){return this.httpClient.get(this.url+"/WDockScheduler/StartTime/read")}CoreLoadout(){return this.httpClient.get(this.url+"/WDockScheduler/CoreLoad/read")}ReprintDrvLb(r,o){return this.httpClient.post(this.url+"/WDockScheduler/ReprintDrvLb/create",{OutputQueue:r,user:o}).pipe((0,l.X)(1),(0,s.K)(this.httpError))}httpError(r){let o="";return o=r.error instanceof ErrorEvent?r.error.message:`Error Code: ${r.status}\nMessage: ${r.message}`,console.log(o),(0,t._)(()=>new Error(o))}}return L.\u0275fac=function(r){return new(r||L)(B.LFG(M.eN))},L.\u0275prov=B.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()}}]);