"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3483,1860,3765],{51860:(M,E,a)=>{a.d(E,{c:()=>$});var c=a(80529),i=a(75625),u=a(70262),d=a(62843),C=a(92340),_=a(94650);let $=(()=>{class h{constructor(t){this.httpClient=t,this.url=C.N.API_BASE_URL,this.httpHeader={headers:new c.WM({"Content-Type":"application/json"})}}getPayments(t,e,r,n,s,p,m,l,o,y){return this.httpClient.get(this.url+`/Payments/read?user=${t}&customer=${e}&customersuffixone=${r}&customersuffixtwo=${n}&checknumber=${s}&startdate=${p}&enddate=${m}&paymentno=${l}&refno=${o}&status=${y}`)}getPaymentInquiry(t,e){return this.httpClient.get(this.url+`/Payments/read/Inquiry?user=${t}&paymentno=${e}`)}getPaymentDetailInquiry(t,e){return this.httpClient.get(this.url+`/Payments/read/Detail/Inquiry?user=${t}&paymentno=${e}`)}getPaymentApply(t,e){return this.httpClient.get(this.url+`/Payments/read/Apply?user=${t}&PaymentNumber=${e}`)}getPaymentApplyDetail(t,e){return this.httpClient.get(this.url+`/Payments/read/Apply/Details?user=${t}&PaymentNumber=${e}`)}createpayments(t,e,r,n,s,p,m,l,o,y,P){return this.httpClient.post(this.url+"/Payments/create",{PHTDAT:t,PHCUST:e,PHCSFX:r,PHCSF2:n,PHCHK:s,PHREF:p,PHDESC:m,PHAMT:l,PHDATE:o,PHDDAT:y,user:P}).pipe((0,i.X)(1),(0,u.K)(this.httpError))}updatepayments(t,e,r,n,s,p,m,l,o,y,P,D,f,v){return this.httpClient.put(this.url+"/Payments/update",{PHPAY:t,PHTDAT:e,PHCUST:r,PHCSFX:n,PHCSF2:s,PHCHK:p,PHREF:m,PHDESC:l,PHAMT:o,PHDATE:y,PHDDAT:P,PHSTAT:D,PHTRNC:f,user:v}).pipe((0,i.X)(1),(0,u.K)(this.httpError))}getPaymentComment(t,e){return this.httpClient.get(this.url+`/Payments/comments/read?user=${t}&key=${e}`)}updateComment(t,e,r,n,s){return this.httpClient.put(this.url+"/Payments/comments/update",{user:t,fileID:e,key:r,sub:n,comment:s}).pipe((0,i.X)(1),(0,u.K)(this.httpError))}createComment(t,e,r,n,s){return this.httpClient.post(this.url+"/Payments/comments/create",{user:t,fileID:e,key:r,sub:n,comment:s}).pipe((0,i.X)(1),(0,u.K)(this.httpError))}deleteComment(t,e,r,n){return this.httpClient.delete(this.url+`/Payments/comments/delete?user=${t}&fieldID=${e}&key=${r}&sub=${n}`)}PaymentsPrint(t,e){return this.httpClient.put(this.url+"/Payments/Print",{PaymentNumber:t,user:e}).pipe((0,i.X)(1),(0,u.K)(this.httpError))}PaymentsRecal(t,e){return this.httpClient.put(this.url+"/Payments/Recalculate",{PaymentNumber:t,user:e}).pipe((0,i.X)(1),(0,u.K)(this.httpError))}PaymentDelete(t,e){return this.httpClient.delete(this.url+`/Payments/delete?user=${t}&PaymentNum=${e}`)}httpError(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(e),(0,d._)(()=>new Error(e))}}return h.\u0275fac=function(t){return new(t||h)(_.LFG(c.eN))},h.\u0275prov=_.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);