"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9227],{19227:(A,c,n)=>{n.r(c),n.d(c,{CustomerStmtPaymentsComponent:()=>m});var u=n(50692),f=n(70879),E=n(35226),C=n.n(E),t=n(94650),o=n(24006),d=n(19132),g=n(5032),O=n(4859),h=n(59549),S=n(44144),_=n(73546),r=n(39505);let m=(()=>{class s{constructor(e,i,p,l){this.fb=e,this.router=i,this.route=p,this.AccountingReportsService=l,this.AsOfDateOptions=["*TODAY"],this.StartingCustomerOptions=["*FIRST"],this.EndingCustomerOptions=["*LAST"],this.SpecialAttributeOptions=["*NONE"],this.SpecialAttributevalueOptions=["*NONE"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({AsOfDate:"",StartingCustomer:"",StartingCustomerSuffix:"",StartingCustomerSuffix2:"",EndingCustomer:"",EndingCustomerSuffix:"",EndingCustomerSuffix2:""})}getCurrentDate(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}CustomerStmtPayment(){const e=this.form.value;"*TODAY"===e.AsOfDate&&(e.AsOfDate=this.getCurrentDate()),"*FIRST"===e.StartingCustomer&&(e.StartingCustomer="0"),"*LAST"===e.EndingCustomer&&(e.EndingCustomer="9999"),console.log("AsOfDate being sent to the backend:",e.AsOfDate),this.CustomerStmtPaymentsSubscription&&this.CustomerStmtPaymentsSubscription.unsubscribe(),this.CustomerStmtPaymentsSubscription=this.AccountingReportsService.CustomerStmtPayment(e.AsOfDate,e.StartingCustomer,e.StartingCustomerSuffix,e.StartingCustomerSuffix2,e.EndingCustomer,e.EndingCustomerSuffix,e.EndingCustomerSuffix2).subscribe(i=>{const l=i[0].data[i[0].data.length-1].value;"Successfully Submitted"===l?(this.successMessage(l),this.router.navigate(["/main-nav/CustomerStmtPayments/read"])):this.failureMessage(l)})}successMessage(e){C().fire(e,"","success")}failureMessage(e){C().fire(e,"","error")}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(o.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(g.A))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-stmt-payments"]],standalone:!0,features:[t.jDz],decls:29,vars:5,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["appearance","outline","formControlName","AsOfDate","label","As of Date",3,"options"],["appearance","outline","formControlName","StartingCustomer","label","Starting Customer ",3,"options"],["appearance","outline",1,"full-width2"],["matInput","","formControlName","StartingCustomerSuffix"],["matInput","","formControlName","StartingCustomerSuffix2"],["appearance","outline","formControlName","EndingCustomer","label","Ending Customer ",3,"options"],["matInput","","formControlName","EndingCustomerSuffix"],["matInput","","formControlName","EndingCustomerSuffix2"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"disabled"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Cust Stmt w/Pay History "),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3),t.NdJ("ngSubmit",function(){return i.CustomerStmtPayment()}),t.TgZ(6,"div",4)(7,"div",5),t._UZ(8,"custom-input-autocomplete",6)(9,"custom-input-autocomplete",7),t.TgZ(10,"mat-form-field",8)(11,"mat-label"),t._uU(12," Starting Customer Suffix "),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"mat-form-field",8)(15,"mat-label"),t._uU(16," Starting Customer Suffix II "),t.qZA(),t._UZ(17,"input",10),t.qZA(),t._UZ(18,"custom-input-autocomplete",11),t.TgZ(19,"mat-form-field",8)(20,"mat-label"),t._uU(21,"Ending Customer Suffix"),t.qZA(),t._UZ(22,"input",12),t.qZA(),t.TgZ(23,"mat-form-field",8)(24,"mat-label"),t._uU(25,"Ending Customer Suffix II"),t.qZA(),t._UZ(26,"input",13),t.qZA()()(),t.TgZ(27,"button",14),t._uU(28,"Submit"),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("options",i.AsOfDateOptions),t.xp6(1),t.Q6J("options",i.StartingCustomerOptions),t.xp6(9),t.Q6J("options",i.EndingCustomerOptions),t.xp6(9),t.Q6J("disabled",i.form.invalid))},dependencies:[f.m,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,O.lW,h.KE,h.hX,S.Nt,_.a8,_.dk,_.dn,_.n5,u.j,r.L]}),s})()},39505:(A,c,n)=>{n.d(c,{L:()=>_});var u=n(24006),f=n(59549),E=n(69751),C=n(68675),t=n(54004),o=n(94650),d=n(36895),g=n(47957),O=n(3238),h=n(44144);function S(r,m){if(1&r&&(o.TgZ(0,"mat-option",4),o._uU(1),o.qZA()),2&r){const s=m.$implicit;o.Q6J("value",s),o.xp6(1),o.Oqu(s)}}let _=(()=>{class r{constructor(s){this.fb=s,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=a=>{},this.onChange=a=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new E.y,this.filteredOptions=this.control.valueChanges.pipe((0,C.O)(this.value),(0,t.U)(a=>this._filter(a)))}setDescribedByIds(s){}onContainerClick(s){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(s){null!=s&&(this.control.setValue(s),this.value=s)}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}setDisabledState(s){this.disabled=s}_filter(s){if(null==s||0==s.length)return this.options;const a=s.toLowerCase(),e=this.options.filter(i=>i.toLowerCase().includes(a));return!this.disabled&&1===e.length&&this.control.value!=e[0]&&s.length>=(this.previousValue?.length??0)&&this.control.setValue(e[0]),this.onChange(this.control.value),this.previousValue=this.control.value,e}}return r.\u0275fac=function(s){return new(s||r)(o.Y36(u.qu))},r.\u0275cmp=o.Xpm({type:r,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(s,a){2&s&&o.uIk("aria-describedby",a.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[o._Bn([{provide:u.JU,multi:!0,useExisting:r},{provide:f.Eo,useExisting:r}],[{provide:u.gN,useExisting:u.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(s,a){if(1&s&&(o.TgZ(0,"mat-form-field",0)(1,"mat-label"),o._uU(2),o.qZA(),o._UZ(3,"input",1),o.TgZ(4,"mat-autocomplete",null,2),o.YNc(6,S,2,2,"mat-option",3),o.ALo(7,"async"),o.qZA()()),2&s){const e=o.MAs(5);o.Q6J("appearance",a.appearance),o.xp6(2),o.Oqu(a.label),o.xp6(1),o.Q6J("id",a.id)("formControl",a.control)("matAutocomplete",e),o.xp6(3),o.Q6J("ngForOf",o.lcZ(7,6,a.filteredOptions))}},dependencies:[d.sg,u.Fj,u.JJ,u.oH,g.XC,g.ZL,O.ey,f.KE,f.hX,h.Nt,d.Ov]}),r})()}}]);