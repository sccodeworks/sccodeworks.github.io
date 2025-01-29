"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[4690],{94690:(b,E,r)=>{r.r(E),r.d(E,{PaymentRegisterComponent:()=>W});var s=r(24006),c=r(35226),h=r.n(c),v=r(50692),A=r(70879),t=r(94650),g=r(19132),C=r(5032),O=r(36895),T=r(4859),f=r(59549),S=r(44144),u=r(73546),d=r(39505);function o(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Start Date is required. "),t.qZA())}function m(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use DD-MM-YYYY. "),t.qZA())}function p(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," End Date is required. "),t.qZA())}function I(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use DD-MM-YYYY. "),t.qZA())}function M(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Starting Payment must be a number with up to 4 digits or *FIRST. "),t.qZA())}function U(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Ending Payment must be a number with up to 7 digits or *LAST. "),t.qZA())}function N(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Starting Customer must be a number with up to 4 digits or *FIRST. "),t.qZA())}function L(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,' Ending Customer must be a number with up to 4 digits or *LAST". '),t.qZA())}function V(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1,"File Extension is required."),t.qZA())}function F(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1,"Please enter a valid File Extension."),t.qZA())}function J(i,l){if(1&i&&(t.TgZ(0,"mat-error"),t.YNc(1,V,2,0,"div",8),t.YNc(2,F,2,0,"div",8),t.qZA()),2&i){const n=t.oxw(2);let e,a;t.xp6(1),t.Q6J("ngIf",null==(e=n.form.get("FileExtension"))||null==e.errors?null:e.errors.required),t.xp6(1),t.Q6J("ngIf",null==(a=n.form.get("FileExtension"))||null==a.errors?null:a.errors.FileExtension)}}function B(i,l){if(1&i&&(t.TgZ(0,"custom-input-autocomplete",28),t.YNc(1,J,3,2,"mat-error",8),t.qZA()),2&i){const n=t.oxw();let e;t.Q6J("options",n.fileExtensionOptions),t.xp6(1),t.Q6J("ngIf",(null==(e=n.form.get("FileExtension"))?null:e.invalid)&&((null==(e=n.form.get("FileExtension"))?null:e.dirty)||(null==(e=n.form.get("FileExtension"))?null:e.touched)))}}function Y(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1,"Email is required."),t.qZA())}function Q(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1,"Please enter a valid email address."),t.qZA())}function K(i,l){if(1&i&&(t.TgZ(0,"mat-error"),t.YNc(1,Y,2,0,"div",8),t.YNc(2,Q,2,0,"div",8),t.qZA()),2&i){const n=t.oxw(2);let e,a;t.xp6(1),t.Q6J("ngIf",null==(e=n.form.get("Email"))||null==e.errors?null:e.errors.required),t.xp6(1),t.Q6J("ngIf",null==(a=n.form.get("Email"))||null==a.errors?null:a.errors.email)}}function q(i,l){if(1&i&&(t.TgZ(0,"mat-form-field",6)(1,"mat-label"),t._uU(2,"Email:"),t.qZA(),t._UZ(3,"input",29),t.YNc(4,K,3,2,"mat-error",8),t.qZA()),2&i){const n=t.oxw();let e;t.xp6(4),t.Q6J("ngIf",(null==(e=n.form.get("Email"))?null:e.invalid)&&((null==(e=n.form.get("Email"))?null:e.dirty)||(null==(e=n.form.get("Email"))?null:e.touched)))}}let W=(()=>{class i{constructor(n,e,a,_){this.fb=n,this.router=e,this.route=a,this.AccountingReportsService=_,this.reportOrderOptions=["*PAYMENT","*DATE","*CUSTOMER","*PAYMENT","*DATE","*CUSTOMER"],this.StartingInvoiceOptions=["*FIRST"],this.EndingInvoiceOptions=["*LAST"],this.StartingCustomerOptions=["*FIRST"],this.EndingCustomerOptions=["*LAST"],this.StartingBuildingNumberOptions=["*FIRST"],this.EndingBuildingNumberOptions=["*LAST"],this.SpecialAttributeOptions=["*NONE"],this.SpecialAttributevalueOptions=["*NONE"],this.OutPutOptions=["*REPORT","*EMAIL"],this.fileExtensionOptions=["CSV","TXT","HTML","XLM"],this.ApplicationDetailsOptions=["*YES","*NO"],this.ApplicationTypeOptions=["*PAYMENTS","*CREDITS","*ALL"]}ngOnDestroy(){this.PaymentRegisterSubscription&&this.PaymentRegisterSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({StartDate:["",[s.kI.required,this.dateValidator()]],EndDate:["",[s.kI.required,this.dateValidator()]],StartingInvoice:[this.StartingInvoiceOptions[0],[this.startingInvoiceValidator()]],EndingInvoice:[this.EndingInvoiceOptions[0],[this.endingInvoiceValidator()]],StartingCustomer:[this.StartingCustomerOptions[0],[this.startingCustomerValidator()]],EndingCustomer:[this.EndingCustomerOptions[0],[this.endingCustomerValidator()]],StartingCustomerSuffix:"",StartingCustomerSuffix2:"",EndingCustomerSuffix:"",EndingCustomerSuffix2:"",ReportOrder:[this.reportOrderOptions[0]],ApplicationDetails:[this.ApplicationDetailsOptions[0]],ApplicationType:[this.ApplicationTypeOptions[0]],SpecialAttribute:[this.SpecialAttributeOptions[0]],SpecialAttributeValue:[this.SpecialAttributevalueOptions[0]],OutPut:[this.OutPutOptions[0]],FileExtension:"",Email:""}),this.form.get("OutPut")?.valueChanges.subscribe(n=>{this.FileextensionContactype()||this.form.get("FileExtension")?.setValue(""),this.shouldDisplayEmailField()||this.form.get("Email")?.setValue("")})}FileextensionContactype(){return"*EMAIL"===this.form.get("OutPut")?.value}shouldDisplayEmailField(){return"*EMAIL"===this.form.get("OutPut")?.value}dateValidator(){return n=>/^\d{4}-\d{2}-\d{2}$/.test(n.value)?null:{invalidDate:!0}}startingInvoiceValidator(){return n=>{const e=n.value;return/^\d{0,4}$/.test(e)&&e.length<=4||"*FIRST"===e?null:{invalidStartingInvoice:!0}}}endingInvoiceValidator(){return n=>{const e=n.value;return/^\d{0,7}$/.test(e)&&e.length<=4||"*LAST"===e?null:{invalidEndingInvoice:!0}}}startingCustomerValidator(){return n=>{const e=n.value;return/^\d{0,4}$/.test(e)&&e.length<=4||"*FIRST"===e?null:{invalidStartingCustomer:!0}}}endingCustomerValidator(){return n=>{const e=n.value;return/^\d{0,4}$/.test(e)&&e.length<=4||"*LAST"===e?null:{invalidEndingCustomer:!0}}}endingBuildingNumber(){return n=>{const e=n.value;return/^\d{0,3}$/.test(e)&&e.length<=4||"*LAST"===e?null:{invalidEndingBuildingNumber:!0}}}PaymentRegister(){const n=this.form.value;"*FIRST"===n.StartingInvoice&&(n.StartingInvoice="0000000"),"*LAST"===n.EndingInvoice&&(n.EndingInvoice="9999999"),"*FIRST"===n.StartingCustomer&&(n.StartingCustomer="0000"),"*LAST"===n.EndingCustomer&&(n.EndingCustomer="9999"),this.PaymentRegisterSubscription&&this.PaymentRegisterSubscription.unsubscribe(),this.PaymentRegisterSubscription=this.AccountingReportsService.PaymentRegister(n.StartDate,n.EndDate,n.StartingInvoice,n.EndingInvoice,n.StartingCustomer,n.StartingCustomerSuffix,n.StartingCustomerSuffix2,n.EndingCustomer,n.EndingCustomerSuffix,n.EndingCustomerSuffix2,n.ReportOrder,n.ApplicationDetails,n.ApplicationType,n.SpecialAttribute,n.SpecialAttributeValue,n.OutPut,n.FileExtension,n.Email).subscribe(e=>{const _=e[0].data[e[0].data.length-1].value;"Successfully Submitted"===_?(this.successMessage(_),this.router.navigate(["/main-nav/Payment-register/read"])):this.failureMessage(_)})}successMessage(n){h().fire(n,"","success")}failureMessage(n){h().fire(n,"","error")}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(s.qu),t.Y36(g.F0),t.Y36(g.gz),t.Y36(C.A))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-payment-register"]],standalone:!0,features:[t.jDz],decls:54,vars:22,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["type","date","matInput","","formControlName","StartDate"],[4,"ngIf"],["type","date","matInput","","formControlName","EndDate"],["appearance","outline","formControlName","StartingInvoice","label","Starting Payment",3,"options"],["appearance","outline","formControlName","EndingInvoice","label","Ending Payment",3,"options"],["appearance","outline","formControlName","StartingCustomer","label","Starting Customer",3,"options"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","StartingCustomerSuffix"],["matInput","","formControlName","StartingCustomerSuffix2"],["appearance","outline","formControlName","EndingCustomer","label","Ending Customer",3,"options"],["matInput","","formControlName","EndingCustomerSuffix"],["matInput","","formControlName","EndingCustomerSuffix2"],["appearance","outline","formControlName","ReportOrder","label","Report Order",1,"full-width",3,"options"],["appearance","outline","formControlName","ApplicationDetails","label","Application Details",1,"full-width",3,"options"],["appearance","outline","formControlName","ApplicationType","label","Types of Transactions to List",1,"full-width2",3,"options"],["appearance","outline","formControlName","SpecialAttribute","label","Special Attribute",1,"full-width",3,"options"],["appearance","outline","formControlName","SpecialAttributeValue","label","Special Attribute value",1,"full-width",3,"options"],["appearance","outline","formControlName","OutPut","label","Output",1,"full-width",3,"options"],["appearance","outline","class","full-width","formControlName","FileExtension","label","File Extension",3,"options",4,"ngIf"],["appearance","outline","class","full-width",4,"ngIf"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"disabled"],["appearance","outline","formControlName","FileExtension","label","File Extension",1,"full-width",3,"options"],["matInput","","formControlName","Email","placeholder","Enter your email"]],template:function(n,e){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Payment Register "),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3),t.NdJ("ngSubmit",function(){return e.PaymentRegister()}),t.TgZ(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Start Date:"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,o,2,0,"mat-error",8),t.YNc(13,m,2,0,"mat-error",8),t.qZA(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"End Date"),t.qZA(),t._UZ(17,"input",9),t.YNc(18,p,2,0,"mat-error",8),t.YNc(19,I,2,0,"mat-error",8),t.qZA(),t._UZ(20,"custom-input-autocomplete",10),t.YNc(21,M,2,0,"mat-error",8),t._UZ(22,"custom-input-autocomplete",11),t.YNc(23,U,2,0,"mat-error",8),t._UZ(24,"custom-input-autocomplete",12),t.YNc(25,N,2,0,"mat-error",8),t.TgZ(26,"mat-form-field",13)(27,"mat-label"),t._uU(28,"Starting Customer Suffix"),t.qZA(),t._UZ(29,"input",14),t.qZA(),t.TgZ(30,"mat-form-field",13)(31,"mat-label"),t._uU(32,"Starting Customer Suffix II"),t.qZA(),t._UZ(33,"input",15),t.qZA(),t._UZ(34,"custom-input-autocomplete",16),t.YNc(35,L,2,0,"mat-error",8),t.TgZ(36,"mat-form-field",13)(37,"mat-label"),t._uU(38,"Ending Customer Suffix"),t.qZA(),t._UZ(39,"input",17),t.qZA(),t.TgZ(40,"mat-form-field",13)(41,"mat-label"),t._uU(42,"Ending Customer Suffix II"),t.qZA(),t._UZ(43,"input",18),t.qZA(),t._UZ(44,"custom-input-autocomplete",19)(45,"custom-input-autocomplete",20)(46,"custom-input-autocomplete",21)(47,"custom-input-autocomplete",22)(48,"custom-input-autocomplete",23)(49,"custom-input-autocomplete",24),t.YNc(50,B,2,2,"custom-input-autocomplete",25),t.YNc(51,q,5,1,"mat-form-field",26),t.qZA()(),t.TgZ(52,"button",27),t._uU(53,"Submit"),t.qZA()()()()),2&n){let a,_,P,D,Z,R,y,x;t.xp6(5),t.Q6J("formGroup",e.form),t.xp6(7),t.Q6J("ngIf",null==(a=e.form.get("StartDate"))?null:a.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(_=e.form.get("StartDate"))?null:_.hasError("invalidDate")),t.xp6(5),t.Q6J("ngIf",null==(P=e.form.get("EndDate"))?null:P.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(D=e.form.get("EndDate"))?null:D.hasError("invalidDate")),t.xp6(1),t.Q6J("options",e.StartingInvoiceOptions),t.xp6(1),t.Q6J("ngIf",null==(Z=e.form.get("StartingInvoice"))?null:Z.hasError("invalidStartingInvoice")),t.xp6(1),t.Q6J("options",e.EndingInvoiceOptions),t.xp6(1),t.Q6J("ngIf",null==(R=e.form.get("EndingInvoice"))?null:R.hasError("invalidEndingInvoice")),t.xp6(1),t.Q6J("options",e.StartingCustomerOptions),t.xp6(1),t.Q6J("ngIf",null==(y=e.form.get("StartingCustomer"))?null:y.hasError("invalidStartingCustomer")),t.xp6(9),t.Q6J("options",e.EndingCustomerOptions),t.xp6(1),t.Q6J("ngIf",null==(x=e.form.get("EndingCustomer"))?null:x.hasError("invalidEndingCustomer")),t.xp6(9),t.Q6J("options",e.reportOrderOptions),t.xp6(1),t.Q6J("options",e.ApplicationDetailsOptions),t.xp6(1),t.Q6J("options",e.ApplicationTypeOptions),t.xp6(1),t.Q6J("options",e.SpecialAttributeOptions),t.xp6(1),t.Q6J("options",e.SpecialAttributevalueOptions),t.xp6(1),t.Q6J("options",e.OutPutOptions),t.xp6(1),t.Q6J("ngIf",e.FileextensionContactype()),t.xp6(1),t.Q6J("ngIf",e.shouldDisplayEmailField()),t.xp6(1),t.Q6J("disabled",e.form.invalid)}},dependencies:[A.m,O.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,T.lW,f.TO,f.KE,f.hX,S.Nt,u.a8,u.dk,u.dn,u.n5,v.j,d.L]}),i})()},39505:(b,E,r)=>{r.d(E,{L:()=>S});var s=r(24006),c=r(59549),h=r(69751),v=r(68675),A=r(54004),t=r(94650),g=r(36895),C=r(47957),O=r(3238),T=r(44144);function f(u,d){if(1&u&&(t.TgZ(0,"mat-option",4),t._uU(1),t.qZA()),2&u){const o=d.$implicit;t.Q6J("value",o),t.xp6(1),t.Oqu(o)}}let S=(()=>{class u{constructor(o){this.fb=o,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=m=>{},this.onChange=m=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new h.y,this.filteredOptions=this.control.valueChanges.pipe((0,v.O)(this.value),(0,A.U)(m=>this._filter(m)))}setDescribedByIds(o){}onContainerClick(o){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(o){null!=o&&(this.control.setValue(o),this.value=o)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}_filter(o){if(null==o||0==o.length)return this.options;const m=o.toLowerCase(),p=this.options.filter(I=>I.toLowerCase().includes(m));return!this.disabled&&1===p.length&&this.control.value!=p[0]&&o.length>=(this.previousValue?.length??0)&&this.control.setValue(p[0]),this.onChange(this.control.value),this.previousValue=this.control.value,p}}return u.\u0275fac=function(o){return new(o||u)(t.Y36(s.qu))},u.\u0275cmp=t.Xpm({type:u,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(o,m){2&o&&t.uIk("aria-describedby",m.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[t._Bn([{provide:s.JU,multi:!0,useExisting:u},{provide:c.Eo,useExisting:u}],[{provide:s.gN,useExisting:s.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,m){if(1&o&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",1),t.TgZ(4,"mat-autocomplete",null,2),t.YNc(6,f,2,2,"mat-option",3),t.ALo(7,"async"),t.qZA()()),2&o){const p=t.MAs(5);t.Q6J("appearance",m.appearance),t.xp6(2),t.Oqu(m.label),t.xp6(1),t.Q6J("id",m.id)("formControl",m.control)("matAutocomplete",p),t.xp6(3),t.Q6J("ngForOf",t.lcZ(7,6,m.filteredOptions))}},dependencies:[g.sg,s.Fj,s.JJ,s.oH,C.XC,C.ZL,O.ey,c.KE,c.hX,T.Nt,g.Ov]}),u})()}}]);