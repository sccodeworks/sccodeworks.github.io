"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[7287],{39505:(T,d,s)=>{s.d(d,{L:()=>u});var l=s(24006),m=s(59549),g=s(69751),h=s(68675),t=s(54004),e=s(94650),_=s(36895),f=s(47957),O=s(3238),E=s(44144);function C(r,p){if(1&r&&(e.TgZ(0,"mat-option",4),e._uU(1),e.qZA()),2&r){const o=p.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}let u=(()=>{class r{constructor(o){this.fb=o,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=a=>{},this.onChange=a=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new g.y,this.filteredOptions=this.control.valueChanges.pipe((0,h.O)(this.value),(0,t.U)(a=>this._filter(a)))}setDescribedByIds(o){}onContainerClick(o){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(o){null!=o&&(this.control.setValue(o),this.value=o)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}_filter(o){if(null==o||0==o.length)return this.options;const a=o.toLowerCase(),n=this.options.filter(i=>i.toLowerCase().includes(a));return!this.disabled&&1===n.length&&this.control.value!=n[0]&&o.length>=(this.previousValue?.length??0)&&this.control.setValue(n[0]),this.onChange(this.control.value),this.previousValue=this.control.value,n}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(o,a){2&o&&e.uIk("aria-describedby",a.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[e._Bn([{provide:l.JU,multi:!0,useExisting:r},{provide:m.Eo,useExisting:r}],[{provide:l.gN,useExisting:l.sg}])],decls:8,vars:9,consts:[[3,"appearance"],["matInput","",3,"id","placeholder","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,a){if(1&o&&(e.TgZ(0,"mat-form-field",0)(1,"mat-label"),e._uU(2),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",null,2),e.YNc(6,C,2,2,"mat-option",3),e.ALo(7,"async"),e.qZA()()),2&o){const n=e.MAs(5);e.Q6J("appearance",a.appearance),e.xp6(2),e.Oqu(a.label),e.xp6(1),e.Q6J("id",a.id)("placeholder",a.placeholder)("formControl",a.control)("matAutocomplete",n),e.xp6(3),e.Q6J("ngForOf",e.lcZ(7,7,a.filteredOptions))}},dependencies:[_.sg,l.Fj,l.JJ,l.oH,f.XC,f.ZL,O.ey,m.KE,m.hX,E.Nt,_.Ov]}),r})()},57287:(T,d,s)=>{s.r(d),s.d(d,{SuppliesReportComponent:()=>p});var l=s(86385),m=s(70879),g=s(35226),h=s.n(g),t=s(94650),e=s(24006),_=s(19132),f=s(78568),O=s(4859),E=s(59549),C=s(44144),u=s(73546),r=s(39505);let p=(()=>{class o{constructor(n,i,S,c){this.fb=n,this.router=i,this.route=S,this.ReportsService=c,this.PoolAffectedOptions=["S","C","T"],this.StartingStorerOptions=["*FIRST"],this.EndingStorerOptions=["*LAST"],this.SupplyTypeOptions=["*ALL"],this.ReportOutputOptions=["*SUMMARY","*DETAIL"],this.StartDateOptions=["*ALL","*TODAY","*YESTR","*THISW ","*LASTW","*THISP","*LASTP","*THISM","*LASTM","*THISQ","*LASTQ","*THISY","*LASTY","*YTD"],this.EndDateOptions=["*START"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({PoolAffected:[""],StartingStorer:[this.StartingStorerOptions[0]],EndingStorer:[this.EndingStorerOptions[0]],CarrierCode:[""],Consignee:[""],SupplyType:[this.SupplyTypeOptions[0]],ReportOutput:[this.ReportOutputOptions[0]],StartDate:[this.StartDateOptions[0]],EndDate:[this.EndDateOptions[0]],Email:[""]})}ngOnDestroy(){this.SuppliesReportSubscription&&this.SuppliesReportSubscription.unsubscribe()}SuppliesReport(){const n=this.form.value;"*FIRST"===n.StartingStorer&&(n.StartingStorer="0"),"*LAST"===n.EndingStorer&&(n.EndingStorer="9999"),this.SuppliesReportSubscription&&this.SuppliesReportSubscription.unsubscribe(),this.SuppliesReportSubscription=this.ReportsService.SuppliesReport(n.PoolAffected,n.StartingStorer,n.EndingStorer,n.CarrierCode,n.Consignee,n.SupplyType,n.ReportOutput,n.StartDate,n.EndDate,n.Email).subscribe(i=>{const c=i[0].data[i[0].data.length-1].value;"Successfully Submitted"===c?(this.successMessage(c),this.router.navigate(["/main-nav/supplies-report/read"])):this.failureMessage(c)})}successMessage(n){h().fire(n,"","success")}failureMessage(n){h().fire(n,"","error")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(e.qu),t.Y36(_.F0),t.Y36(_.gz),t.Y36(f.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-supplies-report"]],standalone:!0,features:[t.jDz],decls:29,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline","formControlName","PoolAffected","label","Pool Affected ",3,"options"],["appearance","outline","formControlName","StartingStorer","label","Starting Storer",3,"options"],["appearance","outline","formControlName","EndingStorer","label","Ending Storer",3,"options"],["appearance","outline",1,"full-width"],["matInput","","formControlName","CarrierCode"],["matInput","","formControlName","Consignee"],["appearance","outline","formControlName","SupplyType","label","Supply Type",3,"options"],["appearance","outline","formControlName","ReportOutput","label","Report Output",3,"options"],["appearance","outline","formControlName","StartDate","label","Start Date ",3,"options"],["appearance","outline","formControlName","EndDate","label","End Date",3,"options"],["matInput","","formControlName","Email","placeholder","Enter your email"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Supplies Balance Report "),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5),t._UZ(8,"custom-input-autocomplete",6)(9,"custom-input-autocomplete",7)(10,"custom-input-autocomplete",8),t.TgZ(11,"mat-form-field",9)(12,"mat-label"),t._uU(13,"Carrier Code "),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"mat-form-field",9)(16,"mat-label"),t._uU(17,"Consignee "),t.qZA(),t._UZ(18,"input",11),t.qZA(),t._UZ(19,"custom-input-autocomplete",12)(20,"custom-input-autocomplete",13)(21,"custom-input-autocomplete",14)(22,"custom-input-autocomplete",15),t.TgZ(23,"mat-form-field",9)(24,"mat-label"),t._uU(25,"Email:"),t.qZA(),t._UZ(26,"input",16),t.qZA()()(),t.TgZ(27,"button",17),t.NdJ("click",function(){return i.SuppliesReport()}),t._uU(28,"Submit"),t.qZA()()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",i.form),t.xp6(3),t.Q6J("options",i.PoolAffectedOptions),t.xp6(1),t.Q6J("options",i.StartingStorerOptions),t.xp6(1),t.Q6J("options",i.EndingStorerOptions),t.xp6(9),t.Q6J("options",i.SupplyTypeOptions),t.xp6(1),t.Q6J("options",i.ReportOutputOptions),t.xp6(1),t.Q6J("options",i.StartDateOptions),t.xp6(1),t.Q6J("options",i.EndDateOptions))},dependencies:[m.m,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,O.lW,E.KE,E.hX,C.Nt,u.a8,u.dk,u.dn,u.n5,l.j,r.L]}),o})()}}]);