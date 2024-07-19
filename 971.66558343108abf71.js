"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[971],{39505:(S,Z,l)=>{l.d(Z,{L:()=>r});var A=l(24006),O=l(59549),c=l(69751),_=l(68675),M=l(54004),m=l(94650),t=l(36895),U=l(47957),I=l(3238),P=l(44144);function e(i,o){if(1&i&&(m.TgZ(0,"mat-option",4),m._uU(1),m.qZA()),2&i){const a=o.$implicit;m.Q6J("value",a),m.xp6(1),m.Oqu(a)}}let r=(()=>{class i{constructor(a){this.fb=a,this.options=[],this.value="",this.placeholder="",this.id="",this.ngControl=null,this.label="",this.appearance="outline",this.describedBy="",this.touched=!1,this.focused=!1,this.empty=!1,this.required=!1,this.disabled=!1,this.shouldLabelFloat=!1,this.formControlName="",this.errorState=!1,this.previousValue="",this.onInput=s=>{},this.onChange=s=>{},this.onTouched=()=>{},this.control=this.fb.control(""),this.stateChanges=new c.y,this.filteredOptions=this.control.valueChanges.pipe((0,_.O)(this.value),(0,M.U)(s=>this._filter(s)))}setDescribedByIds(a){}onContainerClick(a){}markAsTouched(){this.touched||(this.touched=!0,this.onTouched())}writeValue(a){null!=a&&(this.control.setValue(a),this.value=a)}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.disabled=a}_filter(a){if(null==a||0==a.length)return this.options;const s=a.toLowerCase(),u=this.options.filter(h=>h.toLowerCase().includes(s));return!this.disabled&&1===u.length&&this.control.value!=u[0]&&a.length>=(this.previousValue?.length??0)&&this.control.setValue(u[0]),this.onChange(this.control.value),this.previousValue=this.control.value,u}}return i.\u0275fac=function(a){return new(a||i)(m.Y36(A.qu))},i.\u0275cmp=m.Xpm({type:i,selectors:[["custom-input-autocomplete"]],hostVars:1,hostBindings:function(a,s){2&a&&m.uIk("aria-describedby",s.describedBy)},inputs:{options:"options",value:"value",placeholder:"placeholder",id:"id",ngControl:"ngControl",label:"label",appearance:"appearance"},features:[m._Bn([{provide:A.JU,multi:!0,useExisting:i},{provide:O.Eo,useExisting:i}],[{provide:A.gN,useExisting:A.sg}])],decls:8,vars:8,consts:[[3,"appearance"],["matInput","",3,"id","formControl","matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(a,s){if(1&a&&(m.TgZ(0,"mat-form-field",0)(1,"mat-label"),m._uU(2),m.qZA(),m._UZ(3,"input",1),m.TgZ(4,"mat-autocomplete",null,2),m.YNc(6,e,2,2,"mat-option",3),m.ALo(7,"async"),m.qZA()()),2&a){const u=m.MAs(5);m.Q6J("appearance",s.appearance),m.xp6(2),m.Oqu(s.label),m.xp6(1),m.Q6J("id",s.id)("formControl",s.control)("matAutocomplete",u),m.xp6(3),m.Q6J("ngForOf",m.lcZ(7,6,s.filteredOptions))}},dependencies:[t.sg,A.Fj,A.JJ,A.oH,U.XC,U.ZL,I.ey,O.KE,O.hX,P.Nt,t.Ov]}),i})()},10573:(S,Z,l)=>{l.d(Z,{a:()=>U});var A=l(80529),O=l(61135),c=l(75625),_=l(70262),M=l(62843),m=l(92340),t=l(94650);let U=(()=>{class I{constructor(e){this.httpClient=e,this.itemDataSource=new O.X([]),this.url=m.N.API_BASE_URL,this.httpHeader={headers:new A.WM({"Content-Type":"application/json"})}}getItemAll(e){return this.httpClient.get(`${this.url}/item/read?user=${e}`)}updateItemDataSource(e){let r=this.itemDataSource.getValue();r.unshift(e),this.itemDataSource.next(r)}getAll(e){return this.httpClient.get(`${this.url}/consignee/readAll?user=${e}`)}getItemTally(e,r,i,o){return this.httpClient.get(`${this.url}/item/read/tally?user=${e}&storer=${r}&suffix=${i}&item=${o}`)}ItemTallyWorkWith(e,r,i,o){return this.httpClient.get(`${this.url}/item/tallyWorkWith?user=${e}&storer=${r}&suffix=${i}&item=${o}`)}getItemAdjustmentBySearch(e,r,i,o,a,s,u,h,g,C,p,E,n,d){return this.httpClient.get(`${this.url}/itemAdjustment/readBySearch?user=${e}&storer=${r}&item=${i}&type=${o}&lot1=${a}&lot2=${s}&lot3=${u}&building=${h}&floor=${g}&aisle=${C}&slot=${p}&year=${E}&month=${n}&date=${d}`)}getItemBySearch(e,r,i,o,a){return this.httpClient.get(`${this.url}/item/readBySearch?user=${e}&storer=${r}&suffix=${i}&item=${o}&description=${a}`)}getItemForTally(e,r,i,o,a,s,u){return this.httpClient.get(`${this.url}/item/read/new?user=${e}&storer=${r}&suffix=${i}&item=${o}&description=${a}&pageNum=${s}&recordsPerPage=${u}`)}getItemAdjustment(e,r){return this.httpClient.get(`${this.url}/itemAdjustment/read?user=${e}&storer=${r}`)}getItemAdjustmentInquiry(e,r,i=null,o=null,a=null,s=null,u=null,h=null,g=null,C=null,p=null,E=null){return this.httpClient.get(`${this.url}/itemAdjustment/itemAdjInquiryRead?user=${e}&transaction=${r}`)}itemCreate1(e,r,i,o,a,s,u,h,g,C,p,E,n,d){return this.httpClient.post(`${this.url}/item/create1`,{storeNumber:e,suffix:r,item:i,itemDescription1:o,itemDescription2:a,itemUpcCode:s,itemUpcTailCode:u,manufacturerProdCode:h,quickItem:g,lottedItem:C,lotUnitWeight:p,lotSortMask:E,primSortMaskPointer:n,prevItem:d}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemCreate2(e,r,i,o,a,s,u,h,g,C,p,E,n,d,f,v,$,T,D,L,y){return this.httpClient.put(`${this.url}/item/create2`,{storeNumber:e,suffix:r,item:i,unitGrossWeight:o,unitWeightType:a,casesPerTier:s,tiersPerPallet:u,unitSquareFeet:h,unitCubeFeet:g,unitInchesHigh:C,unitInchesWide:p,unitInchesDeep:E,unitOfMeasure1:n,unitOfMeasure2:d,qtyPer2UnitOfMultiplier:f,unitOfMeasure3:v,qtyPer3UnitOfMultiplier:$,unitOfMeasure4:T,qtyPer4UnitOfMultiplier:D,inventoryUnit:L,shippingUnit:y}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemCreate3(e,r,i,o,a,s,u,h,g,C,p,E,n,d,f,v,$){return this.httpClient.put(`${this.url}/item/create3`,{storeNumber:e,suffix:r,item:i,domesticSurface:o,domesticAir:a,internationalSurface:s,internationalAir:u,matHandlingCode1:h,matHandlingCode2:g,matHandlingCode3:C,warehouseZone:p,bmtCode:E,palletsHigh:n,palletsDeep:d,lowStockPoint:f,prefferedLocation:v,pickLine:$}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemCreate4(e,r,i,o,a,s,u,h,g,C,p,E,n,d,f,v,$,T,D){return this.httpClient.put(`${this.url}/item/create4`,{storeNumber:e,suffix:r,item:i,rcvStageRate:o,rcvStageBase:a,rcvStorageMin:s,rcrStorageRate:u,rcrStorageBase:h,rcrStorageMin:g,regHandlingRate:C,regHandlingBase:p,regHandlingMin:E,distHandlingRate:n,distHandlingBase:d,distHandlingMin:f,altHandlingRate:v,altHandlingBase:$,altHandlingMin:T,insLiabilityAmount:D}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemCreate5(e){return this.httpClient.put(`${this.url}/item/create5`,e).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemServiceUpdate1(e,r,i,o,a,s,u,h,g,C,p,E,n,d){return this.httpClient.put(`${this.url}/item/update1`,{storeNumber:e,suffix:r,item:i,itemDescription1:o,itemDescription2:a,itemUpcCode:s,itemUpcTailCode:u,manufacturerProdCode:h,quickItem:g,lottedItem:C,lotUnitWeight:p,lotSortMask:E,primSortMaskPointer:n,prevItem:d}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemServiceUpdate2(e,r,i,o,a,s,u,h,g,C,p,E,n,d,f,v,$,T,D,L,y){return this.httpClient.put(`${this.url}/item/update2`,{storeNumber:e,suffix:r,item:i,unitGrossWeight:o,unitWeightType:a,casesPerTier:s,tiersPerPallet:u,unitSquareFeet:h,unitCubeFeet:g,unitInchesHigh:C,unitInchesWide:p,unitInchesDeep:E,unitOfMeasure1:n,unitOfMeasure2:d,qtyPer2UnitOfMultiplier:f,unitOfMeasure3:v,qtyPer3UnitOfMultiplier:$,unitOfMeasure4:T,qtyPer4UnitOfMultiplier:D,inventoryUnit:L,shippingUnit:y}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemServiceUpdate3(e,r,i,o,a,s,u,h,g,C,p,E,n,d,f,v,$){return this.httpClient.put(`${this.url}/item/update3`,{storeNumber:e,suffix:r,item:i,domesticSurface:o,domesticAir:a,internationalSurface:s,internationalAir:u,matHandlingCode1:h,matHandlingCode2:g,matHandlingCode3:C,warehouseZone:p,bmtCode:E,palletsHigh:n,palletsDeep:d,lowStockPoint:f,prefferedLocation:v,PickLine:$}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemServiceUpdate4(e,r,i,o,a,s,u,h,g,C,p,E,n,d,f,v,$,T,D){return this.httpClient.put(`${this.url}/item/update4`,{storeNumber:e,suffix:r,item:i,rcvStageRate:o,rcvStageBase:a,rcvStorageMin:s,rcrStorageRate:u,rcrStorageBase:h,rcrStorageMin:g,regHandlingRate:C,regHandlingBase:p,regHandlingMin:E,distHandlingRate:n,distHandlingBase:d,distHandlingMin:f,altHandlingRate:v,altHandlingBase:$,altHandlingMin:T,insLiabilityAmount:D}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemServiceUpdate5(e){return this.httpClient.put(`${this.url}/item/update5`,e).pipe((0,c.X)(1),(0,_.K)(this.httpError))}getImageByItemCode(e){return this.httpClient.get(`${this.url}/item/image/${e}`,{responseType:"blob"})}deleteItem(e,r,i){return this.httpClient.delete(`${this.url}/item/delete?storeNumber=${e}&suffix=${r}&item=${i}`)}itemRebalanceService(e,r,i){return this.httpClient.put(this.url+"/item/itemRebalance",{storer:e,suffix:r,item:i}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}getItemXRef(e,r,i,o){return this.httpClient.get(`${this.url}/itemXreference/read?user=${e}&storer=${r}&suffix=${i}&itemCode=${o}`)}createItemXref(e,r,i,o,a,s,u){return this.httpClient.post(this.url+"/itemXreference/create",{user:e,acdl:r,storer:i,suffix:o,itemXcode:a,itemCode:s,itemXupc:u}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}updateItemXref(e,r,i,o,a,s,u){return this.httpClient.put(this.url+"/itemXreference/update",{user:e,acdl:r,storer:i,suffix:o,itemXcode:a,itemCode:s,itemXupc:u}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}deleteItemXref(e,r,i,o){return this.httpClient.delete(`${this.url}/itemXreference/delete?user=${e}&storer=${r}&suffix=${i}&itemCode=${o}`)}readItemLotService(e,r,i,o,a,s,u){return this.httpClient.get(`${this.url}/item/readItemLots?user=${e}&storer=${r}&suffix=${i}&item=${o}&lot1=${a}&lot2=${s}&lot3=${u}`)}updateItemLotsService(e,r,i,o,a,s,u,h,g,C,p){return this.httpClient.put(`${this.url}/item/updateItemLots`,{user:e,storer:r,suffix:i,item:o,lot1:a,lot2:s,lot3:u,lotUnitWeight:h,lotFirstRecieved:g,lotLastShipped:C,status:p}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}setLastUsed(e,r,i,o,a,s){return this.httpClient.put(this.url+"/item/setLastUsed",{storer:e,suffix:r,item:i,lot1:o,lot2:a,lot3:s}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}deleteItemLotsService(e,r,i,o,a,s,u){return this.httpClient.delete(`${this.url}/item/deleteItemLots?user=${e}&storer=${r}&suffix=${i}&item=${o}&lot1=${a}&lot2=${s}&lot3=${u}`)}deleteItemAdjustment(e){return this.httpClient.delete(`${this.url}/itemAdjustment/delete?TransacNum=${e}`)}readItemCommentService(e,r,i,o){return this.httpClient.get(`${this.url}/item/comments/read?user=${e}&storerAndItem=${r}&subType=${i}&sequence=${o}`).pipe((0,c.X)(1),(0,_.K)(this.httpError))}createItemCommentService(e,r,i,o,a){return this.httpClient.post(`${this.url}/item/comments/create`,{storerAndItem:e,subType:r,sequence:i,comment:o,user:a}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}updateItemCommentService(e,r,i,o,a){return this.httpClient.put(`${this.url}/item/comments/update`,{storerAndItem:e,subType:r,sequence:i,comment:o,user:a}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}deleteItemCommentService(e,r,i,o){return this.httpClient.delete(`${this.url}/item/comments/delete?user=${e}&storerAndItem=${r}&subType=${i}&sequence=${o}`).pipe((0,c.X)(1),(0,_.K)(this.httpError))}itemStockActivityReadService(e,r,i,o){return this.httpClient.get(`${this.url}/item/stockActivity?user=${e}&storer=${r}&suffix=${i}&item=${o}`)}itemOrdersReadService(e,r,i,o,a){return this.httpClient.get(`${this.url}/item/itemOrders?user=${e}&storer=${r}&suffix=${i}&item=${o}&status=${a}`)}readItemTallyInquiryService(e,r){return this.httpClient.get(`${this.url}/item/itemTallyInquiry?user=${e}&tally=${r}`)}readItemTallyWrInquiryService(e,r){return this.httpClient.get(`${this.url}/item/itemTallyWrInquiry?user=${e}&tally=${r}`)}BucketXRefUpdate(e,r,i,o,a,s,u,h,g,C,p){return this.httpClient.put(`${this.url}/item/BucketXRefUpdate`,{Storer:e,Suffix:r,Item:i,Lotcode1:o,Lotcode2:a,Lotcode3:s,From:u,To:h,Reason:g,Comment:C,Filename:p}).pipe((0,c.X)(1),(0,_.K)(this.httpError))}getAllBucketError(e,r){return this.httpClient.get(`${this.url}/item/getAllBucketError?user=${e}&Filename=${r}`)}httpError(e){let r="";return r=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(r),(0,M._)(()=>new Error(r))}}return I.\u0275fac=function(e){return new(e||I)(t.LFG(A.eN))},I.\u0275prov=t.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"}),I})()},40971:(S,Z,l)=>{l.r(Z),l.d(Z,{MaintainComponent:()=>C});var A=l(65412),O=l(48529),c=l(35226),_=l.n(c),M=l(70879),m=l(50692),t=l(94650),U=l(19132),I=l(15627),P=l(10573),e=l(24006),r=l(97392),i=l(4859),o=l(59549),a=l(44144),s=l(84385),u=l(3238),h=l(73546),g=l(39505);let C=(()=>{class p{constructor(n,d,f,v,$,T,D){this.router=n,this.iHeaderSvc=d,this.itemService=f,this.fb=v,this.route=$,this.dialogRef=T,this.anyvarible=D,this.itemOptions=[]}ngOnInit(){console.log("TALLY DATA FOR TALLY DETAIL CREATION:"),console.log(this.anyvarible[1]),console.log(this.anyvarible[0]),this.storer=this.anyvarible[1].IHSTOR,console.log("storer",this.storer),this.tally=this.anyvarible[1].IHTALY,localStorage.getItem("LoggedIn")?(this.user=localStorage.getItem("userName"),this.building=localStorage.getItem("building"),this.storer=localStorage.getItem("storer"),this.storer||(this.storer=this.anyvarible[1].IHSTOR)):(this.user=O.R.user,this.building=O.R.building),this.form=this.fb.group({quantity:"",items:this.anyvarible[1].IDITEM,lotCode1:"",lotCode2:"",lotCode3:"",rateType:"",dmgReas:"",overrideWeight:""}),console.log(this.anyvarible),this.itemService.getItemForTally(this.user,this.anyvarible[1].IHSTOR,"","","",1,20).subscribe(n=>{this.result=n;var d=this.result[0].data[1]?.value,f=JSON.parse(d);if(f&&f.returnedData){this.duplicateSource=f.returnedData,console.log("SINGLE ITEM DATA"),console.log(this.duplicateSource);for(const v of this.duplicateSource)this.itemOptions.push(v.ITEM)}else console.error("Unexpected response format:",f)},n=>{console.error("Error fetching item data:",n)})}addTallyDetail(){var n=this.form.value;console.log(n),this.result=this.iHeaderSvc.createTallyDetail(this.tally,this.user,this.storer,this.building,n.quantity,n.items,n.lotCode1,n.lotCode2,n.lotCode3,n.rateType,n.dmgReas,n.overrideWeight).subscribe(d=>{if(this.result=d,console.log("Created Tally Detail"),console.log(this.result,"*******"),JSON.parse(this.result[0].data[1].value).sucess){const f=JSON.parse(this.result[0].data[1].value).returnedData.message;this.successMessage(f),this.closeDialog(),this.router.navigateByUrl("/main-nav/tallys/details",{state:this.anyvarible[1]})}else{const f=JSON.parse(this.result[0].data[1].value).returnedData.message;this.failureMessage(f)}})}successMessage(n){_().fire(n,"","success"),this.router.navigate(["/main-nav/tallys/details"])}failureMessage(n){_().fire(n,"","error")}closeDialog(){this.dialogRef.close()}}return p.\u0275fac=function(n){return new(n||p)(t.Y36(U.F0),t.Y36(I.X),t.Y36(P.a),t.Y36(e.qu),t.Y36(U.gz),t.Y36(A.so),t.Y36(A.WI))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-maintain"]],standalone:!0,features:[t.jDz],decls:95,vars:2,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","quantity"],["formControlName","items","label","Item Code","appearance","outline",3,"options"],[1,"form-group1"],["for","inputField",1,"form-heading","full-width"],[1,"form-input"],["matInput","","formControlName","lotCode1",2,"text-transform","uppercase"],["matInput","","formControlName","lotCode2",2,"text-transform","uppercase"],["matInput","","formControlName","lotCode3",2,"text-transform","uppercase"],["formControlName","rateType"],["value","R"],["value","D"],["value","A"],["appearance","outline",1,"full-width2"],["formControlName","dmgReas"],["value","BD"],["value","CC"],["value","CD"],["value","DL"],["value","DP"],["value","FL"],["value","HD"],["value","ID"],["value","IL"],["value","IU"],["value","LD"],["value","LS"],["value","NO"],["value","NR"],["value","PP"],["value","PS"],["value","SF"],["value","TE"],["value","UE"],["value","VI"],["value","WC"],["matInput","","formControlName","overrideWeight"],["mat-raised-button","",1,"buttons","addButton",3,"click"]],template:function(n,d){1&n&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4," Maintain Inbound Details "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return d.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Quantity "),t.qZA(),t._UZ(15,"input",9),t.qZA(),t._UZ(16,"custom-input-autocomplete",10),t.TgZ(17,"div",11)(18,"label",12),t._uU(19,"Lot Codes"),t.qZA(),t.TgZ(20,"div",13)(21,"mat-form-field",8)(22,"mat-label"),t._uU(23,"Lot 1 "),t.qZA(),t._UZ(24,"input",14),t.qZA(),t.TgZ(25,"mat-form-field",8)(26,"mat-label"),t._uU(27,"Lot 2 "),t.qZA(),t._UZ(28,"input",15),t.qZA(),t.TgZ(29,"mat-form-field",8)(30,"mat-label"),t._uU(31,"Lot 3 "),t.qZA(),t._UZ(32,"input",16),t.qZA()()(),t.TgZ(33,"mat-form-field",8)(34,"mat-label"),t._uU(35," Rate Type "),t.qZA(),t.TgZ(36,"mat-select",17)(37,"mat-option",18),t._uU(38,"R - Regular"),t.qZA(),t.TgZ(39,"mat-option",19),t._uU(40," D - Distribution"),t.qZA(),t.TgZ(41,"mat-option",20),t._uU(42,"S - Alternate "),t.qZA()()(),t.TgZ(43,"mat-form-field",21)(44,"mat-label"),t._uU(45," Damage Reason "),t.qZA(),t.TgZ(46,"mat-select",22)(47,"mat-option",23),t._uU(48," BD-Bulkhead Doors Not Secured "),t.qZA(),t.TgZ(49,"mat-option",24),t._uU(50," CC-Case Crushing (Exterior/Secondary Packaging) "),t.qZA(),t.TgZ(51,"mat-option",25),t._uU(52," CD-Case Design "),t.qZA(),t.TgZ(53,"mat-option",26),t._uU(54," DL-Damage Loading "),t.qZA(),t.TgZ(55,"mat-option",27),t._uU(56," DP-Defective Pallets or Slip Sheets "),t.qZA(),t.TgZ(57,"mat-option",28),t._uU(58," FL-Flaps Loose "),t.qZA(),t.TgZ(59,"mat-option",29),t._uU(60," HD-Hidden Damage (Suspected or Actual) "),t.qZA(),t.TgZ(61,"mat-option",30),t._uU(62," ID-Improper Doorway Protection "),t.qZA(),t.TgZ(63,"mat-option",31),t._uU(64," IL-Improper Loading "),t.qZA(),t.TgZ(65,"mat-option",32),t._uU(66," IU-Improper Unloading "),t.qZA(),t.TgZ(67,"mat-option",33),t._uU(68," LD-Lack of Cardboard Dividers/Dunnage "),t.qZA(),t.TgZ(69,"mat-option",34),t._uU(70," LS-Load Shift "),t.qZA(),t.TgZ(71,"mat-option",35),t._uU(72," NO-Nails or Other Hardware "),t.qZA(),t.TgZ(73,"mat-option",36),t._uU(74," NR-Not Reported "),t.qZA(),t.TgZ(75,"mat-option",37),t._uU(76," PP-Pallet Pattern "),t.qZA(),t.TgZ(77,"mat-option",38),t._uU(78," PS-Punctured Bailers/Cases "),t.qZA(),t.TgZ(79,"mat-option",39),t._uU(80," SF-Side Fillers Not Extended "),t.qZA(),t.TgZ(81,"mat-option",40),t._uU(82," TE-Temperature Exposure "),t.qZA(),t.TgZ(83,"mat-option",41),t._uU(84," UE-Unsuitable Equipment "),t.qZA(),t.TgZ(85,"mat-option",42),t._uU(86," VI-Vehicle Impact "),t.qZA(),t.TgZ(87,"mat-option",43),t._uU(88," WC-Wet of Stained (Containers/Secondary Pkg) "),t.qZA()()(),t.TgZ(89,"mat-form-field",8)(90,"mat-label"),t._uU(91,"Override Weight "),t.qZA(),t._UZ(92,"input",44),t.qZA()()(),t.TgZ(93,"button",45),t.NdJ("click",function(){return d.addTallyDetail()}),t._uU(94," Add "),t.qZA()()()()),2&n&&(t.xp6(9),t.Q6J("formGroup",d.form),t.xp6(7),t.Q6J("options",d.itemOptions))},dependencies:[M.m,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,r.Hw,i.lW,o.KE,o.hX,a.Nt,s.gD,u.ey,h.a8,h.dk,h.dn,h.n5,m.j,g.L]}),p})()}}]);