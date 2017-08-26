webpackJsonp([5],{211:function(e,a,t){t(420);var r=t(33)(t(227),t(618),"data-v-6e6373d2",null);e.exports=r.exports},227:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{formValidate:{name:"",mail:"",city:"",gender:"",interest:[],date:"",time:"",desc:""},ruleValidate:{name:[{required:!0,message:"El nombre no puede estar vacío",trigger:"blur"}],mail:[{required:!0,message:"El email no puede estar vacío",trigger:"blur"},{type:"email",message:"El formato del email es incorrecto",trigger:"blur"}],city:[{required:!0,message:"Por favor seleccione la ciudad",trigger:"change"}],gender:[{required:!0,message:"Por favor seleccione sexo",trigger:"change"}],interest:[{required:!0,type:"array",min:1,message:"Elegir al menos una afición",trigger:"change"},{type:"array",max:2,message:"Elige hasta dos pasatiempos",trigger:"change"}],date:[{required:!0,type:"date",message:"Por favor, seleccione la fecha",trigger:"change"}],time:[{required:!0,type:"date",message:"Seleccione la hora",trigger:"change"}],desc:[{required:!0,message:"Ingrese una introducción personal",trigger:"blur"},{type:"string",min:20,message:"La introducción no puede ser inferior a 20 palabras",trigger:"blur"}]}}},methods:{handleSubmit:function(e){this.$Message.success("Esta es una sugerencia exitosa")},handleReset:function(e){this.$Message.warning("Esto es una advertencia")}}}},330:function(e,a,t){a=e.exports=t(205)(),a.push([e.i,".form[data-v-6e6373d2]{width:50%}","",{version:3,sources:["C:/Users/Ita/Proyects/iview2-management-system/src/components/page/form.vue"],names:[],mappings:"AACA,uBACI,SAAW,CACd",file:"form.vue",sourcesContent:["\n.form[data-v-6e6373d2] {\n    width: 50%;\n}\n\n"],sourceRoot:""}])},420:function(e,a,t){var r=t(330);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(206)("0fd712fe",r,!0)},618:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"form"},[t("i-form",{attrs:{"ref:form-validate":"",model:e.formValidate,rules:e.ruleValidate,"label-width":80}},[t("Form-item",{attrs:{label:"Nombre",prop:"name"}},[t("i-input",{attrs:{placeholder:"Introduzca un nombre"},model:{value:e.formValidate.name,callback:function(a){e.formValidate.name=a},expression:"formValidate.name"}})],1),e._v(" "),t("Form-item",{attrs:{label:"Email",prop:"mail"}},[t("i-input",{attrs:{placeholder:"Introduzca un email"},model:{value:e.formValidate.mail,callback:function(a){e.formValidate.mail=a},expression:"formValidate.mail"}})],1),e._v(" "),t("Form-item",{attrs:{label:"Ciudad",prop:"city"}},[t("i-select",{attrs:{value:e.formValidate.city,placeholder:"Elija su ubicación"},on:{"update:value":function(a){e.formValidate.city=a}}},[t("i-option",{attrs:{value:"Caracas"}},[e._v("Caracas")]),e._v(" "),t("i-option",{attrs:{value:"New York"}},[e._v("New York")]),e._v(" "),t("i-option",{attrs:{value:"Londres"}},[e._v("Londres")])],1)],1),e._v(" "),t("Form-item",{attrs:{label:"Seleccionar fecha"}},[t("Row",[t("i-col",{attrs:{span:"11"}},[t("Form-item",{attrs:{prop:"date"}},[t("Date-picker",{attrs:{type:"date",placeholder:"Seleccionar fecha"},model:{value:e.formValidate.date,callback:function(a){e.formValidate.date=a},expression:"formValidate.date"}})],1)],1),e._v(" "),t("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("-")]),e._v(" "),t("i-col",{attrs:{span:"11"}},[t("Form-item",{attrs:{prop:"time"}},[t("Time-picker",{attrs:{type:"time",placeholder:"Elige el tiempo"},model:{value:e.formValidate.time,callback:function(a){e.formValidate.time=a},expression:"formValidate.time"}})],1)],1)],1)],1),e._v(" "),t("Form-item",{attrs:{label:"Sexo",prop:"gender"}},[t("Radio-group",{model:{value:e.formValidate.gender,callback:function(a){e.formValidate.gender=a},expression:"formValidate.gender"}},[t("Radio",{attrs:{label:"male"}},[e._v("Hombre")]),e._v(" "),t("Radio",{attrs:{label:"female"}},[e._v("Mujer")])],1)],1),e._v(" "),t("Form-item",{attrs:{label:"Aficiones",prop:"interest"}},[t("Checkbox-group",{model:{value:e.formValidate.interest,callback:function(a){e.formValidate.interest=a},expression:"formValidate.interest"}},[t("Checkbox",{attrs:{label:"Comer"}}),e._v(" "),t("Checkbox",{attrs:{label:"Dormir"}}),e._v(" "),t("Checkbox",{attrs:{label:"Correr"}}),e._v(" "),t("Checkbox",{attrs:{label:"Ver películas"}})],1)],1),e._v(" "),t("Form-item",{attrs:{label:"Introducción",prop:"desc"}},[t("i-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Por favor ingrese..."},model:{value:e.formValidate.desc,callback:function(a){e.formValidate.desc=a},expression:"formValidate.desc"}})],1),e._v(" "),t("Form-item",[t("i-button",{attrs:{type:"primary"},nativeOn:{click:function(a){e.handleSubmit("formValidate")}}},[e._v("Enviar")]),e._v(" "),t("i-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},nativeOn:{click:function(a){e.handleReset("formValidate")}}},[e._v("Restablecer")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.6084a101082bcd77db8d.js.map