"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9227],{19227:(I,g,s)=>{s.r(g),s.d(g,{CustomerStmtPaymentsComponent:()=>Z});var a=s(24006),c=s(86385),O=s(70879),A=s(35226),E=s.n(A),r=s(71884),t=s(94650),h=s(19132),D=s(5032),S=s(36895),P=s(4859),C=s(59549),m=s(44144),f=s(73546),n=s(39505);function i(u,d){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," As Of Date format. Use MMDDYY or select from dropdown values. "),t.qZA())}function _(u,d){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," As Of Date is required. "),t.qZA())}function v(u,d){1&u&&(t.TgZ(0,"mat-error"),t._uU(1," Starting Customer must be a number with up to 4 digits or *FIRST. "),t.qZA())}function U(u,d){1&u&&(t.TgZ(0,"mat-error"),t._uU(1,' Ending Customer must be a number with up to 4 digits or *LAST". '),t.qZA())}function y(u,d){1&u&&(t.TgZ(0,"mat-form-field",18)(1,"mat-label"),t._uU(2,"Email:"),t.qZA(),t._UZ(3,"input",19),t.qZA())}let Z=(()=>{class u{constructor(e,o,l,p){this.fb=e,this.router=o,this.route=l,this.AccountingReportsService=p,this.placeholder="MMDDYY",this.AsOfDateOptions=["*TODAY"],this.StartingCustomerOptions=["*FIRST"],this.EndingCustomerOptions=["*LAST"],this.SpecialAttributeOptions=["*NONE"],this.SpecialAttributevalueOptions=["*NONE"],this.OutputOptions=["*PRINT","*EMAIL"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({AsOfDate:[this.AsOfDateOptions[0],[a.kI.required,this.dateOrPredefinedValidator()]],StartingCustomer:[this.StartingCustomerOptions[0],[this.startingCustomerValidator()]],StartingCustomerSuffix:"",StartingCustomerSuffix2:"",EndingCustomer:[this.EndingCustomerOptions[0],[this.endingCustomerValidator()]],EndingCustomerSuffix:"",EndingCustomerSuffix2:"",OutPut:[this.OutputOptions[0]],Email:""}),this.form.get("AsOfDate")?.valueChanges.pipe((0,r.x)()).subscribe(()=>{this.form.get("AsOfDate")?.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}),this.form.get("OutPut")?.valueChanges.subscribe(e=>{this.FileextensionContactype()||this.form.get("EMAIL")?.setValue("")})}FileextensionContactype(){return"*EMAIL"===this.form.get("OutPut")?.value}dateOrPredefinedValidator(){return e=>{const o=e.value?.trim();return[...this.AsOfDateOptions].includes(o)||/^(0[1-9]|1[0-2])([0-2][0-9]|3[01])\d{2}$/.test(o)?null:{invalidDate:!0}}}convertMMDDYYtoYYYYMMDD(e){if(!e||this.AsOfDateOptions.includes(e)||/^\d{4}-\d{2}-\d{2}$/.test(e)||!/^(0[1-9]|1[0-2])([0-2][0-9]|3[01])\d{2}$/.test(e))return e;const o=e.substring(0,2),l=e.substring(2,4);return`20${e.substring(4,6)}-${o}-${l}`}startingCustomerValidator(){return e=>{const o=e.value;return/^\d{0,4}$/.test(o)&&o.length<=4||"*FIRST"===o?null:{invalidStartingCustomer:!0}}}endingCustomerValidator(){return e=>{const o=e.value;return/^\d{0,4}$/.test(o)&&o.length<=4||"*LAST"===o?null:{invalidEndingCustomer:!0}}}CustomerStmtPayment(){if(this.CustomerStmtPaymentsSubscription&&(this.CustomerStmtPaymentsSubscription.unsubscribe(),this.CustomerStmtPaymentsSubscription=null),this.form.invalid)return void this.form.markAllAsTouched();const e={...this.form.value};this.AsOfDateOptions.includes(e.AsOfDate)||(e.AsOfDate=this.convertMMDDYYtoYYYYMMDD(e.AsOfDate)),"*FIRST"===e.StartingCustomer&&(e.StartingCustomer="0"),"*LAST"===e.EndingCustomer&&(e.EndingCustomer="9999"),this.CustomerStmtPaymentsSubscription&&this.CustomerStmtPaymentsSubscription.unsubscribe(),this.CustomerStmtPaymentsSubscription=this.AccountingReportsService.CustomerStmtPayment(e.AsOfDate,e.StartingCustomer,e.StartingCustomerSuffix,e.StartingCustomerSuffix2,e.EndingCustomer,e.EndingCustomerSuffix,e.EndingCustomerSuffix2,e.OutPut,e.Email).subscribe(o=>{const p=o[0].data[o[0].data.length-1].value;"Successfully Submitted"===p?(this.successMessage(p),this.router.navigate(["/main-nav/CustomerStmtPayments/read"])):this.failureMessage(p)})}successMessage(e){E().fire(e,"","success")}failureMessage(e){E().fire(e,"","error")}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(a.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(D.A))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-customer-stmt-payments"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[t.jDz],decls:35,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline","formControlName","AsOfDate","placeholder","MMDDYY","label","As of Date",3,"options"],[4,"ngIf"],["appearance","outline","formControlName","StartingCustomer","label","Starting Customer ",3,"options"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","StartingCustomerSuffix"],["matInput","","formControlName","StartingCustomerSuffix2"],["appearance","outline","formControlName","EndingCustomer","label","Ending Customer ",3,"options"],["matInput","","formControlName","EndingCustomerSuffix"],["matInput","","formControlName","EndingCustomerSuffix2"],["appearance","outline","formControlName","OutPut","label","Output",1,"full-width",3,"options"],["appearance","outline","class","full-width",4,"ngIf"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"],["appearance","outline",1,"full-width"],["matInput","","formControlName","Email","placeholder","Enter your email"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Customer Statement with Pay History "),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5),t._UZ(8,"custom-input-autocomplete",6),t.YNc(9,i,2,0,"mat-error",7),t.YNc(10,_,2,0,"mat-error",7),t._UZ(11,"custom-input-autocomplete",8),t.YNc(12,v,2,0,"mat-error",7),t.TgZ(13,"mat-form-field",9)(14,"mat-label"),t._uU(15," Starting Customer Suffix "),t.qZA(),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"mat-form-field",9)(18,"mat-label"),t._uU(19," Starting Customer Suffix II "),t.qZA(),t._UZ(20,"input",11),t.qZA(),t._UZ(21,"custom-input-autocomplete",12),t.YNc(22,U,2,0,"mat-error",7),t.TgZ(23,"mat-form-field",9)(24,"mat-label"),t._uU(25,"Ending Customer Suffix"),t.qZA(),t._UZ(26,"input",13),t.qZA(),t.TgZ(27,"mat-form-field",9)(28,"mat-label"),t._uU(29,"Ending Customer Suffix II"),t.qZA(),t._UZ(30,"input",14),t.qZA(),t._UZ(31,"custom-input-autocomplete",15),t.YNc(32,y,4,0,"mat-form-field",16),t.qZA()(),t.TgZ(33,"button",17),t.NdJ("click",function(){return o.CustomerStmtPayment()}),t._uU(34,"Submit"),t.qZA()()()()),2&e){let l,p,M,T;t.xp6(5),t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("options",o.AsOfDateOptions),t.xp6(1),t.Q6J("ngIf",(null==(l=o.form.get("AsOfDate"))?null:l.touched)&&(null==(l=o.form.get("AsOfDate"))?null:l.hasError("invalidDate"))),t.xp6(1),t.Q6J("ngIf",(null==(p=o.form.get("AsOfDate"))?null:p.touched)&&(null==(p=o.form.get("AsOfDate"))?null:p.hasError("required"))),t.xp6(1),t.Q6J("options",o.StartingCustomerOptions),t.xp6(1),t.Q6J("ngIf",null==(M=o.form.get("StartingCustomer"))?null:M.hasError("invalidStartingCustomer")),t.xp6(9),t.Q6J("options",o.EndingCustomerOptions),t.xp6(1),t.Q6J("ngIf",null==(T=o.form.get("EndingCustomer"))?null:T.hasError("invalidEndingCustomer")),t.xp6(9),t.Q6J("options",o.OutputOptions),t.xp6(1),t.Q6J("ngIf",o.FileextensionContactype())}},dependencies:[O.m,S.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,P.lW,C.TO,C.KE,C.hX,m.Nt,f.a8,f.dk,f.dn,f.n5,c.j,n.L]}),u})()},39505:(I,g,s)=>{s.d(g,{L:()=>C});var a=s(24006),c=s(59549),O=s(69751),A=s(68675),E=s(54004),r=s(94650),t=s(36895),h=s(47957),D=s(3238),S=s(44144);function P(m,f){if(1&m&&(r.TgZ(0,"mat-option",4),r._uU(1),r.qZA()),2&m){const n=f.$implicit;r.Q6J("value",n),r.xp6(1),r.Oqu(n)}}let C=(()=>{class m{constructor(n){this.fb=n,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=i=>{},this.onChange=i=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new O.y,this.filteredOptions=this.control.valueChanges.pipe((0,A.O)(this.value),(0,E.U)(i=>this._filter(i)))}setDescribedByIds(n){}onContainerClick(n){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(n){null!=n&&(this.control.setValue(n),this.value=n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}_filter(n){if(null==n||0==n.length)return this.options;const i=n.toLowerCase(),_=this.options.filter(v=>v.toLowerCase().includes(i));return!this.disabled&&1===_.length&&this.control.value!=_[0]&&n.length>=(this.previousValue?.length??0)&&this.control.setValue(_[0]),this.onChange(this.control.value),this.previousValue=this.control.value,_}}return m.\u0275fac=function(n){return new(n||m)(r.Y36(a.qu))},m.\u0275cmp=r.Xpm({type:m,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(n,i){2&n&&r.uIk("aria-describedby",i.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[r._Bn([{provide:a.JU,multi:!0,useExisting:m},{provide:c.Eo,useExisting:m}],[{provide:a.gN,useExisting:a.sg}])],decls:8,vars:9,consts:[[3,"appearance"],["matInput","",3,"id","placeholder","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,i){if(1&n&&(r.TgZ(0,"mat-form-field",0)(1,"mat-label"),r._uU(2),r.qZA(),r._UZ(3,"input",1),r.TgZ(4,"mat-autocomplete",null,2),r.YNc(6,P,2,2,"mat-option",3),r.ALo(7,"async"),r.qZA()()),2&n){const _=r.MAs(5);r.Q6J("appearance",i.appearance),r.xp6(2),r.Oqu(i.label),r.xp6(1),r.Q6J("id",i.id)("placeholder",i.placeholder)("formControl",i.control)("matAutocomplete",_),r.xp6(3),r.Q6J("ngForOf",r.lcZ(7,7,i.filteredOptions))}},dependencies:[t.sg,a.Fj,a.JJ,a.oH,h.XC,h.ZL,D.ey,c.KE,c.hX,S.Nt,t.Ov]}),m})()}}]);