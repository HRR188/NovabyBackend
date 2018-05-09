webpackJsonp([36],{248:function(t,e,a){var s=a(6)(a(494),a(675),null,null);t.exports=s.exports},494:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"businessSingUp",data:function(){return{noteStatus:!1,vuerifyStr:"",accepted:!0,company:"",email:"",password:"",conform:"",country:null,city:""}},created:function(){this.$store.dispatch("countryAc"),this.country=1},watch:{country:function(t,e){var a=this;this.$store.dispatch("cityAc",{id:t}).then(function(t){a.city=t.data.cities[0].id})}},vuerify:{company:{test:"required",message:"Please Company name"},email:{test:"email",message:"Please type correct email address"},password:{test:/\w{6,}/,message:"Please type password with 6-20 characters"},conform:{test:function(t){return""!==this.password&&this.password===this.conform},message:"These passwords don't match Try again"},country:{test:"required",message:"Please select country"},city:{test:"required",message:"Please select city"}},computed:{errors:function(){return this.$vuerify.$errors},invalid:function(){return this.$vuerify.invalid},countryList:function(){return this.$store.state.dict.countryList},citylist:function(){return this.$store.state.dict.citylist}},methods:{handleSubmit:function(){var t=this;if(this.$vuerify.check())if(!1===this.accepted)this.vuerifyStr="Please accept novaby terms and conditions",this.noteStatus=!0,setTimeout(function(){t.noteStatus=!1},1500);else{var e={company_name:this.company,email:this.email,password:this.password,password_confirmation:this.conform,country:this.country,city:this.city};this.$store.dispatch("registerAc",e).then(function(e){200==e.code?t.$router.push({path:"/guide"}):(t.vuerifyStr=e.msg,t.noteStatus=!0,setTimeout(function(){t.noteStatus=!1},1500))})}else{var a=this.$vuerify.$errors,s=[];for(var i in a)s.push(a[i]);this.vuerifyStr=s[0],this.noteStatus=!0,setTimeout(function(){t.noteStatus=!1},1500)}}}}},675:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main"},[a("div",{staticClass:"signup-box auto position-relative"},[a("h1",{staticClass:"text-center"},[t._v("Creat business account")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.handleSubmit(e)}}},[a("ul",[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"company-name",attrs:{type:"text",placeholder:"Company name"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"Password",maxlength:"20"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.conform,expression:"conform"}],staticClass:"password",attrs:{type:"password",placeholder:"Password again",maxlength:"20"},domProps:{value:t.conform},on:{input:function(e){e.target.composing||(t.conform=e.target.value)}}})]),t._v(" "),a("li",{staticClass:"clearfix"},[a("div",{staticClass:"country float-left"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=e.target.multiple?a:a[0]}}},t._l(t.countryList,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))]),t._v(" "),a("div",{staticClass:"city float-right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.city=e.target.multiple?a:a[0]}}},t._l(t.citylist,function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))])])]),t._v(" "),a("div",{staticClass:"accepted text-center"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.accepted,expression:"accepted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.accepted)?t._i(t.accepted,null)>-1:t.accepted},on:{__c:function(e){var a=t.accepted,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=t._i(a,null);i?n<0&&(t.accepted=a.concat(null)):n>-1&&(t.accepted=a.slice(0,n).concat(a.slice(n+1)))}else t.accepted=i}}}),t._v("\n                    You agree that you have read and accepted "),a("a",{attrs:{target:"_blank"}},[t._v("Terms and Conditions")])])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.noteStatus,expression:"noteStatus"}],staticClass:"form-note"},[t._v(t._s(t.vuerifyStr))]),t._v(" "),a("div",{staticClass:"bottom"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit-box",staticStyle:{"margin-bottom":"50px"}},[a("button",{attrs:{type:"submit"}},[t._v("Signup")])])}]}}});
//# sourceMappingURL=36.2b8aa9e87d616cfc0265.js.map