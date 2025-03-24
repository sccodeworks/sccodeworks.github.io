"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9652],{99652:(L,C,i)=>{i.r(C),i.d(C,{GenerateSalesJournalComponent:()=>at});var o=i(24006),c=i(86385),A=i(70879),I=i(35226),S=i.n(I),t=i(94650),h=i(19132),O=i(5032),T=i(36895),N=i(4859),E=i(59549),v=i(44144),m=i(73546),_=i(39505);function n(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Start Date is required. "),t.qZA())}function s(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use YYYY-MM-DD. "),t.qZA())}function d(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," End Date is required. "),t.qZA())}function Z(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid date format. Use YYYY-MM-DD. "),t.qZA())}function q(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Starting Customer must be a number with up to 4 digits or *FIRST. "),t.qZA())}function G(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Special characters are not allowed. "),t.qZA())}function Y(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Special characters are not allowed. "),t.qZA())}function y(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1,' Ending Customer must be a number with up to 4 digits or *LAST". '),t.qZA())}function Q(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Special characters are not allowed. "),t.qZA())}function K(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Special characters are not allowed. "),t.qZA())}function F(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1,' Ending Building Number must be a number with up to 3 digits or *"LAST. '),t.qZA())}function W(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Special characters are not allowed. "),t.qZA())}function k(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Special characters are not allowed. "),t.qZA())}function w(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Report Name is required. "),t.qZA())}function $(a,u){if(1&a&&(t.TgZ(0,"mat-form-field",11)(1,"mat-label"),t._uU(2,"Report Name"),t.qZA(),t._UZ(3,"input",26),t.YNc(4,w,2,0,"mat-error",8),t.qZA()),2&a){const e=t.oxw();let r;t.xp6(4),t.Q6J("ngIf",(null==(r=e.form.get("ReportName"))?null:r.invalid)&&((null==(r=e.form.get("ReportName"))?null:r.dirty)||(null==(r=e.form.get("ReportName"))?null:r.touched)))}}function j(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Report Description is required. "),t.qZA())}function H(a,u){if(1&a&&(t.TgZ(0,"mat-form-field",11)(1,"mat-label"),t._uU(2,"Report Description"),t.qZA(),t._UZ(3,"input",27),t.YNc(4,j,2,0,"mat-error",8),t.qZA()),2&a){const e=t.oxw();let r;t.xp6(4),t.Q6J("ngIf",(null==(r=e.form.get("ReportDesc"))?null:r.invalid)&&((null==(r=e.form.get("ReportDesc"))?null:r.dirty)||(null==(r=e.form.get("ReportDesc"))?null:r.touched)))}}function X(a,u){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Print Support is required. "),t.qZA())}function z(a,u){1&a&&(t.TgZ(0,"div"),t._uU(1,"Email is required."),t.qZA())}function tt(a,u){1&a&&(t.TgZ(0,"div"),t._uU(1,"Please enter a valid email address."),t.qZA())}function et(a,u){if(1&a&&(t.TgZ(0,"mat-error"),t.YNc(1,z,2,0,"div",8),t.YNc(2,tt,2,0,"div",8),t.qZA()),2&a){const e=t.oxw(2);let r,l;t.xp6(1),t.Q6J("ngIf",null==(r=e.form.get("Email"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(l=e.form.get("Email"))||null==l.errors?null:l.errors.email)}}function rt(a,u){if(1&a&&(t.TgZ(0,"mat-form-field",11)(1,"mat-label"),t._uU(2,"Email:"),t.qZA(),t._UZ(3,"input",28),t.YNc(4,et,3,2,"mat-error",8),t.qZA()),2&a){const e=t.oxw();let r;t.xp6(4),t.Q6J("ngIf",(null==(r=e.form.get("Email"))?null:r.invalid)&&((null==(r=e.form.get("Email"))?null:r.dirty)||(null==(r=e.form.get("Email"))?null:r.touched)))}}let at=(()=>{class a{constructor(e,r,l,p){this.fb=e,this.router=r,this.route=l,this.AccountingReportsService=p,this.reportBreakoutOptions=["*NONE","*BUILDING","*CUSTOMER"],this.PrintSupportOptions=["*YES","*NO"],this.StartingCustomerOptions=["*FIRST"],this.EndingCustomerOptions=["*LAST"],this.StartingBuildingNumberOptions=["*FIRST"],this.EndingBuildingNumberOptions=["*LAST"],this.SpecialAttributeOptions=["*NONE"],this.SpecialAttributevalueOptions=["*NONE"],this.OutputOptions=["*ARCHIVE","*BOTH","*PRINT","*EMAIL"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({StartDate:["",[o.kI.required,this.dateValidator()]],EndDate:["",[o.kI.required,this.dateValidator()]],StartingCustomer:[this.StartingCustomerOptions[0],[this.startingCustomerValidator()]],StartingCustomerSuffix:"",StartingCustomerSuffix2:"",EndingCustomer:[this.EndingCustomerOptions[0],[this.endingCustomerValidator()]],EndingCustomerSuffix:"",EndingCustomerSuffix2:"",StartingBuildingNumber:[this.StartingBuildingNumberOptions[0],[this.maxLengthValidator(2),this.alphanumericValidator()]],EndingBuildingNumber:[this.EndingBuildingNumberOptions[0],[this.endingBuildingNumber()]],ReportBreakOuts:[this.reportBreakoutOptions[0],[this.maxLengthValidator(9),this.alphanumericValidator()]],SpecialAttribute:[this.SpecialAttributeOptions[0],[this.maxLengthValidator(10),this.alphanumericValidator()]],SpecialAttributeValue:[this.SpecialAttributevalueOptions[0],[this.maxLengthValidator(30),this.alphanumericValidator()]],OutPut:[this.OutputOptions[2],[this.maxLengthValidator(8),this.alphanumericValidator()]],PrintSupport:[this.PrintSupportOptions[1],[this.maxLengthValidator(4),this.alphanumericValidator()]],ReportName:"",ReportDesc:"",Return:"",Email:["",[this.emailValidator()]]}),this.form.get("OutPut")?.valueChanges.subscribe(e=>{this.form.get("PrintSupport")?.setValue("*NO"),this.form.get("Email")?.reset(),this.form.get("ReportName")?.reset(),this.form.get("ReportDesc")?.reset(),"*PRINT"===e?this.form.get("PrintSupport")?.setValue("*NO"):("*EMAIL"===e||"*ARCHIVE"===e||"*BOTH"===e)&&this.form.get("PrintSupport")?.setValidators([o.kI.required]),"*EMAIL"===e?(this.form.get("Email")?.setValidators([o.kI.required,o.kI.email]),this.form.get("ReportName")?.setValidators([o.kI.required]),this.form.get("ReportDesc")?.setValidators([o.kI.required])):(this.form.get("Email")?.clearValidators(),this.form.get("ReportName")?.setValidators("*PRINT"!==e?[o.kI.required]:[]),this.form.get("ReportDesc")?.setValidators("*PRINT"!==e?[o.kI.required]:[])),this.updateValidators()}),this.form.get("StartingCustomer")?.valueChanges.subscribe(e=>{"*FIRST"===e&&this.form.get("StartingCustomer")?.setValue("0",{emitEvent:!1})}),this.form.get("StartingBuildingNumber")?.valueChanges.subscribe(e=>{"*FIRST"===e&&this.form.get("StartingBuildingNumber")?.setValue("",{emitEvent:!1})}),this.form.get("EndingCustomer")?.valueChanges.subscribe(e=>{"*LAST"===e&&this.form.get("EndingCustomer")?.setValue("9999",{emitEvent:!1})}),this.form.get("ReportBreakOuts")?.valueChanges.subscribe(e=>{"*BUILDING"===e&&this.form.get("ReportBreakOuts")?.setValue("*BUILDING",{emitEvent:!1}),"*NONE"===e&&this.form.get("ReportBreakOuts")?.setValue(" ",{emitEvent:!1}),"*CUSTOMER"===e&&this.form.get("ReportBreakOuts")?.setValue("*CUSTOMER",{emitEvent:!1})}),this.form.get("EndingBuildingNumber")?.valueChanges.subscribe(e=>{"*LAST"===e&&this.form.get("EndingBuildingNumber")?.setValue("999",{emitEvent:!1})})}updateValidators(){const e=this.form.get("OutPut")?.value,r=this.form.get("ReportName"),l=this.form.get("ReportDesc"),p=this.form.get("Email"),f=this.form.get("PrintSupport");r?.clearValidators(),l?.clearValidators(),p?.clearValidators(),f?.clearValidators(),"*EMAIL"===e?(r?.setValidators([o.kI.required]),l?.setValidators([o.kI.required]),f?.setValidators([o.kI.required]),p?.setValidators([o.kI.required,o.kI.email])):"*ARCHIVE"===e||"*BOTH"===e?(r?.setValidators([o.kI.required]),l?.setValidators([o.kI.required]),f?.setValidators([o.kI.required])):"*PRINT"===e&&this.form.get("PrintSupport")?.setValue("*NO"),this.form.get("PrintSupport")?.setValue("*NO"),r?.updateValueAndValidity(),l?.updateValueAndValidity(),p?.updateValueAndValidity(),f?.updateValueAndValidity()}shouldDisplayReportFields(){return"*PRINT"!==this.form.get("OutPut")?.value}shouldDisplayEmailField(){return"*EMAIL"===this.form.get("OutPut")?.value}maxLengthValidator(e){return r=>{const l=r.value;return l&&l.length<=e?null:{maxLengthExceeded:!0}}}alphanumericValidator(){return e=>/^[a-zA-Z0-9 *]*$/.test(e.value)?null:{invalidCharacter:!0}}emailValidator(){return e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value)?null:{invalidEmail:!0}}dateValidator(){return e=>/^\d{4}-\d{2}-\d{2}$/.test(e.value)?null:{invalidDate:!0}}startingCustomerValidator(){return e=>{const r=e.value;return/^\d{0,4}$/.test(r)&&r.length<=4||"*FIRST"===r?null:{invalidStartingCustomer:!0}}}endingCustomerValidator(){return e=>{const r=e.value;return/^\d{0,4}$/.test(r)&&r.length<=4||"*LAST"===r?null:{invalidEndingCustomer:!0}}}startingBuildingValidator(){return e=>{const r=e.value;return/^\d{0,4}$/.test(r)&&r.length<=4||"*FIRST"===r?null:{invalidStartingCustomer:!0}}}endingBuildingNumber(){return e=>{const r=e.value;return/^\d{0,3}$/.test(r)&&r.length<=4||"*LAST"===r?null:{invalidEndingBuildingNumber:!0}}}getCurrentDate(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}GenerateSalesJournal(){const e=this.form.value;console.log(this.form.errors),Object.keys(this.form.controls).forEach(r=>{console.log(r,this.form.get(r)?.errors)}),"*FIRST"===e.StartingCustomer&&(e.StartingCustomer="0"),"*LAST"===e.EndingCustomer&&(e.EndingCustomer="9999"),"*FIRST"===e.StartingBuildingNumber&&(e.StartingBuildingNumber=""),"*LAST"===e.EndingBuildingNumber&&(e.EndingBuildingNumber="999"),"*NONE"===e.ReportBreakOuts&&(e.ReportBreakOuts=" "),this.GenerateSalesJournalSubscription&&this.GenerateSalesJournalSubscription.unsubscribe(),this.GenerateSalesJournalSubscription=this.AccountingReportsService.GenerateSalesJournal(e.StartDate,e.EndDate,e.StartingCustomer,e.StartingCustomerSuffix,e.StartingCustomerSuffix2,e.EndingCustomer,e.EndingCustomerSuffix,e.EndingCustomerSuffix2,e.StartingBuildingNumber,e.EndingBuildingNumber,e.SpecialAttribute,e.SpecialAttributeValue,e.ReportBreakOuts,e.OutPut,e.PrintSupport,e.ReportName,e.ReportDesc,e.Return,e.Email).subscribe(r=>{const p=r[0].data[r[0].data.length-1].value;"Successfully Submitted"===p?(this.successMessage(p),this.router.navigate(["/main-nav/GenerateSalesJournal/read"])):this.failureMessage(p)})}successMessage(e){S().fire(e,"","success")}failureMessage(e){S().fire(e,"","error")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(o.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(O.A))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-generate-sales-journal"]],standalone:!0,features:[t.jDz],decls:64,vars:26,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["type","date","matInput","","formControlName","StartDate"],[4,"ngIf"],["type","date","matInput","","formControlName","EndDate"],["appearance","outline","formControlName","StartingCustomer","label","Starting Customer ",3,"options"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","StartingCustomerSuffix"],["matInput","","formControlName","StartingCustomerSuffix2"],["appearance","outline","formControlName","EndingCustomer","label","Ending Customer ",3,"options"],["matInput","","formControlName","EndingCustomerSuffix"],["matInput","","formControlName","EndingCustomerSuffix2"],["appearance","outline","formControlName","StartingBuildingNumber","label","Starting Building Number  ",3,"options"],["appearance","outline","formControlName","EndingBuildingNumber","label","Ending Building Number  ",3,"options"],["appearance","outline","formControlName","SpecialAttribute","label","Special Attribute",1,"full-width",3,"options"],["appearance","outline","formControlName","SpecialAttributeValue","label","Special Attribute Value",1,"full-width",3,"options"],["appearance","outline","formControlName","ReportBreakOuts","label","Report Breakout",1,"full-width",3,"options"],["appearance","outline","formControlName","OutPut","label","Output",1,"full-width",3,"options"],["appearance","outline","class","full-width2",4,"ngIf"],["matInput","","formControlName","PrintSupport"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"],["matInput","","formControlName","ReportName"],["matInput","","formControlName","ReportDesc"],["matInput","","formControlName","Email","placeholder","Enter your email"]],template:function(e,r){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Sales Journal "),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Start Date:"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,n,2,0,"mat-error",8),t.YNc(13,s,2,0,"mat-error",8),t.qZA(),t.TgZ(14,"mat-form-field",6)(15,"mat-label"),t._uU(16,"End Date"),t.qZA(),t._UZ(17,"input",9),t.YNc(18,d,2,0,"mat-error",8),t.YNc(19,Z,2,0,"mat-error",8),t.qZA(),t._UZ(20,"custom-input-autocomplete",10),t.YNc(21,q,2,0,"mat-error",8),t.TgZ(22,"mat-form-field",11)(23,"mat-label"),t._uU(24," Starting Customer Suffix "),t.qZA(),t._UZ(25,"input",12),t.YNc(26,G,2,0,"mat-error",8),t.qZA(),t.TgZ(27,"mat-form-field",11)(28,"mat-label"),t._uU(29," Starting Customer Suffix II "),t.qZA(),t._UZ(30,"input",13),t.YNc(31,Y,2,0,"mat-error",8),t.qZA(),t._UZ(32,"custom-input-autocomplete",14),t.YNc(33,y,2,0,"mat-error",8),t.TgZ(34,"mat-form-field",11)(35,"mat-label"),t._uU(36,"Ending Customer Suffix"),t.qZA(),t._UZ(37,"input",15),t.YNc(38,Q,2,0,"mat-error",8),t.qZA(),t.TgZ(39,"mat-form-field",11)(40,"mat-label"),t._uU(41,"Ending Customer Suffix II"),t.qZA(),t._UZ(42,"input",16),t.YNc(43,K,2,0,"mat-error",8),t.qZA(),t._UZ(44,"br")(45,"custom-input-autocomplete",17)(46,"custom-input-autocomplete",18),t.YNc(47,F,2,0,"mat-error",8),t._UZ(48,"custom-input-autocomplete",19),t.YNc(49,W,2,0,"mat-error",8),t._UZ(50,"custom-input-autocomplete",20),t.YNc(51,k,2,0,"mat-error",8),t._UZ(52,"custom-input-autocomplete",21)(53,"custom-input-autocomplete",22),t.YNc(54,$,5,1,"mat-form-field",23),t.YNc(55,H,5,1,"mat-form-field",23),t.TgZ(56,"mat-form-field",11)(57,"mat-label"),t._uU(58,"Print Support"),t.qZA(),t._UZ(59,"input",24),t.YNc(60,X,2,0,"mat-error",8),t.qZA(),t.YNc(61,rt,5,1,"mat-form-field",23),t.qZA()(),t.TgZ(62,"button",25),t.NdJ("click",function(){return r.GenerateSalesJournal()}),t._uU(63,"Submit"),t.qZA()()()()),2&e){let l,p,f,D,b,V,R,U,B,J,P,x,M,g;t.xp6(5),t.Q6J("formGroup",r.form),t.xp6(7),t.Q6J("ngIf",null==(l=r.form.get("StartDate"))?null:l.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(p=r.form.get("StartDate"))?null:p.hasError("invalidDate")),t.xp6(5),t.Q6J("ngIf",null==(f=r.form.get("EndDate"))?null:f.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(D=r.form.get("EndDate"))?null:D.hasError("invalidDate")),t.xp6(1),t.Q6J("options",r.StartingCustomerOptions),t.xp6(1),t.Q6J("ngIf",null==(b=r.form.get("StartingCustomer"))?null:b.hasError("invalidStartingCustomer")),t.xp6(5),t.Q6J("ngIf",null==(V=r.form.get("StartingCustomerSuffix"))?null:V.hasError("invalidCharacter")),t.xp6(5),t.Q6J("ngIf",null==(R=r.form.get("StartingCustomerSuffix2"))?null:R.hasError("invalidCharacter")),t.xp6(1),t.Q6J("options",r.EndingCustomerOptions),t.xp6(1),t.Q6J("ngIf",null==(U=r.form.get("EndingCustomer"))?null:U.hasError("invalidEndingCustomer")),t.xp6(5),t.Q6J("ngIf",null==(B=r.form.get("EndingCustomerSuffix"))?null:B.hasError("invalidCharacter")),t.xp6(5),t.Q6J("ngIf",null==(J=r.form.get("EndingCustomerSuffix2"))?null:J.hasError("invalidCharacter")),t.xp6(2),t.Q6J("options",r.StartingBuildingNumberOptions),t.xp6(1),t.Q6J("options",r.EndingBuildingNumberOptions),t.xp6(1),t.Q6J("ngIf",null==(P=r.form.get("EndingBuildingNumber"))?null:P.hasError("invalidEndingBuildingNumber")),t.xp6(1),t.Q6J("options",r.SpecialAttributeOptions),t.xp6(1),t.Q6J("ngIf",null==(x=r.form.get("SpecialAttribute"))?null:x.hasError("invalidCharacter")),t.xp6(1),t.Q6J("options",r.SpecialAttributevalueOptions),t.xp6(1),t.Q6J("ngIf",null==(M=r.form.get("SpecialAttributeValue"))?null:M.hasError("invalidCharacter")),t.xp6(1),t.Q6J("options",r.reportBreakoutOptions),t.xp6(1),t.Q6J("options",r.OutputOptions),t.xp6(1),t.Q6J("ngIf",r.shouldDisplayReportFields()),t.xp6(1),t.Q6J("ngIf",r.shouldDisplayReportFields()),t.xp6(5),t.Q6J("ngIf",(null==(g=r.form.get("PrintSupport"))?null:g.invalid)&&((null==(g=r.form.get("PrintSupport"))?null:g.dirty)||(null==(g=r.form.get("PrintSupport"))?null:g.touched))),t.xp6(1),t.Q6J("ngIf",r.shouldDisplayEmailField())}},dependencies:[A.m,T.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,N.lW,E.TO,E.KE,E.hX,v.Nt,m.a8,m.dk,m.dn,m.n5,c.j,_.L]}),a})()},39505:(L,C,i)=>{i.d(C,{L:()=>v});var o=i(24006),c=i(59549),A=i(69751),I=i(68675),S=i(54004),t=i(94650),h=i(36895),O=i(47957),T=i(3238),N=i(44144);function E(m,_){if(1&m&&(t.TgZ(0,"mat-option",4),t._uU(1),t.qZA()),2&m){const n=_.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n)}}let v=(()=>{class m{constructor(n){this.fb=n,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=s=>{},this.onChange=s=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new A.y,this.filteredOptions=this.control.valueChanges.pipe((0,I.O)(this.value),(0,S.U)(s=>this._filter(s)))}setDescribedByIds(n){}onContainerClick(n){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(n){null!=n&&(this.control.setValue(n),this.value=n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.disabled=n}_filter(n){if(null==n||0==n.length)return this.options;const s=n.toLowerCase(),d=this.options.filter(Z=>Z.toLowerCase().includes(s));return!this.disabled&&1===d.length&&this.control.value!=d[0]&&n.length>=(this.previousValue?.length??0)&&this.control.setValue(d[0]),this.onChange(this.control.value),this.previousValue=this.control.value,d}}return m.\u0275fac=function(n){return new(n||m)(t.Y36(o.qu))},m.\u0275cmp=t.Xpm({type:m,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(n,s){2&n&&t.uIk("aria-describedby",s.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[t._Bn([{provide:o.JU,multi:!0,useExisting:m},{provide:c.Eo,useExisting:m}],[{provide:o.gN,useExisting:o.sg}])],decls:8,vars:9,consts:[[3,"appearance"],["matInput","",3,"id","placeholder","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,s){if(1&n&&(t.TgZ(0,"mat-form-field",0)(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",1),t.TgZ(4,"mat-autocomplete",null,2),t.YNc(6,E,2,2,"mat-option",3),t.ALo(7,"async"),t.qZA()()),2&n){const d=t.MAs(5);t.Q6J("appearance",s.appearance),t.xp6(2),t.Oqu(s.label),t.xp6(1),t.Q6J("id",s.id)("placeholder",s.placeholder)("formControl",s.control)("matAutocomplete",d),t.xp6(3),t.Q6J("ngForOf",t.lcZ(7,7,s.filteredOptions))}},dependencies:[h.sg,o.Fj,o.JJ,o.oH,O.XC,O.ZL,T.ey,c.KE,c.hX,N.Nt,h.Ov]}),m})()}}]);