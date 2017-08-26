webpackJsonp([4],{211:function(e,t,a){a(420);var r=a(33)(a(227),a(617),"data-v-6e6373d2",null);e.exports=r.exports},227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{formValidate:{name:"",mail:"",city:"",gender:"",interest:[],date:"",time:"",desc:""},ruleValidate:{name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],city:[{required:!0,message:"请选择城市",trigger:"change"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"至少选择一个爱好",trigger:"change"},{type:"array",max:2,message:"最多选择两个爱好",trigger:"change"}],date:[{required:!0,type:"date",message:"请选择日期",trigger:"change"}],time:[{required:!0,type:"date",message:"请选择时间",trigger:"change"}],desc:[{required:!0,message:"请输入个人介绍",trigger:"blur"},{type:"string",min:20,message:"介绍不能少于20字",trigger:"blur"}]}}},methods:{handleSubmit:function(e){this.$Message.success("这是一条成功的提示")},handleReset:function(e){this.$Message.warning("这是一条警告的提示")}}}},330:function(e,t,a){t=e.exports=a(205)(),t.push([e.i,".form[data-v-6e6373d2]{width:50%}","",{version:3,sources:["C:/Users/Ita/Proyects/iview2-management-system/src/components/page/form.vue"],names:[],mappings:"AACA,uBACI,SAAW,CACd",file:"form.vue",sourcesContent:["\n.form[data-v-6e6373d2] {\r\n    width: 50%;\n}\r\n\r\n"],sourceRoot:""}])},420:function(e,t,a){var r=a(330);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(206)("0fd712fe",r,!0)},617:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form"},[a("i-form",{attrs:{"ref:form-validate":"",model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[a("Form-item",{attrs:{label:"姓名",prop:"name"}},[a("i-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formValidate.name,callback:function(t){e.formValidate.name=t},expression:"formValidate.name"}})],1),e._v(" "),a("Form-item",{attrs:{label:"邮箱",prop:"mail"}},[a("i-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.formValidate.mail,callback:function(t){e.formValidate.mail=t},expression:"formValidate.mail"}})],1),e._v(" "),a("Form-item",{attrs:{label:"城市",prop:"city"}},[a("i-select",{attrs:{value:e.formValidate.city,placeholder:"请选择所在地"},on:{"update:value":function(t){e.formValidate.city=t}}},[a("i-option",{attrs:{value:"beijing"}},[e._v("北京市")]),e._v(" "),a("i-option",{attrs:{value:"shanghai"}},[e._v("上海市")]),e._v(" "),a("i-option",{attrs:{value:"shenzhen"}},[e._v("深圳市")])],1)],1),e._v(" "),a("Form-item",{attrs:{label:"选择日期"}},[a("Row",[a("i-col",{attrs:{span:"11"}},[a("Form-item",{attrs:{prop:"date"}},[a("Date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formValidate.date,callback:function(t){e.formValidate.date=t},expression:"formValidate.date"}})],1)],1),e._v(" "),a("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("-")]),e._v(" "),a("i-col",{attrs:{span:"11"}},[a("Form-item",{attrs:{prop:"time"}},[a("Time-picker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.formValidate.time,callback:function(t){e.formValidate.time=t},expression:"formValidate.time"}})],1)],1)],1)],1),e._v(" "),a("Form-item",{attrs:{label:"性别",prop:"gender"}},[a("Radio-group",{model:{value:e.formValidate.gender,callback:function(t){e.formValidate.gender=t},expression:"formValidate.gender"}},[a("Radio",{attrs:{label:"male"}},[e._v("男")]),e._v(" "),a("Radio",{attrs:{label:"female"}},[e._v("女")])],1)],1),e._v(" "),a("Form-item",{attrs:{label:"爱好",prop:"interest"}},[a("Checkbox-group",{model:{value:e.formValidate.interest,callback:function(t){e.formValidate.interest=t},expression:"formValidate.interest"}},[a("Checkbox",{attrs:{label:"吃饭"}}),e._v(" "),a("Checkbox",{attrs:{label:"睡觉"}}),e._v(" "),a("Checkbox",{attrs:{label:"跑步"}}),e._v(" "),a("Checkbox",{attrs:{label:"看电影"}})],1)],1),e._v(" "),a("Form-item",{attrs:{label:"介绍",prop:"desc"}},[a("i-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入..."},model:{value:e.formValidate.desc,callback:function(t){e.formValidate.desc=t},expression:"formValidate.desc"}})],1),e._v(" "),a("Form-item",[a("i-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.handleSubmit("formValidate")}}},[e._v("提交")]),e._v(" "),a("i-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},nativeOn:{click:function(t){e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.4899f9c0bbe68c4c83d9.js.map