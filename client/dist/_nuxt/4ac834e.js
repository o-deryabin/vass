(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{408:function(t,e,n){var content=n(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("fb98a0f8",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n.r(e);var r={props:["message","snackbar","timeout"]},o=n(24),c=n(49),l=n.n(c),d=n(267),v=n(501),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v("\n      Закрыть\n    ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n  "+t._s(t.message)+"\n\n  ")])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VSnackbar:v.a})},411:function(t,e,n){"use strict";n.r(e);n(7),n(8),n(5),n(10),n(6),n(11);var r=n(2),o=n(22);n(78);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{Snackbar:n(409).default},props:["dialog"],data:function(){return{valid:!1,nameRules:[function(t){return!!t||"Имя обязательно"}],telRules:[function(t){return!!t||"Телефон обязателен"}],snackbar:!1,message:"",timeout:2e3,form:{firstname:"",tel:""}}},methods:{send:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),t.form.firstname&&t.form.tel){e.next=4;break}return t.message="не все поля заполнены",e.abrupt("return",t.snackbar=!0);case 4:return e.next=6,t.$axios.$post("/api/email/send",l({},t.form));case 6:n=e.sent,t.message=n.message,t.snackbar=!0;case 9:case"end":return e.stop()}}),e)})))()}}},v=(n(412),n(24)),f=n(49),m=n.n(f),_=n(267),h=n(425),x=n(407),y=n(522),k=n(524),w=n(523),O=n(526),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"dialog__content"},[n("v-card-text",[n("h2",{staticClass:"sub-title"},[t._v("Оставить заявку")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"d-md-flex align-md-center mt-4",attrs:{md:"6",cols:"12"}},[n("h6",{staticClass:"section__title section__title--18-black"},[t._v("\n          Оставьте заявку и получите бесплатную консультауцию\n        ")])]),t._v(" "),n("v-col",{attrs:{md:"6",cols:"12"}},[n("a",{staticClass:"section__link section__link--tel",attrs:{href:"tel:+7(747)266-66-82"}},[t._v("+7 (747) 266-66-82")]),t._v(" "),n("v-row",{staticClass:"my-md-8 my-4"},[n("v-col",{attrs:{md:"6",cols:"12"}},[n("a",{staticClass:"section__link",attrs:{href:"mailto:hello@vass.kz"}},[t._v("hello@vass.kz")])]),t._v(" "),n("v-col",{attrs:{md:"6",cols:"12"}},[n("a",{staticClass:"section__link",attrs:{href:"https://www.instagram.com/vasskz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("instagram")])])],1),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)}}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Имя",required:""},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}}),t._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+7(###)###-##-##",expression:"'+7(###)###-##-##'"}],attrs:{label:"Телефон",rules:t.telRules,required:""},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}}),t._v(" "),n("button",{staticClass:"section__btn",attrs:{type:"submit"}},[t._v("Отправить")])],1)],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog.value=!1}}},[t._v("Закрыть")])],1),t._v(" "),n("Snackbar",{attrs:{message:t.message,timeout:t.timeout,snackbar:t.snackbar}})],1)}),[],!1,null,"05a675f8",null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:h.a,VCardActions:x.a,VCardText:x.b,VCol:y.a,VForm:k.a,VRow:w.a,VTextField:O.a})},412:function(t,e,n){"use strict";n(408)},413:function(t,e,n){var r=n(15)(!1);r.push([t.i,".dialog__content[data-v-05a675f8]{padding:20px 0}@media(min-width:960px){.dialog__content[data-v-05a675f8]{padding:60px}}.section__btn[data-v-05a675f8]{margin-top:15px;display:block;width:100%;color:#fff}@media(min-width:960px){.section__btn[data-v-05a675f8]{margin-top:30px}}.section__link[data-v-05a675f8]{font-family:Inter;font-style:normal;font-weight:400;font-size:16px;line-height:130%;letter-spacing:.07em;color:#000;text-decoration:none}@media(min-width:960px){.section__link--tel[data-v-05a675f8]{font-size:29px}}",""]),t.exports=r},416:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7132a15d",content,!0,{sourceMap:!1})},417:function(t,e,n){var r=n(15)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},427:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("d8600bae",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n(427)},452:function(t,e,n){var r=n(15)(!1);r.push([t.i,".section__content[data-v-0c5a7118]{margin-top:25px;border-bottom:1px solid #aeaeae}@media(min-width:960px){.section__content[data-v-0c5a7118]{margin-top:55px}}.section__title[data-v-0c5a7118]{letter-spacing:.07em}.section__title--26[data-v-0c5a7118]{line-height:80%}@media(min-width:960px){.section__days[data-v-0c5a7118],.section__price[data-v-0c5a7118]{text-transform:uppercase}}.section__description[data-v-0c5a7118]{margin-top:20px;margin-bottom:25px}@media(min-width:960px){.section__description[data-v-0c5a7118]{margin-top:35px;margin-bottom:50px}}.section__btn[data-v-0c5a7118]{padding:25px 50px;margin:30px 0 0;color:#fff}@media(min-width:960px){.section__btn[data-v-0c5a7118]{padding:30px 99px;margin:90px auto 0;display:block}}",""]),t.exports=r},453:function(t,e,n){"use strict";n(7),n(8),n(5),n(10),n(6),n(11);var r=n(2),o=(n(416),n(34));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},488:function(t,e,n){"use strict";n.r(e);var r={components:{Modal:n(411).default},data:function(){return{data:[{title:"Сайт",days:"14 дней",price:"400,000 тенге",description:"Сайт - для описания и продвижения ваших услуг или товаров. До 10 страниц. Удобная админ панель для пользования."},{title:"Интернет - магазин",days:"25 дней",price:"500,000 тенге",description:"Интернет-магазин - готовый к продаже ваших товаров уже через 25 дней. Неограниченное количество товаров. Продуманный каталог."},{title:"Мобильное приложение",days:"20 дней",price:"400,000 тенге",description:"Мобильное приложение – поможет бизнесу увеличить прибыль и автоматизировать процессы. Приложения для Android и iOS с удобным UI интерфейсом и адаптированное под любое устройство."}]}}},o=(n(451),n(24)),c=n(49),l=n.n(c),d=n(522),v=n(406),f=n(527),m=n(453),_=n(523),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--price",attrs:{id:"price"}},[n("v-container",[n("h2",{staticClass:"sub-title"},[t._v("Цены и сроки")]),t._v(" "),n("v-divider",{staticClass:"section__divider"}),t._v(" "),t._l(t.data,(function(e,r){return n("v-row",{key:r,staticClass:"section__content"},[n("v-col",{attrs:{md:"4",cols:"12"}},[n("h4",{staticClass:"section__title section__title--26"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),t._v(" "),n("v-col",{attrs:{md:"8",cols:"12"}},[n("v-row",[n("v-col",{attrs:{md:"4",cols:"5"}},[n("h6",{staticClass:"section__days section__title section__title--18-black"},[t._v("\n              "+t._s(e.days)+"\n            ")])]),t._v(" "),n("v-col",{attrs:{md:"8",cols:"7"}},[n("h6",{staticClass:"section__price section__title section__title--18-grey"},[t._v("\n              "+t._s(e.price)+"\n            ")])])],1),t._v(" "),n("p",{staticClass:"section__description section__description--18"},[t._v("\n          "+t._s(e.description)+"\n        ")])],1)],1)})),t._v(" "),n("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"900"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("button",t._g(t._b({staticClass:"section__btn"},"button",o,!1),r),[t._v("\n          Оставить заявку\n        ")])]}},{key:"default",fn:function(dialog){return[n("Modal",{attrs:{dialog:dialog}})]}}])})],2)],1)}),[],!1,null,"0c5a7118",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VDialog:f.a,VDivider:m.a,VRow:_.a})}}]);