"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5263],{39505:(v,d,s)=>{s.d(d,{L:()=>T});var u=s(24006),_=s(59549),A=s(69751),E=s(68675),t=s(54004),e=s(94650),h=s(36895),O=s(47957),D=s(3238),M=s(44144);function g(n,c){if(1&n&&(e.TgZ(0,"mat-option",4),e._uU(1),e.qZA()),2&n){const o=c.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}let T=(()=>{class n{constructor(o){this.fb=o,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=l=>{},this.onChange=l=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new A.y,this.filteredOptions=this.control.valueChanges.pipe((0,E.O)(this.value),(0,t.U)(l=>this._filter(l)))}setDescribedByIds(o){}onContainerClick(o){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(o){null!=o&&(this.control.setValue(o),this.value=o)}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}_filter(o){if(null==o||0==o.length)return this.options;const l=o.toLowerCase(),m=this.options.filter(r=>r.toLowerCase().includes(l));return!this.disabled&&1===m.length&&this.control.value!=m[0]&&o.length>=(this.previousValue?.length??0)&&this.control.setValue(m[0]),this.onChange(this.control.value),this.previousValue=this.control.value,m}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(u.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(o,l){2&o&&e.uIk("aria-describedby",l.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[e._Bn([{provide:u.JU,multi:!0,useExisting:n},{provide:_.Eo,useExisting:n}],[{provide:u.gN,useExisting:u.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,l){if(1&o&&(e.TgZ(0,"mat-form-field",0)(1,"mat-label"),e._uU(2),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",null,2),e.YNc(6,g,2,2,"mat-option",3),e.ALo(7,"async"),e.qZA()()),2&o){const m=e.MAs(5);e.Q6J("appearance",l.appearance),e.xp6(2),e.Oqu(l.label),e.xp6(1),e.Q6J("id",l.id)("formControl",l.control)("matAutocomplete",m),e.xp6(3),e.Q6J("ngForOf",e.lcZ(7,6,l.filteredOptions))}},dependencies:[h.sg,u.Fj,u.JJ,u.oH,O.XC,O.ZL,D.ey,_.KE,_.hX,M.Nt,h.Ov]}),n})()},55263:(v,d,s)=>{s.r(d),s.d(d,{HistoricalItemBalanceComponent:()=>m});var u=s(50692),_=s(70879),A=s(35226),E=s.n(A),t=s(94650),e=s(24006),h=s(19132),O=s(78568),D=s(36895),M=s(4859),g=s(59549),T=s(44144),n=s(73546),c=s(39505);function o(r,C){1&r&&(t.TgZ(0,"mat-form-field",6)(1,"mat-label"),t._uU(2,"Extract View"),t.qZA(),t._UZ(3,"input",17),t.qZA())}function l(r,C){1&r&&(t.TgZ(0,"mat-form-field",6)(1,"mat-label"),t._uU(2,"Email:"),t.qZA(),t._UZ(3,"input",18),t.qZA())}let m=(()=>{class r{constructor(a,i,p,f){this.fb=a,this.router=i,this.route=p,this.ReportsService=f,this.HistoricalItemRead="/main-nav/OutboundActivityReport/read",this.SuccessMsg="Successfully Submitted",this.formattedAsOfDate="",this.IncludeQuantitiesOptions=["*ALL","*AVAIL","*DAMAGE","*HELD","*USER1","*USER2","*USER3","*USER4","*NEGATIVE","*OVERALLOC","*NONZERO"],this.ShowLotsOptions=["N","Y"],this.ReportUnitsOptions=["*QUANTITY","*PALLETS","*CASES","*CWEIGHT","*CUBES"],this.ReportTitleOptions=["ITEM BALANCE REPORT"],this.OutputOptions=["*REPORT","*EMAIL"],this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({StorerNumber:[""],AsOfDate:[""],IncludeQuantities:[this.IncludeQuantitiesOptions[0]],ShowLots:[this.ShowLotsOptions[0]],ReportUnits:[this.ReportUnitsOptions[0]],ReportTitle:[this.ReportTitleOptions[0]],OutPut:[this.OutputOptions[0]],ExtractView:["*DEFAULT"],Email:[""]}),this.form.get("OutPut")?.valueChanges.subscribe(a=>{this.FileextensionEmailtype()||(this.form.get("EMAIL")?.setValue(""),this.form.get("ExtractView")?.setValue(""))}),this.form.get("AsOfDate")?.valueChanges.subscribe(a=>{a&&(this.formattedAsOfDate=this.formatDateToYYYYMMDD(a))})}dateValidator(){return a=>/^\d{4}-\d{2}-\d{2}$/.test(a.value)?null:{invalidDate:!0}}formatDateToYYYYMMDD(a){const i=new Date(a),p=("0"+i.getDate()).slice(-2),f=("0"+(i.getMonth()+1)).slice(-2);return`${i.getFullYear()}-${f}-${p}`}FileextensionEmailtype(){const a=this.form.get("OutPut")?.value;return"*EMAIL"===a||"*BOTH"===a}ngOnDestroy(){this.HistoricalItemBalanceSubscription&&this.HistoricalItemBalanceSubscription.unsubscribe()}HistoricalItemBalance(){const a=this.form.value,i=this.formattedAsOfDate;this.HistoricalItemBalanceSubscription&&this.HistoricalItemBalanceSubscription.unsubscribe(),this.HistoricalItemBalanceSubscription=this.ReportsService.HistoricalItemBalance(a.StorerNumber,i,a.IncludeQuantities,a.ShowLots,a.ReportUnits,a.ReportTitle,a.OutPut,a.ExtractView,a.Email).subscribe(p=>{const I=p[0].data[p[0].data.length-1].value;I===this.SuccessMsg?(this.successMessage(I),this.router.navigate([this.HistoricalItemRead])):this.failureMessage(I)})}successMessage(a){E().fire(a,"","success")}failureMessage(a){E().fire(a,"","error")}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(e.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(O.F))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-historical-item-balance"]],standalone:!0,features:[t.jDz],decls:25,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","StorerNumber"],["appearance","outline","floatLabel","always",1,"full-width"],["matInput","","type","Date","formControlName","AsOfDate"],["appearance","outline","formControlName","IncludeQuantities","label"," Include Quantities",3,"options"],["appearance","outline","formControlName","ShowLots","label"," Show Lots",3,"options"],["appearance","outline","formControlName","ReportUnits","label"," Report Units",3,"options"],["appearance","outline","formControlName","ReportTitle","label","Report Title",3,"options"],["appearance","outline","formControlName","OutPut","label","Output",3,"options"],["appearance","outline","class","full-width",4,"ngIf"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"],["matInput","","formControlName","ExtractView","placeholder","Enter your email"],["matInput","","formControlName","Email","placeholder","Enter your email"]],template:function(a,i){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Historical Item Balance Report"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"form",3)(6,"div",4)(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"Storer Number "),t.qZA(),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"As of Date "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t._UZ(16,"custom-input-autocomplete",10)(17,"custom-input-autocomplete",11)(18,"custom-input-autocomplete",12)(19,"custom-input-autocomplete",13)(20,"custom-input-autocomplete",14),t.YNc(21,o,4,0,"mat-form-field",15),t.YNc(22,l,4,0,"mat-form-field",15),t.qZA()(),t.TgZ(23,"button",16),t.NdJ("click",function(){return i.HistoricalItemBalance()}),t._uU(24,"Submit"),t.qZA()()()()),2&a&&(t.xp6(5),t.Q6J("formGroup",i.form),t.xp6(11),t.Q6J("options",i.IncludeQuantitiesOptions),t.xp6(1),t.Q6J("options",i.ShowLotsOptions),t.xp6(1),t.Q6J("options",i.ReportUnitsOptions),t.xp6(1),t.Q6J("options",i.ReportTitleOptions),t.xp6(1),t.Q6J("options",i.OutputOptions),t.xp6(1),t.Q6J("ngIf",i.FileextensionEmailtype()),t.xp6(1),t.Q6J("ngIf",i.FileextensionEmailtype()))},dependencies:[_.m,D.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,M.lW,g.KE,g.hX,T.Nt,n.a8,n.dk,n.dn,n.n5,u.j,c.L]}),r})()}}]);